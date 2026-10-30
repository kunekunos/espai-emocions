# -*- coding: utf-8 -*-
"""Ilustración editorial estilo Espai Emocions: 'La tristeza del cumpleaños'.

Composición única para este artículo (no reutiliza layouts previos):
primera vez en la serie que la única fuente de luz es una vela encendida.
Interior doméstico en penumbra nocturna (sin ventana: contraste con los
últimos artículos, siempre de día). Centro-izquierda, una mesa con mantel
crema sostiene una tarta pequeña de dos pisos (crema con bandas terracota y
salvia) con UNA vela encendida: la llama tiñe de dorado la escena. A la
derecha, una figura adulta neutra en género, sentada en perfil, jersei
salvia oscuro con filo iluminado por la vela, la mano apoyada en el mantel:
la mirada hacia la llama. Sobre la pared derecha, un reloj que marca casi
las doce (el día que se acaba) y, en una balda, dos felicitaciones
inclinadas que nadie ha abierto. Confeti disperso y apagado: la fiesta
reducida a lo esencial. Paleta terracota/crema/salvia, 1200x675 (16:9),
plano con grano sutil, sin texto.
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
SALVIA_OSC = (74, 86, 66)
CAJAO = (48, 37, 31)
DORADO = (255, 214, 168)
DORADO_LUZ = (255, 232, 198)
MADERA = (150, 108, 70)
MADERA_OSC = (104, 76, 52)
MADERA_NOCT = (84, 60, 40)
PIEL = (226, 202, 182)
PIEL_OSC = (188, 160, 138)
PELO = (58, 44, 36)

# tonos nocturnos (crema/salvia apagados)
PARED_TOP = (128, 112, 98)
PARED_MID = (152, 134, 118)
SUELO = (86, 64, 48)
SUELO_LINEA = (102, 76, 56)

img = Image.new("RGB", (W, H), PARED_MID)
d = ImageDraw.Draw(img)

# ---- Pared nocturna: gradiente cálido apagado, más oscuro arriba ----
for y in range(430):
    t = y / 430
    c = tuple(int(PARED_TOP[i] + (PARED_MID[i] - PARED_TOP[i]) * (t ** 0.85)) for i in range(3))
    d.line([(0, y), (W, y)], fill=c)

# ---- Suelo de tablones en penumbra ----
d.rectangle([0, 430, W, H], fill=SUELO)
d.line([(0, 430), (W, 430)], fill=(70, 52, 38), width=3)
for k in range(8):
    x0 = 40 + k * 160
    d.line([(x0, 430), (x0 - 70, H)], fill=SUELO_LINEA, width=2)

def paste_glow(box, alpha, blur, color):
    """Pega luz cálida suave (la llama es la única luz de la escena)."""
    mask = Image.new("L", (W, H), 0)
    md = ImageDraw.Draw(mask)
    md.ellipse(box, fill=alpha)
    mask = mask.filter(ImageFilter.GaussianBlur(blur))
    img.paste(Image.new("RGB", (W, H), color), (0, 0), mask)
    return ImageDraw.Draw(img)

# ---- Reloj de pared (derecha): casi las doce, el día se acaba ----
cx, cy, r = 1058, 152, 50
d.ellipse([cx - r, cy - r, cx + r, cy + r], fill=MADERA_NOCT)
d.ellipse([cx - r + 7, cy - r + 7, cx + r - 7, cy + r - 7], fill=(216, 200, 182))
for ang_x, ang_y in ((0, -r + 13), (r - 13, 0), (0, r - 13), (-(r - 13), 0)):
    d.ellipse([cx + ang_x - 3, cy + ang_y - 3, cx + ang_x + 3, cy + ang_y + 3], fill=CAJAO)
d.line([(cx, cy), (cx - 5, cy - 22)], fill=CAJAO, width=7)      # horaria: casi las 12
d.line([(cx, cy), (cx - 8, cy - r + 15)], fill=TERRA, width=5)    # minutera: 23:52
d.ellipse([cx - 5, cy - 5, cx + 5, cy + 5], fill=TERRA)

# ---- Balda con dos felicitaciones sin abrir ----
d.rounded_rectangle([918, 300, 1170, 318], 5, fill=MADERA_NOCT)
# felicitación terracota (inclinada, apoyada)
d.polygon([(948, 228), (986, 216), (994, 300), (956, 300)], fill=TERRA)
d.polygon([(958, 250), (990, 241), (991, 249), (959, 258)], fill=CREMA)
# felicitación salvia (detrás, más inclinada)
d.polygon([(1000, 222), (1032, 214), (1042, 300), (1008, 300)], fill=SALVIA_OSC)
d.polygon([(1010, 246), (1036, 239), (1037, 246), (1011, 253)], fill=SALVIA_CLARA)

# ---- Sombra del mantel sobre el suelo ----
sh = Image.new("RGBA", (W, H), (0, 0, 0, 0))
sd = ImageDraw.Draw(sh)
sd.ellipse([200, 590, 830, 652], fill=(30, 22, 16, 90))
sh = sh.filter(ImageFilter.GaussianBlur(12))
img = Image.alpha_composite(img.convert("RGBA"), sh).convert("RGB")
d = ImageDraw.Draw(img)

# ---- Mesa con mantel de crema (la vela la iluminará después) ----
d.rounded_rectangle([205, 466, 795, 618], 16, fill=(206, 188, 168))
d.rounded_rectangle([205, 466, 795, 618], 16, outline=(172, 152, 132), width=2)
d.ellipse([250, 462, 750, 502], fill=(226, 206, 184))   # superficie del mantel
d.line([(232, 490), (768, 490)], fill=(196, 176, 156), width=2)
# pliegues suaves del mantel
for k in range(5):
    x0 = 300 + k * 100
    d.line([(x0, 505), (x0 + 14, 612)], fill=(190, 172, 152), width=2)

# ---- Plato y tarta de dos pisos ----
d.ellipse([398, 456, 602, 476], fill=(214, 194, 172), outline=(176, 156, 136), width=2)
# piso bajo: crema con banda terracota y gotas de cobertura
d.rounded_rectangle([428, 396, 572, 466], 8, fill=(238, 226, 212))
d.rectangle([428, 412, 572, 430], fill=TERRA_LUZ)
for (bx0, by0, bx1, by1) in ((446, 430, 462, 444), (492, 430, 506, 452), (542, 430, 556, 442)):
    d.rounded_rectangle([bx0, by0, bx1, by1], 4, fill=TERRA_LUZ)
# piso alto: crema con banda salvia
d.rounded_rectangle([448, 348, 552, 400], 8, fill=(240, 228, 214))
d.rectangle([448, 362, 552, 376], fill=SALVIA)
# UNA vela: la única luz
d.rectangle([494, 300, 506, 352], fill=TERRA_SUAVE)
d.rectangle([494, 300, 506, 310], fill=TERRA_LUZ)
d.line([(500, 296), (500, 302)], fill=CAJAO, width=3)
# llama
d.polygon([(500, 270), (489, 292), (500, 304), (511, 292)], fill=(255, 206, 120))
d.ellipse([494, 282, 506, 300], fill=(255, 242, 214))

# ---- Figura adulta sentada (derecha), perfil hacia la vela ----
# silla en penumbra
d.rounded_rectangle([892, 288, 962, 462], 12, fill=MADERA_NOCT)
d.rounded_rectangle([806, 450, 968, 478], 6, fill=MADERA_OSC)
d.rectangle([828, 478, 846, 648], fill=MADERA_NOCT)
d.rectangle([932, 478, 950, 648], fill=MADERA_NOCT)
# sombra de la figura en el suelo
fsh = Image.new("RGBA", (W, H), (0, 0, 0, 0))
fsd = ImageDraw.Draw(fsh)
fsd.ellipse([800, 620, 980, 668], fill=(24, 18, 12, 80))
fsh = fsh.filter(ImageFilter.GaussianBlur(8))
img = Image.alpha_composite(img.convert("RGBA"), fsh).convert("RGB")
d = ImageDraw.Draw(img)
# torso: jersei salvia oscuro
d.rounded_rectangle([806, 300, 902, 478], 22, fill=SALVIA_OSC)
# filo iluminado por la vela (borde izquierdo del torso)
d.rounded_rectangle([806, 300, 820, 478], 11, fill=(122, 134, 112))
# cabeza en perfil hacia la izquierda
d.ellipse([818, 234, 886, 302], fill=PIEL)
d.ellipse([812, 262, 824, 280], fill=PIEL)            # nariz en perfil
d.chord([818, 228, 886, 296], 265, 95, fill=PELO)     # pelo: nuca y coronilla
d.ellipse([844, 272, 854, 282], fill=CAJAO)            # ojo en sombra
# brazo hacia el mantel
d.rounded_rectangle([700, 440, 818, 470], 12, fill=SALVIA_OSC)
d.rounded_rectangle([700, 440, 714, 470], 7, fill=(122, 134, 112))
d.ellipse([672, 448, 710, 482], fill=PIEL)            # mano apoyada en el mantel
d.ellipse([660, 456, 682, 480], fill=PIEL_OSC)        # pulgar en sombra

# ---- Confeti disperso y apagado: la fiesta reducida ----
for (x, y, col, s) in ((348, 488, DORADO, 7), (602, 484, TERRA_SUAVE, 8), (560, 500, SALVIA_CLARA, 6),
                       (330, 502, TERRA_SUAVE, 6), (700, 498, DORADO, 5), (470, 492, SALVIA_CLARA, 6),
                       (426, 634, (150, 106, 68), 6), (306, 656, (110, 88, 62), 5),
                       (644, 652, (96, 74, 52), 6), (884, 628, (110, 88, 62), 5)):
    d.polygon([(x - s, y), (x, y - s), (x + s, y), (x, y + s)], fill=col)

# ---- LUZ: la llama de la vela ilumina toda la escena ----
d = paste_glow([190, 0, 810, 580], 46, 70, DORADO)      # penumbra cálida general
d = paste_glow([330, 130, 670, 460], 58, 30, (255, 210, 164))
d = paste_glow([416, 216, 584, 384], 80, 14, (255, 224, 178))
d = paste_glow([464, 258, 536, 332], 140, 6, DORADO_LUZ)  # núcleo de la llama
d = paste_glow([782, 236, 872, 312], 55, 10, (255, 214, 178))  # mejilla y frente
d = paste_glow([300, 430, 720, 510], 48, 24, (255, 214, 170))  # mantel
d = paste_glow([880, 60, 1190, 340], 16, 30, (255, 212, 172))   # reflejo tenue en la pared derecha

# ---- Viñeta nocturna pronunciada ----
vig = Image.new("RGBA", (W, H), (0, 0, 0, 0))
vd = ImageDraw.Draw(vig)
vd.rectangle([0, 0, W, H], fill=(18, 14, 10, 96))
vd.ellipse([-70, -70, W + 70, H + 70], fill=(0, 0, 0, 0))
vig = vig.filter(ImageFilter.GaussianBlur(60))
img = Image.alpha_composite(img.convert("RGBA"), vig).convert("RGB")

# ---- Grano sutil ----
noise = Image.effect_noise((W, H), 13).convert("L")
img = Image.composite(Image.blend(img, Image.new("RGB", (W, H), BLANCO), 0.05), img, noise)

img = img.filter(ImageFilter.SMOOTH)
img.save("public/blog/tristeza-cumpleanos.png")
img.save("public/blog/tristeza-cumpleanos.webp", "WEBP", quality=88, method=6)
print("OK: tristeza-cumpleanos.png/.webp guardados", img.size)