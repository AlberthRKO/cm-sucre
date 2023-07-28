<template>
  <!-- ======= Header ======= -->
  <header id="header" class="header d-flex align-items-center fixed-top">
    <div
      class="container-fluid container-xl d-flex align-items-center justify-content-between"
    >
      <NuxtLink
        to="/"
        exact
        :class="{ active: isLinkActive('/') }"
        class="logo d-flex align-items-center"
      >
        <!-- Uncomment the line below if you also wish to use an image logo -->
        <img src="/img/logoCM.png" alt="" />
      </NuxtLink>

      <i class="mobile-nav-toggle mobile-nav-show bi bi-list"></i>
      <i class="mobile-nav-toggle mobile-nav-hide d-none bi bi-x"></i>
      <nav id="navbar" class="navbar">
        <ul>
          <li>
            <NuxtLink to="/" exact :class="{ active: isLinkActive('/') }"
              >Inicio</NuxtLink
            >
          </li>
          <li class="dropdown">
            <a href="#"
              ><span>Información</span>
              <i class="bi bi-chevron-down dropdown-indicator"></i
            ></a>
            <ul>
              <li>
                <NuxtLink
                  to="/about"
                  :class="{ active: isLinkActive('/about') }"
                  >Misión y Visión</NuxtLink
                >
              </li>
              <li>
                <NuxtLink
                  to="/valores"
                  :class="{ active: isLinkActive('/valores') }"
                  >Valores</NuxtLink
                >
              </li>
              <li>
                <NuxtLink
                  to="/object"
                  :class="{ active: isLinkActive('/object') }"
                  >Objetivo general</NuxtLink
                >
              </li>
              <li>
                <NuxtLink
                  to="/organigrama"
                  :class="{ active: isLinkActive('/organigrama') }"
                  >Organigrama</NuxtLink
                >
              </li>
              <li>
                <NuxtLink
                  to="/directorio"
                  :class="{ active: isLinkActive('/directorio') }"
                  >Directorio</NuxtLink
                >
              </li>
            </ul>
          </li>
          <li>
            <NuxtLink
              to="/noticias"
              :class="{ active: isLinkActive('/noticias') }"
              >Noticias</NuxtLink
            >
          </li>
          <li>
            <NuxtLink
              to="/participe"
              :class="{ active: isLinkActive('/participe') }"
              >Participación Ciudadana</NuxtLink
            >
          </li>
          <li class="dropdown">
            <a href="#"
              ><span>Galerias</span>
              <i class="bi bi-chevron-down dropdown-indicator"></i
            ></a>
            <ul>
              <li>
                <NuxtLink
                  to="/galeria-fotos"
                  :class="{ active: isLinkActive('/galeria-fotos') }"
                  >Fotos</NuxtLink
                >
              </li>
              <li>
                <NuxtLink
                  to="/galeria-videos"
                  :class="{ active: isLinkActive('/galeria-videos') }"
                  >Videos</NuxtLink
                >
              </li>
            </ul>
          </li>
          <li>
            <NuxtLink
              to="/transmisiones"
              :class="{ active: isLinkActive('/transmisiones') }"
              >Transmisiones</NuxtLink
            >
          </li>
          <li>
            <NuxtLink
              to="/contacto"
              :class="{ active: isLinkActive('/contacto') }"
              >Contacto</NuxtLink
            >
          </li>
          <li>
            <NuxtLink
              to="/sabia-usted"
              :class="{ active: isLinkActive('/sabia-usted') }"
              >Sabia Usted</NuxtLink
            >
          </li>
          <li>
            <NuxtLink to="/carta" :class="{ active: isLinkActive('/carta') }"
              >Carta Orgánica</NuxtLink
            >
          </li>
          <!-- <li><a class="get-a-quote" href="get-a-quote.html">Get a Quote</a></li> -->
        </ul>
      </nav>
      <!-- .navbar -->
    </div>
  </header>
  <!-- End Header -->
  <!-- End Header -->
  <!-- ======= Hero Section ======= -->
  <router-view />
  <!-- <div id="preloader"></div> -->

  <!-- ======= Footer ======= -->
  <div class="contenedor-wave overflow-hidden">
    <img src="/img/footer.png" alt="" class="wave" />
  </div>
  <footer id="footer" class="footer bg-info">
    <div class="container">
      <div class="row gy-4">
        <div class="col-lg-5 col-md-12 footer-info">
          <a href="index.html" class="logo d-flex align-items-center">
            <img src="/img/logoCM.png" alt="" />
          </a>
          <p>
            Cras fermentum odio eu feugiat lide par naso tierra. Justo eget nada
            terra videa magna derita valies darta donna mare fermentum iaculis
            eu non diam phasellus.
          </p>
          <div class="social-links d-flex mt-4">
            <a href="#" class="twitter"><i class="bi bi-twitter"></i></a>
            <a href="#" class="facebook"><i class="bi bi-facebook"></i></a>
            <a href="#" class="instagram"><i class="bi bi-instagram"></i></a>
            <a href="#" class="linkedin"><i class="bi bi-linkedin"></i></a>
          </div>
        </div>

        <div class="col-lg-2 col-6 footer-links">
          <h4>Acerca de</h4>
          <ul>
            <li><NuxtLink to="/" href="#">Inicio</NuxtLink></li>
            <li><NuxtLink to="/about" href="#">Misión y Visión</NuxtLink></li>
            <li>
              <NuxtLink to="/transmisiones" href="#">Transmisiones</NuxtLink>
            </li>
            <li><NuxtLink to="/galeria-fotos" href="#">Fotos</NuxtLink></li>
            <li><NuxtLink to="/galeria-videos" href="#">Videos</NuxtLink></li>
          </ul>
        </div>

        <div class="col-lg-2 col-6 footer-links">
          <h4>Nuestros Servicios</h4>
          <ul>
            <li><NuxtLink to="/" href="#">Inicio</NuxtLink></li>
            <li><NuxtLink to="/about" href="#">Misión y Visión</NuxtLink></li>
            <li>
              <NuxtLink to="/transmisiones" href="#">Transmisiones</NuxtLink>
            </li>
            <li><NuxtLink to="/galeria-fotos" href="#">Fotos</NuxtLink></li>
            <li><NuxtLink to="/galeria-videos" href="#">Videos</NuxtLink></li>
          </ul>
        </div>

        <div
          class="col-lg-3 col-md-12 footer-contact text-center text-md-start"
        >
          <h4>Contacto</h4>
          <p>
            Plaza 25 de Mayo N° 1<br />
            Sucre<br />
            Bolivia<br /><br />
            <strong>Telefono:</strong> (0591)(4)- 6458131<br />
            <strong>Email:</strong> info@gacetamunicipalsucre.gob.bo<br />
          </p>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="copyright">
        &copy; Copyright <strong><span>Concejo Municipal</span></strong
        >. Todos los derechos reservados
      </div>
      <div class="credits">
        Designed by
        <a href="https://alberth.netlify.app" class="text-black fw-bold"
          >Alberth</a
        >
      </div>
    </div>
  </footer>
  <!-- End Footer -->
</template>

<script>
export default {
  methods: {
    isLinkActive(route) {
      return this.$route.path === route;
    },
  },
};
</script>
