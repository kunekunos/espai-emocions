# -*- coding: utf-8 -*-
"""Ilustración editorial estilo Espai Emocions: 'La vergüenza de pedir ayuda'.

Composición única para este artículo (no reutiliza layouts previos):
primera vez en la serie que se retrata un umbral. Interior doméstico cálido
en penumbra suave (tonos crema-salvia apagados): una figura adulta, neutra
en género, permanece ante una puerta entornada. Al otro lado, un espacio
terracota luminoso con una silla acogedora, una lámpara encendida y una
planta (la consulta: el lugar donde lo callado encuentra sitio). La figura
está a un paso del umbral, el cuerpo medio girado hacia la luz: una parte
de ella ya quiere cruzar. Detrás de la figura, proyectada en el suelo y la
pared, su propia sombra alargada (cacao suave) la retiene — la vergüenza
no es un guardián externo, sino algo aprendido que se lleva dentro. La
sombra sostiene una postura de espera, mientras la figura real apunta a
la puerta. Metáfora: pedir ayuda no es cruzar hacia lo desconocido, sino
hacia una luz que ya estaba encendida esperándote. Paleta terracota/crema/
salvia, 1200x675 (16:9), estilo plano con grano sutil, sin texto.
"""
from PIL import Image, ImageDraw, ImageFilter
import random

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
PIEL = (232, 206, 186)

img = Image.new("RGB", (W, H), CREMA)
d = ImageDraw.Draw(img)

# ---- Habitación en penumbra cálida: pared crema atenuada hacia salvia ----
WALL = 500
for y in range(WALL):
    t = y / WALL
    # interior ligeramente más apagado que el crema pleno
    c0 = (232, 218, 205)
    c1 = (218, 224, 210)  # fondo salvia muy claro
    c = tuple(int(c0[i] + (c1[i] - c0[i]) * (t ** 1.2)) for i in range(3))
    d.line([(0, y), (W, y)], fill=c)

# ---- Suelo de tablones en sombra (más oscuro que el estándar de la serie) ----
d.rectangle([0, WALL, W, H], fill=(184, 166, 146))
d.line([(0, WALL), (W, WALL)], fill=ARENA, width=3)
for k in range(11):
    x0 = 40 + k * 118
    d.line([(x0, WALL), (x0 - 70, H)], fill=(168, 149, 128), width=2)
for yy in (545, 615):
    d.line([(0, yy), (W, yy)], fill=(172, 154, 133), width=2)

# ---- Puerta entornada a la derecha: luz terracota desde el otro lado ----
DX, DY, DW, DH = 770, 90, 300, 470   # marco completo
# hueco de puerta abierta (la hoja abierta hacia dentro-derecha)
d.rectangle([DX, DY, DX + DW, DY + DH], fill=MADERA_OSC)  # marco
# espacio interior luminoso: pared terracota cálida con degradado
GAPX, GAPY, GAPW = 790, 108, 190
for y in range(GAPY, DY + DH - 8):
    t = (y - GAPY) / (DH - 16)
    c = tuple(int(TERRA_SUAVE[i] + (TERRA[i] - TERRA_SUAVE[i]) * t) for i in range(3))
    d.line([(GAPX, y), (GAPX + GAPW, y)], fill=c)
# suelo interior (madera cálida clara)
d.rectangle([GAPX, 460, GAPX + GAPW, DY + DH - 8], fill=(214, 178, 142))
# luz dorada que sale en abanico por el hueco hacia el suelo de la sala
fan = Image.new("RGBA", (W, H), (0, 0, 0, 0))
fd = ImageDraw.Draw(fan)
fd.polygon([(GAPX, 300), (GAPX + GAPW, 300), (GAPX - 240, 660), (GAPX - 60, 665)],
           fill=(248, 224, 186, 110))
img.paste(fan, (0, 0), fan)
d = ImageDraw.Draw(img)

