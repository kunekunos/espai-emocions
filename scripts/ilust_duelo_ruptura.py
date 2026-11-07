# -*- coding: utf-8 -*-
"""Ilustración editorial estilo Espai Emocions: 'El dol d'una ruptura de parella'.

Composición única para este artículo (no reutiliza layouts previos): primera
escena de la serie centrada en UN REBEDOR (la entrada de un piso de Barcelona,
a media mañana). Narrativa visual de la casa que se vacía por partes: a la
izquierda, una consola de madera con un bol pequeño donde queda UN SOLO
llavero (terracota). En la pared derecha, una riel con dos percheros: uno
sostiene un abrigo salvia; el otro está VACÍO y en la pared queda la marca
pálida, más limpia, del abrigo que colgó años. En el centro, una puerta cerrada
(de color cacao con vidrio esmerilado crema) y en el suelo una caja de cartón
abierta a medio hacer, con libros y una taza dentro. A la derecha, una figura
adulta neutra en género (jersei terracota, pantalón cacao) sentada en una
banqueta, de espaldas, atándose los zapatos: a punto de salir de la casa que
se acaba de quedar a medias. Luz cálida diagonal de mañana, catifa fina bajo
la caja. Paleta terracota/crema/salvia, 1200x675 (16:9), flat con grano
sutil, sin texto.
"""
from PIL import Image, ImageDraw, ImageFilter
import math

W, H = 1200, 675

CREMA = (244, 232, 222)
CREMA_CLARO = (252, 244, 235)
BLANCO = (255, 249, 243)
TERRA = (164, 81, 28)
TERRA_OSC = (140, 66, 22)
TERRA_LUZ = (198, 108, 60)
TERRA_SUAVE = (222, 160, 118)
SALVIA = (123, 136, 114)
SALVIA_CLARA = (196, 202, 186)
SALVIA_OSC = (95, 107, 88)
CAJAO = (48, 37, 31)
ARENA = (225, 210, 198)
ARENA_OSC = (209, 190, 175)
ARENA_CLARA = (250, 242, 234)
PIEL = (232, 206, 186)
PIEL_OSC = (208, 176, 152)
PELO_OSC = (52, 40, 32)
MADERA = (196, 158, 122)
MADERA_OSC = (150, 108, 70)
MADERA_CLARA = (230, 206, 176)
KRAFT = (214, 190, 158)

img = Image.new("RGB", (W, H), BLANCO)
d = ImageDraw.Draw(img)

# ---- Pared: crema con gradiente muy suave ----
for y in range(0, 442):
    t = y / 442
    c = tuple(int(CREMA_CLARO[i] + (CREMA[i] - CREMA_CLARO[i]) * t) for i in range(3))
    d.line([(0, y), (W, y)], fill=c)

# ---- Suelo: madera clara con listones ----
d.rectangle([0, 442, W, H], fill=MADERA_CLARA)
for x in range(0, W, 160):
    d.line([(x, 442), (x - 60, H)], fill=(214, 188, 158), width=2)
d.rectangle([0, 436, W, 446], fill=ARENA)

# ---- Sombras suaves de suelo ----
sh = Image.new("RGBA", (W, H), (0, 0, 0, 0))
sd = ImageDraw.Draw(sh)
for box in ([(100, 520), (320, 566)], [(600, 628), (920, 668)], [(880, 596), (1150, 636)]):
    sd.ellipse([box[0][0], box[0][1], box[1][0], box[1][1]], fill=(140, 110, 82, 60))
sh = sh.filter(ImageFilter.GaussianBlur(7))
img = Image.alpha_composite(img.convert("RGBA"), sh).convert("RGB")
d = ImageDraw.Draw(img)

# ---- Puerta cerrada (centro-fondo) ----
d.rectangle([424, 164, 594, 446], fill=ARENA_OSC)
d.rectangle([432, 172, 586, 444], fill=MADERA)
d.rectangle([440, 180, 578, 442], fill=CAJAO)
d.rounded_rectangle([452, 192, 566, 336], 8, fill=CREMA_CLARO, outline=ARENA, width=3)
d.line([(509, 192), (509, 336)], fill=ARENA, width=3)
d.line([(452, 262), (566, 262)], fill=ARENA, width=3)
d.ellipse([552, 368, 568, 384], fill=TERRA)

# ---- Consola de madera (izquierda) ----
d.rectangle([84, 352, 312, 368], fill=MADERA)
d.rectangle([96, 368, 110, 512], fill=MADERA_OSC)
d.rectangle([286, 368, 300, 512], fill=MADERA_OSC)
d.rectangle([84, 448, 312, 460], fill=MADERA)

# ---- Bol con UN solo llavero ----
d.ellipse([128, 330, 196, 358], fill=CREMA, outline=ARENA_OSC, width=2)
d.ellipse([140, 318, 168, 346], outline=TERRA, width=4)          # anell del clauer
d.rectangle([146, 336, 152, 352], fill=CAJAO)                    # clau 1
d.rounded_rectangle([156, 330, 161, 350], 3, fill=CAJAO)          # clau 2

# ---- Petita planta en testú terracota ----
d.polygon([(272, 352), (252, 296), (286, 318)], fill=SALVIA)
d.polygon([(272, 352), (296, 292), (292, 322)], fill=SALVIA_OSC)
d.ellipse([248, 300, 272, 324], fill=SALVIA_CLARA)
d.polygon([(268, 330), (254, 352), (282, 352)], fill=SALVIA_CLARA)
d.rectangle([258, 352, 288, 384], fill=TERRA)
d.rectangle([258, 352, 288, 358], fill=TERRA_LUZ)

