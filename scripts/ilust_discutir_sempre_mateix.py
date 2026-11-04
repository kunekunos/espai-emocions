# -*- coding: utf-8 -*-
"""Ilustración editorial estilo Espai Emocions: 'Discutir sempre pel mateix'.

Composición única para este artículo (no reutiliza layouts previos):
cocina diurna cálida. Dos figuras adultas, una en cada extremo de una
mesa larga vista casi de perfil, en posturas opuestas: ELLA (jersei
terracota) se inclina hacia delante con una mano alzada en un gesto de
"otra vez no"; ÉL (jersei salvia) se inclina hacia atrás, brazos
cruzados, media silla de distancia. Sobre la superficie crema de la mesa,
un BUCLE: una elipse de trazo discontinuo terracota oscuro dibujada
entre los dos, con una flecha pequeña que se muerde la cola: la pelea
que siempre vuelve al mismo punto. En el centro exacto del bucle, un
plato blanco vacío brillando levemente: el tema visible. Detrás, pared
crema con una ventana salvia de luz suave y un reloj de pared discreto
(las horas que la secuencia consume). Fregadero con escurridero al fondo
a la derecha, apenas insinuado. Metáfora: la discusión no va de los
platos; gira en círculo sobre ellos. Paleta terracota/crema/salvia,
1200x675 (16:9), flat con grano sutil, sin texto.
"""
from PIL import Image, ImageDraw, ImageFilter
import math

W, H = 1200, 675

CREMA = (244, 232, 222)
CREMA_CLARO = (252, 244, 235)
BLANCO = (255, 249, 243)
TERRA = (164, 81, 28)
TERRA_LUZ = (198, 108, 60)
TERRA_SUAVE = (222, 160, 118)
SALVIA = (123, 136, 114)
SALVIA_CLARA = (196, 202, 186)
SALVIA_OSC = (95, 107, 88)
CAJAO = (48, 37, 31)
ARENA = (225, 210, 198)
PIEL = (232, 206, 186)
PIEL_OSC = (208, 176, 152)
PELO_OSC = (52, 40, 32)
MADERA = (196, 158, 122)
MADERA_OSC = (150, 108, 70)

img = Image.new("RGB", (W, H), BLANCO)
d = ImageDraw.Draw(img)

# ---- Pared: crema con gradiente muy suave ----
for y in range(0, 470):
    t = y / 470
    c = tuple(int(CREMA_CLARO[i] + (CREMA[i] - CREMA_CLARO[i]) * t) for i in range(3))
    d.line([(0, y), (W, y)], fill=c)

# ---- Ventana salvia (fondo izquierda) ----
d.rounded_rectangle([70, 96, 320, 300], 18, fill=SALVIA_CLARA, outline=SALVIA, width=3)
# luz exterior dentro de la ventana
d.rounded_rectangle([82, 108, 308, 288], 12, fill=(238, 242, 226))
# cruz de la ventana
d.rectangle([192, 108, 200, 288], fill=SALVIA)
d.rectangle([82, 194, 308, 202], fill=SALVIA)
# maceta pequeña en el alféizar
d.ellipse([255, 272, 287, 302], fill=TERRA)  # arbusto salvia
d.ellipse([240, 280, 268, 306], fill=SALVIA_OSC)
d.rectangle([250, 300, 266, 322], fill=MADERA_OSC)

# ---- Reloj de pared (centro-derecha alto) ----
cx, cy, r = 985, 150, 46
d.ellipse([cx - r, cy - r, cx + r, cy + r], fill=BLANCO, outline=CAJAO, width=4)
# agujas: ~21:35, la noche que se va en la misma conversa
d.line([(cx, cy), (cx - 10, cy - 22)], fill=CAJAO, width=4)
d.line([(cx, cy), (cx + 20, cy + 6)], fill=CAJAO, width=4)
d.ellipse([cx - 3, cy - 3, cx + 3, cy + 3], fill=TERRA)
# marcas de horas
for k in range(12):
    ang = math.radians(k * 30)
    x1 = cx + (r - 10) * math.sin(ang); y1 = cy - (r - 10) * math.cos(ang)
    x2 = cx + (r - 4) * math.sin(ang); y2 = cy - (r - 4) * math.cos(ang)
    d.line([(x1, y1), (x2, y2)], fill=(190, 175, 162), width=2)

