# -*- coding: utf-8 -*-
"""Genera el artículo 'tristeza-de-otono' (2026-10-26) para articles-part17.ts.

Verifica normativa Yoast antes de escribir:
- keyphrase en título, primer párrafo, algún H2, densidad 0.5-3%
- title 40-66 chars, excerpt 120-156 chars
- frases >20 palabras <=25%
- palabras de transición >=30% de frases
- párrafos <=150 palabras, secciones entre H2 <=300 palabras
- palabras prohibidas (tips/trucos/hacks/energía/...)
Con --write inserta el bloque TS en src/lib/articles-part17.ts antes del cierre.
"""
import json
import re
import sys

KEY_ES = "tristeza de otoño"
KEY_CA = "tristesa de tardor"

TITLE_CA = "La tristesa de tardor: quan la llum se'n va massa aviat"
TITLE_ES = "La tristeza de otoño: cuando la luz se va demasiado pronto"
EXC_CA = ("La tristesa de tardor no és exageració: és la resposta del cos a una "
          "llum que se'n va. Què és, per què baixa l'ànim i com travessar l'estació.")
EXC_ES = ("La tristeza de otoño no es exageración: es la respuesta del cuerpo a "
          "una luz que se va. Qué es, por qué baja el ánimo y cómo atravesar la estación.")

