# -*- coding: utf-8 -*-
"""Verificación Yoast del artículo 'carga-mental-en-la-pareja' (CA+ES)."""
import re, sys

src = open("C:/Users/Usuario/Documents/Hermes/espai-emocions-repo/src/lib/articles-part15.ts", encoding="utf-8").read()
m = re.search(r'slug: "carga-mental-en-la-pareja"[\s\S]*?blocksCA: \[([\s\S]*?)\n    \],\n    blocksES: \[([\s\S]*?)\n    \],\n  \},\n\];', src)
assert m, "artículo no encontrado en el ts"
ca_raw, es_raw = m.group(1), m.group(2)

def extract_blocks(raw):
    blocks = []
    for fm in re.finditer(r'type: "faq",\s*items: \[([\s\S]*?)\s*\]', raw):
        for qm in re.finditer(r'question: "([\s\S]*?)",\s*answer: "([\s\S]*?)"', fm.group(1)):
            blocks.append(("faq", qm.group(1), qm.group(2)))
    raw_no_faq = re.sub(r'type: "faq"[\s\S]*?\]', "", raw)
    for bm in re.finditer(r'type: "(paragraph|heading)",\s*text: "([\s\S]*?)"', raw_no_faq):
        blocks.append((bm.group(1), bm.group(2), None))
    return blocks

ca = extract_blocks(ca_raw)
es = extract_blocks(es_raw)

# Lista de palabras de transición fiel al listado de Yoast (ES/CA)
TRANS_ES = [
    "en resumen", "en conclusión", "en definitiva", "en pocas palabras", "además",
    "así como", "del mismo modo", "de igual manera", "de la misma forma", "igualmente",
    "de hecho", "por ejemplo", "es decir", "a saber", "o sea", "esto es", "por ejemplo",
    "en primer lugar", "en segundo lugar", "primero", "segundo", "por último",
    "por un lado", "por otro lado", "por una parte", "por otra parte",
    "por lo tanto", "por consiguiente", "en consecuencia", "por ende", "así que",
    "porque", "dado que", "a causa de", "debido a", "por esta razón",
    "sin embargo", "no obstante", "aunque", "a pesar de", "aun así", "ahora bien",
    "por el contrario", "en cambio", "por contra",
    "por supuesto", "evidentemente", "claro", "obviamente", "naturalmente",
    "así", "entonces", "por eso", "por ello", "también", "más bien", "al contrario",
    "al final", "en este sentido", "a menudo", "a veces", "cuando", "ya que",
    "mientras", "mientras que", "después", "antes", "posteriormente", "finalmente",
    "en resumen", "brevemente", "dicho de otro modo", "en otras palabras",
]
TRANS_CA = [
    "en resum", "en conclusió", "en definitiva", "en poques paraules", "a més",
    "així com", "del mateix mode", "de la mateixa manera", "igualment",
    "de fet", "per exemple", "és a dir", "a saber", "o sigui", "açò és",
    "en primer lloc", "en segon lloc", "primer", "segon", "per últim",
    "d'una banda", "d'altra banda", "per una part", "per altra part",
    "per tant", "per consegüent", "en conseqüència", "així que",
    "perquè", "atès que", "a causa de", "degut a", "per aquesta raó",
    "tanmateix", "no obstant això", "encara que", "malgrat", "ara bé",
    "al contrari", "en canvi", "per contra",
    "per descomptat", "evidentment", "clar", "obviament", "naturalment",
    "així", "llavors", "per això", "per això mateix", "també", "més aviat",
    "al capdavall", "en aquest sentit", "sovint", "a vegades", "quan", "ja que",
    "mentre", "mentrestant", "mentre que", "després", "abans", "finalment",
    "breument", "dit d'una altra manera", "en altres paraules", "així doncs",
]
TRANS_ES = sorted(set(TRANS_ES), key=len, reverse=True)
TRANS_CA = sorted(set(TRANS_CA), key=len, reverse=True)

def has_trans(s, trans):
    sl = " " + s.lower() + " "
    return any(re.search(r'(?<![\wáéíóúàèòçü])' + re.escape(t) + r'(?![\wáéíóúàèòçü])', sl) for t in trans)

