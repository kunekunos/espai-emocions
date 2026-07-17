# Medición de captación y conversión

## Objetivo

Saber qué canales y contenidos generan intención de contacto sin enviar a Google Analytics nombres, teléfonos, correos, mensajes ni información clínica.

## Enlaces públicos por canal

| Canal | Enlace que debe publicarse | Atribución |
| --- | --- | --- |
| Instagram | `https://espaiemocions.es/instagram` | `instagram / organic_social / profile / entreemociones` |
| YouTube | `https://espaiemocions.es/youtube` | `youtube / organic_video / channel / description` |

No publiques directamente los parámetros UTM en las biografías. Usa siempre los enlaces limpios anteriores.

## Eventos GA4

| Evento | Significado | Parámetros permitidos |
| --- | --- | --- |
| `cta_click` | La persona decide avanzar hacia contacto | `placement`, `destination` |
| `contact_click` | La persona elige un canal de contacto | `channel`, `placement` |
| `generate_lead` | El formulario se entrega correctamente | `service`, `modality`, `contact_preference`, `request_id` |

Valores actuales de `placement`: `header`, `header_mobile`, `hero`, `services`, `approach`, `blog_article`.

Valores actuales de `channel`: `whatsapp`, `phone`, `email`.

## Privacidad

- No enviar nunca a Analytics nombres, teléfonos, correos ni textos escritos por pacientes.
- No incluir diagnósticos, motivos de consulta o información clínica en eventos o URLs.
- Los eventos deben describir únicamente acciones y categorías generales.

## Indicadores

1. **Tasa de avance:** sesiones con `cta_click` / sesiones de entrada.
2. **Tasa de intención de contacto:** sesiones con `contact_click` / sesiones de entrada.
3. **Preferencia de canal:** distribución de `contact_click` por `channel`.
4. **Conversión por origen:** intención de contacto segmentada por `source`, `medium` y `campaign`.

Un clic en WhatsApp, teléfono o correo indica intención, pero no demuestra por sí solo que se haya iniciado o completado una terapia.

## Puesta en marcha

Tras publicar las rutas y la instrumentación:

1. marcar `contact_click` y `generate_lead` como eventos clave en GA4;
2. comprobar los eventos en Tiempo real o DebugView;
3. recoger una línea base mínima de 14 días;
4. comparar fuentes y ubicaciones de CTA antes de decidir la siguiente modificación.
