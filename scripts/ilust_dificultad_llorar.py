# -*- coding: utf-8 -*-
"""Ilustración editorial estilo Espai Emocions: 'La dificultad para llorar'.

Escena interior cálida y minimalista: una persona adulta sentada en un butacón,
compuesta y de ojos secos, junto a una gran ventana por la que llueve con
libertad al otro lado. La lluvia cae fuera; dentro, todo se sostiene. La metáfora
visual: el deseo de llorar existe —el agua es la misma— pero encuentra la
ventana cerrada en el cuerpo propio. Un vaso de agua lleno, intacto, acompaña;
un pañuelo doblado, sin usar, descansa en el regazo. La paleta conversa:
interior terracota/crema/salvia contra el exterior azul-gris suave de la lluvia.
Formato 1200x675 (16:9), estilo plano con grano suave, sin texto.
"""
import math
from PIL import Image, ImageDraw, ImageFilter

W, H = 1200, 675

CREMA = (244, 232, 222)
BLANCO = (255, 249, 243)
ARENA = (225, 210, 198)
TERRA = (164, 81, 28)
TERRA_LUZ = (198, 108, 60)
TERRA_OSC = (140, 66, 24)
SALVIA = (123, 136, 114)
SALVIA_OSC = (95, 107, 88)
SALVIA_SUAVE = (176, 184, 168)
CAJAO = (48, 37, 31)
DORADO_SUAVE = (240, 205, 165)
MADERA = (160, 120, 92)
LLUVIA_ARR = (168, 176, 186)
LLUVIA_MED = (140, 150, 162)

img = Image.new("RGB", (W, H), CREMA)
d = ImageDraw.Draw(img)

# ---- Pared interior (crema cálida) ----
d.rectangle([0, 0, W, 470], fill=(232, 218, 205))
d.line([(0, 470), (W, 470)], fill=ARENA, width=3)
d.rectangle([0, 470, W, H], fill=(214, 196, 178))
for x in range(0, W, 90):
    d.line([(x, 470), (x - 50, H)], fill=(200, 182, 164), width=2)

# ---- Gran ventana a la izquierda: lluvia libre sobre tejados ----
wx0, wy0, wx1, wy1 = 60, 80, 380, 360
d.rectangle([wx0 - 12, wy0 - 12, wx1 + 12, wy1 + 12], fill=ARENA)
glass = Image.new("RGB", (wx1 - wx0, wy1 - wy0), BLANCO)
gd = ImageDraw.Draw(glass)
gw, gh = glass.size
# cielo lluvioso: gris-azulado suave, de claro arriba a algo más denso abajo
C_ARR = (196, 202, 208)
C_MED = (172, 180, 190)
C_BAJ = (146, 156, 168)
for y in range(gh):
    t = y / gh
    if t < 0.6:
        k = t / 0.6
        c = tuple(int(C_ARR[i] + (C_MED[i] - C_ARR[i]) * k) for i in range(3))
    else:
        k = (t - 0.6) / 0.4
        c = tuple(int(C_MED[i] + (C_BAJ[i] - C_MED[i]) * k) for i in range(3))
    gd.line([(0, y), (gw, y)], fill=c)
# tejados de Barcelona bajo la lluvia, dos planos difuminados
gx = 0
while gx < gw:
    w_ = 34
    h_ = ((gx * 7) % 20) + 12
    gd.rectangle([gx, gh - h_ - 48, gx + w_, gh - 42], fill=(120, 126, 132))
    gx += w_ + 6
gx = 0
while gx < gw:
    w_ = 28
    h_ = ((gx * 5) % 12) + 6
    gd.rectangle([gx, gh - h_, gx + w_, gh], fill=(100, 106, 112))
    gx += w_ + 4