# ---- Riel con dos percheros ----
d.rectangle([614, 282, 830, 294], fill=MADERA)
d.ellipse([648, 296, 666, 314], fill=CAJAO)   # perxa ocupada
d.ellipse([772, 296, 790, 314], fill=CAJAO)   # perxa buida

# ---- Abrigo salvia colgado en la primera perxa ----
d.rounded_rectangle([616, 308, 694, 452], 22, fill=SALVIA)
d.polygon([(640, 308), (672, 308), (656, 344)], fill=SALVIA_OSC)
d.rounded_rectangle([600, 330, 640, 424], 14, fill=SALVIA_OSC)   # màniga
d.line([(655, 310), (655, 336)], fill=SALVIA_OSC, width=3)        # plec

# ---- Marca pàlida del abrigo que ya no está (percha vacía) ----
mk = Image.new("RGBA", (W, H), (0, 0, 0, 0))
md = ImageDraw.Draw(mk)
md.rounded_rectangle([742, 316, 822, 462], 20, fill=(250, 243, 236, 255))
mk = mk.filter(ImageFilter.GaussianBlur(3))
img = Image.alpha_composite(img.convert("RGBA"), mk).convert("RGB")
d = ImageDraw.Draw(img)

# ---- Catifa de rebost bajo la caja ----
d.rounded_rectangle([452, 596, 672, 662], 10, fill=CREMA, outline=ARENA_OSC, width=2)
d.rectangle([452, 614, 672, 620], fill=TERRA_SUAVE)
d.rectangle([452, 640, 672, 645], fill=TERRA_SUAVE)

# ---- Caja de cartón abierta, a medio hacer ----
d.polygon([(486, 522), (458, 490), (500, 486), (512, 522)], fill=KRAFT, outline=MADERA_OSC)
d.polygon([(612, 522), (646, 488), (604, 486), (594, 522)], fill=KRAFT, outline=MADERA_OSC)
d.rectangle([484, 516, 618, 634], fill=KRAFT, outline=MADERA_OSC, width=3)
d.line([(484, 516), (618, 634)], fill=MADERA_OSC, width=2)
# contingut que asoma: dos libros y una taza
d.rectangle([500, 488, 536, 518], fill=SALVIA, outline=SALVIA_OSC, width=2)
d.rectangle([542, 482, 576, 518], fill=TERRA, outline=TERRA_OSC, width=2)
d.ellipse([556, 494, 592, 526], fill=CREMA, outline=ARENA_OSC, width=2)
# cinta de embalar
d.rectangle([532, 516, 570, 634], fill=(196, 158, 122))

# ---- Banqueta a la derecha ----
d.rectangle([900, 496, 1136, 512], fill=MADERA)
d.rectangle([912, 512, 926, 590], fill=MADERA_OSC)
d.rectangle([1110, 512, 1124, 590], fill=MADERA_OSC)
d.rectangle([900, 496, 1136, 500], fill=MADERA_OSC)

# ---- Figura adulta sentada, de espaldas, atándose el zapato ----
# piernas: muslos hacia delante (izquierda), piernas bajas hacia el suelo
d.rounded_rectangle([856, 480, 946, 528], 14, fill=CAJAO)         # cuixes
d.rectangle([868, 520, 902, 592], fill=CAJAO)                     # cama baixa 1
d.rounded_rectangle([850, 586, 906, 606], 8, fill=TERRA)          # zapato 1
d.rectangle([900, 524, 928, 586], fill=(72, 56, 46))              # cama 2 (més fosca)
d.rounded_rectangle([886, 580, 934, 600], 8, fill=(40, 30, 24))   # zapato 2
# torso: jersei terracota
d.rounded_rectangle([918, 360, 1010, 496], 22, fill=TERRA)
# cabeza de perfil posterior: pelo oscuro, nuca
d.ellipse([936, 296, 1000, 360], fill=PELO_OSC)
d.pieslice([936, 296, 1000, 360], 20, 160, fill=PELO_OSC)
d.rectangle([958, 352, 978, 366], fill=PIEL)                      # clatell
# brazo derecho hacia el zapato
d.line([(966, 402), (902, 552)], fill=TERRA, width=16)
d.ellipse([890, 544, 914, 568], fill=PIEL_OSC)                    # mà al zapato
# pequeño detalle: capucha del jersei
d.arc([940, 344, 1000, 396], 180, 360, fill=TERRA_OSC, width=4)

# ---- Luz cálida diagonal de mañana ----
lu = Image.new("RGBA", (W, H), (0, 0, 0, 0))
ldd = ImageDraw.Draw(lu)
ldd.polygon([(760, 60), (900, 60), (1120, 675), (760, 675)], fill=(255, 238, 204, 42))
lu = lu.filter(ImageFilter.GaussianBlur(26))
img = Image.alpha_composite(img.convert("RGBA"), lu).convert("RGB")
d = ImageDraw.Draw(img)

# ---- Grano sutil ----
noise = Image.effect_noise((W, H), 12).convert("L")
img = Image.composite(Image.blend(img, Image.new("RGB", (W, H), BLANCO), 0.05), img, noise)

img = img.filter(ImageFilter.SMOOTH)
img.save("public/blog/duelo-ruptura-de-pareja.png")
img.save("public/blog/duelo-ruptura-de-pareja.webp", "WEBP", quality=88, method=6)
print("OK: duelo-ruptura-de-pareja.png/.webp guardados", img.size)
