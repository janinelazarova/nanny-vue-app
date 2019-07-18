<template>
  <div class="nannies-index">

    <!-- ====================================
  ——— JUMBOTRON
  ===================================== -->

    <!-- <section class="breadcrumb-bg" style="background-image: url(/assets/img/background/page-title-bg-img.jpg); "> -->
    <section class="breadcrumb-bg" style="background: linear-gradient(rgba(138,15,212,0.5), rgba(199,9,226,0.5)), url(/assets/img/page-title-bg-img.jpg); ">
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
      <section class="pt-10">
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
      ——— NANNIES SECTION
      ===================================== -->
      <section class="py-8 py-md-10">

        <div class="container">
          <div class="section-title justify-content-center mb-4 mb-md-8">
            <span class="shape shape-left bg-purple"></span>
            <h2 class="text-pink">Find a Kid Expert</h2>
            <span class="shape shape-right bg-purple"></span>
          </div>
        </div> 

        <div class="container">
          <div class="row">

            <div class="col-sm-12 col-lg-6">
              <form class="shadow-sm rounded mb-8">
                <div class="input-group input-group-lg">
                  <div class="input-group-prepend">
                    <span class="input-group-text bg-light border-0 px-4">
                      <i class="fa fa-search text-muted font-size-18" aria-hidden="true"></i>
                    </span>
                  </div>
                  <input type="text" class="form-control bg-light border-0 form-control-lg" aria-label="Amount (to the nearest dollar)"
                   placeholder="Search nanny by specialization..." v-model="specializationFilter" list="specializations" required="">
                  <div class="input-group-append">
                    <button type="submit" class="btn shadow-none btn-lg btn-pink text-white text-uppercase">Search</button>
                  </div>
                </div>
              </form>
            </div>

            <div class="col-sm-12 col-lg-6 form-group text-center sort-buttons">
              <button class="btn btn-pink btn-lg text-white text-uppercase ml-1 mr-1" v-on:click="setSortAttribute('rate')">Sort By Rate</button>
              <button class="btn btn-pink btn-lg text-white text-uppercase ml-1 mr-1" v-on:click="setSortAttribute('first_name')">Sort By Name</button>
            </div>
          
          </div>
          
          <div class="row">




            <!-- <div class="col-lg-9 col-sm-12">
              <div class="media media-list-view mb-5">
                <a class="media-img" href="course-single.html">
                  <img src="assets/img/courses/courses-img1.jpg" alt="Image">
                  <div class="media-img-overlay">
                    <span class="badge badge-warning badge-rounded-circle">$50</span>
                  </div>
                </a>

                <div class="media-body">
                  <h3>
                    <a class="text-warning" href="course-single.html">Phasellus convallis eros.</a>
                  </h3>

                  <ul class="list-unstyled d-flex text-muted mb-3">
                    <li class="mr-3">
                      <i class="fa fa-calendar-o mr-2" aria-hidden="true"></i>Age 2 to 4 Years
                    </li>
                    <li>
                      <i class="fa fa-clock-o mr-2" aria-hidden="true"></i>9.00AM-11.00AM
                    </li>
                  </ul>

                  <p class="text-justify mb-lg-2">They must explain to you how all this mistaken idea of denouncing pleasure and
                    praising pain was born and I will give you a complete account of the system, and expound the actual teachings of
                    the great explorer.</p>

                  <div class="">
                    <a href="product-cart.html" class="btn btn-sm btn-white text-uppercase mb-1 mr-2 btn-hover-warning">
                      <i class="fa fa-shopping-basket mr-2" aria-hidden="true"></i>Add to Cart
                    </a>
                    <a class="btn btn-link text-hover-warning text-underline pl-0" href="course-single.html">
                      <i class="fa fa-angle-double-right mr-1" aria-hidden="true"></i> More
                    </a>
                  </div>
                </div>
              </div>

            </div> -->

            <datalist id="specializations">
              <option v-for="nanny in nannies">{{ nanny.specialization }}</option>
            </datalist>

            <!-- <div v-for="nanny in filterBy(nannies, specializationFilter, 'specialization')" class="col-md-6"> -->
            <div v-for="nanny in filterBy(orderBy(nannies, sortAttribute), specializationFilter, 'specialization')" class="col-md-6">
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
                      {{ nanny.education }}
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

        <div class="mt-6 mt-lg-8">
          <!-- ====================================
      ——— PAGINATION
      ===================================== -->
      <!-- <section class="py-5">
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
      </section>


 -->

    
        </div>
      </section>


    </div>


  </div>
</template>

<style>
  img.card-img-top {
    max-height: 300px;
  }
  .sort-buttons button {
    height: 70px;
  }
</style>

<script>
import axios from "axios";
import Vue2Filters from 'vue2-filters';

export default {
  mixins: [Vue2Filters.mixin],
  data: function() {
    return {
      message: "Welcome to Nannies App",
      nannies: [],
      nameFilter: "",
      specializationFilter: "",
      sortAttribute: "first_name"
    };
  },
  created: function() {
    axios.get("/api/nannies").then(response => {
      this.nannies = response.data;
      console.log(this.nannies);
    });
  },
  methods: {
    setSortAttribute: function(attribute) {
      this.sortAttribute = attribute;
    }
  }
};
</script>
