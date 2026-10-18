# -*- coding: utf-8 -*-
"""Ilustración editorial estilo Espai Emocions: 'Hacer amigos de adulto'.

Composición única para este artículo (no reutiliza layouts previos):
fachada cálida al atardecer con dos balcones contiguos. Dos figuras adultas
se asoman y conversan: cada una conserva su casa (la autonomía adulta) y
ambas eligen inclinarse hacia el otro (el primer paso). Entre los dos
balcones, un cordel con bombillas cálidas tiende el puente que se construye
a mano — la amistad como hilo que se tije con presencia repetida. En la
cornisa central, un gato salvia escucha la conversación. Plantas de salvia
en ambos balcones, tejados lejanos, cielo dorado. Paleta terracota/crema/
salvia, luz dorada de ocaso, 1200x675 (16:9), estilo plano con grano
sutil, sin texto.
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
FACHADA = (236, 222, 209)
FACHADA_SOMBRA = (226, 206, 186)

img = Image.new("RGB", (W, H), CREMA)
d = ImageDraw.Draw(img)

# ---- Cielo dorado de ocaso (hasta la línea de cornisa y=128) ----
for y in range(0, 152):
    t = y / 151.0
    r = int(238 + (244 - 238) * t)
    g = int(216 + (232 - 216) * t)
    b = int(182 + (222 - 182) * t)
    d.line([(0, y), (W, y)], fill=(r, g, b))

# resplandor suave de sol poniente (derecha alta)
sun = Image.new("RGBA", (W, H), (0, 0, 0, 0))
sd = ImageDraw.Draw(sun)
sd.ellipse([940, -20, 1160, 160], fill=(238, 190, 140, 90))
sun = sun.filter(ImageFilter.GaussianBlur(40))
img = Image.alpha_composite(img.convert("RGBA"), sun).convert("RGB")
d = ImageDraw.Draw(img)

# pajaros lejanos
for bx, by in [(150, 92), (205, 74), (948, 66)]:
    d.line([(bx - 9, by + 3), (bx, by - 2)], fill=(150, 128, 108), width=2)
    d.line([(bx, by - 2), (bx + 9, by + 3)], fill=(150, 128, 108), width=2)

# ---- Tejados lejanos sobre la cornisa (lado derecho) ----
for rx, rw, rh in [(640, 70, 26), (720, 54, 38), (790, 90, 18), (900, 60, 30), (976, 100, 22), (1090, 60, 14)]:
    d.rectangle([rx, 128 - rh, rx + rw, 128], fill=SALVIA_SUAVE)
d.rectangle([752, 74, 766, 128], fill=SALVIA_SUAVE)   # chimenea
d.rectangle([1004, 82, 1016, 128], fill=SALVIA_SUAVE)  # chimenea

# ---- Cornisa de la cornisa superior y fachada ----
d.rectangle([0, 128, W, 152], fill=ARENA)
d.line([(0, 152), (W, 152)], fill=ARENA_OSC, width=2)
d.rectangle([0, 152, W, H], fill=FACHADA)

# textura sutil de la fachada
d.line([(0, 560), (W, 560)], fill=(230, 214, 198), width=2)
d.line([(0, 606), (W, 606)], fill=(230, 214, 198), width=2)

# bajante lateral derecho
d.rectangle([1128, 152, 1144, H], fill=MADERA_OSC)
for yy in (300, 480):
    d.rectangle([1120, yy, 1152, yy + 6], fill=MADERA_OSC)

# ---- Aperturas de los dos balcones ----
LX0, LX1 = 170, 470
RX0, RX1 = 730, 1030
BY0, BY1 = 230, 460
for X0, X1 in [(LX0, LX1), (RX0, RX1)]:
    d.rectangle([X0, BY0, X1, BY1], fill=FACHADA_SOMBRA)
    d.rectangle([X0, BY0, X1, BY0 + 22], fill=(216, 196, 176))  # sombra interior
    # marco de madera
    d.rectangle([X0 - 8, BY0 - 8, X0 + 8, BY1 + 8], fill=MADERA)
    d.rectangle([X1 - 8, BY0 - 8, X1 + 8, BY1 + 8], fill=MADERA)
    d.rectangle([X0 - 8, BY0 - 8, X1 + 8, BY0 + 8], fill=MADERA)

# ventilación circular en el paramento central
d.ellipse([582, 162, 618, 198], fill=(228, 210, 190), outline=ARENA_OSC, width=4)

# ---- Figura izquierda (perfil derecho, con taza hacia la otra) ----
# moño detrás
d.ellipse([287, 243, 309, 261], fill=(120, 84, 58))
# cabello y cara (circulos desplazados: pelo arriba-atras, cara adelantada)
d.ellipse([285, 203, 337, 255], fill=(120, 84, 58))
d.ellipse([302, 215, 344, 257], fill=DORADO_SUAVE)
# nariz y ojo
d.polygon([(343, 234), (349, 238), (343, 241)], fill=DORADO_SUAVE)
d.ellipse([330, 228, 335, 233], fill=CAJAO)
# cuello y torso
d.rectangle([307, 250, 323, 270], fill=DORADO_SUAVE)
d.polygon([(283, 268), (352, 268), (362, 344), (276, 344)], fill=TERRA_SUAVE)
# brazo delantero: codo en la barandilla, mano con taza hacia la vecina
d.line([(348, 278), (374, 306)], fill=TERRA_LUZ, width=13)
d.line([(374, 306), (408, 288)], fill=TERRA_LUZ, width=12)
d.ellipse([402, 278, 424, 298], fill=DORADO_SUAVE)
d.rounded_rectangle([398, 258, 432, 286], 6, fill=SALVIA)
d.ellipse([398, 254, 432, 264], fill=(150, 158, 142))
# vapor de la taza
d.line([(412, 248), (407, 236), (414, 224)], fill=(240, 228, 208), width=2)
d.line([(422, 248), (418, 238), (424, 228)], fill=(240, 228, 208), width=2)
# brazo trasero apoyado en la barandilla
d.line([(296, 280), (264, 306)], fill=TERRA_LUZ, width=13)
d.ellipse([250, 296, 272, 316], fill=DORADO_SUAVE)

# ---- Figura derecha (perfil izquierdo, ofrece un plato) ----
d.ellipse([849, 210, 899, 260], fill=(60, 45, 35))
d.ellipse([842, 221, 882, 261], fill=DORADO_SUAVE)
d.polygon([(843, 238), (837, 242), (843, 245)], fill=DORADO_SUAVE)
d.ellipse([851, 232, 856, 237], fill=CAJAO)
d.rectangle([858, 252, 874, 272], fill=DORADO_SUAVE)
d.polygon([(838, 276), (902, 276), (912, 346), (828, 346)], fill=(136, 150, 126))
# brazo delantero: codo en la barandilla, mano que ofrece el plato
d.line([(844, 286), (806, 300)], fill=(110, 123, 101), width=13)
d.line([(806, 300), (772, 272)], fill=(110, 123, 101), width=12)
d.ellipse([760, 262, 782, 282], fill=DORADO_SUAVE)
# plato con dos pastas, visible sobre el riel
d.ellipse([738, 274, 804, 292], fill=BLANCO, outline=ARENA_OSC, width=2)
d.ellipse([752, 278, 764, 290], fill=TERRA_LUZ)
d.ellipse([770, 279, 782, 291], fill=TERRA_LUZ)
# brazo trasero apoyado
d.line([(894, 288), (922, 310)], fill=(110, 123, 101), width=13)
d.ellipse([912, 302, 934, 322], fill=DORADO_SUAVE)

# ---- Macetas dentro de los balcones (antes de las barandillas) ----
# izquierda: maceta terracota con salvia alta
d.polygon([(196, 404), (252, 404), (244, 458), (204, 458)], fill=TERRA)
d.rectangle([190, 396, 258, 406], fill=TERRA_LUZ)
for ang in (-64, -30, 4, 38):
    a = math.radians(ang)
    x2 = 224 + 54 * math.sin(a)
    y2 = 400 - 66 * math.cos(a)
    d.line([(224, 398), (x2, y2)], fill=SALVIA, width=5)
    d.ellipse([x2 - 10, y2 - 14, x2 + 10, y2 + 8], fill=SALVIA)
# derecha: maceta con salvia
d.polygon([(984, 404), (1040, 404), (1032, 458), (992, 458)], fill=TERRA)
d.rectangle([978, 396, 1046, 406], fill=TERRA_LUZ)
for ang in (-40, -6, 30, 60):
    a = math.radians(ang)
    x2 = 1012 + 50 * math.sin(a)
    y2 = 400 - 60 * math.cos(a)
    d.line([(1012, 398), (x2, y2)], fill=SALVIA, width=5)
    d.ellipse([x2 - 10, y2 - 14, x2 + 10, y2 + 8], fill=SALVIA)

# ---- Barandillas (encima de figuras y macetas) ----
RT = 310
for X0, X1 in [(LX0, LX1), (RX0, RX1)]:
    x = X0 + 18
    while x < X1 - 6:
        d.line([(x, RT + 8), (x, BY1)], fill=MADERA_OSC, width=4)
        x += 38
    d.rounded_rectangle([X0 - 8, RT - 10, X1 + 8, RT + 6], 7, fill=MADERA)

# ---- Cornisa de suelo continua ----
d.rectangle([150, 458, 1050, 478], fill=MADERA)
d.line([(150, 478), (1050, 478)], fill=(198, 184, 166), width=5)

# ---- Gato salvia sentado en la cornisa central ----
d.ellipse([572, 412, 630, 459], fill=SALVIA_OSC)          # cuerpo
d.ellipse([549, 389, 581, 421], fill=SALVIA_OSC)          # cabeza
d.polygon([(551, 396), (555, 378), (563, 392)], fill=SALVIA_OSC)   # oreja izq
d.polygon([(566, 392), (574, 376), (580, 394)], fill=SALVIA_OSC)  # oreja der
d.arc([606, 408, 664, 462], 210, 90, fill=SALVIA_OSC, width=7)    # cola

# ---- Cordel de bombillas entre los dos balcones ----
P0, P1, P2 = (LX1 + 4, 296), (600, 400), (RX0 - 4, 296)
pts = []
for i in range(41):
    t = i / 40.0
    u = 1 - t
    x = u * u * P0[0] + 2 * u * t * P1[0] + t * t * P2[0]
    y = u * u * P0[1] + 2 * u * t * P1[1] + t * t * P2[1]
    pts.append((x, y))
for i in range(40):
    d.line([pts[i], pts[i + 1]], fill=(110, 90, 70), width=2)

bulbs = [pts[5], pts[13], pts[20], pts[27], pts[35]]
# capa de brillo cálido
glow = Image.new("RGBA", (W, H), (0, 0, 0, 0))
gd = ImageDraw.Draw(glow)
for bx, by in bulbs:
    gd.line([(bx, by), (bx, by + 9)], fill=(110, 90, 70, 255), width=2)
    gd.ellipse([bx - 16, by + 9 - 16, bx + 16, by + 9 + 16], fill=(238, 190, 140, 95))
glow = glow.filter(ImageFilter.GaussianBlur(3))
img = Image.alpha_composite(img.convert("RGBA"), glow).convert("RGB")
d = ImageDraw.Draw(img)
for bx, by in bulbs:
    d.ellipse([bx - 6, by + 3, bx + 6, by + 15], fill=DORADO, outline=(200, 150, 100), width=1)

# ---- Luz dorada de tarde desde la izquierda ----
light = Image.new("RGBA", (W, H), (0, 0, 0, 0))
ld = ImageDraw.Draw(light)
ld.polygon([(0, 0), (620, 0), (360, H), (0, H)], fill=(240, 205, 160, 26))
img = Image.alpha_composite(img.convert("RGBA"), light).convert("RGB")
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

img.save("public/blog/hacer-amigos-adulto.png", optimize=True)
img.save("public/blog/hacer-amigos-adulto.webp", "WEBP", quality=82, method=6)
print("OK: ilustracion generada 1200x675 -> public/blog/hacer-amigos-adulto.{png,webp}")