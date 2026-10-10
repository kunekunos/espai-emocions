# -*- coding: utf-8 -*-
"""Ilustración editorial estilo Espai Emocions: 'Soledad en la pareja'.

Interior cálido al atardecer: dos figuras adultas comparten el mismo
espacio doméstico pero miran en direcciones distintas. Entre ambas,
una lámpara encendida sostiene la luz que podría reunirlas. En la
pared, un cuadro abstracto: dos grupos de trazos orgánicos (mundo
interior y mundo relacional) con un espacio fino entre ambos — la
relación que pide palabra. Paleta terracota/crema/salvia, luz dorada,
1200x675 (16:9), estilo plano con grano suave, sin texto.
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
d.rectangle([0, 0, 880, 430], fill=(236, 222, 209))
d.rectangle([0, 416, 880, 430], fill=ARENA)  # zócalo
# suelo interior
d.rectangle([0, 430, 880, H], fill=(216, 198, 180))
for x in range(-60, 940, 95):
    d.line([(x, 430), (x - 45, H)], fill=(202, 184, 166), width=2)

# ---- Ventana derecha con luz exterior dorada ----
d.rectangle([880, 0, W, H], fill=(230, 226, 208))
d.rectangle([880, 55, 1015, 495], fill=MADERA_OSC)
d.rectangle([892, 67, 1003, 483], fill=LUZ_EXT)
# cruz del marco
d.rectangle([943, 67, 955, 483], fill=MADERA_OSC)
d.rectangle([892, 267, 1003, 279], fill=MADERA_OSC)
# exterior: sol bajo dorado
d.ellipse([900, 120, 1000, 220], fill=DORADO)
# colinas suaves
d.ellipse([860, 300, 1120, 540], fill=LUZ_EXT2)
d.ellipse([960, 330, 1240, 580], fill=(204, 208, 190))
# suelo exterior bajo la ventana
d.rectangle([880, 495, W, H], fill=(216, 206, 188))
for x in range(890, W, 100):
    d.line([(x, 495), (x + 40, H)], fill=(200, 190, 172), width=2)

# ---- Cuadro en la pared: dos grupos de trazos con un espacio fino ----
d.rounded_rectangle([120, 100, 320, 240], 10, fill=MADERA_OSC)
d.rectangle([132, 112, 308, 228], fill=BLANCO)
# grupo A: tres trazos verticales (mundo interior) — salvia
for i in range(3):
    x = 160 + i * 22
    d.line([(x, 138), (x + 6, 202)], fill=SALVIA_OSC, width=9)
# grupo B: tres trazos horizontales (mundo relacional) — terracota
for i in range(3):
    y = 140 + i * 22
    d.line([(228, y), (292, y - 6)], fill=TERRA, width=9)

# ---- Lámpara de pie entre ambos (la luz compartida) ----
lamp_x = 470
d.line([(lamp_x, 560), (lamp_x, 300)], fill=MADERA_OSC, width=7)
d.ellipse([lamp_x - 40, 560, lamp_x + 40, 578], fill=MADERA_OSC)  # base
d.polygon([(lamp_x - 52, 300), (lamp_x + 52, 300), (lamp_x + 30, 250), (lamp_x - 30, 250)], fill=TERRA)
d.ellipse([lamp_x - 46, 288, lamp_x + 46, 312], fill=DORADO)
# halo suave de la lámpara
halo = Image.new("RGBA", (W, H), (0, 0, 0, 0))
hd = ImageDraw.Draw(halo)
hd.ellipse([lamp_x - 150, 160, lamp_x + 150, 470], fill=(240, 205, 160, 46))
img = Image.alpha_composite(img.convert("RGBA"), halo).convert("RGB")
d = ImageDraw.Draw(img)
d.ellipse([lamp_x - 46, 288, lamp_x + 46, 312], fill=DORADO)

# ---- Mesa baja con dos tazas (una apenas tocada) ----
tbl_x, tbl_y = 545, 500
d.rounded_rectangle([tbl_x, tbl_y, tbl_x + 210, tbl_y + 12], 5, fill=MADERA_OSC)
d.rectangle([tbl_x + 14, tbl_y + 12, tbl_x + 26, tbl_y + 70], fill=MADERA_OSC)
d.rectangle([tbl_x + 184, tbl_y + 12, tbl_x + 196, tbl_y + 70], fill=MADERA_OSC)
# taza 1 humeante (junto a la figura del sillón)
cup_x, cup_y = tbl_x + 26, tbl_y - 22
d.rounded_rectangle([cup_x, cup_y - 18, cup_x + 38, cup_y + 4], 7, fill=BLANCO)
d.ellipse([cup_x + 2, cup_y - 22, cup_x + 36, cup_y - 10], fill=(233, 214, 190))
d.arc([cup_x + 34, cup_y - 14, cup_x + 52, cup_y + 4], 270, 90, fill=BLANCO, width=5)
d.arc([cup_x + 6, cup_y - 56, cup_x + 24, cup_y - 30], 90, 270, fill=(210, 190, 175), width=3)
# taza 2 fría (junto a la figura de la mesa), sin vapor
cup2_x, cup2_y = tbl_x + 140, tbl_y - 22
d.rounded_rectangle([cup2_x, cup2_y - 18, cup2_x + 38, cup2_y + 4], 7, fill=SALVIA_SUAVE)
d.ellipse([cup2_x + 2, cup2_y - 22, cup2_x + 36, cup2_y - 10], fill=(150, 158, 142))
d.arc([cup2_x + 34, cup2_y - 14, cup2_x + 52, cup2_y + 4], 270, 90, fill=SALVIA_SUAVE, width=5)

# ---- Sillón salvia (izquierda): figura mirando la lámpara, de frente al vacío ----
sofa_x, sofa_y = 240, 400
d.rounded_rectangle([sofa_x, sofa_y, sofa_x + 250, sofa_y + 135], 22, fill=SALVIA)
d.rounded_rectangle([sofa_x + 12, sofa_y - 56, sofa_x + 238, sofa_y + 26], 16, fill=(136, 150, 126))
d.rounded_rectangle([sofa_x - 16, sofa_y + 20, sofa_x + 266, sofa_y + 146], 18, fill=(110, 123, 101))
# cojín terracota
d.rounded_rectangle([sofa_x + 160, sofa_y - 16, sofa_x + 226, sofa_y + 36], 12, fill=TERRA_LUZ)

# figura 1 sentada, manos en el regazo, cabeza inclinada hacia la lámpara
h1x, h1y = sofa_x + 92, sofa_y - 112
d.ellipse([h1x - 25, h1y - 25, h1x + 25, h1y + 25], fill=DORADO_SUAVE)
d.arc([h1x - 27, h1y - 33, h1x + 23, h1y + 22], 90, 280, fill=(120, 84, 58), width=11)
d.ellipse([h1x - 42, h1y - 9, h1x - 15, h1y + 19], fill=(120, 84, 58))
# torso terracota suave
d.polygon([(h1x - 25, h1y + 18), (h1x + 23, h1y + 18), (h1x + 33, sofa_y - 6), (h1x - 35, sofa_y - 4)], fill=TERRA_SUAVE)
# brazos caídos hacia el regazo
d.line([(h1x - 12, h1y + 26), (h1x + 4, sofa_y + 14)], fill=TERRA_LUZ, width=14)
d.line([(h1x + 16, h1y + 24), (h1x + 30, sofa_y + 10)], fill=TERRA_LUZ, width=14)
d.ellipse([h1x + 24, sofa_y + 6, h1x + 42, sofa_y + 22], fill=DORADO_SUAVE)
d.ellipse([h1x - 4, sofa_y + 10, h1x + 12, sofa_y + 24], fill=DORADO_SUAVE)
# piernas
d.rounded_rectangle([h1x - 38, sofa_y - 6, h1x - 8, sofa_y + 118], 10, fill=(120, 84, 58))
d.rounded_rectangle([h1x - 6, sofa_y - 6, h1x + 24, sofa_y + 114], 10, fill=(134, 96, 68))

# ---- Mesa escritorio (fondo derecha): figura de espaldas, absorbida, girada ----
desk_x, desk_y = 700, 452
d.rounded_rectangle([desk_x, desk_y, desk_x + 150, desk_y + 12], 5, fill=MADERA_OSC)
d.rectangle([desk_x + 10, desk_y + 12, desk_x + 22, desk_y + 78], fill=MADERA_OSC)
d.rectangle([desk_x + 128, desk_y + 12, desk_x + 140, desk_y + 78], fill=MADERA_OSC)
# silla de espaldas
d.rounded_rectangle([desk_x + 30, desk_y - 60, desk_x + 130, desk_y - 2], 14, fill=SALVIA_OSC)
# figura 2: espaldas, solo cabeza y hombros sobre el escritorio, saliendo hacia la ventana
h2x = desk_x + 80
h2y = desk_y - 96
d.ellipse([h2x - 22, h2y - 22, h2x + 22, h2y + 22], fill=DORADO_SUAVE)
d.arc([h2x - 24, h2y - 30, h2x + 24, h2y + 20], 90, 270, fill=(60, 45, 35), width=12)
# hombros
d.polygon([(h2x - 30, h2y + 16), (h2x + 30, h2y + 16), (h2x + 40, desk_y - 2), (h2x - 40, desk_y - 2)], fill=(60, 45, 35))
# libro o pantalla abierta sobre la mesa (mundo propio)
d.polygon([(desk_x + 18, desk_y - 4), (desk_x + 60, desk_y - 26), (desk_x + 60, desk_y - 2), (desk_x + 18, desk_y - 2)], fill=SALVIA)
d.polygon([(desk_x + 102, desk_y - 4), (desk_x + 60, desk_y - 26), (desk_x + 60, desk_y - 2), (desk_x + 102, desk_y - 2)], fill=SALVIA_SUAVE)

# ---- Planta de salvia (izquierda) ----
pot_x, pot_y = 105, 560
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
ld.polygon([(880, 170), (1015, 170), (600, H), (300, H)], fill=(240, 205, 160, 40))
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

img.save("public/blog/soledad-en-la-pareja.png", optimize=True)
img.save("public/blog/soledad-en-la-pareja.webp", "WEBP", quality=82, method=6)
print("OK: ilustracion generada 1200x675 -> public/blog/soledad-en-la-pareja.{png,webp}")