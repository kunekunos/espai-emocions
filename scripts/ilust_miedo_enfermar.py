# -*- coding: utf-8 -*-
"""Ilustración editorial estilo Espai Emocions: 'El miedo a enfermar'.

Escena nocturna minimalista habitada: salón cálido al anochecer. Una
persona adulta sentada en un sofá, arropada con una manta, mira por la
ventana los tejados de Barcelona (roofs dorados por el atardecer). En la
mesita baja, el móvil descansa boca abajo: la espiral de la comprobación
se ha dejado a un lado. Una lámpara cálida y una planta de salvia
acompañan la escena. Metáfora: dejar de vigilarse para volver a habitar
el cuerpo y la vida.
Paleta: terracota #A4511C, crema #F4E8DE, salvia #7B8872,
blanco cálido #FFF9F3, arena #E1D2C6, cacao #30251F.
Formato 1200x675 (16:9), estilo plano con grano suave, sin texto.
"""
import random, math
from PIL import Image, ImageDraw, ImageFilter

W, H = 1200, 675
random.seed(28)

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
NOCHE = (74, 68, 76)
DORADO = (230, 180, 130)
DORADO_SUAVE = (240, 205, 165)
MADERA = (160, 120, 92)

img = Image.new("RGB", (W, H), CREMA)
d = ImageDraw.Draw(img)

# ---- Pared y suelo ----
d.rectangle([0, 0, W, 480], fill=CREMA)
d.line([(0, 480), (W, 480)], fill=ARENA, width=3)
d.rectangle([0, 480, W, H], fill=(230, 211, 191))
for x in range(0, W, 90):
    d.line([(x, 480), (x - 50, H)], fill=(218, 197, 176), width=2)

# ---- Ventana grande a la izquierda: anochecer sobre tejados ----
wx0, wy0, wx1, wy1 = 55, 85, 350, 330
d.rectangle([wx0 - 12, wy0 - 12, wx1 + 12, wy1 + 12], fill=ARENA)
glass = Image.new("RGB", (wx1 - wx0, wy1 - wy0), BLANCO)
gd = ImageDraw.Draw(glass)
gw, gh = glass.size
# cielo de anochecer: de azul-violeta cálido arriba a dorado abajo
C_ARR = (108, 96, 118)
C_MED = (188, 138, 122)
C_BAJ = (236, 178, 124)
for y in range(gh):
    t = y / gh
    if t < 0.55:
        k = t / 0.55
        c = tuple(int(C_ARR[i] + (C_MED[i] - C_ARR[i]) * k) for i in range(3))
    else:
        k = (t - 0.55) / 0.45
        c = tuple(int(C_MED[i] + (C_BAJ[i] - C_MED[i]) * k) for i in range(3))
    gd.line([(0, y), (gw, y)], fill=c)
# luna suave
gd.ellipse([gw - 92, 26, gw - 48, 70], fill=(246, 226, 208))
# tejados de Barcelona en silueta, dos planos
gx = 0
while gx < gw:
    w = random.randint(30, 70)
    h = random.randint(14, 34)
    gd.rectangle([gx, gh - h - 46, gx + w, gh - 40], fill=(150, 108, 96))
    gx += w
gx = 0
while gx < gw:
    w = random.randint(24, 60)
    h = random.randint(8, 22)
    gd.rectangle([gx, gh - h, gx + w, gh], fill=(120, 86, 78))
    gx += w
