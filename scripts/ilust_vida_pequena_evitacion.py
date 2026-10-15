# -*- coding: utf-8 -*-
"""Ilustración editorial estilo Espai Emocions: 'La vida se hace más pequeña'.

Composición única para este artículo (no reutiliza layouts previos):
una figura adulta de espaldas contemplando su propio mapa de vida dibujado
sobre una gran hoja/pared crema. El mapa contiene un mundo amplio y abierto
(ciudad, puente, avión de papel, montañas — trazos lineales terracota y
salvia) pero, alrededor de la figura, un cerco de líneas concéntricas va
cerrándose: cada anillo es una decisión de evitar. La zona fuera del cerco
permanece dibujada pero descolorida (arena pálido): la vida que aún existe
pero ya no se habita. La figura sostiene en la mano un pequeño lápiz
terracota: el cerco se dibuja, no se sufre; lo que se dibuja puede
redibujarse. En el suelo, un camino salvia rompe el anillo más externo y
apunta hacia fuera: el paso pequeño y acompañado. Luz dorada lateral,
paleta terracota/crema/salvia, 1200x675 (16:9), estilo plano con grano
sutil, sin texto.
"""
import math
from PIL import Image, ImageDraw, ImageFilter

W, H = 1200, 675

CREMA = (244, 232, 222)
BLANCO = (255, 249, 243)
ARENA = (225, 210, 198)
ARENA_OSC = (208, 190, 175)
TERRA = (164, 81, 28)
TERRA_LUZ = (198, 108, 60)
TERRA_SUAVE = (222, 160, 118)
SALVIA = (123, 136, 114)
SALVIA_OSC = (95, 107, 88)
SALVIA_SUAVE = (176, 184, 168)
CAJAO = (48, 37, 31)
MADERA = (160, 120, 92)
DORADO = (238, 190, 140)

img = Image.new("RGB", (W, H), BLANCO)
d = ImageDraw.Draw(img)

# ---- Fondo: pared crema cálida con zócalo y suelo ----
d.rectangle([0, 0, W, 470], fill=(240, 228, 214))
d.rectangle([0, 456, W, 470], fill=ARENA)
d.rectangle([0, 470, W, H], fill=(228, 212, 197))

# ---- La gran hoja del mapa en la pared ----
d.polygon([(180, 70), (1090, 95), (1065, 445), (165, 420)], fill=CREMA,
          outline=(214, 196, 180))
# esquina doblada de la hoja
d.polygon([(1065, 445), (1020, 445), (1065, 400)], fill=(230, 216, 200))

# ---- El mundo dibujado: trazos lineales tenues (arena oscuro) ----
mw = Image.new("RGBA", (W, H), (0, 0, 0, 0))
md = ImageDraw.Draw(mw)
FAINT = (208, 190, 175, 255)

# skyline lejano
base = 360
for x0 in (250, 300, 350, 940, 990, 1040):
    hh = 40 + (x0 % 3) * 18
    md.rectangle([x0, base - hh, x0 + 34, base], outline=FAINT, width=3)
# puente
md.arc([420, 300, 620, 380], 200, 340, fill=FAINT, width=3)
md.line([440, 348, 600, 348], fill=FAINT, width=3)
# avión de papel
md.line([660, 180, 740, 150], fill=FAINT, width=3)
md.line([660, 180, 700, 195], fill=FAINT, width=3)
md.line([700, 195, 740, 150], fill=FAINT, width=3)
# montañas
md.arc([700, 280, 880, 380], 180, 330, fill=FAINT, width=3)
md.arc([800, 300, 950, 400], 180, 330, fill=FAINT, width=3)
# camino abierto que cruza el mapa
md.line([(200, 390), (330, 350), (470, 370), (620, 330)], fill=FAINT, width=4)
md.line([(620, 330), (760, 350), (900, 310), (1040, 330)], fill=FAINT, width=4)

# ---- El cerco: anillos concéntricos que se cierran ----
cx, cy = 620, 300
rings = [(430, SALVIA_SUAVE), (350, SALVIA), (270, SALVIA), (190, SALVIA_OSC)]
for r, col in rings:
    md.lll = None
    md.ellipse([cx - r, cy - r * 0.62, cx + r, cy + r * 0.62], outline=col + (235,), width=5)
