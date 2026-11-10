# -*- coding: utf-8 -*-
"""Ilustración editorial estilo Espai Emocions: 'Cuidar els pares grans / Cuidar a los padres mayores'.

Composición única para este artículo (no reutiliza layouts previos): salón cálido
de día. A la izquierda, dentro de una gran alfombra terracota, una madre mayor
sentada en un sillón salvia mira a su hija adulta, que se sienta a su lado en
un puf terracota con una libreta en las manos; alrededor, un pastillero y un
bolso (la carga cotidiana). A la derecha, tras una puerta oscura enmarcada en
el fondo del salón, dos silhouettes pequeñas de pie con sus móviles (los
hermanos a distancia), fuera de la alfombra: el reparto que nadie firmó, dicho
con distancia física. Marco pequeño con la foto de familia en la pared.
Paleta terracota/crema/salvia, 1200x675 (16:9), grano sutil, sin texto.
"""
from PIL import Image, ImageDraw, ImageFilter

W, H = 1200, 675

CREMA = (244, 232, 222)
CREMA_CLARO = (252, 244, 235)
BLANCO = (255, 249, 243)
TERRA = (164, 81, 28)
TERRA_OSC = (140, 66, 22)
TERRA_LUZ = (198, 108, 60)
TERRA_SUAVE = (222, 160, 118)
SALVIA = (123, 136, 114)
SALVIA_CLARA = (196, 202, 186)
SALVIA_OSC = (95, 107, 88)
CAJAO = (48, 37, 31)
ARENA = (225, 210, 198)
ARENA_OSC = (209, 190, 175)
MADERA = (196, 158, 122)
MADERA_OSC = (150, 108, 70)
MADERA_CLARA = (230, 206, 176)
LUZ_CALIDA = (255, 236, 200)

# zona de puerta (habitación del fondo, más fría)
FONS_1 = (92, 74, 60)
FONS_2 = (66, 52, 42)
FIGURA_FONS = (108, 100, 92)
PELO = (52, 40, 32)

img = Image.new("RGB", (W, H), CREMA_CLARO)
d = ImageDraw.Draw(img)

# ============================ PARED y SUELO ================================
for y in range(0, 430):
    t = y / 430
    c = tuple(int(CREMA_CLARO[i] + (CREMA[i] - CREMA_CLARO[i]) * t) for i in range(3))
    d.line([(0, y), (W, y)], fill=c)
d.rectangle([0, 430, W, H], fill=MADERA_CLARA)
for k in range(7):
    x0 = 30 + k * 190
    d.line([(x0, 430), (x0 - 60, H)], fill=(214, 188, 158), width=2)
d.rectangle([0, 424, W, 432], fill=ARENA)  # rodapié

# mancha cálida de sol en la pared izquierda
lu = Image.new("RGBA", (W, H), (0, 0, 0, 0))
ld = ImageDraw.Draw(lu)
ld.polygon([(0, 0), (330, 0), (250, 430), (0, 430)], fill=(255, 242, 210, 60))
lu = lu.filter(ImageFilter.GaussianBlur(40))
img = Image.alpha_composite(img.convert("RGBA"), lu).convert("RGB")
d = ImageDraw.Draw(img)

# ===================== ALFOMBRA (el territori de la cura) =================
d.ellipse([110, 495, 640, 600], fill=TERRA_SUAVE, outline=ARENA_OSC, width=3)
d.ellipse([135, 507, 615, 588], outline=BLANCO, width=2)

# ===================== SILLÓN SALVIA + MADRE ===============================
# sillón de perfil, mirant a la dreta
d.rounded_rectangle([128, 300, 196, 492], 18, fill=SALVIA, outline=SALVIA_OSC, width=3)  # respatller
d.rounded_rectangle([176, 402, 344, 492], 16, fill=SALVIA_CLARA, outline=SALVIA_OSC, width=3)  # seient
d.rounded_rectangle([306, 366, 356, 428], 12, fill=SALVIA, outline=SALVIA_OSC, width=3)  # braç davanter
# coixí del respatller
d.rounded_rectangle([150, 322, 196, 420], 12, fill=SALVIA_CLARA, outline=SALVIA_OSC, width=2)

