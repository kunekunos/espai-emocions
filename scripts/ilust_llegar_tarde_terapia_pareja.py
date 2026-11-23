# -*- coding: utf-8 -*-
"""Ilustración editorial estilo Espai Emocions: '¿Es demasiado tarde para
empezar terapia de pareja?'. Composición única para este artículo: dos figuras
adultas de espaldas caminan juntas por un pasillo cálido hacia una puerta
abierta con luz dorada (ella va medio paso por delante; él duda, con la mano a
medio alzar). En primer plano, una consola de madera con un gran reloj de arena
cuya arena todavía cae: aún hay tiempo, se está usando. Planta de salvia junto
a la puerta. Paleta terracota/crema/salvia, formas planas, grano sutil,
1200x675 (16:9), sin texto. (GPT-Image-2 no disponible hoy: 429; pipeline PIL
de la casa como en ilust_*.py anteriores.)"""
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
MADERA_OSC = (128, 94, 70)
DORADO = (238, 190, 140)
LUZ = (244, 206, 158)

img = Image.new("RGB", (W, H), BLANCO)
d = ImageDraw.Draw(img)

# ---- Fondo: pared crema cálida con zócalo y suelo ----
d.rectangle([0, 0, W, 470], fill=(240, 228, 214))
d.rectangle([0, 456, W, 470], fill=ARENA)
d.rectangle([0, 470, W, H], fill=(228, 212, 197))
# tablones del suelo (líneas suaves horizontales)
for i, yy in enumerate((505, 545, 590, 640)):
    d.line([(0, yy), (W, yy)], fill=(214, 197, 181), width=2)

# ---- Resplandor dorado en la pared alrededor de la puerta ----
glow = Image.new("RGBA", (W, H), (0, 0, 0, 0))
gd = ImageDraw.Draw(glow)
gd.ellipse([800, 40, 1120, 620], fill=(240, 205, 160, 70))
glow = glow.filter(ImageFilter.GaussianBlur(60))
img = Image.alpha_composite(img.convert("RGBA"), glow)
d = ImageDraw.Draw(img)

# ---- Puerta abierta a la derecha ----
DX0, DX1, DY0, DY1 = 880, 1040, 120, 560
# hueco con luz dorada
d.rectangle([DX0 + 12, DY0 + 12, DX1 - 12, 470], fill=LUZ)
# degradado vertical suave dentro del hueco (más claro arriba)
for k in range(40):
    a = int(255 * (1 - k / 40) * 0.22)
    ov = Image.new("RGBA", (W, H), (0, 0, 0, 0))
    od = ImageDraw.Draw(ov)
    od.rectangle([DX0 + 12, DY0 + 12 + k * 8, DX1 - 12, DY0 + 20 + k * 8], fill=(255, 244, 220, a))
    img = Image.alpha_composite(img.convert("RGBA"), ov)
d = ImageDraw.Draw(img)
# marco terracota
d.rectangle([DX0, DY0, DX1, 470], outline=TERRA, width=14)
# quicio / sombra interior del marco
d.line([(DX0 + 12, DY0 + 12), (DX0 + 12, 470)], fill=TERRA_LUZ, width=5)
# charco de luz en el suelo, saliendo de la puerta hacia las figuras
pool = Image.new("RGBA", (W, H), (0, 0, 0, 0))
pd = ImageDraw.Draw(pool)
pd.polygon([(DX0 + 14, 470), (DX1 - 14, 470), (770, 648), (610, 648)], fill=(243, 216, 178, 120))
pool = pool.filter(ImageFilter.GaussianBlur(18))
img = Image.alpha_composite(img.convert("RGBA"), pool)
d = ImageDraw.Draw(img)

# ---- Planta de salvia junto a la puerta ----
px = 812
# hojas (elipses radiales)
for ang, ln, col in ((-70, 62, SALVIA), (-30, 78, SALVIA_OSC), (-8, 88, SALVIA),
                     (20, 76, SALVIA_OSC), (55, 60, SALVIA_SUAVE)):
    ex = px + ln * math.cos(math.radians(ang + 90)) * 0.35
    ey = 512 - ln * math.sin(math.radians(ang + 90))
    d.ellipse([ex - 14, ey - ln, ex + 14, ey + 8], fill=col)
# tallo
d.line([(px, 528), (px, 496)], fill=SALVIA_OSC, width=5)
# maceta terracota
d.polygon([(px - 34, 528), (px + 34, 528), (px + 26, 578), (px - 26, 578)], fill=TERRA)
d.rounded_rectangle([px - 38, 518, px + 38, 534], radius=6, fill=TERRA_LUZ)

# ---- Sombras suaves en el suelo ----
sh = Image.new("RGBA", (W, H), (0, 0, 0, 0))
sd = ImageDraw.Draw(sh)
sd.ellipse([420, 596, 560, 632], fill=(120, 90, 60, 55))   # hombre
sd.ellipse([540, 596, 692, 632], fill=(120, 90, 60, 55))    # mujer
sd.ellipse([110, 598, 396, 648], fill=(120, 90, 60, 60))    # consola
sd.ellipse([760, 560, 886, 596], fill=(120, 90, 60, 40))    # maceta
sh = sh.filter(ImageFilter.GaussianBlur(10))
img = Image.alpha_composite(img.convert("RGBA"), sh)
d = ImageDraw.Draw(img)

