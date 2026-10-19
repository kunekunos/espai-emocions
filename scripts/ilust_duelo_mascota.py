# -*- coding: utf-8 -*-
"""Ilustración editorial estilo Espai Emocions: 'El duelo por una mascota'.

Composición única para este artículo (no reutiliza layouts previos):
bodegón interior del rincón de la ausencia, sin figuras humanas ni animales.
Un rincón cálido de casa a última hora de la tarde: la manta salvia doblada
donde dormía, el cuenco vacío con la luz rozándolo, el collar terracota
descansando sobre la manta — el vínculo que no se guarda en un cajón. A la
izquierda, una ventana alta deja entrar un haz dorado suave que ilumina
justo el rincón: la ausencia tiene su lugar en la casa. En la pared, dos
marcos pequeños: uno con una forma orgánica única (la huella que deja un
vínculo, abstracta, sin clipart), otro con una línea de horizonte. A la
derecha, un perchero de madera con la correa colgada: la rutina en pausa.
Planta de salvia en maceta terracota. Paleta terracota/crema/salvia, luz
dorada baja, 1200x675 (16:9), estilo plano con grano sutil, sin texto.
"""
from PIL import Image, ImageDraw, ImageFilter

W, H = 1200, 675

CREMA = (244, 232, 222)
BLANCO = (255, 249, 243)
ARENA = (225, 210, 198)
ARENA_OSC = (208, 190, 175)
TERRA = (164, 81, 28)
TERRA_LUZ = (198, 108, 60)
TERRA_OSC = (140, 66, 24)
SALVIA = (123, 136, 114)
SALVIA_OSC = (95, 107, 88)
SALVIA_SUAVE = (176, 184, 168)
CAJAO = (48, 37, 31)
MADERA = (160, 120, 92)
MADERA_OSC = (128, 94, 70)
LUZ_EXTERIOR = (230, 222, 199)
LUZ_EXTERIOR2 = (213, 214, 196)

img = Image.new("RGB", (W, H), CREMA)
d = ImageDraw.Draw(img)

# ---- Pared crema cálida y zócalo ----
d.rectangle([0, 0, W, 470], fill=(238, 224, 211))
d.rectangle([0, 454, W, 470], fill=ARENA)          # zócalo
# suelo de madera cálida en diagonal suave
d.rectangle([0, 470, W, H], fill=(214, 194, 174))
for x in range(-80, W + 80, 92):
    d.line([(x, 470), (x + 52, H)], fill=(198, 178, 158), width=2)
d.line([(0, 560), (W, 560)], fill=(204, 186, 166), width=1)

# ---- Ventana alta a la izquierda con luz dorada ----
d.rounded_rectangle([74, 78, 246, 330], 8, fill=MADERA_OSC)
d.rectangle([86, 90, 234, 318], fill=LUZ_EXTERIOR)
d.rectangle([156, 90, 164, 318], fill=MADERA_OSC)   # cruz vertical
d.rectangle([86, 198, 234, 206], fill=MADERA_OSC)   # cruz horizontal
# colinas suaves al exterior
d.ellipse([30, 260, 260, 420], fill=LUZ_EXTERIOR2)
d.ellipse([150, 280, 360, 460], fill=(203, 207, 189))
# alféizar
d.rectangle([62, 330, 258, 340], fill=MADERA)
# maceta pequeña en el alféizar, con salvia
d.polygon([(92, 300), (136, 300), (130, 330), (98, 330)], fill=TERRA_LUZ)
d.polygon([(100, 302), (114, 258), (130, 302)], fill=SALVIA_SUAVE)
d.polygon([(112, 302), (122, 262), (134, 302)], fill=SALVIA)

# ---- Marcos en la pared: huella abstracta y horizonte ----
d.rounded_rectangle([700, 96, 810, 196], 8, fill=MADERA_OSC)
d.rectangle([710, 106, 800, 186], fill=BLANCO)
mini = Image.new("RGBA", (W, H), (0, 0, 0, 0))
md = ImageDraw.Draw(mini)
# huella abstracta: forma orgánica única terracota (el lugar que alguien dejó)
md.ellipse([736, 130, 766, 158], fill=TERRA_LUZ + (255,))
md.ellipse([756, 146, 780, 168], fill=SALVIA + (140,))
img = Image.alpha_composite(img.convert("RGBA"), mini).convert("RGB")
d = ImageDraw.Draw(img)
d.rounded_rectangle([836, 110, 926, 186], 8, fill=MADERA_OSC)
d.rectangle([844, 118, 918, 178], fill=BLANCO)
d.line([(852, 150), (910, 150)], fill=ARENA_OSC, width=3)   # horizonte
d.line([(870, 150), (884, 134)], fill=TERRA_LUZ, width=3)  # pequeño trazo vivo

