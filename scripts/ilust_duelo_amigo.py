# -*- coding: utf-8 -*-
"""Ilustración editorial estilo Espai Emocions: 'Duel per un amic'.

Escena interior cálida y minimalista: una mesa de madera con dos tazas,
una humeante (el ritual que continúa) y otra vacía y silenciosa (el amigo
que falta). Dos sillas: una con cojín de salvia (la vida que sigue) y una
silla vacía hacia la que cae la luz cálida de la ventana (el lugar que
continúa). En la pared, un cuadro con dos círculos que se solapan:
dos mundos que se tocaron. Planta de salvia a la izquierda. Paleta
terracota/crema/salvia, luz cálida, 1200x675 (16:9), estilo plano con
grano suave, sin texto.
"""
from PIL import Image, ImageDraw, ImageFilter

W, H = 1200, 675

CREMA = (244, 232, 222)
BLANCO = (255, 249, 243)
ARENA = (225, 210, 198)
ARENA_OSC = (208, 190, 175)
TERRA = (164, 81, 28)
TERRA_LUZ = (198, 108, 60)
TERRA_OSC = (140, 66, 24)
SALVIA = (123, 136, 114)
SALVIA_OSC = (95, 107, 88)
SALVIA_SUAVE = (176, 184, 168)
CAJAO = (48, 37, 31)
MADERA = (160, 120, 92)
MADERA_OSC = (128, 94, 70)
LUZ_EXTERIOR = (228, 224, 205)
LUZ_EXTERIOR2 = (213, 214, 196)

img = Image.new("RGB", (W, H), CREMA)
d = ImageDraw.Draw(img)

# ---- Pared interior (crema cálida) ----
d.rectangle([0, 0, 900, 440], fill=(236, 222, 209))
d.rectangle([0, 424, 900, 440], fill=ARENA)  # zócalo
# suelo interior
d.rectangle([0, 440, 900, H], fill=(216, 198, 180))
for x in range(-60, 960, 95):
    d.line([(x, 440), (x - 45, H)], fill=(202, 184, 166), width=2)

# ---- Ventana derecha con luz exterior ----
d.rectangle([900, 0, W, H], fill=(230, 226, 208))
d.rectangle([900, 60, 1030, 500], fill=MADERA_OSC)
d.rectangle([912, 72, 1018, 488], fill=LUZ_EXTERIOR)
# cruz del marco
d.rectangle([960, 72, 972, 488], fill=MADERA_OSC)
d.rectangle([912, 270, 1018, 282], fill=MADERA_OSC)
# colinas suaves al exterior
d.ellipse([870, 330, 1080, 560], fill=LUZ_EXTERIOR2)
d.ellipse([980, 350, 1180, 580], fill=(204, 208, 190))
# suelo exterior bajo la ventana
d.rectangle([900, 500, W, H], fill=(216, 206, 188))
for x in range(910, W, 100):
    d.line([(x, 500), (x + 40, H)], fill=(200, 190, 172), width=2)

# ---- Cuadro en la pared: dos círculos que se solapan ----
d.rounded_rectangle([240, 130, 380, 260], 10, fill=MADERA_OSC)
d.rectangle([252, 142, 368, 248], fill=BLANCO)
# dos mundos: uno terracota, otro salvia, con zona de contacto
mini = Image.new("RGBA", (W, H), (0, 0, 0, 0))
md = ImageDraw.Draw(mini)
md.ellipse([278, 172, 318, 212], fill=TERRA_LUZ + (255,))
md.ellipse([302, 172, 342, 212], fill=SALVIA + (150,))
img = Image.alpha_composite(img.convert("RGBA"), mini).convert("RGB")
d = ImageDraw.Draw(img)
# pequeña línea de horizonte dentro del cuadro
d.line([(252, 228), (368, 228)], fill=ARENA_OSC, width=2)

