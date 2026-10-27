# -*- coding: utf-8 -*-
"""Ilustración editorial estilo Espai Emocions: 'La recaída emocional'.

Composición única para este artículo (no reutiliza layouts previos):
campo de terrazas en ladera, de día y con luz cálida — contraste directo
con la escena nocturna urbana del artículo anterior. Un camino de tierra
terracota sube con dos curvas cerradas (la mejora emocional no es una línea
recta: el camino vuelve sobre sí mismo, pero siempre gana altura). El mismo
árbol de salvia aparece dos veces: uno abajo, al inicio del camino, y otro
idéntico arriba del todo — el malestar conocido que reaparece, pero en otro
nivel. Una persona adulta sube a mitad de camino con una mochila terracota:
lo trabajado sigue dentro. Metáfora: recaer no es volver al punto de
partida; es pasar por lo mismo, más arriba. Paleta terracota/crema/salvia,
1200x675 (16:9), grano sutil, sin texto.
"""
from PIL import Image, ImageDraw, ImageFilter
import random

W, H = 1200, 675

CREMA = (244, 232, 222)
BLANCO = (255, 249, 243)
ARENA = (225, 210, 198)
ARENA_OSC = (208, 190, 172)
TERRA = (164, 81, 28)
TERRA_LUZ = (198, 108, 60)
TERRA_SUAVE = (222, 160, 118)
SALVIA = (123, 136, 114)
SALVIA_CLARA = (196, 202, 186)
SALVIA_OSC = (95, 107, 88)
BOSQUE = (53, 67, 54)
CAJAO = (48, 37, 31)
DORADO = (240, 205, 160)
DORADO_LUZ = (248, 224, 186)
PIEL = (232, 206, 186)

img = Image.new("RGB", (W, H), BLANCO)
d = ImageDraw.Draw(img)

# ---- Cielo cálido de día: blanco cálido arriba -> crema ----
for y in range(360):
    t = y / 360
    c0, c1 = BLANCO, (246, 236, 226)
    c = tuple(int(c0[i] + (c1[i] - c0[i]) * t) for i in range(3))
    d.line([(0, y), (W, y)], fill=c)
for y in range(360, H):
    t = (y - 360) / (H - 360)
    c0, c1 = (246, 236, 226), (238, 224, 210)
    c = tuple(int(c0[i] + (c1[i] - c0[i]) * t) for i in range(3))
    d.line([(0, y), (W, y)], fill=c)

# ---- Sol suave a la izquierda (contrapeso del árbol alto a la derecha) ----
sun = Image.new("RGBA", (W, H), (0, 0, 0, 0))
sd = ImageDraw.Draw(sun)
for k in range(26):
    a = int(20 * (1 - k / 26))
    sd.ellipse([165 - k * 6, 105 - k * 6, 235 + k * 6, 175 + k * 6], fill=(*DORADO, a))
sun = sun.filter(ImageFilter.GaussianBlur(12))
img.paste(sun, (0, 0), sun)
d = ImageDraw.Draw(img)
core = Image.new("RGBA", (W, H), (0, 0, 0, 0))
cd = ImageDraw.Draw(core)
cd.ellipse([176, 116, 224, 164], fill=(*DORADO_LUZ, 160))
core = core.filter(ImageFilter.GaussianBlur(8))
img.paste(core, (0, 0), core)
d = ImageDraw.Draw(img)

# ---- Colinas lejanas (salvia muy claro, atmosféricas) ----
def wavy(pts, color, width=0):
    """Polilínea suavizada rellena hasta el borde inferior."""
    p = pts
    for _ in range(3):
        q = [p[0]]
        for i in range(1, len(p) - 1):
            a, b = p[i], p[i + 1]
            q.append(((a[0] + b[0]) / 2.0, (a[1] + b[1]) / 2.0))
            q.append(b)
        p = q
    poly = p + [(W, H), (0, H)]
    d.polygon(poly, fill=color)

wavy([(0, 318), (170, 300), (380, 322), (620, 292), (860, 312), (1040, 286), (1200, 300)],
     (226, 224, 206))
wavy([(0, 352), (200, 336), (430, 356), (700, 330), (950, 352), (1200, 338)],
     (216, 218, 200))

