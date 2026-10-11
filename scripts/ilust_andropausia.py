# -*- coding: utf-8 -*-
"""Ilustración editorial estilo Espai Emocions: 'Andropausia y salud emocional'.

Interior cálido al atardecer: un hombre adulto sentado en un sillón salvia,
con una taza humeante, mira por la ventana la luz dorada que baja. Sobre la
mesa baja, un libro cerrado y un reloj de agujas: la pausa del motor y el
tiempo que pide otra forma de habitarse. En la pared, un cuadro abstracto con
un grupo de trazos verticales orgánicos — el mundo interior en revisión.
Paleta terracota/crema/salvia, luz dorada, 1200x675 (16:9), estilo plano con
grano suave, sin texto.
"""
import math
from PIL import Image, ImageDraw, ImageFilter

W, H = 1200, 675

CREMA = (244, 232, 222)
BLANCO = (255, 249, 243)
ARENA = (225, 210, 198)
ARENA_OSC = (208, 190, 175)
TERRA = (164, 81, 28)
TERRA_LUZ = (198, 108, 60)
TERRA_SUAVE = (222, 160, 118)
SALVIA = (123, 136, 114)
SALVIA_OSC = (95, 107, 88)
SALVIA_SUAVE = (176, 184, 168)
CAJAO = (48, 37, 31)
MADERA = (160, 120, 92)
MADERA_OSC = (128, 94, 70)
DORADO = (238, 190, 140)
DORADO_SUAVE = (240, 205, 165)
LUZ_EXT = (228, 224, 205)
LUZ_EXT2 = (213, 214, 196)

img = Image.new("RGB", (W, H), CREMA)
d = ImageDraw.Draw(img)

# ---- Pared interior (crema cálida) ----
d.rectangle([0, 0, 800, 430], fill=(236, 222, 209))
d.rectangle([0, 416, 800, 430], fill=ARENA)  # zócalo
# suelo interior
d.rectangle([0, 430, 800, H], fill=(216, 198, 180))
for x in range(-60, 860, 95):
    d.line([(x, 430), (x - 45, H)], fill=(202, 184, 166), width=2)

# ---- Ventana derecha con luz exterior dorada (sol bajo) ----
d.rectangle([800, 0, W, H], fill=(230, 226, 208))
d.rectangle([800, 55, 940, 495], fill=MADERA_OSC)
d.rectangle([812, 67, 928, 483], fill=LUZ_EXT)
# cruz del marco
d.ellipse([818, 120, 918, 220], fill=DORADO)  # sol bajo
d.rectangle([864, 67, 876, 483], fill=MADERA_OSC)
d.rectangle([812, 267, 928, 279], fill=MADERA_OSC)
# colinas suaves
d.ellipse([780, 300, 1040, 540], fill=LUZ_EXT2)
d.ellipse([880, 330, 1160, 580], fill=(204, 208, 190))
# suelo exterior bajo la ventana
d.rectangle([800, 495, W, H], fill=(216, 206, 188))
for x in range(810, W, 100):
    d.line([(x, 495), (x + 40, H)], fill=(200, 190, 172), width=2)

# ---- Cuadro en la pared: trazos verticales orgánicos (mundo interior en revisión) ----
d.rounded_rectangle([110, 95, 300, 235], 10, fill=MADERA_OSC)
d.rectangle([122, 107, 288, 223], fill=BLANCO)
for i in range(4):
    x = 150 + i * 24
    # trazo con leve inclinación: el mundo interior se mira desde otro ángulo
    d.line([(x, 132), (x + 8, 198)], fill=SALVIA_OSC, width=9)
# un trazo horizontal terracota que se cruza: lo relacional entra en escena
d.line([(168, 196), (252, 188)], fill=TERRA, width=9)

# ---- Sillón salvia (izquierda): figura masculina adulta sentada, perfil hacia la ventana ----
sofa_x, sofa_y = 190, 395
d.rounded_rectangle([sofa_x, sofa_y, sofa_x + 260, sofa_y + 140], 22, fill=SALVIA)
d.rounded_rectangle([sofa_x + 12, sofa_y - 58, sofa_x + 248, sofa_y + 26], 16, fill=(136, 150, 126))
d.rounded_rectangle([sofa_x - 16, sofa_y + 22, sofa_x + 276, sofa_y + 152], 18, fill=(110, 123, 101))
# cojín terracota
d.rounded_rectangle([sofa_x + 26, sofa_y - 18, sofa_x + 92, sofa_y + 36], 12, fill=TERRA_LUZ)

