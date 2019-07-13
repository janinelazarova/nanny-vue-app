<template>
  <div class="nannies-show">

  <!-- ====================================
  ——— JUMBOTRON
  ===================================== -->

    <!-- <section class="breadcrumb-bg" style="background-image: url(/assets/img/background/avator-bg.png); ">
      <div class="container">
        <div class="breadcrumb-holder">
          <div>
            <section>
              <div class="section-title justify-content-center mb-5 mb-md-8">
                <span class="shape shape-left bg-white"></span>
                  <h2 class="text-white">{{ nanny.first_name + ' ' + nanny.last_name + ' Profile' }}</h2>
                <span class="shape shape-right bg-white"></span>
              </div>
            </section>
          </div>
        </div>
      </div>
    </section> -->


    <div class="section-title justify-content-center mb-5 mb-md-8">
      <span class="shape shape-left bg-purple"></span>
      <h2 class="text-pink">{{ nanny.first_name + ' ' + nanny.last_name + ' Profile' }}</h2>
      <span class="shape shape-right bg-purple"></span>
    </div>
    
       <div class="container">
        <div class="col-lg-12 justify-content-center mb-8">
          <ul class="nav nav-pills justify-content-center"  id="pills-tab" role="tablist">
            <li class="nav-item">
              <a class="nav-link active btn-purple" id="pills-home-tab" data-toggle="pill" href="#pills-personal-info" role="tab" aria-controls="pills-home"
                aria-selected="true">Personal Info</a>
            </li>
            <li class="nav-item">
              <a class="nav-link btn-purple" id="pills-profile-tab" data-toggle="pill" href="#pills-bookings" role="tab" aria-controls="pills-profile"
                aria-selected="false">Bookings</a>
            </li>
            <li class="nav-item">
              <a class="nav-link btn-purple" id="pills-contact-tab" data-toggle="pill" href="#pills-reviews" role="tab" aria-controls="pills-contact"
                aria-selected="false">Reviews</a>
            </li>
            <li class="nav-item">
              <router-link class="nav-link btn-purple" id="pills-contact-tab" data-toggle="pill" href="#pills-reviews" role="tab" aria-controls="pills-contact"
                aria-selected="false" v-bind:to="'/nannies/' + nanny.id + '/edit'">
                Edit Profile
              </router-link>
            </li>
          </ul>
          <div class="tab-content" id="pills-tabContent">
            <div class="tab-pane fade show active" id="pills-personal-info" role="tabpanel" aria-labelledby="pills-home-tab">
            <!-- ====================================
              ——— NANNIES SECTION
              ===================================== -->
              <section class="py-7 py-md-10">
                <div class="container">

                  <div class="row">
                    <div class="col-sm-3 col-xs-12">
                      <div class="image mb-5 mb-md-0">
                        <img class="w-100 rounded" v-bind:src="nanny.image_url" alt="">
                      </div>
                    </div>

                    

                          <div class="col-lg-9 col-md-9">
                            <div class="pb-4 mb-2">
                              <div class="section-title bg-purple rounded-top">
                                <h3 class="text-capitalize text-white font-weight-bold py-2 pl-3 mb-0">{{ nanny.first_name + ' ' + nanny.last_name}}</h3>
                              </div>
                              <div class="border border-top-0 rounded-bottom">
                                <div class="media p-3 border-bottom">
                                  <!-- <div class="icon-rounded-circle-medium mr-3 bg-success">
                                    <i class="fa fa-calendar text-white" aria-hidden="true"></i>
                                  </div> -->
                                  <div class="media-body">
                                    <h4 class="text-uppercase text-purple mt-0 font-weight-bold">bio</h4>
                                    <time class="text-muted font-weight-bold">{{ nanny.bio }}</time>
                                  </div>
                                </div>

                                <div class="media p-3 border-bottom">
                                  <!-- <div class="icon-rounded-circle-medium mr-3 bg-danger">
                                    <i class="fa fa-birthday-cake text-white" aria-hidden="true"></i>
                                  </div> -->
                                  <div class="media-body">
                                    <h4 class="text-uppercase text-purple mt-0 font-weight-bold">
                                      specialization
                                    </h4>
                                    <time class="text-muted text-uppercase font-weight-bold">{{ nanny.specialization }}</time>
                                  </div>
                                </div>

                                <div class="media p-3 border-bottom">
                                  <!-- <div class="icon-rounded-circle-medium mr-3 bg-info">
                                    <i class="fa fa-anchor text-white" aria-hidden="true"></i>
                                  </div> -->
                                  <div class="media-body">
                                    <h4 class="text-uppercase text-purple mt-0 font-weight-bold">
                                      ages
                                    </h4>
                                    <time class="text-muted font-weight-bold">{{ nanny.ages }}</time>
                                  </div>
                                </div>

                                <div class="media p-3 border-bottom">
                                  <!-- <div class="icon-rounded-circle-medium mr-3 bg-purple">
                                    <i class="fa fa-clock-o text-white" aria-hidden="true"></i>
                                  </div> -->
                                  <div class="media-body">
                                    <h4 class="text-uppercase text-purple mt-0 font-weight-bold">
                                      rate
                                    </h4>
                                    <time class="text-muted font-weight-bold">{{ nanny.rate + '$ / per hour'}}</time>
                                  </div>
                                </div>

                              </div>
                            </div>

                            <div class="col-lg-12" v-if="isNannyLoggedIn()">
                                <div class="mb-8">
                                  <router-link v-bind:to="'/nannies/' + nanny.id + '/edit'">
                                    <button  type="button" class="btn btn-primary btn-lg btn-block">Edit Profile</button>
                                  </router-link>
                                </div>
                            </div>

                            <div class="text-center mb-6" v-else-if="isParentLoggedIn()">
                                <div class="mb-8">
                                  <router-link v-bind:to="'/bookings/new'">
                                    <button type="button" class="btn btn-pink btn-lg btn-block text-uppercase text-white w-100">{{ 'Book ' + nanny.first_name }}
                                    </button>
                                  </router-link>
                                </div>
                            </div>

                            <div class="text-center text-white mb-6" v-else>
                                <div class="mb-8">
                                  <router-link v-bind:to="'/parents/login'">
                                    <button type="button" class="btn btn-pink btn-lg btn-block text-uppercase text-white w-100">{{ 'Login to Book ' + nanny.first_name }}
                                    </button>
                                  </router-link>
                                </div>
                            </div>

                          </div>
                        
                  </div>
                </div>
              </section>
            </div>



            <div class="tab-pane fade" id="pills-bookings" role="tabpanel" aria-labelledby="pills-profile-tab">
              <!-- ====================================
              ——— BOOKINGS
              ===================================== -->
              <section class="pb-10">
                <div class="container">
                  <div class="section-title justify-content-center mb-5 mb-md-8">
                    <span class="shape shape-left bg-purple"></span>
                    <h2 class="text-pink">My Bookings</h2>
                    <span class="shape shape-right bg-purple"></span>
                  </div>

                  <div class="row">

                    <div v-for="booking in nanny.bookings" class="col-xl-6">
                      <div class="media pricing-list bg-light mb-6">
                        <div class="pricing-plan bg-purple">
                          <h3 class="text-white text-truncate">{{ booking.parent.first_name + ' ' + booking.parent.last_name }}</h3>
                          <p class="text-white">{{ booking.parent.phone_number }}</p>
                          <ul class="list-unstyled mb-0">
                            <li class="d-flex justify-content-between align-items-baseline p-0 border-0">
                              <router-link v-bind:to="'/bookings/' + booking.id" class="btn btn-white text-muted text-uppercase">View Booking</router-link>
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
                                {{ booking.start_time + ' - ' + booking.end_time }}
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
                    <span class="shape shape-left bg-purple"></span>
                    <h2 class="text-pink">My Reviews</h2>
                    <span class="shape shape-right bg-purple"></span>
                  </div>
                  <div v-for="review in nanny.reviews">
                    <div class="row">
                      <div class="col-md-12 col-lg-12">
                        <div class="card bg-purple card-hover mb-9">
                          <div class="card-body text-center px-md-5 px-lg-6 my-2">
                            <div class="card-icon-border-large border-purple mtn-80">
                              <i class="fa fa-quote-left text-purple" aria-hidden="true"></i>
                            </div>
                            <blockquote class="blockquote blockquote-sm mt-2">
                              <p class="font-normal mb-5"> {{ review.comment }} </p>
                              <footer class="blockquote-footer text-uppercase text-white"> {{ review.parent.first_name + ' ' + review.parent.last_name }} </footer>
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
    

        


  </div>

</template>


<script>
import axios from "axios";

export default {
  data:function() {
    return {
      nanny: {},
      message: "Bookings",
      // nannies: [],
      bookings: [],
      reviews: []
    };
  },
  created: function() {
    axios.get("/api/nannies/" + this.$route.params.id).then(response => {
      this.nanny = response.data;
      console.log(this.nanny);
    });
  },
  methods: {
    isNannyLoggedIn: function() {
      if (localStorage.getItem("is_nanny")) {
        return true;
      }
      return false;
    },
    isParentLoggedIn: function() {
      if (localStorage.getItem("is_parent")) {
        return true;
      }
      return false;
    }
  }

};
</script>