# ---- Ladera principal en terrazas: clara abajo, más profunda arriba ----
def terrace(y0, y1, c_lo, c_hi):
    """Franja de terraza entre dos curvas paralelas."""
    pts_lo = [(x, y0 + 10 * ((x * 7) % 5) / 5.0 - 5) for x in range(0, W + 40, 40)]
    pts_hi = [(x, y1 + 10 * ((x * 5) % 5) / 5.0 - 5) for x in range(0, W + 40, 40)]
    p_lo, p_hi = pts_lo, pts_hi
    for _ in range(3):
        def smooth(p):
            q = [p[0]]
            for i in range(1, len(p) - 1):
                a, b = p[i], p[i + 1]
                q.append(((a[0] + b[0]) / 2.0, (a[1] + b[1]) / 2.0))
                q.append(b)
            return q
        p_lo, p_hi = smooth(p_lo), smooth(p_hi)
    poly = p_lo + p_hi[::-1]
    d.polygon(poly, fill=c_hi)
    # borde de terraza (tierra): línea arena sutil
    d.line(p_lo, fill=c_lo, width=3)

# la ladera asciende hacia la derecha: cada terraza se dibuja como franja
# inclinada (y baja de izquierda a derecha)
for (y0a, y0b, c_top, c_bor) in [
    (600, 540, (233, 221, 206), ARENA_OSC),   # terraza frontal cálida
    (540, 480, (214, 220, 203), (196, 202, 186)),
    (480, 415, (192, 200, 182), (172, 184, 163)),
    (415, 348, (163, 177, 152), SALVIA),
    (348, 296, (139, 153, 130), SALVIA_OSC),
    (296, 262, (114, 128, 107), (84, 99, 82)),
    (262, 246, (78, 95, 77), BOSQUE),          # línea de cima de bosque
]:
    # inclinación: subir 130px de izquierda a derecha
    pts_lo = [(x, y0a - (x / W) * 130) for x in range(0, W + 40, 40)]
    pts_hi = [(x, y0b - (x / W) * 130) for x in range(0, W + 40, 40)]
    p_lo, p_hi = pts_lo, pts_hi
    for _ in range(3):
        def smooth(p):
            q = [p[0]]
            for i in range(1, len(p) - 1):
                a, b = p[i], p[i + 1]
                q.append(((a[0] + b[0]) / 2.0, (a[1] + b[1]) / 2.0))
                q.append(b)
            return q
        p_lo, p_hi = smooth(p_lo), smooth(p_hi)
    d.polygon(p_lo + p_hi[::-1], fill=c_top)
    d.line(p_lo, fill=c_bor, width=3)

# ---- Camino de terracota que sube con dos curvas cerradas ----
WAY = [(30, 660), (180, 640), (330, 614), (480, 588), (585, 552),
       (600, 512), (520, 486), (400, 476), (330, 452), (400, 424),
       (545, 404), (680, 386), (770, 356), (742, 326), (650, 318),
       (590, 292), (680, 262), (820, 240), (950, 224), (1090, 212)]
p = WAY
for _ in range(4):
    q = [p[0]]
    for i in range(1, len(p) - 1):
        a, b = p[i], p[i + 1]
        q.append(((a[0] + b[0]) / 2.0, (a[1] + b[1]) / 2.0))
        q.append(b)
    p = q
# trazo principal con volumen (borde oscuro + cuerpo)
d.line(p, fill=(139, 66, 22), width=26, joint="curve")
for (x, y) in p[::6]:
    d.ellipse([x - 13, y - 13, x + 13, y + 13], fill=(139, 66, 22))
d.line(p, fill=TERRA, width=18, joint="curve")
for (x, y) in p[::6]:
    d.ellipse([x - 9, y - 9, x + 9, y + 9], fill=TERRA)
# línea interior más clara (tierra batida al sol)
d.line(p, fill=TERRA_LUZ, width=7, joint="curve")
# piedras arena junto al borde del camino
random.seed(271027)
for (x, y) in p[::11]:
    if random.random() < 0.8:
        side = random.choice((-1, 1))
        d.ellipse([x + side * 15 - 3, y - 3, x + side * 15 + 3, y + 3], fill=ARENA)