# ---- Dentro de la consulta (siluetas a través del hueco) ----
# silla acogedora
d.rounded_rectangle([838, 356, 922, 462], 14, fill=TERRA)
d.rounded_rectangle([848, 318, 912, 366], 12, outline=DORADO_LUZ, width=6)
# lámpara de pie encendida
d.line([(960, 300), (960, 470)], fill=DORADO, width=6)
lamp = d.ellipse([938, 270, 982, 312], fill=DORADO_LUZ)
# halo de la lámpara
halo = Image.new("RGBA", (W, H), (0, 0, 0, 0))
hd = ImageDraw.Draw(halo)
hd.ellipse([900, 240, 1020, 340], fill=(248, 224, 186, 130))
img.paste(halo, (0, 0), halo)
d = ImageDraw.Draw(img)
# planta en maceta
d.rounded_rectangle([862, 428, 890, 470], 8, fill=TERRA_LUZ)
for ang, ln in ((-30, 34), (0, 44), (32, 30)):
    x2 = 876 + ang * 0.9
    y2 = 428 - ln
    d.line([(876, 430), (x2, y2)], fill=SALVIA, width=5)
    d.ellipse([x2 - 7, y2 - 7, x2 + 7, y2 + 7], fill=SALVIA)
# ventana interior tenue al fondo del espacio terracota
d.rectangle([802, 150, 846, 230], fill=DORADO_LUZ)
d.line([(824, 150), (824, 230)], fill=TERRA_LUZ, width=3)
d.line([(802, 190), (846, 190)], fill=TERRA_LUZ, width=3)

# ---- Hoja de la puerta abierta (madera, bisagra a la derecha) ----
d.polygon([(DX + DW - 8, DY), (DX + DW + 92, DY + 26), (DX + DW + 92, DY + DH + 18),
           (DX + DW - 8, DY + DH)], fill=MADERA)
d.line([(DX + DW - 8, DY), (DX + DW + 92, DY + 26)], fill=MADERA_OSC, width=3)
d.line([(DX + DW - 8, DY + DH), (DX + DW + 92, DY + DH + 18)], fill=MADERA_OSC, width=3)
# pomo dorado en la hoja
d.ellipse([DX + DW + 66, 330, DX + DW + 82, 346], fill=DORADO)

# ---- Figura adulta ante el umbral (izquierda del hueco, cuerpo medio girado) ----
# la figura camina hacia la puerta: piernas en paso, torso girado hacia la luz
def figura(x, y, escala, jersey=TERRA_LUZ, pantalon=CAJAO, alpha=255):
    """Figura neutra de pie en leve paso hacia la derecha, altura ~170*escala."""
    s = escala
    layer = Image.new("RGBA", (W, H), (0, 0, 0, 0))
    ld = ImageDraw.Draw(layer)
    # cabeza
    ld.ellipse([x - 16 * s, y - 172 * s, x + 16 * s, y - 140 * s], fill=(*PIEL, alpha))
    # torso (jersey)
    ld.rounded_rectangle([x - 26 * s, y - 142 * s, x + 26 * s, y - 52 * s], 14 * s,
                         fill=(*jersey, alpha))
    # brazos: uno relajado, otro levemente extendido hacia la puerta
    ld.line([(x - 24 * s, y - 132 * s), (x - 38 * s, y - 70 * s)], fill=(*jersey, alpha),
            width=int(10 * s))
    ld.line([(x + 24 * s, y - 132 * s), (x + 44 * s, y - 78 * s)], fill=(*jersey, alpha),
            width=int(10 * s))
    ld.ellipse([x + 38 * s, y - 84 * s, x + 52 * s, y - 70 * s], fill=(*PIEL, alpha))
    # piernas en paso
    ld.line([(x - 8 * s, y - 56 * s), (x - 24 * s, y)], fill=(*pantalon, alpha), width=int(12 * s))
    ld.line([(x + 8 * s, y - 56 * s), (x + 28 * s, y)], fill=(*pantalon, alpha), width=int(12 * s))
    # zapatos
    ld.rounded_rectangle([x - 36 * s, y - 8 * s, x - 14 * s, y + 4 * s], 5 * s,
                         fill=(*CAJAO, alpha))
    ld.rounded_rectangle([x + 18 * s, y - 8 * s, x + 44 * s, y + 4 * s], 5 * s,
                         fill=(*CAJAO, alpha))
    return layer

