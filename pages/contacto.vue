<template>
  <Head><Title>Contacto - Concejo Municipal de Sucre</Title></Head>
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
              <h2>Contacto</h2>
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
            <li>Contacto</li>
          </ol>
        </div>
      </nav>
    </div>
    <!-- End Breadcrumbs -->

    <section id="contact" class="contact">
      <div class="section-header">
        <span>Contacto</span>
        <h2>Contacto</h2>
      </div>
      <div class="container-fluid pb-5">
        <div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1585.6586490043126!2d-65.26031275988734!3d-19.04820700189501!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x93fbcf36656fb06b%3A0x5e4f23584d3c808f!2sPl.%2025%20de%20Mayo%2C%20Sucre!5e0!3m2!1ses!2sbo!4v1690395177304!5m2!1ses!2sbo"
            width="100%"
            height="350"
            style="border: 0"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <!-- End Google Maps -->
      </div>

      <div class="container" data-aos="fade-up">
        <div class="row gy-4 mt-4">
          <div class="col-lg-4">
            <div class="info-item d-flex">
              <i class="bi bi-geo-alt flex-shrink-0"></i>
              <div>
                <h4>Dirección:</h4>
                <p>Plaza 25 de Mayo N° 1, Sucre - Bolivia</p>
              </div>
            </div>
            <!-- End Info Item -->

            <div class="info-item d-flex">
              <i class="bi bi-envelope flex-shrink-0"></i>
              <div>
                <h4>Email:</h4>
                <p>info@gacetamunicipalsucre.gob.bo</p>
              </div>
            </div>
            <!-- End Info Item -->

            <div class="info-item d-flex">
              <i class="bi bi-phone flex-shrink-0"></i>
              <div>
                <h4>Telefono:</h4>
                <p>(0591)(4)- 6458131</p>
              </div>
            </div>
            <!-- End Info Item -->
          </div>

          <div class="col-lg-8">
            <form
              action="forms/contact.php"
              method="post"
              role="form"
              class="php-email-form"
            >
              <div class="row">
                <div class="col-md-6 form-group">
                  <input
                    type="text"
                    name="name"
                    class="form-control"
                    id="name"
                    placeholder="Nombre"
                    required
                  />
                </div>
                <div class="col-md-6 form-group mt-3 mt-md-0">
                  <input
                    type="email"
                    class="form-control"
                    name="email"
                    id="email"
                    placeholder="Email"
                    required
                  />
                </div>
              </div>
              <div class="form-group mt-3">
                <input
                  type="text"
                  class="form-control"
                  name="subject"
                  id="subject"
                  placeholder="Asunto"
                  required
                />
              </div>
              <div class="form-group mt-3">
                <textarea
                  class="form-control"
                  name="message"
                  rows="5"
                  placeholder="Mensaje"
                  required
                ></textarea>
              </div>
              <div class="my-3">
                <div class="loading">Cargando</div>
                <div class="error-message"></div>
                <div class="sent-message">
                  Tu mensaje ha sido enviado. Muchas Gracias!
                </div>
              </div>
              <div class="d-flex justify-content-center py-4">
                <NuxtLink to="/" class="btn btn-primary"
                  >Enviar Mensaje <i class="fas fa-paper-plane"></i
                ></NuxtLink>
              </div>
            </form>
          </div>
          <!-- End Contact Form -->
        </div>
      </div>
    </section>
    <!-- End Contact Section -->
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