BLOCKS_CA = [
    ("paragraph", "La tristesa de tardor arriba cada any sense avisar. Un dia surts de la feina i ja és fosc; dues setmanes després, l'ànim també ha baixat. A la consulta de psicologia, a Barcelona, aquest avís es repeteix cada octubre. Ho diuen persones adultes i competents, amb la vida més o menys en ordre. No entenen per què es senten més apagades, més lentes i més fràgils."),
    ("paragraph", "En aquest article volem posar nom a aquesta baixada estacional. Veurem què és la tristesa de tardor, què la sosté i com travessar-la sense exigir-te l'ànim de l'estiu. De fet, no sempre hi ha un problema al darrere. A vegades només hi ha un cos responent amb honestedat al canvi de llum, i saber-ho canvia força la manera de portar-ho."),
    ("heading", "Què és la tristesa de tardor"),
    ("paragraph", "La tristesa de tardor és una baixada de l'estat d'ànim lligada al canvi d'estació. Apareix quan els dies s'escurcen i la llum natural escasseja. Es nota en forma de cansament d'hora, menys ganes de fer plans i un ànim més gris. No és peresa, ni dramatisme, ni feblesa; és una resposta de l'organisme a un senyal real."),
    ("paragraph", "La importància d'entendre-la bé és no confondre-la amb altres coses. Si saps què et passa, deixes de barallar-t'hi i comences a acompanyar-te d'una altra manera. En canvi, si la vius com un error personal, la castigues amb exigència: més plans, més ritme, més pressa. I aquesta baralla, gairebé sempre, engrandeix l'esgotament."),
    ("heading", "Llum, rellotge intern i ànim: per què baixa a la tardor"),
    ("paragraph", "La llum no és un detall decoratiu per al cervell; és el seu rellotge principal. Amb la foscor d'hora, el cos fabrica més melatonina, l'hormona que prepara la son. L'ànim i les ganes de fer s'ajusten en conseqüència. El canvi d'hora de finals d'octubre avança la nit just quan més pesa. De cop, les sis de la tarda semblen les deu."),
    ("paragraph", "A més, la vida social canvia amb l'estació. Els plans a l'aire lliure s'apaguen, el cos demana interior i el calendari s'omple d'obligacions. Per a moltes persones adultes, la tardor funciona com un descens de revolucions obligat. Normalment no és res greu; tanmateix, convé prendre'l seriosament quan la baixada s'instal·la setmanes."),
    ("heading", "Quan la tristesa de tardor toca alguna cosa més antiga"),
    ("paragraph", "A vegades, la tardor no baixa l'ànim només per la llum. També funciona com un mirall: l'any s'acaba, torna la rutina i arriba l'hora dels balanços. Estacions com aquesta activen preguntes adultes: en què se'n va anar l'any, què es va posposar, quins canvis segueixen esperant. De fet, molts processos de revisió vital comencen a la tardor, no al gener."),
    ("paragraph", "Hi ha alguna cosa més. L'arribada del fred redueix les trobades i, per a qui ja venia sentint-se sol, l'estació engrandeix la distància. En aquest sentit, la tristesa de tardor pot ser la punta visible d'alguna cosa que ja hi era. A sota, a vegades, hi ha un dol sense tancar, una relació a mitges o una feina que ja no representa. Per això convé mirar-la amb curiositat, i no només amb paciència."),
    ("heading", "Com travessar la tardor sense exigir-te l'ànim de l'estiu"),
    ("paragraph", "El primer és no barallar-se amb la temporada. La tardor no s'arregla; s'habita. Ajuden gestos senzills: llum natural a primera hora, caminar encara que sigui mitja hora, protegir la son. Sostenir uns pocs vincles que alimentin també pesa més del que sembla. No són receptes màgiques; són maneres de treballar amb el cos i no contra ell. Amb ritme diferent, la tardor també fa lloc."),
    ("paragraph", "També ajuda ajustar les expectatives. A la tardor pots seguir volent coses; simplement, algunes costen més. Triar amb criteri quins plans es mantenen i quins s'ajornen és maduresa, no rendició. I quan l'ànim no acompanyi, la coherència pot seguir existint: fer el que importa encara que no apeteixi del tot. Al capdavall, la temporada també ensenya a estimar-se a un ritme més lent."),
    ("heading", "Quan convé consultar un psicòleg"),
    ("paragraph", "La frontera que convé vigilar és la persistència. Si l'ànim baix s'instal·la més de dues o tres setmanes, alguna cosa més que l'estació està passant. També compta l'impacte: la son trencada, la feina que costa sostenir, els vincles que es refreden. En aquell punt, un psicòleg ajuda a distingir si és només la tardor o si hi ha alguna cosa més al darrere."),
    ("paragraph", "Consultar no és dramatitzar. De fet, és la manera més honesta de saber què està passant. La teràpia també sosté allò que la tardor activa: el posposat, el callat, allò que demana revisió. L'estació, en canvi, no ho resol sola."),
    ("heading", "Preguntes freqüents sobre la tristesa de tardor"),
    ("faq", [
        ("La tristesa de tardor és una depressió?",
         "No sempre. Pot ser una adaptació passatgera a la llum. Tanmateix, si s'allarga, trenca la son o buida allò que abans agradava, pot ser l'inici d'un estat depressiu. La diferència la marquen la persistència i l'impacte, no la intensitat d'un dia dolent. Amb dubtes, una primera visita aclareix molt."),
        ("És normal sentir-se més trist quan es fa fosc aviat?",
         "Sí, i és més habitual del que es explica. El cos llegeix la foscor d'hora com una ordre de recollir-se. El problema no és sentir-ho; és creure que falles per sentir-ho. Anomenar-ho treu, de fet, força pes."),
    ]),
    ("heading", "Una estació per habitar a un altre ritme"),
    ("paragraph", "La tristesa de tardor no és un enemic a expulsar. És una estació que demana un altre ritme: més interior, més calma, menys exigència. Les persones adultes que la travessen millor no són les que no la senten. Són les que l'escolten sense obeir-la i cuiden la força del que ve. Al capdavall, baixar revolucions també és una forma de maduresa."),
    ("paragraph", "Si aquesta tardor l'ànim se t'ha posat massa gris, es pot mirar amb companyia. A Espai Emocions, centre de psicologia de Barcelona, fem psicoteràpia per a adults i parelles, amb psicòlegs col·legiats, de manera presencial o en línia. Pots demanar una primera visita des de la pàgina de contacte o escriure'ns per WhatsApp. L'estació passa; allò que sents mentrestant també mereix cura."),
]

