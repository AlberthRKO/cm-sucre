<template>
  <Head><Title>Carta Orgánica - Concejo Municial de Sucre</Title></Head>
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
              <h2>Carta Orgánica</h2>
            </div>
          </div>
        </div>
      </div>
      <nav>
        <div class="container">
          <ol>
            <li><NuxtLink to="/">Inicio</NuxtLink></li>
            <li>Carta Orgánica</li>
          </ol>
        </div>
      </nav>
    </div>
    <!-- End Breadcrumbs -->
    <section id="about" class="pricing bg-white">
      <div class="container" data-aos="fade-up">
        <div class="section-header">
          <span>Carta Orgánica</span>
          <h2>Carta <b>Orgánica</b></h2>
        </div>

        <div class="row">
          <div class="col-lg-6 mb-3" data-aos="fade-up">
            <div class="pricing-item">
              <div class="row">
                <div class="col-md-5">
                  <img
                    src="/img/packaging-service.jpg"
                    class="img-fluid cover-image"
                    alt="Imagen"
                  />
                </div>
                <div class="col-md-7">
                  <span class="badge badge-primary bg-danger mb-2"
                    >Tag 1 Carta</span
                  >
                  <h3>Titulo de la Carta</h3>
                  <p>15 Agosto 2023</p>
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
                    src="/img/service-details.jpg"
                    class="img-fluid cover-image"
                    alt="Imagen"
                  />
                </div>
                <div class="col-md-7">
                  <span class="badge badge-primary bg-danger mb-2"
                    >Tag 2 Carta</span
                  >
                  <h3>Titulo de la Carta</h3>
                  <p>7 Marzo 2023</p>
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
                    src="/img/logistics-service.jpg"
                    class="img-fluid cover-image"
                    alt="Imagen"
                  />
                </div>
                <div class="col-md-7">
                  <span class="badge badge-primary bg-danger mb-2"
                    >Tag 3 Carta</span
                  >
                  <h3>Titulo de la Carta</h3>
                  <p>23 Diciembre 2022</p>
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
                    src="/img/features-1.jpg"
                    class="img-fluid cover-image"
                    alt="Imagen"
                  />
                </div>
                <div class="col-md-7">
                  <span class="badge badge-primary bg-danger mb-2"
                    >Tag 4 Carta</span
                  >
                  <h3>Titulo de la Carta</h3>
                  <p>10 Abril 2022</p>
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
