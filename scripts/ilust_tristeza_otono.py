# -*- coding: utf-8 -*-
"""Ilustración editorial estilo Espai Emocions: 'La tristeza de otoño'.

Composición única para este artículo (no reutiliza layouts previos): primera
escena EXTERIOR de anochecer urbano de la serie. Es justo después del cambio
de hora: el cielo aún tiene restos terracota de un ocaso temprano, pero ya es
de noche en la calle. Una farola encendida (dorado cálido) sostiene la única
luz del primer plano, con su halo suave sobre la acera. A la izquierda, un
árbol desnudo (cacao) deja caer hojas terracota y salvia que se acumulan en el
suelo — la estación despojando. En el centro-derecha, una persona adulta
(abrigo terracota luz, bufanda salvia) camina de vuelta a casa con las manos
en los bolsillos; su sombra alargada apunta lejos de la farola. A la derecha,
una fachada en verde bosque con ventanas doradas encendidas: los interiores
calientes de otros mientras la figura aún está fuera. Metáfora: el ánimo de
otoño no es la oscuridad total; es anochecer a las seis y seguir caminando.
Paleta terracota/crema/salvia, 1200x675 (16:9), plano con grano sutil, sin
texto.
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
BOSQUE = (53, 67, 54)
CAJAO = (48, 37, 31)
DORADO = (240, 205, 160)
DORADO_LUZ = (248, 224, 186)
MADERA = (150, 108, 70)
MADERA_OSC = (126, 88, 54)
PIEL = (232, 206, 186)

img = Image.new("RGB", (W, H), CREMA)
d = ImageDraw.Draw(img)

# ---- Cielo de anochecer temprano: cacao arriba -> terracota -> luz de ocaso ----
HORIZ = 430
for y in range(HORIZ):
    t = y / HORIZ
    if t < 0.55:
        u = t / 0.55
        c0, c1 = (58, 50, 47), (122, 70, 44)
    else:
        u = (t - 0.55) / 0.45
        c0, c1 = (122, 70, 44), TERRA_LUZ
    c = tuple(int(c0[i] + (c1[i] - c0[i]) * (u ** 1.15)) for i in range(3))
    d.line([(0, y), (W, y)], fill=c)

# resto de sol muy bajo: banda dorada suave al horizonte, hacia la izquierda
glow = Image.new("RGBA", (W, H), (0, 0, 0, 0))
gd = ImageDraw.Draw(glow)
for k in range(46):
    alpha = int(34 * (1 - k / 46))
    gd.ellipse([-320 + k * 5, 400 - k * 1.6, 640 + k * 5, 430 + k * 1.6],
               fill=(248, 200, 150, alpha))
img.paste(glow, (0, 0), glow)
d = ImageDraw.Draw(img)

# ---- Suelo: acera en penumbra cálida ----
for y in range(HORIZ, H):
    t = (y - HORIZ) / (H - HORIZ)
    c0, c1 = (209, 192, 174), (182, 162, 140)
    c = tuple(int(c0[i] + (c1[i] - c0[i]) * t) for i in range(3))
    d.line([(0, y), (W, y)], fill=c)
# bordillo
d.line([(0, HORIZ), (W, HORIZ)], fill=(164, 146, 126), width=4)
d.line([(0, HORIZ + 4), (W, HORIZ + 4)], fill=(192, 174, 152), width=2)
# juntas de losa en leve perspectiva
for k in range(9):
    x0 = 60 + k * 150
    d.line([(x0, HORIZ + 4), (x0 - 42, H)], fill=(170, 151, 130), width=2)

# ---- Fachada derecha en verde bosque con ventanas encendidas ----
d.rectangle([905, 96, 1200, HORIZ], fill=BOSQUE)
d.rectangle([880, 70, 1200, 96], fill=(44, 56, 46))  # cornisa
d.rectangle([905, 96, 1200, 108], fill=(44, 56, 46))
# escalonado del skyline
d.rectangle([905, 70, 970, 96], fill=(60, 75, 61))
# ventanas cálidas
wins = [(945, 150), (1055, 150), (1160, 150), (945, 270), (1055, 270), (1160, 270)]
for wx, wy in wins:
    d.rectangle([wx, wy, wx + 44, wy + 58], fill=(58, 49, 42))  # marco oscuro
    d.rectangle([wx + 4, wy + 4, wx + 40, wy + 54], fill=DORADO)
    d.line([(wx + 22, wy + 4), (wx + 22, wy + 54)], fill=(198, 108, 60), width=3)
    d.line([(wx + 4, wy + 29), (wx + 40, wy + 29)], fill=(198, 108, 60), width=3)
# una ventana apagada (salvia) para romper el ritmo
d.rectangle([1160, 390, 1204, 448], fill=(58, 49, 42))
d.rectangle([1164, 394, 1200, 444], fill=SALVIA)
# puerta de madera a pie de calle
d.rounded_rectangle([950, 350, 1005, HORIZ], 6, fill=MADERA_OSC)
d.ellipse([992, 392, 1000, 400], fill=DORADO)

# ---- Árbol desnudo a la izquierda ----
def rama(x0, y0, x1, y1, w):
    steps = 24
    for k in range(steps):
        u = k / steps
        x = x0 + (x1 - x0) * u
        y = y0 + (y1 - y0) * u
        ww = int(w * (1 - 0.55 * u)) + 2
        d.ellipse([x - ww, y - ww, x + ww, y + ww], fill=CAJAO)

rama(150, HORIZ + 6, 138, 240, 11)          # tronco
rama(140, 300, 76, 208, 5)                  # rama alta izquierda
rama(140, 288, 108, 176, 4)                  # rama alta centro
rama(141, 282, 196, 190, 4)                 # rama alta derecha
rama(142, 330, 92, 292, 3)                  # rama media izquierda
rama(143, 332, 205, 286, 3)                 # rama media derecha
rama(144, 380, 180, 344, 3)                 # rama baja derecha
rama(143, 402, 96, 388, 3)                  # rama baja izquierda
# pequeñas puntas orgánicas
for (px, py) in ((76, 208), (108, 176), (196, 190), (205, 286), (180, 344), (96, 388)):
    d.ellipse([px - 5, py - 5, px + 5, py + 5], fill=CAJAO)

# ---- Farola encendida (única luz del primer plano) ----
LX = 392
d.line([(LX, HORIZ + 10), (LX, 196)], fill=CAJAO, width=7)
d.rounded_rectangle([LX - 16, HORIZ - 2, LX + 16, HORIZ + 8], 4, fill=CAJAO)  # base
d.line([(LX - 8, 226), (LX + 8, 226)], fill=CAJAO, width=5)
# cabeza: tulipa cacao con luz dorada dentro
d.polygon([(LX - 26, 196), (LX + 26, 196), (LX + 16, 166), (LX - 16, 166)], fill=CAJAO)
d.ellipse([LX - 16, 190, LX + 16, 218], fill=DORADO_LUZ)
d.rectangle([LX - 16, 166, LX + 16, 178], fill=(58, 49, 42))
# halo grande y suave
halo = Image.new("RGBA", (W, H), (0, 0, 0, 0))
hd = ImageDraw.Draw(halo)
hd.ellipse([LX - 150, 120, LX + 150, 320], fill=(248, 224, 186, 120))
halo = halo.filter(ImageFilter.GaussianBlur(34))
img.paste(halo, (0, 0), halo)
d = ImageDraw.Draw(img)
# charco de luz en la acera, bajo la farola
pool = Image.new("RGBA", (W, H), (0, 0, 0, 0))
pd_ = ImageDraw.Draw(pool)
pd_.ellipse([LX - 190, 470, LX + 190, 620], fill=(248, 224, 186, 66))
pool = pool.filter(ImageFilter.GaussianBlur(26))
img.paste(pool, (0, 0), pool)
d = ImageDraw.Draw(img)

# ---- Figura adulta caminando de vuelta a casa ----
def figura(x, y, s):
    layer = Image.new("RGBA", (W, H), (0, 0, 0, 0))
    ld = ImageDraw.Draw(layer)
    # cabeza
    ld.ellipse([x - 15 * s, y - 168 * s, x + 15 * s, y - 138 * s], fill=(*PIEL, 255))
    # pelo corto cacao
    ld.chord([x - 16 * s, y - 172 * s, x + 16 * s, y - 150 * s], 180, 360, fill=(*CAJAO, 255))
    # abrigo largo hasta la rodilla
    ld.polygon([(x - 27 * s, y - 140 * s), (x + 27 * s, y - 140 * s),
                (x + 22 * s, y - 52 * s), (x - 22 * s, y - 52 * s)], fill=(*TERRA_LUZ, 255))
    # solapas
    ld.line([(x - 6 * s, y - 138 * s), (x - 20 * s, y - 118 * s)], fill=(*TERRA, 255), width=int(4 * s))
    ld.line([(x + 6 * s, y - 138 * s), (x + 20 * s, y - 118 * s)], fill=(*TERRA, 255), width=int(4 * s))
    # bufanda salvia
    ld.line([(x - 17 * s, y - 136 * s), (x + 17 * s, y - 136 * s)], fill=(*SALVIA, 255), width=int(9 * s))
    ld.line([(x + 12 * s, y - 132 * s), (x + 26 * s, y - 104 * s)], fill=(*SALVIA, 255), width=int(7 * s))
    # brazos dentro de los bolsillos
    ld.line([(x - 24 * s, y - 130 * s), (x - 20 * s, y - 92 * s)], fill=(*TERRA_LUZ, 255), width=int(9 * s))
    ld.line([(x + 24 * s, y - 130 * s), (x + 19 * s, y - 92 * s)], fill=(*TERRA_LUZ, 255), width=int(9 * s))
    # piernas en paso
    ld.line([(x - 7 * s, y - 54 * s), (x - 22 * s, y)], fill=(*CAJAO, 255), width=int(11 * s))
    ld.line([(x + 8 * s, y - 54 * s), (x + 26 * s, y - 2 * s)], fill=(*CAJAO, 255), width=int(11 * s))
    # zapatos
    ld.rounded_rectangle([x - 33 * s, y - 7 * s, x - 12 * s, y + 4 * s], 4 * s, fill=(*CAJAO, 255))
    ld.rounded_rectangle([x + 18 * s, y - 8 * s, x + 42 * s, y + 3 * s], 4 * s, fill=(*CAJAO, 255))
    return layer

fig = figura(660, 566, 1.5)
img = Image.alpha_composite(img.convert("RGBA"), fig).convert("RGB")
d = ImageDraw.Draw(img)

# ---- Sombra alargada de la figura, hacia la izquierda (luz de la farola) ----
shadow = Image.new("RGBA", (W, H), (0, 0, 0, 0))
sd = ImageDraw.Draw(shadow)
sd.polygon([
    (636, 566), (684, 566),
    (470, 496), (438, 548),
    (502, 448), (542, 466),
], fill=(70, 58, 48, 96))
shadow = shadow.filter(ImageFilter.GaussianBlur(10))
img.paste(shadow, (0, 0), shadow)
d = ImageDraw.Draw(img)

# ---- Hojas cayendo (terracota y salvia) ----
leaves = Image.new("RGBA", (W, H), (0, 0, 0, 0))
ld2 = ImageDraw.Draw(leaves)
random.seed(261026)
falling = [(215, 300, 12, TERRA), (258, 372, 9, TERRA_LUZ), (330, 250, 10, SALVIA),
           (188, 214, 8, SALVIA_OSC), (286, 462, 11, TERRA), (362, 342, 8, TERRA_SUAVE),
           (236, 148, 9, SALVIA), (470, 210, 10, TERRA_LUZ), (540, 320, 8, SALVIA),
           (150, 320, 7, TERRA), (408, 130, 9, TERRA_SUAVE), (620, 168, 8, SALVIA_OSC),
           (700, 240, 7, TERRA_LUZ), (780, 180, 6, SALVIA)]
for (lx, ly, r, col) in falling:
    wob = random.uniform(0.7, 1.4)
    ang = random.choice((24, -30, 40, -18))
    # elipse girada aproximada: dos elipses superpuestas
    ld2.ellipse([lx - r * wob, ly - r * 0.55, lx + r * wob, ly + r * 0.55], fill=(*col, 235))
    ld2.ellipse([lx - r * 0.5, ly - r * 0.75, lx + r * 0.5, ly + r * 0.75], fill=(*col, 235))
# hojas en el suelo
ground = [(210, 448, 11, TERRA), (250, 456, 9, SALVIA), (320, 442, 10, TERRA_LUZ),
          (508, 452, 12, TERRA), (562, 466, 9, SALVIA_OSC), (760, 448, 10, TERRA),
          (822, 462, 8, TERRA_SUAVE), (120, 470, 9, SALVIA), (668, 480, 10, TERRA_LUZ),
          (410, 470, 8, SALVIA)]
for (lx, ly, r, col) in ground:
    ld2.ellipse([lx - r, ly - r * 0.42, lx + r, ly + r * 0.42], fill=(*col, 240))
    ld2.ellipse([lx - r * 0.45, ly - r * 0.3, lx + r * 0.45, ly + r * 0.3], fill=(*col, 240))
img.paste(leaves, (0, 0), leaves)
d = ImageDraw.Draw(img)

# ---- Luz de farola muy suave sobre el primer plano izquierdo ----
grad = Image.new("RGBA", (W, H), (0, 0, 0, 0))
gd2 = ImageDraw.Draw(grad)
for x in range(W):
    t = max(0.0, 1 - abs(x - LX) / 520)
    gd2.line([(x, 0), (x, H)], fill=(248, 224, 186, int(26 * t)))
img.paste(grad, (0, 0), grad)
d = ImageDraw.Draw(img)

# ---- Grano sutil ----
noise = Image.effect_noise((W, H), 14).convert("L")
img = Image.composite(Image.blend(img, Image.new("RGB", (W, H), BLANCO), 0.06), img, noise)

# ---- Suavizado ----
img = img.filter(ImageFilter.SMOOTH)
img.save("public/blog/tristeza-de-otono.png")
img.save("public/blog/tristeza-de-otono.webp", "WEBP", quality=88, method=6)
print("OK: tristeza-de-otono.png/.webp guardados", img.size)