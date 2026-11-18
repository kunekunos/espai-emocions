# -*- coding: utf-8 -*-
"""Ilustración editorial estilo Espai Emocions: 'El pes d'un secret'.

Composición única para este artículo: primera vez en la serie que el
protagonista es un objeto sobre la mesa entre dos persones. Escena doméstica
de sobretaula (postcena): dos butaques encarades al voltant d'una tauleta
baixa rodona; sobre la tauleta, dues tasses de te i una capsa petita de fusta
amb un cadenat llautó. La figura de l'esquerra (jersei terracota) s'inclina
endavant, conversa; la figura de la derecha (jersei salvia) aguanta la tassa
i mira la capsa: allò que sempre és a taula i ningú no obre. La capsa és
petita, però projecta una ombra ampla i fosca que s'estén pel terra (el pes).
Detalls: llum de peu daurada al fons, planta de salvia, finestra de crepuscle
a la dreta i una clau petita penjada d'un clau a la paret. Metàfora: el secret
no ocupa gaire lloc, però governa l'habitació. Paleta terracota/crema/salvia,
1200x675 (16:9), pla amb gra subtil, sense text.
"""
from PIL import Image, ImageDraw, ImageFilter
import random

W, H = 1200, 675

CREMA = (244, 232, 222)
BLANCO = (255, 249, 243)
ARENA = (225, 210, 198)
TERRA = (164, 81, 28)
TERRA_LUZ = (198, 108, 60)
TERRA_SUAVE = (222, 160, 118)
SALVIA = (123, 136, 114)
SALVIA_CLARA = (196, 202, 186)
SALVIA_OSC = (95, 107, 88)
CAJAO = (48, 37, 31)
DORADO = (240, 205, 160)
DORADO_LUZ = (248, 224, 186)
MADERA = (150, 108, 70)
MADERA_OSC = (126, 88, 54)
PIEL = (232, 206, 186)
FOSCA = (74, 62, 52)

img = Image.new("RGB", (W, H), CREMA)
d = ImageDraw.Draw(img)

# ---- Pared crema cálida con degradado suave hacia salvia claro ----
WALL = 500
for y in range(WALL):
    t = y / WALL
    c0 = (244, 232, 222)
    c1 = (223, 226, 211)
    c = tuple(int(c0[i] + (c1[i] - c0[i]) * (t ** 1.1)) for i in range(3))
    d.line([(0, y), (W, y)], fill=c)

# zócalo arena
d.line([(0, WALL - 2), (W, WALL - 2)], fill=ARENA, width=4)

# ---- Suelo de tablones de madera clara ----
d.rectangle([0, WALL, W, H], fill=(206, 182, 156))
for k in range(11):
    x0 = 30 + k * 122
    d.line([(x0, WALL), (x0 - 66, H)], fill=(188, 162, 134), width=2)
for yy in (560, 636):
    d.line([(0, yy), (W, yy)], fill=(192, 166, 138), width=2)

# ---- Ventana de crepúsculo a la derecha (marco madera, luz salvia-azulada cálida) ----
VX, VY, VW, VH = 946, 120, 210, 260
d.rectangle([VX - 10, VY - 10, VX + VW + 10, VY + VH + 10], fill=MADERA_OSC)
for y in range(VY, VY + VH):
    t = (y - VY) / VH
    c0 = (206, 208, 196)   # cielo salvia pálido arriba
    c1 = (236, 208, 178)   # banda cálida abajo
    c = tuple(int(c0[i] + (c1[i] - c0[i]) * t) for i in range(3))
    d.line([(VX, y), (VX + VW, y)], fill=c)
