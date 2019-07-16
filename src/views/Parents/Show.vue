<template>
  <div class="parents-show">
    <!-- ====================================
    ——— Welcome SECTION
    ===================================== -->
    <section class=" py-md-3 bg-purple" style="background-image: url(/assets/img/background/avator-bg.png);">
        <div class="pt-5 pb-5 section-title justify-content-center mb-1 mb-md-3">
          <span class="shape shape-left bg-white"></span>
          <h2 class="text-white">{{ 'Welcome, ' + parent.first_name }}</h2>
          <span class="shape shape-right bg-white"></span>
        </div>
    </section>

    <div class="color-bars">
      <div class="container-fluid">
        <div class="row">
          <div class="col color-bar bg-warning d-none d-md-block"></div>
          <div class="col color-bar bg-success d-none d-md-block"></div>
          <div class="col color-bar bg-danger d-none d-md-block"></div>
          <div class="col color-bar bg-info d-none d-md-block"></div>
          <div class="col color-bar bg-purple d-none d-md-block"></div>
          <div class="col color-bar bg-pink d-none d-md-block"></div>
          <div class="col color-bar bg-warning"></div>
          <div class="col color-bar bg-success"></div>
          <div class="col color-bar bg-danger"></div>
          <div class="col color-bar bg-info"></div>
          <div class="col color-bar bg-purple"></div>
          <div class="col color-bar bg-pink"></div>
        </div>
      </div>
    </div>

   

    <div class="container">
     

     

      <!-- ====================================
      ——— JUMBOTRON
      ===================================== -->

      <!--   <section class="breadcrumb-bg" style="background: white; ">
          <div class="container">
            <div class="breadcrumb-holder">
              <div>
                <section>
                  <div class="section-title justify-content-center mb-5 mb-md-3">
                    <span class="shape shape-left bg-purple"></span>
                      <h2 class="text-pink">{{ parent.first_name + ' ' + parent.last_name + ' Profile' }}</h2>
                    <span class="shape shape-right bg-purple"></span>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </section> -->

      <!-- <div class="col-lg-12 mb-8"> -->
        <!--  mb-8 wow fadeInUp --> 
      <div class="col-lg-12">  
        <ul class="nav nav-pills justify-content-center pt-7 pb-3"  id="pills-tab" role="tablist">
          <li class="nav-item">
            <a class="nav-link active btn-purple" id="pills-home-tab" data-toggle="pill" href="#pills-personal-info" role="tab" aria-controls="pills-home"
              aria-selected="true">Personal Info</a>
          </li>
          <li class="nav-item">
            <a class="nav-link btn-purple" id="pills-profile-tab" data-toggle="pill" href="#pills-bookings" role="tab" aria-controls="pills-profile"
              aria-selected="false">My Bookings</a>
          </li>
          <li class="nav-item">
            <a class="nav-link btn-purple" id="pills-contact-tab" data-toggle="pill" href="#pills-reviews" role="tab" aria-controls="pills-contact"
              aria-selected="false">My Reviews</a>
          </li>
          <li class="nav-item">
            <router-link class="nav-link btn-purple" id="pills-contact-tab" data-toggle="pill" href="#pills-profile" role="tab" aria-controls="pills-contact"
              aria-selected="false" v-bind:to="'/parents/' + parent.id + '/edit'">
              Edit Profile
            </router-link>
          </li>
         <!--  <li class="nav-item">
            <router-link class="nav-link btn-purple" id="pills-contact-tab" data-toggle="pill" href="#pills-booking" role="tab" aria-controls="pills-contact"
              aria-selected="false" v-bind:to="/">
              create a new booking
            </router-link>
          </li> -->
        </ul>
        <div class="tab-content" id="pills-tabContent">
          <div class="tab-pane fade show active" id="pills-personal-info" role="tabpanel" aria-labelledby="pills-home-tab">
            <!-- ====================================
            ——— old parent profile
            ===================================== -->
                <section class="py-7 py-md-10">
                  <div class="container">
                   <!--  <div class="section-title justify-content-center mb-5 mb-md-8">
                      <span class="shape shape-left bg-purple"></span>
                      <h2 class="text-pink">My Profile</h2>
                      <span class="shape shape-right bg-purple"></span>
                    </div> -->


                      <div class="col-lg-12 col-md-12">
                        <div class="pb-4 mb-2">
                          <div class="section-title bg-purple rounded-top">
                            <h3 class="text-capitalize text-white font-weight-bold py-5 pl-3 mb-0">Parent Info</h3>
                          </div>
                          <div class="border border-top-0 rounded-bottom">
                            <div class="media p-3 border-bottom">
                              <!-- <div class="icon-rounded-circle-medium mr-3 bg-success">
                                <i class="fa fa-calendar text-white" aria-hidden="true"></i>
                              </div> -->
                              <div class="media-body">
                                <h4 class="text-uppercase text-purple mt-0 font-weight-bold">name</h4>
                                <time class="text-muted font-weight-bold">{{ parent.first_name + ' ' + parent.last_name}}</time>
                              </div>
                            </div>

                            <div class="media p-3 border-bottom">
                              <!-- <div class="icon-rounded-circle-medium mr-3 bg-danger">
                                <i class="fa fa-birthday-cake text-white" aria-hidden="true"></i>
                              </div> -->
                              <div class="media-body">
                                <h4 class="text-uppercase text-purple mt-0 font-weight-bold">
                                  email
                                </h4>
                                <time class="text-muted font-weight-bold">{{ parent.email }}</time>
                              </div>
                            </div>

                            <div class="media p-3 border-bottom">
                              <!-- <div class="icon-rounded-circle-medium mr-3 bg-info">
                                <i class="fa fa-anchor text-white" aria-hidden="true"></i>
                              </div> -->
                              <div class="media-body">
                                <h4 class="text-uppercase text-purple mt-0 font-weight-bold">
                                  Address
                                </h4>
                                <time class="text-muted font-weight-bold">{{ parent.address }}</time>
                              </div>
                            </div>

                            <div class="media p-3 border-bottom">
                              <!-- <div class="icon-rounded-circle-medium mr-3 bg-purple">
                                <i class="fa fa-clock-o text-white" aria-hidden="true"></i>
                              </div> -->
                              <div class="media-body">
                                <h4 class="text-uppercase text-purple mt-0 font-weight-bold">
                                  Phone number
                                </h4>
                                <time class="text-muted font-weight-bold">{{ parent.phone_number }}</time>
                              </div>
                            </div>

                          </div>
                        </div>

                      </div>
                    </div>
                  </section>

          </div>



          <div class="tab-pane fade" id="pills-bookings" role="tabpanel" aria-labelledby="pills-profile-tab">
            <!-- ====================================
            ——— PRICING TABLE 2
            ===================================== -->
            <section class="pb-10">
              <div class="container">
                <div class="section-title justify-content-center mb-5 mb-md-8">
                  <!-- <span class="shape shape-left bg-purple"></span>
                  <h2 class="text-pink">My Bookings</h2>
                  <span class="shape shape-right bg-purple"></span> -->
                </div>

                <div class="row">

                  <div v-for="booking in parent.bookings" class="col-xl-6">
                    <div class="media pricing-list bg-light mb-6">
                      <div class="pricing-plan bg-purple">
                        <h3 class="text-white text-truncate">{{ booking.nanny.first_name + ' ' + booking.nanny.last_name }}</h3>
                        <p class="text-white">{{ booking.nanny.phone_number }}</p>
                        <ul class="list-unstyled mb-0">
                          <li class="d-flex justify-content-between align-items-baseline p-0 border-0">
                            <router-link v-bind:to="'/bookings/' + booking.id" class="btn btn-white text-muted text-uppercase">View Booking</router-link>
                            <!-- <div class="pricing-price text-white">
                              <span class="">{{ booking.price + '$' }}</span>
                              <small class="d-block">Per Booking</small>    
                            </div> -->
                          </li>
                        </ul>
                      </div>

                      <div class="media-body">
                        <div class="">
                          <ul class="list-unstyled list-item-lg mb-0">
                            <li class="d-flex align-items-baseline mb-3">
                              <i class="fa fa-calendar mr-2 text-purple" aria-hidden="true"></i>
                              {{ booking.start_date }}
                            </li>
                            <li class="d-flex align-items-baseline mb-3">
                              <i class="fa fa-clock-o mr-2 text-purple" aria-hidden="true"></i>
                              {{ booking.start_time }}
                            </li>
                            <li class="d-flex align-items-baseline mb-3">
                              <i class="fa fa-clock-o mr-2 text-purple" aria-hidden="true"></i>
                              {{ booking.hours + ' hours' }}
                            </li>
                            <li class="d-flex align-items-baseline mb-0">
                              <i class="fa fa-money mr-2 text-purple" aria-hidden="true"></i>
                              {{ booking.price + '$ / per booking' }}
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </section>

          </div>
          <div class="tab-pane fade" id="pills-reviews" role="tabpanel" aria-labelledby="pills-contact-tab">
            <!-- ====================================
            ——— TESTIMONIAL
            ===================================== -->
            <section class="pb-10">
              <div class="container">
                <div class="section-title justify-content-center mb-5 mb-md-8">
                  <span class="shape shape-left bg-white"></span>
                  <h2 class="text-white">My Reviews</h2>
                  <span class="shape shape-right bg-white"></span>
                </div>
                <div v-for="review in parent.reviews">
                  <div class="row">
                    <div class="col-md-12 col-lg-12">
                      <div class="card bg-purple card-hover mb-9">
                        <div class="card-body text-center px-md-5 px-lg-6 my-2">
                          <div class="card-icon-border-large border-purple mtn-80">
                            <i class="fa fa-quote-left text-purple" aria-hidden="true"></i>
                          </div>
                          <blockquote class="blockquote blockquote-sm mt-2">
                            <p class="font-normal mb-5"> {{ review.comment }} </p>
                            <footer class="blockquote-footer text-white"><u> Nanny:</u></footer>
                            <footer class="blockquote-footer text-uppercase text-white"> {{ review.nanny.first_name + ' ' + review.nanny.last_name }} </footer>
                          </blockquote>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
      
    </div>
    <div class="color-bars">
      <div class="container-fluid">
        <div class="row">
          <div class="col color-bar bg-warning d-none d-md-block"></div>
          <div class="col color-bar bg-success d-none d-md-block"></div>
          <div class="col color-bar bg-danger d-none d-md-block"></div>
          <div class="col color-bar bg-info d-none d-md-block"></div>
          <div class="col color-bar bg-purple d-none d-md-block"></div>
          <div class="col color-bar bg-pink d-none d-md-block"></div>
          <div class="col color-bar bg-warning"></div>
          <div class="col color-bar bg-success"></div>
          <div class="col color-bar bg-danger"></div>
          <div class="col color-bar bg-info"></div>
          <div class="col color-bar bg-purple"></div>
          <div class="col color-bar bg-pink"></div>
        </div>
      </div>
    </div>
    <!-- ====================================
    ——— PROFILE FOOTER SECTION
    ===================================== -->
    <section class="pt-9 pb-3 py-md-9 bg-purple" style="background-image: url(/assets/img/background/avator-bg.png);">
        <!-- <div class="section-title justify-content-center mb-4 mb-md-8 wow fadeInUp">
          <span class="shape shape-left bg-white"></span>
          <h2 class="text-white">Meet Our Staff</h2>
          <span class="shape shape-right bg-white"></span>
        </div> -->
    </section>

  </div>
</template>

<script>
import axios from "axios";

export default {
  data:function() {
    return {
      parent: {},
      bookings: [],
      reviews: []
    };
  },
  created: function() {
    axios.get("/api/parents/" + this.$route.params.id).then(response => {
      this.parent = response.data;
      console.log(this.parent);
    });
  },
  methods: {
    isParentLoggedIn: function() {
      if (localStorage.getItem("is_parent")) {
        return true;
      }
      return false;
    }
  }

};
</script>
