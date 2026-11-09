# -*- coding: utf-8 -*-
"""Ilustración editorial estilo Espai Emocions: 'Menjar per ansietat / Comer por ansiedad'.

Composición única para este artículo (no reutiliza layouts previos): un díptico
de la MISMA cocina en dos horas distintas, separado por el marco oscuro de la
puerta. Mitad izquierda (día): pared crema cálida, ventana con planta, mesa con
tazón de fruta y café humeante, luz de mañana. Mitad derecha (noche): pared
cacao profunda, nevera con la puerta abierta que proyecta un rectángulo de luz
cálida sobre el suelo, una figura adulta neutra en género (pijama crema, pelo
cacao) vista de espaldas, mirando la luz; reloj de pared marcando las 23:30.
La luz de la nevera es la única compañía de la mitad nocturna. Paleta
terracota/crema/salvia en modo día y noche, 1200x675 (16:9), grano sutil,
sin texto.
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

# modo noche
PARED_N1 = (56, 44, 36)
PARED_N2 = (88, 68, 54)
FUSTA_N = (60, 46, 36)
FUSTA_N_OSC = (46, 35, 27)
PELO = (52, 40, 32)

img = Image.new("RGB", (W, H), CREMA_CLARO)
d = ImageDraw.Draw(img)

# ============================ IZQUIERDA (DÍA) ==============================
for y in range(0, 448):
    t = y / 448
    c = tuple(int(CREMA_CLARO[i] + (CREMA[i] - CREMA_CLARO[i]) * t) for i in range(3))
    d.line([(0, y), (588, y)], fill=c)
# suelo claro
d.rectangle([0, 448, 588, H], fill=MADERA_CLARA)
for k in range(5):
    x0 = 20 + k * 130
    d.line([(x0, 448), (x0 - 40, H)], fill=(214, 188, 158), width=2)
d.rectangle([0, 442, 588, 450], fill=ARENA)

# ventana de mañana con marco de madera
d.rounded_rectangle([70, 78, 268, 290], 14, fill=MADERA, outline=MADERA_OSC, width=4)
d.rounded_rectangle([84, 92, 254, 276], 10, fill=LUZ_CALIDA)
d.line([(169, 92), (169, 276)], fill=MADERA_OSC, width=4)
d.line([(84, 184), (254, 184)], fill=MADERA_OSC, width=4)
# maceta pequeña en el alféizar
d.rounded_rectangle([226, 246, 250, 276], 6, fill=TERRA)
d.polygon([(238, 246), (228, 218), (250, 224)], fill=SALVIA)
d.polygon([(238, 246), (252, 210), (222, 226)], fill=SALVIA_OSC)

# mesa de desayuno
d.rectangle([150, 428, 420, 446], fill=MADERA, outline=MADERA_OSC, width=2)
d.rectangle([164, 446, 178, 540], fill=MADERA_OSC)
d.rectangle([392, 446, 406, 540], fill=MADERA_OSC)
# tazón de fruta con dos manzanas
d.ellipse([196, 392, 262, 428], fill=CREMA, outline=ARENA_OSC, width=3)
d.ellipse([206, 378, 232, 400], fill=TERRA_LUZ)
d.ellipse([226, 372, 252, 394], fill=TERRA)
d.line([(232, 376), (238, 366)], fill=SALVIA_OSC, width=3)
# taza de café con banda terracota y vapor
d.ellipse([320, 392, 356, 424], fill=BLANCO, outline=ARENA_OSC, width=2)
d.rectangle([320, 400, 356, 408], fill=TERRA_SUAVE)
d.arc([352, 396, 366, 416], 270, 90, fill=ARENA_OSC, width=3)
st = Image.new("RGBA", (W, H), (0, 0, 0, 0))
std = ImageDraw.Draw(st)
for (x0, y0, amp) in ((330, 300, 22), (344, 318, 14)):
    pts = []
    for i in range(16):
        t = i / 15
        pts.append((x0 + amp * t * (1 if i % 2 == 0 else -0.6), y0 - t * 76))
    std.line(pts, fill=(255, 250, 244, 90), width=4)
st = st.filter(ImageFilter.GaussianBlur(3))
img = Image.alpha_composite(img.convert("RGBA"), st).convert("RGB")
d = ImageDraw.Draw(img)

# silla de en medio de la mañana (salvia), invitación al día
d.rectangle([456, 438, 540, 450], fill=MADERA_OSC)
d.rectangle([464, 450, 476, 556], fill=MADERA_OSC)
d.rectangle([522, 450, 534, 556], fill=MADERA_OSC)
d.rounded_rectangle([470, 356, 530, 450], 10, fill=SALVIA)
d.rounded_rectangle([476, 362, 524, 446], 8, fill=SALVIA_CLARA)

# mancha de sol en el suelo
lu = Image.new("RGBA", (W, H), (0, 0, 0, 0))
ldd = ImageDraw.Draw(lu)
ldd.polygon([(60, 470), (300, 470), (420, 660), (150, 660)], fill=(255, 242, 210, 80))
lu = lu.filter(ImageFilter.GaussianBlur(24))
img = Image.alpha_composite(img.convert("RGBA"), lu).convert("RGB")
d = ImageDraw.Draw(img)

# ============================ DERECHA (NOCHE) ==============================
for y in range(0, 448):
    t = y / 448
    c = tuple(int(PARED_N1[i] + (PARED_N2[i] - PARED_N1[i]) * t) for i in range(3))
    d.line([(612, y), (W, y)], fill=c)
# suelo oscuro
d.rectangle([612, 448, W, H], fill=FUSTA_N)
for k in range(5):
    x0 = 640 + k * 140
    d.line([(x0, 448), (x0 - 44, H)], fill=FUSTA_N_OSC, width=2)
d.rectangle([612, 442, W, 450], fill=(70, 54, 42))

# reloj de pared: las 23:30
d.ellipse([872, 70, 952, 150], fill=ARENA, outline=CAJAO, width=4)
d.line([(912, 82), (912, 96)], fill=CAJAO, width=4)   # 12
d.line([(944, 112), (930, 112)], fill=CAJAO, width=4)  # 3
d.line([(912, 124), (912, 138)], fill=CAJAO, width=4)  # 6
d.line([(880, 112), (894, 112)], fill=CAJAO, width=4)  # 9
d.line([(912, 112), (898, 106)], fill=CAJAO, width=5)  # aguja horas ~11:30
d.line([(912, 112), (912, 136)], fill=CAJAO, width=4)  # aguja minuts -> 6

# nevera: cos exterior crema, cavitat oberta i lluminosa
d.rectangle([952, 178, 1168, 642], fill=BLANCO, outline=ARENA_OSC, width=3)
d.rectangle([952, 178, 1168, 246], fill=ARENA, outline=ARENA_OSC, width=2)
# cavidad interior cálida (la luz de la nevera)
d.rounded_rectangle([972, 262, 1150, 560], 10, fill=LUZ_CALIDA, outline=TERRA_SUAVE, width=3)
for yy in (330, 400, 470):  # baldas
    d.rectangle([980, yy, 1142, yy + 8], fill=ARENA_OSC)
# dos pots a les baldes
d.rounded_rectangle([996, 296, 1026, 330], 5, fill=SALVIA, outline=SALVIA_OSC, width=2)
d.rounded_rectangle([1036, 366, 1066, 400], 5, fill=TERRA, outline=TERRA_OSC, width=2)
d.ellipse([1088, 296, 1114, 322], fill=SALVIA_CLARA, outline=ARENA_OSC, width=2)
# porta oberta, girada cap a l'esquerra (plena, de perfil)
d.polygon([(846, 196), (922, 178), (922, 642), (846, 620)], fill=(240, 230, 218), outline=ARENA_OSC)
d.line([(860, 250), (912, 238)], fill=ARENA_OSC, width=4)  # mànec

# falca de llum càlida de la nevera sobre el terra
we = Image.new("RGBA", (W, H), (0, 0, 0, 0))
wd = ImageDraw.Draw(we)
wd.polygon([(846, 600), (922, 642), (960, 675), (560, 675)], fill=(255, 236, 200, 110))
we = we.filter(ImageFilter.GaussianBlur(26))
img = Image.alpha_composite(img.convert("RGBA"), we).convert("RGB")
d = ImageDraw.Draw(img)

# figura adulta de perfil-esquena (pijama crema), mirant la nevera
d.ellipse([700, 236, 760, 296], fill=PELO)                      # cap (cabell)
d.rounded_rectangle([688, 300, 772, 576], 26, fill=CREMA)       # cos pijama
d.rectangle([688, 464, 772, 476], fill=TERRA_SUAVE)             # banda del pijama
d.rounded_rectangle([692, 340, 716, 464], 12, fill=CREMA_CLARO) # braç dret
d.rounded_rectangle([744, 340, 768, 464], 12, fill=CREMA_CLARO)  # braç esquerre
d.rounded_rectangle([700, 576, 732, 646], 12, fill=(236, 224, 212))
d.rounded_rectangle([736, 576, 768, 646], 12, fill=(236, 224, 212))
d.ellipse([694, 642, 736, 666], fill=TERRA)                     # sabatilla
d.ellipse([740, 642, 782, 666], fill=TERRA)
# contorn suau de figura
sh = Image.new("RGBA", (W, H), (0, 0, 0, 0))
sd = ImageDraw.Draw(sh)
sd.ellipse([(660, 580), (810, 648)], fill=(30, 22, 16, 70))
sh = sh.filter(ImageFilter.GaussianBlur(8))
img = Image.alpha_composite(img.convert("RGBA"), sh).convert("RGB")
d = ImageDraw.Draw(img)
# llum de la nevera tocant l'espatlla de la figura
gl = Image.new("RGBA", (W, H), (0, 0, 0, 0))
gd = ImageDraw.Draw(gl)
gd.polygon([(772, 300), (846, 260), (846, 620), (772, 600)], fill=(255, 236, 200, 70))
gl = gl.filter(ImageFilter.GaussianBlur(16))
img = Image.alpha_composite(img.convert("RGBA"), gl).convert("RGB")
d = ImageDraw.Draw(img)

# planta gran a la dreta de la nevera, en penombra
d.rounded_rectangle([1188, 560, 1200, 640], 8, fill=(120, 70, 44))
d.polygon([(1194, 560), (1160, 470), (1200, 500)], fill=(88, 100, 82))
d.polygon([(1194, 560), (1200, 440), (1168, 512)], fill=(70, 80, 66))

# ============================ MARC CENTRAL =================================
d.rectangle([588, 0, 612, H], fill=(42, 32, 26))
d.rectangle([588, 0, 594, H], fill=(64, 50, 40))
d.rectangle([606, 0, 612, H], fill=(30, 23, 18))

# ---- Grano sutil y suavizado ----
noise = Image.effect_noise((W, H), 12).convert("L")
img = Image.composite(Image.blend(img, Image.new("RGB", (W, H), BLANCO), 0.05), img, noise)
img = img.filter(ImageFilter.SMOOTH)

img.save("public/blog/comer-por-ansiedad.png")
img.save("public/blog/comer-por-ansiedad.webp", "WEBP", quality=88, method=6)
print("OK: comer-por-ansiedad.png/.webp guardados", img.size)