def stats(blocks, keyphrase, trans):
    paras = [b[1] for b in blocks if b[0] == "paragraph"]
    heads = [b[1] for b in blocks if b[0] == "heading"]
    faqs = [b for b in blocks if b[0] == "faq"]
    full_text = " ".join(paras)
    first_para = paras[0] if paras else ""

    kp_first = keyphrase.lower() in first_para.lower()
    kp_h2 = any(keyphrase.lower() in h.lower() for h in heads)
    words = full_text.split()
    n = len(words)
    kp_count = full_text.lower().count(keyphrase.lower())
    # Fórmula Yoast: (ocurrencias × nº palabras de la keyphrase) / total × 100
    kp_words = len(keyphrase.split())
    density = kp_count * kp_words / n * 100 if n else 0

    def sentences(text):
        s = re.sub(r'[«»"]', "", text)
        parts = re.split(r'(?<=[.!?…])\s+', s)
        return [p for p in parts if len(p.split()) > 2]

    all_sent = []
    for p in paras:
        all_sent += sentences(p)
    for f in faqs:
        all_sent += sentences(f[1])
        all_sent += sentences(f[2])
    long_sent = [s for s in all_sent if len(s.split()) > 20]
    pct_long = len(long_sent) / len(all_sent) * 100 if all_sent else 0
    trans_count = sum(1 for s in all_sent if has_trans(s, trans))
    pct_trans = trans_count / len(all_sent) * 100 if all_sent else 0
    long_paras = [p for p in paras if len(p.split()) > 150]

    sections = []
    cur = []
    for b in blocks:
        if b[0] == "heading":
            if cur: sections.append(cur); cur = []
        else:
            w = b[1].split() if b[0] == "paragraph" else b[2].split()
            cur.append(len(w))
    if cur: sections.append(cur)
    over_sections = [sum(s) for s in sections if sum(s) > 300]
    total_words = n + sum(len(b[2].split()) for b in faqs)

    return {
        "keyphrase": keyphrase,
        "kp_in_first_para": kp_first,
        "kp_in_h2": kp_h2,
        "density_pct": round(density, 2),
        "kp_count": kp_count,
        "word_count": total_words,
        "sentences": len(all_sent),
        "pct_long_sentences": round(pct_long, 1),
        "pct_transitions": round(pct_trans, 1),
        "paras_over_150w": len(long_paras),
        "sections_over_300w": over_sections,
    }

print("=== ES ===")
res_es = stats(es, "carga mental en la pareja", TRANS_ES)
for k, v in res_es.items(): print(f"  {k}: {v}")
print("=== CA ===")
res_ca = stats(ca, "càrrega mental a la parella", TRANS_CA)
for k, v in res_ca.items(): print(f"  {k}: {v}")

tm = re.search(r'slug: "carga-mental-en-la-pareja"[\s\S]*?titleCA: "([\s\S]*?)"[\s\S]*?titleES: "([\s\S]*?)"[\s\S]*?excerptCA: "([\s\S]*?)"[\s\S]*?excerptES: "([\s\S]*?)"', src)
tca, tes, eca, ees = tm.groups()
print("=== META ===")
print(f"  titleCA len: {len(tca)} | titleES len: {len(tes)}")
print(f"  excerptCA len: {len(eca)} | excerptES len: {len(ees)}")
print(f"  kp in titleES: {'carga mental en la pareja' in tes}")
print(f"  kp in titleCA: {'càrrega mental a la parella' in tca}")

fails = []
if not res_es["kp_in_first_para"]: fails.append("ES kp no en 1er párrafo")
if not res_es["kp_in_h2"]: fails.append("ES kp no en H2")
if not res_ca["kp_in_first_para"]: fails.append("CA kp no en 1er párrafo")
if not res_ca["kp_in_h2"]: fails.append("CA kp no en H2")
for tag, r in (("ES", res_es), ("CA", res_ca)):
    if not (0.5 <= r["density_pct"] <= 3.0): fails.append(f"{tag} densidad {r['density_pct']}")
    if r["pct_long_sentences"] > 25: fails.append(f"{tag} frases largas {r['pct_long_sentences']}%")
    if r["pct_transitions"] < 30: fails.append(f"{tag} transiciones {r['pct_transitions']}%")
    if r["paras_over_150w"]: fails.append(f"{tag} párrafos >150w: {r['paras_over_150w']}")
    if r["sections_over_300w"]: fails.append(f"{tag} secciones >300w: {r['sections_over_300w']}")
    if not (800 <= r["word_count"] <= 1200): fails.append(f"{tag} word_count {r['word_count']}")
if not (120 <= len(ees) <= 156): fails.append(f"excerptES {len(ees)}")
if not (120 <= len(eca) <= 156): fails.append(f"excerptCA {len(eca)}")

if fails:
    print("\nFALLOS:", fails)
    sys.exit(1)
print("\nTODO OK")