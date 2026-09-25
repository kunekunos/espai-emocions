# -*- coding: utf-8 -*-
"""Ilustracion editorial estilo Espai Emocions: 'La ansiedad del domingo por la tarde'.

Escena minimalista habitada: interior de salón al atardecer de domingo,
persona adulta junto a ventana con luz baja dorada, gato durmiendo, taza de te,
plantas, reloj marcando ~18:00, tejados de Barcelona en contraluz.
Paleta: terracota #A4511C, crema #F4E8DE, salvia #7B8872,
blanco calido #FFF9F3, arena #E1D2C6, cacao #30251F.
Formato 1200x675 (16:9), estilo plano con grano suave, sin texto.
"""
import random, math
from PIL import Image, ImageDraw, ImageFilter

W, H = 1200, 675
random.seed(25)

CREMA = (244, 232, 222)
BLANCO = (255, 249, 243)
ARENA = (225, 210, 198)
TERRA = (164, 81, 28)
TERRA_LUZ = (198, 108, 60)
SALVIA = (123, 136, 114)
SALVIA_OSC = (95, 107, 88)
CAJAO = (48, 37, 31)
DORADO = (230, 180, 130)
DORADO_SUAVE = (240, 205, 165)

img = Image.new("RGB", (W, H), BLANCO)
d = ImageDraw.Draw(img)

# ---- Cielo de atardecer (banda superior) ----
d.rectangle([0, 0, W, 250], fill=BLANCO)
# gradiente manual del cielo
for y in range(0, 250):
    t = y / 250.0
    # de blanco calido a dorado suave a salvia-terra tenue
    if t < 0.55:
        k = t / 0.55
        c = tuple(int(BLANCO[i] + (DORADO_SUAVE[i] - BLANCO[i]) * k) for i in range(3))
    else:
        k = (t - 0.55) / 0.45
        c = tuple(int(DORADO_SUAVE[i] + ((212, 150, 100)[i] - DORADO_SUAVE[i]) * k) for i in range(3))
    d.line([(0, y), (W, y)], fill=c)

# sol bajo (disco dorado)
sun_x, sun_y = 890, 185
d.ellipse([sun_x - 38, sun_y - 38, sun_x + 38, sun_y + 38], fill=(238, 190, 140))

# ---- Tejados de Barcelona en silueta (linea de horizonte) ----
roofs = []
x = 0
while x < W:
    w = random.randint(60, 130)
    h = random.randint(18, 55)
    roofs.append((x, w, h))
    x += w
# capa lejana salvia
for (rx, rw, rh) in roofs:
    d.rectangle([rx, 250 - rh, rx + rw, 250], fill=(190, 174, 155))
# silueta cacao semitransparente -> tono arena oscuro
for (rx, rw, rh) in roofs:
    d.rectangle([rx, 250 - rh + 6, rx + rw, 250], fill=(176, 157, 137))