# ---- Consola de madera en primer plano (izquierda) ----
d.rounded_rectangle([128, 484, 372, 502], radius=8, fill=MADERA)          # tablero
d.rounded_rectangle([150, 502, 168, 608], radius=6, fill=MADERA_OSC)     # pata
d.rounded_rectangle([332, 502, 350, 608], radius=6, fill=MADERA_OSC)    # pata
d.rounded_rectangle([176, 552, 324, 562], radius=5, fill=MADERA_OSC)     # travesaño

# ---- El reloj de arena sobre la consola: la arena todavía cae ----
hx = 250
# tapas de madera
d.rounded_rectangle([hx - 46, 318, hx + 46, 332], radius=7, fill=MADERA)
d.rounded_rectangle([hx - 46, 470, hx + 46, 484], radius=7, fill=MADERA)
# vidrio (bulbos)
glass_top = [(hx - 40, 336), (hx - 54, 372), (hx - 10, 402), (hx + 10, 402), (hx + 54, 372), (hx + 40, 336)]
glass_bot = [(hx - 54, 444), (hx - 40, 470), (hx + 40, 470), (hx + 54, 444), (hx + 10, 416), (hx - 10, 416)]
d.polygon(glass_top, fill=(250, 244, 234), outline=(196, 176, 158))
d.polygon(glass_bot, fill=(250, 244, 234), outline=(196, 176, 158))
d.rectangle([hx - 8, 398, hx + 8, 420], fill=(250, 244, 234))
# arena en el bulbo superior (menos de la mitad)
d.polygon([(hx - 26, 366), (hx - 9, 398), (hx + 9, 398), (hx + 26, 366)], fill=TERRA_LUZ)
# chorro fino que todavía cae
d.line([(hx, 400), (hx, 448)], fill=TERRA_LUZ, width=3)
# montículo en el bulbo inferior (más de la mitad)
d.polygon([(hx - 32, 468), (hx - 22, 448), (hx, 442), (hx + 22, 448), (hx + 32, 468)], fill=TERRA)
d.polygon([(hx - 34, 468), (hx + 34, 468), (hx + 40, 470), (hx - 40, 470)], fill=TERRA_LUZ)
# brillo lateral del vidrio
d.line([(hx - 46, 350), (hx - 30, 380)], fill=(255, 255, 255), width=3)
d.line([(hx + 44, 444), (hx + 30, 462)], fill=(255, 255, 255), width=3)

# ---- Las dos figuras de espaldas, caminando hacia la puerta ----
# ELLA (adelante, medio paso por delante; abrigo terracota)
ex = 616
d.ellipse([ex - 22, 414, ex + 22, 456], fill=CAJAO)                      # cabeza
d.ellipse([ex - 16, 400, ex + 16, 424], fill=CAJAO)                      # moño
d.polygon([(ex - 34, 460), (ex + 34, 460), (ex + 48, 566), (ex - 48, 566)], fill=TERRA)   # abrigo
d.rounded_rectangle([ex - 30, 470, ex - 10, 520], radius=8, fill=TERRA_LUZ)               # brazo
d.rounded_rectangle([ex + 10, 470, ex + 30, 520], radius=8, fill=TERRA_LUZ)              # brazo
d.rounded_rectangle([ex - 2, 560, ex + 14, 604], radius=7, fill=CAJAO)                    # pierna adelantada
d.rounded_rectangle([ex - 26, 558, ex - 12, 596], radius=7, fill=CAJAO)                   # pierna atrás (paso)
d.ellipse([ex - 4, 600, ex + 20, 612], fill=CAJAO)                                        # zapato
d.ellipse([ex - 34, 592, ex - 10, 606], fill=CAJAO)                                       # zapato atrás

# ÉL (medio paso detrás, duda: mano a medio alzar; jersey salvia)
mx = 478
d.ellipse([mx - 24, 392, mx + 24, 438], fill=CAJAO)                      # cabeza
d.polygon([(mx - 38, 444), (mx + 38, 444), (mx + 52, 556), (mx - 52, 556)], fill=SALVIA_OSC)  # jersey
# brazo derecho a medio alzar hacia ella
d.rounded_rectangle([mx + 42, 452, mx + 76, 470], radius=9, fill=SALVIA_OSC)
d.ellipse([mx + 70, 444, mx + 88, 462], fill=CAJAO)                       # mano abierta
d.rounded_rectangle([mx - 40, 462, mx - 22, 516], radius=8, fill=SALVIA)   # brazo izquierdo
d.rounded_rectangle([mx - 24, 550, mx - 8, 604], radius=7, fill=CAJAO)    # pierna
d.rounded_rectangle([mx + 8, 550, mx + 24, 604], radius=7, fill=CAJAO)    # pierna
d.ellipse([mx - 30, 600, mx - 4, 612], fill=CAJAO)                        # zapato
d.ellipse([mx + 2, 600, mx + 28, 612], fill=CAJAO)                        # zapato

# ---- Luz dorada lateral desde la puerta ----
light = Image.new("RGBA", (W, H), (0, 0, 0, 0))
ld = ImageDraw.Draw(light)
ld.polygon([(880, 80), (1200, 80), (1200, 675), (700, 675)], fill=(240, 205, 160, 38))
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

img.save("public/blog/llegar-tarde-terapia-de-pareja.png", optimize=True)
img.save("public/blog/llegar-tarde-terapia-de-pareja.webp", "WEBP", quality=82, method=6)
print("OK: ilustracion generada 1200x675 -> public/blog/llegar-tarde-terapia-de-pareja.{png,webp}")
