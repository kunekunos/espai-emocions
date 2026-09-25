# -*- coding: utf-8 -*-
"""Verifica umbrales Yoast sobre un articulo del blog (CA y ES).

Uso: python scripts/yoast_check.py [slug]
Sin argumento, usa el ultimo articulo aniadido en articles-part13.ts.
Umbrales: frases >20 palabras <=25%, transiciones >=30%,
parrafos <=150 palabras, secciones H2 <=300 palabras.
"""
import re, sys, glob

SLUG = sys.argv[1] if len(sys.argv) > 1 else None

def find_article():
    global SLUG
    def part_num(f):
        m = re.search(r"part(\d+)", f)
        return int(m.group(1)) if m else 999
    files = sorted(glob.glob("src/lib/articles-part*.ts"), key=part_num) + ["src/lib/articles.ts"]
    if SLUG:
        for f in files:
            raw = open(f, encoding="utf-8").read()
            if f'slug: "{SLUG}"' in raw:
                return f, raw
        raise SystemExit(f"slug no encontrado: {SLUG}")
    # sin slug: el ultimo del ultimo part
    f = files[-2] if len(files) > 1 else files[0]
    raw = open(f, encoding="utf-8").read()
    slugs = re.findall(r'^\s*slug:\s*"([^"]+)"', raw, re.M)
    SLUG = slugs[-1]
    return f, raw

SRC_FILE, raw = find_article()
start = raw.index(f'slug: "{SLUG}"')
chunk = raw[start:]

def extract_blocks(chunk, key):
    i = chunk.index(key)
    j = chunk.index("blocksES" if key == "blocksCA" else "", i) if key == "blocksCA" else len(chunk)
    if key == "blocksCA":
        seg = chunk[i:j]
    else:
        seg = chunk[i:]
    return seg

def blocks_to_text(seg):
    """Convierte los bloques a texto plano con marcas de seccion H2."""
    # headings
    out = []
    heads = re.findall(r'type:\s*"heading",\s*\n\s*text:\s*"([^"]+)"', seg)
    paras = re.findall(r'type:\s*"paragraph",\s*\n\s*text:\s*"([^"]+)"', seg)
    faqs = re.findall(r'question:\s*"([^"]+)",\s*\n\s*answer:\s*\n?\s*"([^"]+)"', seg)
    if not paras and not heads:
        return ""
    # Reconstruir en orden: recorrer el segmento secuencialmente
    pos = 0
    parts = []
    pattern = re.compile(
        r'type:\s*"heading",\s*\n\s*text:\s*"([^"]+)"|'
        r'type:\s*"paragraph",\s*\n\s*text:\s*"([^"]+)"|'
        r'question:\s*"([^"]+)",\s*\n\s*answer:\s*\n?\s*"([^"]+)"'
    )
    for m in pattern.finditer(seg):
        if m.group(1):
            parts.append(("\n\n## " + m.group(1) + "\n\n"))
        elif m.group(2):
            parts.append(m.group(2) + " ")
        else:
            parts.append("<h3>" + m.group(3) + "</h3><p>" + m.group(4) + "</p> ")
    return "".join(parts)

seg_ca = extract_blocks(chunk, "blocksCA")
seg_es = extract_blocks(chunk, "blocksES")

TRANSITIONS = {
    "ca": ["però", "a més", "de fet", "en canvi", "per exemple", "ara bé",
           "tanmateix", "en definitiva", "al capdavall", "normalment",
           "en aquest sentit", "d'una banda", "de l'altra", "per això",
           "així doncs", "a més a més", "no obstant", "per tant", "també",
           "a vegades", "moltes vegades", "finalment", "després"],
    "es": ["pero", "además", "de hecho", "en cambio", "por ejemplo",
           "ahora bien", "sin embargo", "en definitiva", "al final",
           "normalmente", "en este sentido", "por eso", "por un lado",
           "por otro", "no obstante", "por tanto", "también", "a veces",
           "muchas veces", "finalmente", "después", "así pues"],
}

def check(lang, text):
    if not text.strip():
        print(f"[{lang}] SIN TEXTO — error de extraccion")
        return False
    ok = True
    # Separar frases por . ; : ? ! seguidos de espacio
    sentences = [s.strip() for s in re.split(r"[.;:?!]\s+", text) if s.strip()]
    n = len(sentences)
    # 1. frases > 20 palabras <= 25%
    long_s = [s for s in sentences if len(s.split()) > 20]
    pct_long = 100.0 * len(long_s) / n if n else 0
    # 2. transiciones >= 30% de frases
    tr = TRANSITIONS[lang]
    n_tr = sum(1 for s in sentences if any(t in s.lower() for t in tr))
    pct_tr = 100.0 * n_tr / n if n else 0
    # 3. parrafos <= 150 palabras (parrafos = bloques de texto separados por doble salto o h3)
    paras = [p for p in re.split(r"\n\n|</p>", text) if p.strip() and not p.startswith("##")]
    long_paras = [(len(p.split()), p[:60]) for p in paras if len(p.split()) > 150]
    # 4. secciones H2 <= 300 palabras
    sections = re.split(r"\n\n## ", text)
    sec_sizes = []
    for s in sections[1:]:
        title = s.split("\n")[0]
        words = len(re.sub(r"<[^>]+>", " ", s).split())
        sec_sizes.append((title, words))
    over = [t for t, w in sec_sizes if w > 300]

    print(f"=== {lang.upper()} ===")
    print(f"Frases: {n} | >20 palabras: {len(long_s)} ({pct_long:.0f}%) — umbral <=25% {'OK' if pct_long <= 25 else 'FALLA'}")
    print(f"Con transicion: {n_tr}/{n} ({pct_tr:.0f}%) — umbral >=30% {'OK' if pct_tr >= 30 else 'FALLA'}")
    print(f"Parrafos >150 palabras: {len(long_paras)} {'OK' if not long_paras else 'FALLA ' + str(long_paras)}")
    print(f"Secciones H2: {len(sec_sizes)} | >300 palabras: {over if over else 'ninguna'} {'OK' if not over else 'FALLA'}")
    if pct_long > 25: ok = False
    if pct_tr < 30: ok = False
    if long_paras: ok = False
    if over: ok = False
    return ok

ok_ca = check("ca", blocks_to_text(seg_ca))
ok_es = check("es", blocks_to_text(seg_es))
sys.exit(0 if (ok_ca and ok_es) else 1)