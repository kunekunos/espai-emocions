# -*- coding: utf-8 -*-
"""Ilustracion editorial estilo Espai Emocions: 'La familia politica'.

Escena minimalista habitada: comedor familiar, mesa larga de domingo,
dos parejas mayores (una a cada extremo, salvia/terracota) y la pareja
joven en el centro, como puente entre dos historias. Ventana con tejados
de Barcelona, planta, luz calida, vela y pan en la mesa.
Paleta: terracota #A4511C, crema #F4E8DE, salvia #7B8872,
blanco calido #FFF9F3, arena #E1D2C6, cacao #30251F.
Formato 1200x675 (16:9), estilo plano con grano suave, sin texto.
"""
import random, math
from PIL import Image, ImageDraw, ImageFilter

W, H = 1200, 675
random.seed(26)

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
GRIS_ABUELO = (196, 180, 166)

img = Image.new("RGB", (W, H), CREMA)
d = ImageDraw.Draw(img)

# ---- Pared superior con franja de wainscot ----
d.rectangle([0, 0, W, 470], fill=CREMA)
# moldura horizontal
d.line([(0, 470), (W, 470)], fill=ARENA, width=3)
# suelo
d.rectangle([0, 470, W, H], fill=(232, 213, 193))
for x in range(0, W, 90):
    d.line([(x, 470), (x - 50, H)], fill=(219, 199, 178), width=2)

# ---- Ventana a la izquierda con tejados ----
wx0, wy0, wx1, wy1 = 70, 90, 380, 330
d.rectangle([wx0 - 12, wy0 - 12, wx1 + 12, wy1 + 12], fill=ARENA)
glass = Image.new("RGB", (wx1 - wx0, wy1 - wy0), BLANCO)
gd = ImageDraw.Draw(glass)
gw, gh = glass.size
for y in range(gh):
    t = y / gh
    if t < 0.55:
        k = t / 0.55
        c = tuple(int(BLANCO[i] + (DORADO_SUAVE[i] - BLANCO[i]) * k) for i in range(3))
    else:
        k = (t - 0.55) / 0.45
        c = tuple(int(DORADO_SUAVE[i] + ((214, 156, 108)[i] - DORADO_SUAVE[i]) * k) for i in range(3))
    gd.line([(0, y), (gw, y)], fill=c)
# tejados en el cristal
gx = 0
while gx < gw:
    w = random.randint(28, 64)
    h = random.randint(10, 36)
    gd.rectangle([gx, gh - h, gx + w, gh], fill=(196, 178, 158))
    gx += w
