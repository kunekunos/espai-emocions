# -*- coding: utf-8 -*-
"""Ilustración editorial estilo Espai Emocions: 'Persona altamente sensible'.

Composición única para este artículo (no reutiliza layouts previos):
escena urbana en lugar de los interiores domésticos recientes. Una figura
adulta con abrigo terracota camina por la acera bajo un gran paraguas salvia.
Sobre la ciudad cae una "lluvia de estímulos": trazos diagonales finos
(ruido), puntos, pequeños zigzags y ondas sonoras en terracota luz — el
mundo registrado con el volumen alto. Bajo el paraguas, un cono de aire
cálido en blanco cálido disuelve la lluvia: la sensibilidad no se apaga, se
sostiene con un contexto que protege. La lluvia sigue existiendo fuera y
asoma, tenue, dentro del cono. Un pájaro pequeño descansa en la punta del
paraguas: la calma posible. Charco con reflejo crema, skyline habitado con
ventanas cálidas, luz dorada lateral, paleta terracota/crema/salvia,
1200x675 (16:9), estilo plano con grano sutil, sin texto.
"""
import math
import random
from PIL import Image, ImageDraw, ImageFilter

W, H = 1200, 675
random.seed(16)

CREMA = (244, 232, 222)
BLANCO = (255, 249, 243)
ARENA = (225, 210, 198)
ARENA_OSC = (208, 190, 175)
ARENA_MED = (232, 218, 205)
TERRA = (164, 81, 28)
TERRA_LUZ = (198, 108, 60)
TERRA_SUAVE = (222, 160, 118)
SALVIA = (123, 136, 114)
SALVIA_OSC = (95, 107, 88)
SALVIA_SUAVE = (176, 184, 168)
CAJAO = (48, 37, 31)
DORADO = (238, 190, 140)

img = Image.new("RGB", (W, H), BLANCO)
d = ImageDraw.Draw(img)

# ---- Cielo cálido en bandas suaves ----
for i, y0 in enumerate(range(0, 480, 24)):
    t = i / 20
    col = (
        int(248 - 6 * t),
        int(240 - 8 * t),
        int(230 - 10 * t),
    )
    d.rectangle([0, y0, W, y0 + 24], fill=col)

GROUND_Y = 480

# ---- Skyline habitado ----
d.rectangle([0, GROUND_Y, W, H], fill=(226, 210, 195))
x = 0
buildings = []
while x < W:
    bw = random.randint(60, 120)
    bh = random.randint(50, 150)
    col = random.choice([ARENA_OSC, (216, 198, 182), (200, 182, 166)])
    d.rectangle([x, GROUND_Y - bh, x + bw, GROUND_Y], fill=col)
    # ventanas
    for wy in range(GROUND_Y - bh + 12, GROUND_Y - 8, 22):
        for wx in range(x + 10, x + bw - 12, 26):
            if random.random() < 0.55:
                wc = DORADO if random.random() < 0.14 else (190, 172, 156)
                d.rectangle([wx, wy, wx + 9, wy + 11], fill=wc)
    buildings.append((x, bw, bh))
    x += bw + random.randint(6, 18)

# árboles lejanos salvia entre edificios
for tx in (150, 420, 705, 1005):
    d.line([tx, GROUND_Y, tx, GROUND_Y - 26], fill=SALVIA_OSC, width=4)
    d.ellipse([tx - 16, GROUND_Y - 56, tx + 16, GROUND_Y - 20], fill=SALVIA_SUAVE)

# ---- Suelo: acera con línea ----
d.rectangle([0, GROUND_Y, W, GROUND_Y + 8], fill=(210, 192, 176))
for lx in range(0, W, 90):
    d.line([lx, GROUND_Y + 10, lx - 26, H], fill=(214, 197, 181), width=3)

# ---- Lluvia de estímulos (antes del cono: el cono la disuelve dentro) ----
rain = Image.new("RGBA", (W, H), (0, 0, 0, 0))
rd = ImageDraw.Draw(rain)

