<template>
  <Head><Title>Sabia Usted - Concejo Municial de Sucre</Title></Head>
  <main id="main">
    <!-- ======= Breadcrumbs ======= -->
    <div class="breadcrumbs">
      <div
        class="page-header d-flex align-items-center"
        style="background-image: url('/img/page-header.jpg')"
      >
        <div class="container position-relative">
          <div class="row d-flex justify-content-center">
            <div class="col-lg-6 text-center">
              <h2>Sabia Usted</h2>
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
            <li>Sabia Usted</li>
          </ol>
        </div>
      </nav>
    </div>
    <!-- End Breadcrumbs -->
    <section id="about" class="pricing bg-white">
      <div class="container" data-aos="fade-up">
        <div class="section-header">
          <span>Sabia Usted</span>
          <h2>Sabia <b>Usted</b></h2>
        </div>

        <div class="row">
          <div class="col-lg-6 mb-3" data-aos="fade-up">
            <div class="pricing-item">
              <div class="row">
                <div class="col-md-5">
                  <img
                    src="/img/quote-bg.jpg"
                    class="img-fluid cover-image"
                    alt="Imagen"
                  />
                </div>
                <div class="col-md-7">
                  <span class="badge badge-primary bg-danger mb-2"
                    >Alertas</span
                  >
                  <h3>Titulo de la Temática</h3>
                  <p class="fst-italic">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                  <NuxtLink to="/detail" class="btn btn-primary"
                    >Saber Más <i class="fas fa-paper-plane"></i
                  ></NuxtLink>
                </div>
              </div>
              <!-- Features Item -->
            </div>
          </div>
          <div class="col-lg-6 mb-3" data-aos="fade-up">
            <div class="pricing-item">
              <div class="row">
                <div class="col-md-5">
                  <img
                    src="/img/warehousing-service.jpg"
                    class="img-fluid cover-image"
                    alt="Imagen"
                  />
                </div>
                <div class="col-md-7">
                  <span class="badge badge-secondary bg-danger mb-2"
                    >Seguridad</span
                  >
                  <h3>Titulo de la Temática</h3>
                  <p class="fst-italic">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                  <NuxtLink to="/detail" class="btn btn-primary"
                    >Saber Más <i class="fas fa-paper-plane"></i
                  ></NuxtLink>
                </div>
              </div>
              <!-- Features Item -->
            </div>
          </div>
          <div class="col-lg-6 mb-3" data-aos="fade-up">
            <div class="pricing-item">
              <div class="row">
                <div class="col-md-5">
                  <img
                    src="/img/trucking-service.jpg"
                    class="img-fluid cover-image"
                    alt="Imagen"
                  />
                </div>
                <div class="col-md-7">
                  <span class="badge badge-info bg-danger mb-2"
                    >Transporte</span
                  >
                  <h3>Titulo de la Temática</h3>
                  <p class="fst-italic">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                  <NuxtLink to="/detail" class="btn btn-primary"
                    >Saber Más <i class="fas fa-paper-plane"></i
                  ></NuxtLink>
                </div>
              </div>
              <!-- Features Item -->
            </div>
          </div>
          <div class="col-lg-6 mb-3" data-aos="fade-up">
            <div class="pricing-item">
              <div class="row">
                <div class="col-md-5">
                  <img
                    src="/img/testimonials-bg.jpg"
                    class="img-fluid cover-image"
                    alt="Imagen"
                  />
                </div>
                <div class="col-md-7">
                  <span class="badge badge-warning bg-danger mb-2"
                    >Reporte</span
                  >
                  <h3>Titulo de la Temática</h3>
                  <p class="fst-italic">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                  <NuxtLink to="/detail" class="btn btn-primary"
                    >Saber Más <i class="fas fa-paper-plane"></i
                  ></NuxtLink>
                </div>
              </div>
              <!-- Features Item -->
            </div>
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
