# -*- coding: utf-8 -*-
"""Ilustracion editorial estilo Espai Emocions: 'Siempre he sido asi'.

Escena minimalista habitada: despacho/estanteria de consultorio, una
persona adulta de perfil frente a un espejo de cuerpo entero. En el
espejo no hay un reflejo identico: emergen siluetas tenues de las
edades anteriores (nino, adolescente, joven adulto) en tonos salvia
suave, como biografia condensada. De la mano del presente (terracota)
nace un brote vegetal: lo que puede crecer. Ventana con tejados de
Barcelona, planta, lampara calida, sillon.
Paleta: terracota #A4511C, crema #F4E8DE, salvia #7B8872,
blanco calido #FFF9F3, arena #E1D2C6, cacao #30251F.
Formato 1200x675 (16:9), estilo plano con grano suave, sin texto.
"""
import random, math
from PIL import Image, ImageDraw, ImageFilter

W, H = 1200, 675
random.seed(27)

CREMA = (244, 232, 222)
BLANCO = (255, 249, 243)
ARENA = (225, 210, 198)
TERRA = (164, 81, 28)
TERRA_LUZ = (198, 108, 60)
SALVIA = (123, 136, 114)
SALVIA_OSC = (95, 107, 88)
SALVIA_NIEBLA = (176, 184, 168)
CAJAO = (48, 37, 31)
DORADO = (230, 180, 130)
DORADO_SUAVE = (240, 205, 165)
GRIS_ABUELO = (196, 180, 166)

img = Image.new("RGB", (W, H), CREMA)
d = ImageDraw.Draw(img)

# ---- Pared y suelo ----
d.rectangle([0, 0, W, 470], fill=CREMA)
d.line([(0, 470), (W, 470)], fill=ARENA, width=3)
d.rectangle([0, 470, W, H], fill=(232, 213, 193))
for x in range(0, W, 90):
    d.line([(x, 470), (x - 50, H)], fill=(219, 199, 178), width=2)

# ---- Ventana a la izquierda con tejados ----
wx0, wy0, wx1, wy1 = 60, 90, 330, 300
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
gx = 0
while gx < gw:
    w = random.randint(28, 64)
    h = random.randint(10, 36)
    gd.rectangle([gx, gh - h, gx + w, gh], fill=(196, 178, 158))
    gx += w
