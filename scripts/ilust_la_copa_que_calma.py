# -*- coding: utf-8 -*-
"""Ilustración editorial estilo Espai Emocions: 'La copa que calma'.

Composición única para este artículo (no reutiliza layouts previos):
escena nocturna de salón donde la ÚNICA fuente de luz es la copa de vino,
que emite un resplandor dorado. Sobre la mesa, una lámpara de techo está
APAGADA (pantalla oscura, sin halo): la luz que debía venir de arriba la
ha sustituido el vaso. A la izquierda, una persiana de madera CERRADA con
l-listones horizontales (la metáfora central del texto: la copa como la
única persiana que baja el día). El reloj de pared marca las 21:00, en
penumbra. Una figura adulta de perfil, con jersey terracota, se inclina
hacia la copa con postura cansada; la luz cálida le toca apenas la cara.
Sobre la mesa, junto al vaso, un libro cerrado con marcador: la
alternativa que espera su turno. Paleta terracota/crema/salvia en modo
noche (salias y cacaos profundos), 1200x675 (16:9), plano con grano
sutil, sin texto.
"""
from PIL import Image, ImageDraw, ImageFilter

W, H = 1200, 675

CREMA = (244, 232, 222)
BLANCO = (255, 249, 243)
TERRA = (164, 81, 28)
TERRA_LUZ = (198, 108, 60)
TERRA_SUAVE = (222, 160, 118)
SALVIA = (123, 136, 114)
SALVIA_CLARA = (196, 202, 186)
SALVIA_OSC = (95, 107, 88)
CAJAO = (48, 37, 31)
DORADO = (240, 205, 160)
MADERA = (150, 108, 70)
MADERA_OSC = (104, 76, 52)
PIEL = (232, 206, 186)
PELO = (52, 40, 32)

# noche
PARED_TOP = (56, 64, 50)
PARED_BOT = (88, 98, 78)
FUSTA = (64, 48, 36)
FUSTA_OSC = (50, 38, 28)

img = Image.new("RGB", (W, H), PARED_TOP)
d = ImageDraw.Draw(img)

# ---- Pared: gradiente vertical salvia nocturna ----
for y in range(0, 545):
    t = y / 545
    c = tuple(int(PARED_TOP[i] + (PARED_BOT[i] - PARED_TOP[i]) * t) for i in range(3))
    d.line([(0, y), (W, y)], fill=c)

# rodapié
d.rectangle([0, 533, W, 545], fill=(70, 62, 50))
d.line([(0, 533), (W, 533)], fill=(52, 46, 36), width=3)

# ---- Suelo de tablones oscuros ----
d.rectangle([0, 545, W, H], fill=FUSTA)
for k in range(10):
    x0 = 30 + k * 140
    d.line([(x0, 545), (x0 - 46, H)], fill=FUSTA_OSC, width=2)
d.line([(0, 545), (W, 545)], fill=(44, 34, 26), width=4)

# sombra suelo cerca de pared
sh_f = Image.new("RGBA", (W, H), (0, 0, 0, 0))
sfd = ImageDraw.Draw(sh_f)
sfd.rectangle([0, 545, W, 570], fill=(20, 14, 10, 70))
sh_f = sh_f.filter(ImageFilter.GaussianBlur(10))
img = Image.alpha_composite(img.convert("RGBA"), sh_f).convert("RGB")
d = ImageDraw.Draw(img)

# ---- Persiana de madera CERRADA (izquierda) ----
PX0, PY0, PX1, PY1 = 66, 96, 336, 528
d.rectangle([PX0 - 12, PY0 - 12, PX1 + 12, PY1 + 12], fill=(92, 66, 44))   # marco
d.rectangle([PX0, PY0, PX1, PY1], fill=(84, 60, 40))                        # fons llistons
for i, y in enumerate(range(PY0 + 4, PY1 - 8, 15)):
    tono = (100, 72, 48) if i % 2 == 0 else (76, 54, 36)
    d.rectangle([PX0 + 2, y, PX1 - 2, y + 9], fill=tono)
    d.line([(PX0 + 2, y), (PX1 - 2, y)], fill=(122, 90, 58), width=2)       # fil de llum del llistó
# ampit de la persiana
d.rectangle([PX0 - 18, PY1 + 12, PX1 + 18, PY1 + 26], fill=(104, 76, 50))
d.line([(PX0 - 18, PY1 + 12), (PX1 + 18, PY1 + 12)], fill=(126, 94, 60), width=3)

