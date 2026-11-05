# -*- coding: utf-8 -*-
"""Ilustración editorial estilo Espai Emocions: 'La ràbia continguda'.

Composición única para este artículo (no reutiliza layouts previos):
escena exterior diurna, amplia y luminosa (ningún artículo previo salía del
interior doméstico). Un coche salvia detenido al borde de una avenida (guiño a
la Diagonal del texto: asfalto crema oscuro con línea discontinua). El
MALETERO ABIERTO: dentro, dos maletas (madera y terracota); la tercera, crema
con correa terracota, asoma por encima del borde y BLOQUEA la tapa. La tapa,
inclinada hacia arriba, no puede cerrar: dos arcos de rebote cacao marcan el
gesto. Una figura adulta neutra en género (jersei terracota, pantalón cacao)
está de pie tras el coche, con las dos manos apretando la tapa hacia abajo:
el esfuerzo amable de quien lleva años empujando para que nada se vea. Al
fondo, horizonte crema con una colina salvia suave (Collserola insinuada con
un pequeño repetidor) y un sol pálido terracota luz. Metáfora: lo tragado no
desaparece; un día el maleter no cierra. Paleta terracota/crema/salvia,
1200x675 (16:9), flat con grano sutil, sin texto.
"""
from PIL import Image, ImageDraw, ImageFilter
import math

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

img = Image.new("RGB", (W, H), BLANCO)
d = ImageDraw.Draw(img)

# ---- Cielo: crema con gradiente muy suave ----
for y in range(0, 430):
    t = y / 430
    c = tuple(int(CREMA_CLARO[i] + (CREMA[i] - CREMA_CLARO[i]) * t) for i in range(3))
    d.line([(0, y), (W, y)], fill=c)

# ---- Sol pálido (terracota luz) con halo ----
d.ellipse([120, 78, 240, 198], fill=(238, 210, 182))
d.ellipse([138, 96, 222, 180], fill=TERRA_LUZ)

# ---- Colina de fondo (Collserola insinuada) + repetidor ----
d.ellipse([610, 268, 1520, 560], fill=SALVIA_CLARA)
d.ellipse([680, 300, 1460, 560], fill=(214, 219, 204))
d.rectangle([1024, 286, 1032, 318], fill=SALVIA_OSC)
d.ellipse([1020, 278, 1036, 294], fill=SALVIA_OSC)

# ---- Suelo y avenida ----
d.rectangle([0, 430, W, H], fill=CREMA)
d.rectangle([0, 508, W, 640], fill=ARENA_OSC)
d.rectangle([0, 508, W, 516], fill=ARENA)
d.rectangle([0, 632, W, 640], fill=ARENA)
for x in range(0, W, 90):
    d.rectangle([x, 572, x + 46, 580], fill=BLANCO)

# ---- Sombra del coche ----
sh = Image.new("RGBA", (W, H), (0, 0, 0, 0))
sd = ImageDraw.Draw(sh)
sd.ellipse([360, 596, 950, 660], fill=(120, 96, 74, 70))
sh = sh.filter(ImageFilter.GaussianBlur(8))
img = Image.alpha_composite(img.convert("RGBA"), sh).convert("RGB")
d = ImageDraw.Draw(img)

# ---- Coche (salvia) ----
d.rounded_rectangle([470, 452, 900, 576], 26, fill=SALVIA)
d.rounded_rectangle([540, 384, 830, 470], 30, fill=SALVIA)
d.rounded_rectangle([556, 396, 672, 456], 14, fill=CREMA_CLARO, outline=SALVIA_OSC, width=3)
d.rounded_rectangle([688, 396, 812, 456], 14, fill=CREMA_CLARO, outline=SALVIA_OSC, width=3)
d.ellipse([862, 480, 878, 492], fill=SALVIA_OSC)
d.rounded_rectangle([468, 486, 492, 502], 6, fill=TERRA_LUZ)
for cx in (552, 812):
    d.ellipse([cx - 44, 540, cx + 44, 628], fill=CAJAO)
    d.ellipse([cx - 20, 564, cx + 20, 604], fill=ARENA)

