# -*- coding: utf-8 -*-
"""Ilustración editorial estilo Espai Emocions: 'El dol en dates assenyalades'.

Composición única para este artículo (no reutiliza layouts previos): primera
escena de la serie organizada alrededor de un CALENDARIO mural con una fecha
circulada — la metáfora central del artículo. Interior doméstico al anochecer
del 1 de noviembre (crema atenuado, luz de ocaso). A la izquierda, una gran
ventana con cielo de ocaso tardío (cacao→terracota), una rama desnuda al otro
lado del cristal y tejados lejanos en salvia oscura. Junto a la ventana, una
figura adulta neutra en género, vista de espaldas (jersei terracota luz, pelo
cacao), sostiene un pequeño ramo de flores: la visita del día. Al centro-
derecha, una butaca SALVIA VACÍA girada hacia la ventana — la ausencia con su
lugar — y, sobre una mesita, un marco fotográfico visto por detrás, mirando
hacia la luz. En la pared derecha, el calendario: hoja crema con cabecera
salvia y una única fecha rodeada en terracota. Sin texto legible. Metáfora:
el recuerdo no se cierra; la fecha se habita. Paleta terracota/crema/salvia,
1200x675 (16:9), plano con grano sutil, sin texto.
"""
from PIL import Image, ImageDraw, ImageFilter

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

img = Image.new("RGB", (W, H), CREMA)
d = ImageDraw.Draw(img)

# ---- Pared: crema atenuado por el anochecer, más oscuro arriba ----
for y in range(470):
    t = y / 470
    c0, c1 = (188, 172, 158), (233, 220, 206)
    c = tuple(int(c0[i] + (c1[i] - c0[i]) * (t ** 0.9)) for i in range(3))
    d.line([(0, y), (W, y)], fill=c)

# rodapié
d.rectangle([0, 458, W, 470], fill=(206, 188, 170))
d.line([(0, 458), (W, 458)], fill=(178, 158, 138), width=3)

# ---- Suelo de tablones en penumbra cálida ----
for y in range(470, H):
    t = (y - 470) / (H - 470)
    c0, c1 = (138, 100, 66), (108, 76, 48)
    c = tuple(int(c0[i] + (c1[i] - c0[i]) * t) for i in range(3))
    d.line([(0, y), (W, y)], fill=c)
for k in range(9):
    x0 = 30 + k * 150
    d.line([(x0, 470), (x0 - 46, H)], fill=(92, 64, 40), width=2)
d.line([(0, 470), (W, 470)], fill=(86, 60, 38), width=3)

# ---- Ventana grande a la izquierda: marco de madera y ocaso tardío ----
d.rectangle([130, 90, 470, 420], fill=MADERA_OSC)
# cielo de anochecer: cacao arriba -> terracota -> brasa baja
for y in range(102, 408):
    t = (y - 102) / 306
    if t < 0.62:
        u = t / 0.62
        c0, c1 = (72, 60, 56), (140, 84, 54)
    else:
        u = (t - 0.62) / 0.38
        c0, c1 = (140, 84, 54), (204, 116, 64)
    c = tuple(int(c0[i] + (c1[i] - c0[i]) * (u ** 1.1)) for i in range(3))
    d.line([(142, y), (458, y)], fill=c)
# brasa del ocaso, baja y a la izquierda
glow = Image.new("RGBA", (W, H), (0, 0, 0, 0))
gd = ImageDraw.Draw(glow)
for k in range(40):
    a = int(30 * (1 - k / 40))
    gd.ellipse([180 - k * 3, 330 - k * 1.2, 400 + k * 3, 356 + k * 1.2], fill=(250, 202, 150, a))
img.paste(glow, (0, 0), glow)
d = ImageDraw.Draw(img)
# tejados lejanos en salvia oscura (la ciudad también apaga)
d.polygon([(142, 348), (458, 348), (458, 408), (142, 408)], fill=(64, 74, 60))
for (rx, rw, rh) in ((160, 58, 30), (250, 44, 22), (322, 66, 34), (408, 40, 18)):
    d.rectangle([rx, 348 - rh, rx + rw, 348], fill=(74, 84, 68))
