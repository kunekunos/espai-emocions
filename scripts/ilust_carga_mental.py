# -*- coding: utf-8 -*-
"""Ilustración editorial estilo Espai Emocions: 'La carga mental en la pareja'.

Composición única para este artículo (no reutiliza layouts previos):
escena de interior cálido al atardecer centrada en el mapa mental invisible.
A la izquierda, una figura adulta sentada en un sillón salvia sostiene con la
mirada una gran hoja flotante de papel crema donde se dibuja el mapa de la
casa: pequeñas ventanas, notas, un calendario abstracto y trazos orgánicos
que organizan la vida — el trabajo de pensar que nadie ve. La hoja flota
sobre un atril invisible, sin sostenerla con las manos: la carga mental se
lleva con la cabeza, no con las manos. A la derecha, la otra figura adulta
está de pie junto a una mesa auxiliar, en actitud de ofrecerse: una mano
extendida hacia el mapa. Sobre la mesa, dos tazas y un cuenco pequeño con
plantas de salvia. Detrás, una ventana alta con luz dorada baja que entra en
diagonal e ilumina justo la hoja del mapa. En la pared, un pequeño reloj
suave (el tiempo que se administra). Paleta terracota/crema/salvia,
1200x675 (16:9), estilo plano con grano sutil, sin texto legible.
"""
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
MADERA_OSC = (128, 94, 70)
LUZ_EXT = (230, 222, 199)
LUZ_EXT2 = (213, 214, 196)
DORADO = (240, 205, 160)

img = Image.new("RGB", (W, H), CREMA)
d = ImageDraw.Draw(img)

# ---- Pared crema cálida, zócalo y suelo ----
d.rectangle([0, 0, W, 470], fill=(238, 224, 211))
d.rectangle([0, 454, W, 470], fill=ARENA)
d.rectangle([0, 470, W, H], fill=(214, 194, 174))
for x in range(-80, W + 80, 92):
    d.line([(x, 470), (x + 52, H)], fill=(198, 178, 158), width=2)

# ---- Ventana alta al fondo derecha con luz dorada baja ----
d.rounded_rectangle([930, 60, 1120, 320], 8, fill=MADERA_OSC)
d.rectangle([942, 72, 1108, 308], fill=LUZ_EXT)
d.rectangle([1020, 72, 1032, 308], fill=MADERA_OSC)
d.rectangle([942, 180, 1108, 192], fill=MADERA_OSC)
# sol bajo dorado en el cristal
d.ellipse([1040, 200, 1100, 260], fill=DORADO)
# colinas suaves exteriores
d.ellipse([900, 250, 1150, 420], fill=LUZ_EXT2)
# alféizar
d.rectangle([918, 320, 1132, 330], fill=MADERA)

# ---- Reloj suave en la pared (el tiempo que se administra) ----
d.ellipse([700, 96, 788, 184], fill=BLANCO, outline=MADERA_OSC, width=5)
d.line([(744, 122), (744, 140)], fill=CAJAO, width=4)   # minuten
d.line([(744, 140), (768, 152)], fill=TERRA, width=4)   # aguja
d.ellipse([741, 137, 747, 143], fill=CAJAO)

# ---- Sillón salvia (izquierda) con figura sentada ----
sofa_x, sofa_y = 120, 400
d.rounded_rectangle([sofa_x, sofa_y, sofa_x + 250, sofa_y + 135], 22, fill=SALVIA)
d.rounded_rectangle([sofa_x + 12, sofa_y - 56, sofa_x + 238, sofa_y + 26], 16, fill=(136, 150, 126))
d.rounded_rectangle([sofa_x - 16, sofa_y + 20, sofa_x + 266, sofa_y + 146], 18, fill=(110, 123, 101))
d.rounded_rectangle([sofa_x + 160, sofa_y - 16, sofa_x + 226, sofa_y + 36], 12, fill=TERRA_LUZ)

# figura sentada, ligeramente inclinada hacia delante (hacia el mapa)
h1x, h1y = sofa_x + 100, sofa_y - 108
d.ellipse([h1x - 22, h1y - 22, h1x + 22, h1y + 22], fill=TERRA_SUAVE)
d.arc([h1x - 26, h1y - 34, h1x + 20, h1y + 18], 80, 300, fill=(120, 84, 58), width=10)
d.polygon([(h1x - 24, h1y + 16), (h1x + 22, h1y + 16), (h1x + 30, sofa_y - 4), (h1x - 32, sofa_y - 2)], fill=TERRA_SUAVE)
# piernas hacia el suelo
d.rounded_rectangle([h1x - 8, sofa_y + 20, h1x + 12, sofa_y + 96], 8, fill=(120, 84, 58))
d.rounded_rectangle([h1x + 12, sofa_y + 20, h1x + 32, sofa_y + 96], 8, fill=(107, 74, 50))

