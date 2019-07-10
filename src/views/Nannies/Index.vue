<template>
  <div class="nannies-index">

    <!-- ====================================
  ——— JUMBOTRON
  ===================================== -->

    <section class="breadcrumb-bg" style="background-image: url(/assets/img/background/page-title-bg-img.jpg); ">
      <div class="container">
        <div class="breadcrumb-holder">
          <div>
            <h1 class="breadcrumb-title">Meet Our Kid Experts.</h1>
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

    <div class="container">

      <!-- ====================================
      ——— SERVICE STYLE 3
      ===================================== -->
      <section class="pt-10 pb-7 pb-md-9">
        <div class="container">
          <div class="section-title justify-content-center mb-4 mb-md-8">
            <span class="shape shape-left bg-purple"></span>
            <h2 class="text-pink">Why Our App is Special</h2>
            <span class="shape shape-right bg-purple"></span>
          </div>

          <div class="row">
            <div class="col-md-6 col-lg-5 offset-lg-1 col-xl-4 offset-xl-2">
              <div class="media text-right mb-6">
                <div class="media-icon-large bg-pink rounded shadow-sm ml-auto mr-0 order-1">
                  <i class="fa fa-graduation-cap border-0" aria-hidden="true"></i>
                </div>
                <div class="media-body mr-5">
                  <h3 class="text-pink text-truncate">Experienced Teachers</h3>
                  <p class="">Every carer on our platform is experienced at working with children, pre-screened and has a current Working License.</p>
                </div>
              </div>
            </div>

            <div class="col-md-6 col-lg-5 col-xl-4">
              <div class="media mb-6">
                <div class="media-icon-large bg-purple rounded shadow-sm mr-5">
                  <i class="fa fa-leaf border-0" aria-hidden="true"></i>
                </div>
                <div class="media-body">
                  <h3 class="text-purple text-truncate">Talented Professionals</h3>
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
            <span class="shape shape-left bg-purple"></span>
            <h2 class="text-pink">Find a Kid Expert</h2>
            <span class="shape shape-right bg-purple"></span>
          </div>
        </div>
      </section>

      <!-- ====================================
      ——— NANNIES SECTION
      ===================================== -->
      <section class="pt-7 pb-9 pt-md-10">
        <div class="container">
          <div class="row">

            <div v-for="nanny in nannies" class="col-md-6">
              <div class="media media-events-list bg-purple">
                <a class="media-img position-relative" href="event-single-left-sidebar.html">
                  <img v-bind:src="nanny.image_url" alt="events-image">
                </a>

                <div class="media-body">
                  <h3 class="media-heading mb-4">
                    <router-link v-bind:to="'/nannies/' + nanny.id" class="text-white text-capitalize d-block text-truncate">{{ nanny.first_name + ' ' + nanny.last_name}}</router-link>
                  </h3>

                  <ul class="list-unstyled mb-2">
                    <li class="text-white mb-1 d-flex align-items-baseline">
                      <i class="fa fa-birthday-cake mr-2 text-white" aria-hidden="true"></i>
                      {{ nanny.ages }} Years
                    </li>
                    <li class="text-white mb-1 d-flex align-items-baseline">
                      <i class="fa fa-graduation-cap mr-2 text-white" aria-hidden="true"></i>
                      Education
                    </li>
                    <li class="text-white mb-1 d-flex align-items-baseline">
                      <i class="fa fa-paint-brush mr-2 text-white" aria-hidden="true"></i>
                      {{ nanny.specialization }}
                    </li>
                    <li class="text-white mb-1 d-flex align-items-baseline">
                      <i class="fa fa-taxi mr-2 text-white" aria-hidden="true"></i>
                      {{ nanny.rate + '$' + ' / per hour' }}
                    </li>
                  </ul>

                  <br>
                  <div class="mb-1">
                    <router-link v-bind:to="'/nannies/' + nanny.id" class="btn btn-white btn-sm text-uppercase text-hover-purple">view profile</router-link>
                  </div>            
                </div>
              </div>
            </div>

          </div>
        </div>

        <!-- <div class="mt-6"> -->
          <!-- ====================================
      ——— PAGINATION
      ===================================== -->
   <!--    <section class="py-5">
        <div class="container">
          <nav aria-label="Page navigation example">
            <nav aria-label="Page navigation example">
              <ul class="pagination justify-content-center align-items-center">
                <li class="page-item"><a class="page-link" href="#">
                  <i class="fa fa-arrow-left mr-1" aria-hidden="true"></i>
                  Prev
                </a>
                </li>
                <li class="page-item"><a class="page-link" href="#">1</a></li>
                <li class="page-item"><a class="page-link" href="#">2</a></li>
                <li class="page-item"><a class="page-link" href="#">3</a></li>
                <li class="page-item"><a class="page-link" href="#">...</a></li>
                <li class="page-item"><a class="page-link" href="#">15</a></li>
                <li class="page-item"><a class="page-link" href="#">
                  Next <i class="fa fa-arrow-right ml-1" aria-hidden="true"></i>
                </a>
                </li>
              </ul>
            </nav>      
          </nav>
        </div>
      </section> -->

        <!-- </div> -->
      </section>


    </div>

      

 




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