# algunos tejados con pendiente
d.polygon([(150, 205), (250, 205), (200, 178)], fill=(190, 174, 155))
d.polygon([(560, 215), (700, 215), (630, 180)], fill=(184, 167, 148))
# chimeneas / antenas
for (rx, rw, rh) in roofs[::3]:
    if rh > 35:
        d.rectangle([rx + rw // 2 - 2, 250 - rh - 14, rx + rw // 2 + 2, 250 - rh], fill=(176, 157, 137))
# Sagrada Familia estilizada muy sutil al fondo izquierda
def sagrada(cx, base):
    pts = [(cx, base)]
    for i in range(5):
        h = 100 - i * 16
        w = 34 - i * 5
        pts.append((cx - w, base - h))
    pts.append((cx, base - 118))
    for i in range(4, -1, -1):
        h = 100 - i * 16
        w = 34 - i * 5
        pts.append((cx + w, base - h))
    d.polygon(pts, fill=(176, 157, 137))
sagrada(180, 250)

# ---- Pared interior ----
d.rectangle([0, 250, W, H], fill=CREMA)

# ---- Ventana grande a la izquierda de la persona (marco) ----
# composicion: ventana de x=100 a x=560, y=120 a y=430
wx0, wy0, wx1, wy1 = 120, 130, 560, 420
d.rectangle([wx0 - 12, wy0 - 12, wx1 + 12, wy1 + 12], fill=ARENA)  # marco
d.rectangle([wx0, wy0, wx1, wy1], fill=(233, 214, 190))  # cristal atardecer
# dentro del cristal: cielo y tejados (recorte)
# reutilizar: dibujar mini escena en el cristal
glass = Image.new("RGB", (wx1 - wx0, wy1 - wy0), BLANCO)
gd = ImageDraw.Draw(glass)
gw, gh = glass.size
for y in range(gh):
    t = y / gh
    if t < 0.5:
        k = t / 0.5
        c = tuple(int(BLANCO[i] + (DORADO_SUAVE[i] - BLANCO[i]) * k) for i in range(3))
    else:
        k = (t - 0.5) / 0.5
        c = tuple(int(DORADO_SUAVE[i] + ((214, 156, 108)[i] - DORADO_SUAVE[i]) * k) for i in range(3))
    gd.line([(0, y), (gw, y)], fill=c)
# sol en el cristal
gd.ellipse([gw * 0.72 - 20, gh * 0.35 - 20, gw * 0.72 + 20, gh * 0.35 + 20], fill=(240, 196, 148))
# tejados en el cristal
gx = 0
while gx < gw:
    w = random.randint(30, 70)
    h = random.randint(12, 40)
    gd.rectangle([gx, gh - h, gx + w, gh], fill=(196, 178, 158))
    gx += w
img.paste(glass, (wx0, wy0))
# cruceta ventana
d.rectangle([wx0 + (wx1 - wx0) // 2 - 4, wy0, wx0 + (wx1 - wx0) // 2 + 4, wy1], fill=ARENA)
d.rectangle([wx0, wy0 + (wy1 - wy0) // 2 - 4, wx1, wy0 + (wy1 - wy0) // 2 + 4], fill=ARENA)

# ---- Sombra larga de luz de atardecer en el suelo ----
d.rectangle([0, 560, W, H], fill=(232, 213, 193))  # suelo
# losas del suelo
for x in range(0, W, 90):
    d.line([(x, 560), (x - 40, H)], fill=(219, 199, 178), width=2)
# rectangulo de luz dorada inclinado desde la ventana
light = Image.new("RGBA", (W, H), (0, 0, 0, 0))
ld = ImageDraw.Draw(light)
ld.polygon([(150, 560), (620, 560), (860, 675), (330, 675)], fill=(240, 205, 160, 110))
img = Image.alpha_composite(img.convert("RGBA"), light).convert("RGB")
d = ImageDraw.Draw(img)

# ---- Planta en maceta (salvia) junto a la ventana ----
pot_x, pot_y = 90, 470
d.polygon([(pot_x - 28, pot_y), (pot_x + 28, pot_y), (pot_x + 20, pot_y + 66), (pot_x - 20, pot_y + 66)], fill=TERRA)
# hojas
for ang in range(-70, 71, 14):
    a = math.radians(ang)
    x2 = pot_x + 62 * math.sin(a)
    y2 = pot_y - 10 - 70 * math.cos(a)
    mx = pot_x + 30 * math.sin(a)
    my = pot_y - 40
    d.line([(pot_x, pot_y - 6), (x2, y2)], fill=SALVIA, width=5)
    d.ellipse([x2 - 9, y2 - 12, x2 + 9, y2 + 8], fill=SALVIA)
    d.ellipse([mx - 7, my - 10, mx + 7, my + 8], fill=SALVIA_OSC)

# ---- Manta/albornoz en el sillon? No: sillon donde duerme el gato (derecha) ----
sofa_x, sofa_y = 700, 420
d.rounded_rectangle([sofa_x, sofa_y, sofa_x + 330, sofa_y + 140], 24, fill=SALVIA)
d.rounded_rectangle([sofa_x + 14, sofa_y - 60, sofa_x + 316, sofa_y + 30], 18, fill=(136, 150, 126))
d.rounded_rectangle([sofa_x - 18, sofa_y + 20, sofa_x + 348, sofa_y + 150], 20, fill=(110, 123, 101))
# cojin terracota
d.rounded_rectangle([sofa_x + 200, sofa_y - 20, sofa_x + 270, sofa_y + 40], 12, fill=TERRA_LUZ)

# ---- Gato dormido en el sillon ----
cat_x, cat_y = sofa_x + 70, sofa_y + 30
d.ellipse([cat_x, cat_y - 26, cat_x + 110, cat_y + 30], fill=DORADO_SUAVE)  # cuerpo
d.ellipse([cat_x - 26, cat_y - 44, cat_x + 26, cat_y + 4], fill=DORADO_SUAVE)  # cabeza
# orejas
d.polygon([(cat_x - 18, cat_y - 40), (cat_x - 6, cat_y - 62), (cat_x + 4, cat_y - 38)], fill=DORADO_SUAVE)
d.polygon([(cat_x + 6, cat_y - 38), (cat_x + 16, cat_y - 62), (cat_x + 24, cat_y - 40)], fill=DORADO_SUAVE)
# cola
d.arc([cat_x + 95, cat_y - 8, cat_x + 150, cat_y + 40], 200, 90, fill=DORADO_SUAVE, width=8)
# ojos cerrados (lineas)
d.line([(cat_x - 14, cat_y - 22), (cat_x - 4, cat_y - 20)], fill=CAJAO, width=2)
d.line([(cat_x + 8, cat_y - 20), (cat_x + 18, cat_y - 22)], fill=CAJAO, width=2)

# ---- Mesita auxiliar con tasa de te humeante (entre sillon y ventana) ----
tbl_x, tbl_y = 610, 480
d.rounded_rectangle([tbl_x, tbl_y, tbl_x + 84, tbl_y + 10], 4, fill=TERRA)
d.rectangle([tbl_x + 8, tbl_y + 10, tbl_x + 16, tbl_y + 66], fill=TERRA)
d.rectangle([tbl_x + 68, tbl_y + 10, tbl_x + 76, tbl_y + 66], fill=TERRA)
# tasa
cup_x, cup_y = tbl_x + 26, tbl_y - 24
d.ellipse([cup_x, cup_y - 8, cup_x + 34, cup_y + 2], fill=BLANCO)
d.rounded_rectangle([cup_x, cup_y - 22, cup_x + 34, cup_y - 6], 6, fill=BLANCO)
d.arc([cup_x + 30, cup_y - 20, cup_x + 46, cup_y - 6], 270, 90, fill=BLANCO, width=4)
# vapor
d.arc([cup_x + 6, cup_y - 52, cup_x + 22, cup_y - 26], 90, 270, fill=(210, 190, 175), width=3)
d.arc([cup_x + 16, cup_y - 60, cup_x + 32, cup_y - 34], 270, 90, fill=(210, 190, 175), width=3)
# libro cerrado en la mesa
d.rounded_rectangle([tbl_x + 44, tbl_y - 34, tbl_x + 78, tbl_y - 22], 3, fill=SALVIA)
d.rectangle([tbl_x + 44, tbl_y - 22, tbl_x + 78, tbl_y - 18], fill=SALVIA_OSC)

# ---- Reloj de pared marcando ~18:00 ----
clk_cx, clk_cy, clk_r = 660, 200, 46
d.ellipse([clk_cx - clk_r, clk_cy - clk_r, clk_cx + clk_r, clk_cy + clk_r], fill=BLANCO, outline=CAJAO, width=3)
for a in range(0, 360, 30):
    r1, r2 = clk_r - 6, clk_r - 12
    ra = math.radians(a)
    d.line([(clk_cx + r1 * math.sin(ra), clk_cy - r1 * math.cos(ra)),
            (clk_cx + r2 * math.sin(ra), clk_cy - r2 * math.cos(ra))], fill=CAJAO, width=2)
# agujas 18:00 -> hora 6 apunta abajo, minuto 12
d.line([(clk_cx, clk_cy), (clk_cx, clk_cy + clk_r - 14)], fill=CAJAO, width=4)
d.line([(clk_cx, clk_cy), (clk_cx, clk_cy - clk_r + 14)], fill=CAJAO, width=3)

# ---- Persona adulta sentada junto a la ventana (perfil, estilo flat) ----
# silla simple de perfil
ch_x, ch_y = 350, 400
d.rounded_rectangle([ch_x, ch_y, ch_x + 120, ch_y + 26], 10, fill=SALVIA)  # asiento
d.rectangle([ch_x + 6, ch_y + 26, ch_x + 20, ch_y + 150], fill=SALVIA)
d.rectangle([ch_x + 100, ch_y + 26, ch_x + 114, ch_y + 150], fill=SALVIA)
d.rounded_rectangle([ch_x - 14, ch_y - 110, ch_x + 6, ch_y + 10], 8, fill=SALVIA)  # respaldo

# persona: cabeza, torso, piernas (perfil hacia la ventana, izquierda)
hx, hy = ch_x + 66, ch_y - 150
d.ellipse([hx - 24, hy - 24, hx + 24, hy + 24], fill=DORADO_SUAVE)  # cabeza
d.arc([hx - 26, hy - 30, hx + 22, hy + 18], 90, 280, fill=(120, 84, 58), width=10)  # pelo
# torso inclinado levemente hacia la ventana
d.polygon([(hx - 22, hy + 18), (hx + 20, hy + 16), (hx + 26, ch_y - 2), (hx - 30, ch_y - 4)], fill=TERRA)
# brazos: manos alrededor de la tasa sostenida (tasas en la mano, gesto contemplativo)
# (la tasa sobre la mesita ya existe; brazos en regazo)
d.line([(hx - 12, hy + 24), (hx - 26, ch_y - 8)], fill=TERRA, width=14)
d.line([(hx + 10, hy + 24), (hx + 2, ch_y - 6)], fill=TERRA_LUZ, width=14)
# piernas
d.rounded_rectangle([hx - 34, ch_y - 6, hx - 6, ch_y + 120], 10, fill=(120, 84, 58))
d.rounded_rectangle([hx - 4, ch_y - 6, hx + 26, ch_y + 116], 10, fill=(134, 96, 68))

# ---- Cuadro pequeño en la pared (rectangulo arena con arco salvia) ----
d.rectangle([930, 300, 1050, 390], fill=BLANCO, outline=ARENA, width=3)
d.arc([960, 320, 1020, 380], 180, 360, fill=SALVIA, width=6)

# ---- Alfombra bajo la persona ----
d.rounded_rectangle([260, 590, 760, 650], 20, fill=(236, 220, 203))
d.rounded_rectangle([290, 602, 730, 638], 14, outline=ARENA, width=2)

# ---- Lineas de silencio/quietud: pequeños trazos suaves alrededor del vapor ----
# (sutil, sin simbolos raros)

# ---- Grano suave para textura editorial ----
noise = Image.effect_noise((W, H), 18).convert("L")
noise_rgb = Image.merge("RGB", (noise, noise, noise))
img = Image.blend(img, noise_rgb, 0.045)

# ---- Vignette calida muy suave ----
vign = Image.new("L", (W, H), 0)
vd = ImageDraw.Draw(vign)
vd.ellipse([-200, -150, W + 200, H + 150], fill=255)
vign = vign.filter(ImageFilter.GaussianBlur(80))
warm = Image.new("RGB", (W, H), (246, 224, 200))
img = Image.composite(img, warm, vign)

img.save("public/blog/ansiedad-domingo-tarde.png", optimize=True)
img.save("public/blog/ansiedad-domingo-tarde.webp", "WEBP", quality=82, method=6)
print("OK: ilustracion generada 1200x675")
print("PNG:", img.size)