# figura sentada: cabeza, torso, manos en torno a la taza
h1x, h1y = sofa_x + 130, sofa_y - 118
d.ellipse([h1x - 26, h1y - 26, h1x + 26, h1y + 26], fill=DORADO_SUAVE)
# pelo corto masculino (arco superior más denso)
d.arc([h1x - 28, h1y - 34, h1x + 26, h1y + 20], 60, 300, fill=(70, 50, 38), width=13)
# nuca / patilla
d.ellipse([h1x + 4, h1y - 6, h1x + 24, h1y + 16], fill=(70, 50, 38))
# torso: jersey terracota suave
d.polygon([(h1x - 30, h1y + 20), (h1x + 28, h1y + 20), (h1x + 40, sofa_y - 4), (h1x - 42, sofa_y - 2)], fill=TERRA_SUAVE)
# brazos hacia delante, manos en la taza
d.line([(h1x - 14, h1y + 28), (h1x + 18, sofa_y + 34)], fill=TERRA_LUZ, width=15)
d.line([(h1x + 22, h1y + 26), (h1x + 34, sofa_y + 26)], fill=TERRA_LUZ, width=15)
# piernas
d.rounded_rectangle([h1x - 44, sofa_y - 4, h1x - 10, sofa_y + 122], 10, fill=(70, 50, 38))
d.rounded_rectangle([h1x - 8, sofa_y - 4, h1x + 26, sofa_y + 118], 10, fill=(84, 62, 46))

# ---- Mesa baja delante: taza humeante, libro cerrado y reloj ----
tbl_x, tbl_y = 330, 505
d.rounded_rectangle([tbl_x, tbl_y, tbl_x + 250, tbl_y + 12], 5, fill=MADERA_OSC)
d.rectangle([tbl_x + 16, tbl_y + 12, tbl_x + 28, tbl_y + 72], fill=MADERA_OSC)
d.rectangle([tbl_x + 222, tbl_y + 12, tbl_x + 234, tbl_y + 72], fill=MADERA_OSC)
# taza humeante (entre las manos de la figura)
cup_x, cup_y = tbl_x + 30, tbl_y - 24
d.rounded_rectangle([cup_x, cup_y - 20, cup_x + 40, cup_y + 4], 7, fill=BLANCO)
d.ellipse([cup_x + 2, cup_y - 24, cup_x + 38, cup_y - 11], fill=(233, 214, 190))
d.arc([cup_x + 36, cup_y - 15, cup_x + 55, cup_y + 4], 270, 90, fill=BLANCO, width=5)
d.arc([cup_x + 8, cup_y - 60, cup_x + 26, cup_y - 32], 90, 270, fill=(210, 190, 175), width=3)
d.arc([cup_x + 18, cup_y - 74, cup_x + 34, cup_y - 44], 90, 270, fill=(216, 198, 182), width=3)
# libro cerrado (la pausa)
bk_x, bk_y = tbl_x + 110, tbl_y - 16
d.rounded_rectangle([bk_x, bk_y - 8, bk_x + 74, bk_y + 4], 4, fill=SALVIA)
d.line([(bk_x + 37, bk_y - 8), (bk_x + 37, bk_y + 4)], fill=SALVIA_OSC, width=3)
# reloj de agujas pequeño (el tiempo con otro ritmo)
cl_x, cl_y = tbl_x + 216, tbl_y - 26
d.ellipse([cl_x - 18, cl_y - 18, cl_x + 18, cl_y + 18], fill=BLANCO, outline=MADERA_OSC, width=3)
d.line([(cl_x, cl_y), (cl_x, cl_y - 11)], fill=CAJAO, width=3)   # minuta arriba
d.line([(cl_x, cl_y), (cl_x - 8, cl_y + 4)], fill=TERRA, width=3)  # horaria en diagonal

# ---- Planta de salvia (izquierda, vida que sigue creciendo) ----
pot_x, pot_y = 95, 560
d.polygon([(pot_x - 32, pot_y), (pot_x + 32, pot_y), (pot_x + 23, pot_y + 66), (pot_x - 23, pot_y + 66)], fill=TERRA)
d.rectangle([pot_x - 36, pot_y - 12, pot_x + 36, pot_y], fill=TERRA_LUZ)
for ang in range(-70, 71, 14):
    a = math.radians(ang)
    x2 = pot_x + 74 * math.sin(a)
    y2 = pot_y - 16 - 88 * math.cos(a)
    d.line([(pot_x, pot_y - 10), (x2, y2)], fill=SALVIA, width=6)
    d.ellipse([x2 - 11, y2 - 15, x2 + 11, y2 + 9], fill=SALVIA)

# ---- Luz dorada inclinada desde la ventana hacia el interior ----
light = Image.new("RGBA", (W, H), (0, 0, 0, 0))
ld = ImageDraw.Draw(light)
ld.polygon([(800, 170), (940, 170), (560, H), (280, H)], fill=(240, 205, 160, 42))
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

img.save("public/blog/andropausia-salud-emocional.png", optimize=True)
img.save("public/blog/andropausia-salud-emocional.webp", "WEBP", quality=82, method=6)
print("OK: ilustracion generada 1200x675 -> public/blog/andropausia-salud-emocional.{png,webp}")