# una ventana lejana encendida
d.rectangle([282, 306, 292, 318], fill=DORADO)
# rama desnuda al otro lado del cristal
def rama(x0, y0, x1, y1, w):
    for k in range(22):
        u = k / 22
        x = x0 + (x1 - x0) * u
        y = y0 + (y1 - y0) * u
        ww = int(w * (1 - 0.6 * u)) + 2
        d.ellipse([x - ww, y - ww, x + ww, y + ww], fill=CAJAO)
rama(120, 150, 300, 130, 6)
rama(240, 136, 340, 112, 3)
rama(250, 138, 318, 160, 3)
rama(180, 142, 232, 108, 2)
# travesaños de la ventana
d.rectangle([296, 90, 306, 420], fill=MADERA_OSC)
d.rectangle([130, 248, 470, 258], fill=MADERA_OSC)
d.line([(142, 253), (458, 253)], fill=(250, 226, 190), width=2)   # reflejo cálido en el listón
# alféizar
d.rectangle([118, 420, 482, 438], fill=MADERA)
d.rectangle([118, 420, 482, 426], fill=MADERA_OSC)

# ---- Calendario mural: la fecha assenyalada ----
CX0, CY0, CX1, CY1 = 946, 128, 1122, 286
d.rectangle([CX0 - 4, CY0 - 4, CX1 + 4, CY1 + 4], fill=(178, 158, 138))   # sombra base
d.rectangle([CX0, CY0, CX1, CY1], fill=CREMA)
d.rectangle([CX0, CY0, CX1, CY0 + 34], fill=SALVIA)
d.line([(CX0, CY0 + 34), (CX1, CY0 + 34)], fill=SALVIA_OSC, width=3)
# anillas del calendario
d.rounded_rectangle([CX0 + 14, CY0 - 8, CX0 + 22, CY0 + 10], 3, fill=MADERA_OSC)
d.rounded_rectangle([CX1 - 22, CY0 - 8, CX1 - 14, CY0 + 10], 3, fill=MADERA_OSC)
# cuadrícula de días (abstracta, sin cifras)
for row in range(5):
    for col in range(7):
        gx = CX0 + 16 + col * 22
        gy = CY0 + 52 + row * 26
        d.rectangle([gx, gy, gx + 13, gy + 15], fill=ARENA)
        d.rectangle([gx, gy, gx + 8, gy + 9], fill=(236, 226, 214))
# la fecha circundada: una sola, en terracota
fx = CX0 + 16 + 4 * 22
fy = CY0 + 52 + 1 * 26
d.ellipse([fx - 6, fy - 5, fx + 19, fy + 20], outline=TERRA, width=5)
d.rectangle([fx, fy, fx + 13, fy + 15], fill=TERRA_SUAVE)

# ---- Figura adulta de espaldas junto a la ventana, con el ramo ----
FX = 560
layer = Image.new("RGBA", (W, H), (0, 0, 0, 0))
ld = ImageDraw.Draw(layer)
# piernas y zapatos
ld.line([(FX - 9, 470), (FX - 12, 594)], fill=(*CAJAO, 255), width=13)
ld.line([(FX + 11, 470), (FX + 15, 594)], fill=(*CAJAO, 255), width=13)
ld.rounded_rectangle([FX - 30, 592, FX - 4, 604], 5, fill=(*CAJAO, 255))
ld.rounded_rectangle([FX + 2, 592, FX + 30, 604], 5, fill=(*CAJAO, 255))
# jersei terracota luz (hombros suaves)
ld.rounded_rectangle([FX - 34, 398, FX + 36, 476], 18, fill=(*TERRA_LUZ, 255))
ld.ellipse([FX - 34, 382, FX + 36, 416], fill=(*TERRA_LUZ, 255))
# cuello del jersei
ld.line([(FX - 14, 396), (FX + 14, 396)], fill=(*TERRA, 255), width=6)
ld.ellipse([FX - 15, 392, FX + 15, 410], fill=(*TERRA, 255))
# nuca y pelo (visto de detrás, sin rostro)
ld.rectangle([FX - 7, 366, FX + 7, 388], fill=(*PIEL, 255))
ld.ellipse([FX - 17, 328, FX + 17, 370], fill=(*CAJAO, 255))
ld.chord([FX - 18, 330, FX + 18, 352], 180, 360, fill=(*CAJAO, 255))
# brazo derecho caído, con el ramo en la mano
ld.line([(FX + 28, 412), (FX + 38, 468)], fill=(*TERRA_LUZ, 255), width=11)
ld.ellipse([FX + 32, 468, FX + 50, 484], fill=(*PIEL, 255))
# ramo pequeño: tallos salvia y flores apagadas (la visita del dia)
for (dx, dy, col) in ((-2, 0, SALVIA_OSC), (10, -6, SALVIA), (20, 2, SALVIA_OSC), (4, 8, SALVIA)):
    ld.line([(FX + 41, 476), (FX + 41 + dx, 476 - 34 + dy)], fill=(*col, 255), width=3)
