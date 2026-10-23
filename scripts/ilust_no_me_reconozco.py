# -*- coding: utf-8 -*-
"""Ilustración editorial estilo Espai Emocions: 'No me reconozco en mi vida'.

Composición única para este artículo (no reutiliza layouts previos):
la primera vez en la serie que se usa un guardarropa como metáfora: dos
siluetas adultas neutras en género — una figura de pie junto a un armario
abierto y otra figura saliendo del propio armario en tonos dorado-luz.
La vida «correcta» cuelga ordenada (prendas terracota, salvia, crema en
perchas); la figura habitada emerge luminosa y orgánica hacia la derecha.
Ventana con luz cálida al fondo, suelo de tablones, planta de salvia.
Metáfora: pasar de representar un papel a habitar la propia identidad.
Paleta terracota/crema/salvia, 1200x675 (16:9), estilo plano con grano
sutil, sin texto.
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
CAJAO = (48, 37, 31)
DORADO = (240, 205, 160)
DORADO_LUZ = (248, 224, 186)
MADERA = (150, 108, 70)
MADERA_OSC = (126, 88, 54)

img = Image.new("RGB", (W, H), CREMA)
d = ImageDraw.Draw(img)

# ---- Pared: crema con banda superior salvia suave ----
WALL = 470
for y in range(WALL):
    t = y / WALL
    c = tuple(int(SALVIA_CLARA[i] + (CREMA[i] - SALVIA_CLARA[i]) * (t ** 1.5)) for i in range(3))
    d.line([(0, y), (W, y)], fill=c)

# ---- Suelo de tablones cálidos ----
d.rectangle([0, WALL, W, H], fill=(216, 190, 166))
d.line([(0, WALL), (W, WALL)], fill=ARENA, width=3)
for k in range(9):
    x0 = 40 + k * 150
    d.line([(x0, WALL), (x0 - 90, H)], fill=(196, 168, 142), width=2)
for yy in (520, 580, 650):
    d.line([(0, yy), (W, yy)], fill=(199, 172, 148), width=2)

# ---- Ventana al fondo derecha: luz cálida entrando ----
WX, WY, WW, WH = 920, 120, 210, 250
d.rounded_rectangle([WX - 14, WY - 14, WX + WW + 14, WY + WH + 14], 10, fill=MADERA)
d.rectangle([WX, WY, WX + WW, WY + WH], fill=DORADO_LUZ)
# cruz de la ventana
d.rectangle([WX + WW // 2 - 5, WY, WX + WW // 2 + 5, WY + WH], fill=MADERA)
d.rectangle([WX, WY + WH // 2 - 5, WX + WW, WY + WH // 2 + 5], fill=MADERA)
# siluetas de tejado/colinas lejanas dentro de la luz
d.polygon([(WX, WY + WH), (WX + 60, WY + WH - 70), (WX + 120, WY + WH)], fill=(232, 196, 150))
d.polygon([(WX + 90, WY + WH), (WX + 160, WY + WH - 100), (WX + WW, WY + WH)], fill=(226, 188, 140))

# ---- Luz de tarde proyectada desde la ventana ----
light = Image.new("RGBA", (W, H), (0, 0, 0, 0))
ld = ImageDraw.Draw(light)
ld.polygon([(WX, WY + WH), (WX - 320, H), (WX + 260, H)], fill=(255, 236, 200, 70))
light = light.filter(ImageFilter.GaussianBlur(24))
img = Image.alpha_composite(img.convert("RGBA"), light).convert("RGB")
d = ImageDraw.Draw(img)

# ---- Armario abierto grande (izquierda-centro): la vida ordenada ----
AX, AY, AW, AH = 130, 150, 300, 420  # caja del armario
d.rectangle([AX, AY, AX + AW, AY + AH], fill=MADERA_OSC)
d.rectangle([AX + 10, AY + 10, AX + AW - 10, AY + AH], fill=(118, 82, 52))
# interior del armario: dos cuerpos
MIDX = AX + AW // 2
d.rectangle([AX + 10, AY + 10, MIDX - 4, AY + AH], fill=(98, 68, 44))
d.rectangle([MIDX + 4, AY + 10, AX + AW - 10, AY + AH], fill=(98, 68, 44))
# estante superior con caja doblada
d.rectangle([AX + 18, AY + 12, MIDX - 12, AY + 90], fill=(86, 58, 38))
d.rounded_rectangle([AX + 30, AY + 30, MIDX - 24, AY + 78], 6, fill=(206, 172, 128))
# barra con perchas y prendas de la «vida correcta» (lado izquierdo abierto)
random.seed(41)
prendas = [
    (TERRA, 54), (SALVIA, 48), (CREMA, 60), (TERRA_SUAVE, 46), (SALVIA_CLARA, 52),
]
px = AX + 26
for color, wd in prendas:
    # percha
    d.line([(px + wd // 2, AY + 104), (px + wd // 2, AY + 116)], fill=(70, 52, 40), width=3)
    d.arc([px + 8, AY + 96, px + wd - 8, AY + 122], 180, 360, fill=(70, 52, 40), width=3)
    # prenda colgada
    d.rounded_rectangle([px, AY + 116, px + wd, AY + 116 + 130], 10, fill=color)
    # sombra leve de la prenda
    d.line([(px + 4, AY + 246), (px + wd - 4, AY + 246)], fill=(78, 54, 38), width=3)
    px += wd + 10
# segunda fila de prendas en el lado derecho del armario
px = MIDX + 14
prendas2 = [(SALVIA_OSC, 44), (TERRA_LUZ, 50), (BLANCO, 56)]
for color, wd in prendas2:
    d.line([(px + wd // 2, AY + 104), (px + wd // 2, AY + 116)], fill=(70, 52, 40), width=3)
    d.arc([px + 8, AY + 96, px + wd - 8, AY + 122], 180, 360, fill=(70, 52, 40), width=3)
    d.rounded_rectangle([px, AY + 116, px + wd, AY + 116 + 124], 10, fill=color)
    px += wd + 10
# patas del armario
d.rectangle([AX + 14, AY + AH, AX + 34, AY + AH + 18], fill=MADERA_OSC)
d.rectangle([AX + AW - 34, AY + AH, AX + AW - 14, AY + AH + 18], fill=MADERA_OSC)
# sombra del armario en el suelo
sh = Image.new("RGBA", (W, H), (0, 0, 0, 0))
shd = ImageDraw.Draw(sh)
shd.ellipse([AX - 20, AY + AH + 8, AX + AW + 60, AY + AH + 40], fill=(120, 90, 66, 70))
sh = sh.filter(ImageFilter.GaussianBlur(8))
img = Image.alpha_composite(img.convert("RGBA"), sh).convert("RGB")
d = ImageDraw.Draw(img)

# ---- Figura 1: adulto de pie junto al armario, mirando las prendas (el papel) ----
F1X, F1Y = 500, 620
sh1 = Image.new("RGBA", (W, H), (0, 0, 0, 0))
sh1d = ImageDraw.Draw(sh1)
sh1d.ellipse([F1X - 30, F1Y - 12, F1X + 34, F1Y + 8], fill=(120, 90, 66, 80))
sh1 = sh1.filter(ImageFilter.GaussianBlur(5))
img = Image.alpha_composite(img.convert("RGBA"), sh1).convert("RGB")
d = ImageDraw.Draw(img)
# piernas salvia oscuro (pantalón)
d.rounded_rectangle([F1X - 18, F1Y - 110, F1X - 4, F1Y], 5, fill=SALVIA_OSC)
d.rounded_rectangle([F1X + 4, F1Y - 110, F1X + 18, F1Y - 6], 5, fill=SALVIA_OSC)
d.rounded_rectangle([F1X - 20, F1Y - 8, F1X - 2, F1Y], 4, fill=(58, 44, 38))
d.rounded_rectangle([F1X + 6, F1Y - 8, F1X + 24, F1Y], 4, fill=(58, 44, 38))
# torso crema (camisa)
d.rounded_rectangle([F1X - 22, F1Y - 210, F1X + 20, F1Y - 96], 12, fill=CREMA)
# brazo levantado señalando/hacia el armario
d.rounded_rectangle([F1X - 36, F1Y - 204, F1X - 20, F1Y - 160], 7, fill=CREMA)
d.ellipse([F1X - 44, F1Y - 166, F1X - 26, F1Y - 148], fill=(232, 206, 186))
# cabeza, pelo neutro; perfil hacia el armario
d.ellipse([F1X - 16, F1Y - 254, F1X + 20, F1Y - 218], fill=(232, 206, 186))
d.chord([F1X - 16, F1Y - 254, F1X + 20, F1Y - 218], 90, 280, fill=(92, 66, 50))

# ---- Figura 2: la silueta habitada que emerge, luminosa y orgánica (derecha) ----
F2X, F2Y = 800, 600
# aura orgánica dorada tras la figura
aura = Image.new("RGBA", (W, H), (0, 0, 0, 0))
ad = ImageDraw.Draw(aura)
ad.ellipse([F2X - 90, F2Y - 330, F2X + 90, F2Y - 30], fill=(240, 205, 160, 90))
aura = aura.filter(ImageFilter.GaussianBlur(18))
img = Image.alpha_composite(img.convert("RGBA"), aura).convert("RGB")
d = ImageDraw.Draw(img)
# sombra suave
sh2 = Image.new("RGBA", (W, H), (0, 0, 0, 0))
sh2d = ImageDraw.Draw(sh2)
sh2d.ellipse([F2X - 34, F2Y - 12, F2X + 38, F2Y + 8], fill=(120, 90, 66, 70))
sh2 = sh2.filter(ImageFilter.GaussianBlur(5))
img = Image.alpha_composite(img.convert("RGBA"), sh2).convert("RGB")
d = ImageDraw.Draw(img)
# piernas doradas en paso decidido hacia delante (la vida propia)
d.rounded_rectangle([F2X - 18, F2Y - 116, F2X - 2, F2Y - 16], 6, fill=DORADO)
d.rounded_rectangle([F2X + 6, F2Y - 116, F2X + 22, F2Y - 10], 6, fill=(238, 198, 148))
d.rounded_rectangle([F2X - 22, F2Y - 10, F2X - 2, F2Y], 4, fill=(206, 160, 108))
d.rounded_rectangle([F2X + 10, F2Y - 10, F2X + 32, F2Y], 4, fill=(206, 160, 108))
# torso dorado luz, abierto y erguido
d.rounded_rectangle([F2X - 26, F2Y - 226, F2X + 26, F2Y - 100], 14, fill=DORADO_LUZ)
# brazos abiertos ligeramente, en gesto de abrirse
d.rounded_rectangle([F2X - 58, F2Y - 214, F2X - 26, F2Y - 198], 8, fill=DORADO_LUZ)
d.rounded_rectangle([F2X + 26, F2Y - 214, F2X + 58, F2Y - 198], 8, fill=DORADO_LUZ)
d.ellipse([F2X - 68, F2Y - 212, F2X - 48, F2Y - 192], fill=(240, 205, 160))
d.ellipse([F2X + 48, F2Y - 212, F2X + 68, F2Y - 192], fill=(240, 205, 160))
# cabeza erguida, sin pelo definido: silueta interior
d.ellipse([F2X - 20, F2Y - 272, F2X + 20, F2Y - 232], fill=DORADO_LUZ)
# trazos orgánicos alrededor de la cabeza: vida interior en movimiento
d.arc([F2X - 56, F2Y - 300, F2X + 56, F2Y - 200], 200, 340, fill=(198, 108, 60, 200), width=4)
d.arc([F2X - 74, F2Y - 322, F2X + 74, F2Y - 190], 150, 290, fill=(222, 160, 118, 150), width=3)
d.arc([F2X - 44, F2Y - 336, F2X + 44, F2Y - 226], 20, 160, fill=(198, 108, 60, 120), width=3)
# puntos de luz alrededor
for (pxx, pyy) in [(F2X - 66, F2Y - 250), (F2X + 70, F2Y - 236), (F2X - 40, F2Y - 320), (F2X + 52, F2Y - 300)]:
    d.ellipse([pxx - 3, pyy - 3, pxx + 3, pyy + 3], fill=(255, 249, 243, 220))

# ---- Planta de salvia en maceta terracota junto a la figura 2 ----
PX, PY = 660, 646
d.rounded_rectangle([PX - 30, PY - 52, PX + 30, PY], 8, fill=TERRA)
d.rounded_rectangle([PX - 24, PY - 60, PX + 24, PY - 48], 6, fill=TERRA_LUZ)
for (hx, hy, hw, hl) in [(PX - 26, -84, 14, 56), (PX + 24, -80, 13, 52), (PX - 4, -96, 15, 64), (PX - 40, -64, 10, 38), (PX + 38, -60, 9, 34)]:
    d.ellipse([hx - hw, PY + hy - hl, hx + hw, PY + hy + 8], fill=(123 + random.randint(-8, 8), 136 + random.randint(-8, 8), 114 + random.randint(-6, 6)))

# ---- Pequeño banco de madera con un libro, vida habitada ----
d.rounded_rectangle([540, 610, 596, 650], 6, fill=(198, 156, 110))
d.line([(544, 626), (592, 626)], fill=(178, 136, 92), width=2)
d.rounded_rectangle([552, 596, 584, 612], 3, fill=TERRA)  # libro

# ---- Grano suave para textura editorial ----
noise = Image.effect_noise((W, H), 18).convert("L")
noise_rgb = Image.merge("RGB", (noise, noise, noise))
img = Image.blend(img, noise_rgb, 0.05)

# ---- Viñeta cálida muy suave ----
vign = Image.new("L", (W, H), 0)
vd = ImageDraw.Draw(vign)
vd.ellipse([-200, -150, W + 200, H + 150], fill=255)
vign = vign.filter(ImageFilter.GaussianBlur(80))
warm = Image.new("RGB", (W, H), (216, 194, 168))
img = Image.composite(img, warm, vign)

img.save("public/blog/no-me-reconozco-en-mi-vida.png", optimize=True)
img.save("public/blog/no-me-reconozco-en-mi-vida.webp", "WEBP", quality=82, method=6)
print("OK: ilustración generada 1200x675 -> public/blog/no-me-reconozco-en-mi-vida.{png,webp}")