# -*- coding: utf-8 -*-
"""Ilustración editorial estilo Espai Emocions: 'El miedo a ser feliz'.

Composición única para este artículo (no reutiliza layouts previos):
una ventana interior al atardecer con el alféizar bajo. En el centro, un
pequeño pájaro terracota se ha posado dentro de la habitación, sobre el
borde interior del alféizar — lo bueno que se acerca y aún inquieta.
Una figura adulta de espaldas, junto a la pared, sostiene una taza humeante
y observa con cautela: no espanta al pájaro, pero tampoco se atreve a
acercarse. La distancia entre la figura y el pájaro está ocupada por un
haz de luz dorada que entra en diagonal desde el exterior. Fuera, un
atardecer sereno en tonos crema y salvia con tejados lejanos; dentro,
la habitación cálida en crema. En la pared lateral, dos grupos de trazos
orgánicos (mundo interior vertical salvia / mundo relacional horizontal
terracota) con un espacio fino entre ambos: el umbral interior. Un reflejo
tenue del pájaro aparece en el cristal: la alegría observada desde la
distancia. Paleta terracota/crema/salvia, luz dorada de tarde,
1200x675 (16:9), estilo plano con grano sutil, sin texto.
"""
import math
import random
from PIL import Image, ImageDraw, ImageFilter

W, H = 1200, 675
random.seed(41)

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
MADERA = (160, 120, 92)
MADERA_OSC = (128, 94, 70)
DORADO = (238, 190, 140)
DORADO_SUAVE = (240, 205, 165)
LUZ_EXT = (235, 226, 205)
LUZ_EXT2 = (220, 221, 200)

img = Image.new("RGB", (W, H), CREMA)
d = ImageDraw.Draw(img)

# ---- Pared interior cálida (toda la escena menos el hueco de la ventana) ----
d.rectangle([0, 0, W, H], fill=(236, 222, 209))
# zócalo
d.rectangle([0, 520, W, 536], fill=ARENA)
# suelo
d.rectangle([0, 536, W, H], fill=(216, 198, 180))
for x in range(-80, 1300, 100):
    d.line([(x, 536), (x - 52, H)], fill=(202, 184, 166), width=2)

# ---- Ventana grande centrada (vista exterior) ----
WX0, WY0, WX1, WY1 = 330, 80, 870, 520
d.rectangle([WX0, WY0, WX1, WY1], fill=MADERA_OSC)
# cristal: exterior dorado sereno
d.rectangle([WX0 + 12, WY0 + 12, WX1 - 12, WY1 - 12], fill=LUZ_EXT)
# cielo en bandas suaves dentro del cristal
for i, y0 in enumerate(range(WY0 + 12, WY0 + 160, 16)):
    t = i / 9
    d.rectangle([WX0 + 12, y0, WX1 - 12, y0 + 16],
                fill=(int(244 - 4 * t), int(234 - 10 * t), int(208 - 14 * t)))