# figura: mare gran asseguda, jersei crema
d.ellipse([216, 296, 272, 352], fill=CREMA_CLARO, outline=ARENA_OSC, width=2)  # cara
d.ellipse([206, 282, 252, 328], fill=PELO)  # cabell
d.ellipse([198, 296, 222, 320], fill=PELO)  # monyo darrere
d.rounded_rectangle([208, 344, 292, 436], 14, fill=BLANCO, outline=ARENA_OSC, width=2)  # jersei
d.line([(232, 352), (232, 428)], fill=ARENA_OSC, width=2)   # front del jersei
d.rounded_rectangle([216, 436, 300, 486], 10, fill=SALVIA_CLARA, outline=SALVIA_OSC, width=2)  # faldilla
# cama cap al terra
d.rectangle([226, 486, 246, 508], fill=CREMA)
d.rectangle([278, 486, 298, 508], fill=CREMA)
d.ellipse([220, 504, 250, 520], fill=SALVIA)   # sabatilla
d.ellipse([272, 504, 302, 520], fill=SALVIA)
# braços sostenint la tassa
d.rounded_rectangle([272, 360, 312, 392], 10, fill=CREMA_CLARO, outline=ARENA_OSC, width=2)
d.ellipse([300, 372, 326, 394], fill=TERRA, outline=TERRA_OSC, width=2)  # tassa
d.ellipse([306, 376, 320, 384], fill=LUZ_CALIDA)
# vapor subtil de la tassa
st = Image.new("RGBA", (W, H), (0, 0, 0, 0))
std = ImageDraw.Draw(st)
pts = []
for i in range(14):
    t = i / 13
    pts.append((313 + 6 * t * (1 if i % 2 == 0 else -1), 366 - t * 46))
std.line(pts, fill=(255, 250, 244, 80), width=3)
st = st.filter(ImageFilter.GaussianBlur(3))
img = Image.alpha_composite(img.convert("RGBA"), st).convert("RGB")
d = ImageDraw.Draw(img)

# ===================== FILLA CUIDADORA AL PUF ===============================
# puf terracota (l'accent protagonista de la composició)
d.rounded_rectangle([372, 468, 496, 528], 16, fill=TERRA, outline=TERRA_OSC, width=3)
d.ellipse([378, 470, 490, 486], fill=TERRA_LUZ)

# figura asseguda al puf, tors lleugerament inclinat cap a la mare
d.ellipse([404, 366, 452, 414], fill=CREMA_CLARO, outline=ARENA_OSC, width=2)  # cara
d.ellipse([396, 352, 456, 398], fill=PELO)  # cabell
d.rounded_rectangle([392, 410, 462, 478], 14, fill=SALVIA, outline=SALVIA_OSC, width=2)  # jersei salvia
# libreta a la falda
d.polygon([(400, 466), (462, 458), (464, 476), (402, 486)], fill=CAJAO, outline=ARENA_OSC)
d.line([(432, 462), (433, 480)], fill=BLANCO, width=2)
# braços cap a la llibreta
d.rounded_rectangle([398, 428, 420, 466], 8, fill=SALVIA_CLARA, outline=SALVIA_OSC, width=2)
d.rounded_rectangle([436, 424, 458, 462], 8, fill=SALVIA_CLARA, outline=SALVIA_OSC, width=2)
# cames cap avall
d.rectangle([408, 528, 426, 546], fill=(53, 67, 54))
d.rectangle([444, 528, 462, 546], fill=(53, 67, 54))
d.ellipse([402, 542, 432, 556], fill=TERRA)
d.ellipse([440, 542, 470, 556], fill=TERRA)

# ===================== CÀRREGA COTIDIANA AL SUEL ===========================
# pastillero setmanal
d.rounded_rectangle([512, 512, 566, 532], 6, fill=BLANCO, outline=ARENA_OSC, width=2)
for i in range(4):
    d.ellipse([520 + i * 12, 518, 530 + i * 12, 526], fill=SALVIA)