# ---- Árbol de salvia (se dibuja dos veces: mismo árbol, distinta altura) ----
def arbre(x, y, s=1.0):
    # sombra
    sh = Image.new("RGBA", (W, H), (0, 0, 0, 0))
    shd = ImageDraw.Draw(sh)
    shd.ellipse([x - 34 * s, y - 8 * s, x + 34 * s, y + 10 * s], fill=(70, 58, 48, 70))
    sh = sh.filter(ImageFilter.GaussianBlur(8))
    img.paste(sh, (0, 0), sh)
    lay = Image.new("RGBA", (W, H), (0, 0, 0, 0))
    ld = ImageDraw.Draw(lay)
    # tronco orgánico
    ld.polygon([(x - 5 * s, y), (x - 3.5 * s, y - 38 * s), (x + 3.5 * s, y - 38 * s), (x + 5 * s, y)],
               fill=(*CAJAO, 255))
    ld.line([(x - 1 * s, y - 34 * s), (x - 10 * s, y - 48 * s)], fill=(*CAJAO, 255), width=int(2.5 * s))
    ld.line([(x, y - 36 * s), (x + 9 * s, y - 52 * s)], fill=(*CAJAO, 255), width=int(2.5 * s))
    # copa: tres masas superpuestas
    ld.ellipse([x - 30 * s, y - 74 * s, x + 2 * s, y - 40 * s], fill=(*SALVIA, 255))
    ld.ellipse([x - 4 * s, y - 82 * s, x + 30 * s, y - 46 * s], fill=(*SALVIA, 255))
    ld.ellipse([x - 16 * s, y - 92 * s, x + 14 * s, y - 58 * s], fill=(*SALVIA, 255))
    # sombreado interior
    ld.ellipse([x - 14 * s, y - 80 * s, x + 8 * s, y - 56 * s], fill=(*SALVIA_OSC, 255))
    ld.ellipse([x - 22 * s, y - 66 * s, x - 6 * s, y - 48 * s], fill=(*SALVIA_OSC, 255))
    # luz cálida lateral
    ld.ellipse([x + 4 * s, y - 78 * s, x + 24 * s, y - 60 * s], fill=(*SALVIA_CLARA, 255))
    return lay

for (tx, ty, ts) in ((215, 638, 1.15), (1042, 216, 1.15)):
    lay = arbre(tx, ty, ts)
    img = Image.alpha_composite(img.convert("RGBA"), lay).convert("RGB")
d = ImageDraw.Draw(img)

# ---- Figura adulta subiendo, de espaldas, con mochila terracota ----
FX, FY = 700, 385
fig = Image.new("RGBA", (W, H), (0, 0, 0, 0))
fd = ImageDraw.Draw(fig)
s = 1.05
x, y = FX, FY
# sombra en el camino
fd.ellipse([x - 26, y - 5, x + 26, y + 8], fill=(70, 58, 48, 80))
# piernas en paso
fd.line([(x - 7 * s, y - 46 * s), (x - 15 * s, y)], fill=(*CAJAO, 255), width=int(9 * s))
fd.line([(x + 7 * s, y - 46 * s), (x + 20 * s, y - 2 * s)], fill=(*CAJAO, 255), width=int(9 * s))
# zapatos
fd.rounded_rectangle([x - 21 * s, y - 6 * s, x - 8 * s, y + 3 * s], 4, fill=(*CAJAO, 255))
fd.rounded_rectangle([x + 14 * s, y - 8 * s, x + 30 * s, y + 1 * s], 4, fill=(*CAJAO, 255))
# jersey terracota luz
fd.polygon([(x - 16 * s, y - 100 * s), (x + 16 * s, y - 100 * s),
            (x + 18 * s, y - 44 * s), (x - 18 * s, y - 44 * s)], fill=(*TERRA_LUZ, 255))