# sol bajo terracota luz
d.ellipse([600, 150, 700, 250], fill=DORADO)
d.ellipse([622, 172, 678, 228], fill=(244, 214, 168))
# colinas salvia suaves
d.ellipse([420, 330, 780, 560], fill=LUZ_EXT2)
d.ellipse([640, 360, 1000, 600], fill=(206, 208, 190))
# tejados lejanos arena
rx = WX0 + 30
while rx < WX1 - 60:
    bw = random.randint(38, 72)
    bh = random.randint(26, 58)
    col = random.choice([ARENA_OSC, (216, 198, 182), (198, 180, 164)])
    d.rectangle([rx, 470 - bh, rx + bw, 470], fill=col)
    # ventanitas cálidas
    for wy in range(470 - bh + 6, 462, 14):
        for wx in range(rx + 5, rx + bw - 8, 16):
            if random.random() < 0.5:
                d.rectangle([wx, wy, wx + 6, wy + 7], fill=(176, 158, 142))
    if random.random() < 0.3:
        d.polygon([(rx + bw // 2 - 8, 470 - bh), (rx + bw // 2, 470 - bh - 16),
                   (rx + bw // 2 + 8, 470 - bh)], fill=col)
    rx += bw + random.randint(6, 16)

# cruz del marco de la ventana
d.rectangle([(WX0 + WX1) // 2 - 6, WY0 + 12, (WX0 + WX1) // 2 + 6, WY1 - 12], fill=MADERA_OSC)
d.rectangle([WX0 + 12, (WY0 + WY1) // 2 - 6, WX1 - 12, (WY0 + WY1) // 2 + 6], fill=MADERA_OSC)

# ---- Alféizar interior: superficie de madera ----
d.rectangle([WX0 - 26, WY1, WX1 + 26, WY1 + 22], fill=MADERA)
d.rectangle([WX0 - 26, WY1, WX1 + 26, WY1 + 6], fill=MADERA_OSC)

# ---- Reflejo tenue del pájaro en el cristal ----
refl = Image.new("RGBA", (W, H), (0, 0, 0, 0))
rf = ImageDraw.Draw(refl)
rf.ellipse([742, 452, 762, 468], fill=(120, 84, 58, 70))
rf.ellipse([754, 446, 766, 458], fill=(120, 84, 58, 70))
refl = refl.filter(ImageFilter.GaussianBlur(2))
img = Image.alpha_composite(img.convert("RGBA"), refl).convert("RGB")
d = ImageDraw.Draw(img)

# ---- Pájaro terracota posado dentro, sobre el alféizar ----
bx, by = 760, WY1 - 2  # posado en el borde interior del alféizar
# sombra pequeña
sh = Image.new("RGBA", (W, H), (0, 0, 0, 0))
sd = ImageDraw.Draw(sh)
sd.ellipse([bx - 22, WY1 + 8, bx + 22, WY1 + 16], fill=(120, 90, 60, 45))
sh = sh.filter(ImageFilter.GaussianBlur(4))
img = Image.alpha_composite(img.convert("RGBA"), sh).convert("RGB")
d = ImageDraw.Draw(img)
# cuerpo
d.ellipse([bx - 14, by - 24, bx + 14, by], fill=TERRA)
# cabeza
d.ellipse([bx + 4, by - 34, bx + 26, by - 12], fill=TERRA_LUZ)
# pico
d.polygon([(bx + 26, by - 25), (bx + 38, by - 22), (bx + 26, by - 19)], fill=DORADO)
# ojo
d.ellipse([bx + 14, by - 29, bx + 18, by - 25], fill=CREMA)
# cola
d.polygon([(bx - 14, by - 14), (bx - 34, by - 6), (bx - 12, by - 2)], fill=SALVIA_OSC)
# patas en el alféizar
d.line([(bx - 2, by), (bx - 2, WY1 + 8)], fill=CAJAO, width=2)
d.line([(bx + 8, by), (bx + 8, WY1 + 8)], fill=CAJAO, width=2)

# ---- Figura adulta de espaldas, a la izquierda, junto a la pared ----
hx, hy = 150, 300
# sombra en el suelo
sh2 = Image.new("RGBA", (W, H), (0, 0, 0, 0))
sd2 = ImageDraw.Draw(sh2)
sd2.ellipse([hx - 70, 560, hx + 110, 608], fill=(120, 90, 60, 55))
sh2 = sh2.filter(ImageFilter.GaussianBlur(12))
img = Image.alpha_composite(img.convert("RGBA"), sh2).convert("RGB")
d = ImageDraw.Draw(img)
# cabeza y cuello (de espaldas)
d.ellipse([hx - 26, hy - 26, hx + 26, hy + 26], fill=DORADO_SUAVE)
d.arc([hx - 28, hy - 34, hx + 24, hy + 24], 90, 280, fill=(60, 45, 35), width=12)
d.rounded_rectangle([hx - 14, hy + 22, hx + 14, hy + 40], radius=6, fill=(60, 45, 35))
# torso: jersey salvia
d.polygon([(hx - 46, hy + 34), (hx + 42, hy + 34), (hx + 56, hy + 140),
           (hx - 60, hy + 140)], fill=SALVIA)
# cuello del jersey
d.polygon([(hx - 14, hy + 32), (hx + 14, hy + 32), (hx, hy + 50)], fill=(136, 150, 126))
# brazos: uno sostiene la taza cerca del pecho, otro cae
d.line([(hx - 44, hy + 44), (hx - 20, hy + 96)], fill=(110, 123, 101), width=16)
d.line([(hx + 40, hy + 44), (hx + 30, hy + 100)], fill=(110, 123, 101), width=16)
d.ellipse([hx - 28, hy + 88, hx - 6, hy + 110], fill=DORADO_SUAVE)  # mano con taza
d.ellipse([hx + 18, hy + 92, hx + 40, hy + 114], fill=DORADO_SUAVE)  # mano caída
# piernas
d.rounded_rectangle([hx - 44, hy + 136, hx - 16, hy + 250], 10, fill=(60, 45, 35))
d.rounded_rectangle([hx + 8, hy + 136, hx + 36, hy + 244], 10, fill=(72, 54, 42))
# zapatos
d.ellipse([hx - 52, hy + 244, hx - 12, hy + 266], fill=CAJAO)
d.ellipse([hx + 6, hy + 240, hx + 46, hy + 262], fill=CAJAO)

# taza humeante junto a las manos (el calor que se sostiene con cautela)
cup_x, cup_y = hx + 52, hy + 108
d.rounded_rectangle([cup_x, cup_y - 20, cup_x + 36, cup_y + 2], 7, fill=BLANCO)
d.ellipse([cup_x + 2, cup_y - 24, cup_x + 34, cup_y - 12], fill=(233, 214, 190))
d.arc([cup_x + 32, cup_y - 16, cup_x + 50, cup_y + 2], 270, 90, fill=BLANCO, width=5)
# vapor suave
for i, (vx, vy) in enumerate([(cup_x + 10, cup_y - 34), (cup_x + 18, cup_y - 50),
                              (cup_x + 12, cup_y - 66)]):
    d.arc([vx - 6, vy - 8, vx + 8, vy + 8], 60, 240, fill=(210, 190, 175), width=3)

# ---- Cuadro en la pared izquierda: trazos orgánicos ----
d.rounded_rectangle([60, 120, 260, 260], 10, fill=MADERA_OSC)
d.rectangle([72, 132, 248, 248], fill=BLANCO)
for i in range(3):
    x = 100 + i * 22
    d.line([(x, 158), (x + 6, 222)], fill=SALVIA_OSC, width=9)
for i in range(3):
    y = 160 + i * 22
    d.line([(168, y), (232, y - 6)], fill=TERRA, width=9)

# ---- Planta de salvia en maceta terracota (derecha, suelo) ----
pot_x, pot_y = 1010, 470
d.polygon([(pot_x - 34, pot_y), (pot_x + 34, pot_y), (pot_x + 24, pot_y + 66),
           (pot_x - 24, pot_y + 66)], fill=TERRA)
d.rectangle([pot_x - 38, pot_y - 12, pot_x + 38, pot_y], fill=TERRA_LUZ)
for ang in range(-70, 71, 14):
    a = math.radians(ang)
    x2 = pot_x + 74 * math.sin(a)
    y2 = pot_y - 16 - 92 * math.cos(a)
    d.line([(pot_x, pot_y - 10), (x2, y2)], fill=SALVIA, width=6)
    d.ellipse([x2 - 11, y2 - 15, x2 + 11, y2 + 9], fill=SALVIA)

# ---- Haz de luz dorada diagonal desde la ventana hacia la figura ----
light = Image.new("RGBA", (W, H), (0, 0, 0, 0))
ld = ImageDraw.Draw(light)
ld.polygon([(330, 220), (520, 220), (240, 660), (60, 660)], fill=(240, 205, 160, 42))
ld.polygon([(330, 300), (640, 300), (430, 660), (180, 660)], fill=(240, 205, 160, 26))
img = Image.alpha_composite(img.convert("RGBA"), light).convert("RGB")
d = ImageDraw.Draw(img)

# ---- Motas doradas flotando en el haz (lo bueno en el aire) ----
gold = Image.new("RGBA", (W, H), (0, 0, 0, 0))
gd = ImageDraw.Draw(gold)
for _ in range(26):
    gx = random.randint(120, 700)
    gy = random.randint(240, 640)
    if random.random() < 0.5:
        r = random.choice([2, 3, 4])
        gd.ellipse([gx - r, gy - r, gx + r, gy + r], fill=(238, 190, 140, 130))
    else:
        gd.line([(gx, gy), (gx + 10, gy + 6)], fill=(238, 190, 140, 110), width=2)
gold = gold.filter(ImageFilter.GaussianBlur(1))
img = Image.alpha_composite(img.convert("RGBA"), gold).convert("RGB")
d = ImageDraw.Draw(img)

# ---- Grano sutil ----
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

img.save("public/blog/miedo-a-ser-feliz.png", optimize=True)
img.save("public/blog/miedo-a-ser-feliz.webp", "WEBP", quality=82, method=6)
print("OK: ilustracion generada 1200x675 -> public/blog/miedo-a-ser-feliz.{png,webp}")