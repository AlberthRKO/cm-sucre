<template>
  <Head>
    <Title>Concejo Municipal de Sucre</Title>
  </Head>
  <section id="hero" class="hero about d-flex align-items-center">
    <div class="container">
      <div class="row gy-4 d-flex justify-content-between">
        <div
          class="col-lg-6 order-2 order-lg-1 d-flex flex-column justify-content-center"
        >
          <h2 data-aos="fade-up" class="text-uppercase">
            <i>"Un Concejo de puertas abiertas"</i>
          </h2>
          <!-- <p data-aos="fade-up" data-aos-delay="100">
            Lorem Ipsum es simplemente el texto de relleno de las imprentas y
            archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar
            de las industrias desde el año 1500.
          </p> -->

          <form
            action="#"
            class="form-search d-flex align-items-stretch mb-3 d-none"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <input
              type="text"
              class="form-control"
              placeholder="ZIP code or CitY"
            />
            <button type="submit" class="btn btn-primary">Search</button>
          </form>

          <div
            class="row gy-4 row-stream"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <p class="text-white">Streams en vivo</p>

            <div
              class="col-lg-4 col-6 position-relative align-self-start stream-box"
            >
              <img src="/img/strams/stream1.jpg" class="img-fluid" alt="" />
              <a href="#" class="glightbox play-btn"></a>
            </div>
            <div
              class="col-lg-4 col-6 position-relative align-self-start stream-box"
            >
              <img src="/img/strams/stream2.jpg" class="img-fluid" alt="" />
              <a href="#" class="glightbox play-btn"></a>
            </div>
            <div
              class="col-lg-4 col-6 position-relative align-self-start stream-box"
            >
              <img src="/img/strams/stream3.jpg" class="img-fluid" alt="" />
              <a href="#" class="glightbox play-btn"></a>
            </div>
          </div>
        </div>

        <!-- <div class="col-lg-5 order-1 order-lg-2 hero-img d-none" data-aos="zoom-out">
          <img src="assets/img/hero-img.svg" class="img-fluid mb-3 mb-lg-0" alt="">
        </div> -->
      </div>
    </div>
    <!-- <svg
      id="wave"
      class="wave"
      style="transform: rotate(0deg); transition: 0.3s"
      viewBox="0 0 3000 170"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="sw-gradient-0" x1="0" x2="0" y1="1" y2="0">
          <stop stop-color="rgba(220, 53, 69, 1)" offset="0%"></stop>
          <stop stop-color="rgba(220, 53, 69, 1)" offset="100%"></stop>
        </linearGradient>
      </defs>
      <path
        style="transform: translate(0, 0px); opacity: 1"
        fill="url(#sw-gradient-0)"
        d="M0,27L80,31.5C160,36,320,45,480,72C640,99,800,144,960,166.5C1120,189,1280,189,1440,157.5C1600,126,1760,63,1920,49.5C2080,36,2240,72,2400,112.5C2560,153,2720,198,2880,211.5C3040,225,3200,207,3360,189C3520,171,3680,153,3840,148.5C4000,144,4160,153,4320,135C4480,117,4640,72,4800,67.5C4960,63,5120,99,5280,99C5440,99,5600,63,5760,67.5C5920,72,6080,117,6240,112.5C6400,108,6560,54,6720,27C6880,0,7040,0,7200,13.5C7360,27,7520,54,7680,85.5C7840,117,8000,153,8160,144C8320,135,8480,81,8640,81C8800,81,8960,135,9120,148.5C9280,162,9440,135,9600,139.5C9760,144,9920,180,10080,180C10240,180,10400,144,10560,130.5C10720,117,10880,126,11040,108C11200,90,11360,45,11440,22.5L11520,0L11520,270L11440,270C11360,270,11200,270,11040,270C10880,270,10720,270,10560,270C10400,270,10240,270,10080,270C9920,270,9760,270,9600,270C9440,270,9280,270,9120,270C8960,270,8800,270,8640,270C8480,270,8320,270,8160,270C8000,270,7840,270,7680,270C7520,270,7360,270,7200,270C7040,270,6880,270,6720,270C6560,270,6400,270,6240,270C6080,270,5920,270,5760,270C5600,270,5440,270,5280,270C5120,270,4960,270,4800,270C4640,270,4480,270,4320,270C4160,270,4000,270,3840,270C3680,270,3520,270,3360,270C3200,270,3040,270,2880,270C2720,270,2560,270,2400,270C2240,270,2080,270,1920,270C1760,270,1600,270,1440,270C1280,270,1120,270,960,270C800,270,640,270,480,270C320,270,160,270,80,270L0,270Z"
      ></path>
    </svg> -->
    <img src="/img/prueba.svg" alt="" class="wave" />
    <img src="/img/prueba2.svg" alt="" class="wave" />
  </section>
  <!-- End Hero Section -->
  <main id="main">
    <section id="about" class="about bg-white">
      <div class="container" data-aos="fade-up">
        <div class="section-header">
          <span>Transmisiones</span>
          <h2>Todas las <b>Transmisiones</b></h2>
        </div>

        <div class="row">
          <div class="slides-1 swiper py-4 px-3 px-md-0" data-aos="fade-up">
            <div class="swiper-wrapper">
              <div
                class="swiper-slide slide-item swiper-slide-visible swiper-slide-active"
              >
                <div class="block-images position-relative">
                  <div class="img-box">
                    <img src="/stream1.jpg" class="img-fluid" alt="asdas" />
                  </div>
                  <div class="block-description">
                    <div class="hover-buttons">
                      <a href="#" class="glightbox play-btn"></a>
                    </div>
                    <div class="detail-description">
                      <h6 class="iq-title">
                        <a href="video-detail.html">Titulo Stream</a>
                      </h6>

                      <div class="movie-time d-flex align-items-center">
                        <span class="text-white">1hr : 50mins</span>
                      </div>
                    </div>
                  </div>
                  <div class="block-social-info d-none">
                    <ul class="list-inline p-0 m-0 music-play-lists">
                      <li class="share">
                        <span><i class="fas fa-share"></i></span>
                        <div class="share-box">
                          <div
                            class="d-flex justify-content-center align-items-center gap-3"
                          >
                            <a
                              href="#"
                              target="_blank"
                              rel="noopener noreferrer"
                              class="share-ico"
                              tabindex="0"
                              ><i class="fab fa-facebook-f"></i
                            ></a>
                            <a
                              href="#"
                              target="_blank"
                              rel="noopener noreferrer"
                              class="share-ico"
                              tabindex="0"
                              ><i class="fab fa-twitter"></i
                            ></a>
                            <a
                              href="#"
                              data-link="#"
                              class="share-ico iq-copy-link"
                              tabindex="0"
                              ><i class="fas fa-link"></i
                            ></a>
                          </div>
                        </div>
                      </li>
                      <li>
                        <span><i class="fas fa-heart"></i></span>
                      </li>
                      <li>
                        <span><i class="fas fa-plus"></i></span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div
                class="swiper-slide slide-item swiper-slide-visible swiper-slide-active"
              >
                <div class="block-images position-relative">
                  <div class="img-box">
                    <img
                      src="/img/strams/stream2.jpg"
                      class="img-fluid"
                      alt=""
                      loading="lazy"
                    />
                  </div>
                  <div class="block-description">
                    <div class="hover-buttons">
                      <a href="#" class="glightbox play-btn"></a>
                    </div>
                    <div class="detail-description">
                      <h6 class="iq-title">
                        <a href="video-detail.html">Titulo Stream</a>
                      </h6>

                      <div class="movie-time d-flex align-items-center">
                        <span class="text-white">1hr : 50mins</span>
                      </div>
                    </div>
                  </div>
                  <div class="block-social-info d-none">
                    <ul class="list-inline p-0 m-0 music-play-lists">
                      <li class="share">
                        <span><i class="fas fa-share"></i></span>
                        <div class="share-box">
                          <div
                            class="d-flex justify-content-center align-items-center gap-3"
                          >
                            <a
                              href="#"
                              target="_blank"
                              rel="noopener noreferrer"
                              class="share-ico"
                              tabindex="0"
                              ><i class="fab fa-facebook-f"></i
                            ></a>
                            <a
                              href="#"
                              target="_blank"
                              rel="noopener noreferrer"
                              class="share-ico"
                              tabindex="0"
                              ><i class="fab fa-twitter"></i
                            ></a>
                            <a
                              href="#"
                              data-link="#"
                              class="share-ico iq-copy-link"
                              tabindex="0"
                              ><i class="fas fa-link"></i
                            ></a>
                          </div>
                        </div>
                      </li>
                      <li>
                        <span><i class="fas fa-heart"></i></span>
                      </li>
                      <li>
                        <span><i class="fas fa-plus"></i></span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div
                class="swiper-slide slide-item swiper-slide-visible swiper-slide-active"
              >
                <div class="block-images position-relative">
                  <div class="img-box">
                    <img
                      src="/img/strams/stream3.jpg"
                      class="img-fluid"
                      alt=""
                      loading="lazy"
                    />
                  </div>
                  <div class="block-description">
                    <div class="hover-buttons">
                      <a href="#" class="glightbox play-btn"></a>
                    </div>
                    <div class="detail-description">
                      <h6 class="iq-title">
                        <a href="video-detail.html">Titulo Stream</a>
                      </h6>

                      <div class="movie-time d-flex align-items-center">
                        <span class="text-white">1hr : 50mins</span>
                      </div>
                    </div>
                  </div>
                  <div class="block-social-info d-none">
                    <ul class="list-inline p-0 m-0 music-play-lists">
                      <li class="share">
                        <span><i class="fas fa-share"></i></span>
                        <div class="share-box">
                          <div
                            class="d-flex justify-content-center align-items-center gap-3"
                          >
                            <a
                              href="#"
                              target="_blank"
                              rel="noopener noreferrer"
                              class="share-ico"
                              tabindex="0"
                              ><i class="fab fa-facebook-f"></i
                            ></a>
                            <a
                              href="#"
                              target="_blank"
                              rel="noopener noreferrer"
                              class="share-ico"
                              tabindex="0"
                              ><i class="fab fa-twitter"></i
                            ></a>
                            <a
                              href="#"
                              data-link="#"
                              class="share-ico iq-copy-link"
                              tabindex="0"
                              ><i class="fas fa-link"></i
                            ></a>
                          </div>
                        </div>
                      </li>
                      <li>
                        <span><i class="fas fa-heart"></i></span>
                      </li>
                      <li>
                        <span><i class="fas fa-plus"></i></span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div
                class="swiper-slide slide-item swiper-slide-visible swiper-slide-active"
              >
                <div class="block-images position-relative">
                  <div class="img-box">
                    <img
                      src="/img/strams/stream1.jpg"
                      class="img-fluid"
                      alt=""
                      loading="lazy"
                    />
                  </div>
                  <div class="block-description">
                    <div class="hover-buttons">
                      <a href="#" class="glightbox play-btn"></a>
                    </div>
                    <div class="detail-description">
                      <h6 class="iq-title">
                        <a href="video-detail.html">Titulo Stream</a>
                      </h6>

                      <div class="movie-time d-flex align-items-center">
                        <span class="text-white">1hr : 50mins</span>
                      </div>
                    </div>
                  </div>
                  <div class="block-social-info d-none">
                    <ul class="list-inline p-0 m-0 music-play-lists">
                      <li class="share">
                        <span><i class="fas fa-share"></i></span>
                        <div class="share-box">
                          <div
                            class="d-flex justify-content-center align-items-center gap-3"
                          >
                            <a
                              href="#"
                              target="_blank"
                              rel="noopener noreferrer"
                              class="share-ico"
                              tabindex="0"
                              ><i class="fab fa-facebook-f"></i
                            ></a>
                            <a
                              href="#"
                              target="_blank"
                              rel="noopener noreferrer"
                              class="share-ico"
                              tabindex="0"
                              ><i class="fab fa-twitter"></i
                            ></a>
                            <a
                              href="#"
                              data-link="#"
                              class="share-ico iq-copy-link"
                              tabindex="0"
                              ><i class="fas fa-link"></i
                            ></a>
                          </div>
                        </div>
                      </li>
                      <li>
                        <span><i class="fas fa-heart"></i></span>
                      </li>
                      <li>
                        <span><i class="fas fa-plus"></i></span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div
                class="swiper-slide slide-item swiper-slide-visible swiper-slide-active"
              >
                <div class="block-images position-relative">
                  <div class="img-box">
                    <img
                      src="/img/strams/stream2.jpg"
                      class="img-fluid"
                      alt=""
                      loading="lazy"
                    />
                  </div>
                  <div class="block-description">
                    <div class="hover-buttons">
                      <a href="#" class="glightbox play-btn"></a>
                    </div>
                    <div class="detail-description">
                      <h6 class="iq-title">
                        <a href="video-detail.html">Titulo Stream</a>
                      </h6>

                      <div class="movie-time d-flex align-items-center">
                        <span class="text-white">1hr : 50mins</span>
                      </div>
                    </div>
                  </div>
                  <div class="block-social-info d-none">
                    <ul class="list-inline p-0 m-0 music-play-lists">
                      <li class="share">
                        <span><i class="fas fa-share"></i></span>
                        <div class="share-box">
                          <div
                            class="d-flex justify-content-center align-items-center gap-3"
                          >
                            <a
                              href="#"
                              target="_blank"
                              rel="noopener noreferrer"
                              class="share-ico"
                              tabindex="0"
                              ><i class="fab fa-facebook-f"></i
                            ></a>
                            <a
                              href="#"
                              target="_blank"
                              rel="noopener noreferrer"
                              class="share-ico"
                              tabindex="0"
                              ><i class="fab fa-twitter"></i
                            ></a>
                            <a
                              href="#"
                              data-link="#"
                              class="share-ico iq-copy-link"
                              tabindex="0"
                              ><i class="fas fa-link"></i
                            ></a>
                          </div>
                        </div>
                      </li>
                      <li>
                        <span><i class="fas fa-heart"></i></span>
                      </li>
                      <li>
                        <span><i class="fas fa-plus"></i></span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div
                class="swiper-slide slide-item swiper-slide-visible swiper-slide-active"
              >
                <div class="block-images position-relative">
                  <div class="img-box">
                    <img
                      src="/img/strams/stream3.jpg"
                      class="img-fluid"
                      alt=""
                      loading="lazy"
                    />
                  </div>
                  <div class="block-description">
                    <div class="hover-buttons">
                      <a href="#" class="glightbox play-btn"></a>
                    </div>
                    <div class="detail-description">
                      <h6 class="iq-title">
                        <a href="video-detail.html">Titulo Stream</a>
                      </h6>

                      <div class="movie-time d-flex align-items-center">
                        <span class="text-white">1hr : 50mins</span>
                      </div>
                    </div>
                  </div>
                  <div class="block-social-info d-none">
                    <ul class="list-inline p-0 m-0 music-play-lists">
                      <li class="share">
                        <span><i class="fas fa-share"></i></span>
                        <div class="share-box">
                          <div
                            class="d-flex justify-content-center align-items-center gap-3"
                          >
                            <a
                              href="#"
                              target="_blank"
                              rel="noopener noreferrer"
                              class="share-ico"
                              tabindex="0"
                              ><i class="fab fa-facebook-f"></i
                            ></a>
                            <a
                              href="#"
                              target="_blank"
                              rel="noopener noreferrer"
                              class="share-ico"
                              tabindex="0"
                              ><i class="fab fa-twitter"></i
                            ></a>
                            <a
                              href="#"
                              data-link="#"
                              class="share-ico iq-copy-link"
                              tabindex="0"
                              ><i class="fas fa-link"></i
                            ></a>
                          </div>
                        </div>
                      </li>
                      <li>
                        <span><i class="fas fa-heart"></i></span>
                      </li>
                      <li>
                        <span><i class="fas fa-plus"></i></span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="d-flex justify-content-center py-4">
          <NuxtLink to="/transmisiones" :offset="false" class="btn btn-primary"
            >Ver todo <i class="fas fa-arrow-right"></i
          ></NuxtLink>
        </div>
      </div>
    </section>
    <!-- End About Us Section -->

    <section id="portfolio" class="portfolio pt-5">
      <div class="container" data-aos="fade-up">
        <div class="section-header">
          <span>Galeria</span>
          <h2>Gal<b>eria</b></h2>
        </div>
        <div class="swiper slides-5">
          <div class="swiper-wrapper">
            <div class="swiper-slide">
              <div class="portfolio-item">
                <div class="portfolio-wrap">
                  <img src="/img/fotos/img1.jpeg" class="img-fluid" alt="" />
                  <div class="portfolio-info">
                    <h4>Titulo Foto</h4>
                    <p>Detalle de la foto</p>
                    <div class="portfolio-links">
                      <a
                        href="/img/fotos/img1.jpeg"
                        data-gallery="portfolioGallery"
                        class="portfolio-lightbox"
                        title="Preview de la Foto"
                        ><i class="fa fa-plus"></i
                      ></a>
                      <NuxtLink
                        to="/detail"
                        class="portfolio-details-lightbox"
                        data-glightbox="type: external"
                        title="Link al detalle de la Foto"
                        ><i class="fas fa-link"></i
                      ></NuxtLink>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="swiper-slide">
              <div class="portfolio-item">
                <div class="portfolio-wrap">
                  <img src="/img/fotos/img3.jpeg" class="img-fluid" alt="" />
                  <div class="portfolio-info">
                    <h4>Titulo Foto</h4>
                    <p>Detalle de la foto</p>
                    <div class="portfolio-links">
                      <a
                        href="/img/fotos/img3.jpeg"
                        data-gallery="portfolioGallery"
                        class="portfolio-lightbox"
                        title="Preview de la Foto"
                        ><i class="fa fa-plus"></i
                      ></a>
                      <NuxtLink
                        to="/detail"
                        class="portfolio-details-lightbox"
                        data-glightbox="type: external"
                        title="Link al detalle de la Foto"
                        ><i class="fas fa-link"></i
                      ></NuxtLink>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="swiper-slide">
              <div class="portfolio-item">
                <div class="portfolio-wrap">
                  <img src="/img/fotos/img4.jpg" class="img-fluid" alt="" />
                  <div class="portfolio-info">
                    <h4>Titulo Foto</h4>
                    <p>Detalle de la foto</p>
                    <div class="portfolio-links">
                      <a
                        href="/img/fotos/img4.jpg"
                        data-gallery="portfolioGallery"
                        class="portfolio-lightbox"
                        title="Preview de la Foto"
                        ><i class="fa fa-plus"></i
                      ></a>
                      <NuxtLink
                        to="/detail"
                        class="portfolio-details-lightbox"
                        data-glightbox="type: external"
                        title="Link al detalle de la Foto"
                        ><i class="fas fa-link"></i
                      ></NuxtLink>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="swiper-slide">
              <div class="portfolio-item">
                <div class="portfolio-wrap">
                  <img src="/img/fotos/img5.jpeg" class="img-fluid" alt="" />
                  <div class="portfolio-info">
                    <h4>Titulo Foto</h4>
                    <p>Detalle de la foto</p>
                    <div class="portfolio-links">
                      <a
                        href="/img/fotos/img5.jpeg"
                        data-gallery="portfolioGallery"
                        class="portfolio-lightbox"
                        title="Preview de la Foto"
                        ><i class="fa fa-plus"></i
                      ></a>
                      <NuxtLink
                        to="/detail"
                        class="portfolio-details-lightbox"
                        data-glightbox="type: external"
                        title="Link al detalle de la Foto"
                        ><i class="fas fa-link"></i
                      ></NuxtLink>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="swiper-slide">
              <div class="portfolio-item">
                <div class="portfolio-wrap">
                  <img src="/img/fotos/img7.jpeg" class="img-fluid" alt="" />
                  <div class="portfolio-info">
                    <h4>Titulo Foto</h4>
                    <p>Detalle de la foto</p>
                    <div class="portfolio-links">
                      <a
                        href="/img/fotos/img7.jpeg"
                        data-gallery="portfolioGallery"
                        class="portfolio-lightbox"
                        title="Preview de la Foto"
                        ><i class="fa fa-plus"></i
                      ></a>
                      <NuxtLink
                        to="/detail"
                        class="portfolio-details-lightbox"
                        data-glightbox="type: external"
                        title="Link al detalle de la Foto"
                        ><i class="fas fa-link"></i
                      ></NuxtLink>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="swiper-slide">
              <div class="portfolio-item">
                <div class="portfolio-wrap">
                  <img src="/img/fotos/img3.jpeg" class="img-fluid" alt="" />
                  <div class="portfolio-info">
                    <h4>Titulo Foto</h4>
                    <p>Detalle de la foto</p>
                    <div class="portfolio-links">
                      <a
                        href="/img/fotos/img3.jpeg"
                        data-gallery="portfolioGallery"
                        class="portfolio-lightbox"
                        title="Preview de la Foto"
                        ><i class="fa fa-plus"></i
                      ></a>
                      <NuxtLink
                        to="/detail"
                        class="portfolio-details-lightbox"
                        data-glightbox="type: external"
                        title="Link al detalle de la Foto"
                        ><i class="fas fa-link"></i
                      ></NuxtLink>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="swiper-slide">
              <div class="portfolio-item">
                <div class="portfolio-wrap">
                  <img src="/img/fotos/img4.jpg" class="img-fluid" alt="" />
                  <div class="portfolio-info">
                    <h4>Titulo Foto</h4>
                    <p>Detalle de la foto</p>
                    <div class="portfolio-links">
                      <a
                        href="/img/fotos/img4.jpg"
                        data-gallery="portfolioGallery"
                        class="portfolio-lightbox"
                        title="Preview de la Foto"
                        ><i class="fa fa-plus"></i
                      ></a>
                      <NuxtLink
                        to="/detail"
                        class="portfolio-details-lightbox"
                        data-glightbox="type: external"
                        title="Link al detalle de la Foto"
                        ><i class="fas fa-link"></i
                      ></NuxtLink>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="swiper-slide">
              <div class="portfolio-item">
                <div class="portfolio-wrap">
                  <img src="/img/fotos/img5.jpeg" class="img-fluid" alt="" />
                  <div class="portfolio-info">
                    <h4>Titulo Foto</h4>
                    <p>Detalle de la foto</p>
                    <div class="portfolio-links">
                      <a
                        href="/img/fotos/img5.jpeg"
                        data-gallery="portfolioGallery"
                        class="portfolio-lightbox"
                        title="Preview de la Foto"
                        ><i class="fa fa-plus"></i
                      ></a>
                      <NuxtLink
                        to="/detail"
                        class="portfolio-details-lightbox"
                        data-glightbox="type: external"
                        title="Link al detalle de la Foto"
                        ><i class="fas fa-link"></i
                      ></NuxtLink>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="swiper-slide">
              <div class="portfolio-item">
                <div class="portfolio-wrap">
                  <img src="/img/fotos/img7.jpeg" class="img-fluid" alt="" />
                  <div class="portfolio-info">
                    <h4>Titulo Foto</h4>
                    <p>Detalle de la foto</p>
                    <div class="portfolio-links">
                      <a
                        href="/img/fotos/img7.jpeg"
                        data-gallery="portfolioGallery"
                        class="portfolio-lightbox"
                        title="Preview de la Foto"
                        ><i class="fa fa-plus"></i
                      ></a>
                      <NuxtLink
                        to="/detail"
                        class="portfolio-details-lightbox"
                        data-glightbox="type: external"
                        title="Link al detalle de la Foto"
                        ><i class="fas fa-link"></i
                      ></NuxtLink>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="swiper-slide">
              <div class="portfolio-item">
                <div class="portfolio-wrap">
                  <img src="/img/fotos/img3.jpeg" class="img-fluid" alt="" />
                  <div class="portfolio-info">
                    <h4>Titulo Foto</h4>
                    <p>Detalle de la foto</p>
                    <div class="portfolio-links">
                      <a
                        href="/img/fotos/img3.jpeg"
                        data-gallery="portfolioGallery"
                        class="portfolio-lightbox"
                        title="Preview de la Foto"
                        ><i class="fa fa-plus"></i
                      ></a>
                      <NuxtLink
                        to="/detail"
                        class="portfolio-details-lightbox"
                        data-glightbox="type: external"
                        title="Link al detalle de la Foto"
                        ><i class="fas fa-link"></i
                      ></NuxtLink>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="swiper-slide">
              <div class="portfolio-item">
                <div class="portfolio-wrap">
                  <img src="/img/fotos/img4.jpg" class="img-fluid" alt="" />
                  <div class="portfolio-info">
                    <h4>Titulo Foto</h4>
                    <p>Detalle de la foto</p>
                    <div class="portfolio-links">
                      <a
                        href="/img/fotos/img4.jpg"
                        data-gallery="portfolioGallery"
                        class="portfolio-lightbox"
                        title="Preview de la Foto"
                        ><i class="fa fa-plus"></i
                      ></a>
                      <NuxtLink
                        to="/detail"
                        class="portfolio-details-lightbox"
                        data-glightbox="type: external"
                        title="Link al detalle de la Foto"
                        ><i class="fas fa-link"></i
                      ></NuxtLink>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="swiper-slide">
              <div class="portfolio-item">
                <div class="portfolio-wrap">
                  <img src="/img/fotos/img5.jpeg" class="img-fluid" alt="" />
                  <div class="portfolio-info">
                    <h4>Titulo Foto</h4>
                    <p>Detalle de la foto</p>
                    <div class="portfolio-links">
                      <a
                        href="/img/fotos/img5.jpeg"
                        data-gallery="portfolioGallery"
                        class="portfolio-lightbox"
                        title="Preview de la Foto"
                        ><i class="fa fa-plus"></i
                      ></a>
                      <NuxtLink
                        to="/detail"
                        class="portfolio-details-lightbox"
                        data-glightbox="type: external"
                        title="Link al detalle de la Foto"
                        ><i class="fas fa-link"></i
                      ></NuxtLink>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="swiper-slide">
              <div class="portfolio-item">
                <div class="portfolio-wrap">
                  <img src="/img/fotos/img7.jpeg" class="img-fluid" alt="" />
                  <div class="portfolio-info">
                    <h4>Titulo Foto</h4>
                    <p>Detalle de la foto</p>
                    <div class="portfolio-links">
                      <a
                        href="/img/fotos/img7.jpeg"
                        data-gallery="portfolioGallery"
                        class="portfolio-lightbox"
                        title="Preview de la Foto"
                        ><i class="fa fa-plus"></i
                      ></a>
                      <NuxtLink
                        to="/detail"
                        class="portfolio-details-lightbox"
                        data-glightbox="type: external"
                        title="Link al detalle de la Foto"
                        ><i class="fas fa-link"></i
                      ></NuxtLink>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Agrega más slides aquí -->
          </div>
          <div class="slider-controler">
            <!-- <div class="swiper-button-prev slider-arrow text-danger">
              <i class="fas fa-arrow-left"></i>
            </div>
            <div class="swiper-button-next slider-arrow text-danger">
              <i class="fas fa-arrow-right"></i>
            </div> -->
            <!-- <div class="swiper-pagination swiper-pagination-5"></div> -->
          </div>
        </div>

        <div class="d-flex justify-content-center py-4">
          <NuxtLink to="/galeria-fotos" class="btn btn-primary"
            >Ver todas las Fotos <i class="fas fa-arrow-right"></i
          ></NuxtLink>
        </div>
      </div>
    </section>

    <!-- ======= Testimonials Section ======= -->
    <section id="galeria" class="galeria d-none">
      <div class="container">
        <div class="section-header">
          <span>Galeria</span>
          <h2>Gal<b>eria</b></h2>
        </div>
        <div class="swiper slide-galeria">
          <div class="swiper-wrapper">
            <div class="swiper-slide">
              <img
                src="/img/galeria/img_1.jpg"
                class="img-fluid"
                alt=""
                loading="lazy"
              />
            </div>
            <div class="swiper-slide">
              <img
                src="/img/galeria/img_2.jpg"
                class="img-fluid"
                alt=""
                loading="lazy"
              />
            </div>
            <div class="swiper-slide">
              <img
                src="/img/galeria/img_3.jpg"
                class="img-fluid"
                alt=""
                loading="lazy"
              />
            </div>
            <div class="swiper-slide">
              <img
                src="/img/galeria/img_4.jpg"
                class="img-fluid"
                alt=""
                loading="lazy"
              />
            </div>
            <div class="swiper-slide">
              <img
                src="/img/galeria/img_5.jpg"
                class="img-fluid"
                alt=""
                loading="lazy"
              />
            </div>
            <div class="swiper-slide">
              <img
                src="/img/galeria/img_6.jpg"
                class="img-fluid"
                alt=""
                loading="lazy"
              />
            </div>
            <div class="swiper-slide">
              <img
                src="/img/galeria/img_7.jpg"
                class="img-fluid"
                alt=""
                loading="lazy"
              />
            </div>
            <!-- Agrega más slides aquí -->
          </div>
          <div class="slider-controler">
            <div class="swiper-button-prev slider-arrow text-danger">
              <i class="fas fa-arrow-left"></i>
            </div>
            <div class="swiper-button-next slider-arrow text-danger">
              <i class="fas fa-arrow-right"></i>
            </div>
            <div class="swiper-pagination"></div>
          </div>
        </div>
        <div class="d-flex justify-content-center py-4">
          <NuxtLink to="/galeria-fotos" class="btn btn-primary"
            >Ver todas las Fotos <i class="fas fa-arrow-right"></i
          ></NuxtLink>
        </div>
      </div>
    </section>
    <!-- End Testimonials Section -->

    <section id="noticias" class="pricing pt-5">
      <div class="container" data-aos="fade-up">
        <div class="section-header">
          <span>Noticias</span>
          <h2>Noti<b>cias</b></h2>
        </div>
        <div class="swiper slides-2">
          <div class="swiper-wrapper">
            <div class="swiper-slide">
              <div class="pricing-item">
                <div class="row" data-aos="fade-up">
                  <div class="col-md-5">
                    <img
                      src="/img/noticia1.jpg"
                      class="img-fluid cover-image"
                      alt="Imagen"
                    />
                  </div>
                  <div class="col-md-7">
                    <span class="badge badge-primary bg-danger mb-2"
                      >Noticia</span
                    >
                    <h3>
                      El Presidente del Concejo Municipal, e reunió con
                      dirigentes campesinos de la Comunidad de Pinos
                    </h3>
                    <span
                      ><i class="fas fa-calendar-alt text-danger"></i> Publicado
                      el: <b>2023-08-05</b></span
                    >
                    <p class="fst-italic mt-2">
                      El Presidente del Concejo Municipal, e reunió con
                      dirigentes campesinos de la Comunidad de Pinos
                    </p>
                    <NuxtLink to="/detail" class="btn btn-primary"
                      >Saber Más <i class="fas fa-paper-plane"></i
                    ></NuxtLink>
                  </div>
                </div>
                <!-- Features Item -->
              </div>
            </div>
            <div class="swiper-slide">
              <div class="pricing-item">
                <div class="row" data-aos="fade-up">
                  <div class="col-md-5">
                    <img
                      src="/img/noticia2.jpg"
                      class="img-fluid cover-image"
                      alt="Imagen"
                    />
                  </div>
                  <div class="col-md-7">
                    <span class="badge badge-primary bg-danger mb-2"
                      >Noticia</span
                    >
                    <h3>
                      Gobierno Municipal de Tarija, Concejo Municipal, rindieron
                      homenaje a los LXXVI Aniversario de la USFX
                    </h3>
                    <span
                      ><i class="fas fa-calendar-alt text-danger"></i> Publicado
                      el: <b>2023-08-05</b></span
                    >
                    <p class="fst-italic">
                      Gobierno Municipal de Sucre, Concejo Municipal, rindieron
                      homenaje a los LXXVI Aniversario de la USFX
                    </p>
                    <NuxtLink to="/detail" class="btn btn-primary"
                      >Saber Más <i class="fas fa-paper-plane"></i
                    ></NuxtLink>
                  </div>
                </div>
                <!-- Features Item -->
              </div>
            </div>
            <div class="swiper-slide">
              <div class="pricing-item">
                <div class="row" data-aos="fade-up">
                  <div class="col-md-5">
                    <img
                      src="/img/noticia1.jpg"
                      class="img-fluid cover-image"
                      alt="Imagen"
                    />
                  </div>
                  <div class="col-md-7">
                    <span class="badge badge-primary bg-danger mb-2"
                      >Noticia</span
                    >
                    <h3>
                      El Presidente del Concejo Municipal, e reunió con
                      dirigentes campesinos de la Comunidad de Pinos
                    </h3>
                    <span
                      ><i class="fas fa-calendar-alt text-danger"></i> Publicado
                      el: <b>2023-08-05</b></span
                    >
                    <p class="fst-italic mt-2">
                      El Presidente del Concejo Municipal, e reunió con
                      dirigentes campesinos de la Comunidad de Pinos
                    </p>
                    <NuxtLink to="/detail" class="btn btn-primary"
                      >Saber Más <i class="fas fa-paper-plane"></i
                    ></NuxtLink>
                  </div>
                </div>
                <!-- Features Item -->
              </div>
            </div>
            <div class="swiper-slide">
              <div class="pricing-item">
                <div class="row" data-aos="fade-up">
                  <div class="col-md-5">
                    <img
                      src="/img/noticia2.jpg"
                      class="img-fluid cover-image"
                      alt="Imagen"
                    />
                  </div>
                  <div class="col-md-7">
                    <span class="badge badge-primary bg-danger mb-2"
                      >Noticia</span
                    >
                    <h3>
                      Gobierno Municipal de Tarija, Concejo Municipal, rindieron
                      homenaje a los LXXVI Aniversario de la USFX
                    </h3>
                    <span
                      ><i class="fas fa-calendar-alt text-danger"></i> Publicado
                      el: <b>2023-08-05</b></span
                    >
                    <p class="fst-italic">
                      Gobierno Municipal de Sucre, Concejo Municipal, rindieron
                      homenaje a los LXXVI Aniversario de la USFX
                    </p>
                    <NuxtLink to="/detail" class="btn btn-primary"
                      >Saber Más <i class="fas fa-paper-plane"></i
                    ></NuxtLink>
                  </div>
                </div>
                <!-- Features Item -->
              </div>
            </div>

            <!-- Agrega más slides aquí -->
          </div>
        </div>

        <div class="d-flex justify-content-center py-4">
          <NuxtLink to="/noticias" class="btn btn-primary"
            >Ver todas las noticias <i class="fas fa-arrow-right"></i
          ></NuxtLink>
        </div>
      </div>
    </section>

    <section id="contact" class="contact">
      <div class="section-header">
        <span>Formulario de Contacto</span>
        <h2>Formulario de Contacto</h2>
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

    <section id="testimonials" class="testimonials team d-none">
      <div class="container">
        <div class="slides-1 swiper" data-aos="fade-up">
          <div class="swiper-wrapper">
            <div class="swiper-slide">
              <div class="member">
                <img src="/img/team/team-3.jpg" class="img-fluid" alt="" />
                <div class="member-content">
                  <h4>William Anderson</h4>
                  <span>Content</span>
                  <p>
                    Voluptas necessitatibus occaecati quia. Earum totam
                    consequuntur qui porro et laborum toro des clara
                  </p>
                  <div class="social">
                    <a href=""><i class="bi bi-twitter"></i></a>
                    <a href=""><i class="bi bi-facebook"></i></a>
                    <a href=""><i class="bi bi-instagram"></i></a>
                    <a href=""><i class="bi bi-linkedin"></i></a>
                  </div>
                </div>
              </div>
            </div>
            <!-- End testimonial item -->
            <div class="swiper-slide">
              <div class="member">
                <img src="/img/team/team-3.jpg" class="img-fluid" alt="" />
                <div class="member-content">
                  <h4>William Anderson</h4>
                  <span>Content</span>
                  <p>
                    Voluptas necessitatibus occaecati quia. Earum totam
                    consequuntur qui porro et laborum toro des clara
                  </p>
                  <div class="social">
                    <a href=""><i class="bi bi-twitter"></i></a>
                    <a href=""><i class="bi bi-facebook"></i></a>
                    <a href=""><i class="bi bi-instagram"></i></a>
                    <a href=""><i class="bi bi-linkedin"></i></a>
                  </div>
                </div>
              </div>
            </div>
            <!-- End testimonial item -->
            <div class="swiper-slide">
              <div class="member">
                <img src="/img/team/team-3.jpg" class="img-fluid" alt="" />
                <div class="member-content">
                  <h4>William Anderson</h4>
                  <span>Content</span>
                  <p>
                    Voluptas necessitatibus occaecati quia. Earum totam
                    consequuntur qui porro et laborum toro des clara
                  </p>
                  <div class="social">
                    <a href=""><i class="bi bi-twitter"></i></a>
                    <a href=""><i class="bi bi-facebook"></i></a>
                    <a href=""><i class="bi bi-instagram"></i></a>
                    <a href=""><i class="bi bi-linkedin"></i></a>
                  </div>
                </div>
              </div>
            </div>
            <!-- End testimonial item -->
            <div class="swiper-slide">
              <div class="member">
                <img src="/img/team/team-3.jpg" class="img-fluid" alt="" />
                <div class="member-content">
                  <h4>William Anderson</h4>
                  <span>Content</span>
                  <p>
                    Voluptas necessitatibus occaecati quia. Earum totam
                    consequuntur qui porro et laborum toro des clara
                  </p>
                  <div class="social">
                    <a href=""><i class="bi bi-twitter"></i></a>
                    <a href=""><i class="bi bi-facebook"></i></a>
                    <a href=""><i class="bi bi-instagram"></i></a>
                    <a href=""><i class="bi bi-linkedin"></i></a>
                  </div>
                </div>
              </div>
            </div>
            <!-- End testimonial item -->
          </div>
          <!-- <div class="swiper-pagination"></div> -->
        </div>
      </div>
    </section>
    <!-- End Testimonials Section -->
  </main>
  <a
    href="#"
    class="scroll-top d-flex align-items-center justify-content-center"
    ><i class="bi bi-arrow-up-short"></i
  ></a>
  <!-- <div id="preloader"></div> -->
