# -*- coding: utf-8 -*-
"""Ilustración editorial estilo Espai Emocions: 'Perder el trabajo'.

Escena interior cálida y minimalista: un despacho doméstico al atardecer.
A la izquierda, una mesa de madera con el cajón abierto y vacío; encima,
una lámpara encendida y una taza humeante. En el centro, una silla de
trabajo vacía, ligeramente girada hacia la ventana. A la derecha, una
gran ventana con luz exterior crema-salvia; sobre el alféizar, una
pequeña planta de salvia que crece hacia la luz. La metáfora visual:
el puesto vacío no define a quien lo habitaba; el espacio que queda es
también espacio para crecer. Paleta terracota/crema/salvia, luz cálida,
formato 1200x675 (16:9), estilo plano con grano suave, sin texto.
"""
import math
from PIL import Image, ImageDraw, ImageFilter

W, H = 1200, 675

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
MADERA_OSC = (128, 94, 70)
LUZ_EXTERIOR = (228, 224, 205)
LUZ_EXTERIOR2 = (213, 214, 196)

img = Image.new("RGB", (W, H), CREMA)
d = ImageDraw.Draw(img)

# ---- Pared interior (crema cálida) ----
d.rectangle([0, 0, 880, 500], fill=(236, 222, 209))
d.rectangle([0, 480, 880, 500], fill=ARENA)  # zócalo
# suelo interior
d.rectangle([0, 500, 880, H], fill=(216, 198, 180))
for x in range(-60, 940, 95):
    d.line([(x, 500), (x - 45, H)], fill=(202, 184, 166), width=2)

# ---- Ventana derecha con luz exterior ----
d.rectangle([880, 0, W, H], fill=(230, 226, 208))
# marco de madera de la ventana
d.rectangle([880, 60, 1000, 500], fill=MADERA_OSC)
d.rectangle([892, 72, 988, 488], fill=LUZ_EXTERIOR)
# cruz del marco
d.rectangle([934, 72, 946, 488], fill=MADERA_OSC)
d.rectangle([892, 270, 988, 282], fill=MADERA_OSC)
# colinas suaves al exterior
d.ellipse([850, 330, 1050, 560], fill=LUZ_EXTERIOR2)
d.ellipse([960, 350, 1150, 580], fill=(204, 208, 190))
# suelo exterior bajo la ventana
d.rectangle([880, 500, W, H], fill=(216, 206, 188))
for x in range(890, W, 100):
    d.line([(x, 500), (x + 40, H)], fill=(200, 190, 172), width=2)
# alféizar con planta de salvia creciendo hacia la luz
d.rectangle([874, 490, 1006, 502], fill=MADERA)
# maceta terracota
pot_x, pot_y = 970, 490
d.polygon([(pot_x - 20, pot_y), (pot_x + 20, pot_y), (pot_x + 14, pot_y + 44), (pot_x - 14, pot_y + 44)], fill=TERRA)
# hojas de salvia hacia arriba (crecimiento)
for ang in (-70, -35, -10, 20):
    a = math.radians(ang)
    x1 = pot_x + 2 * math.cos(a)
    y1 = pot_y - 4
    x2 = pot_x + 2 * math.cos(a) + 46 * math.cos(a)
    y2 = pot_y - 4 + 46 * math.sin(a)
    d.line([(x1, y1), (x2, y2)], fill=SALVIA, width=5)
    d.ellipse([x2 - 7, y2 - 7, x2 + 7, y2 + 7], fill=SALVIA)
d.ellipse([pot_x - 5, pot_y - 12, pot_x + 7, pot_y + 4], fill=SALVIA_OSC)

# ---- Mesa de madera izquierda con cajón abierto y vacío ----
tab_y = 330
d.rectangle([60, tab_y, 400, tab_y + 22], fill=MADERA)          # tablero
d.line([(60, tab_y), (400, tab_y)], fill=MADERA_OSC, width=3)
d.rectangle([78, tab_y + 22, 92, 470], fill=MADERA_OSC)          # pata izq
d.rectangle([368, tab_y + 22, 382, 470], fill=MADERA_OSC)       # pata der
# frente del cajón abierto
d.rectangle([150, tab_y + 40, 310, tab_y + 118], fill=TERRA_OSC, outline=None)
d.rectangle([158, tab_y + 48, 302, tab_y + 110], fill=(120, 90, 70))  # interior vacío oscuro
# tirador del cajón
d.ellipse([222, tab_y + 74, 238, tab_y + 90], fill=DORADO_SUAVE)
# sombra del cajón sobre el suelo
sh = Image.new("RGBA", (W, H), (0, 0, 0, 0))
sd = ImageDraw.Draw(sh)
sd.ellipse([130, 460, 340, 492], fill=(150, 130, 110, 60))
img = Image.alpha_composite(img.convert("RGBA"), sh).convert("RGB")
d = ImageDraw.Draw(img)