# ---- Estantería discreta (derecha) con dos tarros y un libro ----
d.rectangle([760, 218, 1120, 226], fill=MADERA_OSC)
d.rounded_rectangle([790, 172, 834, 218], 6, fill=CREMA, outline=ARENA, width=2)
d.rounded_rectangle([852, 178, 890, 218], 6, fill=TERRA_SUAVE, outline=ARENA, width=2)
d.rectangle([920, 186, 986, 218], fill=SALVIA)      # libro salvia
d.rectangle([920, 186, 926, 218], fill=SALVIA_OSC)

# ---- Zócalo ----
d.rectangle([0, 430, W, 470], fill=ARENA)
d.rectangle([0, 430, W, 437], fill=(208, 190, 176))

# ---- Suelo ----
for y in range(470, H):
    t = (y - 470) / (H - 470)
    c = tuple(int(226 + -26 * t) for _ in range(3))
    d.line([(0, y), (W, y)], fill=(c[0], c[1] - 4, c[2] - 10))
d.rectangle([0, 470, W, 478], fill=(120, 96, 80))

# ---- Mesa larga (vista lateral, centro-bajo) ----
mesa_top = 500
d.rounded_rectangle([150, mesa_top, 1050, 522], 10, fill=CREMA_CLARO, outline=ARENA, width=2)
d.rectangle([150, 522, 1050, 532], fill=MADERA)
d.rectangle([150, 522, 1050, 526], fill=MADERA_OSC)
# patas
d.rectangle([210, 532, 234, 640], fill=MADERA_OSC)
d.rectangle([966, 532, 990, 640], fill=MADERA_OSC)
# sombra bajo la mesa
sh = Image.new("RGBA", (W, H), (0, 0, 0, 0))
sd = ImageDraw.Draw(sh)
sd.rounded_rectangle([170, 636, 1030, 660], 12, fill=(60, 40, 28, 70))
sh = sh.filter(ImageFilter.GaussianBlur(6))
img = Image.alpha_composite(img.convert("RGBA"), sh).convert("RGB")
d = ImageDraw.Draw(img)

