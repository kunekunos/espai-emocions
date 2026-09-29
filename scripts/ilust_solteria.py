# -*- coding: utf-8 -*-
"""Ilustración editorial estilo Espai Emocions: 'La soltería en la edad adulta'.

Escena diurna minimalista habitada: una persona adulta sentada en una
terracecita de Barcelona con una taza y un cuaderno, mirando hacia los
tejados y al cielo. La mesa de dos plazas tiene una sola silla, pero el
espacio está cuidado y lleno de vida: planta de salvia, lámpara cálida,
una ventana encendida al fondo. Metáfora: una vida propia habitada, sin
justificación ni espera.
Paleta: terracota #A4511C, crema #F4E8DE, salvia #7B8872,
blanco cálido #FFF9F3, arena #E1D2C6, cacao #30251F.
Formato 1200x675 (16:9), estilo plano con grano suave, sin texto.
"""
import random, math
from PIL import Image, ImageDraw, ImageFilter

W, H = 1200, 675
random.seed(29)

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
DORADO_SUAVE = (240, 205, 165)
MADERA = (160, 120, 92)
CIELO_ARR = (196, 150, 132)
CIELO_BAJ = (244, 232, 222)

img = Image.new("RGB", (W, H), CREMA)
d = ImageDraw.Draw(img)

# ---- Pared exterior crema y línea de suelo ----
d.rectangle([0, 0, W, 470], fill=CREMA)
d.line([(0, 470), (W, 470)], fill=ARENA, width=3)
d.rectangle([0, 470, W, H], fill=(230, 211, 191))
for x in range(-60, W + 60, 84):
    d.line([(x, 470), (x + 46, H)], fill=(218, 197, 176), width=2)

# ---- Cielo con tejados de Barcelona al fondo (franja superior) ----
sky_h = 210
sky = Image.new("RGB", (W, sky_h), BLANCO)
sd = ImageDraw.Draw(sky)
for y in range(sky_h):
    t = y / sky_h
    c = tuple(int(CIELO_ARR[i] + (CIELO_BAJ[i] - CIELO_ARR[i]) * t) for i in range(3))
    sd.line([(0, y), (W, y)], fill=c)
# sol suave
sd.ellipse([W - 210, 46, W - 150, 106], fill=(247, 222, 196))
sd.ellipse([W - 196, 60, W - 164, 92], fill=DORADO_SUAVE)
# tejados dos planos
gx = 0
while gx < W:
    w = random.randint(36, 80)
    h = random.randint(16, 44)
    sd.rectangle([gx, sky_h - h - 18, gx + w, sky_h - 14], fill=(160, 116, 100))
    gx += w
gx = 0
while gx < W:
    w = random.randint(28, 64)
    h = random.randint(8, 26)
    sd.rectangle([gx, sky_h - h, gx + w, sky_h], fill=(122, 90, 80))
    gx += w
img.paste(sky, (0, 0))
# ventana lejana encendida: una vida en el edificio de enfrente
d.rectangle([866, 128, 882, 146], fill=(240, 196, 138))

# ---- Balcón: suelo y barandilla ----
d.rectangle([70, 400, 1130, 430], fill=ARENA)
d.rectangle([70, 400, 1130, 410], fill=(208, 186, 168))
# barandilla simple detrás de la mesa
for bx in range(140, 1060, 92):
    d.rectangle([bx, 340, bx + 8, 410], fill=CAJAO)
d.rectangle([70, 336, 1130, 350], fill=CAJAO)

# ---- Mesa pequeña con una sola silla (centro-izquierda) ----
tx0, ty = 470, 420
d.rounded_rectangle([tx0, ty, tx0 + 200, ty + 18], 8, fill=MADERA)
d.rectangle([tx0 + 14, ty + 18, tx0 + 24, ty + 58], fill=MADERA)
d.rectangle([tx0 + 176, ty + 18, tx0 + 186, ty + 58], fill=MADERA)
# taza humeante sobre la mesa
mug_x, mug_y = tx0 + 54, ty - 16
d.rounded_rectangle([mug_x - 13, mug_y - 15, mug_x + 13, mug_y + 1], 4, fill=BLANCO, outline=ARENA, width=2)
d.arc([mug_x + 11, mug_y - 11, mug_x + 23, mug_y + 1], 270, 90, fill=ARENA, width=3)
for i, dy in enumerate((4, 14, 24)):
    col = (216 - 18 * i, 204 - 20 * i, 190 - 22 * i)
    d.arc([mug_x - 7 + i * 3, mug_y - 21 - dy, mug_x + 7 + i * 3, mug_y - 9 - dy], 180, 360, fill=col, width=3)