# cruz de la ventana
d.line([(VX + VW // 2, VY), (VX + VW // 2, VY + VH)], fill=MADERA_OSC, width=5)
d.line([(VX, VY + VH // 2), (VX + VW, VY + VH // 2)], fill=MADERA_OSC, width=5)
# silueta de tejado lejano por la ventana
d.polygon([(VX + 20, VY + 150), (VX + 80, VY + 108), (VX + 140, VY + 150)], fill=SALVIA_OSC)
d.rectangle([VX + 108, VY + 150, VX + 122, VY + 190], fill=SALVIA_OSC)

# ---- Cuadro pequeño a la izquierda de la ventana (eco del símbolo) ----
d.rounded_rectangle([820, 150, 908, 252], 8, fill=MADERA)
d.rectangle([830, 160, 898, 242], fill=SALVIA_CLARA)
for dx in (848, 864, 880):
    d.line([(dx, 186), (dx, 220)], fill=SALVIA, width=4)
d.line([(842, 204), (886, 204)], fill=TERRA_LUZ, width=4)

# ---- Clau petita penjada d'un clau a la paret (motiu de l'article) ----
NX, NY = 640, 190
d.ellipse([NX - 5, NY - 5, NX + 5, NY + 5], fill=MADERA_OSC)   # clau
d.ellipse([NX - 4, NY + 4, NX + 12, NY + 20], fill=DORADO)       # cap de la clau
d.line([(NX + 8, NY + 4), (NX + 2, NY + 22)], fill=DORADO, width=4)  # tija
d.ellipse([NX - 2, NY + 20, NX + 8, NY + 30], fill=DORADO)      # dent

# ---- Lámpara de pie encendida al fondo izquierda ----
d.line([(150, 300), (150, 500)], fill=MADERA, width=7)
d.rounded_rectangle([118, 500, 182, 516], 8, fill=MADERA_OSC)
# pantalla dorada y halo
d.polygon([(120, 300), (180, 300), (196, 246), (104, 246)], fill=DORADO)
halo = Image.new("RGBA", (W, H), (0, 0, 0, 0))
hd = ImageDraw.Draw(halo)
hd.ellipse([70, 200, 240, 340], fill=(248, 224, 186, 120))
img.paste(halo, (0, 0), halo)
d = ImageDraw.Draw(img)

# ---- Planta de salvia grande junto a la ventana ----
d.rounded_rectangle([1090, 430, 1140, 530], 12, fill=TERRA)
for ang, ln in ((-36, 66), (-10, 88), (18, 96), (44, 70)):
    x2 = 1115 + ang
    y2 = 428 - ln
    d.line([(1115, 432), (x2, y2)], fill=SALVIA_OSC, width=6)
    d.ellipse([x2 - 11, y2 - 11, x2 + 11, y2 + 11], fill=SALVIA)
    d.ellipse([x2 - 5, y2 - 5, x2 + 5, y2 + 5], fill=SALVIA_CLARA)

# ---- Alfombra orgánica crema bajo la escena central ----
rug = Image.new("RGBA", (W, H), (0, 0, 0, 0))
rd = ImageDraw.Draw(rug)
rd.ellipse([210, 500, 900, 672], fill=(244, 232, 222, 110))
rd.ellipse([260, 516, 850, 656], outline=(225, 210, 198, 200), width=5)
img.paste(rug, (0, 0), rug)
d = ImageDraw.Draw(img)

# ---- Tauleta baixa rodona al centre ----
TX, TY, TR = 560, 560, 118
d.ellipse([TX - TR, TY - 26, TX + TR, TY + 26], fill=MADERA)       # sobrellit
d.ellipse([TX - TR + 8, TY - 22, TX + TR - 8, TY + 22], fill=(172, 128, 86))
# peus de la tauleta
d.rectangle([TX - 74, TY + 22, TX - 62, TY + 66], fill=MADERA_OSC)
d.rectangle([TX + 62, TY + 22, TX + 74, TY + 66], fill=MADERA_OSC)

# ---- Dues tasses de te amb vapor sobre la taula ----
# tassa 1 (costat esquerre)
d.ellipse([TX - 78, TY - 30, TX - 30, TY - 2], fill=BLANCO, outline=ARENA, width=3)
d.arc([TX - 108, TY - 32, TX - 78, TY - 6], 300, 90, fill=BLANCO, width=5)  # nansa
# tassa 2 (costat dret)
d.ellipse([TX + 26, TY - 32, TX + 72, TY - 6], fill=BLANCO, outline=ARENA, width=3)
d.arc([TX + 68, TY - 34, TX + 98, TY - 8], 120, 270, fill=BLANCO, width=5)
# vapor suau de les dues tasses
vap = Image.new("RGBA", (W, H), (0, 0, 0, 0))
vd = ImageDraw.Draw(vap)
for cx, seed in ((TX - 54, 3), (TX + 49, 7)):
    random.seed(seed)
    for i in range(3):
        xx = cx + random.randint(-8, 8)
        vd.arc([xx - 10, TY - 90 - i * 16, xx + 10, TY - 40 - i * 16], 200, 100,
               fill=(255, 249, 243, 90 - i * 20), width=3)
img.paste(vap, (0, 0), vap)
d = ImageDraw.Draw(img)

# ---- La capsa: petita, de fusta, amb cadenat de llautó (centre de la taula) ----
BX, BY, BW, BH = 44, 44, 76, 58      # capsa 76x58 centrada damunt la taula
bx0, by0 = TX - BW // 2, TY - 34 - BH
# cos de la capsa (fusta fosca amb vetes)
d.rounded_rectangle([bx0, by0, bx0 + BW, by0 + BH], 6, fill=MADERA_OSC)
d.line([(bx0 + 8, by0 + BH // 2), (bx0 + BW - 8, by0 + BH // 2)], fill=MADERA, width=3)
d.line([(bx0 + 14, by0 + 12), (bx0 + 26, by0 + 12)], fill=MADERA, width=2)
d.line([(bx0 + 30, by0 + BH - 12), (bx0 + 44, by0 + BH - 12)], fill=MADERA, width=2)
# tapa
d.rounded_rectangle([bx0 - 4, by0 - 12, bx0 + BW + 4, by0 + 8], 6, fill=MADERA)
# cadenat llautó al davant
d.rounded_rectangle([TX - 9, by0 + BH - 16, TX + 9, by0 + BH + 2], 4, fill=DORADO)
d.arc([TX - 7, by0 + BH - 26, TX + 7, by0 + BH - 12], 180, 360, fill=DORADO, width=4)

# ---- Ombra ampla i fosca que s'estén des de la capsa pel terra ----
# la capsa es petita, pero la seva ombra ocupa mig terra: el pes
shadow = Image.new("RGBA", (W, H), (0, 0, 0, 0))
sd = ImageDraw.Draw(shadow)
sd.polygon([
    (TX - 46, TY + 2), (TX + 46, TY + 2),      # peu de l'ombra a sota la taula
    (TX + 210, H - 8), (TX - 210, H - 8),      # s'obre ample cap a l'espectador
], fill=(90, 74, 60, 95))
shadow = shadow.filter(ImageFilter.GaussianBlur(14))
img.paste(shadow, (0, 0), shadow)
d = ImageDraw.Draw(img)

# ---- Figura asseguda: butaca dreta, jersei salvia, mira la capsa ----
def figura_asseguda(cx, base_y, s, jersei, mirant_esquerra=True):
    """Figura adulta asseguda en butaca, neutra en gènere, ~135*s d'alçada."""
    layer = Image.new("RGBA", (W, H), (0, 0, 0, 0))
    ld = ImageDraw.Draw(layer)
    # caps
    ld.ellipse([cx - 15 * s, base_y - 148 * s, cx + 15 * s, base_y - 118 * s], fill=(*PIEL, 255))
    # cabell curt orgànic
    ld.arc([cx - 17 * s, base_y - 152 * s, cx + 17 * s, base_y - 124 * s],
           180, 360, fill=(*CAJAO, 255), width=int(6 * s))
    # torso (jersei)
    ld.rounded_rectangle([cx - 27 * s, base_y - 120 * s, cx + 27 * s, base_y - 46 * s],
                         14 * s, fill=(*jersei, 255))
    # caps girat cap a la capsa (esquerra): ull a la banda esquerra
    if mirant_esquerra:
        ld.ellipse([cx - 10 * s, base_y - 136 * s, cx - 4 * s, base_y - 130 * s], fill=(*CAJAO, 255))
    else:
        ld.ellipse([cx + 4 * s, base_y - 136 * s, cx + 10 * s, base_y - 130 * s], fill=(*CAJAO, 255))
    # braços: l'un aguanta la tassa (endavant-avall), l'alt repenjat
    ld.line([(cx - 22 * s, base_y - 108 * s), (cx - 44 * s, base_y - 62 * s)],
            fill=(*jersei, 255), width=int(11 * s))
    ld.line([(cx + 22 * s, base_y - 108 * s), (cx + 34 * s, base_y - 58 * s)],
            fill=(*jersei, 255), width=int(11 * s))
    # mà que aguanta la tassa (costat de la capsa)
    ld.ellipse([cx - 52 * s, base_y - 68 * s, cx - 36 * s, base_y - 54 * s], fill=(*PIEL, 255))
    # cames doblades: cuixes cap endavant, canyells avall
    ld.rounded_rectangle([cx - 26 * s, base_y - 50 * s, cx + 26 * s, base_y - 26 * s],
                         10 * s, fill=(*CAJAO, 255))
    ld.line([(cx - 14 * s, base_y - 28 * s), (cx - 14 * s, base_y - 6 * s)],
            fill=(*CAJAO, 255), width=int(12 * s))
    ld.line([(cx + 14 * s, base_y - 28 * s), (cx + 14 * s, base_y - 6 * s)],
            fill=(*CAJAO, 255), width=int(12 * s))
    # sabates
    ld.rounded_rectangle([cx - 26 * s, base_y - 8 * s, cx - 4 * s, base_y + 2 * s],
                         5 * s, fill=(*CAJAO, 255))
    ld.rounded_rectangle([cx + 4 * s, base_y - 8 * s, cx + 26 * s, base_y + 2 * s],
                         5 * s, fill=(*CAJAO, 255))
    return layer

# ---- Butaques ----
def butaca(x, base_y, cos, coixi, s=1.0):
    """Butaca de vora arredossida vista de front, 150*s d'alçada."""
    layer = Image.new("RGBA", (W, H), (0, 0, 0, 0))
    ld = ImageDraw.Draw(layer)
    # respatller
    ld.rounded_rectangle([x - 62 * s, base_y - 170 * s, x + 62 * s, base_y - 60 * s],
                         22 * s, fill=(*cos, 255))
    # coixí superior
    ld.rounded_rectangle([x - 54 * s, base_y - 162 * s, x + 54 * s, base_y - 128 * s],
                         14 * s, fill=(*coixi, 255))
    # seient
    ld.rounded_rectangle([x - 58 * s, base_y - 70 * s, x + 58 * s, base_y - 26 * s],
                         16 * s, fill=(*coixi, 255))
    # braços
    ld.rounded_rectangle([x - 74 * s, base_y - 112 * s, x - 46 * s, base_y - 26 * s],
                         12 * s, fill=(*cos, 255))
    ld.rounded_rectangle([x + 46 * s, base_y - 112 * s, x + 74 * s, base_y - 26 * s],
                         12 * s, fill=(*cos, 255))
    # peus de fusta
    ld.rectangle([x - 52 * s, base_y - 26 * s, x - 42 * s, base_y], fill=(*MADERA_OSC, 255))
    ld.rectangle([x + 42 * s, base_y - 26 * s, x + 52 * s, base_y], fill=(*MADERA_OSC, 255))
    return layer

# butaca dreta (figura salvia): la figura seu a la butaca, una mica cap a la taula
b1 = butaca(916, 566, SALVIA_OSC, SALVIA, 1.18)
img = Image.alpha_composite(img.convert("RGBA"), b1).convert("RGB")
d = ImageDraw.Draw(img)
f1 = figura_asseguda(906, 560, 1.18, SALVIA, mirant_esquerra=True)
img = Image.alpha_composite(img.convert("RGBA"), f1).convert("RGB")
d = ImageDraw.Draw(img)

# butaca esquerra (figura terracota): s'inclina endavant, conversa
b2 = butaca(216, 566, TERRA, TERRA_LUZ, 1.18)
img = Image.alpha_composite(img.convert("RGBA"), b2).convert("RGB")
d = ImageDraw.Draw(img)
f2 = figura_asseguda(226, 556, 1.18, TERRA_LUZ, mirant_esquerra=False)
img = Image.alpha_composite(img.convert("RGBA"), f2).convert("RGB")
d = ImageDraw.Draw(img)
# el braç de la figura esquerra s'inclina més cap a la taula: gest obert de parlar
# (es dibuixa després perquè quedi per damunt del cos)
brazo = Image.new("RGBA", (W, H), (0, 0, 0, 0))
bd = ImageDraw.Draw(brazo)
bd.line([(252, 472), (300, 520)], fill=TERRA_LUZ, width=13)
bd.ellipse([292, 512, 310, 530], fill=PIEL)
img.paste(brazo, (0, 0), brazo)
d = ImageDraw.Draw(img)

# la figura de la dreta aguanta la seva tassa (com diu el text): tassa a la mà
d.ellipse([836, 478, 872, 508], fill=BLANCO, outline=ARENA, width=3)
d.arc([866, 480, 892, 502], 110, 260, fill=BLANCO, width=5)   # nansa cap a la dreta
d.ellipse([840, 480, 868, 486], fill=DORADO_LUZ)               # te daurat
# ma sobre la tassa (costat superior dret)
d.ellipse([848, 470, 866, 486], fill=PIEL)

# ---- Llum daurada suau del centre (vetllada) ----
grad = Image.new("RGBA", (W, H), (0, 0, 0, 0))
gd = ImageDraw.Draw(grad)
for x in range(W):
    t = max(0.0, 1 - abs(x - 560) / 560)
    gd.line([(x, 0), (x, H)], fill=(248, 224, 186, int(38 * t ** 1.4)))
img.paste(grad, (0, 0), grad)
d = ImageDraw.Draw(img)

# ---- Gra subtil ----
random.seed(181126)
noise = Image.effect_noise((W, H), 14).convert("L")
img = Image.composite(Image.blend(img, Image.new("RGB", (W, H), (255, 249, 243)), 0.06), img, noise)

# ---- Suavitzat mantenint detall ----
img = img.filter(ImageFilter.SMOOTH)
img.save("public/blog/el-peso-de-un-secreto.png")
img.save("public/blog/el-peso-de-un-secreto.webp", "WEBP", quality=88, method=6)
print("OK: el-peso-de-un-secreto.png/.webp guardados", img.size)
