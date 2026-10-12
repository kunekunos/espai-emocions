# -*- coding: utf-8 -*-
"""Ilustración editorial estilo Espai Emocions: 'Amistad con una expareja'.

Escena exterior (layout distinto del interior doméstico de los artículos
vecinos): un banco de parque compartido al final de la tarde. Dos figuras
adultas se han sentado de nuevo en el mismo banco, pero con una distancia
nueva y serena; entre ambas, el espacio vacío de la madera ya no duele.
Un pequeño puente peatonal al fondo conecta las dos orillas del paseo.
Paleta terracota/crema/salvia, luz dorada de ocaso, 1200x675 (16:9),
estilo plano con grano suave, sin texto.
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
CIelo1 = (236, 222, 209)
CIELO2 = (228, 214, 198)

img = Image.new("RGB", (W, H), CREMA)
d = ImageDraw.Draw(img)

# ---- Cielo cálido de final de tarde ----
d.rectangle([0, 0, W, 300], fill=CIelo1)
d.rectangle([0, 180, W, 300], fill=CIELO2)
# sol bajo
d.ellipse([920, 90, 1030, 200], fill=DORADO)
d.ellipse([935, 105, 1015, 185], fill=DORADO_SUAVE)

# ---- Silueta de ciudad baja al fondo (Barcelona doméstica) ----
for bx, bw, bh in [(60, 90, 60), (170, 70, 85), (260, 100, 55), (600, 80, 70),
                   (700, 95, 90), (820, 60, 65), (1060, 85, 75), (1160, 70, 95)]:
    d.rectangle([bx, 300 - bh, bx + bw, 300], fill=ARENA_OSC)

# ---- Paseo: dos orillas y el pequeño puente que las une ----
# agua del estanque central (salvia suave)
d.rectangle([440, 300, 760, 420], fill=SALVIA_SUAVE)
for x in range(450, 760, 60):
    d.line([(x, 340), (x + 34, 344)], fill=SALVIA, width=3)
    d.line([(x, 375), (x + 40, 379)], fill=SALVIA, width=3)
# orillas de tierra
d.rectangle([0, 300, 440, 420], fill=(216, 198, 180))
d.rectangle([760, 300, W, 420], fill=(216, 198, 180))
# suelo del primer plano
d.rectangle([0, 420, W, H], fill=(208, 190, 172))
for x in range(-40, W + 60, 90):
    d.line([(x, 420), (x + 30, H)], fill=(196, 178, 160), width=2)

# puente peatonal sobre el estanque: arco sencillo de madera
d.arc([500, 260, 700, 420], start=180, end=360, fill=MADERA_OSC, width=10)
for tx in range(520, 681, 40):
    d.line([(tx, 300), (tx, 340)], fill=MADERA_OSC, width=6)
d.line([(508, 330), (692, 330)], fill=MADERA_OSC, width=8)

# ---- Banco de parque en el primer plano ----
bank_x0, bank_x1, bank_y = 330, 870, 500
# respaldo
d.rectangle([bank_x0, 392, bank_x1, 404], fill=MADERA_OSC)
for x in range(bank_x0 + 18, bank_x1 - 10, 54):
    d.rectangle([x, 392, x + 10, 404], fill=MADERA)
# asiento
d.rectangle([bank_x0 - 8, 470, bank_x1 + 8, 486], fill=MADERA_OSC)
for x in range(bank_x0, bank_x1 - 20, 60):
    d.rectangle([x, 470, x + 12, 486], fill=MADERA)
# patas
for px in [bank_x0 + 6, bank_x1 - 26]:
    d.rectangle([px, 486, px + 14, 560], fill=MADERA_OSC)
    d.line([(px, 560), (px + 40, 575)], fill=MADERA_OSC, width=8)

# ---- Figura A (mujer, izquierda): sentada, mirada hacia el agua ----
ax = 470
# cabeza
d.ellipse([ax - 24, 404, ax + 24, 452], fill=TERRA)
# pelo corto
d.arc([ax - 30, 396, ax + 30, 452], start=90, end=300, fill=CAJAO, width=12)
# torso
d.polygon([(ax - 34, 452), (ax + 34, 452), (ax + 46, 470), (ax - 46, 470)], fill=SALVIA_OSC)
d.polygon([(ax - 46, 470), (ax + 46, 470), (ax + 40, 556), (ax - 40, 556)], fill=SALVIA)
# brazo apoyado en el muslo, mano en el regazo
d.line([(ax + 30, 466), (ax + 58, 500)], fill=SALVIA_OSC, width=13)
d.ellipse([ax + 50, 492, ax + 72, 514], fill=TERRA_SUAVE)
# piernas dobladas hacia adelante
d.line([(ax - 10, 500), (ax + 66, 508)], fill=SALVIA, width=24)
d.line([(ax + 60, 508), (ax + 108, 552)], fill=SALVIA, width=20)
d.ellipse([ax + 96, 540, ax + 126, 562], fill=CAJAO)

# ---- Figura B (hombre, derecha): sentado con distancia nueva, café en mano ----
bx = 726
# cabeza
d.ellipse([bx - 22, 408, bx + 22, 452], fill=CAJAO)
# cuello y torso
d.polygon([(bx - 32, 452), (bx + 32, 452), (bx + 42, 470), (bx - 42, 470)], fill=TERRA_LUZ)
d.polygon([(bx - 42, 470), (bx + 42, 470), (bx + 36, 552), (bx - 36, 552)], fill=TERRA)
# brazo sosteniendo un vaso (la conversación que ya es posible)
d.line([(bx - 26, 470), (bx - 60, 500)], fill=TERRA_LUZ, width=13)
d.rectangle([bx - 76, 494, bx - 54, 518], fill=DORADO)
# piernas
d.line([(bx + 6, 500), (bx - 50, 512)], fill=TERRA_LUZ, width=24)
d.line([(bx - 44, 512), (bx - 92, 550)], fill=TERRA_LUZ, width=20)
d.ellipse([bx - 110, 538, bx - 80, 560], fill=CAJAO)

# ---- Arbustos de salvia a ambos lados ----
for cx, cy, r in [(150, 470, 46), (215, 492, 34), (1030, 468, 44), (1095, 490, 30)]:
    d.ellipse([cx - r, cy - r, cx + r, cy + r + 8], fill=SALVIA)
    d.ellipse([cx - r + 6, cy - r + 8, cx + r - 10, cy + r], fill=SALVIA_OSC)

# ---- Farola discreta con luz cálida ----
d.rectangle([120, 300, 128, 470], fill=MADERA_OSC)
d.ellipse([110, 286, 138, 314], fill=DORADO)

# ---- Luz dorada del ocaso cruzando la escena ----
light = Image.new("RGBA", (W, H), (0, 0, 0, 0))
ld = ImageDraw.Draw(light)
ld.polygon([(1030, 100), (1200, 100), (700, H), (300, H)], fill=(240, 205, 160, 42))
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

img.save("public/blog/amistad-con-expareja.png", optimize=True)
img.save("public/blog/amistad-con-expareja.webp", "WEBP", quality=82, method=6)
print("OK: ilustracion generada 1200x675 -> public/blog/amistad-con-expareja.{png,webp}")