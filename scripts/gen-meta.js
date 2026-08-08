// Script para generar article-meta.ts con solo metadatos
import fs from 'fs';

function extractMeta(file) {
  const content = fs.readFileSync(file, 'utf8');
  const matches = [...content.matchAll(/slug:\s*"([^"]+)"[\s\S]*?categoryCA:\s*"([^"]+)"[\s\S]*?categoryES:\s*"([^"]+)"[\s\S]*?titleCA:\s*"([^"]+)"[\s\S]*?titleES:\s*"([^"]+)"[\s\S]*?excerptCA:\s*"([^"]+)"[\s\S]*?excerptES:\s*"([^"]+)"[\s\S]*?datePublished:\s*"([^"]+)"/g)];
  return matches.map(m => ({
    slug: m[1], categoryCA: m[2], categoryES: m[3],
    titleCA: m[4], titleES: m[5],
    excerptCA: m[6], excerptES: m[7],
    datePublished: m[8]
  }));
}

const articleFiles = fs
  .readdirSync('src/lib')
  .filter(file => /^articles(?:-part\d+)?\.ts$/.test(file))
  .sort((a, b) => {
    const partA = a === 'articles.ts' ? 1 : Number(a.match(/part(\d+)/)?.[1]);
    const partB = b === 'articles.ts' ? 1 : Number(b.match(/part(\d+)/)?.[1]);
    return partA - partB;
  });

const meta = articleFiles.flatMap(file => extractMeta(`src/lib/${file}`));

const seen = new Set();
const unique = meta.filter(a => {
  if (seen.has(a.slug)) return false;
  seen.add(a.slug);
  return true;
}).sort((a, b) => b.datePublished.localeCompare(a.datePublished));

const output = `// Metadatos ligeros de articulos para el blog listing (sin contenido de bloques).
// Generado automaticamente. No editar manualmente.
export interface ArticleMeta {
  slug: string;
  categoryCA: string;
  categoryES: string;
  titleCA: string;
  titleES: string;
  excerptCA: string;
  excerptES: string;
  datePublished: string;
}

export const articleMeta: ArticleMeta[] = ${JSON.stringify(unique, null, 2)};`;

fs.writeFileSync('src/lib/article-meta.ts', output);
console.log('Written src/lib/article-meta.ts (' + (output.length/1024).toFixed(0) + 'KB)');
console.log('Articles: ' + unique.length);
