# -*- coding: utf-8 -*-
"""Ilustración editorial estilo Espai Emocions: 'Miedo al compromiso'.

Escena interior cálida y minimalista: un salón-estudio con lámpara encendida.
Dentro, una figura adulta sentada en un sillón, serena, con una taza humeante
entre las manos. En el borde derecho, un umbral abierto hacia un exterior
azul-crema: otra figura adulta de pie, un pie dentro y otro fuera, mirando el
interior cálido sin entrar del todo. Entre ambas, la puerta entreabierta y una
alfombra que se interrumpe justo en el quicio. La metáfora visual: la fuga no
es ausencia de amor; es el significado que adquirió quedarse. Paleta
terracota/crema/salvia, luz cálida de lámpara, formato 1200x675 (16:9),
estilo plano con grano suave, sin texto.
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
EXTERIOR = (214, 222, 224)
EXTERIOR_FRIO = (196, 206, 210)

img = Image.new("RGB", (W, H), CREMA)
d = ImageDraw.Draw(img)

# ---- Pared interior (crema cálida) ----
d.rectangle([0, 0, 820, 520], fill=(236, 222, 209))
d.line([(0, 520), (820, 520)], fill=ARENA, width=3)
# suelo interior
d.rectangle([0, 520, 820, H], fill=(216, 198, 180))
for x in range(0, 860, 90):
    d.line([(x, 520), (x - 45, H)], fill=(202, 184, 166), width=2)
# zócalo
d.rectangle([0, 500, 820, 520], fill=ARENA)

# ---- Exterior tras la puerta (más frío, azulado-crema) ----
d.rectangle([820, 0, W, H], fill=EXTERIOR)
# franja de horizonte exterior: siluetas de ciudad suaves
d.rectangle([820, 360, W, 520], fill=EXTERIOR_FRIO)
for bx, bw, bh in [(850, 40, 90), (905, 26, 60), (945, 34, 110), (995, 22, 70), (1030, 30, 130), (1075, 24, 85)]:
    d.rectangle([bx, 520 - bh, bx + bw, 520], fill=(178, 190, 192))
# suelo exterior
d.rectangle([820, 520, W, H], fill=(204, 214, 216))
for x in range(840, W, 95):
    d.line([(x, 520), (x + 40, H)], fill=(188, 198, 202), width=2)

# ---- Marco de madera de la puerta (entreabierta hacia el interior) ----
d.rectangle([820 - 14, 60, 820, H], fill=MADERA)
d.rectangle([820, 60, 834, H], fill=(132, 98, 76))

# ---- Lámpara de pie cálida (izquierda), luz encendida ----
d.line([(150, 520), (150, 300)], fill=(120, 92, 70), width=7)
d.ellipse([108, 236, 192, 300], fill=DORADO_SUAVE, outline=(150, 116, 82), width=3)
# halo de luz
halo = Image.new("RGBA", (W, H), (0, 0, 0, 0))
hd = ImageDraw.Draw(halo)
hd.ellipse([78, 190, 222, 340], fill=(245, 214, 160, 70))
img = Image.alpha_composite(img.convert("RGBA"), halo).convert("RGB")
d = ImageDraw.Draw(img)

# ---- Cuadro en la pared (interior habitado) ----
d.rounded_rectangle([190, 120, 330, 240], 6, fill=(140, 66, 24))
d.rectangle([202, 132, 318, 228], fill=BLANCO)
d.arc([224, 160, 296, 230], 0, 180, fill=SALVIA, width=5)
d.ellipse([252, 176, 268, 192], fill=TERRA)

# ---- Planta de salvia en maceta terracota ----
pot_x, pot_y = 380, 520
d.polygon([(pot_x - 26, pot_y), (pot_x + 26, pot_y), (pot_x + 19, pot_y + 58), (pot_x - 19, pot_y + 58)], fill=TERRA)
d.rectangle([pot_x - 30, pot_y - 10, pot_x + 30, pot_y + 4], fill=TERRA_OSC)
for ang in range(-70, 71, 14):
    a = math.radians(ang)
    x2 = pot_x + 54 * math.sin(a)
    y2 = pot_y - 16 - 62 * math.cos(a)
    d.line([(pot_x, pot_y - 12), (x2, y2)], fill=SALVIA, width=4)
    d.ellipse([x2 - 8, y2 - 11, x2 + 8, y2 + 7], fill=SALVIA)

# ---- Sillón terracota y figura sentada (la que se queda) ----
cx, cy = 560, 520
# respaldo y brazos
d.rounded_rectangle([cx - 78, cy - 150, cx + 78, cy], 22, fill=TERRA)
d.rounded_rectangle([cx - 96, cy - 92, cx - 62, cy], 14, fill=TERRA_OSC)
d.rounded_rectangle([cx + 62, cy - 92, cx + 96, cy], 14, fill=TERRA_OSC)
# cojín
d.rounded_rectangle([cx - 62, cy - 86, cx + 62, cy - 6], 12, fill=TERRA_LUZ)
# figura sentada: torso salvia
d.rounded_rectangle([cx - 30, cy - 190, cx + 30, cy - 70], 16, fill=SALVIA_OSC)
# cabeza
d.ellipse([cx - 24, cy - 238, cx + 24, cy - 190], fill=(226, 200, 176))
# pelo recogido
d.ellipse([cx - 26, cy - 244, cx + 26, cy - 206], fill=(70, 56, 46))
d.rounded_rectangle([cx + 14, cy - 236, cx + 34, cy - 204], 8, fill=(70, 56, 46))
# brazos hacia la taza
d.line([(cx - 30, cy - 150), (cx - 12, cy - 108)], fill=SALVIA_OSC, width=12)
d.line([(cx + 30, cy - 150), (cx + 12, cy - 108)], fill=SALVIA_OSC, width=12)
# taza humeante
d.rounded_rectangle([cx - 16, cy - 118, cx + 16, cy - 92], 6, fill=BLANCO)
d.ellipse([cx + 12, cy - 112, cx + 22, cy - 100], outline=BLANCO, width=3)
for i, dy in enumerate((10, 24, 38)):
    d.arc([cx - 8, cy - 130 - dy - i * 3, cx + 8, cy - 122 - dy - i * 3], 200, 340, fill=(200, 186, 170), width=2)
# piernas
d.rounded_rectangle([cx - 26, cy - 74, cx - 8, cy - 4], 8, fill=(86, 70, 58))
d.rounded_rectangle([cx + 8, cy - 74, cx + 26, cy - 4], 8, fill=(86, 70, 58))
# rasgos serenos
d.ellipse([cx - 13, cy - 216, cx - 7, cy - 210], fill=CAJAO)
d.ellipse([cx + 7, cy - 216, cx + 13, cy - 210], fill=CAJAO)
d.arc([cx - 10, cy - 208, cx + 10, cy - 198], 20, 160, fill=(120, 100, 88), width=2)

# ---- Alfombra que se interrumpe en el quicio ----
d.rounded_rectangle([330, 560, 800, 648], 18, fill=(228, 176, 138))
d.rounded_rectangle([352, 574, 778, 634], 12, outline=TERRA_OSC, width=3)
# el borde cortado en la puerta
d.rectangle([800, 552, 836, H], fill=(204, 214, 216))

# ---- Figura de pie en el umbral (la que duda) ----
fx = 950
# un pie dentro (sombra cálida) y otro fuera
d.ellipse([fx - 34, 588, fx + 4, 606], fill=(176, 158, 140))
d.ellipse([fx + 10, 588, fx + 44, 606], fill=(184, 194, 196))
# piernas
d.rounded_rectangle([fx - 18, 420, fx - 4, 592], 8, fill=(92, 76, 62))
d.rounded_rectangle([fx + 4, 420, fx + 18, 592], 8, fill=(92, 76, 62))
# torso: abrigo salvia claro (tono más frío que el interior)
d.rounded_rectangle([fx - 30, 300, fx + 30, 440], 16, fill=SALVIA_SUAVE)
# bufanda terracota
d.rounded_rectangle([fx - 22, 296, fx + 22, 318], 10, fill=TERRA_LUZ)
d.rounded_rectangle([fx + 2, 318, fx + 14, 380], 6, fill=TERRA)
# cabeza girada hacia el interior
d.ellipse([fx - 22, 246, fx + 22, 290], fill=(228, 204, 180))
# pelo corto
d.ellipse([fx - 24, 242, fx + 24, 272], fill=(58, 46, 38))
# mirada hacia la luz (perfil hacia la izquierda)
d.ellipse([fx - 15, 262, fx - 8, 269], fill=CAJAO)
d.arc([fx - 12, 272, fx + 4, 284], 20, 140, fill=(120, 100, 88), width=2)
# brazo alzado hacia el marco de la puerta
d.line([(fx - 30, 330), (fx - 66, 350)], fill=SALVIA_SUAVE, width=13)
d.rounded_rectangle([fx - 78, 344, fx - 58, 364], 8, fill=(228, 204, 180))

# ---- Luz cálida del interior proyectada hacia el umbral ----
light = Image.new("RGBA", (W, H), (0, 0, 0, 0))
ld = ImageDraw.Draw(light)
ld.polygon([(0, 0), (820, 0), (920, H), (560, H)], fill=(240, 205, 160, 26))
img = Image.alpha_composite(img.convert("RGBA"), light).convert("RGB")
d = ImageDraw.Draw(img)

# ---- Sombra suave de la figura del umbral ----
shadow = Image.new("RGBA", (W, H), (0, 0, 0, 0))
sd = ImageDraw.Draw(shadow)
sd.ellipse([fx - 50, 590, fx + 60, 622], fill=(150, 160, 160, 90))
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

img.save("public/blog/miedo-al-compromiso-pareja.png", optimize=True)
img.save("public/blog/miedo-al-compromiso-pareja.webp", "WEBP", quality=82, method=6)
print("OK: ilustración generada 1200x675")