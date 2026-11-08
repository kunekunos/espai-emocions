# -*- coding: utf-8 -*-
"""Ilustración editorial estilo Espai Emocions: 'Hablar del pasado en la terapia'.

Composición única para este artículo (no reutiliza layouts previos): un
consultorio presente a la derecha y, abriéndose en la pared izquierda, un
gran arco de obra en terracota que enmarca una cocina antigua en pequeño
(el pasado, a escala de recuerdo): ventana cálida, pote colgante, mesa
pequeña con dos sillas. En el presente, una figura adulta neutra en género
(suéter salvia, pantalón cacao) sentada en un sillón terracota con un
cuaderno abierto en el regazo, de espaldas tres cuartos; a su derecha, una
mesita con taza humeante y el sillón vacío de quien escucha (salvia), que
mira hacia el arco. El vapor de la taza sube y se curva suavemente hacia
el arco, uniendo presente y pasado. Alfombra crema con ribete terracota,
planta en maceta, luz cálida diagonal, grano sutil, sin texto.
Paleta terracota/crema/salvia, 1200x675 (16:9).
"""
from PIL import Image, ImageDraw, ImageFilter

W, H = 1200, 675

CREMA = (244, 232, 222)
CREMA_CLARO = (252, 244, 235)
BLANCO = (255, 249, 243)
TERRA = (164, 81, 28)
TERRA_OSC = (140, 66, 22)
TERRA_LUZ = (198, 108, 60)
TERRA_SUAVE = (222, 160, 118)
SALVIA = (123, 136, 114)
SALVIA_CLARA = (196, 202, 186)
SALVIA_OSC = (95, 107, 88)
CAJAO = (48, 37, 31)
ARENA = (225, 210, 198)
ARENA_OSC = (209, 190, 175)
PIEL = (232, 206, 186)
PIEL_OSC = (208, 176, 152)
PELO_OSC = (52, 40, 32)
MADERA = (196, 158, 122)
MADERA_OSC = (150, 108, 70)
MADERA_CLARA = (230, 206, 176)
LUZ_CALIDA = (255, 236, 200)

img = Image.new("RGB", (W, H), BLANCO)
d = ImageDraw.Draw(img)

# ---- Pared crema con gradiente suave ----
for y in range(0, 442):
    t = y / 442
    c = tuple(int(CREMA_CLARO[i] + (CREMA[i] - CREMA_CLARO[i]) * t) for i in range(3))
    d.line([(0, y), (W, y)], fill=c)

# ---- Suelo de madera ----
d.rectangle([0, 442, W, H], fill=MADERA_CLARA)
for x in range(0, W, 155):
    d.line([(x, 442), (x - 55, H)], fill=(214, 188, 158), width=2)
d.rectangle([0, 436, W, 446], fill=ARENA)

# ---- Sombras suaves de suelo ----
sh = Image.new("RGBA", (W, H), (0, 0, 0, 0))
sd = ImageDraw.Draw(sh)
for box in ([(60, 560), (250, 606)], [(520, 596), (830, 646)], [(900, 560), (1160, 604)]):
    sd.ellipse([box[0][0], box[0][1], box[1][0], box[1][1]], fill=(140, 110, 82, 60))
sh = sh.filter(ImageFilter.GaussianBlur(7))
img = Image.alpha_composite(img.convert("RGBA"), sh).convert("RGB")
d = ImageDraw.Draw(img)

# ---- ARCO (izquierda): marco de obra terracota que enmarca el pasado ----
# interior salvia claro (la cocina del recuerdo)
d.pieslice([118, 110, 428, 418], 180, 360, fill=SALVIA_CLARA)     # cabeza del arco interior
d.rectangle([118, 260, 428, 442], fill=SALVIA_CLARA)
# marco terracota
d.pieslice([100, 92, 446, 438], 180, 360, fill=TERRA)
d.rectangle([100, 262, 132, 442], fill=TERRA)
d.rectangle([414, 262, 446, 442], fill=TERRA)
# reabrir interior
d.pieslice([118, 110, 428, 418], 180, 360, fill=SALVIA_CLARA)
d.rectangle([118, 262, 428, 442], fill=SALVIA_CLARA)
# luz interior: gradiente vertical suave (más claro arriba)
li = Image.new("RGBA", (W, H), (0, 0, 0, 0))
ldd = ImageDraw.Draw(li)
ldd.pieslice([118, 110, 428, 418], 180, 360, fill=(255, 240, 210, 70))
li = li.filter(ImageFilter.GaussianBlur(18))
img = Image.alpha_composite(img.convert("RGBA"), li).convert("RGB")
d = ImageDraw.Draw(img)
# sombra interior inferior (profundidad)
si = Image.new("RGBA", (W, H), (0, 0, 0, 0))
sdd = ImageDraw.Draw(si)
sdd.rectangle([118, 380, 428, 442], fill=(120, 100, 80, 50))
si = si.filter(ImageFilter.GaussianBlur(12))
img = Image.alpha_composite(img.convert("RGBA"), si).convert("RGB")
d = ImageDraw.Draw(img)

