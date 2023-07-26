export default {
  
  devtools: { enabled: true },
  css: [
    // Agrega la hoja de estilos de Bootstrap
    'bootstrap/dist/css/bootstrap.min.css',
    // Agrega la hoja de estilos de bootstrap-icons
    'bootstrap-icons/font/bootstrap-icons.css',
    '@fortawesome/fontawesome-free/css/all.min.css',
    // Agrega la hoja de estilos de Swiper
    '~/node_modules/swiper/swiper-bundle.min.css',
    // Agrega la hoja de estilos local de AOS
    'aos/dist/aos.css',
    '~/static/assets/css/main.css'
  ],
  head: {
    link: [
      // { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' },
      {
        rel: 'preconnect',
        href: 'https://fonts.googleapis.com',
      },
      {
        rel: 'preconnect',
        href: 'https://fonts.gstatic.com',
        crossorigin: true,
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Poppins&family=Rajdhani:wght@300;500;700&display=swap',
      },
    ],
  },
  render: {
    // Evita errores de importación en CSS
    resourceHints: false,
  },
  scripts: [
    // Agrega el script de Bootstrap en la parte inferior del body
    { src: '/_nuxt/bootstrap/dist/js/bootstrap.min.js', body: true },
    // Agrega el script de Swiper en la parte inferior del body
    { src: '/_nuxt/node_modules/swiper/swiper-bundle.min.js', body: true }
    
  ],
  plugins:[
    { src: '~/static/utils/setup.js', mode: 'client' },
    { src: '~/aos.client.js', mode: 'client' },
  ],
  buildModules: [
    '@nuxt/image', // Agrega el módulo nuxt-image aquí
  ],

  router: {
    routes: [
      { path: '/', component: '@/pages/index.vue' },
      { path: '/service', component: '@/pages/transmisiones.vue' },
      { path: '/coleccion', component: '@/pages/coleccion.vue' },
      { path: '/about', component: '@/pages/about.vue' },
      { path: '/noticias', component: '@/pages/noticias.vue' },
      // Puedes agregar más rutas aquí
    ],
  },
  
};