# ---- Lámpara de techo APAGADA (centro-superior) ----
d.line([(762, 0), (762, 122)], fill=(40, 32, 26), width=5)
d.polygon([(702, 122), (822, 122), (798, 194), (726, 194)], fill=(58, 44, 34))
d.polygon([(702, 122), (822, 122), (818, 132), (706, 132)], fill=(78, 60, 44))  # fil superior
d.ellipse([744, 186, 780, 200], fill=(38, 28, 22))   # bombilla fosca, sense resplandor

# ---- Reloj de pared en penumbra (21:00) ----
CX, CY, R = 1006, 176, 46
d.ellipse([CX - R - 8, CY - R - 8, CX + R + 8, CY + R + 8], fill=(64, 50, 38))
d.ellipse([CX - R, CY - R, CX + R, CY + R], fill=(206, 190, 168))
for a in range(12):
    import math
    ang = a * math.pi / 6
    x1 = CX + (R - 8) * math.sin(ang)
    y1 = CY - (R - 8) * math.cos(ang)
    x2 = CX + (R - 3) * math.sin(ang)
    y2 = CY - (R - 3) * math.cos(ang)
    d.line([(x1, y1), (x2, y2)], fill=(110, 92, 72), width=2)
# agulles: 21h -> hora cap a l'esquerra, minut cap amunt
d.line([(CX, CY), (CX - 26, CY + 4)], fill=(70, 54, 40), width=5)   # hora (les 9)
d.line([(CX, CY), (CX, CY - 34)], fill=(70, 54, 40), width=4)       # minut (12)
d.ellipse([CX - 4, CY - 4, CX + 4, CY + 4], fill=(70, 54, 40))

# ---- Sofá salvia nocturna ----
d.rounded_rectangle([128, 336, 566, 452], 26, fill=(74, 84, 64))            # respatller
d.rounded_rectangle([128, 436, 566, 560], 22, fill=(84, 94, 72))            # cos
d.rounded_rectangle([150, 420, 368, 446], 12, fill=(94, 104, 80))            # coixí seient 1
d.rounded_rectangle([368, 420, 546, 446], 12, fill=(90, 100, 76))            # coixí seient 2
d.rounded_rectangle([120, 404, 190, 556], 18, fill=(88, 98, 74))             # braç esquerre
d.rounded_rectangle([504, 404, 574, 556], 18, fill=(88, 98, 74))             # braç dret
for lx in (156, 520):                                                        # potes
    d.rectangle([lx, 556, lx + 26, 574], fill=(40, 30, 24))

# ---- Figura adulta: perfil cansat, jersei terracota, inclinada cap a la copa ----
# cames
d.rounded_rectangle([292, 462, 424, 498], 14, fill=CAJAO)                    # cuixa
d.rounded_rectangle([392, 494, 424, 566], 10, fill=CAJAO)                    # cama baixa
d.rounded_rectangle([386, 556, 452, 576], 8, fill=(30, 22, 18))               # sabata
# tors inclinat endavant (cap a la dreta, cap a la copa)
d.polygon([(270, 340), (392, 322), (408, 470), (286, 486)], fill=TERRA)
d.polygon([(270, 340), (286, 348), (288, 486), (272, 470)], fill=TERRA_LUZ) # fil de llum del jersei
# braç: del muscle al genoll
d.line([(388, 364), (414, 452)], fill=(150, 74, 26), width=26)
d.ellipse([402, 444, 432, 474], fill=PIEL)                                   # mà al genoll
# cap de perfil mirant la copa (dreta)
d.ellipse([346, 258, 424, 336], fill=PELO)
d.polygon([(394, 292), (430, 300), (424, 322), (396, 320)], fill=PIEL)        # cara de perfil
d.polygon([(424, 306), (434, 312), (424, 316)], fill=PIEL)                   # nas
d.arc([346, 258, 424, 336], 120, 300, fill=(72, 56, 44), width=5)            # brill del cabell
d.line([(330, 322), (292, 346)], fill=PELO, width=10)                        # clatell

# ---- Tauleta de fusta ----
d.rounded_rectangle([612, 470, 972, 498], 8, fill=(120, 86, 56))
d.rectangle([612, 486, 972, 492], fill=(96, 68, 44))
for lx in (636, 918):
    d.rectangle([lx, 498, lx + 20, 576], fill=(88, 62, 42))