# ---- Cocina en pequeño: ventana cálida ----
d.rounded_rectangle([158, 168, 246, 250], 10, fill=LUZ_CALIDA, outline=TERRA_SUAVE, width=3)
d.line([(202, 168), (202, 250)], fill=TERRA_SUAVE, width=3)
d.line([(158, 208), (246, 208)], fill=TERRA_SUAVE, width=3)
# pote colgante sobre la llama
d.line([(330, 128), (330, 176)], fill=CAJAO, width=3)
d.ellipse([306, 176, 354, 220], fill=TERRA)
d.rectangle([300, 176, 308, 184], fill=TERRA_OSC)
d.rectangle([352, 176, 360, 184], fill=TERRA_OSC)
# llama pequeña
d.polygon([(322, 232), (330, 218), (338, 232)], fill=TERRA_LUZ)
# mesa pequeña redonda con dos sillas
d.ellipse([276, 320, 384, 344], fill=MADERA, outline=MADERA_OSC, width=2)
d.rectangle([324, 332, 336, 420], fill=MADERA_OSC)
d.rectangle([322, 414, 338, 424], fill=MADERA_OSC)
# silla izquierda (salvia) de perfil
d.rounded_rectangle([214, 330, 232, 424], 6, fill=SALVIA)
d.rectangle([214, 316, 232, 332], fill=SALVIA_OSC)
# silla derecha (crema con patas madera), ben col·locada dins de l'arc
d.rounded_rectangle([372, 336, 390, 430], 6, fill=ARENA)
d.rectangle([372, 322, 390, 338], fill=ARENA_OSC)
# bandeja con dos tazas minúsculas sobre la mesa (el té de siempre)
d.ellipse([300, 314, 320, 330], fill=CREMA, outline=ARENA_OSC, width=2)
d.ellipse([340, 314, 360, 330], fill=CREMA, outline=ARENA_OSC, width=2)

# ---- Planta en maceta, delante del arco (presente) ----
d.polygon([(120, 512), (104, 448), (140, 472)], fill=SALVIA)
d.polygon([(128, 512), (160, 442), (156, 478)], fill=SALVIA_OSC)
d.polygon([(132, 512), (96, 462), (112, 496)], fill=SALVIA_CLARA)
d.rectangle([106, 512, 152, 570], fill=TERRA)
d.rectangle([106, 512, 152, 520], fill=TERRA_LUZ)

# ---- Alfombra crema bajo los sillones ----
d.rounded_rectangle([470, 552, 1150, 660], 26, fill=CREMA, outline=ARENA_OSC, width=3)
d.rounded_rectangle([488, 562, 1132, 650], 18, outline=TERRA_SUAVE, width=3)

# ---- Sillón del adulto (terracota), centro ----
# base y patas
d.rectangle([596, 548, 744, 562], fill=MADERA_OSC)
d.rectangle([606, 562, 618, 596], fill=MADERA_OSC)
d.rectangle([722, 562, 734, 596], fill=MADERA_OSC)
# respaldo (visto de tres cuartos, orientado a la izquierda)
d.rounded_rectangle([640, 330, 760, 500], 24, fill=TERRA)
d.rounded_rectangle([646, 336, 754, 496], 20, fill=TERRA_LUZ)
# asiento
d.rounded_rectangle([584, 470, 762, 548], 18, fill=TERRA)
# brazo izquierdo (visible hacia el arco)
d.rounded_rectangle([566, 412, 612, 548], 16, fill=TERRA_OSC)
# brazo derecho
d.rounded_rectangle([736, 412, 782, 548], 16, fill=TERRA_OSC)