# ---- La hoja del mapa mental flotando (centro) ----
# sombra suave de la hoja en la pared
sh = Image.new("RGBA", (W, H), (0, 0, 0, 0))
sd = ImageDraw.Draw(sh)
sd.rounded_rectangle([470, 150, 950, 400], 12, fill=(140, 110, 85, 60))
img = Image.alpha_composite(img.convert("RGBA"), sh).convert("RGB")
d = ImageDraw.Draw(img)

# hoja grande crema, ligeramente rotada (dos capas para simular el giro)
map_layer = Image.new("RGBA", (600, 340), (0, 0, 0, 0))
md = ImageDraw.Draw(map_layer)
md.rounded_rectangle([20, 20, 560, 320], 14, fill=BLANCO + (255,), outline=ARENA_OSC + (255,), width=3)
# contenido abstracto del mapa de la casa (no texto legible):
# ventanitas (habitaciones), notas pequeñas, calendario y trazos orgánicos
# fila de "notas" terracota (recordatorios)
for i in range(4):
    nx = 60 + i * 68
    md.rounded_rectangle([nx, 52, nx + 44, 88], 6, fill=TERRA_LUZ + (255,))
    md.line([(nx + 10, 70), (nx + 34, 70)], fill=BLANCO + (255,), width=3)
# calendario abstracto salvia (agenda)
md.rounded_rectangle([350, 52, 520, 132], 8, fill=SALVIA + (255,))
for r in range(2):
    for c in range(4):
        cx, cy = 366 + c * 38, 74 + r * 26
        if (r + c) % 2 == 0:
            md.rounded_rectangle([cx, cy, cx + 26, cy + 16], 4, fill=BLANCO + (255,))
        else:
            md.rounded_rectangle([cx, cy, cx + 26, cy + 16], 4, fill=SALVIA_SUAVE + (255,))
# plano de la casa: trazos orgánicos conectando espacios
md.line([(70, 160), (70, 290)], fill=ARENA_OSC + (255,), width=4)
md.line([(70, 200), (180, 200)], fill=ARENA_OSC + (255,), width=4)
md.arc([130, 180, 230, 280], 200, 340, fill=ARENA_OSC + (255,), width=4)
md.line([(130, 290), (300, 290)], fill=ARENA_OSC + (255,), width=4)
# pequeños círculos marcando lugares (persona, casa, escuela, salud)
md.ellipse([300, 150, 336, 186], outline=TERRA + (255,), width=4)
md.ellipse([380, 210, 416, 246], outline=SALVIA_OSC + (255,), width=4)
md.ellipse([300, 230, 330, 260], outline=TERRA_LUZ + (255,), width=4)
md.line([(320, 180), (398, 228)], fill=TERRA_LUZ + (255,), width=3)
md.line([(320, 245), (398, 228)], fill=SALVIA_OSC + (255,), width=3)
# rutas orgánicas de salvia hacia abajo (trayectos cotidianos)
md.arc([420, 150, 560, 290], 280, 80, fill=SALVIA + (255,), width=4)
md.arc([420, 170, 530, 280], 300, 60, fill=SALVIA_SUAVE + (255,), width=3)
# tres puntos de la lista inferior (lo pendiente)
for i in range(3):
    by = 296 - i * 0
for i in range(3):
    md.ellipse([92 + i * 60, 252, 104 + i * 60, 264], fill=TERRA + (255,))

map_layer = map_layer.rotate(4, expand=False, resample=Image.BICUBIC)
map_canvas = Image.new("RGBA", (W, H), (0, 0, 0, 0))
map_canvas.paste(map_layer, (450, 130), map_layer)
img = Image.alpha_composite(img.convert("RGBA"), map_canvas).convert("RGB")
d = ImageDraw.Draw(img)

# ---- Línea de pensamiento: de la cabeza de la figura a la hoja ----
mini = Image.new("RGBA", (W, H), (0, 0, 0, 0))
mdd = ImageDraw.Draw(mini)
mdd.arc([300, 240, 480, 400], 120, 250, fill=(120, 84, 58, 200), width=4)
mdd.arc([430, 180, 640, 370], 140, 260, fill=(120, 84, 58, 140), width=3)
img = Image.alpha_composite(img.convert("RGBA"), mini).convert("RGB")
d = ImageDraw.Draw(img)