img.paste(glass, (wx0, wy0))
d.rectangle([wx0 + (wx1 - wx0) // 2 - 4, wy0, wx0 + (wx1 - wx0) // 2 + 4, wy1], fill=ARENA)
d.rectangle([wx0, wy0 + (wy1 - wy0) // 2 - 4, wx1, wy0 + (wy1 - wy0) // 2 + 4], fill=ARENA)

# ---- Cuadros en la pared (derecha) ----
d.rectangle([1000, 120, 1090, 200], fill=BLANCO, outline=ARENA, width=3)
d.arc([1018, 140, 1072, 192], 180, 360, fill=SALVIA, width=5)
d.rectangle([940, 150, 995, 205], fill=BLANCO, outline=ARENA, width=3)
d.ellipse([958, 168, 977, 187], fill=TERRA_LUZ)

# ---- Luz calida desde la ventana ----
light = Image.new("RGBA", (W, H), (0, 0, 0, 0))
ld = ImageDraw.Draw(light)
ld.polygon([(120, 470), (560, 470), (760, 675), (60, 675)], fill=(240, 205, 160, 90))
img = Image.alpha_composite(img.convert("RGBA"), light).convert("RGB")
d = ImageDraw.Draw(img)

# ---- Planta grande a la derecha (salvia) ----
pot_x, pot_y = 1130, 400
d.polygon([(pot_x - 30, pot_y), (pot_x + 30, pot_y), (pot_x + 22, pot_y + 70), (pot_x - 22, pot_y + 70)], fill=TERRA)
for ang in range(-80, 81, 13):
    a = math.radians(ang)
    x2 = pot_x + 66 * math.sin(a)
    y2 = pot_y - 12 - 78 * math.cos(a)
    d.line([(pot_x, pot_y - 8), (x2, y2)], fill=SALVIA, width=5)
    d.ellipse([x2 - 9, y2 - 12, x2 + 9, y2 + 8], fill=SALVIA)

# ---- Mesa larga ----
tbl_y = 430            # superficie de la mesa
d.rounded_rectangle([150, tbl_y, 1150, tbl_y + 26], 8, fill=TERRA_LUZ)
d.rectangle([168, tbl_y + 26, 186, tbl_y + 150], fill=(150, 72, 26))
d.rectangle([1114, tbl_y + 26, 1132, tbl_y + 150], fill=(150, 72, 26))
# sombra de la mesa en el suelo
d.rounded_rectangle([150, tbl_y + 150, 1150, tbl_y + 162], 6, fill=(208, 188, 168))

def persona(cx, skin, hair, body, estilo, edad=False):
    """Dibuja una figura sentada tras la mesa: cabeza, pelo, torso."""
    hy = tbl_y - 92                     # centro de la cabeza
    r = 26
    # torso
    d.polygon([(cx - 30, tbl_y + 2), (cx + 30, tbl_y + 2),
               (cx + 22, hy + 34), (cx - 22, hy + 34)], fill=body)
    # hombros redondeados
    d.ellipse([cx - 30, tbl_y - 14, cx + 30, tbl_y + 16], fill=body)
    # cabeza
    d.ellipse([cx - r, hy - r, cx + r, hy + r], fill=skin)
    if estilo == "moño":                 # suegra mayor
        d.arc([cx - 27, hy - 30, cx + 24, hy + 14], 95, 300, fill=GRIS_ABUELO, width=11)
        d.ellipse([cx + 8, hy - 38, cx + 26, hy - 20], fill=GRIS_ABUELO)  # moño
    elif estilo == "clips":              # abuelo con gafas
        d.arc([cx - 26, hy - 28, cx + 25, hy + 16], 95, 295, fill=GRIS_ABUELO, width=9)
        d.line([(cx - 16, hy + 8), (cx - 16, hy - 2)], fill=CAJAO, width=2)
        d.line([(cx + 16, hy + 8), (cx + 16, hy - 2)], fill=CAJAO, width=2)
        d.ellipse([cx - 15, hy - 4, cx - 1, hy + 8], outline=CAJAO, width=2)
        d.ellipse([cx + 1, hy - 4, cx + 15, hy + 8], outline=CAJAO, width=2)
    elif estilo == "melena":             # mujer joven
        d.arc([cx - 28, hy - 32, cx + 26, hy + 18], 90, 305, fill=(96, 66, 46), width=12)
        d.ellipse([cx - 30, hy - 8, cx - 18, hy + 30], fill=(96, 66, 46))
        d.ellipse([cx + 18, hy - 8, cx + 30, hy + 30], fill=(96, 66, 46))
    else:                                # hombre pelo corto
        d.arc([cx - 25, hy - 30, cx + 25, hy + 10], 110, 300, fill=hair, width=10)
        if edad:
            d.ellipse([cx - 24, hy - 22, cx - 10, hy + 2], fill=skin)
            d.ellipse([cx + 10, hy - 22, cx + 24, hy + 2], fill=skin)

# ---- Comensales: dos familias mayores y la pareja en el centro ----
persona(265,  DORADO_SUAVE, GRIS_ABUELO, SALVIA_OSC, "moño", edad=True)      # suegra izq
persona(385,  DORADO_SUAVE, GRIS_ABUELO, SALVIA, "clips", edad=True)          # suegro izq
persona(580,  DORADO_SUAVE, (96, 66, 46), TERRA, "melena")                   # ella
persona(720,  DORADO_SUAVE, (72, 52, 38), TERRA_LUZ, "hombre")               # él
persona(905,  DORADO_SUAVE, GRIS_ABUELO, SALVIA, "clips", edad=True)          # suegro der
persona(1020, DORADO_SUAVE, GRIS_ABUELO, TERRA_LUZ, "moño", edad=True)       # suegra der

# la pareja se toca: una mano de él sobre la mesa hacia ella
d.line([(705, tbl_y - 4), (645, tbl_y - 2)], fill=DORADO_SUAVE, width=12)
d.ellipse([632, tbl_y - 10, 652, tbl_y + 6], fill=DORADO_SUAVE)

# ---- Servicio de mesa ----
def plato(cx):
    d.ellipse([cx - 34, tbl_y - 6, cx + 34, tbl_y + 12], fill=BLANCO, outline=ARENA, width=2)
for cx in (265, 385, 580, 720, 905, 1020):
    plato(cx)
# copas
for cx in (300, 620, 940):
    d.line([(cx, tbl_y - 40), (cx, tbl_y - 6)], fill=BLANCO, width=7)
    d.ellipse([cx - 14, tbl_y - 66, cx + 14, tbl_y - 40], fill=BLANCO, outline=ARENA, width=2)
    d.ellipse([cx - 12, tbl_y - 8, cx + 12, tbl_y - 2], fill=BLANCO)
# vasos
for cx in (430, 760, 1060):
    d.rounded_rectangle([cx - 10, tbl_y - 44, cx + 10, tbl_y - 4], 4, fill=(214, 196, 176))
    d.rounded_rectangle([cx - 8, tbl_y - 40, cx + 8, tbl_y - 14], 3, fill=DORADO_SUAVE)
# pan en el centro de la mesa
for cx in (500, 840):
    d.ellipse([cx - 16, tbl_y - 22, cx + 16, tbl_y + 4], fill=(226, 186, 132))
    d.arc([cx - 10, tbl_y - 18, cx + 10, tbl_y - 4], 180, 360, fill=(196, 150, 96), width=2)
# centro de mesa: ramita en jarron
jx = 660
d.rounded_rectangle([jx - 12, tbl_y - 46, jx + 12, tbl_y - 4], 6, fill=SALVIA_OSC)
d.line([(jx, tbl_y - 46), (jx - 18, tbl_y - 88)], fill=SALVIA, width=4)
d.ellipse([jx - 24, tbl_y - 98, jx - 10, tbl_y - 84], fill=SALVIA)
d.line([(jx, tbl_y - 46), (jx + 16, tbl_y - 84)], fill=SALVIA, width=4)
d.ellipse([jx + 10, tbl_y - 96, jx + 24, tbl_y - 80], fill=SALVIA_OSC)

# ---- Sillas de los comensales (respaldos asomando) ----
for cx in (265, 385, 580, 720, 905, 1020):
    color = SALVIA_OSC if cx in (265, 385, 905, 1020) else TERRA
    d.rounded_rectangle([cx - 34, tbl_y - 6, cx + 34, tbl_y + 6], 6, fill=color)

# ---- Veladora en la pared del fondo (arco calido) ----
d.arc([430, 250, 560, 380], 180, 360, fill=(214, 186, 150), width=8)

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

img.save("public/blog/familia-politica-suegros-pareja.png", optimize=True)
img.save("public/blog/familia-politica-suegros-pareja.webp", "WEBP", quality=82, method=6)
print("OK: ilustracion generada 1200x675")
print("PNG:", img.size)