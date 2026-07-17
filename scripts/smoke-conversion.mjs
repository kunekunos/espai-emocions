import { spawn } from "node:child_process";

const port = 3100;
const baseUrl = `http://127.0.0.1:${port}`;
const nextCli = "node_modules/next/dist/bin/next";

const server = spawn(process.execPath, [nextCli, "start", "-p", String(port)], {
  cwd: process.cwd(),
  env: {
    ...process.env,
    CONTACT_FORM_ENABLED: "false",
    PRIVACY_NOTICE_READY: "false",
  },
  stdio: ["ignore", "pipe", "pipe"],
});

let serverOutput = "";
server.stdout.on("data", (chunk) => {
  serverOutput += chunk.toString();
});
server.stderr.on("data", (chunk) => {
  serverOutput += chunk.toString();
});

function assert(condition, label) {
  if (!condition) throw new Error(`FALLO: ${label}`);
  console.log(`OK: ${label}`);
}

async function request(path, options) {
  return fetch(`${baseUrl}${path}`, options);
}

async function waitForServer() {
  for (let attempt = 0; attempt < 40; attempt += 1) {
    try {
      const response = await request("/");
      if (response.ok) return;
    } catch {
      // El servidor todavía está arrancando.
    }
    await new Promise((resolve) => setTimeout(resolve, 250));
  }
  throw new Error(`El servidor no arrancó.\n${serverOutput}`);
}

async function run() {
  await waitForServer();

  const home = await request("/");
  const homeHtml = await home.text();
  assert(home.status === 200, "Inicio responde 200");
  assert(/wa\.me\/34630643243/.test(homeHtml), "WhatsApp real está disponible");
  assert(!/<form[\s>]/i.test(homeHtml), "El formulario permanece desactivado sin configuración legal");
  assert(!/(menos de 24|menys de 24)/i.test(homeHtml), "No se promete respuesta en menos de 24 horas");

  const article = await request("/blog/setting-terapeutico-por-que-importa-espacio");
  assert(article.status === 200, "Artículo nuevo responde 200");
  const secondArticle = await request("/blog/cambiar-psicologo-no-encajo");
  assert(secondArticle.status === 200, "Segundo artículo nuevo responde 200");
  const oldArticle = await request("/blog/psicologo-para-mayores");
  assert(oldArticle.status === 404, "Slug antiguo responde 404 real");
  const inventedArticle = await request("/blog/slug-que-no-existe");
  assert(inventedArticle.status === 404, "Slug inexistente responde 404 real");

  const privacy = await request("/privacidad");
  const privacyHtml = await privacy.text();
  assert(privacy.status === 200, "Privacidad responde 200");
  assert(/pendiente de validaci/i.test(privacyHtml), "Privacidad muestra un estado pendiente seguro");

  const contact = await request("/api/contact", {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: "{}",
  });
  const contactBody = await contact.text();
  assert(contact.status === 503, "La API rechaza envíos si está desactivada");
  assert(/form_disabled/.test(contactBody), "La API identifica el formulario desactivado");

  const sitemap = await request("/sitemap.xml");
  const sitemapXml = await sitemap.text();
  const articleCount = (sitemapXml.match(/<loc>https:\/\/espaiemocions\.es\/blog\//g) ?? []).length;
  assert(sitemap.status === 200, "Sitemap responde 200");
  assert(articleCount === 35, "Sitemap contiene 35 artículos");
  assert(sitemapXml.includes("setting-terapeutico-por-que-importa-espacio"), "Sitemap incluye artículos nuevos");
  assert(sitemapXml.includes("seguro-privado-cubre-psicologia-barcelona"), "Sitemap conserva el artículo añadido en main");
  assert(!sitemapXml.includes("psicologo-para-mayores"), "Sitemap excluye el slug antiguo");
}

try {
  await run();
} finally {
  server.kill("SIGTERM");
  await new Promise((resolve) => {
    const timer = setTimeout(resolve, 2_000);
    server.once("exit", () => {
      clearTimeout(timer);
      resolve();
    });
  });
}
