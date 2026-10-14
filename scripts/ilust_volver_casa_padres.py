# -*- coding: utf-8 -*-
"""Ilustración editorial estilo Espai Emocions: 'Volver a casa de los padres'.

Composición única para este artículo (no reutiliza layouts previos):
una figura adulta de pie en un umbral, entre dos espacios. A la izquierda
(el interior más cálido, crema), la casa de la infancia: mesa familiar,
dos sillas vacías que esperan, lámpara encendida, una planta de salvia
y marcos con huellas de la historia familiar en la pared. A la derecha
(un plano más frío, arena), la vida propia que queda en pausa: una
maleta cerrada, cajas apiladas y una puerta con vista a la ciudad —
el piso propio que se ha quedado o el que se busca. La figura adulta
sostiene ambas direcciones sin caerse en ninguna: cuerpo de perfil,
una mano apoyada en el marco de la puerta, peso repartido. En el marco
de la puerta se integran los seis trazos orgánicos del símbolo EE
(mundo interior vertical / mundo relacional horizontal). Paleta
terracota/crema/salvia, luz dorada de interior, 1200x675 (16:9),
estilo plano con grano sutil, sin texto.
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

# ---- Lado izquierdo: la casa de la infancia (crema cálida) ----
d.rectangle([0, 0, 560, 430], fill=(237, 224, 211))
d.rectangle([0, 416, 560, 430], fill=ARENA)          # zócalo
d.rectangle([0, 430, 560, H], fill=(228, 212, 197))   # suelo

# ---- Lado derecho: la vida en pausa (arena más neutra) ----
d.rectangle([560, 0, 1200, 430], fill=(230, 218, 205))
d.rectangle([560, 416, 1200, 430], fill=ARENA_OSC)
d.rectangle([560, 430, 1200, H], fill=(219, 203, 186))

# ---- La puerta-umbral en el centro (donde vive la figura) ----
DX0, DX1 = 560, 776
d.rectangle([DX0 - 14, 40, DX1 + 14, 440], fill=MADERA)          # marco
d.rectangle([DX0, 54, DX1, 430], fill=CREMA)                     # hoja abierta
d.rectangle([DX0 + 6, 60, DX1 - 6, 424], fill=(240, 232, 219))   # interior hoja

# Símbolo EE en el marco: dos grupos de trazos orgánicos con espacio fino
sym_x, sym_y = 590, 84
for k in range(3):
    x = sym_x + k * 24
    d.rounded_rectangle([x, sym_y, x + 8, sym_y + 46], radius=4, fill=TERRA)
for k in range(2):
    y = sym_y + 62 + k * 24
    d.rounded_rectangle([sym_x - 4, y, sym_x + 46, y + 8], radius=4, fill=SALVIA)

# ---- Detalles de la casa (izquierda): mesa familiar y sillas que esperan ----
# mesa
d.rectangle([150, 340, 320, 356], fill=MADERA_OSC)
d.rectangle([162, 356, 174, 432], fill=MADERA_OSC)
d.rectangle([296, 356, 308, 432], fill=MADERA_OSC)
# tazas sobre la mesa (una para cada uno, una para quien vuelve)
d.rounded_rectangle([196, 322, 220, 342], radius=5, fill=BLANCO)
d.rectangle([198, 324, 218, 328], fill=DORADO)
d.rounded_rectangle([248, 322, 272, 342], radius=5, fill=BLANCO)
d.rectangle([250, 324, 270, 328], fill=DORADO)
# silla de madera vacía junto a la mesa
d.rectangle([96, 300, 104, 430], fill=MADERA)
d.rounded_rectangle([84, 288, 116, 300], radius=6, fill=MADERA_OSC)
d.rectangle([84, 372, 116, 380], fill=MADERA)
d.rectangle([86, 380, 92, 428], fill=MADERA)
d.rectangle([108, 380, 114, 428], fill=MADERA)
# segunda silla más pequeña, más lejos
d.rectangle([344, 316, 350, 430], fill=MADERA_OSC)
d.rounded_rectangle([334, 306, 360, 316], radius=5, fill=MADERA_OSC)
d.rectangle([334, 376, 360, 382], fill=MADERA_OSC)
d.rectangle([336, 382, 341, 428], fill=MADERA_OSC)
d.rectangle([353, 382, 358, 428], fill=MADERA_OSC)

# lámpara de pie cálida encendida (la casa que recibe)
d.rectangle([48, 180, 54, 430], fill=MADERA_OSC)
d.rectangle([36, 426, 66, 434], fill=MADERA_OSC)
d.polygon([(28, 184), (74, 184), (66, 136), (36, 136)], fill=DORADO)
d.ellipse([22, 128, 80, 154], fill=DORADO_SUAVE)

# planta de salvia grande (la familia que sigue viva)
d.polygon([(480, 430), (534, 430), (524, 496), (492, 496)], fill=TERRA)
d.ellipse([462, 368, 540, 440], fill=SALVIA)
d.ellipse([478, 344, 522, 388], fill=SALVIA_SUAVE)
d.ellipse([488, 330, 512, 362], fill=SALVIA)

# marcos en la pared: la historia familiar
d.rectangle([380, 120, 428, 162], outline=MADERA, width=3)
d.rectangle([388, 128, 420, 154], fill=SALVIA_SUAVE)
d.rectangle([444, 96, 492, 132], outline=MADERA, width=3)
d.rectangle([452, 102, 484, 126], fill=DORADO_SUAVE)

# ---- La vida en pausa (derecha): maleta y cajas ----
# maleta cerrada
d.rounded_rectangle([830, 350, 950, 424], radius=12, fill=TERRA_LUZ)
d.rectangle([882, 332, 898, 352], fill=MADERA_OSC)          # asa
d.line([880, 352, 900, 352], fill=MADERA_OSC, width=4)
d.rectangle([830, 384, 950, 390], fill=TERRA)                # banda
d.ellipse([844, 408, 856, 420], fill=MADERA_OSC)           # ruedas
d.ellipse([924, 408, 936, 420], fill=MADERA_OSC)
# cajas apiladas
d.rectangle([864, 240, 950, 320], fill=SALVIA_SUAVE)
d.rectangle([864, 240, 950, 252], fill=SALVIA)
d.rectangle([874, 240, 878, 320], fill=SALVIA)
d.rectangle([910, 240, 914, 320], fill=SALVIA)
d.rounded_rectangle([880, 254, 934, 264], radius=4, fill=BLANCO)
d.rectangle([888, 172, 960, 240], fill=DORADO_SUAVE)
d.rectangle([888, 172, 960, 182], fill=DORADO)
d.line([924, 182, 924, 240], fill=DORADO, width=3)
# puerta al fondo con vista de ciudad (el porvenir)
d.rectangle([1000, 120, 1140, 430], fill=MADERA_OSC)
d.rectangle([1008, 128, 1132, 424], fill=DORADO_SUAVE)
d.rectangle([1008, 350, 1132, 424], fill=ARENA)
for bx, bw, bh in [(1020, 40, 40), (1066, 34, 58), (1100, 26, 30)]:
    d.rectangle([bx, 350 - bh, bx + bw, 350], fill=ARENA_OSC)
d.ellipse([1076, 220, 1110, 254], fill=TERRA_LUZ)
d.rectangle([1068, 268, 1072, 424], fill=MADERA_OSC)
d.rectangle([1008, 268, 1132, 272], fill=MADERA_OSC)

# ---- Figura adulta en el umbral: el peso repartido entre dos mundos ----
hx, hy = 668, 246
d.ellipse([hx - 25, hy - 30, hx + 25, hy + 22], fill=CAJAO)                    # cabeza
d.rounded_rectangle([hx - 28, hy + 14, hx + 28, hy + 46], radius=13, fill=TERRA_LUZ)  # cuello
d.rounded_rectangle([hx - 52, hy + 40, hx + 52, hy + 150], radius=22, fill=SALVIA_OSC)  # abrigo
d.rounded_rectangle([hx - 66, hy + 150, hx - 40, hy + 296], radius=12, fill=CAJAO)      # pierna izq
d.rounded_rectangle([hx + 40, hy + 150, hx + 66, hy + 296], radius=12, fill=CAJAO)      # pierna der
d.ellipse([hx - 76, hy + 288, hx - 36, hy + 320], fill=CAJAO)                  # pie izq
d.ellipse([hx + 36, hy + 288, hx + 76, hy + 320], fill=CAJAO)                  # pie der
# una mano apoyada en el marco de la puerta (sostiene el umbral)
d.rounded_rectangle([hx - 100, hy + 60, hx - 66, hy + 78], radius=9, fill=SALVIA_OSC)
d.rounded_rectangle([hx - 96, hy + 70, hx - 78, hy + 92], radius=8, fill=SALVIA_OSC)
# la otra mano sostiene la maleta (la vida propia no se suelta)
d.rounded_rectangle([hx + 46, hy + 120, hx + 96, hy + 140], radius=10, fill=SALVIA_OSC)

# ---- Luz dorada desde la casa (izquierda) que alcanza el umbral ----
light = Image.new("RGBA", (W, H), (0, 0, 0, 0))
ld = ImageDraw.Draw(light)
ld.polygon([(0, 60), (560, 60), (700, H), (80, H)], fill=(240, 205, 160, 42))
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

img.save("public/blog/volver-casa-padres-edad-adulta.png", optimize=True)
img.save("public/blog/volver-casa-padres-edad-adulta.webp", "WEBP", quality=82, method=6)
print("OK: ilustracion generada 1200x675 -> public/blog/volver-casa-padres-edad-adulta.{png,webp}")