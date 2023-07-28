<template>
  <Head><Title>Misión y Visión - Concejo Municipal de Sucre</Title></Head>
  <main id="main">
    <!-- ======= Breadcrumbs ======= -->
    <div class="breadcrumbs">
      <div
        class="page-header d-flex align-items-center"
        style="background-image: url('/img/about.jpg')"
      >
        <div class="container position-relative">
          <div class="row d-flex justify-content-center">
            <div class="col-lg-6 text-center">
              <h2>Misión y Visión</h2>
              <p>
                Odio et unde deleniti. Deserunt numquam exercitationem. Officiis
                quo odio sint voluptas consequatur ut a odio voluptatem. Sit
                dolorum debitis veritatis natus dolores. Quasi ratione sint. Sit
                quaerat ipsum dolorem.
              </p>
            </div>
          </div>
        </div>
      </div>
      <nav>
        <div class="container">
          <ol>
            <li><NuxtLink to="/">Inicio</NuxtLink></li>
            <li>Misión y Visión</li>
          </ol>
        </div>
      </nav>
    </div>
    <!-- End Breadcrumbs -->
    <section id="about" class="about bg-white">
      <div class="container" data-aos="fade-up">
        <div class="row gy-4">
          <div
            class="col-lg-6 position-relative align-self-start order-lg-last order-first"
          >
            <img src="/img/about.jpg" class="img-fluid" alt="" />
            <a href="#" class="glightbox play-btn"></a>
          </div>
          <div class="col-lg-6 content order-last order-lg-first">
            <h3>Misión</h3>
            <p>
              Dolor iure expedita id fuga asperiores qui sunt consequatur
              minima. Quidem voluptas deleniti. Sit quia molestiae quia quas qui
              magnam itaque veritatis dolores. Corrupti totam ut eius incidunt
              reiciendis veritatis asperiores placeat.
            </p>
            <ul>
              <li data-aos="fade-up" data-aos-delay="100">
                <i class="bi bi-diagram-3"></i>
                <div>
                  <h5>Ullamco laboris nisi ut aliquip consequat</h5>
                  <p>
                    Magni facilis facilis repellendus cum excepturi quaerat
                    praesentium libre trade
                  </p>
                </div>
              </li>
              <li data-aos="fade-up" data-aos-delay="200">
                <i class="bi bi-fullscreen-exit"></i>
                <div>
                  <h5>Magnam soluta odio exercitationem reprehenderi</h5>
                  <p>
                    Quo totam dolorum at pariatur aut distinctio dolorum
                    laudantium illo direna pasata redi
                  </p>
                </div>
              </li>
              <li data-aos="fade-up" data-aos-delay="300">
                <i class="bi bi-broadcast"></i>
                <div>
                  <h5>Voluptatem et qui exercitationem</h5>
                  <p>
                    Et velit et eos maiores est tempora et quos dolorem autem
                    tempora incidunt maxime veniam
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
    <!-- End About Us Section -->
    <section id="about" class="about bg-white">
      <div class="container" data-aos="fade-up">
        <div class="row gy-4">
          <div class="col-lg-6 position-relative align-self-start">
            <img src="/img/features-1.jpg" class="img-fluid" alt="" />
            <!-- <a
              href="#"
              class="glightbox play-btn"
            ></a> -->
          </div>
          <div class="col-lg-6 content">
            <h3>Visión</h3>
            <p>
              Dolor iure expedita id fuga asperiores qui sunt consequatur
              minima. Quidem voluptas deleniti. Sit quia molestiae quia quas qui
              magnam itaque veritatis dolores. Corrupti totam ut eius incidunt
              reiciendis veritatis asperiores placeat.
            </p>
            <ul>
              <li data-aos="fade-up" data-aos-delay="100">
                <i class="bi bi-diagram-3"></i>
                <div>
                  <h5>Ullamco laboris nisi ut aliquip consequat</h5>
                  <p>
                    Magni facilis facilis repellendus cum excepturi quaerat
                    praesentium libre trade
                  </p>
                </div>
              </li>
              <li data-aos="fade-up" data-aos-delay="200">
                <i class="bi bi-fullscreen-exit"></i>
                <div>
                  <h5>Magnam soluta odio exercitationem reprehenderi</h5>
                  <p>
                    Quo totam dolorum at pariatur aut distinctio dolorum
                    laudantium illo direna pasata redi
                  </p>
                </div>
              </li>
              <li data-aos="fade-up" data-aos-delay="300">
                <i class="bi bi-broadcast"></i>
                <div>
                  <h5>Voluptatem et qui exercitationem</h5>
                  <p>
                    Et velit et eos maiores est tempora et quos dolorem autem
                    tempora incidunt maxime veniam
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
    <!-- End About Us Section -->
  </main>
</template>
<script>
import Swiper from "swiper/bundle";

export default {
  beforeRouteLeave(to, from, next) {
    window.scrollTo(0, 0); // Vuelve al inicio de la página antes de salir de la página de inicio
    next();
  },
  mounted() {
    new Swiper(".slides-1", {
      slidesPerView: 1, // Mostrar 3 slides en pantalla grande
      spaceBetween: 20,
      // speed: 600,
      loop: true,
      /* autoplay: {
                delay: 5000,
                disableOnInteraction: false,
            }, */
      pagination: {
        el: ".swiper-pagination",
        type: "bullets",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      breakpoints: {
        // Cambia a 1 slide en dispositivos con ancho máximo de 768px (típicamente dispositivos móviles)
        567: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        // Cambia a 2 slides en dispositivos con ancho máximo de 992px (típicamente tabletas)
        992: {
          slidesPerView: 3,
        },
        // Cambia a 3 slides en dispositivos con ancho máximo de 1200px (típicamente pantallas medianas)
        1200: {
          slidesPerView: 4,
        },
      },
    });
  },
};
</script>