img.paste(glass, (wx0, wy0))
d.rectangle([wx0 + (wx1 - wx0) // 2 - 4, wy0, wx0 + (wx1 - wx0) // 2 + 4, wy1], fill=ARENA)
d.rectangle([wx0, wy0 + (wy1 - wy0) // 2 - 4, wx1, wy0 + (wy1 - wy0) // 2 + 4], fill=ARENA)

# ---- Lampara de pie (derecha de la ventana) ----
lx = 400
d.line([(lx, 470), (lx, 210)], fill=CAJAO, width=5)
d.ellipse([lx - 20, 470, lx + 20, 482], fill=CAJAO)
d.polygon([(lx - 34, 212), (lx + 34, 212), (lx + 22, 170), (lx - 22, 170)], fill=TERRA_LUZ)
d.ellipse([lx - 26, 166, lx + 26, 186], fill=DORADO_SUAVE)

# ---- Estanteria con cajas-historia (izquierda del espejo) ----
sh_x0, sh_y0, sh_x1, sh_y1 = 460, 120, 640, 330
d.rectangle([sh_x0, sh_y0, sh_x1, sh_y1], fill=(214, 196, 176), outline=ARENA, width=3)
# baldas
for by in (sh_y0 + 68, sh_y0 + 138, sh_y0 + 208):
    d.rectangle([sh_x0 + 6, by, sh_x1 - 6, by + 8], fill=(160, 120, 92))
# libros: tomos delgados en tonos de la paleta, algunos ladeados
colores = [SALVIA, TERRA, SALVIA_OSC, TERRA_LUZ, (150, 130, 110), SALVIA]
for fila, base_y in enumerate((sh_y0 + 60, sh_y0 + 130, sh_y0 + 200)):
    bx = sh_x0 + 14
    while bx < sh_x1 - 30:
        bw = random.randint(10, 18)
        bh = random.randint(34, 52)
        col = random.choice(colores)
        d.rectangle([bx, base_y - bh, bx + bw, base_y], fill=col)
        bx += bw + 3
    # un libro tumbado encima de cada fila
    d.rounded_rectangle([bx - 6, base_y - 66, bx + 26, base_y - 56], 3, fill=colores[fila])

# ---- Espejo de cuerpo entero con marco terracota ----
mx0, my0, mx1, my1 = 700, 110, 800, 500
d.rectangle([mx0 - 14, my0 - 14, mx1 + 14, my1 + 14], fill=TERRA)
# cristal con vaho calido
glass2 = Image.new("RGB", (mx1 - mx0, my1 - my0), BLANCO)
g2 = ImageDraw.Draw(glass2)
gw2, gh2 = glass2.size
for y in range(gh2):
    t = y / gh2
    c = tuple(int(BLANCO[i] + ((238, 226, 214)[i] - BLANCO[i]) * t) for i in range(3))
    g2.line([(0, y), (gw2, y)], fill=c)
img.paste(glass2, (mx0, my0))

# siluetas-niebla dentro del espejo: edades anteriores (salvia muy suave)
def silueta_beb(gx, gy, esc, col):
    """Silueta de cabeza y hombros simplificada, muy tenue."""
    r = int(10 * esc)
    hy = gy - int(34 * esc)
    g2.ellipse([gx - r, hy - r, gx + r, hy + r], fill=col)
    g2.rounded_rectangle([gx - int(16 * esc), hy, gx + int(16 * esc), hy + int(44 * esc)], int(10 * esc), fill=col)

silueta_beb(20, 96, 1.0, (214, 220, 206))
silueta_beb(52, 88, 0.85, (224, 229, 217))
silueta_beb(82, 98, 0.7, (232, 236, 226))
img.paste(glass2, (mx0, my0))

# reflejo principal: la persona adulta actual (cacao suave, mas presente)
g2 = ImageDraw.Draw(glass2)
g2.rectangle([0, 0, gw2, gh2], fill=None)
ref_y = 60
g2.ellipse([38 - 14, ref_y - 14, 38 + 14, ref_y + 14], fill=(120, 110, 100))
g2.arc([38 - 14, ref_y - 16, 38 + 14, ref_y + 12], 90, 300, fill=(96, 66, 46), width=7)
g2.polygon([(38 - 20, ref_y + 88), (38 + 20, ref_y + 88), (38 + 14, ref_y + 14), (38 - 14, ref_y + 14)], fill=(120, 110, 100))
img.paste(glass2, (mx0, my0))
d = ImageDraw.Draw(img)

# ---- La persona real, de perfil, frente al espejo ----
px = 600            # eje de la figura
py = 470            # suelo
# sombra suave
d.ellipse([px - 60, py - 8, px + 60, py + 14], fill=(214, 195, 176))
# piernas y zapatos
d.rectangle([px - 26, py - 150, px - 8, py], fill=CAJAO)
d.rectangle([px + 4, py - 150, px + 22, py], fill=CAJAO)
d.rounded_rectangle([px - 34, py - 14, px - 2, py], 5, fill=CAJAO)
d.rounded_rectangle([px + 4, py - 14, px + 34, py], 5, fill=CAJAO)
# torso: jersei terracota
d.polygon([(px - 34, py - 148), (px + 34, py - 148), (px + 28, py - 246), (px - 28, py - 246)], fill=TERRA)
d.rounded_rectangle([px - 38, py - 250, px + 38, py - 226], 12, fill=TERRA)  # hombros
# cabeza de perfil (mirando al espejo, a la derecha)
hx, hy = px + 6, py - 276
d.ellipse([hx - 18, hy - 18, hx + 18, hy + 18], fill=DORADO_SUAVE)
# pelo corto
d.arc([hx - 20, hy - 20, hx + 18, hy + 14], 100, 330, fill=(72, 52, 38), width=10)
d.ellipse([hx - 22, hy - 10, hx - 12, hy + 8], fill=(72, 52, 38))
# brazo alzado hacia el espejo: la mano toca el cristal
d.line([(px + 26, py - 236), (px + 88, py - 216)], fill=TERRA, width=16)
d.ellipse([px + 84, py - 226, px + 104, py - 206], fill=DORADO_SUAVE)

# ---- Brote desde la mano: lo que puede crecer ----
sx, sy = px + 100, py - 208
d.line([(sx, sy), (sx - 8, sy - 30)], fill=SALVIA, width=4)
d.ellipse([sx - 16, sy - 42, sx - 2, sy - 28], fill=SALVIA)
d.line([(sx, sy), (sx + 12, sy - 24)], fill=SALVIA_OSC, width=4)
d.ellipse([sx + 6, sy - 36, sx + 20, sy - 22], fill=SALVIA_OSC)

# ---- Planta grande a la derecha ----
pot_x, pot_y = 1090, 400
d.polygon([(pot_x - 30, pot_y), (pot_x + 30, pot_y), (pot_x + 22, pot_y + 70), (pot_x - 22, pot_y + 70)], fill=TERRA_LUZ)
for ang in range(-80, 81, 13):
    a = math.radians(ang)
    x2 = pot_x + 66 * math.sin(a)
    y2 = pot_y - 12 - 78 * math.cos(a)
    d.line([(pot_x, pot_y - 8), (x2, y2)], fill=SALVIA, width=5)
    d.ellipse([x2 - 9, y2 - 12, x2 + 9, y2 + 8], fill=SALVIA)

# ---- Cuadro pequeño en la pared derecha ----
d.rectangle([1000, 120, 1090, 200], fill=BLANCO, outline=ARENA, width=3)
d.arc([1018, 140, 1072, 192], 180, 360, fill=SALVIA, width=5)

# ---- Luz calida desde la ventana ----
light = Image.new("RGBA", (W, H), (0, 0, 0, 0))
ld = ImageDraw.Draw(light)
ld.polygon([(100, 470), (460, 470), (660, 675), (40, 675)], fill=(240, 205, 160, 90))
img = Image.alpha_composite(img.convert("RGBA"), light).convert("RGB")
d = ImageDraw.Draw(img)

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

img.save("public/blog/siempre-he-sido-asi-caracter-destino.png", optimize=True)
img.save("public/blog/siempre-he-sido-asi-caracter-destino.webp", "WEBP", quality=82, method=6)
print("OK: ilustracion generada 1200x675")
print("PNG:", img.size)