# cuaderno abierto al lado
d.rounded_rectangle([tx0 + 108, ty - 10, tx0 + 168, ty - 2], 3, fill=BLANCO, outline=ARENA, width=2)
d.line([(tx0 + 138, ty - 10), (tx0 + 138, ty - 2)], fill=ARENA, width=2)

# ---- Silla única frente a la mesa ----
chx = tx0 + 54
d.rounded_rectangle([chx - 34, 348, chx + 34, 438], 14, fill=TERRA)  # respaldo
d.rounded_rectangle([chx - 30, 438, chx + 30, 462], 8, fill=TERRA_LUZ)  # asiento
d.rectangle([chx - 28, 462, chx - 18, 508], fill=CAJAO)
d.rectangle([chx + 18, 462, chx + 28, 508], fill=CAJAO)

# ---- Persona sentada, de perfil, mirando al horizonte ----
px, py = chx, 430  # eje de la figura
d.rounded_rectangle([px - 40, py - 118, px + 44, py + 6], 24, fill=CAJAO)  # torso
# cabeza mirando a la derecha (hacia el sol)
hx, hy = px + 18, py - 146
d.ellipse([hx - 19, hy - 19, hx + 19, hy + 19], fill=DORADO_SUAVE)
d.arc([hx - 23, hy - 22, hx + 21, hy + 14], 120, 330, fill=(72, 52, 38), width=10)
d.ellipse([hx + 7, hy - 12, hx + 19, hy + 10], fill=(72, 52, 38))
# brazo apoyado en la mesa, mano sobre la taza
d.line([(px + 26, py - 70), (mug_x + 6, py - 34)], fill=CAJAO, width=16)
d.ellipse([mug_x - 6, py - 44, mug_x + 12, py - 28], fill=DORADO_SUAVE)
# piernas dobladas
d.rounded_rectangle([px - 38, py - 2, px + 40, py + 22], 10, fill=(58, 45, 38))
d.rounded_rectangle([px + 20, py + 12, px + 52, py + 30], 8, fill=CAJAO)
d.rounded_rectangle([px + 40, py + 18, px + 62, py + 32], 6, fill=(72, 52, 38))

# ---- Planta de salvia en maceta terracota junto a la barandilla (derecha) ----
pot_x, pot_y = 1010, 400
d.polygon([(pot_x - 30, pot_y), (pot_x + 30, pot_y), (pot_x + 22, pot_y + 64), (pot_x - 22, pot_y + 64)], fill=TERRA)
d.rectangle([pot_x - 34, pot_y - 10, pot_x + 34, pot_y + 4], fill=TERRA_OSC)
for ang in range(-64, 65, 13):
    a = math.radians(ang)
    x2 = pot_x + 62 * math.sin(a)
    y2 = pot_y - 16 - 70 * math.cos(a)
    d.line([(pot_x, pot_y - 12), (x2, y2)], fill=SALVIA, width=4)
    d.ellipse([x2 - 8, y2 - 11, x2 + 8, y2 + 7], fill=SALVIA)

# ---- Pequeña lámpara cálida apagada al fondo izquierda (vida propia) ----
lx = 180
d.line([(lx, 410), (lx, 300)], fill=CAJAO, width=4)
d.ellipse([lx - 18, 400, lx + 18, 412], fill=CAJAO)
d.polygon([(lx - 30, 302), (lx + 30, 302), (lx + 20, 264), (lx - 20, 264)], fill=SALVIA_SUAVE)
d.ellipse([lx - 22, 258, lx + 22, 276], fill=ARENA)

# ---- Luz cálida suave desde el sol (derecha) ----
light = Image.new("RGBA", (W, H), (0, 0, 0, 0))
ld = ImageDraw.Draw(light)
ld.polygon([(640, 0), (1200, 0), (1200, 470), (760, 470)], fill=(240, 205, 160, 46))
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

img.save("public/blog/solteria-edad-adulta.png", optimize=True)
img.save("public/blog/solteria-edad-adulta.webp", "WEBP", quality=82, method=6)
print("OK: ilustración generada 1200x675")
print("PNG:", img.size)