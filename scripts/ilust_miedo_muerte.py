# -*- coding: utf-8 -*-
"""Ilustración editorial estilo Espai Emocions: 'Miedo a la muerte en la edad adulta'.

Composición única para este artículo (no reutiliza layouts previos):
escena exterior al anochecer, la primera vez que este lote sale de la casa.
Cielo de crepúsculo cálido que se oscurece hacia arriba (de dorado a salvia
profunda), media luna crema y estrellas pequeñas. Tres colinas suaves en
capas: horizonte iluminado (terracota luz), colina media (salvia) y colina
frontal (salvia oscura). Sobre la colina frontal, una figura adulta de
espaldas —abrigo cacao, bufanda terracota al viento— sostiene un pequeño
farol encendido cuyo halo dorado le rodea la mano: lo que se sostiene con
cuidado, no lo que apaga la oscuridad. A sus pies llega un camino claro que
serpentea desde el primer plano: la historia recorrida. Ninguna tumba,
ningún reloj de arena, nada lúgubre: la finitud como horizonte que da
dirección. Paleta terracota/crema/salvia, 1200x675 (16:9), estilo plano con
grano sutil, sin texto.
"""
from PIL import Image, ImageDraw, ImageFilter

W, H = 1200, 675

CREMA = (244, 232, 222)
BLANCO = (255, 249, 243)
ARENA = (225, 210, 198)
TERRA = (164, 81, 28)
TERRA_LUZ = (198, 108, 60)
TERRA_SUAVE = (222, 160, 118)
SALVIA = (123, 136, 114)
SALVIA_OSC = (95, 107, 88)
SALVIA_PROFUNDA = (70, 82, 68)
BOSQUE = (53, 67, 54)
CAJAO = (48, 37, 31)
DORADO = (240, 205, 160)

img = Image.new("RGB", (W, H), CREMA)
d = ImageDraw.Draw(img)

# ---- Cielo de crepúsculo: de salvia profunda arriba a dorado cálido en el horizonte ----
sky_top = SALVIA_PROFUNDA
sky_bot = (232, 196, 156)
HORIZON = 430
for y in range(HORIZON):
    t = y / HORIZON
    # interpolar en dos tramos para mantener el cálido concentrado abajo
    if t < 0.55:
        tt = t / 0.55
        c = tuple(int(sky_top[i] + ((160, 150, 124)[i] - sky_top[i]) * tt) for i in range(3))
    else:
        tt = (t - 0.55) / 0.45
        c = tuple(int((160, 150, 124)[i] + (sky_bot[i] - (160, 150, 124)[i]) * tt) for i in range(3))
    d.line([(0, y), (W, y)], fill=c)

# ---- Estrellas pequeñas (crema, más densas arriba) ----
import random
random.seed(21)
star = Image.new("RGBA", (W, H), (0, 0, 0, 0))
sd = ImageDraw.Draw(star)
for _ in range(90):
    x = random.randint(10, W - 10)
    y = random.randint(8, 300)
    r = random.choice([1, 1, 1, 2])
    a = int(200 * (1 - y / 340)) + 30
    sd.ellipse([x - r, y - r, x + r, y + r], fill=(255, 249, 243, min(a, 220)))
img = Image.alpha_composite(img.convert("RGBA"), star).convert("RGB")
d = ImageDraw.Draw(img)

# ---- Media luna crema arriba a la derecha ----
mx, my, mr = 1010, 120, 46
d.ellipse([mx - mr, my - mr, mx + mr, my + mr], fill=BLANCO)
# recorte con círculo del color del cielo en ese punto
sky_at = tuple(int(sky_top[i] + ((160, 150, 124)[i] - sky_top[i]) * (my / HORIZON / 0.55)) for i in range(3)) if my / HORIZON <= 0.55 * HORIZON else sky_bot
off = 18
d.ellipse([mx - mr + off, my - mr - 8, mx + mr + off, my + mr - 8], fill=sky_at)

# ---- Colinas en capas ----
# horizonte iluminado (colina lejana, terracota suave con luz)
d.ellipse([-260, 350, 700, 620], fill=(198, 140, 100))
d.ellipse([520, 368, 1460, 640], fill=(186, 128, 90))
# banda de horizonte dorado justo al tocar
d.rectangle([0, 402, W, 430], fill=TERRA_SUAVE)
# colina media (salvia)
d.ellipse([-300, 392, 640, 700], fill=(150, 160, 138))
d.ellipse([600, 406, 1500, 720], fill=(138, 150, 128))
# colina frontal (salvia oscura)
d.ellipse([-380, 418, 720, 860], fill=SALVIA_OSC)
d.ellipse([680, 436, 1560, 900], fill=(102, 114, 95))

# ---- Sendero claro que serpentea desde el primer plano hasta la figura ----
path = Image.new("RGBA", (W, H), (0, 0, 0, 0))
pd = ImageDraw.Draw(path)
# línea quebrada suave: la historia recorrida
pts = [(60, 640), (180, 590), (300, 618), (400, 560), (520, 585), (610, 520), (640, 500)]
for i in range(len(pts) - 1):
    pd.line([pts[i], pts[i + 1]], fill=(226, 210, 190, 235), width=14)