# ---- Lámpara de escritorio encendida ----
d.line([(110, tab_y), (110, tab_y - 60)], fill=(120, 92, 70), width=6)
d.line([(110, tab_y - 60), (150, tab_y - 74)], fill=(120, 92, 70), width=6)
d.polygon([(126, tab_y - 82), (186, tab_y - 82), (172, tab_y - 46), (140, tab_y - 46)], fill=DORADO_SUAVE, outline=(150, 116, 82))
halo = Image.new("RGBA", (W, H), (0, 0, 0, 0))
hd = ImageDraw.Draw(halo)
hd.ellipse([96, tab_y - 96, 220, tab_y + 8], fill=(245, 214, 160, 70))
img = Image.alpha_composite(img.convert("RGBA"), halo).convert("RGB")
d = ImageDraw.Draw(img)

# ---- Taza humeante sobre la mesa ----
d.rounded_rectangle([320, tab_y - 34, 368, tab_y - 2], 8, fill=BLANCO, outline=ARENA)
d.arc([352, tab_y - 30, 376, tab_y - 8], 270, 90, fill=ARENA, width=4)  # asa
# vapor suave
for k, (vx, off) in enumerate([(332, 0), (344, 6), (340, 12)]):
    d.arc([vx - 8, tab_y - 76 + off, vx + 10, tab_y - 46 + off], 90, 270, fill=(214, 200, 188), width=3)

# ---- Cuaderno cerrado y lápiz sobre la mesa ----
d.rounded_rectangle([150, tab_y - 18, 250, tab_y - 2], 4, fill=SALVIA)
d.line([(154, tab_y - 10), (246, tab_y - 10)], fill=SALVIA_OSC, width=2)
d.line([(262, tab_y - 4), (312, tab_y - 14)], fill=CAJAO, width=4)
d.polygon([(310, tab_y - 16), (320, tab_y - 18), (314, tab_y - 10)], fill=TERRA_LUZ)

# ---- Silla de trabajo vacía (centro, girada hacia la ventana) ----
cx = 560
# respaldo
d.rounded_rectangle([cx - 10, 190, cx + 64, 260], 10, fill=TERRA)
d.line([(cx + 30, 260), (cx + 30, 320)], fill=TERRA_OSC, width=8)   # soporte
# asiento girado (elipse en perspectiva)
d.ellipse([cx - 24, 316, cx + 86, 348], fill=TERRA_LUZ)
# base de cinco puntas simplificada
for ang in (-150, -90, -30, 90, 210):
    a = math.radians(ang)
    d.line([(cx + 30, 352), (cx + 30 + 44 * math.cos(a), 352 + 34 * math.sin(a))], fill=(100, 74, 54), width=5)
    d.ellipse([cx + 30 + 44 * math.cos(a) - 5, 352 + 34 * math.sin(a) - 5,
               cx + 30 + 44 * math.cos(a) + 5, 352 + 34 * math.sin(a) + 5], fill=CAJAO)
# sombra de la silla
sh2 = Image.new("RGBA", (W, H), (0, 0, 0, 0))
sd2 = ImageDraw.Draw(sh2)
sd2.ellipse([cx - 50, 366, cx + 116, 402], fill=(150, 130, 110, 70))
img = Image.alpha_composite(img.convert("RGBA"), sh2).convert("RGB")
d = ImageDraw.Draw(img)

# ---- Alfombra bajo la silla (terracota suave) ----
d.rounded_rectangle([400, 420, 760, 520], 24, fill=(224, 196, 178))
d.rounded_rectangle([420, 436, 740, 504], 18, outline=TERRA_LUZ, width=3)

# ---- Cuadro en la pared (interior habitado) ----
d.rounded_rectangle([470, 90, 640, 220], 8, fill=MADERA_OSC)
d.rectangle([484, 104, 626, 206], fill=BLANCO)
# dentro: línea de horizonte y sol pequeño = paisaje sereno
d.arc([520, 130, 590, 180], 200, 340, fill=SALVIA, width=5)
d.ellipse([548, 138, 564, 154], fill=TERRA)
d.line([(484, 182), (626, 182)], fill=SALVIA_SUAVE, width=3)

# ---- Luz cálida de la ventana proyectada al interior ----
light = Image.new("RGBA", (W, H), (0, 0, 0, 0))
ld = ImageDraw.Draw(light)
ld.polygon([(1000, 60), (880, 60), (880, H), (380, H)], fill=(240, 216, 168, 34))
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

img.save("public/blog/perder-el-trabajo-edad-adulta.png", optimize=True)
img.save("public/blog/perder-el-trabajo-edad-adulta.webp", "WEBP", quality=82, method=6)
print("OK: ilustración generada 1200x675")