# ---- Figura adulta sentada (suéter salvia, pantalón cacao, de espaldas 3/4) ----
# piernas dobladas: muslos hacia la izquierda, rodillas hacia el borde del sillón
d.rounded_rectangle([604, 468, 700, 512], 14, fill=CAJAO)
d.rectangle([600, 502, 646, 572], fill=CAJAO)
d.rectangle([640, 502, 682, 572], fill=(64, 50, 40))
d.rounded_rectangle([592, 566, 652, 588], 8, fill=CAJAO)   # zapato
d.rounded_rectangle([632, 566, 696, 588], 8, fill=(40, 30, 24))
# torso: suéter salvia
d.rounded_rectangle([628, 356, 726, 484], 22, fill=SALVIA)
d.arc([648, 348, 712, 396], 180, 360, fill=SALVIA_OSC, width=4)  # capucha
# cabeza: nuca y pelo oscuro, mirando levemente a la izquierda (hacia el arco)
d.ellipse([652, 300, 716, 362], fill=PELO_OSC)
d.pieslice([652, 300, 716, 362], 200, 340, fill=PELO_OSC)
d.rectangle([668, 350, 690, 364], fill=PIEL)  # clatell
# brazo izquierdo cruzando hacia el regazo (el cuaderno)
d.line([(660, 404), (622, 470), (636, 494)], fill=SALVIA, width=18)
d.ellipse([626, 482, 654, 508], fill=PIEL_OSC)  # mano sobre el cuaderno
# cuaderno abierto en el regazo
d.rounded_rectangle([596, 486, 690, 516], 8, fill=CREMA, outline=ARENA_OSC, width=2)
d.line([(643, 486), (643, 516)], fill=ARENA, width=2)
d.line([(604, 496), (638, 496)], fill=ARENA_OSC, width=2)
d.line([(604, 504), (630, 504)], fill=ARENA_OSC, width=2)
d.line([(648, 500), (682, 500)], fill=ARENA_OSC, width=2)

# ---- Mesita auxiliar con taza humeante ----
d.rectangle([806, 470, 878, 484], fill=MADERA)
d.rectangle([814, 484, 824, 566], fill=MADERA_OSC)
d.rectangle([860, 484, 870, 566], fill=MADERA_OSC)
d.rectangle([806, 470, 878, 475], fill=MADERA_OSC)
# taza crema con banda terracota, recolzada sobre la fusta
d.ellipse([826, 440, 862, 474], fill=CREMA, outline=ARENA_OSC, width=2)
d.rectangle([826, 450, 862, 458], fill=TERRA_SUAVE)
d.arc([858, 444, 872, 464], 270, 90, fill=ARENA_OSC, width=3)  # nansa
# vapor: dos curvas suaves que suben hacia el arco
st = Image.new("RGBA", (W, H), (0, 0, 0, 0))
std = ImageDraw.Draw(st)
for (x0, y0, amp) in ((838, 300, 26), (852, 322, 16)):
    pts = []
    for i in range(18):
        t = i / 17
        pts.append((x0 + amp * t * (1 if i % 2 == 0 else -0.6), y0 - t * 110))
    std.line(pts, fill=(255, 250, 244, 90), width=4)
st = st.filter(ImageFilter.GaussianBlur(3))
img = Image.alpha_composite(img.convert("RGBA"), st).convert("RGB")
d = ImageDraw.Draw(img)

# ---- Sillón vacío de quien escucha (salvia), derecha, orientado a la izquierda ----
d.rectangle([964, 556, 1108, 568], fill=MADERA_OSC)
d.rectangle([976, 568, 986, 592], fill=MADERA_OSC)
d.rectangle([1086, 568, 1096, 592], fill=MADERA_OSC)
d.rounded_rectangle([1008, 348, 1112, 496], 24, fill=SALVIA)
d.rounded_rectangle([1014, 354, 1106, 492], 20, fill=SALVIA_CLARA)
d.rounded_rectangle([948, 484, 1116, 556], 18, fill=SALVIA)
d.rounded_rectangle([940, 420, 986, 556], 16, fill=SALVIA_OSC)
d.rounded_rectangle([1078, 420, 1124, 556], 16, fill=SALVIA_OSC)

# ---- Luz cálida diagonal de mañana, desde el arco ----
lu = Image.new("RGBA", (W, H), (0, 0, 0, 0))
ldd = ImageDraw.Draw(lu)
ldd.polygon([(80, 120), (330, 120), (620, 675), (220, 675)], fill=(255, 238, 204, 46))
lu = lu.filter(ImageFilter.GaussianBlur(28))
img = Image.alpha_composite(img.convert("RGBA"), lu).convert("RGB")
d = ImageDraw.Draw(img)

# ---- Grano sutil ----
noise = Image.effect_noise((W, H), 12).convert("L")
img = Image.composite(Image.blend(img, Image.new("RGB", (W, H), BLANCO), 0.05), img, noise)

img = img.filter(ImageFilter.SMOOTH)
img.save("public/blog/hablar-del-pasado-en-terapia.png")
img.save("public/blog/hablar-del-pasado-en-terapia.webp", "WEBP", quality=88, method=6)
print("OK: hablar-del-pasado-en-terapia.png/.webp guardados", img.size)