def zigzag(x0, y0, ln, amp):
    pts = [(x0, y0)]
    for k in range(1, 4):
        pts.append((x0 + k * ln / 3, y0 - amp if k % 2 else y0 + amp * 0.4))
        pts[-1] = (pts[-1][0], y0 - (amp if k == 1 else amp * 0.5 * (-1) ** k))
    rd.line(pts, fill=SALVIA_OSC + (210,), width=3)

for _ in range(90):
    rx, ry = random.randint(0, W), random.randint(10, 455)
    kind = random.random()
    if kind < 0.55:  # trazos de lluvia diagonal
        ln = random.randint(26, 52)
        col = random.choice([TERRA_LUZ, (206, 150, 110), ARENA_OSC])
        rd.line([rx, ry, rx - 14, ry + ln], fill=col + (200,), width=2)
    elif kind < 0.72:  # puntos
        rd.ellipse([rx - 2, ry - 2, rx + 2, ry + 2], fill=TERRA_LUZ + (180,))
    elif kind < 0.86:  # ondas sonoras
        for k in (-1, 0, 1):
            rd.arc([rx - 14 + k * 5, ry - 8 + k * 5, rx + 14 - k * 5, ry + 8 - k * 5],
                   200, 340, fill=(120, 100, 86, 200), width=2)
    else:  # pequeños zigzags
        zigzag(rx, ry, 22, 7)

img = Image.alpha_composite(img.convert("RGBA"), rain).convert("RGB")
d = ImageDraw.Draw(img)

# ---- Cono de calma bajo el paraguas (disuelve la lluvia) ----
CX, CY, R = 700, 235, 175
cone = Image.new("RGBA", (W, H), (0, 0, 0, 0))
cd = ImageDraw.Draw(cone)
cd.polygon([(CX - R + 6, CY), (CX + R - 6, CY),
            (CX + 250, 640), (CX - 250, 640)], fill=BLANCO + (150,))
cone = cone.filter(ImageFilter.GaussianBlur(6))
img = Image.alpha_composite(img.convert("RGBA"), cone).convert("RGB")
d = ImageDraw.Draw(img)

# ---- Charco con reflejo ----
d.ellipse([CX - 150, 585, CX + 185, 645], fill=(234, 220, 206))
d.ellipse([CX - 120, 596, CX + 155, 634], fill=(226, 210, 194))
d.rounded_rectangle([CX - 40, 606, CX + 60, 616], radius=5, fill=(240, 228, 214))

# ---- Figura adulta con abrigo terracota ----
hx, hy = CX - 18, 400
# sombra suave
sh = Image.new("RGBA", (W, H), (0, 0, 0, 0))
sd = ImageDraw.Draw(sh)
sd.ellipse([hx - 80, 590, hx + 110, 640], fill=(120, 90, 60, 55))
sh = sh.filter(ImageFilter.GaussianBlur(12))
img = Image.alpha_composite(img.convert("RGBA"), sh).convert("RGB")
d = ImageDraw.Draw(img)

# cabeza y cuello
d.ellipse([hx - 13, hy - 13, hx + 13, hy + 13], fill=CAJAO)
d.rounded_rectangle([hx - 7, hy + 10, hx + 7, hy + 24], radius=4, fill=CAJAO)
# cuerpo: abrigo terracota
d.polygon([(hx - 42, hy + 92), (hx - 30, hy + 22), (hx + 30, hy + 22), (hx + 44, hy + 92),
           (hx + 52, hy + 178), (hx - 50, hy + 178)], fill=TERRA)