# ---- El bucle sobre la mesa (la seqüència repetida) ----
loop_cx, loop_cy = 600, 512
loop_rx, loop_ry = 205, 15
# elipse discontinua en perspectiva sobre la superficie
step = 26
for k in range(0, 360, 3):
    a0 = math.radians(k); a1 = math.radians(k + 1.6)
    if (k // 3) % 2 == 0:  # trazo/discontinuo
        x0 = loop_cx + loop_rx * math.cos(a0); y0 = loop_cy + loop_ry * math.sin(a0)
        x1 = loop_cx + loop_rx * math.cos(a1); y1 = loop_cy + loop_ry * math.sin(a1)
        d.line([(x0, y0), (x1, y1)], fill=(150, 66, 18), width=4)
# flecha que es mossega la cua (petita, a la dreta del bucle)
ax, ay = loop_cx + loop_rx, loop_cy
d.polygon([(ax + 16, ay - 12), (ax + 16, ay + 12), (ax - 6, ay)], fill=TERRA)
# el plat al centre del bucle: el tema visible
d.ellipse([560, 496, 640, 528], fill=BLANCO, outline=ARENA, width=2)
d.ellipse([578, 504, 622, 520], outline=ARENA, width=2)
# brill suau del plat
gl = Image.new("RGBA", (W, H), (0, 0, 0, 0))
gd = ImageDraw.Draw(gl)
gd.ellipse([548, 490, 652, 534], fill=(255, 246, 220, 110))
gl = gl.filter(ImageFilter.GaussianBlur(10))
img = Image.alpha_composite(img.convert("RGBA"), gl).convert("RGB")
d = ImageDraw.Draw(img)

# ---- Figura ELLA (izquierda, s'inclina endavant, mà alzada) ----
def draw_persona(x, lean, sweater, lean_dir, brazo_alzado):
    """x: peu central; lean: desplaçament lateral del bust; sweater: color del jersei."""
    # cadires
    d.rectangle([x - 74, 470, x - 66, 560], fill=MADERA_OSC)
    d.rounded_rectangle([x - 78, 452, x - 62, 486], 6, fill=MADERA)
    d.rectangle([x + 62, 470, x + 70, 560], fill=MADERA_OSC)
    d.rounded_rectangle([x + 58, 452, x + 74, 486], 6, fill=MADERA)
    # cames (pantalon cacao)
    d.rounded_rectangle([x - 26, 560, x - 10, 648], 8, fill=CAJAO)
    d.rounded_rectangle([x + 10, 560, x + 26, 648], 8, fill=CAJAO)
    d.rounded_rectangle([x - 32, 640, x - 4, 656], 8, fill=PELO_OSC)
    d.rounded_rectangle([x + 4, 640, x + 32, 656], 8, fill=PELO_OSC)
    # bust inclinat
    bx = x + lean
    d.rounded_rectangle([bx - 42, 440, bx + 42, 566], 22, fill=sweater)
    # braços
    if brazo_alzado:
        d.rounded_rectangle([bx + 30, 452, bx + 58, 520], 14, fill=sweater)  # braç alçat
        d.rounded_rectangle([bx + 52, 418, bx + 70, 460], 13, fill=sweater)
        d.ellipse([bx + 50, 404, bx + 74, 428], fill=PIEL)  # mà oberta
    else:  # braços creuats
        d.rounded_rectangle([bx - 56, 500, bx - 26, 556], 14, fill=sweater)
        d.rounded_rectangle([bx + 26, 500, bx + 56, 556], 14, fill=sweater)
        d.rectangle([bx - 10, 508, bx + 12, 516], fill=PELO_OSC)  # mans amagades
    # coll i cap
    d.rectangle([bx - 10, 424, bx + 10, 444], fill=PIEL)
    d.ellipse([bx - 24, 380, bx + 24, 428], fill=PIEL)
    # cabell curt
    d.pies = None
    d.ellipse([bx - 26, 374, bx + 26, 412], fill=PELO_OSC)
    d.rectangle([bx - 26, 374, bx + 26, 392], fill=PELO_OSC)
    # ull petit i cella: expressió
    d.ellipse([bx + 6 + lean_dir * 4, 398, bx + 13 + lean_dir * 4, 404], fill=CAJAO)
    d.line([(bx + 3 + lean_dir * 4, 392), (bx + 15 + lean_dir * 4, 390)], fill=PELO_OSC, width=2)

# ELLA: a l'esquerra, s'inclina CAP A LA MESA (dreta), mà alzada
draw_persona(300, 34, TERRA, +1, True)
# ELL: a la dreta, s'inclina ENRERE (esquerra), braços creuats
draw_persona(900, -22, SALVIA, -1, False)

# ---- Sombras suaves de las figuras ----
sh2 = Image.new("RGBA", (W, H), (0, 0, 0, 0))
s2 = ImageDraw.Draw(sh2)
s2.ellipse([230, 646, 382, 668], fill=(60, 40, 28, 60))
s2.ellipse([830, 646, 982, 668], fill=(60, 40, 28, 60))
sh2 = sh2.filter(ImageFilter.GaussianBlur(5))
img = Image.alpha_composite(img.convert("RGBA"), sh2).convert("RGB")
d = ImageDraw.Draw(img)

# ---- Detalles de cocina al fondo derecha: fregadero insinuado ----
d.rounded_rectangle([1080, 380, 1190, 428], 8, fill=CREMA, outline=ARENA, width=2)
d.ellipse([1112, 398, 1158, 420], fill=SALVIA_CLARA, outline=SALVIA, width=2)
d.rectangle([1128, 356, 1136, 396], fill=SALVIA)  # grifo

# ---- Luz cálida diagonal desde la ventana (capa suave) ----
lu = Image.new("RGBA", (W, H), (0, 0, 0, 0))
ld = ImageDraw.Draw(lu)
ld.polygon([(70, 96), (320, 96), (640, 675), (240, 675)], fill=(255, 238, 204, 60))
lu = lu.filter(ImageFilter.GaussianBlur(28))
img = Image.alpha_composite(img.convert("RGBA"), lu).convert("RGB")

# ---- Grano sutil ----
noise = Image.effect_noise((W, H), 12).convert("L")
img = Image.composite(Image.blend(img, Image.new("RGB", (W, H), BLANCO), 0.05), img, noise)

img = img.filter(ImageFilter.SMOOTH)
img.save("public/blog/discutir-siempre-por-lo-mismo.png")
img.save("public/blog/discutir-siempre-por-lo-mismo.webp", "WEBP", quality=88, method=6)
print("OK: discutir-siempre-por-lo-mismo.png/.webp guardados", img.size)