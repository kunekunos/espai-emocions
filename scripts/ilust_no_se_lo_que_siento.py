# -*- coding: utf-8 -*-
"""Ilustración editorial estilo Espai Emocions: 'No sé lo que siento' (alexitimia).

Composición única para este artículo (no reutiliza layouts previos):
primera vez en la serie que se usan tarros de cristal como metáfora.
Tres tarros sobre una mesa de madera contienen formas abstractas — espiral
terracota (energía que aprieta), onda salvia (tristeza/calma), sol dorado
(deseo/alegría) — pero sus etiquetas están en blanco: hay contenido y no
hay palabra. A la derecha, una figura adulta neutra en género, de pie tras
la mesa, mira los tarros con una burbuja vacía encima (el hueco del nombre).
Ventana de luz cálida a la izquierda, planta de salvia, suelo de tablones.
Paleta terracota/crema/salvia, 1200x675 (16:9), estilo plano con grano
sutil, sin texto.
"""
from PIL import Image, ImageDraw, ImageFilter

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
CORCHO = (196, 150, 104)
VIDRIO = (252, 246, 240)
PIEL = (232, 206, 186)
PELO = (92, 66, 50)

img = Image.new("RGB", (W, H), CREMA)
d = ImageDraw.Draw(img)

# ---- Pared: crema con insinuación salvia arriba ----
WALL = 470
for y in range(WALL):
    t = y / WALL
    c = tuple(int(SALVIA_CLARA[i] + (CREMA[i] - SALVIA_CLARA[i]) * (t ** 1.6)) for i in range(3))
    d.line([(0, y), (W, y)], fill=c)

# ---- Suelo de tablones cálidos ----
d.rectangle([0, WALL, W, H], fill=(216, 190, 166))
d.line([(0, WALL), (W, WALL)], fill=ARENA, width=3)
for k in range(9):
    x0 = 40 + k * 150
    d.line([(x0, WALL), (x0 - 90, H)], fill=(196, 168, 142), width=2)

# ---- Ventana con luz cálida (izquierda) ----
d.rounded_rectangle([76, 86, 334, 394], 10, fill=MADERA)
glow = Image.new("RGBA", (W, H), (0, 0, 0, 0))
gd = ImageDraw.Draw(glow)
gd.rectangle([96, 106, 314, 374], fill=(248, 224, 186, 255))
gd.ellipse([120, 130, 290, 350], fill=(250, 236, 205, 255))
glow = glow.filter(ImageFilter.GaussianBlur(10))
img = Image.alpha_composite(img.convert("RGBA"), glow).convert("RGB")
d = ImageDraw.Draw(img)
d.rectangle([96, 106, 314, 374], fill=DORADO_LUZ)
# brillo solar suave dentro
sun = Image.new("RGBA", (W, H), (0, 0, 0, 0))
sd = ImageDraw.Draw(sun)
sd.ellipse([150, 150, 260, 330], fill=(255, 246, 226, 160))
sun = sun.filter(ImageFilter.GaussianBlur(22))
img = Image.alpha_composite(img.convert("RGBA"), sun).convert("RGB")
d = ImageDraw.Draw(img)
# parteluces
d.line([(205, 106), (205, 374)], fill=MADERA, width=7)
d.line([(96, 240), (314, 240)], fill=MADERA, width=7)
d.rounded_rectangle([64, 388, 346, 404], 6, fill=MADERA_OSC)

# ---- Planta de salvia (rincón izquierdo) ----
for i, (dx, dy, sz) in enumerate(((-34, -6, 1.0), (0, -44, 1.15), (34, -8, 0.95), (-16, -78, 0.8), (18, -70, 0.7))):
    lay = Image.new("RGBA", (W, H), (0, 0, 0, 0))
    ld = ImageDraw.Draw(lay)
    cx, cy = 150 + dx, 600 + dy
    leaf_col = SALVIA_OSC if i % 2 else SALVIA
    ld.ellipse([cx - 14 * sz, cy - 46 * sz, cx + 14 * sz, cy + 10 * sz], fill=(*leaf_col, 255))
    lay = lay.filter(ImageFilter.GaussianBlur(1))
    img = Image.alpha_composite(img.convert("RGBA"), lay).convert("RGB")
d = ImageDraw.Draw(img)
d.polygon([(128, 586), (172, 586), (164, 640), (136, 640)], fill=TERRA)
d.rectangle([128, 586, 172, 592], fill=TERRA_LUZ)

# ---- Sombra de la mesa en el suelo ----
sh = Image.new("RGBA", (W, H), (0, 0, 0, 0))
shd = ImageDraw.Draw(sh)
shd.ellipse([420, 610, 1010, 656], fill=(120, 90, 66, 70))
sh = sh.filter(ImageFilter.GaussianBlur(9))
img = Image.alpha_composite(img.convert("RGBA"), sh).convert("RGB")
d = ImageDraw.Draw(img)

# ---- Figura adulta tras la mesa (derecha), mirando los tarros ----
# sombra propia sutil
figsh = Image.new("RGBA", (W, H), (0, 0, 0, 0))
fsd = ImageDraw.Draw(figsh)
fsd.ellipse([975, 430, 1100, 470], fill=(120, 90, 66, 60))
figsh = figsh.filter(ImageFilter.GaussianBlur(6))
img = Image.alpha_composite(img.convert("RGBA"), figsh).convert("RGB")
d = ImageDraw.Draw(img)
# torso salvia
d.rounded_rectangle([984, 296, 1094, 460], 16, fill=SALVIA)
# cuello y cabeza (perfil levemente inclinado hacia los tarros)
d.rectangle([1022, 272, 1048, 300], fill=PIEL)
d.ellipse([1002, 218, 1066, 282], fill=PIEL)
d.chord([1002, 214, 1066, 278], 95, 275, fill=PELO)
d.ellipse([1050, 224, 1058, 232], fill=CAJAO)  # moño discreto

