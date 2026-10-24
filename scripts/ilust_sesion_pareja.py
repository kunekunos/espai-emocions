# -*- coding: utf-8 -*-
"""Ilustración editorial estilo Espai Emocions: 'Cómo es una sesión de terapia de pareja'.

Composición única para este artículo (no reutiliza layouts previos):
primera vez en la serie que se retrata el interior de una consulta vista en
perspectiva lateral — dos personas adultas en butacas enfrentadas formando un
ángulo cálido, con una figura de psicólogo en tercer plano que sostiene la
conversación (silueta serena, libreta en el regazo). Entre las butacas, una
mesita baja con dos tazas; bajo ellas, una alfombra orgánica salvia que
representa el espacio común de la relación. Ventana con persianas barcelonesas
y luz de tarde, lámpara cálida, planta. Metáfora: la sesión como una hora
ordenada donde la relación vuelve a tener sitio. Paleta terracota/crema/salvia,
1200x675 (16:9), estilo plano con grano sutil, sin texto.
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

# ---- Pared: degradado cálido crema ----
WALL = 480
for y in range(WALL):
    t = y / WALL
    c = tuple(int(CREMA[i] + (BLANCO[i] - CREMA[i]) * (1 - t ** 1.4)) for i in range(3))
    d.line([(0, y), (W, y)], fill=c)

# ---- Zócalo y suelo de tablones ----
d.rectangle([0, WALL, W, H], fill=(216, 190, 166))
d.line([(0, WALL), (W, WALL)], fill=ARENA, width=3)
d.rectangle([0, WALL - 14, W, WALL], fill=ARENA)
for k in range(11):
    x0 = 30 + k * 120
    d.line([(x0, WALL), (x0 - 80, H)], fill=(196, 168, 142), width=2)
for yy in (540, 610):
    d.line([(0, yy), (W, yy)], fill=(199, 172, 148), width=2)

# ---- Ventana con persianas barcelonesas (izquierda, luz de tarde) ----
WX, WY, WW, WH = 70, 110, 200, 260
d.rounded_rectangle([WX - 14, WY - 14, WX + WW + 14, WY + WH + 14], 10, fill=MADERA)
d.rectangle([WX, WY, WX + WW, WY + WH], fill=DORADO_LUZ)
# lamas de persiana: franjas horizontales cálidas
for i, lam in enumerate(range(WY + 8, WY + WH - 8, 16)):
    d.rectangle([WX, lam, WX + WW, lam + 6], fill=(238, 208, 166) if i % 2 == 0 else (230, 196, 150))
d.line([(WX + 8, WY + 4), (WX + 8, WY + WH - 4)], fill=MADERA, width=3)
# marco inferior con maceta de geranio minimal
d.rounded_rectangle([WX + 18, WY + WH - 2, WX + WW - 18, WY + WH + 16], 6, fill=TERRA)
d.ellipse([WX + 34, WY + WH - 34, WX + 62, WY + WH - 8], fill=SALVIA)
d.ellipse([WX + 74, WY + WH - 40, WX + 104, WY + WH - 10], fill=SALVIA_CLARA)
d.ellipse([WX + 118, WY + WH - 32, WX + 146, WY + WH - 8], fill=SALVIA)

# ---- Luz de tarde proyectada desde la ventana ----
light = Image.new("RGBA", (W, H), (0, 0, 0, 0))
ld = ImageDraw.Draw(light)
ld.polygon([(WX + WW, WY + WH), (WX + 420, H), (WX + 640, H)], fill=(255, 236, 200, 75))
light = light.filter(ImageFilter.GaussianBlur(26))
img = Image.alpha_composite(img.convert("RGBA"), light).convert("RGB")
d = ImageDraw.Draw(img)

# ---- Alfombra orgánica salvia: el espacio común de la relación ----
rug = Image.new("RGBA", (W, H), (0, 0, 0, 0))
rd = ImageDraw.Draw(rug)
# forma blob orgánica (círculos solapados)
random.seed(24)
CX, CY = 640, 560
for dx in (-120, -40, 40, 120):
    rd.ellipse([CX + dx - 110, CY - 55, CX + dx + 110, CY + 55], fill=(196, 202, 186, 235))
rd.ellipse([CX - 150, CY - 40, CX + 150, CY + 40], fill=(196, 202, 186, 235))
rug = rug.filter(ImageFilter.GaussianBlur(1))
img = Image.alpha_composite(img.convert("RGBA"), rug).convert("RGB")
d = ImageDraw.Draw(img)
# borde interior del tapete en terracota suave, trazo orgánico discontinuo
for a0 in range(0, 360, 14):
    d.arc([CX - 175, CY - 62, CX + 175, CY + 62], a0, a0 + 7, fill=TERRA_SUAVE, width=3)

# ---- Dos butacas enfrentadas en ángulo cálido ----
def silla(cx, base_y, ang_izq, color):
    """Butaca simple: respaldo curvo, asiento, patas de madera."""
    sh = Image.new("RGBA", (W, H), (0, 0, 0, 0))
    shd = ImageDraw.Draw(sh)
    shd.ellipse([cx - 78, base_y - 14, cx + 82, base_y + 10], fill=(120, 90, 66, 80))
    sh = sh.filter(ImageFilter.GaussianBlur(6))
    non_local = Image.alpha_composite(img.convert("RGBA"), sh).convert("RGB")
    return non_local

# sombras de ambas butacas primero
for cx in (460, 820):
    sh = Image.new("RGBA", (W, H), (0, 0, 0, 0))
    shd = ImageDraw.Draw(sh)
    shd.ellipse([cx - 90, 586 - 12, cx + 94, 586 + 12], fill=(120, 90, 66, 90))
    sh = sh.filter(ImageFilter.GaussianBlur(6))
    img = Image.alpha_composite(img.convert("RGBA"), sh).convert("RGB")
d = ImageDraw.Draw(img)

def butaca(cx, flip):
    """Butaca terracota/crema; flip=True gira el respaldo hacia el interior."""
    # patas
    for lx in (cx - 58, cx + 42):
        d.rounded_rectangle([lx, 578, lx + 16, 600], 4, fill=MADERA_OSC)
    # asiento
    d.rounded_rectangle([cx - 72, 470, cx + 72, 580], 18, fill=TERRA_LUZ)
    # cojín del asiento
    d.rounded_rectangle([cx - 62, 462, cx + 62, 528], 14, fill=TERRA_SUAVE)
    # respaldo lateral (según orientación)
    if flip:  # respaldo a la izquierda del espectador
        rx = cx - 84
    else:
        rx = cx + 40
    d.rounded_rectangle([rx, 380, rx + 44, 582], 16, fill=TERRA)
    # brazuelo
    by = 540
    if flip:
        d.rounded_rectangle([cx + 56, by, cx + 84, by + 34], 10, fill=TERRA)
    else:
        d.rounded_rectangle([cx - 84, by, cx - 56, by + 34], 10, fill=TERRA)

# butaca izquierda (persona de espaldas al espectador, mirando a la derecha)
butaca(430, flip=False)
# butaca derecha (persona de perfil, mirando a la izquierda)
butaca(850, flip=True)

# ---- Persona 1 (izquierda, de espaldas tres cuartos) ----
P1X, P1Y = 468, 588
# piernas
d.rounded_rectangle([P1X - 22, P1Y - 118, P1X - 4, P1Y - 4], 7, fill=SALVIA_OSC)
d.rounded_rectangle([P1X + 4, P1Y - 118, P1X + 22, P1Y - 4], 7, fill=SALVIA_OSC)
d.rounded_rectangle([P1X - 24, P1Y - 12, P1X - 2, P1Y], 5, fill=(58, 44, 38))
d.rounded_rectangle([P1X + 4, P1Y - 12, P1X + 26, P1Y], 5, fill=(58, 44, 38))
# torso crema
d.rounded_rectangle([P1X - 30, P1Y - 226, P1X + 30, P1Y - 104], 14, fill=CREMA)
# brazos: uno apoyado, otro gesticulando suave hacia el centro
d.rounded_rectangle([P1X + 26, P1Y - 212, P1X + 56, P1Y - 178], 9, fill=CREMA)
d.ellipse([P1X + 50, P1Y - 188, P1X + 70, P1Y - 168], fill=PIEL)
d.rounded_rectangle([P1X - 54, P1Y - 206, P1X - 28, P1Y - 176], 9, fill=CREMA)
# cabeza de espaldas: pelo cacao neutro
d.ellipse([P1X - 22, P1Y - 276, P1X + 22, P1Y - 236], fill=PIEL)
d.chord([P1X - 24, P1Y - 282, P1X + 24, P1Y - 232], 120, 300, fill=(92, 66, 50))

# ---- Persona 2 (derecha, de perfil, escuchando) ----
P2X, P2Y = 812, 588
# piernas
d.rounded_rectangle([P2X - 22, P2Y - 118, P2X - 4, P2Y - 4], 7, fill=(70, 60, 54))
d.rounded_rectangle([P2X + 4, P2Y - 118, P2X + 22, P2Y - 4], 7, fill=(70, 60, 54))
d.rounded_rectangle([P2X - 24, P2Y - 12, P2X - 2, P2Y], 5, fill=(48, 40, 36))
d.rounded_rectangle([P2X + 4, P2Y - 12, P2X + 26, P2Y], 5, fill=(48, 40, 36))
# torso salvia
d.rounded_rectangle([P2X - 30, P2Y - 226, P2X + 30, P2Y - 104], 14, fill=SALVIA_CLARA)
# brazos: manos entrelazadas en el regazo (postura de escucha)
d.rounded_rectangle([P2X - 54, P2Y - 176, P2X - 26, P2Y - 146], 9, fill=SALVIA_CLARA)
d.rounded_rectangle([P2X + 26, P2Y - 176, P2X + 54, P2Y - 146], 9, fill=SALVIA_CLARA)
d.ellipse([P2X - 62, P2Y - 166, P2X - 44, P2Y - 148], fill=PIEL)
d.ellipse([P2X + 44, P2Y - 166, P2X + 62, P2Y - 148], fill=PIEL)
# cabeza de perfil hacia la izquierda
d.ellipse([P2X - 22, P2Y - 276, P2X + 22, P2Y - 236], fill=PIEL)
d.chord([P2X - 26, P2Y - 282, P2X + 26, P2Y - 230], 230, 90, fill=(58, 48, 44))  # pelo hacia atrás
# nariz sutil de perfil
d.polygon([(P2X - 22, P2Y - 254), (P2X - 30, P2Y - 250), (P2X - 22, P2Y - 246)], fill=PIEL)

# ---- Psicólogo en tercer plano (centro-fondo, sosteniendo la conversación) ----
PXc, PYc = 648, 508
# silueta serena en silla baja, tono cacao suave (presencia tranquila)
# sombra
sh = Image.new("RGBA", (W, H), (0, 0, 0, 0))
shd = ImageDraw.Draw(sh)
shd.ellipse([PXc - 46, 560 - 8, PXc + 46, 576 + 8], fill=(120, 90, 66, 70))
sh = sh.filter(ImageFilter.GaussianBlur(5))
img = Image.alpha_composite(img.convert("RGBA"), sh).convert("RGB")
d = ImageDraw.Draw(img)
# silla del psicólogo
d.rounded_rectangle([PXc - 52, 470, PXc + 52, 570], 16, fill=SALVIA)
# piernas
d.rounded_rectangle([PXc - 20, 500, PXc - 4, 556], 7, fill=(104, 90, 78))
d.rounded_rectangle([PXc + 4, 500, PXc + 20, 556], 7, fill=(104, 90, 78))
# torso crema suave
d.rounded_rectangle([PXc - 30, 414, PXc + 30, 506], 14, fill=(240, 226, 212))
# libreta en el regazo
d.rounded_rectangle([PXc - 20, 494, PXc + 22, 512], 4, fill=BLANCO)
d.line([(PXc - 12, 500), (PXc + 14, 500)], fill=ARENA, width=2)
d.line([(PXc - 12, 505), (PXc + 8, 505)], fill=ARENA, width=2)
# brazos hacia la libreta
d.rounded_rectangle([PXc - 42, 440, PXc - 22, 496], 8, fill=(240, 226, 212))
d.rounded_rectangle([PXc + 22, 440, PXc + 42, 496], 8, fill=(240, 226, 212))
# cabeza serena, pelo corto neutro
d.ellipse([PXc - 20, 372, PXc + 20, 410], fill=PIEL)
d.chord([PXc - 22, 368, PXc + 22, 412], 160, 340, fill=(70, 54, 46))

# ---- Mesita baja entre las butacas con dos tazas ----
d.rounded_rectangle([586, 556, 702, 572], 6, fill=MADERA)
d.rectangle([598, 572, 610, 592], fill=MADERA_OSC)
d.rectangle([678, 572, 690, 592], fill=MADERA_OSC)
# dos tazas humeantes (la conversación está servida)
for tx in (614, 662):
    d.rounded_rectangle([tx - 11, 536, tx + 11, 556], 4, fill=BLANCO)
    d.arc([tx + 8, 540, tx + 22, 552], 300, 90, fill=ARENA, width=3)
# vapor suave
steam = Image.new("RGBA", (W, H), (0, 0, 0, 0))
sd = ImageDraw.Draw(steam)
for tx, ph in ((614, 0), (662, 1)):
    for k in range(3):
        a = 60 - k * 15
        sd.arc([tx - 6 + k * 4, 508 - ph * 4 - k * 10, tx + 6 + k * 4, 526 - ph * 4 - k * 10], 90, 270, fill=(255, 249, 243, a), width=2)
steam = steam.filter(ImageFilter.GaussianBlur(1))
img = Image.alpha_composite(img.convert("RGBA"), steam).convert("RGB")
d = ImageDraw.Draw(img)

# ---- Lámpara de pie cálida a la derecha ----
LX = 1010
d.rounded_rectangle([LX - 6, 470, LX + 6, 596], 4, fill=MADERA_OSC)
d.ellipse([LX - 26, 596, LX + 26, 612], fill=MADERA_OSC)
d.polygon([(LX - 34, 470), (LX + 34, 470), (LX + 22, 420), (LX - 22, 420)], fill=TERRA)
d.rectangle([LX - 22, 420, LX + 22, 452], fill=DORADO)
# halo de luz cálida
glow = Image.new("RGBA", (W, H), (0, 0, 0, 0))
gd = ImageDraw.Draw(glow)
gd.ellipse([LX - 90, 360, LX + 90, 520], fill=(248, 224, 186, 60))
glow = glow.filter(ImageFilter.GaussianBlur(20))
img = Image.alpha_composite(img.convert("RGBA"), glow).convert("RGB")
d = ImageDraw.Draw(img)

# ---- Planta de interior grande a la derecha ----
PPX, PPY = 1108, 640
d.rounded_rectangle([PPX - 34, PPY - 66, PPX + 34, PPY], 10, fill=TERRA)
d.rounded_rectangle([PPX - 28, PPY - 76, PPX + 28, PPY - 60], 8, fill=TERRA_LUZ)
random.seed(7)
for (hx, hy, hw) in [(PPX - 30, -150, 16), (PPX + 26, -140, 15), (PPX - 2, -170, 17), (PPX - 48, -110, 11), (PPX + 46, -104, 10), (PPX + 10, -128, 12)]:
    d.ellipse([hx - hw, PPY + hy - 90, hx + hw, PPY + hy + 20], fill=(123 + random.randint(-10, 10), 136 + random.randint(-10, 10), 114 + random.randint(-8, 8)))
d.line([(PPX - 30, PPY - 76), (PPX - 34, PPY - 150)], fill=SALVIA_OSC, width=3)
d.line([(PPX + 26, PPY - 76), (PPX + 32, PPY - 140)], fill=SALVIA_OSC, width=3)
d.line([(PPX, PPY - 76), (PPX - 4, PPY - 180)], fill=SALVIA_OSC, width=3)

# ---- Cuadro abstracto en la pared (trazos del símbolo: vínculo interior-relacional) ----
d.rounded_rectangle([330, 150, 510, 280], 12, fill=BLANCO, outline=ARENA, width=2)
# trazos verticales orgánicos (mundo interior)
for i, tx in enumerate((370, 394, 418)):
    d.rounded_rectangle([tx, 180 + i * 4, tx + 8, 240 - i * 4], 4, fill=TERRA)
# trazos horizontales (mundo relacional)
for i, ty in enumerate((196, 218)):
    d.rounded_rectangle([tx + 40 + 0, ty + i * 2, 470 + 0, ty + 8 + i * 2], 4, fill=SALVIA)

# ---- Grano suave para textura editorial ----
noise = Image.effect_noise((W, H), 18).convert("L")
noise_rgb = Image.merge("RGB", (noise, noise, noise))
img = Image.blend(img, noise_rgb, 0.05)

# ---- Viñeta cálida muy suave ----
vign = Image.new("L", (W, H), 0)
vd = ImageDraw.Draw(vign)
vd.ellipse([-200, -150, W + 200, H + 150], fill=255)
vign = vign.filter(ImageFilter.GaussianBlur(80))
warm = Image.new("RGB", (W, H), (216, 194, 168))
img = Image.composite(img, warm, vign)

img.save("public/blog/como-es-una-sesion-de-terapia-de-pareja.png", optimize=True)
img.save("public/blog/como-es-una-sesion-de-terapia-de-pareja.webp", "WEBP", quality=82, method=6)
print("OK: ilustración generada 1200x675 -> public/blog/como-es-una-sesion-de-terapia-de-pareja.{png,webp}")