BLOCKS_ES = [
    ("paragraph", "La tristeza de otoño llega cada año sin avisar. Un día sales del trabajo y ya es de noche; dos semanas después, el ánimo también ha bajado. En la consulta de psicología, en Barcelona, este aviso se repite cada octubre. Lo dicen personas adultas y competentes, con la vida más o menos en orden. No entienden por qué se sienten más apagadas, más lentas y más frágiles."),
    ("paragraph", "En este artículo queremos poner nombre a esa bajada estacional. Veremos qué es la tristeza de otoño, qué la sostiene y cómo atravesarla sin exigirte el ánimo del verano. De hecho, no siempre hay un problema detrás. A veces solo hay un cuerpo respondiendo con honestidad al cambio de luz, y saberlo cambia bastante el modo de llevarlo."),
    ("heading", "Qué es la tristeza de otoño"),
    ("paragraph", "La tristeza de otoño es una bajada del estado de ánimo ligada al cambio de estación. Aparece cuando los días se acortan y la luz natural escasea. Se nota en forma de cansancio temprano, menos ganas de hacer planes y un ánimo más gris. No es pereza, ni dramatismo, ni debilidad; es una respuesta del organismo a una señal real."),
    ("paragraph", "La importancia de entenderla bien está en no confundirla con otras cosas. Si sabes qué te pasa, dejas de pelearte con ello y empiezas a acompañarte de otro modo. En cambio, si la vives como un fallo personal, la castigas con exigencia: más planes, más ritmo, más prisa. Y esa pelea, casi siempre, agranda el agotamiento."),
    ("heading", "Luz, reloj interno y ánimo: por qué baja en otoño"),
    ("paragraph", "La luz no es un detalle decorativo para el cerebro; es su reloj principal. Con la oscuridad temprana, el cuerpo fabrica más melatonina, la hormona que prepara el sueño. El ánimo y las ganas de hacer se ajustan en consecuencia. El cambio de hora de finales de octubre adelanta la noche justo cuando más pesa. De golpe, las seis de la tarde parecen las diez."),
    ("paragraph", "Además, la vida social cambia con la estación. Los planes al aire libre se apagan, el cuerpo pide interior y el calendario se llena de obligaciones. Para muchas personas adultas, el otoño funciona como un descenso de revoluciones obligado. Normalmente no es nada grave; sin embargo, conviene tomarlo en serio cuando el bajón se queda semanas."),
    ("heading", "Cuando la tristeza de otoño toca algo más antiguo"),
    ("paragraph", "A veces, el otoño no baja el ánimo solo por la luz. También funciona como espejo: el año se acaba, vuelve la rutina y llega la hora de los balances. Estaciones así activan preguntas adultas: en qué se fue el año, qué se pospuso, qué cambios siguen esperando. De hecho, muchos procesos de revisión vital empiezan en otoño, no en enero."),
    ("paragraph", "Hay algo más. La entrada del frío reduce los encuentros y, para quien ya venía sintiéndose solo, la estación agranda la distancia. En este sentido, la tristeza de otoño puede ser la punta visible de algo que ya estaba. Debajo, a veces, hay un duelo sin cerrar, una relación a medias o un trabajo que ya no representa. Por eso conviene mirarla con curiosidad, y no solo con paciencia."),
    ("heading", "Cómo atravesar el otoño sin exigirte el ánimo del verano"),
    ("paragraph", "Lo primero es no pelearse con la temporada. El otoño no se arregla; se habita. Ayudan gestos sencillos: luz natural a primera hora, caminar aunque sea media hora, proteger el sueño. Sostener unos pocos vínculos que nutran también pesa más de lo que parece. No son recetas mágicas; son maneras de trabajar con el cuerpo en vez de contra él. Con ritmo distinto, el otoño también da lugar."),
    ("paragraph", "También ayuda ajustar las expectativas. En otoño puedes seguir queriendo cosas; simplemente, algunas cuestan más. Elegir con criterio qué planes se mantienen y cuáles se posponen es madurez, no rendición. Y cuando el ánimo no acompañe, la coherencia puede seguir existiendo: hacer lo que importa aunque no apetezca del todo. Al final, la temporada también enseña a quererse a ritmo bajo."),
    ("heading", "Cuándo conviene consultar a un psicólogo"),
    ("paragraph", "La frontera que conviene vigilar es la persistencia. Si el ánimo bajo se queda más de dos o tres semanas, algo más que la estación está pasando. También importa el impacto: el sueño roto, el trabajo que cuesta sostener, los vínculos que se enfrían. En ese punto, un psicólogo ayuda a distinguir si es solo la estación o si hay algo más detrás."),
    ("paragraph", "Consultar no es dramatizar. De hecho, es la manera más honesta de saber qué está pasando. La terapia también sostiene lo que el otoño activó: lo pospuesto, lo callado, lo que pide revisión. La estación, en cambio, no lo resuelve sola."),
    ("heading", "Preguntas frecuentes sobre la tristeza de otoño"),
    ("faq", [
        ("¿La tristeza de otoño es una depresión?",
         "No siempre. Puede ser una adaptación pasajera a la luz. Sin embargo, si se alarga, rompe el sueño o vacía lo que antes gustaba, puede haber algo más. La diferencia la marcan la persistencia y el impacto, no la intensidad de un día malo. Ante la duda, una primera visita aclara mucho."),
        ("¿Es normal sentirse más triste cuando oscurece pronto?",
         "Sí, y es más habitual de lo que se cuenta. El cuerpo lee la oscuridad temprana como una orden de recogerse. El problema no es sentirlo; es creer que fallas por sentirlo. Nombrarlo reduce, de hecho, bastante carga."),
    ]),
    ("heading", "Una estación para habitar a otro ritmo"),
    ("paragraph", "La tristeza de otoño no es un enemigo al que expulsar. Es una estación que pide otro ritmo: más interior, más calma, menos exigencia. Las personas adultas que la atraviesan mejor no son las que no la sienten. Son las que la escuchan sin obedecerla y cuidan la fuerza de lo que viene. Al final, bajar revoluciones también es una forma de madurez."),
    ("paragraph", "Si este otoño el ánimo se te ha puesto demasiado gris, se puede mirar con compañía. En Espai Emocions, centro de psicología de Barcelona, hacemos psicoterapia para adultos y parejas, con psicólogos colegiados, de manera presencial u online. Puedes pedir una primera visita desde la página de contacto o escribirnos por WhatsApp. La estación pasa; lo que sientes mientras tanto también merece cuidado."),
]