# ---- Mesa de madera ----
d.rounded_rectangle([424, 442, 1016, 466], 6, fill=MADERA)
d.rectangle([424, 458, 1016, 466], fill=MADERA_OSC)
d.rectangle([448, 466, 474, 636], fill=MADERA_OSC)
d.rectangle([966, 466, 992, 636], fill=MADERA_OSC)
d.rectangle([448, 466, 474, 478], fill=(96, 66, 40))
d.rectangle([966, 466, 992, 478], fill=(96, 66, 40))

# ---- Antebrazos y manos apoyadas en la mesa (delante del tablero) ----
d.rounded_rectangle([992, 372, 1010, 452], 8, fill=SALVIA_OSC)
d.rounded_rectangle([1068, 372, 1086, 452], 8, fill=SALVIA_OSC)
d.ellipse([988, 440, 1016, 462], fill=PIEL)
d.ellipse([1062, 440, 1090, 462], fill=PIEL)

# ---- Tarros de cristal con emociones sin etiqueta ----
JARS = [530, 680, 830]
for i, cx in enumerate(JARS):
    # vidrio
    d.rounded_rectangle([cx - 52, 316, cx + 52, 444], 12, fill=VIDRIO, outline=ARENA, width=3)
    # cuello y tapón de corcho
    d.rounded_rectangle([cx - 20, 296, cx + 20, 320], 6, fill=VIDRIO, outline=ARENA, width=3)
    d.rounded_rectangle([cx - 28, 282, cx + 28, 300], 7, fill=CORCHO)
    # contenido: formas orgánicas, una por tarro
    if i == 0:  # espiral terracota: energía que aprieta sin nombre
        d.ellipse([cx - 30, 352, cx + 30, 412], fill=TERRA)
        d.arc([cx - 18, 364, cx + 18, 400], 0, 360, fill=VIDRIO, width=7)
        d.arc([cx - 8, 374, cx + 8, 390], 0, 360, fill=VIDRIO, width=5)
    elif i == 1:  # onda salvia: tristeza o calma, sin decidir
        d.arc([cx - 44, 344, cx + 44, 420], 15, 165, fill=SALVIA, width=10)
        d.arc([cx - 34, 360, cx + 34, 428], 15, 165, fill=SALVIA_OSC, width=8)
        d.ellipse([cx - 6, 392, cx + 6, 404], fill=SALVIA)
    else:  # sol dorado: deseo o alegría, todavía sin palabra
        d.ellipse([cx - 26, 356, cx + 26, 408], fill=DORADO)
        for ang in range(0, 360, 45):
            import math
            a = math.radians(ang)
            x1 = cx + 30 * math.cos(a)
            y1 = 382 + 26 * math.sin(a)
            x2 = cx + 40 * math.cos(a)
            y2 = 382 + 36 * math.sin(a)
            d.line([(x1, y1), (x2, y2)], fill=DORADO, width=4)
    # reflejo del vidrio
    d.line([(cx - 38, 330), (cx - 38, 396)], fill=BLANCO, width=4)
    # etiqueta en blanco (la metáfora: hay contenido, no hay palabra)
    d.line([(cx + 16, 322), (cx + 30, 386)], fill=SALVIA_OSC, width=2)
    d.rounded_rectangle([cx - 32, 384, cx + 32, 412], 5, fill=BLANCO, outline=ARENA, width=2)

# ---- Sensaciones sueltas: puntos que aún no tienen tarro ----
for (px, py, sz, col) in ((470, 286, 5, TERRA_SUAVE), (620, 262, 4, SALVIA_CLARA),
                          (760, 282, 6, DORADO), (900, 300, 4, TERRA_SUAVE),
                          (555, 252, 3, SALVIA_CLARA)):
    d.ellipse([px - sz, py - sz, px + sz, py + sz], fill=col)

# ---- Burbuja vacía sobre la figura: el hueco del nombre ----
d.polygon([(1108, 180), (1074, 214), (1136, 184)], fill=BLANCO, outline=ARENA)
d.rounded_rectangle([1090, 112, 1192, 182], 14, fill=BLANCO, outline=ARENA, width=3)
# tres puntos suspensivos muy tenues dentro (la palabra que no llega)
for k in range(3):
    d.ellipse([1118 + k * 16, 140, 1126 + k * 16, 148], fill=ARENA)

# ---- Vignette cálida muy suave ----
vig = Image.new("RGBA", (W, H), (0, 0, 0, 0))
vd = ImageDraw.Draw(vig)
vd.ellipse([-160, -160, W + 160, H + 160], fill=(0, 0, 0, 0))
vd.rectangle([0, 0, W, H], fill=(92, 66, 46, 24))
vd.ellipse([-90, -90, W + 90, H + 90], fill=(0, 0, 0, 0))
vig = vig.filter(ImageFilter.GaussianBlur(60))
img = Image.alpha_composite(img.convert("RGBA"), vig).convert("RGB")

# ---- Grano sutil ----
noise = Image.effect_noise((W, H), 13).convert("L")
img = Image.composite(Image.blend(img, Image.new("RGB", (W, H), BLANCO), 0.05), img, noise)

img = img.filter(ImageFilter.SMOOTH)
img.save("public/blog/no-se-lo-que-siento-alexitimia.png")
img.save("public/blog/no-se-lo-que-siento-alexitimia.webp", "WEBP", quality=88, method=6)
print("OK: no-se-lo-que-siento-alexitimia.png/.webp guardados", img.size)