# la lluvia cae con libertad: trazos diagonales suaves y densos
for i in range(110):
    rx = (i * 61) % gw
    ry = (i * 37) % (gh - 90)
    lon = 14 + (i % 4) * 5
    gd.line([(rx, ry), (rx - lon // 3, ry + lon)], fill=(210, 216, 224), width=2)
# gotera en el cristal: una gota resbalando por la cara interior de la ventana
gd.line([(gw - 60, 30), (gw - 64, 96)], fill=(216, 224, 230), width=3)
gd.ellipse([gw - 69, 96, gw - 59, 106], fill=(216, 224, 230))
img.paste(glass, (wx0, wy0))
# marco y cruces de la ventana
d.rectangle([wx0 + (wx1 - wx0) // 2 - 4, wy0, wx0 + (wx1 - wx0) // 2 + 4, wy1], fill=ARENA)
d.rectangle([wx0, wy0 + (wy1 - wy0) // 2 - 4, wx1, wy0 + (wy1 - wy0) // 2 + 4], fill=ARENA)

# ---- Cuadro pequeño entre ventana y butacón: un arco entre dos trazos ----
d.rectangle([585, 110, 665, 190], fill=BLANCO, outline=ARENA, width=3)
d.arc([602, 130, 648, 176], 180, 360, fill=LLUVIA_MED, width=5)
d.line([(625, 154), (625, 176)], fill=TERRA_LUZ, width=4)

# ---- Butacón terracota (centro-derecha), visto algo de perfil hacia la ventana ----
bx0, bx1, by = 700, 1120, 500
# respaldo y brazos
d.rounded_rectangle([bx0, by - 250, bx0 + 52, by], 16, fill=TERRA)
d.rounded_rectangle([bx0, by - 90, bx0 + 90, by - 40], 18, fill=TERRA_OSC)
d.rounded_rectangle([bx0, by - 90, bx0 + 86, by - 44], 16, fill=TERRA)
# asiento y base
d.rounded_rectangle([bx0 + 30, by - 96, bx1, by - 30], 20, fill=TERRA_LUZ)
d.rounded_rectangle([bx0 + 40, by - 34, bx1, by + 4], 12, fill=TERRA_OSC)
# patas de madera
d.rectangle([bx0 + 70, by + 2, bx0 + 80, by + 44], fill=MADERA)
d.rectangle([bx1 - 40, by + 2, bx1 - 30, by + 44], fill=MADERA)

# ---- Persona sentada, compuesta, de ojos secos, mirando la lluvia ----
px, py = bx0 + 210, by - 150  # eje del torso, sentado sobre el asiento
# torso en suéter salvia oscuro (la emoción contenida viste de salvia)
d.rounded_rectangle([px - 58, py - 90, px + 58, py + 60], 30, fill=CAJAO)
# cuello y cabeza: perfil hacia la ventana (izquierda)
hx, hy = px - 8, py - 124
d.rounded_rectangle([hx - 16, hy + 10, hx + 14, hy + 34], 8, fill=CAJAO)
d.ellipse([hx - 42, hy - 24, hx + 26, hy + 44], fill=DORADO_SUAVE)
# pelo cacao: recogido, ordenado — nada se despeina
d.ellipse([hx - 46, hy - 30, hx + 30, hy + 22], fill=(72, 52, 38))
d.ellipse([hx - 10, hy - 38, hx + 34, hy + 2], fill=(72, 52, 38))
# ojo abierto y seco: un trazo pequeño, sin lágrima
d.ellipse([hx - 30, hy + 2, hx - 16, hy + 12], fill=BLANCO, outline=(72, 52, 38), width=2)
d.ellipse([hx - 26, hy + 5, hx - 20, hy + 11], fill=CAJAO)
# ceja serena
d.arc([hx - 34, hy - 8, hx - 12, hy + 6], 200, 340, fill=(72, 52, 38), width=3)
# brazos: manos recogidas sobre el regazo, sostienen un pañuelo doblado y seco
d.rounded_rectangle([px - 74, py - 40, px - 50, py + 46], 10, fill=CAJAO)
d.rounded_rectangle([px + 50, py - 40, px + 74, py + 46], 10, fill=CAJAO)
d.ellipse([px - 80, py + 38, px - 52, py + 62], fill=DORADO_SUAVE)
d.ellipse([px + 52, py + 38, px + 80, py + 62], fill=DORADO_SUAVE)
# pañuelo doblado, sin usar: rectángulo blanco nítido en el regazo
d.rounded_rectangle([px - 34, py + 52, px + 34, py + 76], 6, fill=BLANCO, outline=(230, 214, 198), width=2)
d.line([(px - 18, py + 64), (px + 18, py + 64)], fill=(230, 214, 198), width=2)
# piernas y zapatos quietos
d.rounded_rectangle([px - 46, py + 70, px + 2, by - 26], 14, fill=CAJAO)
d.rounded_rectangle([px + 6, py + 70, px + 50, by - 26], 14, fill=(56, 44, 37))
d.rounded_rectangle([px - 56, by - 32, px - 20, by - 16], 8, fill=TERRA_OSC)
d.rounded_rectangle([px + 4, by - 32, px + 44, by - 16], 8, fill=TERRA_OSC)

# ---- Mesita baja con vaso de agua lleno, intacto ----
tx0, ty = 520, 500
d.rounded_rectangle([tx0, ty - 10, tx0 + 130, ty + 6], 8, fill=MADERA)
d.rectangle([tx0 + 12, ty + 6, tx0 + 20, ty + 46], fill=MADERA)
d.rectangle([tx0 + 110, ty + 6, tx0 + 118, ty + 46], fill=MADERA)
# vaso de agua lleno hasta arriba: el agua existe, solo no cae
d.rounded_rectangle([tx0 + 22, ty - 58, tx0 + 52, ty - 12], 5, fill=(214, 226, 222), outline=ARENA, width=2)
d.rectangle([tx0 + 24, ty - 56, tx0 + 50, ty - 30], fill=(232, 240, 238))
d.rectangle([tx0 + 24, ty - 40, tx0 + 50, ty - 32], fill=(196, 214, 210))

# ---- Lámpara de pie cálida a la derecha, encendida en silencio ----
lx = 1160
d.line([(lx, 300), (lx, 500)], fill=CAJAO, width=5)
d.ellipse([lx - 24, 494, lx + 8, 522], fill=CAJAO)
d.polygon([(lx - 42, 262), (lx + 42, 262), (lx + 30, 226), (lx - 30, 226)], fill=TERRA_LUZ)
d.ellipse([lx - 32, 218, lx + 32, 240], fill=DORADO_SUAVE)
halo = Image.new("RGBA", (W, H), (0, 0, 0, 0))
hd = ImageDraw.Draw(halo)
hd.ellipse([lx - 120, 160, lx + 120, 320], fill=(240, 205, 160, 55))
img = Image.alpha_composite(img.convert("RGBA"), halo).convert("RGB")
d = ImageDraw.Draw(img)

# ---- Planta de salvia en maceta terracota junto a la ventana ----
pot_x, pot_y = 440, 500
d.polygon([(pot_x - 26, pot_y), (pot_x + 26, pot_y), (pot_x + 19, pot_y + 58), (pot_x - 19, pot_y + 58)], fill=TERRA)
d.rectangle([pot_x - 30, pot_y - 10, pot_x + 30, pot_y + 4], fill=TERRA_OSC)
for ang in range(-70, 71, 14):
    a = math.radians(ang)
    x2 = pot_x + 54 * math.sin(a)
    y2 = pot_y - 16 - 62 * math.cos(a)
    d.line([(pot_x, pot_y - 12), (x2, y2)], fill=SALVIA, width=4)
    d.ellipse([x2 - 8, y2 - 11, x2 + 8, y2 + 7], fill=SALVIA)

# ---- Luz gris-azulada de la lluvia entrando por la ventana ----
light = Image.new("RGBA", (W, H), (0, 0, 0, 0))
ld = ImageDraw.Draw(light)
ld.polygon([(70, 470), (430, 470), (560, 675), (-40, 675)], fill=(196, 202, 212, 45))
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

img.save("public/blog/dificultad-para-llorar.png", optimize=True)
img.save("public/blog/dificultad-para-llorar.webp", "WEBP", quality=82, method=6)
print("OK: ilustración generada 1200x675")