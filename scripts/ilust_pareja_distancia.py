# -*- coding: utf-8 -*-
"""Ilustración editorial estilo Espai Emocions: 'Relación a distancia'.

Composición partida: dos interiores cálidos a cada lado —izquierda, una figura
adulto sentada con una tablet iluminada al anochecer; derecha, otra figura de
pie junto a su ventana con una taza humeante— y, entre ambos, una franja de
distancia en salvia donde dos ventanas de ciudades distintas quedan unidas por
un hilo terracota fino y serpenteante. La metáfora visual: el vínculo no
comparte mapa, pero sostiene un mismo hilo y una misma hora de lámpara
encendida. Paleta terracota/crema/salvia, luz cálida, formato 1200x675 (16:9),
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
NOCHE_SALVIA = (150, 163, 145)

img = Image.new("RGB", (W, H), CREMA)
d = ImageDraw.Draw(img)

# ---- Franja central de distancia (salvia, más fría) ----
CX0, CX1 = 470, 730
d.rectangle([0, 0, W, H], fill=CREMA)
d.rectangle([CX0, 0, CX1, H], fill=SALVIA_SUAVE)
# textura vertical suave de la franja
for y in range(0, H, 14):
    d.line([(CX0, y), (CX1, y)], fill=(168, 176, 160), width=1)
d.line([(CX0, 0), (CX0, H)], fill=ARENA, width=3)
d.line([(CX1, 0), (CX1, H)], fill=ARENA, width=3)

# siluetas de dos ciudades distintas dentro de la franja (mapas que no comparten)
city_y = 470
for bx, bw, bh in [(486, 22, 80), (512, 16, 120), (532, 26, 60),
                   (562, 14, 150), (580, 30, 90), (640, 20, 70),
                   (664, 16, 130), (684, 24, 55), (706, 18, 100)]:
    d.rectangle([bx, city_y - bh, bx + bw, city_y], fill=(150, 160, 143))
d.line([(CX0, city_y), (CX1, city_y)], fill=(140, 152, 134), width=3)

# ------------------------------------------------------------------
# INTERIOR IZQUIERDO: figura sentada con tablet iluminada
# ------------------------------------------------------------------
d.rectangle([0, 0, CX0, 505], fill=(236, 222, 209))
d.rectangle([0, 505, CX0, H], fill=(216, 198, 180))
for x in range(0, 520, 90):
    d.line([(x, 505), (x - 45, H)], fill=(202, 184, 166), width=2)
d.rectangle([0, 487, CX0, 505], fill=ARENA)

# lámpara de pie encendida (izquierda)
d.line([(110, 505), (110, 300)], fill=(120, 92, 70), width=7)
d.ellipse([68, 236, 152, 300], fill=DORADO_SUAVE, outline=(150, 116, 82), width=3)
halo = Image.new("RGBA", (W, H), (0, 0, 0, 0))
hd = ImageDraw.Draw(halo)
hd.ellipse([48, 190, 172, 344], fill=(245, 214, 160, 70))
img = Image.alpha_composite(img.convert("RGBA"), halo).convert("RGB")
d = ImageDraw.Draw(img)

# cuadro en la pared
d.rounded_rectangle([170, 110, 300, 224], 6, fill=TERRA_OSC)
d.rectangle([182, 122, 288, 212], fill=BLANCO)
d.arc([204, 150, 266, 214], 0, 180, fill=SALVIA, width=5)
d.ellipse([228, 164, 244, 180], fill=TERRA)

# sillón salvia y figura sentada
cx, cy = 300, 505
d.rounded_rectangle([cx - 82, cy - 150, cx + 82, cy], 22, fill=SALVIA)
d.rounded_rectangle([cx - 100, cy - 92, cx - 66, cy], 14, fill=SALVIA_OSC)
d.rounded_rectangle([cx + 66, cy - 92, cx + 100, cy], 14, fill=SALVIA_OSC)
d.rounded_rectangle([cx - 64, cy - 86, cx + 64, cy - 6], 12, fill=(150, 163, 145))
# torso
d.rounded_rectangle([cx - 30, cy - 192, cx + 30, cy - 72], 16, fill=TERRA_OSC)
# cabeza con pelo corto
d.ellipse([cx - 24, cy - 238, cx + 24, cy - 194], fill=(226, 200, 176))
d.ellipse([cx - 26, cy - 244, cx + 26, cy - 210], fill=(58, 46, 38))
# rostro de perfil hacia la tablet (mira a la derecha)
d.ellipse([cx + 8, cy - 216, cx + 15, cy - 209], fill=CAJAO)
d.arc([cx + 2, cy - 208, cx + 18, cy - 196], 20, 140, fill=(120, 100, 88), width=2)
# brazos hacia la tablet
d.line([(cx - 28, cy - 150), (cx + 14, cy - 112)], fill=TERRA_OSC, width=12)
d.line([(cx + 28, cy - 150), (cx + 20, cy - 112)], fill=TERRA_OSC, width=12)
# piernas
d.rounded_rectangle([cx - 26, cy - 74, cx - 8, cy - 4], 8, fill=(86, 70, 58))
d.rounded_rectangle([cx + 8, cy - 74, cx + 26, cy - 4], 8, fill=(86, 70, 58))
# tablet iluminada en su regazo, resplandor cálido
tab_halo = Image.new("RGBA", (W, H), (0, 0, 0, 0))
td = ImageDraw.Draw(tab_halo)
td.ellipse([cx - 44, cy - 132, cx + 48, cy - 76], fill=(245, 214, 160, 90))
img = Image.alpha_composite(img.convert("RGBA"), tab_halo).convert("RGB")
d = ImageDraw.Draw(img)
d.rounded_rectangle([cx - 26, cy - 124, cx + 30, cy - 88], 6, fill=CAJAO)
d.rectangle([cx - 22, cy - 120, cx + 26, cy - 92], fill=DORADO_SUAVE)

# ------------------------------------------------------------------
# INTERIOR DERECHO: figura de pie junto a la ventana con taza
# ------------------------------------------------------------------
d.rectangle([CX1, 0, W, 505], fill=(236, 222, 209))
d.rectangle([CX1, 505, W, H], fill=(216, 198, 180))
for x in range(CX1, W + 60, 90):
    d.line([(x, 505), (x + 45, H)], fill=(202, 184, 166), width=2)
d.rectangle([CX1, 487, W, 505], fill=ARENA)

# ventana con anochecer salvia y una luna pequeña compartida
wx0, wy0, wx1, wy1 = 820, 100, 1020, 360
d.rectangle([wx0 - 14, wy0 - 14, wx1 + 14, wy1 + 14], fill=MADERA)
d.rectangle([wx0, wy0, wx1, wy1], fill=(168, 180, 170))
d.rectangle([wx0, wy0 + 90, wx1, wy1], fill=NOCHE_SALVIA)
# luna y silueta de ciudad lejana tras la ventana
d.ellipse([950, 122, 982, 154], fill=BLANCO)
for bx, bw, bh in [(830, 26, 70), (860, 18, 110), (884, 30, 55), (920, 16, 90)]:
    d.rectangle([wx0 + (bx - 820), wy1 - bh, wx0 + (bx - 820) + bw, wy1], fill=(140, 152, 134))
d.line([(wx0, wy0 + 90), (wx1, wy0 + 90)], fill=(150, 116, 82), width=2)
d.line([(wx0, wy0 + 180), (wx1, wy0 + 180)], fill=(150, 116, 82), width=2)
d.line([(920, wy0), (920, wy1)], fill=(150, 116, 82), width=2)

# planta en maceta terracota
pot_x, pot_y = 1120, 505
d.polygon([(pot_x - 26, pot_y), (pot_x + 26, pot_y), (pot_x + 19, pot_y + 58), (pot_x - 19, pot_y + 58)], fill=TERRA)
d.rectangle([pot_x - 30, pot_y - 10, pot_x + 30, pot_y + 4], fill=TERRA_OSC)
for ang in range(-70, 71, 14):
    a = math.radians(ang)
    x2 = pot_x + 54 * math.sin(a)
    y2 = pot_y - 16 - 62 * math.cos(a)
    d.line([(pot_x, pot_y - 12), (x2, y2)], fill=SALVIA, width=4)
    d.ellipse([x2 - 8, y2 - 11, x2 + 8, y2 + 7], fill=SALVIA)

# figura de pie junto a la ventana, con taza humeante
fx, fy = 880, 505
d.ellipse([fx - 34, fy - 18, fx + 34, fy], fill=(176, 158, 140))
d.rounded_rectangle([fx - 30, fy - 262, fx + 30, fy - 62], 16, fill=SALVIA_OSC)
d.ellipse([fx - 22, fy - 308, fx + 22, fy - 264], fill=(228, 204, 180))
d.ellipse([fx - 24, fy - 314, fx + 24, fy - 280], fill=(70, 56, 46))
d.rounded_rectangle([fx + 12, fy - 306, fx + 30, fy - 276], 8, fill=(70, 56, 46))
# mirada hacia la ventana (perfil a la derecha)
d.ellipse([fx + 6, fy - 288, fx + 13, fy - 281], fill=CAJAO)
d.arc([fx + 2, fy - 278, fx + 16, fy - 268], 20, 140, fill=(120, 100, 88), width=2)
# brazos hacia la taza
d.line([(fx - 26, fy - 210), (fx - 10, fy - 170)], fill=SALVIA_OSC, width=12)
d.line([(fx + 26, fy - 210), (fx + 12, fy - 170)], fill=SALVIA_OSC, width=12)
# taza humeante entre las manos
d.rounded_rectangle([fx - 16, fy - 178, fx + 16, fy - 152], 6, fill=BLANCO)
d.ellipse([fx + 12, fy - 172, fx + 22, fy - 160], outline=BLANCO, width=3)
for i, dy in enumerate((10, 24, 38)):
    d.arc([fx - 8, fy - 190 - dy - i * 3, fx + 8, fy - 182 - dy - i * 3], 200, 340, fill=(200, 186, 170), width=2)
# piernas
d.rounded_rectangle([fx - 24, fy - 70, fx - 6, fy - 4], 8, fill=(86, 70, 58))
d.rounded_rectangle([fx + 6, fy - 70, fx + 24, fy - 4], 8, fill=(86, 70, 58))

# ------------------------------------------------------------------
# EL HILO TERRACOTA: une las dos ventanas cruzando la franja de distancia
# ------------------------------------------------------------------
thread = Image.new("RGBA", (W, H), (0, 0, 0, 0))
thd = ImageDraw.Draw(thread)
pts = [(322, 300), (400, 260), (470, 300), (530, 260), (600, 310),
       (660, 255), (730, 305), (800, 260), (880, 230)]
thd.line(pts, fill=TERRA, width=4, joint="curve")
# trazo suave: difuminar levemente y redibujar núcleo
thread = thread.filter(ImageFilter.GaussianBlur(0.6))
img = Image.alpha_composite(img.convert("RGBA"), thread).convert("RGB")
d = Image.Draw if False else ImageDraw.Draw(img)
core = [(322, 300), (400, 260), (470, 300), (530, 260), (600, 310),
        (660, 255), (730, 305), (800, 260), (880, 230)]
d.line(core, fill=TERRA, width=3, joint="curve")
# nudos del hilo en ambos extremos
d.ellipse([314, 292, 330, 308], fill=TERRA_OSC)
d.ellipse([872, 222, 888, 238], fill=TERRA_OSC)
# pequeñas cuentas de luz a lo largo del hilo (los puntos de la conversación)
for px, py in [(470, 300), (600, 310), (730, 305)]:
    d.ellipse([px - 5, py - 5, px + 5, py + 5], fill=DORADO_SUAVE)
    d.ellipse([px - 5, py - 5, px + 5, py + 5], outline=TERRA, width=2)

# ---- Luz cálida de ambos interiores proyectada hacia la franja ----
light = Image.new("RGBA", (W, H), (0, 0, 0, 0))
ld = ImageDraw.Draw(light)
ld.polygon([(0, 0), (CX0, 0), (CX0 + 60, H), (60, H)], fill=(240, 205, 160, 22))
ld.polygon([(CX1, 0), (W, 0), (W, H), (CX1 - 60, H)], fill=(240, 205, 160, 22))
img = Image.alpha_composite(img.convert("RGBA"), light).convert("RGB")
d = ImageDraw.Draw(img)

# ---- Sombras suaves de las figuras ----
shadow = Image.new("RGBA", (W, H), (0, 0, 0, 0))
sd = ImageDraw.Draw(shadow)
sd.ellipse([cx - 60, cy - 20, cx + 60, cy + 12], fill=(150, 130, 112, 80))
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

img.save("public/blog/pareja-a-distancia-edad-adulta.png", optimize=True)
img.save("public/blog/pareja-a-distancia-edad-adulta.webp", "WEBP", quality=82, method=6)
print("OK: ilustración generada 1200x675")