# ---- Maleter abierto: hueco interior ----
d.rounded_rectangle([478, 458, 552, 542], 8, fill=CAJAO)
# maletas dentro: madera abajo, terracota encima
d.rounded_rectangle([486, 496, 524, 540], 5, fill=MADERA, outline=MADERA_OSC, width=2)
d.rounded_rectangle([526, 486, 550, 540], 5, fill=TERRA, outline=TERRA_OSC, width=2)
# la maleta que asoma y bloquea la tapa (crema, correa terracota)
d.rounded_rectangle([492, 430, 546, 494], 8, fill=CREMA_CLARO, outline=ARENA, width=2)
d.rectangle([512, 430, 524, 494], fill=TERRA)
# asa pequeña encima
d.ellipse([506, 418, 532, 436], fill=CREMA_CLARO, outline=CAJAO, width=3)

# ---- Figura adulta (jersei terracota), de pie, mirando al coche ----
# piernas y zapatos
d.rectangle([326, 576, 344, 634], fill=CAJAO)
d.rectangle([356, 576, 374, 634], fill=CAJAO)
d.rounded_rectangle([318, 628, 346, 642], 6, fill=(40, 30, 24))
d.rounded_rectangle([348, 628, 376, 642], 6, fill=(40, 30, 24))
# torso
d.rounded_rectangle([312, 432, 386, 580], 20, fill=TERRA)
# cabeza (mirando a la derecha) con pelo en la nuca
d.ellipse([322, 378, 376, 432], fill=PIEL)
d.pieslice([318, 374, 380, 436], 90, 270, fill=PELO_OSC)
d.ellipse([361, 407, 368, 414], fill=CAJAO)  # ojo, perfil

# ---- Tapa del maleter: inclinada hacia arriba-izquierda, no cierra ----
lid = Image.new("RGBA", (W, H), (0, 0, 0, 0))
ld = ImageDraw.Draw(lid)
ang = math.radians(-128.0)
L = 118
x0, y0 = 556.0, 446.0
x1 = x0 + L * math.cos(ang)
y1 = y0 + L * math.sin(ang)
perp = (-math.sin(ang), math.cos(ang))  # (0.788, -0.616)
th = 12
pts = [(x0, y0), (x1, y1),
       (x1 + perp[0] * th, y1 + perp[1] * th),
       (x0 + perp[0] * th, y0 + perp[1] * th)]
ld.polygon(pts, fill=SALVIA, outline=SALVIA_OSC)
img = Image.alpha_composite(img.convert("RGBA"), lid).convert("RGB")
d = ImageDraw.Draw(img)

# ---- Arcos de rebote: la tapa no baja ----
for r in (16, 26):
    d.arc([498 - r, 300 - r, 498 + r, 300 + r], 210, 320, fill=CAJAO, width=3)

# ---- Brazos: las dos manos aprietan la tapa ----
d.line([(330, 462), (480, 356)], fill=TERRA, width=15)
d.line([(368, 474), (503, 366)], fill=TERRA, width=15)
d.ellipse([472, 346, 490, 364], fill=PIEL_OSC)
d.ellipse([496, 358, 514, 376], fill=PIEL_OSC)

# ---- Maleta pequeña en el suelo, fuera (la que no cabe) ----
d.rounded_rectangle([216, 574, 276, 622], 8, fill=TERRA_SUAVE, outline=TERRA, width=3)
d.rectangle([238, 574, 254, 622], fill=TERRA)
d.rounded_rectangle([236, 564, 256, 578], 5, fill=CAJAO)

# ---- Luz cálida diagonal suave ----
lu = Image.new("RGBA", (W, H), (0, 0, 0, 0))
ldd = ImageDraw.Draw(lu)
ldd.polygon([(120, 78), (240, 78), (640, 675), (300, 675)], fill=(255, 238, 204, 38))
lu = lu.filter(ImageFilter.GaussianBlur(26))
img = Image.alpha_composite(img.convert("RGBA"), lu).convert("RGB")

# ---- Grano sutil ----
noise = Image.effect_noise((W, H), 12).convert("L")
img = Image.composite(Image.blend(img, Image.new("RGB", (W, H), BLANCO), 0.05), img, noise)

img = img.filter(ImageFilter.SMOOTH)
img.save("public/blog/rabia-contenida.png")
img.save("public/blog/rabia-contenida.webp", "WEBP", quality=88, method=6)
print("OK: rabia-contenida.png/.webp guardados", img.size)
