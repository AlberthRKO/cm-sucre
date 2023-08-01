<template>
  <Head
    ><Title>Participación Ciudadana - Concejo Municipal de Sucre</Title></Head
  >
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
              <h2>Participación Ciudadana</h2>
            </div>
          </div>
        </div>
      </div>
      <nav>
        <div class="container">
          <ol>
            <li><NuxtLink to="/">Inicio</NuxtLink></li>
            <li>Participación Ciudadana</li>
          </ol>
        </div>
      </nav>
    </div>
    <!-- End Breadcrumbs -->
    <section id="about" class="pricing bg-white contact">
      <div class="container" data-aos="fade-up">
        <div class="row justify-content-center">
          <div class="col-lg-10">
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
                  <div class="section-header">
                    <span>Participación Ciudadana</span>
                    <h2>Participación <b>Ciudadana</b></h2>
                    <p>
                      Da tu opinion y comenta sobre un tema y forma parte de con
                      tu aportación al Concejo Municipal de Sucre
                    </p>
                  </div>
                  <form
                    action="forms/contact.php"
                    method="post"
                    role="form"
                    class="php-email-form px-3"
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