# ---- Perchero de madera con la correa colgada (derecha) ----
d.rectangle([1066, 180, 1078, 470], fill=MADERA_OSC)         # poste
d.rounded_rectangle([1028, 168, 1116, 182], 6, fill=MADERA)  # brazo
d.rounded_rectangle([1030, 174, 1116, 180], 3, fill=MADERA_OSC)
# correa: banda salvia colgada con arco
d.arc([1046, 176, 1094, 262], 180, 360, fill=SALVIA_OSC, width=8)
d.line([(1046, 218), (1046, 290)], fill=SALVIA_OSC, width=7)
d.line([(1094, 218), (1094, 290)], fill=SALVIA_OSC, width=7)
d.rounded_rectangle([1036, 286, 1060, 310], 5, fill=SALVIA)   # broche
d.rounded_rectangle([1082, 286, 1106, 310], 5, fill=SALVIA)
# sombra del perchero en la pared
sh = Image.new("RGBA", (W, H), (0, 0, 0, 0))
sd = ImageDraw.Draw(sh)
sd.rounded_rectangle([1078, 200, 1110, 460], 8, fill=(150, 120, 96, 60))
img = Image.alpha_composite(img.convert("RGBA"), sh).convert("RGB")
d = ImageDraw.Draw(img)

# ---- El rincón: manta salvia doblada (el lugar donde dormía) ----
# sombra elíptica suave en el suelo
sh2 = Image.new("RGBA", (W, H), (0, 0, 0, 0))
s2 = ImageDraw.Draw(sh2)
s2.ellipse([430, 440, 800, 560], fill=(120, 90, 70, 70))
img = Image.alpha_composite(img.convert("RGBA"), sh2).convert("RGB")
d = ImageDraw.Draw(img)
# manta: apilado de capas dobladas
d.rounded_rectangle([470, 432, 760, 456], 12, fill=SALVIA)
d.rounded_rectangle([482, 444, 748, 468], 12, fill=SALVIA_SUAVE)
d.rounded_rectangle([494, 456, 736, 478], 12, fill=(150, 160, 138))
# pliegues suaves
d.line([(520, 438), (516, 462), (520, 472)], fill=SALVIA_OSC, width=2)
d.line([(700, 438), (704, 462), (700, 472)], fill=SALVIA_OSC, width=2)

# ---- El collar sobre la manta ----
mini2 = Image.new("RGBA", (W, H), (0, 0, 0, 0))
m2 = ImageDraw.Draw(mini2)
m2.arc([560, 420, 660, 500], 150, 430, fill=TERRA + (255,), width=10)
m2.ellipse([596, 490, 616, 508], fill=TERRA_LUZ + (255,))   # placa
img = Image.alpha_composite(img.convert("RGBA"), mini2).convert("RGB")
d = ImageDraw.Draw(img)

# ---- El cuenco vacío, con la luz rozándolo ----
d.rounded_rectangle([318, 470, 402, 542], 14, fill=TERRA)      # cuenco
d.ellipse([322, 464, 398, 486], fill=TERRA_OSC)                # borde
d.ellipse([330, 468, 390, 482], fill=(236, 222, 209))          # interior vacío
# reflejo de luz en el borde interior
d.arc([334, 468, 386, 480], 200, 320, fill=(248, 236, 218), width=3)
# sombra en el suelo bajo el cuenco
sh3 = Image.new("RGBA", (W, H), (0, 0, 0, 0))
s3 = ImageDraw.Draw(sh3)
s3.ellipse([300, 536, 420, 572], fill=(120, 90, 70, 80))
img = Image.alpha_composite(img.convert("RGBA"), sh3).convert("RGB")
d = ImageDraw.Draw(img)

# ---- Planta de salvia grande en maceta terracota (izquierda del rincón) ----
d.polygon([(250, 470), (330, 470), (318, 532), (262, 532)], fill=TERRA_LUZ)
d.rectangle([244, 462, 336, 472], fill=TERRA_OSC)
d.polygon([(256, 466), (282, 372), (312, 466)], fill=SALVIA)
d.polygon([(286, 466), (312, 356), (342, 466)], fill=SALVIA_OSC)
d.polygon([(232, 468), (258, 388), (286, 468)], fill=SALVIA_SUAVE)

# ---- Haz de luz dorada desde la ventana hacia el rincón ----
light = Image.new("RGBA", (W, H), (0, 0, 0, 0))
ld = ImageDraw.Draw(light)
ld.polygon([(100, 100), (246, 100), (820, 640), (420, 640)], fill=(244, 214, 158, 42))
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

img.save("public/blog/duelo-por-una-mascota.png", optimize=True)
img.save("public/blog/duelo-por-una-mascota.webp", "WEBP", quality=82, method=6)
print("OK: ilustración generada 1200x675 -> public/blog/duelo-por-una-mascota.{png,webp}")