# ---- Mesa auxiliar con dos tazas y cuenco de salvia (derecha) ----
tbl_x, tbl_y = 850, 500
d.rounded_rectangle([tbl_x, tbl_y, tbl_x + 230, tbl_y + 12], 6, fill=MADERA_OSC)
d.rectangle([tbl_x + 18, tbl_y + 12, tbl_x + 30, tbl_y + 72], fill=MADERA_OSC)
d.rectangle([tbl_x + 198, tbl_y + 12, tbl_x + 210, tbl_y + 72], fill=MADERA_OSC)
# taza 1 humeante
cup_x, cup_y = tbl_x + 30, tbl_y - 24
d.rounded_rectangle([cup_x, cup_y - 18, cup_x + 38, cup_y + 4], 7, fill=BLANCO)
d.ellipse([cup_x + 2, cup_y - 22, cup_x + 36, cup_y - 10], fill=(233, 214, 190))
d.arc([cup_x + 34, cup_y - 14, cup_x + 52, cup_y + 4], 270, 90, fill=BLANCO, width=5)
d.arc([cup_x + 6, cup_y - 56, cup_x + 24, cup_y - 30], 90, 270, fill=(210, 190, 175), width=3)
# taza 2 (compañera, salvia)
cup2_x, cup2_y = tbl_x + 130, tbl_y - 24
d.rounded_rectangle([cup2_x, cup2_y - 18, cup2_x + 38, cup2_y + 4], 7, fill=SALVIA_SUAVE)
d.ellipse([cup2_x + 2, cup2_y - 22, cup2_x + 36, cup2_y - 10], fill=(150, 158, 142))
d.arc([cup2_x + 34, cup2_y - 14, cup2_x + 52, cup2_y + 4], 270, 90, fill=SALVIA_SUAVE, width=5)
# cuenco pequeño terracota con salvia
bowl_x = tbl_x + 178
d.polygon([(bowl_x, tbl_y - 6), (bowl_x + 44, tbl_y - 6), (bowl_x + 36, tbl_y + 10), (bowl_x + 8, tbl_y + 10)], fill=TERRA)
d.polygon([(bowl_x + 8, tbl_y - 8), (bowl_x + 22, tbl_y - 44), (bowl_x + 36, tbl_y - 8)], fill=SALVIA)
d.polygon([(bowl_x + 22, tbl_y - 8), (bowl_x + 36, tbl_y - 52), (bowl_x + 50, tbl_y - 8)], fill=SALVIA_OSC)

# ---- Segunda figura adulta de pie, ofreciéndose hacia el mapa ----
h2x, h2y = 880, 330
d.ellipse([h2x - 20, h2y - 20, h2x + 20, h2y + 20], fill=SALVIA_SUAVE)
d.arc([h2x - 22, h2y - 30, h2x + 18, h2y + 16], 80, 300, fill=(140, 100, 72), width=9)
# torso cacao suave
d.polygon([(h2x - 22, h2y + 14), (h2x + 20, h2y + 14), (h2x + 28, h2y + 96), (h2x - 30, h2y + 96)], fill=(94, 76, 62))
# piernas
d.rounded_rectangle([h2x - 16, h2y + 92, h2x - 2, h2y + 170], 7, fill=(94, 76, 62))
d.rounded_rectangle([h2x + 4, h2y + 92, h2x + 18, h2y + 170], 7, fill=(80, 64, 52))
# brazo extendido hacia el mapa (hacia la izquierda, la mano abierta)
d.line([(h2x - 18, h2y + 30), (h2x - 90, h2y + 18)], fill=(94, 76, 62), width=9)
d.ellipse([h2x - 104, h2y + 8, h2x - 82, h2y + 30], fill=(140, 100, 72))
# otro brazo relajado
d.line([(h2x + 18, h2y + 30), (h2x + 34, h2y + 92)], fill=(94, 76, 62), width=9)

# ---- Planta de salvia grande en maceta terracota (extremo derecho) ----
d.polygon([(1100, 470), (1180, 470), (1168, 532), (1112, 532)], fill=TERRA_LUZ)
d.rectangle([1094, 462, 1186, 472], fill=TERRA)
d.polygon([(1106, 466), (1132, 372), (1162, 466)], fill=SALVIA)
d.polygon([(1136, 466), (1162, 356), (1192, 466)], fill=SALVIA_OSC)
d.polygon([(1082, 468), (1108, 388), (1136, 468)], fill=SALVIA_SUAVE)

# ---- Luz dorada en diagonal desde la ventana hacia la hoja ----
light = Image.new("RGBA", (W, H), (0, 0, 0, 0))
ld = ImageDraw.Draw(light)
ld.polygon([(950, 80), (1108, 80), (760, 620), (420, 620)], fill=(244, 214, 158, 40))
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

img.save("public/blog/carga-mental-en-la-pareja.png", optimize=True)
img.save("public/blog/carga-mental-en-la-pareja.webp", "WEBP", quality=82, method=6)
print("OK: ilustración generada 1200x675 -> public/blog/carga-mental-en-la-pareja.{png,webp}")