# ---- Mesa redonda de madera (centro) ----
d.rounded_rectangle([318, 328, 622, 334], 4, fill=MADERA_OSC)  # canto
d.rounded_rectangle([330, 316, 610, 330], 6, fill=MADERA)      # sobre
d.rectangle([465, 330, 495, 545], fill=MADERA_OSC)             # pata
d.ellipse([438, 540, 522, 560], fill=MADERA_OSC)               # base

# ---- Taza 1: terracota, llena, con vapor (el ritual que continúa) ----
d.rounded_rectangle([398, 330, 446, 392], 6, fill=TERRA)
d.ellipse([402, 326, 442, 338], fill=TERRA_OSC)      # borde
d.ellipse([406, 328, 438, 336], fill=(74, 52, 38))   # café
# asa
d.arc([440, 340, 462, 366], 300, 140, fill=TERRA_OSC, width=5)
# vapor: dos arcos suaves
d.arc([406, 282, 428, 314], 200, 340, fill=(216, 198, 182), width=3)
d.arc([420, 266, 444, 300], 200, 340, fill=(228, 210, 192), width=3)

# ---- Taza 2: crema, vacía, sin vapor (el amigo que falta) ----
d.rounded_rectangle([506, 332, 554, 392], 6, fill=BLANCO, outline=ARENA, width=2)
d.ellipse([510, 328, 550, 340], fill=ARENA)          # borde
d.ellipse([514, 330, 546, 338], fill=(236, 222, 209)) # interior vacío, pálido
# asa
d.arc([548, 342, 570, 368], 300, 140, fill=ARENA_OSC, width=5)

# ---- Silla izquierda con cojín de salvia (la vida que sigue) ----
d.rounded_rectangle([148, 240, 174, 420], 6, fill=MADERA_OSC)   # respaldo
d.rectangle([158, 252, 164, 412], fill=MADERA)                 # listón
d.rounded_rectangle([128, 396, 212, 414], 6, fill=MADERA)      # asiento
d.rounded_rectangle([132, 384, 208, 402], 8, fill=SALVIA)       # cojín
d.rectangle([136, 414, 148, 545], fill=MADERA_OSC)              # potes
d.rectangle([192, 414, 204, 545], fill=MADERA_OSC)

# ---- Silla derecha, vacía, sin cojín (el lugar que continúa) ----
d.rounded_rectangle([702, 250, 728, 420], 6, fill=MADERA_OSC)
d.rectangle([712, 262, 718, 412], fill=MADERA)
d.rounded_rectangle([682, 396, 766, 414], 6, fill=MADERA)
d.rectangle([690, 414, 702, 545], fill=MADERA_OSC)
d.rectangle([746, 414, 758, 545], fill=MADERA_OSC)
# sombra suave del asiento vacío
d.rounded_rectangle([686, 392, 762, 400], 4, fill=SALVIA_SUAVE)

# ---- Planta de salvia (izquierda, creciendo hacia la luz) ----
d.polygon([(120, 560), (192, 560), (180, 612), (132, 612)], fill=TERRA_LUZ)
d.rectangle([116, 554, 196, 562], fill=TERRA_OSC)
d.polygon([(128, 556), (152, 478), (176, 556)], fill=SALVIA)
d.polygon([(150, 556), (176, 466), (202, 556)], fill=SALVIA_OSC)
d.polygon([(108, 558), (132, 496), (156, 558)], fill=SALVIA_SUAVE)

# ---- Luz cálida de la ventana hacia la silla vacía ----
light = Image.new("RGBA", (W, H), (0, 0, 0, 0))
ld = ImageDraw.Draw(light)
ld.polygon([(1018, 90), (900, 130), (620, H), (960, H)], fill=(240, 216, 168, 38))
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

img.save("public/blog/duelo-por-un-amigo.png", optimize=True)
img.save("public/blog/duelo-por-un-amigo.webp", "WEBP", quality=82, method=6)
print("OK: ilustración generada 1200x675 -> public/blog/duelo-por-un-amigo.{png,webp}")