import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60 * 60 * 24 * 30, // 30 days
  },
  async redirects() {
    return [
      {
        source: "/contacto",
        destination: "/psicologo-barcelona",
        permanent: true,
      },
      {
        source: "/tratamiento-adicciones-barcelona",
        destination: "/psicologo-barcelona",
        permanent: true,
      },
      {
        source: "/tratamiento-ansiedad-barcelona",
        destination: "/terapia-ansiedad-barcelona",
        permanent: true,
      },
      {
        source: "/tratamiento-depresion-barcelona",
        destination: "/blog/estados-depresivos-edad-adulta-cuando-todo-cuesta-mas",
        permanent: true,
      },
      {
        source: "/tratamiento-toc-barcelona",
        destination: "/psicologo-barcelona",
        permanent: true,
      },
      {
        source: "/ubicacion",
        destination: "/psicologo-sant-pau",
        permanent: true,
      },
      {
        source: "/psicologia-humanista-barcelona",
        destination: "/blog/terapia-humanista-como-funciona",
        permanent: true,
      },
      {
        source: "/psicologo-para-hombres-barcelona",
        destination: "/psicoterapia-para-hombres-barcelona",
        permanent: true,
      },
      {
        source: "/servicios",
        destination: "/psicologo-barcelona",
        permanent: true,
      },
      {
        source: "/preguntas-frecuentes",
        destination: "/blog/preguntas-frecuentes-psicologia-barcelona",
        permanent: true,
      },
      {
        source: "/blog/cambiar-psicologo-no-encaixo",
        destination: "/blog/cambiar-psicologo-no-encajo",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
