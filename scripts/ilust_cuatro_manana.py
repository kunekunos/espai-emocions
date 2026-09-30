# -*- coding: utf-8 -*-
"""Ilustración editorial estilo Espai Emocions: 'Las cuatro de la mañana'.

Escena nocturna minimalista habitada: dormitorio cálido en plena madrugada.
Una persona adulta sentada en la cama, despierta, con la mirada perdida hacia
la ventana; en Barcelona aún duerme (tejados oscuros, alguna ventana encendida
y una luna suave). El despertar de las cuatro: el cuerpo quieto y la mente
encendida haciendo balance de la vida. La mesita acompaña con un vaso de agua
y un libro cerrado. Metáfora: la madrugada como auditora silenciosa; la
respuesta se busca de día, con ayuda.
Paleta: terracota #A4511C, crema #F4E8DE, salvia #7B8872,
blanco cálido #FFF9F3, arena #E1D2C6, cacao #30251F.
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
NOCHE_ARR = (64, 58, 74)
NOCHE_MED = (96, 84, 96)
DORADO = (230, 180, 130)
DORADO_SUAVE = (240, 205, 165)
MADERA = (160, 120, 92)
LUNA = (246, 226, 208)

img = Image.new("RGB", (W, H), CREMA)
d = ImageDraw.Draw(img)

# ---- Pared del dormitorio (crema atenuada de noche) ----
d.rectangle([0, 0, W, 480], fill=(228, 216, 206))
d.line([(0, 480), (W, 480)], fill=ARENA, width=3)
d.rectangle([0, 480, W, H], fill=(214, 196, 178))
for x in range(0, W, 90):
    d.line([(x, 480), (x - 50, H)], fill=(200, 182, 164), width=2)

# ---- Ventana grande a la izquierda: noche sobre tejados de Barcelona ----
wx0, wy0, wx1, wy1 = 60, 80, 360, 340
d.rectangle([wx0 - 12, wy0 - 12, wx1 + 12, wy1 + 12], fill=ARENA)
glass = Image.new("RGB", (wx1 - wx0, wy1 - wy0), BLANCO)
gd = ImageDraw.Draw(glass)
gw, gh = glass.size
# cielo nocturno: de azul-violeta profundo arriba a un violeta cálido abajo
C_ARR = (58, 52, 68)
C_MED = (84, 74, 92)
C_BAJ = (118, 98, 106)
for y in range(gh):
    t = y / gh
    if t < 0.6:
        k = t / 0.6
        c = tuple(int(C_ARR[i] + (C_MED[i] - C_ARR[i]) * k) for i in range(3))
    else:
        k = (t - 0.6) / 0.4
        c = tuple(int(C_MED[i] + (C_BAJ[i] - C_MED[i]) * k) for i in range(3))
    gd.line([(0, y), (gw, y)], fill=c)
# luna suave
gd.ellipse([gw - 100, 28, gw - 56, 72], fill=LUNA)
gd.ellipse([gw - 84, 40, gw - 52, 64], fill=(228, 208, 190))
# tejados de Barcelona en silueta, dos planos
gx = 0
while gx < gw:
    w = 34
    h = ((gx * 7) % 22) + 14
    gd.rectangle([gx, gh - h - 46, gx + w, gh - 40], fill=(84, 62, 62))
    gx += w + 6
gx = 0
while gx < gw:
    w = 28
    h = ((gx * 5) % 14) + 8
    gd.rectangle([gx, gh - h, gx + w, gh], fill=(66, 48, 48))
    gx += w + 4
# ventanas encendidas de vecinos: una vida que también vela
gd.rectangle([52, gh - 60, 64, gh - 46], fill=(232, 178, 120))
gd.rectangle([180, gh - 52, 190, gh - 40], fill=(216, 158, 108))
gd.rectangle([258, gh - 66, 268, gh - 52], fill=(232, 178, 120))
img.paste(glass, (wx0, wy0))
# marco y cruces de la ventana
d.rectangle([wx0 + (wx1 - wx0) // 2 - 4, wy0, wx0 + (wx1 - wx0) // 2 + 4, wy1], fill=ARENA)
d.rectangle([wx0, wy0 + (wy1 - wy0) // 2 - 4, wx1, wy0 + (wy1 - wy0) // 2 + 4], fill=ARENA)

# ---- Reloj de pared: las cuatro de la mañana ----
cx, cy, cr = 470, 150, 52
d.ellipse([cx - cr, cy - cr, cx + cr, cy + cr], fill=BLANCO, outline=CAJAO, width=4)
# hora: aguja corta sobre el 4 (ángulo ~ -60° desde las 12), minuto larga sobre las 12
ang_h = math.radians(-60)
d.line([(cx, cy), (cx + 22 * math.sin(ang_h), cy - 22 * math.cos(ang_h))], fill=CAJAO, width=6)
d.line([(cx, cy), (cx, cy - 34)], fill=CAJAO, width=4)
d.ellipse([cx - 4, cy - 4, cx + 4, cy + 4], fill=TERRA)
# marcas de las horas
for ang in range(0, 360, 30):
    a = math.radians(ang)
    d.line([
        (cx + (cr - 10) * math.sin(a), cy - (cr - 10) * math.cos(a)),
        (cx + (cr - 5) * math.sin(a), cy - (cr - 5) * math.cos(a)),
    ], fill=(120, 104, 92), width=2)

# ---- Cuadro pequeño entre reloj y cama ----
d.rectangle([585, 110, 665, 190], fill=BLANCO, outline=ARENA, width=3)
d.arc([602, 130, 648, 176], 180, 360, fill=TERRA_LUZ, width=5)

# ---- Cama (centro-derecha) ----
bx0, bx1, by = 700, 1130, 480
# cabecero terracota
d.rounded_rectangle([bx0, by - 210, bx0 + 34, by], 14, fill=TERRA)
# colchón y base
d.rounded_rectangle([bx0 + 24, by - 120, bx1, by], 18, fill=BLANCO)
d.rounded_rectangle([bx0 + 24, by - 74, bx1, by], 14, fill=ARENA)
# almohada
d.rounded_rectangle([bx0 + 44, by - 152, bx0 + 240, by - 104], 16, fill=BLANCO, outline=(230, 214, 198), width=3)
# edredón de salvia cubriendo la mitad deshecha de la cama
d.polygon([
    (bx0 + 300, by - 150), (bx1, by - 158),
    (bx1, by + 26), (bx0 + 240, by + 22),
], fill=SALVIA)
d.line([(bx0 + 300, by - 150), (bx0 + 240, by + 22)], fill=SALVIA_OSC, width=5)
d.line([(bx0 + 300, by - 150), (bx1, by - 158)], fill=SALVIA_OSC, width=4)

# ---- Persona sentada en la cama, despierta, mirando al frente ----
px, py = bx0 + 150, by - 128  # eje de la figura, cadera sobre el colchón
# torso erguido (cacao)
d.rounded_rectangle([px - 50, py - 118, px + 50, py + 26], 26, fill=CAJAO)
# cabeza: círculo dorado + pelo cacao
hx, hy = px, py - 146
d.ellipse([hx - 21, hy - 21, hx + 21, hy + 21], fill=DORADO_SUAVE)
d.arc([hx - 25, hy - 23, hx + 21, hy + 15], 120, 330, fill=(72, 52, 38), width=11)
d.ellipse([hx - 25, hy - 13, hx - 13, hy + 9], fill=(72, 52, 38))
# brazos: manos apoyadas sobre el edredón, una sujetándolo
d.rounded_rectangle([px - 66, py - 70, px - 46, py + 16], 9, fill=CAJAO)
d.rounded_rectangle([px + 46, py - 70, px + 66, py + 16], 9, fill=CAJAO)
d.ellipse([px - 72, py + 2, px - 48, py + 22], fill=DORADO_SUAVE)
d.ellipse([px + 48, py + 2, px + 72, py + 22], fill=DORADO_SUAVE)
# piernas bajo el edredón: volumen salvia ya dibujado; un pie asomando
d.rounded_rectangle([px - 20, by + 8, px + 10, by + 24], 7, fill=CAJAO)

# ---- Mesita de noche con vaso de agua y libro cerrado ----
tx0, ty = 520, 480
d.rounded_rectangle([tx0, ty - 10, tx0 + 120, ty + 6], 8, fill=MADERA)
d.rectangle([tx0 + 12, ty + 6, tx0 + 20, ty + 54], fill=MADERA)
d.rectangle([tx0 + 100, ty + 6, tx0 + 108, ty + 54], fill=MADERA)
# vaso de agua
d.rounded_rectangle([tx0 + 18, ty - 42, tx0 + 44, ty - 12], 4, fill=(214, 226, 222), outline=ARENA, width=2)
d.rectangle([tx0 + 20, ty - 32, tx0 + 42, ty - 14], fill=(232, 240, 238))
# libro cerrado
d.rounded_rectangle([tx0 + 60, ty - 26, tx0 + 108, ty - 12], 3, fill=TERRA)
d.line([(tx0 + 84, ty - 26), (tx0 + 84, ty - 12)], fill=TERRA_OSC, width=3)

# ---- Lámpara pequeña encendida en la mesita derecha del cuadro ----
lx = 700
# aplique de pared sobre la mesita del vaso
d.line([(lx, 200), (lx, 260)], fill=CAJAO, width=4)
d.polygon([(lx - 30, 262), (lx + 30, 262), (lx + 20, 226), (lx - 20, 226)], fill=TERRA_LUZ)
d.ellipse([lx - 22, 220, lx + 22, 236], fill=DORADO_SUAVE)
halo = Image.new("RGBA", (W, H), (0, 0, 0, 0))
hd = ImageDraw.Draw(halo)
hd.ellipse([lx - 100, 160, lx + 100, 330], fill=(240, 205, 160, 60))
img = Image.alpha_composite(img.convert("RGBA"), halo).convert("RGB")
d = ImageDraw.Draw(img)

# ---- Planta de salvia en maceta terracota junto a la ventana ----
pot_x, pot_y = 430, 480
d.polygon([(pot_x - 26, pot_y), (pot_x + 26, pot_y), (pot_x + 19, pot_y + 58), (pot_x - 19, pot_y + 58)], fill=TERRA)
d.rectangle([pot_x - 30, pot_y - 10, pot_x + 30, pot_y + 4], fill=TERRA_OSC)
for ang in range(-70, 71, 14):
    a = math.radians(ang)
    x2 = pot_x + 54 * math.sin(a)
    y2 = pot_y - 16 - 62 * math.cos(a)
    d.line([(pot_x, pot_y - 12), (x2, y2)], fill=SALVIA, width=4)
    d.ellipse([x2 - 8, y2 - 11, x2 + 8, y2 + 7], fill=SALVIA)

# ---- Luz de luna fría entrando por la ventana ----
light = Image.new("RGBA", (W, H), (0, 0, 0, 0))
ld = ImageDraw.Draw(light)
ld.polygon([(70, 480), (430, 480), (560, 675), (-40, 675)], fill=(208, 200, 214, 55))
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

img.save("public/blog/las-cuatro-de-la-manana.png", optimize=True)
img.save("public/blog/las-cuatro-de-la-manana.webp", "WEBP", quality=82, method=6)
print("OK: ilustración generada 1200x675")