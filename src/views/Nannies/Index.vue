<template>
  <div class="nannies-index">
    <!-- <h1>{{ message }}</h1> -->

    <!-- <div v-for="nanny in nannies">
      <router-link class="item-grid" v-bind:to="'/nannies/' + nanny.id">
        <h2>First Name: {{ nanny.first_name }}</h2>
        <h2>Last Name: {{ nanny.last_name }} </h2>
        <div class="image"><img v-bind:src="nanny.image_url" alt=""></div>
        <p>Ages: {{ nanny.ages }}</p>
        <p>Specialization: {{ nanny.specialization }}</p>
        <p>Bio: {{ nanny.bio }}</p>
      </router-link>
    </div> -->

    <section class="breadcrumb-bg" style="background-image: url(assets/img/background/page-title-bg-img.jpg); ">
      <div class="container">
        <div class="breadcrumb-holder">
          <div>
            <h1 class="breadcrumb-title">Kid Experts. Not Just Nannies. </h1>
            <ul class="breadcrumb breadcrumb-transparent">
              <li class="breadcrumb-item">
                <a class="text-white" href="index.html">Our unique community of teachers and artists blend their skills and talents with babysitting</a>
              </li>
              <!-- <li class="breadcrumb-item text-white active" aria-current="page">
                Services
              </li> -->
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- ====================================
    ——— SERVICE STYLE 3
    ===================================== -->
    <section class="pt-10 pb-7 pb-md-9">
      <div class="container">
        <div class="section-title justify-content-center mb-4 mb-md-8">
          <span class="shape shape-left bg-info"></span>
          <h2 class="text-danger">Why Our App is Special</h2>
          <span class="shape shape-right bg-info"></span>
        </div>

        <div class="row">
          <div class="col-md-6 col-lg-5 offset-lg-1 col-xl-4 offset-xl-2">
            <div class="media text-right mb-6">
              <div class="media-icon-large bg-warning rounded shadow-sm ml-auto mr-0 order-1">
                <i class="fa fa-graduation-cap border-0" aria-hidden="true"></i>
              </div>
              <div class="media-body mr-5">
                <h3 class="text-warning text-truncate">Experienced Teachers</h3>
                <p class="">Every carer on our platform is experienced at working with children, pre-screened and has a current Working License.</p>
              </div>
            </div>
          </div>

          <div class="col-md-6 col-lg-5 col-xl-4">
            <div class="media mb-6">
              <div class="media-icon-large bg-success rounded shadow-sm mr-5">
                <i class="fa fa-leaf border-0" aria-hidden="true"></i>
              </div>
              <div class="media-body">
                <h3 class="text-success text-truncate">Talented Professionals</h3>
                <p class="">Kid Experts are at the heart of our community. They are the talented and skilled professionals who create the unique experiences that inspire.</p>
              </div>
            </div>
          </div>

          <div class="col-md-6 col-lg-5 offset-lg-1 col-xl-4 offset-xl-2">
            <div class="media text-right mb-6">
              <div class="media-icon-large bg-purple rounded shadow-sm ml-auto mr-0 order-1">
                <i class="fa fa-heart border-0" aria-hidden="true"></i>
              </div>
              <div class="media-body mr-5">
                <h3 class="text-purple text-truncate">Love & Care</h3>
                <p class="">We understand that every family has different needs, so we've included features that allow a comprehensive booking process.</p>
              </div>
            </div>
          </div>

          <div class="col-md-6 col-lg-5 col-xl-4">
            <div class="media mb-6">
              <div class="media-icon-large bg-pink rounded shadow-sm mr-5">
                <i class="fa fa-shield border-0" aria-hidden="true"></i>
              </div>
              <div class="media-body">
                <h3 class="text-pink text-truncate">Easy To Use</h3>
                <p class="">With an efficient booking system Our App provides a fast and secure platform for you to find local nannies in your area.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ====================================
    ——— SERVICE STYLE 1
    ===================================== -->
    <section class="pt-9 pb-6">
      <div class="container">
        <div class="section-title justify-content-center mb-4 mb-md-8">
          <span class="shape shape-left bg-info"></span>
          <h2 class="text-danger">Find a Kid Expert</h2>
          <span class="shape shape-right bg-info"></span>
        </div>
      </div>
    </section>

    
        <div class="row wow fadeInUp">
          <!-- card -->
          <div v-for="nanny in nannies" class="col-sm-6 col-lg-3 col-xs-12">
            <div class="card">
              <a href="course-single-left-sidebar.html" class="position-relative">
                <img class="card-img-top" v-bind:src="nanny.image_url" alt="Card image">
                <div class="card-img-overlay">
                  <span class="badge badge-purple badge-rounded-circle">$50</span>
                </div>
              </a>
              <div class="card-body border-top-5 px-3 border-purple">
                <h3 class="card-title">
                  <a class="text-purple text-capitalize d-block text-truncate" href="course-single-left-sidebar.html">{{ nanny.first_name }}</a>
                </h3>
                <ul class="list-unstyled text-muted">
                  <li class="mb-1">
                    <i class="fa fa-calendar-o mr-2" aria-hidden="true"></i>Ages: {{ nanny.ages }}
                  </li>
                  <li>
                    <i class="fa fa-clock-o mr-2" aria-hidden="true"></i>9.00AM-11.00AM
                  </li>
                </ul>

                <p> {{ nanny.bio }} </p>
                <div class="d-block">
                  <a href="product-cart.html" class="btn btn-white text-uppercase mb-1 btn-hover-purple">
                    <i class="fa fa-shopping-basket mr-2" aria-hidden="true"></i>Book Me
                  </a>
                  <a href="course-single-left-sidebar.html" class="btn btn-link text-hover-purple pl-2 pl-lg-0">
                    <i class="fa fa-angle-double-right mr-1" aria-hidden="true"></i> More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- ====================================
              ——— FOOTER
              ===================================== -->
        <footer class="footer-bg-img">
          <!-- Footer Color Bar -->
          <div class="color-bar">
            <div class="container-fluid">
              <div class="row">
                <div class="col color-bar bg-warning"></div>
                <div class="col color-bar bg-danger"></div>
                <div class="col color-bar bg-success"></div>
                <div class="col color-bar bg-info"></div>
                <div class="col color-bar bg-purple"></div>
                <div class="col color-bar bg-pink"></div>
                <div class="col color-bar bg-warning d-none d-md-block"></div>
                <div class="col color-bar bg-danger d-none d-md-block"></div>
                <div class="col color-bar bg-success d-none d-md-block"></div>
                <div class="col color-bar bg-info d-none d-md-block"></div>
                <div class="col color-bar bg-purple d-none d-md-block"></div>
                <div class="col color-bar bg-pink d-none d-md-block"></div>
              </div>
            </div>
          </div>

          <div class="pt-8 pb-7  bg-repeat" style="background-image: url(assets/img/background/footer-bg-img-1.png);">
            <div class="container">
              <div class="row">
                <div class="col-sm-6 col-lg-3 col-xs-12">
                  <a class="mb-6 d-block" href="index.html">
                    <img class="img-fluid d-inline-block w-50 lazyestload" data-src="assets/img/logo-footer.png" src="assets/img/logo-footer.png">
                  </a>
                  <p class="mb-6">Excepteur sint occaecat cupidatat non proident, sunt in culpa officia.Lorem ipsum dolor sit
                    amet.</p>
                  <p class="mb-6">consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.</p>
                </div>

                <div class="col-sm-6 col-lg-3 col-xs-12">
                  <h4 class="section-title-sm font-weight-bold text-white mb-6">Useful Links</h4>
                  <ul class="list-unstyled">
                    <li class="mb-4">
                      <a href="index.html">
                        <i class="fa fa-angle-double-right mr-2" aria-hidden="true"></i>Kidz School
                      </a>
                    </li>
                    <li class="mb-4">
                      <a href="about-us.html">
                        <i class="fa fa-angle-double-right mr-2" aria-hidden="true"></i>About Kidz School
                      </a>
                    </li>
                    <li class="mb-4">
                      <a href="index-v2.html">
                        <i class="fa fa-angle-double-right mr-2" aria-hidden="true"></i>Kidz Store
                      </a>
                    </li>
                    <li class="mb-4">
                      <a href="index-v3.html">
                        <i class="fa fa-angle-double-right mr-2" aria-hidden="true"></i>Kidz Daycare
                      </a>
                    </li>
                    <li class="mb-3">
                      <a href="photo-gallery.html">
                        <i class="fa fa-angle-double-right mr-2" aria-hidden="true"></i>
                        Photo Gallery
                      </a>
                    </li>
                  </ul>
                </div>

                <div class="col-sm-6 col-lg-3 col-xs-12">
                  <h4 class="section-title-sm font-weight-bold text-white mb-6">Recent Post</h4>
                  <ul class="list-unstyled list-item-border-bottom">
                    <li class="mb-4 pb-4">
                      <div class="media">
                        <a class="mr-2" href="blog-single-left-sidebar.html">
                          <img class="rounded-lg w-100 border-warning border-2 d-block" data-src="assets/img/blog/blog-sm-img5.jpg"
                            src="assets/img/blog/blog-sm-img5.jpg" alt="blog-sm-img5.jpg">
                        </a>
                        <div class="media-body">
                          <h5 class="line-hight-16 mb-1">
                            <a class="font-base font-size-14" href="blog-single-left-sidebar.html">A Clean Website Gives More Experience To The
                              Visitors</a>
                          </h5>
                          <time class="text-white">July 7 - 2018</time>
                        </div>
                      </div>
                    </li>

                    <li class="mb-4 pb-4">
                      <div class="media">
                        <a class="mr-2" href="blog-single-left-sidebar.html">
                          <img class="rounded-lg w-100 border-success border-2 d-block" data-src="assets/img/blog/blog-sm-img-12.jpg"
                            src="assets/img/blog/blog-sm-img-12.jpg" alt="blog-sm-img-12.jpg">
                        </a>
                        <div class="media-body">
                          <h5 class="line-hight-16 mb-1">
                            <a class="font-base font-size-14" href="blog-single-left-sidebar.html">Duis aute irure dolor in reprehenderit
                              in voluptate.</a>
                          </h5>
                          <time class="text-white">Jun 7 - 2018</time>
                        </div>
                      </div>
                    </li>

                    <li class="mb-4 pb-4">
                      <div class="media">
                        <a class="mr-2" href="blog-single-left-sidebar.html">
                          <img class="rounded-lg w-100 border-info border-2 d-block" data-src="assets/img/blog/blog-sm-img7.jpg"
                            src="assets/img/blog/blog-sm-img7.jpg" alt="blog-sm-img7.jpg">
                        </a>
                        <div class="media-body">
                          <h5 class="line-hight-16 mb-1">
                            <a class="font-base font-size-14" href="blog-single-left-sidebar.html">Duis aute irure dolor in reprehenderit
                              in voluptate.</a>
                          </h5>
                          <time class="text-white">Jun 7 - 2018</time>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>

                <div class="col-sm-6 col-lg-3 col-xs-12">
                  <h4 class="section-title-sm font-weight-bold text-white mb-6">Mailing List</h4>
                  <p class="mb-4">Sign up for our mailing list to get latest updates and offers.</p>
                  <form class="mb-4" action="">
                    <div class="input-group shadow-light rounded-sm input-addon">
                      <input type="text" class="form-control py-4" placeholder="Email address" aria-describedby="basic-addon21">
                      <div class="input-group-append ">
                        <div class="input-group-text bg-danger">
                          <i class="fa fa-check text-white" aria-hidden="true"></i></div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>

          <!-- Copy Right -->
          <div class="copyright">
            <div class="container">
              <div class="row py-4 align-items-center">
                <div class="col-sm-7 col-xs-12 order-1 order-md-0">
                  <p class="copyright-text"> © 2019 Copyright Kiddo App <!-- <a href="http://www.iamabdus.com/" target="_blank">Abdus.</a> --></p>
                </div>

                <div class="col-sm-5 col-xs-12">
                  <ul class="list-inline d-flex align-items-center justify-content-md-end justify-content-center mb-md-0">
                    <li class="mr-3">
                      <a class="icon-rounded-circle-small bg-warning" href="javascript:void(0)">
                        <i class="fa fa-facebook text-white" aria-hidden="true"></i>
                      </a>
                    </li>
                    <li class="mr-3">
                      <a class="icon-rounded-circle-small bg-success" href="javascript:void(0)">
                        <i class="fa fa-twitter text-white" aria-hidden="true"></i>
                      </a>
                    </li>
                    <li class="mr-3">
                      <a class="icon-rounded-circle-small bg-danger" href="javascript:void(0)">
                        <i class="fa fa-google-plus text-white" aria-hidden="true"></i>
                      </a>
                    </li>
                    <li class="mr-3">
                      <a class="icon-rounded-circle-small bg-info" href="javascript:void(0)">
                        <i class="fa fa-pinterest-p text-white" aria-hidden="true"></i>
                      </a>
                    </li>
                    <li class="">
                      <a class="icon-rounded-circle-small bg-purple" href="javascript:void(0)">
                        <i class="fa fa-vimeo text-white" aria-hidden="true"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </footer>

 




  </div>
</template>

<style>
  img.card-img-top {
    max-height: 300px;
  }
</style>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      message: "Welcome to Nannies App",
      nannies: []
    };
  },
  created: function() {
    axios.get("/api/nannies").then(response => {
      this.nannies = response.data;
      console.log(this.nannies);
    });
  },
  methods: {}
};
</script>