TRANS_ES = [
    "de hecho", "por ejemplo", "en cambio", "sin embargo", "por eso", "además",
    "también", "pero", "primero", "después", "finalmente", "al final",
    "en definitiva", "en este sentido", "normalmente", "casi siempre", "a menudo",
    "a veces", "cuando", "ya que", "porque", "aunque", "mientras", "por tanto",
    "así que", "sobre todo", "o sea", "es decir", "al contrario", "no obstante",
    "aun así", "en cuanto", "una vez", "antes", "ahora", "luego", "si",
    "por lo tanto", "en primer lugar", "en resumen", "tan pronto",
]
TRANS_CA = [
    "però", "a més", "de fet", "per exemple", "en canvi", "tanmateix", "per tant",
    "per això", "també", "primer", "després", "finalment", "al final",
    "en definitiva", "en aquest sentit", "normalment", "gairebé sempre", "sovint",
    "a vegades", "quan", "ja que", "perquè", "encara que", "mentre", "així doncs",
    "sobretot", "és a dir", "o sigui", "al contrari", "no obstant", "ara bé",
    "al capdavall", "de cop", "en conseqüència", "en resum", "un cop", "abans",
    "ara", "si", "al principi", "en primer lloc", "tan bon punt",
]
PROHIBIDAS = [
    "tips", "trucos", "trucs", "hacks", "secretos", "secrets", "fórmula", "fórmules",
    "solución definitiva", "solució definitiva", "cambiar tu vida", "canviar la teva vida",
    "mejor versión", "millor versió", "sanar", "energía", "energia", "coaching",
    "milagro", "miracle", "curación garantizada", "cura garantida",
    "resultados asegurados", "resultats garantits", "barato", "oferta",
]


