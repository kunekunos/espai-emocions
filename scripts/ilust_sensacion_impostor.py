# -*- coding: utf-8 -*-
"""Ilustración editorial estilo Espai Emocions: 'Sensación de impostor'.

Escena interior cálida y minimalista: una persona adulta de pie frente a un
gran espejo de cuerpo entero. En el espejo, el reflejo aparece como un
personaje de cartón disfrazado —con corbata y maletín— mientras la persona
real viste ropa sencilla. La metáfora visual: el espejo devuelve un actor
que sostiene el personaje, no a la persona que lo sostiene. Sobre una mesita,
un diploma y una taza de café aún humeante: los logros reales siguen ahí,
mientras la duda se mira al cristal. Paleta terracota/crema/salvia, luz
cálida de lámpara, formato 1200x675 (16:9), estilo plano con grano suave,
sin texto.
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

img = Image.new("RGB", (W, H), CREMA)
d = ImageDraw.Draw(img)

# ---- Pared interior (crema cálida) ----
d.rectangle([0, 0, W, 500], fill=(234, 220, 207))
d.line([(0, 500), (W, 500)], fill=ARENA, width=3)
d.rectangle([0, 500, W, H], fill=(214, 196, 178))
for x in range(0, W, 100):
    d.line([(x, 500), (x - 55, H)], fill=(200, 182, 164), width=2)

# ---- Zócalo ----
d.rectangle([0, 480, W, 500], fill=ARENA)

# ---- Gran espejo vertical (centro-izquierda), marco de madera ----
sx0, sy0, sx1, sy1 = 120, 90, 470, 480
d.rounded_rectangle([sx0 - 18, sy0 - 18, sx1 + 18, sy1 + 18], 14, fill=MADERA)
# interior del espejo: reflejo más pálido y frío que la habitación
glass = Image.new("RGB", (sx1 - sx0, sy1 - sy0), (238, 228, 216))
gd = ImageDraw.Draw(glass)
gw, gh = glass.size
for y in range(gh):
    t = y / gh
    c = tuple(int((238, 228, 216)[i] + (224, 210, 196)[i] - (238, 228, 216)[i] * t) for i in range(3))
    gd.line([(0, y), (gw, y)], fill=(min(c[0], 240), min(c[1], 232), min(c[2], 220)))

# ---- REFLEJO en el espejo: el personaje (figura más pálida, con corbata) ----
rx = gw // 2 + 30
# cuerpo del personaje: torso gris pálido
gd.rounded_rectangle([rx - 40, 160, rx + 40, 360], 18, fill=(196, 188, 178))
# camisa del personaje: blanco frío
gd.polygon([(rx - 16, 160), (rx + 16, 160), (rx + 6, 250), (rx - 6, 250)], fill=(236, 236, 234))
# corbata: roja de disfraz
gd.polygon([(rx - 7, 165), (rx + 7, 165), (rx + 12, 300), (rx - 12, 300)], fill=(150, 60, 50))
# cabeza del personaje: pálida, sin rasgos marcados
gd.ellipse([rx - 30, 90, rx + 30, 150], fill=(214, 202, 188))
# pelo del personaje: perfecto, engominado
gd.ellipse([rx - 32, 84, rx + 32, 120], fill=(70, 58, 48))
# brazos rígidos del personaje
gd.rounded_rectangle([rx - 58, 175, rx - 42, 330], 8, fill=(196, 188, 178))
gd.rounded_rectangle([rx + 42, 175, rx + 58, 330], 8, fill=(196, 188, 178))
# maletín que sostiene el personaje
gd.rounded_rectangle([rx + 52, 300, rx + 110, 350], 6, fill=(120, 92, 72))
gd.rectangle([rx + 72, 292, rx + 90, 302], fill=(90, 68, 52))
# la sonrisa del personaje: trazada, fija
gd.arc([rx - 16, 116, rx + 16, 140], 20, 160, fill=(120, 104, 92), width=3)
# ojos del personaje: puntos vacíos
gd.ellipse([rx - 18, 104, rx - 10, 112], fill=(90, 78, 66))
gd.ellipse([rx + 10, 104, rx + 18, 112], fill=(90, 78, 66))

# línea divisoria del reflejo (borde de cristal sutil)
gd.line([(gw // 2, 0), (gw // 2, gh)], fill=(220, 208, 194), width=3)
img.paste(glass, (sx0, sy0))

# ---- PERSONA REAL: de pie frente al espejo, de espaldas 3/4 (derecha del espejo) ----
px, py = 640, 350  # eje del cuerpo, pies en el suelo (y=560 aprox)
# piernas: pantalón cacao
d.rounded_rectangle([px - 42, 420, px - 10, 560], 12, fill=CAJAO)
d.rounded_rectangle([px + 10, 420, px + 42, 560], 12, fill=(56, 44, 37))
# zapatos
d.rounded_rectangle([px - 52, 552, px - 14, 572], 8, fill=TERRA_OSC)
d.rounded_rectangle([px + 14, 552, px + 52, 572], 8, fill=TERRA_OSC)
# torso: suéter de salvia (la persona real viste de salvia, color de verdad)
d.rounded_rectangle([px - 52, 260, px + 52, 430], 24, fill=SALVIA_OSC)
# brazo derecho relajado
d.rounded_rectangle([px + 40, 280, px + 66, 420], 10, fill=SALVIA_OSC)
# brazo izquierdo: mano levantada hacia el cristal, tocando casi el reflejo
d.rounded_rectangle([px - 66, 280, px - 40, 380], 10, fill=SALVIA_OSC)
# mano que se acerca al espejo (piel cálida)
d.ellipse([px - 74, 368, px - 46, 396], fill=DORADO_SUAVE)
# cabeza de perfil: la persona mira al espejo
hx, hy = px - 6, 220
d.ellipse([hx - 34, hy - 26, hx + 26, hy + 34], fill=DORADO_SUAVE)
# pelo cacao natural, suelto
d.ellipse([hx - 40, hy - 32, hx + 32, hy + 14], fill=(72, 52, 38))
d.ellipse([hx - 12, hy - 40, hx + 36, hy - 6], fill=(72, 52, 38))
# cuello
d.rounded_rectangle([hx - 12, hy + 26, hx + 10, hy + 46], 6, fill=DORADO_SUAVE)

# ---- Mesita baja a la derecha: el diploma y el café (logros reales) ----
tx0, ty = 880, 500
d.rounded_rectangle([tx0, ty - 10, tx0 + 190, ty + 6], 8, fill=MADERA)
d.rectangle([tx0 + 16, ty + 6, tx0 + 24, ty + 46], fill=MADERA)
d.rectangle([tx0 + 166, ty + 6, tx0 + 174, ty + 46], fill=MADERA)
# diploma: rollo cerrado con lazo terracota (el logro enrollado, sin colgar)
d.rounded_rectangle([tx0 + 20, ty - 58, tx0 + 76, ty - 16], 8, fill=BLANCO, outline=ARENA, width=2)
d.ellipse([tx0 + 32, ty - 58, tx0 + 64, ty - 16], fill=BLANCO, outline=ARENA, width=2)
d.rectangle([tx0 + 34, ty - 40, tx0 + 62, ty - 34], fill=TERRA_LUZ)
# taza de café humeante: la vida real sigue, aún caliente
d.rounded_rectangle([tx0 + 110, ty - 44, tx0 + 148, ty - 12], 6, fill=BLANCO, outline=ARENA, width=2)
gd2 = d  # humo: dos curvas suaves ascendentes
for i, dx in enumerate([12, 26]):
    pts = []
    for k in range(6):
        xh = tx0 + 122 + dx + int(6 * math.sin(k * 1.1 + i))
        yh = ty - 50 - k * 12
        pts.append((xh, yh))
    d.line(pts, fill=(206, 194, 182), width=3)

# ---- Lámpara de pie cálida a la derecha, encendida ----
lx = 1150
d.line([(lx, 300), (lx, 500)], fill=CAJAO, width=5)
d.ellipse([lx - 26, 494, lx + 6, 522], fill=CAJAO)
d.polygon([(lx - 44, 262), (lx + 44, 262), (lx + 32, 226), (lx - 32, 226)], fill=TERRA_LUZ)
d.ellipse([lx - 34, 218, lx + 34, 240], fill=DORADO_SUAVE)
halo = Image.new("RGBA", (W, H), (0, 0, 0, 0))
hd = ImageDraw.Draw(halo)
hd.ellipse([lx - 120, 160, lx + 130, 320], fill=(240, 205, 160, 55))
img = Image.alpha_composite(img.convert("RGBA"), halo).convert("RGB")
d = ImageDraw.Draw(img)

# ---- Planta de salvia en maceta terracota junto al espejo ----
pot_x, pot_y = 540, 500
d.polygon([(pot_x - 26, pot_y), (pot_x + 26, pot_y), (pot_x + 19, pot_y + 58), (pot_x - 19, pot_y + 58)], fill=TERRA)
d.rectangle([pot_x - 30, pot_y - 10, pot_x + 30, pot_y + 4], fill=TERRA_OSC)
for ang in range(-70, 71, 14):
    a = math.radians(ang)
    x2 = pot_x + 54 * math.sin(a)
    y2 = pot_y - 16 - 62 * math.cos(a)
    d.line([(pot_x, pot_y - 12), (x2, y2)], fill=SALVIA, width=4)
    d.ellipse([x2 - 8, y2 - 11, x2 + 8, y2 + 7], fill=SALVIA)

# ---- Luz cálida suave desde la lámpara (derecha) ----
light = Image.new("RGBA", (W, H), (0, 0, 0, 0))
ld = ImageDraw.Draw(light)
ld.polygon([(900, 0), (1200, 0), (1200, 500), (700, 500)], fill=(240, 205, 160, 40))
img = Image.alpha_composite(img.convert("RGBA"), light).convert("RGB")
d = ImageDraw.Draw(img)

# ---- Sombra suave de la persona en el suelo ----
shadow = Image.new("RGBA", (W, H), (0, 0, 0, 0))
sd = ImageDraw.Draw(shadow)
sd.ellipse([px - 90, 556, px + 70, 592], fill=(160, 140, 122, 90))
img = Image.alpha_composite(img.convert("RGBA"), shadow).convert("RGB")
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

img.save("public/blog/sensacion-impostor-edad-adulta.png", optimize=True)
img.save("public/blog/sensacion-impostor-edad-adulta.webp", "WEBP", quality=82, method=6)
print("OK: ilustración generada 1200x675")