# mochila terracota (lo aprendido sigue dentro)
fd.rounded_rectangle([x - 13 * s, y - 92 * s, x + 13 * s, y - 58 * s], 7 * s, fill=(*TERRA, 255))
fd.line([(x - 8 * s, y - 92 * s), (x - 9 * s, y - 100 * s)], fill=(*TERRA, 255), width=int(3 * s))
fd.line([(x + 8 * s, y - 92 * s), (x + 9 * s, y - 100 * s)], fill=(*TERRA, 255), width=int(3 * s))
# brazos (uno con bastón de caminar, gesto de seguir subiendo)
fd.line([(x - 15 * s, y - 94 * s), (x - 24 * s, y - 52 * s)], fill=(*TERRA_LUZ, 255), width=int(8 * s))
fd.line([(x + 15 * s, y - 94 * s), (x + 27 * s, y - 70 * s)], fill=(*TERRA_LUZ, 255), width=int(8 * s))
fd.line([(x + 27 * s, y - 70 * s), (x + 24 * s, y)], fill=(*CAJAO, 255), width=int(3.5 * s))  # bastón
# cabeza y pelo
fd.ellipse([x - 12 * s, y - 128 * s, x + 12 * s, y - 104 * s], fill=(*PIEL, 255))
fd.chord([x - 13 * s, y - 133 * s, x + 13 * s, y - 108 * s], 180, 360, fill=(*CAJAO, 255))
fig = fig.filter(ImageFilter.SMOOTH)
img = Image.alpha_composite(img.convert("RGBA"), fig).convert("RGB")
d = ImageDraw.Draw(img)

# ---- Pájaros editoriales (trazos cacao) ----
for (bx, by, bs) in ((480, 128, 1.0), (545, 152, 0.8), (596, 118, 0.7)):
    d.arc([bx - 14 * bs, by - 8 * bs, bx - 1 * bs, by + 6 * bs], 200, 340, fill=CAJAO, width=3)
    d.arc([bx + 1 * bs, by - 8 * bs, bx + 14 * bs, by + 6 * bs], 200, 340, fill=CAJAO, width=3)

# ---- Matacillos de salvia y puntos terracota suaves en las terrazas ----
for (bx, by, bs) in ((360, 585, 1.0), (880, 330, 0.9), (1150, 470, 1.1), (110, 500, 0.85)):
    lay = Image.new("RGBA", (W, H), (0, 0, 0, 0))
    ld = ImageDraw.Draw(lay)
    ld.ellipse([bx - 16 * bs, by - 12 * bs, bx + 2 * bs, by + 8 * bs], fill=(*SALVIA_OSC, 255))
    ld.ellipse([bx - 2 * bs, by - 16 * bs, bx + 18 * bs, by + 2 * bs], fill=(*SALVIA, 255))
    ld.ellipse([bx - 20 * bs, by - 22 * bs, bx - 2 * bs, by - 4 * bs], fill=(*SALVIA, 255))
    img = Image.alpha_composite(img.convert("RGBA"), lay).convert("RGB")
d = ImageDraw.Draw(img)
for (fxp, fyp) in ((520, 560), (940, 300), (250, 455), (1080, 400)):
    d.ellipse([fxp - 3, fyp - 3, fxp + 3, fyp + 3], fill=TERRA_SUAVE)

# ---- Vignette cálida muy suave ----
vig = Image.new("RGBA", (W, H), (0, 0, 0, 0))
vd = ImageDraw.Draw(vig)
vd.ellipse([-160, -160, W + 160, H + 160], fill=(0, 0, 0, 0))
vd.rectangle([0, 0, W, H], fill=(92, 66, 46, 26))
vd.ellipse([-90, -90, W + 90, H + 90], fill=(0, 0, 0, 0))
vig = vig.filter(ImageFilter.GaussianBlur(60))
img = Image.alpha_composite(img.convert("RGBA"), vig).convert("RGB")

# ---- Grano sutil ----
noise = Image.effect_noise((W, H), 13).convert("L")
img = Image.composite(Image.blend(img, Image.new("RGB", (W, H), BLANCO), 0.05), img, noise)

img = img.filter(ImageFilter.SMOOTH)
img.save("public/blog/recaida-emocional.png")
img.save("public/blog/recaida-emocional.webp", "WEBP", quality=88, method=6)
print("OK: recaida-emocional.png/.webp guardados", img.size)