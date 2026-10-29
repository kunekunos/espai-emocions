# -*- coding: utf-8 -*-
"""Ilustración editorial estilo Espai Emocions: 'Conversaciones pendientes con tus padres'.

Composición única para este artículo (no reutiliza layouts previos):
primera vez en la serie que una fotografía antigua enmarcada es la
protagonista. Mesa de madera compartida: a la izquierda, una figura adulta
neutra en género, sentada, con las manos alrededor de su taza terracota;
a la derecha, una silla vacía (el lugar del padre o de la madre) con un plaid
de salvia, y delante, apoyada en la taza salvia, una pequeña foto sepia con
dos figuras jóvenes — los padres antes de ser padres — con un halo dorado
suave. De cada taza sube un hilo de vapor que se inclina hacia el centro
pero no llega a encontrarse: la conversa que espera. Ventana cálida a la
derecha (composición espejada respecto a artículos recientes), planta de
salvia, luz dorada sobre el suelo. Paleta terracota/crema/salvia, 1200x675
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
SALVIA_OSC = (95, 107, 88)
CAJAO = (48, 37, 31)
DORADO = (240, 205, 160)
DORADO_LUZ = (248, 224, 186)
SEPIA = (214, 174, 132)
MADERA = (150, 108, 70)
MADERA_OSC = (126, 88, 54)
PIEL = (232, 206, 186)
PELO = (92, 66, 50)

img = Image.new("RGB", (W, H), CREMA)
d = ImageDraw.Draw(img)

# ---- Pared: crema con insinuación salvia arriba ----
WALL = 430
for y in range(WALL):
    t = y / WALL
    c = tuple(int(SALVIA_CLARA[i] + (CREMA[i] - SALVIA_CLARA[i]) * (t ** 1.6)) for i in range(3))
    d.line([(0, y), (W, y)], fill=c)

# ---- Suelo de tablones cálidos ----
d.rectangle([0, WALL, W, H], fill=(216, 190, 166))
d.line([(0, WALL), (W, WALL)], fill=ARENA, width=3)
for k in range(9):
    x0 = 60 + k * 150
    d.line([(x0, WALL), (x0 - 90, H)], fill=(196, 168, 142), width=2)

# ---- Ventana cálida a la derecha (luz de tarde) ----
d.rounded_rectangle([872, 74, 1136, 382], 10, fill=MADERA)
glow = Image.new("RGBA", (W, H), (0, 0, 0, 0))
gd = ImageDraw.Draw(glow)
gd.rectangle([892, 94, 1116, 362], fill=(248, 224, 186, 255))
glow = glow.filter(ImageFilter.GaussianBlur(10))
img = Image.alpha_composite(img.convert("RGBA"), glow).convert("RGB")
d = ImageDraw.Draw(img)
d.rectangle([892, 94, 1116, 362], fill=DORADO_LUZ)
sun = Image.new("RGBA", (W, H), (0, 0, 0, 0))
sd = ImageDraw.Draw(sun)
sd.ellipse([950, 140, 1060, 320], fill=(255, 246, 226, 170))
sun = sun.filter(ImageFilter.GaussianBlur(22))
img = Image.alpha_composite(img.convert("RGBA"), sun).convert("RGB")
d = ImageDraw.Draw(img)
d.line([(1004, 94), (1004, 362)], fill=MADERA, width=7)
d.line([(892, 228), (1116, 228)], fill=MADERA, width=7)
d.rounded_rectangle([860, 378, 1148, 394], 6, fill=MADERA_OSC)

# ---- Charco de luz dorada sobre el suelo (tarde) ----
pool = Image.new("RGBA", (W, H), (0, 0, 0, 0))
pd = ImageDraw.Draw(pool)
pd.polygon([(892, 396), (1116, 396), (1180, 640), (760, 640)], fill=(244, 210, 158, 54))
pool = pool.filter(ImageFilter.GaussianBlur(14))
img = Image.alpha_composite(img.convert("RGBA"), pool).convert("RGB")
d = ImageDraw.Draw(img)

# ---- Planta de salvia (rincón derecho, junto a la ventana) ----
for i, (dx, dy, sz) in enumerate(((0, -8, 1.0), (30, -46, 1.1), (-30, -42, 0.95), (12, -80, 0.75), (-16, -74, 0.7))):
    lay = Image.new("RGBA", (W, H), (0, 0, 0, 0))
    ld = ImageDraw.Draw(lay)
    cx, cy = 1178 + dx, 585 + dy
    leaf_col = SALVIA_OSC if i % 2 else SALVIA
    ld.ellipse([cx - 13 * sz, cy - 46 * sz, cx + 13 * sz, cy + 10 * sz], fill=(*leaf_col, 255))
    lay = lay.filter(ImageFilter.GaussianBlur(1))
    img = Image.alpha_composite(img.convert("RGBA"), lay).convert("RGB")
d = ImageDraw.Draw(img)
d.polygon([(1158, 570), (1198, 570), (1190, 622), (1166, 622)], fill=TERRA)
d.rectangle([1158, 570, 1198, 576], fill=TERRA_LUZ)

# ---- Sombras en el suelo ----
sh = Image.new("RGBA", (W, H), (0, 0, 0, 0))
shd = ImageDraw.Draw(sh)
shd.ellipse([220, 600, 900, 648], fill=(120, 90, 66, 70))
sh = sh.filter(ImageFilter.GaussianBlur(9))
img = Image.alpha_composite(img.convert("RGBA"), sh).convert("RGB")
d = ImageDraw.Draw(img)

# ---- Silla vacía a la derecha del centro (el lugar que espera) ----
d.rounded_rectangle([748, 322, 844, 446], 12, fill=MADERA)
d.rectangle([748, 322, 844, 330], fill=MADERA_OSC)
# plaid de salvia doblado sobre el respaldo
d.rounded_rectangle([752, 330, 840, 372], 8, fill=SALVIA)
d.rectangle([752, 366, 840, 372], fill=SALVIA_OSC)
# patas de la silla (se insinúan bajo la mesa)
d.rectangle([758, 446, 776, 588], fill=MADERA_OSC)
d.rectangle([818, 446, 836, 588], fill=MADERA_OSC)

# ---- Mesa de madera (centro-izquierda) ----
d.rounded_rectangle([238, 438, 866, 462], 7, fill=MADERA)
d.rectangle([238, 454, 866, 462], fill=MADERA_OSC)
d.rectangle([268, 462, 292, 590], fill=MADERA_OSC)
d.rectangle([806, 462, 830, 590], fill=MADERA_OSC)
d.rectangle([268, 462, 292, 476], fill=(96, 66, 40))
d.rectangle([806, 462, 830, 476], fill=(96, 66, 40))

# ---- Figura adulta sentada (izquierda), mirando la foto ----
# silla de la figura
d.rounded_rectangle([96, 318, 150, 452], 10, fill=MADERA)
d.rectangle([96, 318, 150, 326], fill=MADERA_OSC)
d.rounded_rectangle([104, 448, 236, 470], 8, fill=MADERA)
d.rectangle([112, 470, 130, 590], fill=MADERA_OSC)
d.rectangle([212, 470, 230, 590], fill=MADERA_OSC)
# sombra propia de la figura
figsh = Image.new("RGBA", (W, H), (0, 0, 0, 0))
fsd = ImageDraw.Draw(figsh)
fsd.ellipse([120, 440, 250, 478], fill=(120, 90, 66, 55))
figsh = figsh.filter(ImageFilter.GaussianBlur(6))
img = Image.alpha_composite(img.convert("RGBA"), figsh).convert("RGB")
d = ImageDraw.Draw(img)
# torso: jersey terracota
d.rounded_rectangle([118, 322, 216, 452], 18, fill=TERRA)
# cuello y cabeza (perfil hacia la derecha)
d.rectangle([152, 298, 176, 326], fill=PIEL)
d.ellipse([148, 246, 214, 312], fill=PIEL)
d.chord([148, 242, 214, 306], 95, 275, fill=PELO)
# leve nariz en perfil
d.ellipse([208, 270, 216, 282], fill=PIEL)
# antebrazo hacia la mesa y manos alrededor de la taza propia
d.rounded_rectangle([176, 386, 300, 414], 10, fill=TERRA_LUZ)
d.ellipse([292, 398, 322, 428], fill=PIEL)

# ---- Taza propia (terracota) con plato ----
d.ellipse([330, 436, 424, 452], fill=CREMA, outline=ARENA, width=2)
d.rounded_rectangle([352, 388, 402, 440], 8, fill=TERRA, outline=TERRA_SUAVE)
d.arc([396, 396, 428, 428], 280, 100, fill=TERRA, width=7)
d.ellipse([360, 394, 394, 402], fill=TERRA_LUZ)

# ---- Taza lejana (salvia, el lugar del otro) con plato ----
d.ellipse([576, 436, 672, 452], fill=CREMA, outline=ARENA, width=2)
d.rounded_rectangle([598, 390, 648, 440], 8, fill=SALVIA, outline=SALVIA_CLARA)
d.arc([572, 398, 604, 430], 260, 80, fill=SALVIA, width=7)
d.ellipse([606, 396, 640, 404], fill=SALVIA_CLARA)

# ---- Fotografía antigua apoyada en la taza lejana: los padres jóvenes ----
halo = Image.new("RGBA", (W, H), (0, 0, 0, 0))
hd = ImageDraw.Draw(halo)
hd.rounded_rectangle([640, 332, 748, 442], 14, fill=(248, 224, 186, 110))
halo = halo.filter(ImageFilter.GaussianBlur(12))
img = Image.alpha_composite(img.convert("RGBA"), halo).convert("RGB")
d = ImageDraw.Draw(img)
# marco de madera
d.rounded_rectangle([648, 338, 740, 438], 6, fill=MADERA)
# foto sepia dentro
d.rectangle([660, 350, 728, 426], fill=SEPIA)
# interior de la foto: dos figuras jóvenes (los padres)
d.ellipse([672, 366, 686, 380], fill=CAJAO)          # cabeza figura alta
d.rounded_rectangle([669, 380, 689, 418], 6, fill=CAJAO)
d.ellipse([698, 374, 710, 386], fill=TERRA_LUZ)      # cabeza figura baja
d.rounded_rectangle([696, 388, 712, 418], 6, fill=TERRA_LUZ)
# suelo insinuado dentro de la foto
d.rectangle([660, 412, 728, 426], fill=(198, 156, 110))
# reflejo del vidrio en la foto
d.line([(668, 356), (668, 416)], fill=BLANCO, width=3)

# ---- Vapor que se inclina hacia el centro pero no se encuentra ----
# Nota: blur sobre capa RGBA transparente oscurece el color (mezcla RGB con
# ceros); se usa máscara L + paste para que el vapor salga claro y suave.
steam_mask = Image.new("L", (W, H), 0)
md = ImageDraw.Draw(steam_mask)
def wavy(x0, y0, x1, y1, amp, alpha, wdt):
    steps = 46
    for k in range(steps):
        t = k / steps
        x = x0 + (x1 - x0) * t
        y = y0 + (y1 - y0) * t + amp * ((k % 7) - 3) * 0.9
        md.ellipse([x - wdt / 2, y - wdt / 2, x + wdt / 2, y + wdt / 2], fill=alpha)
# vapor taza propia: sube y se inclina hacia la derecha
wavy(376, 380, 470, 292, 2.4, 165, 7)
# vapor taza lejana: sube y se inclina hacia la izquierda
wavy(622, 380, 548, 292, 2.4, 165, 7)
steam_mask = steam_mask.filter(ImageFilter.GaussianBlur(3))
img.paste(Image.new("RGB", (W, H), (252, 246, 238)), (0, 0), steam_mask)
d = ImageDraw.Draw(img)

# ---- Tres puntitos tenues entre los dos vapores: la pregunta suspendida ----
dots_mask = Image.new("L", (W, H), 0)
dd = ImageDraw.Draw(dots_mask)
for (px, py) in ((498, 306), (514, 292), (530, 306)):
    dd.ellipse([px - 5, py - 5, px + 5, py + 5], fill=150)
dots_mask = dots_mask.filter(ImageFilter.GaussianBlur(1))
img.paste(Image.new("RGB", (W, H), (198, 108, 60)), (0, 0), dots_mask)

# ---- Vignette cálida muy suave ----
vig = Image.new("RGBA", (W, H), (0, 0, 0, 0))
vd = ImageDraw.Draw(vig)
vd.rectangle([0, 0, W, H], fill=(92, 66, 46, 22))
vd.ellipse([-90, -90, W + 90, H + 90], fill=(0, 0, 0, 0))
vig = vig.filter(ImageFilter.GaussianBlur(60))
img = Image.alpha_composite(img.convert("RGBA"), vig).convert("RGB")

# ---- Grano sutil ----
noise = Image.effect_noise((W, H), 13).convert("L")
img = Image.composite(Image.blend(img, Image.new("RGB", (W, H), BLANCO), 0.05), img, noise)

img = img.filter(ImageFilter.SMOOTH)
img.save("public/blog/conversaciones-pendientes-con-tus-padres.png")
img.save("public/blog/conversaciones-pendientes-con-tus-padres.webp", "WEBP", quality=88, method=6)
print("OK: conversaciones-pendientes-con-tus-padres.png/.webp guardados", img.size)