<template>
  <Head><Title>Valores - Concejo Municipal de Sucre</Title></Head>
  <main id="main">
    <!-- ======= Breadcrumbs ======= -->
    <div class="breadcrumbs">
      <div
        class="page-header d-flex align-items-center"
        style="background-image: url('/img/quote-bg.jpg')"
      >
        <div class="container position-relative">
          <div class="row d-flex justify-content-center">
            <div class="col-lg-6 text-center">
              <h2>Valores</h2>
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
            <li>Valores</li>
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
            <img src="/img/quote-bg.jpg" class="img-fluid" alt="" />
            <!-- <a
                href="#"
                class="glightbox play-btn"
              ></a> -->
          </div>
          <div class="col-lg-6 content order-last order-lg-first">
            <h3>Valores</h3>
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
                  <h5>Titulo Valor</h5>
                  <p>
                    Magni facilis facilis repellendus cum excepturi quaerat
                    praesentium libre trade
                  </p>
                </div>
              </li>
              <li data-aos="fade-up" data-aos-delay="200">
                <i class="bi bi-fullscreen-exit"></i>
                <div>
                  <h5>Titulo Valor</h5>
                  <p>
                    Quo totam dolorum at pariatur aut distinctio dolorum
                    laudantium illo direna pasata redi
                  </p>
                </div>
              </li>
              <li data-aos="fade-up" data-aos-delay="300">
                <i class="bi bi-broadcast"></i>
                <div>
                  <h5>Titulo Valor</h5>
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
export default {
  beforeRouteLeave(to, from, next) {
    window.scrollTo(0, 0); // Vuelve al inicio de la página antes de salir de la página de inicio
    next();
  },
};
</script>
