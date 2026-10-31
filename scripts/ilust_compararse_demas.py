# -*- coding: utf-8 -*-
"""Ilustración editorial estilo Espai Emocions: 'Compararse con los demás'.

Composición única para este artículo (no reutiliza layouts previos):
primera vez en la serie que aparece un muro de galería de cuadros. Interior
doméstico diurno, cálido (contraste con el artículo anterior, nocturno a la
luz de una vela). A la izquierda, un muro crema con siete marcos pequeños
que contienen "vidas destacadas" en miniatura: casa, pareja, velero, avión
con sol, maletín, zapatito de bebé y brindis de copas. A la derecha, una
figura adulta neutra en género, vista de espaldas (jersei salvia, pantalón
cacao), sostiene una taza humeante y mira el muro. El marco más grande,
justo frente a su mirada, es el único VACÍO: lienzo crema sin escena, la
propia vida sin montaje. Luz suave de ventana (fuera de cuadro, arriba a la
izquierda), sombras desplazadas bajo los marcos y la figura, planta en
maceta terracota a la derecha. Paleta terracota/crema/salvia, 1200x675
(16:9), plano con grano sutil, sin texto.
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
MADERA = (150, 108, 70)
MADERA_OSC = (104, 76, 52)
PIEL = (226, 202, 182)
PELO = (58, 44, 36)

img = Image.new("RGB", (W, H), CREMA)
d = ImageDraw.Draw(img)

# ---- Pared: gradiente horizontal cálido (luz de ventana a la izquierda) ----
for x in range(W):
    t = x / W
    c = tuple(int(BLANCO[i] + (CREMA[i] - BLANCO[i]) * (t ** 1.4)) for i in range(3))
    d.line([(x, 0), (x, 520)], fill=c)

# ---- Suelo de tablones ----
d.rectangle([0, 520, W, H], fill=MADERA)
for k in range(9):
    x0 = 30 + k * 150
    d.line([(x0, 520), (x0 - 60, H)], fill=(120, 88, 58), width=2)
d.line([(0, 520), (W, 520)], fill=(122, 92, 62), width=4)
d.line([(0, 526), (W, 526)], fill=(198, 178, 152), width=2)  # junta zócalo

# ---- Capa de sombras (marcos y figura) ----
sh = Image.new("RGBA", (W, H), (0, 0, 0, 0))
sd = ImageDraw.Draw(sh)

FRAMES = [  # (x0, y0, x1, y1, borde, mat_int)
    (90, 100, 200, 195, SALVIA),       # casa
    (250, 100, 400, 205, MADERA_OSC),  # pareja
    (450, 110, 565, 205, TERRA_LUZ),  # velero
    (620, 100, 750, 195, SALVIA),      # avión y sol
    (95, 270, 210, 370, MADERA),       # maletín
    (285, 275, 405, 370, TERRA_LUZ),   # zapatito
    (470, 280, 580, 370, SALVIA),      # brindis
    (620, 245, 780, 430, TERRA),       # VACÍO (protagonista)
]
for (x0, y0, x1, y1, _) in FRAMES:
    sd.rounded_rectangle([x0 + 7, y0 + 10, x1 + 7, y1 + 10], 10, fill=(90, 64, 42, 70))
sd.ellipse([820, 560, 1100, 612], fill=(30, 22, 14, 90))   # sombra figura
sd.ellipse([1065, 596, 1185, 634], fill=(30, 22, 14, 70))  # sombra maceta
sh = sh.filter(ImageFilter.GaussianBlur(9))
img = Image.alpha_composite(img.convert("RGBA"), sh).convert("RGB")
d = ImageDraw.Draw(img)

def frame(x0, y0, x1, y1, border):
    d.rounded_rectangle([x0, y0, x1, y1], 10, fill=border)
    m = 9
    d.rounded_rectangle([x0 + m, y0 + m, x1 - m, y1 - m], 6, fill=CREMA)

# ---- Marco 1: casa ----
frame(90, 100, 200, 195, SALVIA)
d.polygon([(113, 135), (145, 113), (177, 135)], fill=TERRA)          # tejado
d.rectangle([119, 135, 171, 178], fill=ARENA)                        # fachada
d.rectangle([139, 148, 155, 178], fill=SALVIA_OSC)                   # puerta
d.rectangle([124, 142, 132, 150], fill=BLANCO)                       # ventana
d.rectangle([162, 142, 170, 150], fill=BLANCO)

# ---- Marco 2: pareja de la mano ----
frame(250, 100, 400, 205, MADERA_OSC)
d.ellipse([278, 130, 296, 148], fill=TERRA)            # cabeza 1
d.rounded_rectangle([272, 150, 302, 190], 8, fill=TERRA)
d.ellipse([332, 130, 350, 148], fill=SALVIA)           # cabeza 2
d.rounded_rectangle([326, 150, 356, 190], 8, fill=SALVIA)
d.line([(300, 178), (328, 178)], fill=CAJAO, width=4)  # manos unidas
d.ellipse([298, 174, 306, 182], fill=CAJAO)
d.ellipse([322, 174, 330, 182], fill=CAJAO)

# ---- Marco 3: velero ----
frame(450, 110, 565, 205, TERRA_LUZ)
d.polygon([(492, 128), (522, 128), (507, 162)], fill=BLANCO, outline=None)   # vela mayor
d.polygon([(510, 132), (530, 132), (510, 160)], fill=CREMA)                 # foque
d.polygon([(478, 168), (536, 168), (526, 182), (488, 182)], fill=SALVIA_OSC)  # casco
d.arc([470, 178, 560, 208], 200, 340, fill=SALVIA, width=4)                 # olas
d.arc([486, 188, 560, 214], 200, 340, fill=SALVIA, width=3)
d.ellipse([540, 122, 552, 134], fill=TERRA_SUAVE)                           # sol

# ---- Marco 4: avión y sol ----
frame(620, 100, 750, 195, SALVIA)
d.ellipse([712, 116, 730, 134], fill=TERRA_SUAVE)                           # sol
d.ellipse([646, 138, 700, 156], fill=SALVIA)                                # fuselaje
d.polygon([(662, 148), (682, 116), (692, 148)], fill=SALVIA)                 # cola
d.polygon([(656, 142), (696, 142), (676, 158)], fill=SALVIA_OSC)             # ala
d.arc([630, 170, 742, 190], 200, 340, fill=ARENA, width=4)                  # nubes línea

# ---- Marco 5: maletín ----
frame(95, 270, 210, 370, MADERA)
d.rounded_rectangle([124, 298, 182, 350], 8, fill=CAJAO)                    # cuerpo
d.arc([140, 284, 166, 312], 180, 360, fill=CAJAO, width=6)                  # asa
d.rectangle([148, 318, 158, 330], fill=TERRA)                                # broche

# ---- Marco 6: zapatito de bebé ----
frame(285, 275, 405, 370, TERRA_LUZ)
d.rounded_rectangle([312, 306, 378, 342], 14, fill=TERRA_SUAVE)             # empeine
d.ellipse([306, 322, 372, 350], fill=TERRA)                                 # suela
d.line([(316, 302), (340, 292)], fill=CREMA, width=4)                      # cordones
d.line([(326, 306), (348, 298)], fill=CREMA, width=4)

# ---- Marco 7: brindis de copas ----
frame(470, 280, 580, 370, SALVIA)
d.polygon([(496, 302), (522, 302), (516, 322), (502, 322)], fill=TERRA_LUZ)  # copa 1
d.rectangle([506, 322, 512, 340], fill=TERRA_LUZ)
d.ellipse([498, 338, 520, 348], fill=TERRA_LUZ)
d.polygon([(530, 302), (556, 302), (550, 322), (536, 322)], fill=SALVIA_CLARA)  # copa 2
d.rectangle([540, 322, 546, 340], fill=SALVIA_CLARA)
d.ellipse([532, 338, 554, 348], fill=SALVIA_CLARA)
d.line([(520, 302), (532, 296)], fill=CAJAO, width=3)                      # choque

# ---- Marco 8: VACÍO, el único grande, frente a la mirada ----
frame(620, 245, 780, 430, TERRA)
# sombreado interior suave: la vida propia sin montaje
e = Image.new("RGBA", (W, H), (0, 0, 0, 0))
ed = ImageDraw.Draw(e)
ed.rounded_rectangle([629, 254, 771, 421], 6, outline=(204, 184, 162, 255), width=14)
e = e.filter(ImageFilter.GaussianBlur(7))
img = Image.alpha_composite(img.convert("RGBA"), e).convert("RGB")
d = ImageDraw.Draw(img)

# ---- Figura adulta de espaldas (derecha) ----
# piernas
d.rounded_rectangle([888, 462, 1002, 560], 18, fill=CAJAO)
d.line([(945, 470), (945, 552)], fill=(24, 18, 14), width=3)
# zapatos
d.rounded_rectangle([882, 548, 942, 566], 8, fill=(24, 18, 14))
d.rounded_rectangle([950, 548, 1008, 566], 8, fill=(24, 18, 14))
# torso: jersei salvia
d.rounded_rectangle([856, 296, 1034, 478], 42, fill=SALVIA)
d.rounded_rectangle([856, 296, 876, 478], 21, fill=(112, 124, 104))  # filo luz ventana
# brazo cercano doblado hacia la taza
d.rounded_rectangle([858, 330, 896, 470], 16, fill=SALVIA_OSC)
d.ellipse([838, 438, 884, 478], fill=PIEL)                          # mano
# brazo lejano relajado
d.rounded_rectangle([1000, 336, 1036, 470], 16, fill=SALVIA)
d.ellipse([1002, 462, 1036, 494], fill=PIEL)
# cuello y cabeza (de espaldas: pelo)
d.rectangle([926, 258, 962, 300], fill=PIEL)
d.ellipse([898, 180, 992, 274], fill=PELO)
d.arc([906, 188, 984, 266], 200, 340, fill=(78, 60, 48), width=5)   # remolino del pelo
# orejas asomando
d.ellipse([892, 222, 910, 244], fill=PIEL)
d.ellipse([980, 222, 998, 244], fill=PIEL)

# ---- Taza humeante en la mano ----
d.rounded_rectangle([808, 428, 866, 466], 9, fill=BLANCO)
d.rectangle([808, 436, 866, 446], fill=TERRA_LUZ)
d.ellipse([804, 424, 812, 470], fill=BLANCO)                        # asa
for k in range(2):                                                  # vapor
    x0 = 824 + k * 16
    d.arc([x0, 392, x0 + 16, 420], 60, 220, fill=(255, 244, 228), width=3)
    d.arc([x0 + 2, 410, x0 + 14, 428], 240, 20, fill=(255, 244, 228), width=2)

# ---- Planta en maceta terracota (derecha) ----
d.rounded_rectangle([1092, 548, 1160, 606], 10, fill=TERRA)
d.rounded_rectangle([1100, 540, 1152, 560], 8, fill=TERRA_LUZ)
for (x0, y0, x1, y1) in ((1098, 430, 1136, 548), (1120, 410, 1156, 548),
                         (1064, 460, 1102, 548), (1136, 452, 1174, 548)):
    d.ellipse([x0, y0, x1, y1], fill=SALVIA)
    d.ellipse([x0 + 6, y0 + 8, x1 - 6, y1 - 8], fill=(136, 148, 126))
d.line([(1126, 470), (1126, 552)], fill=SALVIA_OSC, width=5)
d.line([(1104, 486), (1112, 552)], fill=SALVIA_OSC, width=4)
d.line([(1150, 480), (1142, 552)], fill=SALVIA_OSC, width=4)

# ---- Luz de ventana (arriba-izquierda) + calidez general ----
def paste_glow(box, alpha, blur, color):
    mask = Image.new("L", (W, H), 0)
    md = ImageDraw.Draw(mask)
    md.ellipse(box, fill=alpha)
    mask = mask.filter(ImageFilter.GaussianBlur(blur))
    img.paste(Image.new("RGB", (W, H), color), (0, 0), mask)
    return ImageDraw.Draw(img)

d = paste_glow([-160, -180, 520, 380], 92, 90, BLANCO)     # ventana difusa
d = paste_glow([560, 300, 1200, 700], 30, 80, (255, 236, 216))  # tarde cálida
d = paste_glow([600, 220, 820, 470], 26, 40, (255, 246, 232))   # brillo del marco vacío

# ---- Viñeta sutil ----
vig = Image.new("RGBA", (W, H), (0, 0, 0, 0))
vd = ImageDraw.Draw(vig)
vd.rectangle([0, 0, W, H], fill=(26, 20, 14, 52))
vd.ellipse([-60, -60, W + 60, H + 60], fill=(0, 0, 0, 0))
vig = vig.filter(ImageFilter.GaussianBlur(60))
img = Image.alpha_composite(img.convert("RGBA"), vig).convert("RGB")

# ---- Grano sutil ----
noise = Image.effect_noise((W, H), 12).convert("L")
img = Image.composite(Image.blend(img, Image.new("RGB", (W, H), BLANCO), 0.05), img, noise)

img = img.filter(ImageFilter.SMOOTH)
img.save("public/blog/compararse-con-los-demas.png")
img.save("public/blog/compararse-con-los-demas.webp", "WEBP", quality=88, method=6)
print("OK: compararse-con-los-demas.png/.webp guardados", img.size)