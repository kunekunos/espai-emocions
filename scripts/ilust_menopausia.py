# -*- coding: utf-8 -*-
"""Ilustración editorial estilo Espai Emocions: 'Menopausia y salud emocional'.

Escena interior cálida y minimalista: mujer adulta sentada junto a una
mesa, en calma, con una taza de infusiones humeante y un calendario de
mes en la pared con una hoja que se desprende (el ciclo que cambia). En
la pared, tres círculos que se desplazan: etapas que se solapan (salvia,
terracota, arena). Ventana con luz dorada de atardecer y planta de
salvia. Paleta terracota/crema/salvia, luz cálida, 1200x675 (16:9),
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

# ---- Cuadro en la pared: tres círculos que se desplazan ----
d.rounded_rectangle([150, 110, 320, 250], 10, fill=MADERA_OSC)
d.rectangle([162, 122, 308, 238], fill=BLANCO)
mini = Image.new("RGBA", (W, H), (0, 0, 0, 0))
md = ImageDraw.Draw(mini)
# círculos: pasado (arena), presente (terracota), lo que llega (salvia)
md.ellipse([172, 150, 214, 192], fill=ARENA_OSC + (255,))
md.ellipse([196, 152, 240, 196], fill=TERRA_LUZ + (235,))
md.ellipse([222, 148, 268, 194], fill=SALVIA + (200,))
img = Image.alpha_composite(img.convert("RGBA"), mini).convert("RGB")
d = ImageDraw.Draw(img)
d.line([(162, 224), (308, 224)], fill=ARENA_OSC, width=2)

# ---- Calendario de pared: hoja desprendiéndose ----
# hoja fija
d.rounded_rectangle([430, 95, 560, 225], 8, fill=BLANCO, outline=ARENA_OSC, width=2)
d.rectangle([430, 95, 560, 118], fill=SALVIA)  # cabecera
for i in range(1, 3):
    y = 130 + i * 32
    d.line([(446, y), (544, y)], fill=ARENA, width=3)
# espiral superior
for i in range(5):
    cx = 470 + i * 20
    d.arc([cx - 5, 90, cx + 5, 100], 180, 360, fill=CAJAO, width=2)
# hoja que cae (girada, terracota suave)
hoja = Image.new("RGBA", (110, 80), (0, 0, 0, 0))
hd = ImageDraw.Draw(hoja)
hd.rounded_rectangle([0, 0, 100, 66], 6, fill=TERRA_SUAVE + (255,))
hd.line([(14, 18), (86, 18)], fill=(255, 249, 243, 255), width=4)
hd.line([(14, 34), (86, 34)], fill=(255, 249, 243, 255), width=4)
hd.line([(14, 50), (60, 50)], fill=(255, 249, 243, 255), width=4)
hoja = hoja.rotate(18, expand=True, resample=Image.BICUBIC)
img.paste(hoja, (505, 240), hoja)
d = ImageDraw.Draw(img)

# ---- Planta de salvia en maceta terracota (izquierda) ----
pot_x, pot_y = 120, 545
d.polygon([(pot_x - 34, pot_y), (pot_x + 34, pot_y), (pot_x + 24, pot_y + 70), (pot_x - 24, pot_y + 70)], fill=TERRA)
d.rectangle([pot_x - 38, pot_y - 12, pot_x + 38, pot_y], fill=TERRA_LUZ)
for ang in range(-75, 76, 15):
    a = math.radians(ang)
    x2 = pot_x + 78 * math.sin(a)
    y2 = pot_y - 16 - 95 * math.cos(a)
    mx = pot_x + 42 * math.sin(a)
    my = pot_y - 55
    d.line([(pot_x, pot_y - 10), (x2, y2)], fill=SALVIA, width=6)
    d.ellipse([x2 - 12, y2 - 16, x2 + 12, y2 + 10], fill=SALVIA)
    d.ellipse([mx - 9, my - 12, mx + 9, my + 9], fill=SALVIA_OSC)

# ---- Mesa de madera con infusiones humeante (centro-derecha) ----
tbl_x, tbl_y = 560, 470
d.rounded_rectangle([tbl_x, tbl_y, tbl_x + 190, tbl_y + 12], 5, fill=MADERA_OSC)
d.rectangle([tbl_x + 10, tbl_y + 12, tbl_x + 22, tbl_y + 72], fill=MADERA_OSC)
d.rectangle([tbl_x + 168, tbl_y + 12, tbl_x + 180, tbl_y + 72], fill=MADERA_OSC)
# taza humeante (el ritual que sostiene)
cup_x, cup_y = tbl_x + 36, tbl_y - 26
d.rounded_rectangle([cup_x, cup_y - 18, cup_x + 40, cup_y + 4], 7, fill=BLANCO)
d.ellipse([cup_x + 2, cup_y - 22, cup_x + 38, cup_y - 10], fill=(233, 214, 190))
d.arc([cup_x + 36, cup_y - 14, cup_x + 56, cup_y + 4], 270, 90, fill=BLANCO, width=5)
# vapor
d.arc([cup_x + 6, cup_y - 58, cup_x + 24, cup_y - 30], 90, 270, fill=(210, 190, 175), width=3)
d.arc([cup_x + 18, cup_y - 68, cup_x + 36, cup_y - 40], 270, 90, fill=(210, 190, 175), width=3)
# libreta cerrada
d.rounded_rectangle([tbl_x + 110, tbl_y - 30, tbl_x + 165, tbl_y - 16], 4, fill=SALVIA)
d.rectangle([tbl_x + 110, tbl_y - 16, tbl_x + 165, tbl_y - 11], fill=SALVIA_OSC)

# ---- Sillón salvia (derecha de la mesa, hacia la ventana) ----
sofa_x, sofa_y = 640, 415
d.rounded_rectangle([sofa_x, sofa_y, sofa_x + 260, sofa_y + 130], 22, fill=SALVIA)
d.rounded_rectangle([sofa_x + 12, sofa_y - 58, sofa_x + 248, sofa_y + 24], 16, fill=(136, 150, 126))
d.rounded_rectangle([sofa_x - 16, sofa_y + 18, sofa_x + 276, sofa_y + 140], 18, fill=(110, 123, 101))
# cojín terracota
d.rounded_rectangle([sofa_x + 168, sofa_y - 18, sofa_x + 234, sofa_y + 34], 12, fill=TERRA_LUZ)

# ---- Mujer adulta sentada en el sillón, en calma, mirando a la ventana ----
hx, hy = sofa_x + 96, sofa_y - 118
# cabeza
d.ellipse([hx - 26, hy - 26, hx + 26, hy + 26], fill=DORADO_SUAVE)
# pelo recogido (moño bajo)
d.arc([hx - 28, hy - 34, hx + 24, hy + 20], 90, 280, fill=(120, 84, 58), width=11)
d.ellipse([hx - 44, hy - 8, hx - 16, hy + 20], fill=(120, 84, 58))
# torso (terracota)
d.polygon([(hx - 26, hy + 20), (hx + 24, hy + 20), (hx + 34, sofa_y - 4), (hx - 36, sofa_y - 2)], fill=TERRA)
# brazos: uno en regazo, otro sosteniendo la taza
d.line([(hx - 14, hy + 28), (hx + 6, sofa_y + 16)], fill=TERRA_LUZ, width=15)
d.line([(hx + 18, hy + 26), (hx + 34, sofa_y + 10)], fill=TERRA_LUZ, width=15)
# manos
d.ellipse([hx + 28, sofa_y + 4, hx + 46, sofa_y + 20], fill=DORADO_SUAVE)
d.ellipse([hx - 2, sofa_y + 8, hx + 14, sofa_y + 22], fill=DORADO_SUAVE)
# piernas
d.rounded_rectangle([hx - 40, sofa_y - 4, hx - 8, sofa_y + 116], 10, fill=(120, 84, 58))
d.rounded_rectangle([hx - 6, sofa_y - 4, hx + 26, sofa_y + 112], 10, fill=(134, 96, 68))

# ---- Luz dorada inclinada desde la ventana sobre suelo y mesa ----
light = Image.new("RGBA", (W, H), (0, 0, 0, 0))
ld = ImageDraw.Draw(light)
ld.polygon([(880, 180), (1015, 180), (620, H), (330, H)], fill=(240, 205, 160, 42))
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

img.save("public/blog/menopausia-salud-emocional.png", optimize=True)
img.save("public/blog/menopausia-salud-emocional.webp", "WEBP", quality=82, method=6)
print("OK: ilustración generada 1200x675 -> public/blog/menopausia-salud-emocional.{png,webp}")