</template>

<script>
useHead({
  title: "Concejo Municipal de Sucre",
  meta: [{ name: "description", content: "My amazing site." }],
  bodyAttrs: {
    class: "test",
  },
  script: [{}],
});

import Swiper from "swiper/bundle";

export default {
  beforeRouteLeave(to, from, next) {
    window.scrollTo(0, 0); // Vuelve al inicio de la página antes de salir de la página de inicio
    next();
  },

  data() {
    return {
      altText: "Descripción de la imagen",
    };
  },
  mounted() {
    new Swiper(".slides-1", {
      slidesPerView: 1, // Mostrar 3 slides en pantalla grande
      spaceBetween: 20,
      speed: 600,
      loop: true,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
      /* pagination: {
        el: ".swiper-pagination",
        type: "bullets",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      }, */
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
          slidesPerView: 3,
        },
      },
    });
    new Swiper(".slides-2", {
      slidesPerView: 1, // Mostrar 3 slides en pantalla grande
      spaceBetween: 20,
      speed: 600,
      loop: true,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
      /* pagination: {
        el: ".swiper-pagination",
        type: "bullets",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      }, */
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
          slidesPerView: 2,
        },
        // Cambia a 3 slides en dispositivos con ancho máximo de 1200px (típicamente pantallas medianas)
        1200: {
          slidesPerView: 2,
        },
      },
    });
    new Swiper(".slides-5", {
      // slidesPerView: 1, // Mostrar 3 slides en pantalla grande

      spaceBetween: 20,
      speed: 600,
      loop: true,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".swiper-pagination-5",
        type: "bullets",
        clickable: true,
      },
      /* 
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      }, */
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
          slidesPerView: 2,
        },
        // Cambia a 3 slides en dispositivos con ancho máximo de 1200px (típicamente pantallas medianas)
        1200: {
          slidesPerView: 3,
        },
      },
    });
    new Swiper(".slide-galeria", {
      effect: "coverflow",
      grabCursor: true,
      centeredSlides: true,
      loop: true,
      slidesPerView: "auto",
      coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 100,
        modifier: 2.5,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
        clickable: true,
      },
    });
  },
};
</script>