def sentences(text):
    parts = re.split(r"[.!?…]+", text)
    return [p.strip() for p in parts if p.strip()]


def wc(text):
    return len(re.findall(r"[^\s,;:]+", text))


def has_transition(sent, transitions):
    low = sent.lower()
    for t in transitions:
        if re.search(r"\b" + re.escape(t) + r"\b", low):
            return True
    return False


def check_lang(lang, key, title, excerpt, blocks, transitions):
    errors, warns = [], []
    print(f"\n===== {lang} =====")

    # title / excerpt
    lt = len(title)
    print(f"title [{lt} chars]: {title}")
    if not (40 <= lt <= 66):
        errors.append(f"longitud de title {lt} fuera de 40-66")
    if key.lower() not in title.lower():
        errors.append("keyphrase no está en el title")
    le = len(excerpt)
    print(f"excerpt [{le} chars]")
    if not (120 <= le <= 156):
        errors.append(f"longitud de excerpt {le} fuera de 120-156")
    if key.lower() not in excerpt.lower():
        errors.append("keyphrase no está en el excerpt")

    # primer párrafo
    first_p = next(b[1] for b in blocks if b[0] == "paragraph")
    if key.lower() not in first_p.lower():
        errors.append("keyphrase no está en el primer párrafo")

    # H2s con keyphrase
    h2s = [b[1] for b in blocks if b[0] == "heading"]
    if not any(key.lower() in h.lower() for h in h2s):
        errors.append("keyphrase no está en ningún H2")

    # conteos globales
    all_sents, par_ok = [], True
    total_words = 0
    kp_count = 0
    # densidad y frases por párrafo/faq
    for b in blocks:
        if b[0] == "paragraph":
            sents = sentences(b[1])
            all_sents += sents
            words = wc(b[1])
            total_words += words
            kp_count += len(re.findall(re.escape(key), b[1], re.I))
            if words > 150:
                errors.append(f"párrafo de {words} palabras (>150)")
        elif b[0] == "faq":
            for q, a in b[1]:
                for t in (q, a):
                    sents = sentences(t)
                    all_sents += sents
                    words = wc(t)
                    total_words += words
                    kp_count += len(re.findall(re.escape(key), t, re.I))
        elif b[0] == "heading":
            total_words += wc(b[1])
            kp_count += len(re.findall(re.escape(key), b[1], re.I))
    total_words += wc(title)

    print(f"palabras totales: {total_words} (objetivo 800-1200 cuerpo)")
    body_words = total_words - wc(title)
    if not (780 <= body_words <= 1250):
        warns.append(f"cuerpo {body_words} palabras fuera de 800-1200")

    long_s = [s for s in all_sents if wc(s) > 20]
    pct_long = 100 * len(long_s) / len(all_sents)
    print(f"frases: {len(all_sents)}, >20 palabras: {len(long_s)} ({pct_long:.0f}%)")
    if pct_long > 25:
        errors.append(f"frases largas {pct_long:.0f}% > 25%")
    for s in long_s:
        print(f"  LARGA ({wc(s)}): {s[:80]}")

    trans_n = sum(1 for s in all_sents if has_transition(s, transitions))
    pct_t = 100 * trans_n / len(all_sents)
    print(f"frases con transición: {trans_n}/{len(all_sents)} ({pct_t:.0f}%)")
    if pct_t < 30:
        errors.append(f"transiciones {pct_t:.0f}% < 30%")

    # secciones entre H2
    section = []
    sec_name = "(intro)"
    for b in blocks:
        if b[0] == "heading":
            if wc(" ".join(section)) > 300:
                errors.append(f"sección '{sec_name}' > 300 palabras")
            sec_name = b[1]
            section = []
        elif b[0] == "paragraph":
            section.append(b[1])
        elif b[0] == "faq":
            section.append(" ".join(" ".join(x) for x in b[1]))
    if wc(" ".join(section)) > 300:
        errors.append(f"sección '{sec_name}' > 300 palabras")

    dens = 100 * kp_count * len(key.split()) / max(total_words, 1)
    print(f"keyphrase '{key}': {kp_count} apariciones (densidad ~{dens:.2f}%)")
    if dens > 3:
        errors.append(f"densidad {dens:.2f}% > 3%")
    if kp_count < 5:
        warns.append(f"keyphrase solo {kp_count} veces")

    # prohibidas
    texts = [title, excerpt]
    for b in blocks:
        if b[0] == "faq":
            for q, a in b[1]:
                texts += [q, a]
        else:
            texts.append(b[1])
    full = " ".join(texts)
    for p in PROHIBIDAS:
        if re.search(r"\b" + re.escape(p) + r"\b", full, re.I):
            errors.append(f"palabra prohibida: '{p}'")
    return errors, warns