fig = figura(620, 545, 1.35)
img = Image.alpha_composite(img.convert("RGBA"), fig).convert("RGB")
d = ImageDraw.Draw(img)

# ---- Sombra de la propia figura: proyectada hacia atrás-izquierda, retiene ----
shadow = Image.new("RGBA", (W, H), (0, 0, 0, 0))
sd = ImageDraw.Draw(shadow)
# silueta alargada desde los pies hacia atrás (la vergüenza tira hacia el fondo)
SXY, SXZ = 560, 545
sd.polygon([
    (SXY + 22, 545), (SXY - 14, 545),            # pies de la sombra
    (SXY - 150, 388), (SXY - 176, 470),           # silueta extendida hacia atrás
    (SXY - 158, 300), (SXY - 120, 250),           # torso/cabeza de sombra
    (SXY - 74, 246), (SXY - 46, 296),
    (SXY - 40, 384),
], fill=(90, 80, 72, 90))
shadow = shadow.filter(ImageFilter.GaussianBlur(9))
img.paste(shadow, (0, 0), shadow)
d = ImageDraw.Draw(img)

# ---- Elementos de la sala en penumbra: cuadro pequeño, banco, planta ----
d.rounded_rectangle([120, 170, 236, 300], 8, fill=MADERA)
d.rectangle([132, 182, 224, 288], fill=SALVIA_CLARA)
# trazos orgánicos del cuadro (eco del símbolo: vertical + horizontal)
for dx in (150, 168, 186):
    d.line([(dx, 210), (dx, 262)], fill=SALVIA, width=5)
d.line([(146, 236), (206, 236)], fill=TERRA_LUZ, width=5)
# banco bajo contra la pared
d.rounded_rectangle([96, 430, 300, 462], 10, fill=TERRA_LUZ)
d.rectangle([116, 462, 132, 496], fill=MADERA_OSC)
d.rectangle([264, 462, 280, 496], fill=MADERA_OSC)
# planta de salvia grande a la izquierda
d.rounded_rectangle([176, 486, 214, 546], 10, fill=TERRA)
for ang, ln in ((-38, 58), (-12, 76), (14, 84), (40, 60)):
    x2 = 195 + ang
    y2 = 486 - ln
    d.line([(195, 490), (x2, y2)], fill=SALVIA_OSC, width=6)
    d.ellipse([x2 - 10, y2 - 10, x2 + 10, y2 + 10], fill=SALVIA)
    d.ellipse([x2 - 5, y2 - 5, x2 + 5, y2 + 5], fill=SALVIA_CLARA)

# ---- Alfombra orgánica salvia bajo la figura (camino hacia la puerta) ----
rug = Image.new("RGBA", (W, H), (0, 0, 0, 0))
rd = ImageDraw.Draw(rug)
rd.ellipse([380, 520, 760, 640], fill=(123, 136, 114, 70))
rd.ellipse([430, 536, 710, 624], outline=(196, 202, 186, 140), width=4)
img.paste(rug, (0, 0), rug)
d = ImageDraw.Draw(img)

# ---- Luz de tarde suave desde la derecha (desde el hueco de la puerta) ----
grad = Image.new("RGBA", (W, H), (0, 0, 0, 0))
gd = ImageDraw.Draw(grad)
for x in range(W):
    t = max(0.0, (x - 660) / (W - 660))
    gd.line([(x, 0), (x, H)], fill=(248, 224, 186, int(60 * t ** 1.3)))
img.paste(grad, (0, 0), grad)
d = ImageDraw.Draw(img)

# ---- Grano sutil ----
random.seed(220926)
noise = Image.effect_noise((W, H), 14).convert("L")
img = Image.composite(Image.blend(img, Image.new("RGB", (W, H), (255, 249, 243)), 0.06), img, noise)

# ---- Suavizado de bordes manteniendo detalle ----
img = img.filter(ImageFilter.SMOOTH)
img.save("public/blog/verguenza-de-pedir-ayuda.png")
img.save("public/blog/verguenza-de-pedir-ayuda.webp", "WEBP", quality=88, method=6)
print("OK: verguenza-de-pedir-ayuda.png/.webp guardados", img.size)