# ---- Llibre tancat amb marcador (l'alternativa) ----
d.rounded_rectangle([660, 440, 748, 470], 5, fill=SALVIA_OSC)
d.rectangle([660, 462, 748, 466], fill=(76, 86, 66))
d.rectangle([724, 432, 732, 444], fill=TERRA_LUZ)                            # marcador

# ---- La copa: única font de llum ----
GX = 806
# peu
d.ellipse([GX - 34, 448, GX + 34, 462], fill=(214, 196, 178))
d.line([(GX, 428), (GX, 452)], fill=(214, 196, 178), width=7)
# copa (bowl)
d.polygon([(GX - 40, 340), (GX + 40, 340), (GX + 18, 420), (GX - 18, 420)], fill=(228, 210, 190))
# vi
d.polygon([(GX - 34, 366), (GX + 34, 366), (GX + 17, 418), (GX - 17, 418)], fill=(158, 62, 30))
d.polygon([(GX - 34, 366), (GX + 34, 366), (GX + 30, 374), (GX - 30, 374)], fill=(196, 92, 48))
# fil de la vora
d.line([(GX - 40, 340), (GX + 40, 340)], fill=(255, 244, 228), width=4)

# ---- Resplandor daurat de la copa (la llum de l'escena) ----
def paste_glow(box, alpha, blur, color):
    mask = Image.new("L", (W, H), 0)
    md = ImageDraw.Draw(mask)
    md.ellipse(box, fill=alpha)
    mask = mask.filter(ImageFilter.GaussianBlur(blur))
    img.paste(Image.new("RGB", (W, H), color), (0, 0), mask)
    return ImageDraw.Draw(img)

d = paste_glow([GX - 250, 190, GX + 250, 560], 110, 90, (255, 214, 150))    # hal ampli
d = paste_glow([GX - 120, 300, GX + 120, 470], 150, 40, (255, 226, 170))   # nucli calent
d = paste_glow([GX - 46, 330, GX + 46, 430], 200, 12, (255, 240, 210))     # dins la copa
# llum projectada sobre la taula
d = paste_glow([GX - 130, 452, GX + 130, 510], 90, 18, (255, 216, 160))
# fil de llum càlida a la cara de la figura i al muscle
d = paste_glow([408, 272, 452, 330], 70, 14, (255, 220, 170))
d = paste_glow([392, 340, 448, 420], 46, 22, (255, 210, 150))
# llum tènue que toca la persiana per la vora (recorda que la llum dreta és aliena)
d = paste_glow([260, 200, 360, 500], 26, 40, (240, 190, 130))
# reflexos del rellotge i la bombilla apagada
d = paste_glow([960, 130, 1052, 222], 34, 30, (230, 200, 160))

# ---- Sombres de contacte (per sobre de la llum, suaus) ----
sh = Image.new("RGBA", (W, H), (0, 0, 0, 0))
sd = ImageDraw.Draw(sh)
sd.ellipse([268, 560, 460, 606], fill=(14, 10, 8, 90))          # figura/sofà
sd.rounded_rectangle([606, 560, 972, 600], 24, fill=(14, 10, 8, 70))  # tauleta
sd.ellipse([736, 452, 876, 486], fill=(120, 60, 20, 60))         # lluerna del vi a la fusta
sh = sh.filter(ImageFilter.GaussianBlur(8))
img = Image.alpha_composite(img.convert("RGBA"), sh).convert("RGB")
d = ImageDraw.Draw(img)

# ---- Vinyeta nocturna ----
vig = Image.new("RGBA", (W, H), (0, 0, 0, 0))
vd = ImageDraw.Draw(vig)
vd.rectangle([0, 0, W, H], fill=(18, 14, 10, 78))
vd.ellipse([-40, -40, W + 40, H + 40], fill=(0, 0, 0, 0))
vig = vig.filter(ImageFilter.GaussianBlur(60))
img = Image.alpha_composite(img.convert("RGBA"), vig).convert("RGB")

# ---- Grana sutil ----
noise = Image.effect_noise((W, H), 12).convert("L")
img = Image.composite(Image.blend(img, Image.new("RGB", (W, H), BLANCO), 0.05), img, noise)

img = img.filter(ImageFilter.SMOOTH)
img.save("public/blog/la-copa-que-calma.png")
img.save("public/blog/la-copa-que-calma.webp", "WEBP", quality=88, method=6)
print("OK: la-copa-que-calma.png/.webp guardados", img.size)