for (bx, by, r, col) in ((FX + 39, 440, 6, TERRA_SUAVE), (FX + 51, 434, 5, BLANCO),
                          (FX + 61, 442, 6, TERRA_SUAVE), (FX + 45, 428, 4, SALVIA_CLARA)):
    ld.ellipse([bx - r, by - r, bx + r, by + r], fill=(*col, 255))
# filo de luz del ocaso en el contorno izquierdo (contraluz)
ld.arc([FX - 35, 380, FX + 37, 478], 200, 320, fill=(*DORADO_LUZ, 200), width=3)
ld.arc([FX - 18, 328, FX + 18, 370], 60, 190, fill=(*DORADO_LUZ, 170), width=3)
img = Image.alpha_composite(img.convert("RGBA"), layer).convert("RGB")
d = ImageDraw.Draw(img)
# sombra suave de la figura en el suelo, hacia la derecha
sh = Image.new("RGBA", (W, H), (0, 0, 0, 0))
sd = ImageDraw.Draw(sh)
sd.ellipse([FX - 34, 588, FX + 118, 640], fill=(60, 44, 34, 90))
sh = sh.filter(ImageFilter.GaussianBlur(12))
img.paste(sh, (0, 0), sh)
d = ImageDraw.Draw(img)

# ---- Butaca vacía girada hacia la ventana ----
ACX = 910
layer2 = Image.new("RGBA", (W, H), (0, 0, 0, 0))
l2 = ImageDraw.Draw(layer2)
# respaldo salvia con costura superior
l2.rounded_rectangle([ACX - 88, 424, ACX + 88, 532], 20, fill=(*SALVIA, 255))
l2.line([(ACX - 80, 440), (ACX + 80, 440)], fill=(*SALVIA_OSC, 255), width=4)
l2.line([(ACX - 80, 432), (ACX + 80, 432)], fill=(*SALVIA_OSC, 255), width=3)
# cojín de asiento crema
l2.rounded_rectangle([ACX - 78, 512, ACX + 78, 566], 14, fill=(*ARENA, 255))
l2.line([(ACX - 70, 522), (ACX + 70, 522)], fill=(206, 188, 168), width=3)
# brazos
l2.rounded_rectangle([ACX - 106, 480, ACX - 64, 574], 14, fill=(*SALVIA_OSC, 255))
l2.rounded_rectangle([ACX + 64, 480, ACX + 106, 574], 14, fill=(*SALVIA_OSC, 255))
# patas de madera
for lx in (ACX - 70, ACX - 22, ACX + 22, ACX + 70):
    l2.rectangle([lx - 6, 574, lx + 6, 604], fill=(*MADERA_OSC, 255))