def ts_blocks(blocks, indent="    "):
    out = []
    for b in blocks:
        if b[0] == "paragraph":
            out.append(f'{indent}{{\n{indent}  type: "paragraph",\n{indent}  text: {json.dumps(b[1], ensure_ascii=False)},\n{indent}}},')
        elif b[0] == "heading":
            out.append(f'{indent}{{\n{indent}  type: "heading",\n{indent}  text: {json.dumps(b[1], ensure_ascii=False)},\n{indent}}},')
        elif b[0] == "faq":
            items = []
            for q, a in b[1]:
                items.append(f'{indent}    {{\n{indent}      question: {json.dumps(q, ensure_ascii=False)},\n{indent}      answer: {json.dumps(a, ensure_ascii=False)},\n{indent}    }},')
            out.append(f'{indent}{{\n{indent}  type: "faq",\n{indent}  items: [\n' + "\n".join(items) + f'\n{indent}  ],\n{indent}}},')
    return "\n".join(out)


def main():
    errs, warns = [], []
    e, w = check_lang("CA", KEY_CA, TITLE_CA, EXC_CA, BLOCKS_CA, TRANS_CA)
    errs += e; warns += w
    e, w = check_lang("ES", KEY_ES, TITLE_ES, EXC_ES, BLOCKS_ES, TRANS_ES)
    errs += e; warns += w
    print("\n===== RESULTADO =====")
    for w in warns:
        print(f"AVISO: {w}")
    if errs:
        for x in errs:
            print(f"ERROR: {x}")
        sys.exit(1)
    print("Todas las comprobaciones pasan.")

    if "--write" in sys.argv:
        block = f'''  // ---------------------------------------------------------------------------
  // 4. tristeza-de-otono (Canvis vitals, 2026-10-26)
  // ---------------------------------------------------------------------------
  {{
    slug: "tristeza-de-otono",
    categoryCA: "Canvis vitals",
    categoryES: "Cambios vitales",
    titleCA: {json.dumps(TITLE_CA, ensure_ascii=False)},
    titleES: {json.dumps(TITLE_ES, ensure_ascii=False)},
    excerptCA:
      {json.dumps(EXC_CA, ensure_ascii=False)},
    excerptES:
      {json.dumps(EXC_ES, ensure_ascii=False)},
    datePublished: "2026-10-26",
    blocksCA: [
{ts_blocks(BLOCKS_CA)}
    ],
    blocksES: [
{ts_blocks(BLOCKS_ES)}
    ],
  }},
];'''
        path = "src/lib/articles-part17.ts"
        with open(path, encoding="utf-8") as f:
            content = f.read()
        idx = content.rfind("\n];")
        assert idx != -1, "no se encontró el cierre del array"
        new = content[:idx] + "\n" + block + content[idx + 3:]
        with open(path, "w", encoding="utf-8", newline="\n") as f:
            f.write(new)
        print(f"Insertado en {path}")


if __name__ == "__main__":
    main()