# suavizar el trazo
path = path.filter(ImageFilter.GaussianBlur(2.5))
img = Image.alpha_composite(img.convert("RGBA"), path).convert("RGB")
d = ImageDraw.Draw(img)
# matas de hierba salvia junto al sendero
for (gx, gy) in [(120, 622), (250, 606), (360, 586), (470, 574), (575, 528)]:
    for k in (-1, 0, 1):
        d.line([(gx + k * 5, gy), (gx + k * 9, gy - 14 - abs(k) * 2)], fill=(88, 100, 82), width=3)

# ---- Figura adulta de espaldas sobre la cresta ----
FX, FY = 660, 468  # pies
# sombra suave bajo los pies
sh = Image.new("RGBA", (W, H), (0, 0, 0, 0))
shd = ImageDraw.Draw(sh)
shd.ellipse([FX - 34, FY - 10, FX + 34, FY + 8], fill=(40, 50, 40, 90))
img = Image.alpha_composite(img.convert("RGBA"), sh).convert("RGB")
d = ImageDraw.Draw(img)
# piernas (pantalón oscuro)
d.rounded_rectangle([FX - 14, FY - 56, FX - 2, FY], 4, fill=(58, 46, 40))
d.rounded_rectangle([FX + 2, FY - 56, FX + 14, FY], 4, fill=(58, 46, 40))
# abrigo (cacao cálido, largo)
d.rounded_rectangle([FX - 26, FY - 148, FX + 26, FY - 40], 12, fill=CAJAO)
# costado del abrigo con luz de horizonte
d.line([(FX - 26, FY - 140), (FX - 26, FY - 46)], fill=(96, 66, 48), width=5)
# cabeza
d.ellipse([FX - 12, FY - 176, FX + 12, FY - 152], fill=(70, 54, 45))
# pelo corto (adulto, neutro en género)
d.pies = None
d.chord([FX - 12, FY - 176, FX + 12, FY - 152], 180, 360, fill=(52, 40, 34))
# bufanda terracota, con extremo al viento hacia la izquierda (viento del horizonte)
d.rounded_rectangle([FX - 14, FY - 158, FX + 14, FY - 146], 5, fill=TERRA)
d.polygon([(FX - 12, FY - 152), (FX - 44, FY - 138), (FX - 12, FY - 140)], fill=TERRA_LUZ)
d.polygon([(FX - 40, FY - 142), (FX - 66, FY - 130), (FX - 36, FY - 134)], fill=TERRA)
# brazo derecho extendido hacia adelante, con el farol
d.rounded_rectangle([FX + 20, FY - 128, FX + 52, FY - 116], 6, fill=(58, 46, 40))

# ---- Farol pequeño encendido ----
LX, LY = FX + 68, FY - 122
# halo dorado
halo = Image.new("RGBA", (W, H), (0, 0, 0, 0))
hd = ImageDraw.Draw(halo)
hd.ellipse([LX - 60, LY - 60, LX + 60, LY + 60], fill=(244, 214, 158, 70))
hd.ellipse([LX - 34, LY - 34, LX + 34, LY + 34], fill=(244, 214, 158, 90))
halo = halo.filter(ImageFilter.GaussianBlur(12))
img = Image.alpha_composite(img.convert("RGBA"), halo).convert("RGB")
d = ImageDraw.Draw(img)
# asa
d.arc([LX - 8, LY - 24, LX + 8, LY - 6], 180, 360, fill=(120, 84, 56), width=3)
# cuerpo del farol
d.polygon([(LX - 9, LY - 8), (LX + 9, LY - 8), (LX + 7, LY + 12), (LX - 7, LY + 12)], fill=(214, 174, 128))
d.rectangle([LX - 10, LY - 10, LX + 10, LY - 7], fill=(120, 84, 56))
d.rectangle([LX - 8, LY + 10, LX + 8, LY + 13], fill=(120, 84, 56))
# llama
d.ellipse([LX - 4, LY - 4, LX + 4, LY + 8], fill=(255, 236, 190))
d.ellipse([LX - 2, LY, LX + 2, LY + 6], fill=(255, 250, 226))

# ---- Aves lejanas en el horizonte dorado ----
for (ax, ay) in [(760, 300), (792, 312), (826, 296)]:
    d.arc([ax - 9, ay - 5, ax + 9, ay + 6], 200, 340, fill=(120, 92, 66), width=2)

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

img.save("public/blog/miedo-a-la-muerte-edad-adulta.png", optimize=True)
img.save("public/blog/miedo-a-la-muerte-edad-adulta.webp", "WEBP", quality=82, method=6)
print("OK: ilustración generada 1200x675 -> public/blog/miedo-a-la-muerte-edad-adulta.{png,webp}")