# el anillo interior se cierra del todo: trazo más denso
md.ellipse([cx - 110, cy - 68, cx + 110, cy + 68], outline=SALVIA_OSC + (255,), width=6)

# rotura del cerco: el paso que apunta fuera (salvia)
md.line([(cx - 430, cy + 60), (cx - 500, cy + 96)], fill=SALVIA_OSC + (255,), width=7)
md.line([(cx - 500, cy + 96), (cx - 560, cy + 130)], fill=SALVIA_OSC + (255,), width=7)
md.ellipse([cx - 572, cy + 122, cx - 548, cy + 146], fill=TERRA)

img = Image.alpha_composite(img.convert("RGBA"), mw)
d = ImageDraw.Draw(img)

# ---- La figura adulta de espaldas, delante del cerco ----
hx, hy = 620, 150  # cabeza y hombros; el cuerpo baja hasta el suelo
# cabeza
d.ellipse([hx - 30, hy, hx + 30, hy + 60], fill=CAJAO)
# cuello y torso (abrigo salvia)
d.rounded_rectangle([hx - 12, hy + 52, hx + 12, hy + 70], radius=6, fill=CAJAO)
d.polygon([(hx - 78, hy + 240), (hx - 60, hy + 66), (hx + 60, hy + 66), (hx + 78, hy + 240)], fill=SALVIA_OSC)
# brazo derecho extendido hacia el anillo, con el lápiz terracota
d.rounded_rectangle([hx + 50, hy + 92, hx + 118, hy + 116], radius=12, fill=SALVIA_OSC)
d.line([hx + 116, hy + 104, hx + 150, hy + 92], fill=TERRA, width=6)
d.polygon([(hx + 150, hy + 92), (hx + 168, hy + 86), (hx + 150, hy + 100)], fill=TERRA)
# piernas
d.rounded_rectangle([hx - 34, hy + 236, hx - 14, hy + 320], radius=9, fill=CAJAO)
d.rounded_rectangle([hx + 14, hy + 236, hx + 34, hy + 320], radius=9, fill=CAJAO)
# pies
d.ellipse([hx - 44, hy + 318, hx - 6, hy + 336], fill=CAJAO)
d.ellipse([hx + 6, hy + 318, hx + 44, hy + 336], fill=CAJAO)

# ---- Sombra suave de la figura en el suelo ----
sh = Image.new("RGBA", (W, H), (0, 0, 0, 0))
sd = ImageDraw.Draw(sh)
sd.ellipse([hx - 110, hy + 350, hx + 110, hy + 400], fill=(120, 90, 60, 60))
sh = sh.filter(ImageFilter.GaussianBlur(14))
img = Image.alpha_composite(img, sh)
d = ImageDraw.Draw(img)

# ---- Luz dorada lateral desde la izquierda ----
light = Image.new("RGBA", (W, H), (0, 0, 0, 0))
ld = ImageDraw.Draw(light)
ld.polygon([(0, 40), (480, 40), (760, H), (60, H)], fill=(240, 205, 160, 40))
img = Image.alpha_composite(img.convert("RGBA"), light).convert("RGB")
d = ImageDraw.Draw(img)

# ---- Grano sutil para textura editorial ----
noise = Image.effect_noise((W, H), 18).convert("L")
noise_rgb = Image.merge("RGB", (noise, noise, noise))
img = Image.blend(img, noise_rgb, 0.04)

# ---- Viñeta cálida muy suave ----
vign = Image.new("L", (W, H), 0)
vd = ImageDraw.Draw(vign)
vd.ellipse([-200, -150, W + 200, H + 150], fill=255)
vign = vign.filter(ImageFilter.GaussianBlur(80))
warm = Image.new("RGB", (W, H), (246, 224, 200))
img = Image.composite(img, warm, vign)

img.save("public/blog/vida-se-hace-pequena-evitacion.png", optimize=True)
img.save("public/blog/vida-se-hace-pequena-evitacion.webp", "WEBP", quality=82, method=6)
print("OK: ilustracion generada 1200x675 -> public/blog/vida-se-hace-pequena-evitacion.{png,webp}")