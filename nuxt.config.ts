// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-01-01',
  future: {
    compatibilityVersion: 4
  },
  devtools: { enabled: false },
  telemetry: false,
  css: ['~/assets/css/main.css'],
  modules: [
    '@nuxtjs/tailwindcss'
  ],
  nitro: {
    preset: 'vercel',
    hidePoweredBy: true
  },
  routeRules: {
    '/**': {
      headers: {
        'X-Content-Type-Options': 'nosniff',
        'X-Frame-Options': 'SAMEORIGIN',
        'Referrer-Policy': 'strict-origin-when-cross-origin',
        'Permissions-Policy': 'camera=(), microphone=(), geolocation=()'
      }
    }
  },
  app: {
    head: {
      title: 'Ms. Natthamon Kosem | Computer Engineer & Back-end Developer',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description',
          content: 'Portfolio of Ms. Natthamon Kosem - Computer Engineer, Back-end Developer, RESTful APIs, Database Design, IoT & AI Solutions.'
        },
        { name: 'theme-color', content: '#090d16' }
      ],
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=JetBrains+Mono:ital,wght@0,300;0,400;0,500;0,700;1,400&family=Kanit:wght@300;400;500;600;700&family=Space+Grotesk:wght@400;500;600;700&display=swap'
        }
      ]
    }
  }
})