img = Image.alpha_composite(img.convert("RGBA"), layer2).convert("RGB")
d = ImageDraw.Draw(img)
# sombra de la butaca
sh2 = Image.new("RGBA", (W, H), (0, 0, 0, 0))
s2 = ImageDraw.Draw(sh2)
s2.ellipse([ACX - 120, 590, ACX + 120, 644], fill=(58, 42, 32, 95))
sh2 = sh2.filter(ImageFilter.GaussianBlur(14))
img.paste(sh2, (0, 0), sh2)
d = ImageDraw.Draw(img)
# luz de la ventana recorre el respaldo: franja cálida fina en el lateral izquierdo
luzb = Image.new("RGBA", (W, H), (0, 0, 0, 0))
lb = ImageDraw.Draw(luzb)
lb.rounded_rectangle([ACX - 92, 426, ACX - 78, 534], 10, fill=(248, 214, 172, 90))
luzb = luzb.filter(ImageFilter.GaussianBlur(6))
img.paste(luzb, (0, 0), luzb)
d = ImageDraw.Draw(img)

# ---- Mesita con el marco fotográfico visto por detrás ----
layer3 = Image.new("RGBA", (W, H), (0, 0, 0, 0))
l3 = ImageDraw.Draw(layer3)
# mesa pequeña de madera
l3.ellipse([712, 474, 788, 490], fill=(*MADERA, 255))
l3.line([(750, 488), (750, 578)], fill=(*MADERA_OSC, 255), width=8)
l3.ellipse([724, 576, 776, 586], fill=(*MADERA_OSC, 255))
# marco girado hacia la ventana: vemos el dorso
l3.rounded_rectangle([706, 414, 760, 470], 4, fill=(*MADERA_OSC, 255))
l3.rectangle([712, 420, 754, 464], fill=(*ARENA, 255))
l3.line([(716, 424), (750, 460)], fill=(206, 188, 168), width=2)
l3.line([(750, 424), (716, 460)], fill=(206, 188, 168), width=2)
# soporte del marco
l3.line([(744, 470), (752, 486)], fill=(*MADERA_OSC, 255), width=4)
img = Image.alpha_composite(img.convert("RGBA"), layer3).convert("RGB")
d = ImageDraw.Draw(img)
# sombra de la mesita
sh3 = Image.new("RGBA", (W, H), (0, 0, 0, 0))
s3 = ImageDraw.Draw(sh3)
s3.ellipse([714, 576, 790, 606], fill=(58, 42, 32, 85))
sh3 = sh3.filter(ImageFilter.GaussianBlur(10))
img.paste(sh3, (0, 0), sh3)
d = ImageDraw.Draw(img)

# ---- Luz del ocaso entrando por la ventana al suelo ----
grad = Image.new("RGBA", (W, H), (0, 0, 0, 0))
gdd = ImageDraw.Draw(grad)
gdd.polygon([(150, 470), (458, 470), (585, 660), (45, 660)], fill=(248, 214, 172, 44))
grad = grad.filter(ImageFilter.GaussianBlur(22))
img.paste(grad, (0, 0), grad)
d = ImageDraw.Draw(img)
# y un velo cálido suave sobre la pared izquierda junto al ventanal
velo = Image.new("RGBA", (W, H), (0, 0, 0, 0))
vd = ImageDraw.Draw(velo)
for x in range(500):
    t = max(0.0, 1 - x / 500)
    vd.line([(x, 90), (x, 470)], fill=(248, 214, 172, int(20 * t)))
img.paste(velo, (0, 0), velo)
d = ImageDraw.Draw(img)

# ---- Viñeta de anochecer (suave, la escena conserva el calor) ----
vig = Image.new("RGBA", (W, H), (0, 0, 0, 0))
vd2 = ImageDraw.Draw(vig)
vd2.rectangle([0, 0, W, H], fill=(24, 18, 14, 78))
vd2.ellipse([-60, -60, W + 60, H + 60], fill=(0, 0, 0, 0))
vig = vig.filter(ImageFilter.GaussianBlur(55))
img = Image.alpha_composite(img.convert("RGBA"), vig).convert("RGB")

# ---- Grano sutil ----
noise = Image.effect_noise((W, H), 13).convert("L")
img = Image.composite(Image.blend(img, Image.new("RGB", (W, H), BLANCO), 0.05), img, noise)

img = img.filter(ImageFilter.SMOOTH)
img.save("public/blog/duelo-fechas-senhaladas.png")
img.save("public/blog/duelo-fechas-senhaladas.webp", "WEBP", quality=88, method=6)
print("OK: duelo-fechas-senhaladas.png/.webp guardados", img.size)