img.paste(glass, (wx0, wy0))
d.rectangle([wx0 + (wx1 - wx0) // 2 - 4, wy0, wx0 + (wx1 - wx0) // 2 + 4, wy1], fill=ARENA)
d.rectangle([wx0, wy0 + (wy1 - wy0) // 2 - 4, wx1, wy0 + (wy1 - wy0) // 2 + 4], fill=ARENA)

# ---- Cuadro pequeño entre ventana y sofá ----
d.rectangle([395, 130, 475, 210], fill=BLANCO, outline=ARENA, width=3)
d.arc([410, 150, 460, 198], 180, 360, fill=TERRA_LUZ, width=5)

# ---- Sofá (centro) ----
sx0, sy0, sx1, sy1 = 520, 300, 800, 480
# base y respaldo en terracota suave
d.rounded_rectangle([sx0, sy0 - 40, sx1, sy0 + 90], 26, fill=TERRA_LUZ)
d.rounded_rectangle([sx0 - 18, sy0 + 60, sx1 + 18, sy1], 22, fill=TERRA_LUZ)
# cojines del respaldo
d.rounded_rectangle([sx0 + 20, sy0 - 20, sx0 + 130, sy0 + 80], 18, fill=(212, 128, 82))
d.rounded_rectangle([sx0 + 140, sy0 - 20, sx1 - 20, sy0 + 80], 18, fill=(212, 128, 82))
# asiento
d.rounded_rectangle([sx0 + 10, sy0 + 84, sx1 - 10, sy0 + 120], 16, fill=(224, 146, 100))
# patas
d.rectangle([sx0 + 14, sy1, sx0 + 30, sy1 + 14], fill=CAJAO)
d.rectangle([sx1 - 30, sy1, sx1 - 14, sy1 + 14], fill=CAJAO)
# manta de salvia sobre el respaldo
d.polygon([(sx1 - 90, sy0 - 36), (sx1 + 16, sy0 - 24), (sx1 + 6, sy0 + 96), (sx1 - 88, sy0 + 70)], fill=SALVIA)
d.line([(sx1 - 88, sy0 - 36), (sx1 + 16, sy0 - 24)], fill=SALVIA_OSC, width=5)

# ---- Persona sentada, mirando a la ventana (a la izquierda) ----
px, py = 640, 445  # eje de la figura, cadera sobre el asiento
# torso arropado (cacao) con la manta (salvia)
d.rounded_rectangle([px - 52, py - 150, px + 52, py + 30], 30, fill=CAJAO)
d.rounded_rectangle([px - 60, py - 96, px + 60, py + 26], 26, fill=SALVIA)  # manta sobre las piernas
# cabeza girada hacia la ventana: círculo dorado + pelo cacao
hx, hy = px - 26, py - 178
d.ellipse([hx - 20, hy - 20, hx + 20, hy + 20], fill=DORADO_SUAVE)
d.arc([hx - 24, hy - 22, hx + 20, hy + 16], 120, 330, fill=(72, 52, 38), width=11)
d.ellipse([hx - 24, hy - 12, hx - 12, hy + 10], fill=(72, 52, 38))
# brazos envueltos en la manta: solo una mano asomando
d.ellipse([px - 78, py - 60, px - 58, py - 40], fill=DORADO_SUAVE)
# piernas dobladas bajo la manta: volumen ya dibujado; zapatos asomando
d.rounded_rectangle([px - 70, py + 20, px - 44, py + 36], 7, fill=CAJAO)
d.rounded_rectangle([px + 40, py + 20, px + 66, py + 36], 7, fill=CAJAO)

# ---- Mesita baja con el móvil boca abajo ----
tx0, ty = 900, 440
d.rounded_rectangle([tx0, ty, tx0 + 180, ty + 16], 8, fill=MADERA)
d.rectangle([tx0 + 16, ty + 16, tx0 + 24, ty + 60], fill=MADERA)
d.rectangle([tx0 + 156, ty + 16, tx0 + 164, ty + 60], fill=MADERA)
# móvil boca abajo sobre la mesita
ph_x, ph_y = tx0 + 90, ty - 9
d.rounded_rectangle([ph_x - 26, ph_y - 5, ph_x + 26, ph_y + 5], 4, fill=CAJAO)
# resplandor tenue que se apaga: arcos de luz decrecientes
for i, r in enumerate((36, 52, 70)):
    col = tuple(max(0, c - 30 * (i + 1)) if i else c for c in (222, 150, 96))
    col = (
        max(0, 232 - 40 * i),
        max(0, 168 - 45 * i),
        max(0, 118 - 50 * i),
    )
    d.arc([ph_x - r, ph_y - r, ph_x + r, ph_y + r], 200, 340, fill=col, width=3)
# taza humeante al lado: vida cotidiana que sigue
mug_x, mug_y = tx0 + 150, ty - 16
d.rounded_rectangle([mug_x - 14, mug_y - 14, mug_x + 14, mug_y + 2], 4, fill=BLANCO, outline=ARENA, width=2)
d.arc([mug_x + 12, mug_y - 10, mug_x + 24, mug_y + 0], 270, 90, fill=ARENA, width=3)
for i, dy in enumerate((4, 14, 24)):
    col = (216 - 18 * i, 204 - 20 * i, 190 - 22 * i)
    d.arc([mug_x - 8 + i * 3, mug_y - 20 - dy, mug_x + 6 + i * 3, mug_y - 8 - dy], 180, 360, fill=col, width=3)

# ---- Lámpara de pie cálida a la derecha ----
lx = 1060
d.line([(lx, 480), (lx, 240)], fill=CAJAO, width=5)
d.ellipse([lx - 20, 480, lx + 20, 492], fill=CAJAO)
d.polygon([(lx - 36, 244), (lx + 36, 244), (lx + 24, 200), (lx - 24, 200)], fill=TERRA_LUZ)
d.ellipse([lx - 28, 196, lx + 28, 216], fill=DORADO_SUAVE)
# halo de la lámpara
halo = Image.new("RGBA", (W, H), (0, 0, 0, 0))
hd = ImageDraw.Draw(halo)
hd.ellipse([lx - 110, 150, lx + 110, 330], fill=(240, 205, 160, 70))
img = Image.alpha_composite(img.convert("RGBA"), halo).convert("RGB")
d = ImageDraw.Draw(img)

# ---- Planta de salvia en maceta terracota junto al sofá ----
pot_x, pot_y = 480, 480
d.polygon([(pot_x - 28, pot_y), (pot_x + 28, pot_y), (pot_x + 20, pot_y + 62), (pot_x - 20, pot_y + 62)], fill=TERRA)
d.rectangle([pot_x - 32, pot_y - 10, pot_x + 32, pot_y + 4], fill=TERRA_OSC)
for ang in range(-70, 71, 14):
    a = math.radians(ang)
    x2 = pot_x + 58 * math.sin(a)
    y2 = pot_y - 16 - 66 * math.cos(a)
    d.line([(pot_x, pot_y - 12), (x2, y2)], fill=SALVIA, width=4)
    d.ellipse([x2 - 8, y2 - 11, x2 + 8, y2 + 7], fill=SALVIA)

# ---- Luz de la ventana entrando cálida ----
light = Image.new("RGBA", (W, H), (0, 0, 0, 0))
ld = ImageDraw.Draw(light)
ld.polygon([(70, 480), (430, 480), (640, 675), (30, 675)], fill=(240, 205, 160, 80))
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

img.save("public/blog/miedo-a-enfermar-ansiedad-por-la-salud.png", optimize=True)
img.save("public/blog/miedo-a-enfermar-ansiedad-por-la-salud.webp", "WEBP", quality=82, method=6)
print("OK: ilustración generada 1200x675")
print("PNG:", img.size)