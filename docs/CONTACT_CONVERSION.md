# Conversión y formulario de contacto

## Objetivo

Este cambio sustituye la confirmación simulada del formulario por un flujo verificable y seguro. También unifica las llamadas a la acción, corrige rutas rotas del blog y añade medición de contactos sin enviar datos personales a Google Analytics.

## Comportamiento seguro por defecto

El formulario solo se muestra y acepta solicitudes cuando los cuatro indicadores siguientes valen `true`:

```env
NEXT_PUBLIC_CONTACT_FORM_ENABLED=true
CONTACT_FORM_ENABLED=true
NEXT_PUBLIC_PRIVACY_NOTICE_READY=true
PRIVACY_NOTICE_READY=true
```

Si falta cualquiera de ellos:

- no se muestra un formulario inoperante;
- la API responde con `503 form_disabled`;
- siguen disponibles WhatsApp, teléfono y correo electrónico;
- la página de privacidad indica que la información está pendiente de validación.

Los valores de `.env.example` están desactivados intencionadamente. Nunca se deben guardar secretos reales en Git.

## Datos jurídicos pendientes

Antes de activar el formulario, Carmen y Esteve deben confirmar:

- nombre o razón social del responsable;
- NIF o CIF;
- dirección postal;
- correo para ejercer derechos de protección de datos;
- proveedores que reciben o procesan la solicitud;
- existencia o ausencia de transferencias internacionales.

Se configuran mediante:

```env
PRIVACY_CONTROLLER_NAME=
PRIVACY_CONTROLLER_ID=
PRIVACY_POSTAL_ADDRESS=
PRIVACY_CONTACT_EMAIL=
PRIVACY_PROCESSORS=
PRIVACY_TRANSFERS=
```

La redacción debe validarse antes de publicar. Referencias utilizadas:

- [Derecho de información de la AEPD](https://www.aepd.es/derechos-y-deberes/conoce-tus-derechos/derecho-de-informacion)
- [Cómo cumplir el deber de informar](https://www.aepd.es/preguntas-frecuentes/2-tus-obligaciones-como-responsable-del-tratamiento/6-el-deber-de-informacion/FAQ-0247-como-debo-cumplir-con-el-deber-de-informar)
- [Guía de cláusulas informativas de la AEPD](https://www.aepd.es/guias/guia-modelo-clausula-informativa.pdf)

## Entrega de las solicitudes

La ruta `POST /api/contact` utiliza la API transaccional de Resend. Requiere:

```env
RESEND_API_KEY=
CONTACT_FROM_EMAIL="Espai Emocions <web@espaiemocions.es>"
CONTACT_TO_EMAIL=contacte@espaiemocions.es
ALLOWED_CONTACT_ORIGINS=https://espaiemocions.es,https://www.espaiemocions.es
```

Resend es una propuesta técnica, no una decisión comercial cerrada. Antes de activarlo hay que aprobar el proveedor, revisar sus condiciones como encargado del tratamiento y verificar el dominio remitente. Si ya existe otro proveedor de correo transaccional aprobado, se debe adaptar la implementación antes de habilitar los indicadores.

La API incorpora validación de origen y tamaño, honeypot, validación de campos, identificador de solicitud e idempotencia. Los registros del servidor no incluyen nombre, correo, teléfono ni motivo de consulta.

## Medición

Se envía `generate_lead` únicamente cuando el proveedor confirma la entrega. El evento contiene solo:

- servicio;
- modalidad;
- canal de contacto preferido;
- identificador aleatorio de solicitud.

Los clics en WhatsApp, teléfono y correo se miden con `contact_click`. Nunca deben añadirse a GA4 el nombre, correo, teléfono, texto libre, diagnósticos u otros datos de salud.

Tras activar una Preview, comprobar ambos eventos en GA4 DebugView y confirmar que no aparece información personal.

## Preview y activación

1. Revisar y aprobar esta Pull Request.
2. Dejar que Vercel genere una Preview desde la rama.
3. Introducir en Preview los datos jurídicos confirmados y la configuración del proveedor.
4. Activar los cuatro indicadores solo en Preview.
5. Enviar una solicitud de prueba y confirmar su recepción.
6. Verificar el estado de éxito, la conservación del formulario ante errores y los eventos de GA4.
7. Revisar la página `/privacidad` con los datos reales.
8. Obtener autorización expresa de Esteve antes de copiar variables o desplegar en producción.

No se deben modificar producción, dominios, DNS ni variables reales como parte de una revisión técnica ordinaria.

## Comprobaciones locales

Después de compilar la aplicación:

```bash
npm run smoke:conversion
```

La prueba verifica el inicio, los canales alternativos, el bloqueo seguro del formulario, la privacidad pendiente, la API desactivada, artículos válidos, errores 404 reales y las 35 rutas actuales del sitemap.
