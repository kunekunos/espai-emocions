# -*- coding: utf-8 -*-
"""Ilustración editorial estilo Espai Emocions: 'Baja por ansiedad'.

Composición única para este artículo (no reutiliza layouts previos):
un interior doméstico sereno en crema cálida. A la izquierda, una
figura adulta descansa en un sofá junto a una mesita con una taza
humenante y una planta de salvia — la baja como pausa, no como
encierro. Junto a la figura, un despertador pequeño apagado sobre
el suelo: el tiempo suspendido. A la derecha, a través de una gran
ventana, el mundo laboral que espera: silueta lejana de ciudad en
tonos arena con un sol terracota bajo. La ventana funciona como
umbral entre el descanso y el regreso: en el marco, dos grupos de
trazos orgánicos (mundo interior / mundo relacional) con un espacio
fino entre ambos. Paleta terracota/crema/salvia, luz dorada suave,
1200x675 (16:9), estilo plano con grano sutil, sin texto.
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

img = Image.new("RGB", (W, H), BLANCO)
d = ImageDraw.Draw(img)

# ---- Pared interior (crema cálida) ----
d.rectangle([0, 0, 1200, 430], fill=(237, 224, 211))
d.rectangle([0, 416, 1200, 430], fill=ARENA)  # zócalo
d.rectangle([0, 430, 1200, H], fill=(228, 212, 197))  # suelo

# ---- Gran ventana a la derecha: umbral hacia el regreso ----
WX0, WY0, WX1, WY1 = 740, 96, 1140, 400
d.rounded_rectangle([WX0 - 8, WY0 - 8, WX1 + 8, WY1 + 8], radius=10, fill=MADERA)
# vista exterior: ciudad lejana en arena con sol terracota bajo
d.rectangle([WX0, WY0, WX1, WY1], fill=DORADO_SUAVE)
sol_cx, sol_cy, sol_r = 1060, 250, 44
d.ellipse([sol_cx - sol_r, sol_cy - sol_r, sol_cx + sol_r, sol_cy + sol_r], fill=TERRA_LUZ)
# siluetas de ciudad (arena oscuro), en bandas para profundidad
d.rectangle([WX0, 330, WX1, WY1], fill=ARENA)
for bx, bw, bh in [(760, 70, 60), (845, 55, 84), (915, 78, 52), (1005, 60, 96), (1075, 50, 66)]:
    d.rectangle([bx, 330 - bh, bx + bw, 330], fill=ARENA_OSC)
# cruz de la ventana (montantes madera)
d.rectangle([WX0, WY0, WX1, WY1 + 0], outline=MADERA)
mid_x = (WX0 + WX1) // 2
mid_y = (WY0 + WY1) // 2
d.rectangle([mid_x - 5, WY0, mid_x + 5, WY1], fill=MADERA)
d.rectangle([WX0, mid_y - 5, WX1, mid_y + 5], fill=MADERA)

# ---- Símbolo EE integrado en el marco: dos grupos de trazos orgánicos ----
# (mundo interior vertical / mundo relacional horizontal, con espacio entre ambos)
sym_x, sym_y = 640, 150
for k in range(3):
    x = sym_x + k * 26
    d.rounded_rectangle([x, sym_y, x + 9, sym_y + 52], radius=4, fill=TERRA)
for k in range(2):
    y = sym_y + 70 + k * 26
    d.rounded_rectangle([sym_x - 4, y, sym_x + 52, y + 9], radius=4, fill=SALVIA)

# ---- Figura adulta descansando en el sofá (izquierda) ----
# sofá
d.rounded_rectangle([120, 300, 470, 430], radius=28, fill=TERRA_SUAVE)
d.rounded_rectangle([108, 268, 172, 420], radius=20, fill=TERRA_SUAVE)  # brazo izq
d.rounded_rectangle([420, 268, 484, 420], radius=20, fill=TERRA_SUAVE)  # brazo der
d.rounded_rectangle([120, 424, 470, 444], radius=10, fill=MADERA_OSC)   # base
# cojín salvia
d.rounded_rectangle([400, 262, 460, 316], radius=16, fill=SALVIA)
# persona sentada, cabeza apoyada, mirada baja — reposo
hx, hy = 240, 232
d.ellipse([hx - 26, hy - 30, hx + 26, hy + 24], fill=CAJAO)          # cabeza
d.rounded_rectangle([hx - 30, hy + 18, hx + 30, hy + 52], radius=14, fill=TERRA_LUZ)  # cuello/torso alto
d.rounded_rectangle([hx - 58, hy + 44, hx + 58, hy + 130], radius=24, fill=SALVIA_OSC)  # torso
d.rounded_rectangle([hx + 34, hy + 88, hx + 92, hy + 112], radius=13, fill=SALVIA_OSC)  # brazo sobre regazo
d.rounded_rectangle([hx - 86, hy + 92, hx - 28, hy + 114], radius=12, fill=SALVIA_OSC)  # otro brazo
# piernas dobladas hacia arriba en el sofá (descanso, no sentada laboral)
d.rounded_rectangle([hx + 30, hy + 140, hx + 150, hy + 168], radius=16, fill=CAJAO)
d.rounded_rectangle([hx + 130, hy + 128, hx + 176, hy + 172], radius=16, fill=CAJAO)

# ---- Mantita terracota sobre las piernas ----
d.rounded_rectangle([hx + 24, hy + 120, hx + 200, hy + 178], radius=22, fill=TERRA)
d.rounded_rectangle([hx + 180, hy + 132, hx + 220, hy + 174], radius=14, fill=TERRA_LUZ)

# ---- Mesita con taza humeante y libro cerrado ----
d.rectangle([520, 356, 570, 440], fill=MADERA)
d.rectangle([500, 340, 590, 358], fill=MADERA_OSC)
# taza con vapor (dos curvas suaves)
d.rounded_rectangle([508, 316, 544, 342], radius=8, fill=BLANCO)
d.rectangle([512, 318, 540, 322], fill=DORADO)  # café
d.arc([514, 288, 540, 316], start=280, end=90, fill=ARENA, width=3)
d.arc([520, 296, 546, 324], start=280, end=90, fill=ARENA_OSC, width=3)
# libro cerrado en la mesita
d.rounded_rectangle([552, 330, 586, 344], radius=3, fill=SALVIA)
d.rectangle([552, 330, 586, 334], fill=SALVIA_OSC)

# ---- Despertador pequeño apagado en el suelo (tiempo suspendido) ----
ax, ay = 610, 428
d.ellipse([ax - 20, ay - 20, ax + 20, ay + 20], fill=CREMA)
d.ellipse([ax - 20, ay - 20, ax + 20, ay + 20], outline=ARENA_OSC, width=2)
d.line([ax, ay, ax, ay - 10], fill=ARENA_OSC, width=2)
d.line([ax, ay, ax + 8, ay + 4], fill=TERRA, width=2)
d.ellipse([ax - 26, ay - 8, ax - 18, ay + 2], fill=ARENA_OSC)
d.ellipse([ax + 18, ay - 8, ax + 26, ay + 2], fill=ARENA_OSC)

# ---- Planta de salvia en maceta terracota (junto al sofá) ----
d.polygon([(200, 440), (246, 440), (236, 500), (210, 500)], fill=TERRA)
d.ellipse([194, 396, 252, 452], fill=SALVIA)
d.ellipse([206, 380, 242, 420], fill=SALVIA_SUAVE)
d.ellipse([216, 370, 232, 396], fill=SALVIA)

# ---- Lámpara de pie cálida encendida (la luz interior que sostiene) ----
d.rectangle([96, 180, 102, 440], fill=MADERA_OSC)
d.rectangle([80, 436, 118, 444], fill=MADERA_OSC)
d.polygon([(70, 184), (128, 184), (118, 130), (80, 130)], fill=DORADO)
d.ellipse([64, 122, 134, 152], fill=DORADO_SUAVE)

# ---- Luz dorada suave desde la ventana hacia el interior ----
light = Image.new("RGBA", (W, H), (0, 0, 0, 0))
ld = ImageDraw.Draw(light)
ld.polygon([(WX0, WY0), (WX1, WY0), (560, H), (260, H)], fill=(240, 205, 160, 38))
img = Image.alpha_composite(img.convert("RGBA"), light).convert("RGB")
d = ImageDraw.Draw(img)

# ---- Grano sutil para textura editorial ----
noise = Image.effect_noise((W, H), 18).convert("L")
noise_rgb = Image.merge("RGB", (noise, noise, noise))
img = Image.blend(img, noise_rgb, 0.04)

# ---- Viñeta cálida muy suave ----
vign = Image.new("L", (W, H), 0)
vd = ImageDraw.Draw(vign)
vd.ellipse([-200, -150, W + 200, H + 150], fill=255)
vign = vign.filter(ImageFilter.GaussianBlur(80))
warm = Image.new("RGB", (W, H), (246, 224, 200))
img = Image.composite(img, warm, vign)

img.save("public/blog/baja-por-ansiedad.png", optimize=True)
img.save("public/blog/baja-por-ansiedad.webp", "WEBP", quality=82, method=6)
print("OK: ilustracion generada 1200x675 -> public/blog/baja-por-ansiedad.{png,webp}")