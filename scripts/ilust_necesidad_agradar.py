# -*- coding: utf-8 -*-
"""Ilustración editorial estilo Espai Emocions: 'La necessitat d'agradar'.

Composición única para este artículo (no reutiliza layouts previos):
primera escena de la serie con BRAZOS AJENOS que entran por los bordes
del encuadre. Interior doméstico diurno, cálido. Al centro, una figura
adulta neutra en género, vista de espaldas (jersei salvia, pantalón
cacao), sostiene en alto con ambos brazos una bandeja terracota con
cuatro tazas humeantes. Desde los laterales del cuadro entran cuatro
brazos con manga (dos terracota luz, dos madera) que alargan las manos
abiertas hacia la bandeja sin llegar a tocarla: la demanda constante. A
los pies de la figura, en el suelo, su propia taza: pequeña, blanca y
VACÍA, con un resplandor dorado suave: lo que nadie llena. Metáfora:
sirves a todos mientras tu taza espera. Paleta terracota/crema/salvia,
1200x675 (16:9), plano con grano sutil, sin texto.
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
MADERA = (150, 108, 70)
MADERA_OSC = (104, 76, 52)
PIEL = (232, 206, 186)
PELO = (52, 40, 32)

img = Image.new("RGB", (W, H), CREMA)
d = ImageDraw.Draw(img)

# ---- Pared: gradiente horizontal cálido (luz de ventana a la izquierda) ----
for x in range(W):
    t = x / W
    c = tuple(int(BLANCO[i] + (CREMA[i] - BLANCO[i]) * (t ** 1.35)) for i in range(3))
    d.line([(x, 0), (x, 528)], fill=c)

# rodapié
d.rectangle([0, 516, W, 528], fill=(208, 190, 170))
d.line([(0, 516), (W, 516)], fill=(178, 158, 138), width=3)

# ---- Suelo de tablones ----
d.rectangle([0, 528, W, H], fill=MADERA)
for y in range(528, H):
    t = (y - 528) / (H - 528)
    c = tuple(int((150 - 30 * t), ) for _ in range(1))
for k in range(9):
    x0 = 40 + k * 150
    d.line([(x0, 528), (x0 - 52, H)], fill=(120, 88, 58), width=2)
d.line([(0, 528), (W, 528)], fill=(120, 90, 60), width=4)

# sombra suave del suelo cerca de la pared
sh_floor = Image.new("RGBA", (W, H), (0, 0, 0, 0))
sfd = ImageDraw.Draw(sh_floor)
sfd.rectangle([0, 528, W, 552], fill=(60, 42, 26, 60))
sh_floor = sh_floor.filter(ImageFilter.GaussianBlur(10))
img = Image.alpha_composite(img.convert("RGBA"), sh_floor).convert("RGB")
d = ImageDraw.Draw(img)

# ---- Capa de sombras proyectadas (figura, bandeja, brazos, taza) ----
sh = Image.new("RGBA", (W, H), (0, 0, 0, 0))
sd = ImageDraw.Draw(sh)
sd.ellipse([470, 580, 730, 636], fill=(28, 20, 12, 95))          # figura
sd.ellipse([450, 254, 690, 298], fill=(40, 28, 16, 45))          # bandeja (sobre pared)
sd.ellipse([508, 596, 588, 630], fill=(28, 20, 12, 90))          # taza propia
sd.ellipse([930, 566, 1070, 610], fill=(28, 20, 12, 70))         # libros
sd.rounded_rectangle([0, 250, 150, 285], 20, fill=(40, 28, 16, 35))   # brazo izq alto
sd.rounded_rectangle([1050, 245, 1200, 280], 20, fill=(40, 28, 16, 35))
sd.rounded_rectangle([0, 330, 130, 362], 20, fill=(40, 28, 16, 30))   # brazo izq bajo
sd.rounded_rectangle([1070, 318, 1200, 352], 20, fill=(40, 28, 16, 30))
sh = sh.filter(ImageFilter.GaussianBlur(9))
img = Image.alpha_composite(img.convert("RGBA"), sh).convert("RGB")
d = ImageDraw.Draw(img)

# ---- Brazos ajenos que entran pels laterals (la demanda) ----
def brazo(p1, p2, w, color, mano_xy):
    d.line([p1, p2], fill=color, width=w)
    # puño de manga
    mx, my = mano_xy
    d.ellipse([mx - 16, my - 16, mx + 16, my + 16], fill=color)
    # mano abierta (piel) con dedos
    d.ellipse([mx - 13, my - 13, mx + 13, my + 13], fill=PIEL)
    for dx, dy in ((-9, -8), (0, -11), (9, -8)):
        d.ellipse([mx + dx - 4, my + dy - 6, mx + dx + 4, my + dy + 4], fill=PIEL)

brazo((0, 262), (340, 266), 26, TERRA_LUZ, (322, 264))    # izq alto
brazo((0, 344), (300, 336), 22, MADERA, (282, 334))        # izq bajo
brazo((1200, 256), (860, 262), 26, TERRA_LUZ, (878, 260))   # der alto
brazo((1200, 336), (900, 328), 22, MADERA, (882, 326))     # der bajo

# ---- Figura adulta de espaldas, bandeja en alto ----
# piernas y zapatos
d.rounded_rectangle([556, 468, 644, 596], 16, fill=CAJAO)
d.line([(600, 476), (600, 590)], fill=(24, 18, 14), width=3)
d.rounded_rectangle([550, 584, 606, 604], 8, fill=(24, 18, 14))
d.rounded_rectangle([596, 584, 652, 604], 8, fill=(24, 18, 14))
# torso: jersei salvia
d.rounded_rectangle([536, 336, 664, 492], 38, fill=SALVIA)
d.rounded_rectangle([536, 336, 556, 492], 19, fill=(112, 124, 104))  # filo luz
# brazos en alto hacia la bandeja (mangas salvia oscura)
d.line([(552, 368), (492, 252)], fill=SALVIA_OSC, width=24)
d.line([(648, 368), (708, 252)], fill=SALVIA_OSC, width=24)
# manos sujetando la bandeja
d.ellipse([476, 234, 508, 266], fill=PIEL)
d.ellipse([692, 234, 724, 266], fill=PIEL)
# cabeza (de espaldas: nuca de pelo cacao)
d.ellipse([562, 258, 638, 336], fill=PELO)
d.arc([562, 258, 638, 336], 150, 390, fill=(72, 56, 44), width=5)   # brillo del pelo

# ---- Bandeja terracota con tasses (en alto, sobre el cap) ----
d.ellipse([462, 192, 738, 248], fill=TERRA)
d.ellipse([474, 196, 726, 240], fill=TERRA_LUZ)          # interior de la safata
d.ellipse([482, 199, 718, 236], fill=(216, 128, 78))     # fons
# borde superior más claro
d.arc([462, 192, 738, 248], 185, 355, fill=(214, 130, 84), width=4)

TASSES = [(520, 198), (575, 195), (630, 195), (678, 198)]
for tx, ty in TASSES:
    d.rounded_rectangle([tx - 13, ty - 22, tx + 13, ty + 4], 6, fill=BLANCO)
    d.ellipse([tx - 13, ty - 26, tx + 13, ty - 16], fill=(255, 252, 247))  # boca
    d.ellipse([tx - 13, ty, tx + 13, ty + 10], fill=SALVIA_CLARA)          # cafe

# vapor suave de dos tazas
vap = Image.new("RGBA", (W, H), (0, 0, 0, 0))
vd = ImageDraw.Draw(vap)
for (sx, sy) in ((575, 193), (630, 193)):
    vd.arc([sx - 14, sy - 52, sx + 14, sy - 18], 70, 200, fill=(150, 128, 108, 130), width=4)
    vd.arc([sx - 10, sy - 66, sx + 12, sy - 36], 90, 230, fill=(150, 128, 108, 90), width=3)
vap = vap.filter(ImageFilter.GaussianBlur(2.2))
img = Image.alpha_composite(img.convert("RGBA"), vap).convert("RGB")
d = ImageDraw.Draw(img)

# ---- La propia taza: pequeña, blanca y VACÍA, a los pies ----
d.rounded_rectangle([528, 586, 560, 612], 6, fill=BLANCO)
d.ellipse([528, 582, 560, 592], fill=(255, 252, 247))
d.arc([556, 592, 574, 606], 270, 90, fill=BLANCO, width=5)   # nansa
glow = Image.new("RGBA", (W, H), (0, 0, 0, 0))
gd = ImageDraw.Draw(glow)
gd.ellipse([496, 556, 596, 640], fill=DORADO + (0,))
gd.ellipse([516, 572, 576, 622], fill=(248, 226, 190, 70))
glow = glow.filter(ImageFilter.GaussianBlur(14))
img = Image.alpha_composite(img.convert("RGBA"), glow).convert("RGB")
d = ImageDraw.Draw(img)

# ---- Pila de dos libros (derecha abajo) ----
d.rounded_rectangle([940, 576, 1064, 604], 6, fill=SALVIA)
d.rectangle([940, 596, 1064, 600], fill=SALVIA_OSC)
d.rounded_rectangle([952, 552, 1052, 578], 6, fill=TERRA_SUAVE)
d.rectangle([952, 570, 1052, 574], fill=TERRA_LUZ)

# ---- Luz de ventana (arriba-izquierda) + calidez general ----
def paste_glow(box, alpha, blur, color):
    mask = Image.new("L", (W, H), 0)
    md = ImageDraw.Draw(mask)
    md.ellipse(box, fill=alpha)
    mask = mask.filter(ImageFilter.GaussianBlur(blur))
    img.paste(Image.new("RGB", (W, H), color), (0, 0), mask)
    return ImageDraw.Draw(img)

d = paste_glow([-180, -200, 480, 360], 90, 90, BLANCO)      # ventana difusa
d = paste_glow([560, 180, 1200, 700], 28, 80, (255, 236, 216))  # tarde cálida
d = paste_glow([500, 540, 600, 640], 40, 30, (255, 244, 226))  # aura de la taza vacía

# ---- Viñeta sutil ----
vig = Image.new("RGBA", (W, H), (0, 0, 0, 0))
vd2 = ImageDraw.Draw(vig)
vd2.rectangle([0, 0, W, H], fill=(26, 20, 14, 46))
vd2.ellipse([-60, -60, W + 60, H + 60], fill=(0, 0, 0, 0))
vig = vig.filter(ImageFilter.GaussianBlur(60))
img = Image.alpha_composite(img.convert("RGBA"), vig).convert("RGB")

# ---- Grano sutil ----
noise = Image.effect_noise((W, H), 12).convert("L")
img = Image.composite(Image.blend(img, Image.new("RGB", (W, H), BLANCO), 0.05), img, noise)

img = img.filter(ImageFilter.SMOOTH)
img.save("public/blog/necesidad-de-agradar.png")
img.save("public/blog/necesidad-de-agradar.webp", "WEBP", quality=88, method=6)
print("OK: necesidad-de-agradar.png/.webp guardados", img.size)