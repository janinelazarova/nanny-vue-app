<template>
  <div class="nannies-search">
    <div id='map'></div>

    <!-- ====================================
  ——— JUMBOTRON
  ===================================== -->

    <!-- <section class="breadcrumb-bg" style="background-image: url(/assets/img/background/page-title-bg-img.jpg); "> -->
    <section class="breadcrumb-bg" style="background: linear-gradient(rgba(138,15,212,0.5), rgba(199,9,226,0.5)), url(/assets/img/background/page-title-bg-img.jpg); ">
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
      ——— COURSES SECTION
      ===================================== -->
      <section class="py-8 py-md-10">
        <div class="container">
          <div class="row">
            <!-- <div class="col-lg-6 col-sm-12 mb-4 mb-md-0 order-2 order-lg-0"> -->
              <!-- <div class="row"> -->
                <div class="col-md-6 col-lg-6">
                  <!-- <form class="" action="search-result.html">
                    <div class="card shadow-none bg-transparent">
                      <h3 class="card-header bg-warning font-weight-bold rounded-top text-white">Search</h3>
                      <div class="card-body border border-top-0 rounded-bottom">
                        <div class="input-group border-bottom pb-3 pt-4">
                          <input type="text" class="form-control border-0 px-1" placeholder="Enter Your Search" aria-describedby="basic-addon2">
                          <span class="input-group-addon" id="basic-addon2">
                            <input class="btn btn-sm btn-warning text-uppercase text-white shadow-sm" type="submit" value="Search">
                          </span>
                        </div>
                      </div>
                    </div>

                    <div class="card shadow-none bg-transparent overflow-hidden">
                      <h3 class="card-header bg-success font-weight-bold rounded-top text-white">Filter By</h3>
                      <div class="card-body border border-top-0 rounded-bottom">
                        <div class="filter">
                          <div class="mb-4 pt-3">
                            <select class="select2-select w-100 bg-white" name="state">
                              <option value="0">All Classes</option>
                              <option value="1">One</option>
                              <option value="2">Two</option>
                              <option value="3">Three</option>
                            </select>
                          </div>
                          <div class="mb-4">
                            <select class="select2-select w-100" name="state">
                              <option value="0">Ages</option>
                              <option value="1">05</option>
                              <option value="2">06</option>
                              <option value="3">07</option>
                              <option value="3">08</option>
                              <option value="3">09</option>
                            </select>
                          </div>
                        </div>

                        <div class="price-range mt-6" id="price-range">
                          <div class="mb-6" id="slider-non-linear-step"></div>
                          <div class="price-range-content">
                            <input class="btn btn-sm btn-success text-white text-uppercase" type="submit" value="Filter">
                            <span class="price-text">Price:</span>
                            <span class="price-value" id="lower-value"></span>
                            <span class="price-value" id="upper-value"></span>
                          </div>
                        </div>
                      </div>
                    </div> -->
                  <!-- </form> -->

                  <div class="card shadow-none bg-transparent overflow-hidden">
                    <h3 class="card-header bg-success font-weight-bold rounded-top text-white">Filter By</h3>
                    <div class="card-body border border-top-0 rounded-bottom">
                      <div class="filter">
                        <input class="btn btn-sm btn-success text-white text-uppercase" type="submit" value="Filter">
                        <input class="btn-sm  btn-white text-white text-uppercase" type="submit" value="Filter">
                        <input class="btn btn-sm btn-success text-white text-uppercase" type="submit" value="Filter">
                       
                      </div>

                      <div class="price-range mt-6" id="price-range">
                        <div class="mb-6" id="slider-non-linear-step"></div>
                        <div class="price-range-content">
                          <input class="btn btn-sm btn-success text-white text-uppercase" type="submit" value="Filter">
                          <span class="price-text">Price:</span>
                          <span class="price-value" id="lower-value"></span>
                          <span class="price-value" id="upper-value"></span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <form class="" action="search-result.html">
                    <div class="card shadow-none bg-transparent">
                      <h3 class="card-header bg-warning font-weight-bold rounded-top text-white">Search</h3>
                      <div class="card-body border border-top-0 rounded-bottom">
                        <div class="input-group border-bottom pb-3 pt-4">
                          <input type="text" class="form-control border-0 px-1" placeholder="Enter Your Search" aria-describedby="basic-addon2">
                          <span class="input-group-addon" id="basic-addon2">
                            <input class="btn btn-sm btn-warning text-uppercase text-white shadow-sm" type="submit" value="Search">
                          </span>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>

                <!-- <div class="col-md-6 col-lg-12">
                  <div class="card shadow-none rounded courseCountTimer"style="background-image: url(assets/img/courses/course-count.jpg">
                    <div class="card-body text-white p-2">
                      <div class="border rounded">
                        <h3 class="font-weight-bold text-center mb-6">Next Course Start In</h3>
                        <div id="courseTimer" class="mb-6"></div>
                        <div class="text-center">
                          <a href="course-single.html" class="btn btn-white text-info text-uppercase">view details</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div> -->
              <!-- </div> -->
           <!--  </div> -->

            <div v-for="nanny in filterBy(orderBy(nannies, sortAttribute), specializationFilter, 'specialization')" class="col-lg-8 col-sm-12">
              <div class="media media-list-view mb-5">
                <a class="media-img" href="course-single.html">
                  <img v-bind:src="nanny.image_url" alt="Image">
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

            </div>
          </div>
        </div>

      </section>

      <!-- ====================================
      ——— COURSES SECTION OLDDD
      ===================================== -->
      <section class="py-8 py-md-10">
        <div class="container">
          <div class="col-lg-12 col-sm-12 mb-4 mb-md-0 order-2">
            <div class="row">
              <div class="col-md-6 col-lg-5 justify-content-center">
                <form class="" action="search-result.html">
                  <div class="card shadow-none bg-transparent">
                    <h3 class="card-header bg-warning font-weight-bold rounded-top text-white">Search</h3>
                    <div class="card-body border border-top-0 rounded-bottom">
                      <div class="input-group border-bottom pb-3 pt-4">
                        <input type="text" class="form-control border-0 px-1" placeholder="Enter Your Search" aria-describedby="basic-addon2">
                        <span class="input-group-addon" id="basic-addon2">
                          <input class="btn btn-sm btn-warning text-uppercase text-white shadow-sm" type="submit" value="Search">
                        </span>
                      </div>
                    </div>
                  </div>
                </form>

                <div class="card shadow-none bg-transparent overflow-hidden">
                  <h3 class="card-header bg-success font-weight-bold rounded-top text-white">Filter By</h3>
                  <div class="card-body border border-top-0 rounded-bottom">
                    <div class="filter">
                      <div class="mb-4 pt-3">
                        <select class="select2-select w-100 bg-white" name="state">
                          <option value="0">All Classes</option>
                          <option value="1">One</option>
                          <option value="2">Two</option>
                          <option value="3">Three</option>
                        </select>
                      </div>
                      <div class="mb-4">
                        <select class="select2-select w-100" name="state">
                          <option value="0">Ages</option>
                          <option value="1">05</option>
                          <option value="2">06</option>
                          <option value="3">07</option>
                          <option value="3">08</option>
                          <option value="3">09</option>
                        </select>
                      </div>
                    </div>

                    <div class="price-range mt-6" id="price-range">
                      <div class="mb-6" id="slider-non-linear-step"></div>
                      <div class="price-range-content">
                        <input class="btn btn-sm btn-success text-white text-uppercase" type="submit" value="Filter">
                        <span class="price-text">Price:</span>
                        <span class="price-value" id="lower-value"></span>
                        <span class="price-value" id="upper-value"></span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            

            <div v-for="nanny in filterBy(orderBy(nannies, sortAttribute), specializationFilter, 'specialization')" class="col-lg-8 col-sm-12 ">
              <!-- <div class="media media-events-list bg-purple"> -->
              <div class="media media-list-view mb-5">
                <!-- <a class="media-img" href="course-single.html"> -->
                <a class="media-img position-relative" href="event-single-left-sidebar.html">
                  <img v-bind:src="nanny.image_url" alt="Image">
                </a>

                <div class="media-body">
                  <h3>
                    <router-link v-bind:to="'/nannies/' + nanny.id" class="text-pink text-capitalize d-block text-truncate">{{ nanny.first_name + ' ' + nanny.last_name}}</router-link>
                    <!-- <a class="text-warning" href="course-single.html">Phasellus convallis eros.</a> -->
                  </h3>

                  <ul class="list-unstyled mb-2">
                    <li class="text-pink mb-1 d-flex align-items-baseline">
                      <i class="fa fa-birthday-cake mr-2 text-pink" aria-hidden="true"></i>
                      {{ nanny.ages }} Years
                    </li>
                    <li class="text-pink mb-1 d-flex align-items-baseline">
                      <i class="fa fa-graduation-cap mr-2 text-pink" aria-hidden="true"></i>
                      Education
                    </li>
                    <li class="text-pink mb-1 d-flex align-items-baseline">
                      <i class="fa fa-paint-brush mr-2 text-pink" aria-hidden="true"></i>
                      {{ nanny.specialization }}
                    </li>
                    <li class="text-pink mb-1 d-flex align-items-baseline">
                      <i class="fa fa-taxi mr-2 text-pink" aria-hidden="true"></i>
                      {{ nanny.rate + '$' + ' / per hour' }}
                    </li>
                  </ul>

                  <!-- <ul class="list-unstyled d-flex text-muted mb-3">
                    <li class="mr-3">
                      <i class="fa fa-calendar-o mr-2" aria-hidden="true"></i>Age 2 to 4 Years
                    </li>
                    <li>
                      <i class="fa fa-clock-o mr-2" aria-hidden="true"></i>9.00AM-11.00AM
                    </li>
                  </ul> -->

                  <div class="">
                    <a href="product-cart.html" class="btn btn-sm btn-white text-uppercase mb-1 mr-2 btn-hover-warning">
                      <i class="fa fa-shopping-basket mr-2" aria-hidden="true"></i>Add to Cart
                    </a>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

       <!--  <div class="mt-6 mt-lg-8">

        </div> -->
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
            <div class="col-lg-12 col-sm-12 mb-4 mb-md-0 order-2 order-lg-0">
              <div class="row">

                <!-- <div class="col-md-12 col-lg-4">
                  <button class="btn btn-pink text-white text-uppercase">Sort By Rate</button>
                </div> -->


                <div class="col-md-12 col-lg-8">
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

                  <!-- <form class="" action="search-result.html">
                    <div class="card shadow-none bg-transparent">
                      <h3 class="card-header bg-warning font-weight-bold rounded-top text-white">Search</h3>
                      <div class="card-body border border-top-0 rounded-bottom">
                        <div class="input-group border-bottom pb-3 pt-4">
                          <input type="text" class="form-control border-0 px-1" placeholder="Enter Your Search" aria-describedby="basic-addon2">
                          <span class="input-group-addon" id="basic-addon2">
                            <input class="btn btn-sm btn-warning text-uppercase text-white shadow-sm" type="submit" value="Search">
                          </span>
                        </div>
                      </div>
                    </div>
                  </form> -->

                 <!--  <div class="card shadow-none bg-transparent overflow-hidden">
                    <h3 class="card-header bg-success font-weight-bold rounded-top text-white">Filter By</h3>
                    <div class="card-body border border-top-0 rounded-bottom">
                      <div class="filter">
                        <div class="mb-4 pt-3">
                          <select class="select2-select w-100 bg-white" name="state">
                            <option value="0">All Classes</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                          </select>
                        </div>
                        <div class="mb-4">
                          <select class="select2-select w-100" name="state">
                            <option value="0">Ages</option>
                            <option value="1">05</option>
                            <option value="2">06</option>
                            <option value="3">07</option>
                            <option value="3">08</option>
                            <option value="3">09</option>
                          </select>
                        </div>
                      </div>

                      <div class="price-range mt-6" id="price-range">
                        <div class="mb-6" id="slider-non-linear-step"></div>
                        <div class="price-range-content">
                          <input class="btn btn-sm btn-success text-white text-uppercase" type="submit" value="Filter">
                          <span class="price-text">Price:</span>
                          <span class="price-value" id=20></span>
                          <span class="price-value" id=30></span>
                        </div>
                      </div>
                    </div>
                  </div> -->
                </div>

                <div class="form-group">
                  <button class="btn btn-pink btn-lg text-white text-uppercase" v-on:click="setSortAttribute('rate')">Sort By Rate</button>
                  <button class="btn btn-pink btn-lg text-white text-uppercase" v-on:click="setSortAttribute('first_name')">Sort By Name</button>
                </div>
      
              </div>
            </div>

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
  #map {
    height: 500px;
  }
</style>

<script>
import axios from "axios";
import Vue2Filters from 'vue2-filters';

export default {
  mixins: [Vue2Filters.mixin],
  data: function() {
    return {
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
  },
  mounted: function() {
    mapboxgl.accessToken = 'pk.eyJ1IjoiamFuaW5pdG8iLCJhIjoiY2p4YW1idm1uMTg4cTN4bG1zMjN0ZXVlNyJ9.biAgrKD6Jj3e2_FFDyj2kA';
    var map = new mapboxgl.Map({
        container: 'map', // container id
        style: 'mapbox://styles/janinito/cjy5lf26i0t461cs00lq19pbk', // stylesheet location
        center: [-104.8, 39.75], // starting position [lng, lat]
        zoom: 9 // starting zoom
    });
   
    this.nannies.forEach(function(nanny) {
      console.log(this.nanny.first_name);
      // create the popup
      var popup = new mapboxgl.Popup({ offset: 25 })
      .setText(this.nanny.first_name);
      //create the marker
      var marker = new mapboxgl.Marker({
      draggable: true
      })
      .setLngLat([this.nanny.longitude, this.nanny.latitude ])
      .setPopup(popup) // sets a popup on this marker
      .addTo(map);   
    });
  }
};
</script>