# bossa de mà crema
d.rounded_rectangle([540, 462, 592, 530], 10, fill=CREMA, outline=ARENA_OSC, width=2)
d.arc([552, 440, 580, 486], 180, 360, fill=TERRA, width=4)
# tassa freda al costat del puf
d.ellipse([350, 520, 372, 536], fill=BLANCO, outline=ARENA_OSC, width=2)
d.arc([340, 520, 350, 534], 270, 90, fill=ARENA_OSC, width=3)

# ombra suau sota les figures
sh = Image.new("RGBA", (W, H), (0, 0, 0, 0))
sd = ImageDraw.Draw(sh)
sd.ellipse([130, 540, 620, 594], fill=(30, 22, 16, 60))
sh = sh.filter(ImageFilter.GaussianBlur(10))
img = Image.alpha_composite(img.convert("RGBA"), sh).convert("RGB")
d = ImageDraw.Draw(img)

# ===================== PORTA DEL FONS: GERMANS A DISTÀNCIA =================
# marc de la porta a la paret del fons
d.rectangle([842, 128, 1006, 430], fill=(120, 92, 70), outline=CAJAO, width=4)
for y in range(128, 430):  # habitació fosca del fons
    t = (y - 128) / 302
    c = tuple(int(FONS_2[i] + (FONS_1[i] - FONS_2[i]) * t) for i in range(3))
    d.line([(846, y), (1002, y)], fill=c)
# dues figures petites de peu, cadascuna amb el mòbil (siluetes)
for cx, cy in ((880, 268), (968, 262)):
    d.ellipse([cx - 14, cy - 52, cx + 14, cy - 24], fill=FIGURA_FONS)          # cap
    d.rounded_rectangle([cx - 18, cy - 22, cx + 18, cy + 62], 10, fill=FIGURA_FONS)  # cos
    d.rounded_rectangle([cx - 6, cy + 8, cx + 16, cy + 22], 3, fill=LUZ_CALIDA)       # pantalla mòbil
    d.line([(cx - 2, cy + 10), (cx - 2, cy - 12)], fill=FIGURA_FONS, width=5)         # braç amb mòbil
# reflex fred dels mòbils al terra de la porta
gl = Image.new("RGBA", (W, H), (0, 0, 0, 0))
gd = ImageDraw.Draw(gl)
gd.polygon([(860, 430), (990, 430), (1020, 500), (830, 500)], fill=(200, 212, 196, 50))
gl = gl.filter(ImageFilter.GaussianBlur(18))
img = Image.alpha_composite(img.convert("RGBA"), gl).convert("RGB")
d = ImageDraw.Draw(img)

# ===================== FOTO DE FAMÍLIA A LA PARET ===========================
d.rectangle([536, 138, 604, 196], fill=ARENA, outline=ARENA_OSC, width=2)
d.rectangle([544, 146, 596, 188], fill=CREMA_CLARO)
for i, (hx, hy, hr) in enumerate([(556, 168, 7), (572, 166, 7), (586, 170, 6), (560, 182, 6)]):
    d.ellipse([hx - hr, hy - hr, hx + hr, hy + hr], fill=TERRA_SUAVE)
d.rectangle([548, 176, 592, 186], fill=SALVIA_CLARA)  # espatlles difuses

# ===================== PLANTA A L'EXTREM ESQUERRÀ ===========================
d.rounded_rectangle([72, 492, 112, 552], 10, fill=TERRA, outline=TERRA_OSC, width=2)
d.polygon([(92, 492), (58, 420), (104, 452)], fill=SALVIA)
d.polygon([(92, 492), (128, 408), (96, 456)], fill=SALVIA_OSC)
d.polygon([(92, 492), (70, 432), (58, 470)], fill=SALVIA_CLARA)

# ---- Grano sutil y suavizado ----
noise = Image.effect_noise((W, H), 12).convert("L")
img = Image.composite(Image.blend(img, Image.new("RGB", (W, H), BLANCO), 0.05), img, noise)
img = img.filter(ImageFilter.SMOOTH)

img.save("public/blog/cuidar-a-los-padres-mayores.png")
img.save("public/blog/cuidar-a-los-padres-mayores.webp", "WEBP", quality=88, method=6)
print("OK: cuidar-a-los-padres-mayores.png/.webp guardados", img.size)