# solapas y costura
d.line([(hx, hy + 22), (hx, hy + 178)], fill=TERRA_LUZ, width=3)
d.line([(hx - 30, hy + 60), (hx - 6, hy + 96)], fill=TERRA_LUZ, width=3)
d.line([(hx + 30, hy + 60), (hx + 6, hy + 96)], fill=TERRA_LUZ, width=3)
# bufanda salvia al viento
d.rounded_rectangle([hx - 14, hy + 18, hx + 14, hy + 38], radius=7, fill=SALVIA)
d.polygon([(hx - 14, hy + 26), (hx - 64, hy + 44), (hx - 12, hy + 44)], fill=SALVIA)
d.polygon([(hx - 30, hy + 34), (hx - 76, hy + 58), (hx - 26, hy + 50)], fill=SALVIA_OSC)
# brazo hacia el palo del paraguas
d.rounded_rectangle([hx + 18, hy + 42, CX + 8, hy + 62], radius=10, fill=TERRA)
d.ellipse([CX + 2, hy + 44, CX + 18, hy + 60], fill=CAJAO)
# piernas y zapatos
d.rounded_rectangle([hx - 26, hy + 176, hx - 8, hy + 232], radius=8, fill=CAJAO)
d.rounded_rectangle([hx + 8, hy + 176, hx + 26, hy + 232], radius=8, fill=CAJAO)
d.ellipse([hx - 36, hy + 228, hx - 2, hy + 248], fill=CAJAO)
d.ellipse([hx + 4, hy + 228, hx + 38, hy + 248], fill=CAJAO)

# ---- Paraguas salvia ----
# palo
d.line([CX, CY, CX, hy + 58], fill=CAJAO, width=5)
# copa: semicírculo con gajos y festones
d.pieslice([CX - R, CY - R, CX + R, CY + R], 180, 360, fill=SALVIA)
for k in range(-3, 4):
    ang = math.radians(180 + (k + 0.5) * 22.5)
    d.line([CX, CY, CX + R * math.cos(ang), CY + R * math.sin(ang)],
           fill=SALVIA_OSC, width=3)
# borde festoneado
for k in range(-4, 4):
    x0 = CX + k * (R / 4)
    x1 = CX + (k + 1) * (R / 4)
    xm = (x0 + x1) / 2
    r_seg = (x1 - x0) / 2
    d.pieslice([xm - r_seg, CY - r_seg, xm + r_seg, CY + r_seg], 0, 180, fill=SALVIA)
# punta superior
d.line([CX, CY - R, CX, CY - R - 16], fill=CAJAO, width=4)

# ---- Pájaro en la punta: la calma posible ----
bx, by = CX, CY - R - 16
d.ellipse([bx - 7, by - 9, bx + 7, by + 5], fill=CAJAO)
d.ellipse([bx + 2, by - 15, bx + 12, by - 5], fill=CAJAO)
d.polygon([(bx + 12, by - 11), (bx + 19, by - 9), (bx + 12, by - 8)], fill=TERRA)
d.polygon([(bx - 2, by - 4), (bx - 14, by + 4), (bx + 4, by + 3)], fill=SALVIA_OSC)

# ---- Luz dorada lateral ----
light = Image.new("RGBA", (W, H), (0, 0, 0, 0))
ld = ImageDraw.Draw(light)
ld.polygon([(0, 30), (430, 30), (740, H), (40, H)], fill=(240, 205, 160, 36))
img = Image.alpha_composite(img.convert("RGBA"), light).convert("RGB")
d = ImageDraw.Draw(img)

# ---- Grano sutil ----
noise = Image.effect_noise((W, H), 18).convert("L")
noise_rgb = Image.merge("RGB", (noise, noise, noise))
img = Image.blend(img, noise_rgb, 0.04)

# ---- Viñeta cálida ----
vign = Image.new("L", (W, H), 0)
vd = ImageDraw.Draw(vign)
vd.ellipse([-200, -150, W + 200, H + 150], fill=255)
vign = vign.filter(ImageFilter.GaussianBlur(80))
warm = Image.new("RGB", (W, H), (246, 224, 200))
img = Image.composite(img, warm, vign)

img.save("public/blog/persona-altamente-sensible-adulta.png", optimize=True)
img.save("public/blog/persona-altamente-sensible-adulta.webp", "WEBP", quality=82, method=6)
print("OK: ilustracion generada 1200x675 -> public/blog/persona-altamente-sensible-adulta.{png,webp}")