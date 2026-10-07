# -*- coding: utf-8 -*-
"""Ilustración editorial estilo Espai Emocions: 'Crisis de los 40'.

Escena interior cálida y minimalista: una mesa de cumpleaños tranquila
al final de la tarde. A la izquierda, una mesa de madera con una tarta
sin velas encendidas y una taza de té humeante. En el centro, una gran
ventana arqueada con luz exterior crema-salvia; al alféizar, una planta
pequeña. Delante de la ventana, una silla girada hacia el exterior. La
metáfora visual: la tarta cuenta años, la mirada por la ventana pregunta
hacia dónde; entre ambas, la silla vacía espera una decisión. Paleta
terracota/crema/salvia, luz cálida, formato 1200x675 (16:9), estilo
plano con grano suave, sin texto.
"""
from PIL import Image, ImageDraw, ImageFilter

W, H = 1200, 675

CREMA = (244, 232, 222)
BLANCO = (255, 249, 243)
ARENA = (225, 210, 198)
TERRA = (164, 81, 28)
TERRA_LUZ = (198, 108, 60)
TERRA_OSC = (140, 66, 24)
SALVIA = (123, 136, 114)
SALVIA_OSC = (95, 107, 88)
SALVIA_SUAVE = (176, 184, 168)
CAJAO = (48, 37, 31)
MADERA = (160, 120, 92)
MADERA_OSC = (128, 94, 70)
LUZ_EXTERIOR = (228, 224, 205)
LUZ_EXTERIOR2 = (213, 214, 196)

img = Image.new("RGB", (W, H), CREMA)
d = ImageDraw.Draw(img)

# ---- Pared interior (crema cálida) ----
d.rectangle([0, 0, 880, 500], fill=(236, 222, 209))
d.rectangle([0, 480, 880, 500], fill=ARENA)  # zócalo

# ---- Suelo de madera ----
d.rectangle([0, 500, W, H], fill=MADERA)
d.rectangle([0, 500, W, 510], fill=MADERA_OSC)
for i, y in enumerate(range(510, H, 26)):
    tono = MADERA if i % 2 == 0 else (150, 111, 84)
    d.rectangle([0, y, W, min(y + 26, H)], fill=tono)
for y in range(510, H, 26):
    d.line([(0, y), (W, y)], fill=MADERA_OSC, width=2)

# ---- Gran ventana arqueada (centro-derecha) ----
d.rounded_rectangle([760, 60, 1120, 470], 90, fill=LUZ_EXTERIOR)
# cielo exterior en dos bandas suaves
d.rectangle([760, 60, 1120, 265], fill=LUZ_EXTERIOR)
d.rectangle([760, 265, 1120, 470], fill=LUZ_EXTERIOR2)
# arco superior: sol bajo terracota suave
d.ellipse([905, 120, 975, 190], fill=(240, 205, 165))
# colinas salvia al fondo
d.arc([820, 300, 1060, 480], 180, 360, fill=SALVIA_SUAVE, width=26)
d.arc([960, 330, 1180, 500], 180, 360, fill=SALVIA, width=30)
# marco de la ventana en madera
d.rounded_rectangle([760, 60, 1120, 470], 90, outline=MADERA_OSC, width=12)
d.line([(940, 66), (940, 466)], fill=MADERA_OSC, width=10)
d.line([(766, 268), (1114, 268)], fill=MADERA_OSC, width=8)

# ---- Planta de salvia en el alféizar ----
d.rectangle([840, 386, 892, 452], fill=TERRA)          # maceta
d.rounded_rectangle([836, 378, 896, 392], 6, fill=TERRA_LUZ)
for ang, dx in ((-30, -26), (0, 0), (30, 26)):
    x0 = 866 + dx
    d.line([(x0, 388), (x0 + ang, 330)], fill=SALVIA_OSC, width=7)
    d.ellipse([x0 + ang - 12, 306, x0 + ang + 12, 330], fill=SALVIA)

# ---- Silla girada hacia la ventana (centro) ----
# respaldo
d.rounded_rectangle([560, 300, 620, 430], 14, fill=TERRA)
# asiento en perspectiva leve
d.rounded_rectangle([552, 424, 648, 452], 10, fill=TERRA_LUZ)
# patas
d.line([(568, 452), (556, 560)], fill=CAJAO, width=9)
d.line([(634, 452), (650, 560)], fill=CAJAO, width=9)
d.line([(610, 452), (606, 566)], fill=CAJAO, width=7)
# sombra suave en el suelo
sombra = Image.new("RGBA", (W, H), (0, 0, 0, 0))
sd = ImageDraw.Draw(sombra)
sd.ellipse([540, 552, 672, 592], fill=(110, 80, 55, 40))
sombra = sombra.filter(ImageFilter.GaussianBlur(10))
img = Image.alpha_composite(img.convert("RGBA"), sombra).convert("RGB")
d = ImageDraw.Draw(img)

# ---- Mesa de madera (izquierda) con tarta y taza ----
d.rounded_rectangle([110, 470, 430, 500], 8, fill=MADERA)
d.line([(128, 500), (128, 610)], fill=MADERA_OSC, width=12)
d.line([(412, 500), (412, 610)], fill=MADERA_OSC, width=12)
d.line([(268, 500), (268, 616)], fill=MADERA_OSC, width=10)
# tarta sencilla de dos pisos, sin velas encendidas
d.rounded_rectangle([170, 408, 320, 452], 10, fill=BLANCO)
d.rounded_rectangle([190, 372, 300, 410], 10, fill=CREMA)
d.rounded_rectangle([190, 372, 300, 410], 10, outline=ARENA, width=3)
# tres velas apagadas: lo celebrado ya pasó; la pregunta está en la ventana
for x in (222, 245, 268):
    d.rectangle([x - 3, 344, x + 3, 374], fill=TERRA)
    d.line([(x, 344), (x, 332)], fill=CAJAO, width=3)
# taza de té humeante
d.rounded_rectangle([348, 416, 400, 456], 8, fill=SALVIA)
d.arc([388, 424, 414, 448], 270, 90, fill=SALVIA_OSC, width=6)
for dx in (368, 378, 388):
    d.arc([dx - 6, 388, dx + 6, 404], 180, 360, fill=SALVIA_SUAVE, width=3)

# ---- Luz cálida de la ventana proyectada al interior ----
light = Image.new("RGBA", (W, H), (0, 0, 0, 0))
ld = ImageDraw.Draw(light)
ld.polygon([(1120, 60), (760, 60), (760, H), (560, H)], fill=(240, 216, 168, 30))
img = Image.alpha_composite(img.convert("RGBA"), light).convert("RGB")
d = ImageDraw.Draw(img)

# ---- Grano suave para textura editorial ----
noise = Image.effect_noise((W, H), 18).convert("L")
noise_rgb = Image.merge("RGB", (noise, noise, noise))
img = Image.blend(img, noise_rgb, 0.045)

# ---- Viñeta cálida muy suave ----
vign = Image.new("L", (W, H), 0)
vd = ImageDraw.Draw(vign)
vd.ellipse([-200, -150, W + 200, H + 150], fill=255)
vign = vign.filter(ImageFilter.GaussianBlur(80))
warm = Image.new("RGB", (W, H), (246, 224, 200))
img = Image.composite(img, warm, vign)

img.save("public/blog/crisis-de-los-40.png", optimize=True)
img.save("public/blog/crisis-de-los-40.webp", "WEBP", quality=82, method=6)
print("OK: ilustración generada 1200x675")