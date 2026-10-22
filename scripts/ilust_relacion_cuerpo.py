# -*- coding: utf-8 -*-
"""Ilustración editorial estilo Espai Emocions: 'La relación con tu cuerpo en la edad adulta'.

Composición única para este artículo (no reutiliza layouts previos):
interior doméstico cálido, la primera vez que este lote usa un espejo de pie
como protagonista. Habitación crema con pared salvia clara; a la izquierda,
una figura adulta neutra en género de pie, en calma (pantalón cacao, jersey
terracota suave). A la derecha, un gran espejo ovalado con marco madera: el
vidrio no devuelve una figura idéntica, sino una silueta habitada en tonos
dorado-luz con trazos orgánicos (la mirada interior, no el juicio). Entre
figura y espejo, distancia amable; una planta de salvia en maceta terracota
acompaña. Suelo de tablones cálidos con luz de tarde entrando en diagonal.
Nada de cintas métricas, básculas ni cuerpos idealizados: el cuerpo como
casa, no como medición. Paleta terracota/crema/salvia, 1200x675 (16:9),
estilo plano con grano sutil, sin texto.
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
BOSQUE = (53, 67, 54)
CAJAO = (48, 37, 31)
DORADO = (240, 205, 160)
MADERA = (150, 108, 70)

img = Image.new("RGB", (W, H), CREMA)
d = ImageDraw.Draw(img)

# ---- Pared: mitad superior salvia clara que funde en crema abajo ----
WALL = 470
for y in range(WALL):
    t = y / WALL
    c = tuple(int(SALVIA_CLARA[i] + (CREMA[i] - SALVIA_CLARA[i]) * (t ** 1.6)) for i in range(3))
    d.line([(0, y), (W, y)], fill=c)

# ---- Suelo: tablones cálidos con perspectiva simple ----
d.rectangle([0, WALL, W, H], fill=(216, 190, 166))
d.line([(0, WALL), (W, WALL)], fill=ARENA, width=3)
# juntas de tablones que convergen suavemente
for k in range(9):
    x0 = 40 + k * 150
    d.line([(x0, WALL), (x0 - 90, H)], fill=(196, 168, 142), width=2)
# líneas horizontales de tablón
for yy in (520, 580, 650):
    d.line([(0, yy), (W, yy)], fill=(199, 172, 148), width=2)

# ---- Luz de tarde entrando en diagonal desde la derecha ----
light = Image.new("RGBA", (W, H), (0, 0, 0, 0))
ld = ImageDraw.Draw(light)
ld.polygon([(1090, 0), (1200, 0), (1200, 640), (770, 640)], fill=(255, 236, 200, 60))
light = light.filter(ImageFilter.GaussianBlur(26))
img = Image.alpha_composite(img.convert("RGBA"), light).convert("RGB")
d = ImageDraw.Draw(img)

# ---- Gran espejo ovalado de pie con marco de madera (derecha) ----
EX, EY, EW, EH = 880, 250, 210, 320  # centro y radios
# marco: elipse exterior madera
d.ellipse([EX - EW - 14, EY - EH - 14, EX + EW + 14, EY + EH + 14], fill=MADERA)
d.ellipse([EX - EW - 6, EY - EH - 6, EX + EW + 6, EY + EH + 6], fill=(126, 88, 54))
# patas del espejo de pie
d.line([(EX - 46, EY + EH - 6), (EX - 78, H - 60)], fill=(126, 88, 54), width=9)
d.line([(EX + 46, EY + EH - 6), (EX + 78, H - 60)], fill=(126, 88, 54), width=9)
# vidrio: crema muy claro
d.ellipse([EX - EW, EY - EH, EX + EW, EY + EH], fill=BLANCO)

# ---- Dentro del espejo: silueta habitada en dorado-luz (no figura idéntica) ----
sil = Image.new("RGBA", (W, H), (0, 0, 0, 0))
sd = ImageDraw.Draw(sil)
# silueta orgánica: cabeza y cuerpo como formas redondeadas doradas
SX, SY = EX, EY + 60
sd.ellipse([SX - 26, SY - 116, SX + 26, SY - 66], fill=(240, 205, 160, 255))          # cabeza
sd.rounded_rectangle([SX - 44, SY - 62, SX + 44, SY + 92], 22, fill=(232, 192, 142, 255))  # torso
# trazos orgánicos alrededor: la mirada interior viva
sd.arc([SX - 70, SY - 100, SX + 70, SY + 40], 200, 330, fill=(198, 108, 60, 210), width=4)
sd.arc([SX - 92, SY - 130, SX + 92, SY + 70], 150, 290, fill=(222, 160, 118, 160), width=3)
sd.arc([SX - 60, SY - 160, SX + 60, SY - 30], 30, 170, fill=(198, 108, 60, 130), width=3)
# puntos de luz dentro del reflejo
for (px, py) in [(SX - 10, SY - 80), (SX + 14, SY - 20), (SX - 18, SY + 40)]:
    sd.ellipse([px - 3, py - 3, px + 3, py + 3], fill=(255, 249, 243, 220))
# recortar la silueta al interior del espejo
mask = Image.new("L", (W, H), 0)
md = ImageDraw.Draw(mask)
md.ellipse([EX - EW, EY - EH, EX + EW, EY + EH], fill=255)
sil.putalpha(Image.composite(sil.split()[3], Image.new("L", (W, H), 0), mask))
img = Image.alpha_composite(img.convert("RGBA"), sil).convert("RGB")
d = ImageDraw.Draw(img)
# leve sombra del marco en el suelo
sh = Image.new("RGBA", (W, H), (0, 0, 0, 0))
shd = ImageDraw.Draw(sh)
shd.ellipse([EX - EW - 10, H - 74, EX + EW + 40, H - 46], fill=(120, 90, 66, 70))
sh = sh.filter(ImageFilter.GaussianBlur(6))
img = Image.alpha_composite(img.convert("RGBA"), sh).convert("RGB")
d = ImageDraw.Draw(img)

# ---- Figura adulta de pie, de perfil, caminando en calma (izquierda) ----
FX, FY = 380, 640  # pies
# sombra suave
sh2 = Image.new("RGBA", (W, H), (0, 0, 0, 0))
sh2d = ImageDraw.Draw(sh2)
sh2d.ellipse([FX - 46, FY - 12, FX + 52, FY + 10], fill=(120, 90, 66, 80))
sh2 = sh2.filter(ImageFilter.GaussianBlur(5))
img = Image.alpha_composite(img.convert("RGBA"), sh2).convert("RGB")
d = ImageDraw.Draw(img)
# piernas en paso tranquilo (pantalón cacao)
d.rounded_rectangle([FX - 24, FY - 118, FX - 6, FY], 5, fill=(66, 50, 42))
d.rounded_rectangle([FX + 4, FY - 118, FX + 22, FY - 8], 5, fill=(66, 50, 42))
d.rounded_rectangle([FX + 8, FY - 10, FX + 30, FY], 4, fill=(58, 44, 38))   # pie adelantado
d.rounded_rectangle([FX - 26, FY - 8, FX - 6, FY], 4, fill=(58, 44, 38))
# torso: jersey terracota suave
d.rounded_rectangle([FX - 30, FY - 224, FX + 26, FY - 104], 14, fill=TERRA_SUAVE)
# manga/brazo hacia delante, relajado
d.rounded_rectangle([FX + 10, FY - 210, FX + 58, FY - 194], 8, fill=TERRA_SUAVE)
d.ellipse([FX + 52, FY - 200, FX + 70, FY - 184], fill=DORADO)  # mano
# cabeza y pelo neutro
d.ellipse([FX - 22, FY - 268, FX + 20, FY - 226], fill=(232, 206, 186))
d.chord([FX - 22, FY - 268, FX + 20, FY - 226], 90, 300, fill=(92, 66, 50))
# cuello del jersey en salvia para equilibrio de paleta
d.rounded_rectangle([FX - 16, FY - 230, FX + 14, FY - 218], 4, fill=SALVIA_OSC)

# ---- Planta de salvia en maceta terracota entre figura y espejo ----
PX, PY = 620, 640
d.rounded_rectangle([PX - 34, PY - 58, PX + 34, PY], 8, fill=TERRA)
d.rounded_rectangle([PX - 28, PY - 66, PX + 28, PY - 54], 6, fill=TERRA_LUZ)
# hojas orgánicas hacia arriba
random.seed(33)
for (hx, hy, hw, hl) in [(PX - 30, -92, 16, 62), (PX + 28, -88, 15, 58), (PX - 6, -104, 17, 70), (PX - 46, -70, 12, 44), (PX + 44, -66, 11, 40)]:
    d.ellipse([PX + hx - hw, PY + hy - hl, PX + hx + hw, PY + hy + 8], fill=(123 + random.randint(-8, 8), 136 + random.randint(-8, 8), 114 + random.randint(-6, 6)))

# ---- Pequeño banco/cesta tejida junto a la planta (vida habitada) ----
d.rounded_rectangle([560, 600, 596, 646], 6, fill=(198, 156, 110))
for yy in range(612, 646, 10):
    d.line([(562, yy), (594, yy)], fill=(178, 136, 92), width=2)

# ---- Aves suaves fuera de la ventana implícita (líneas mínimas) ----
# (se omite: la escena ya respira)

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

img.save("public/blog/relacion-con-tu-cuerpo-edad-adulta.png", optimize=True)
img.save("public/blog/relacion-con-tu-cuerpo-edad-adulta.webp", "WEBP", quality=82, method=6)
print("OK: ilustración generada 1200x675 -> public/blog/relacion-con-tu-cuerpo-edad-adulta.{png,webp}")