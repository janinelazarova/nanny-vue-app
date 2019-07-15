<template>
  <div class="nannies-show">

  <!-- ====================================
  ——— JUMBOTRON
  ===================================== -->

    <section class="breadcrumb-bg" style="background: white; ">
      <!-- <section class="breadcrumb-bg" style="background-image: url(/assets/img/background/avator-bg.png); "> -->
      <div class="container">
        <div class="breadcrumb-holder">
          <div>
            <section>
              <div class="section-title justify-content-center mb-5 mb-md-8">
                <span class="shape shape-left bg-purple"></span>
                  <h2 class="text-pink">{{ nanny.first_name + ' ' + nanny.last_name + ' Profile' }}</h2>
                <span class="shape shape-right bg-purple"></span>
              </div>
            </section>
          </div>
        </div>
      </div>
    </section>

    
   <!--  <div class="section-title justify-content-center mb-5 mb-md-8">
      <span class="shape shape-left bg-purple"></span>
      <h2 class="text-pink">{{ nanny.first_name + ' ' + nanny.last_name + ' Profile' }}</h2>
      <span class="shape shape-right bg-purple"></span>
    </div>
 -->
    
       <div class="container">
        <div class="col-lg-12 justify-content-center mb-8">
          <ul class="nav nav-pills justify-content-center" id="pills-tab" role="tablist" v-if="isNannyLoggedIn()">
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

                            <!-- Elements Modal -->
                            <div class="py-5" id="modal">
                             

                              <div class="row">
                                <div class="col-lg-9 col-sm-8 col-xs-12 order-sm-1">
                                  <!-- Button trigger modal -->
                                  <!-- <button type="button" class="btn btn-pink btn-lg btn-block text-uppercase text-white w-100">{{ 'Book ' + nanny.first_name }}
                                  </button> -->
                                  <button v-if="isParentLoggedIn()" type="button" class="btn btn-pink text-white text-uppercase w-100" data-toggle="modal" data-target="#bookingModal">
                                    {{ 'Book ' + nanny.first_name }}
                                  </button>

                                  <!-- Modal -->
                                  <div class="modal fade mb-8" id="bookingModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
                                    aria-hidden="true">
                                    <div class="modal-dialog" role="document">
                                      <div class="modal-content">
                                        <div class="modal-header">
                                          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                            <span aria-hidden="true">&times;</span>
                                          </button>
                                        </div>
                                        <div class="modal-body">
                                          <!-- <p>Modal body text goes here.</p> -->
                                          <div class="bg-light shadow-sm rounded p-3">
                                          <!-- <div class="col-md-12 col-lg-12 order-1 order-md-0"> -->
                                            <form v-on:submit.prevent="submit()" class="" action="index.html" method="post">
                                              <div class="card bg-transparent shadow-none">
                                                <div class="card-header card-header-lg bg-danger text-white p-6 rounded-top">
                                                  <h4 class="font-weight-bold mb-0">Create a Booking</h4>
                                                </div>

                                                <div class="card-body border border-top-0 rounded-bottom-sm p-7">
                                                                                          
                                                    <div class="form-group form-group-icon col-lg-12">
                                                      <label for="start_date">Start Date</label>
                                                      <datepicker v-model="newBookingStartDate" class="form-control border-warning rounded-sm" id="start_date">
                                                      </datepicker>
                                                    </div>

                                                    <div class="form-group form-group-icon col-lg-12">
                                                      <label for="hours">Hours</label>
                                                      <input type="number" class="form-control border-warning rounded-sm" id="state" v-model="newBookingHours">
                                                    </div>
                                                  
                                                    <div class="form-group form-group-icon col-lg-12">
                                                      <label for="start_time">Start Time</label>
                                                      <flat-pickr :config="config" v-model="newBookingStartTime" class="form-control border-success rounded-sm" id="start_time">
                                                      </flat-pickr>
                                                    </div>

                                                    <div class="form-group form-group-icon col-lg-12">
                                                      <label for="country">End Time</label>
                                                      <flat-pickr :config="config" v-model="newBookingEndTime" class="form-control border-success rounded-sm" id="end_time">
                                                      </flat-pickr>
                                                    </div>

                                                  <div class="form-group mb-4">
                                                    <label class="" for="text-aria">Notes</label>
                                                    <textarea name="notes" class="form-control border-purple rounded-sm" rows="7" cols="95" id="notes" v-model="newBookingNotes"></textarea>
                                                  </div>

                                                  <div class="mt-4">
                                                    <button type="submit" class="btn btn-danger text-white text-uppercase">create booking</button>
                                                  </div>

                                                </div>
                                              </div>
                                          
                                            </form>
                                          </div>
                                          <!-- <div class="bg-light shadow-sm rounded p-3">
                                            <h3 class="mb-4 text-pink font-weight-bold">Leave A Comment</h3>

                                            <form v-on:submit.prevent="submit()">
                                              <div class="row">
                                                <div class="col-12 col-md-12">
                                                  <div class="form-group form-group-icon">
                                                    <i class="fa fa-chrome"></i>
                                                    <input type="text" class="form-control border-purple" placeholder="Stars" v-model="newReviewStars">
                                                  </div>
                                                </div>
                                              </div>

                                              <div class="row">
                                                <div class="col">
                                                  <div class="form-group form-group-icon">
                                                    <i class="fa fa-comments "></i>
                                                    <textarea class="form-control border-info" placeholder="Comment" rows="6" v-model="newReviewComment"></textarea>
                                                  </div>
                                                </div>
                                              </div>

                                              <button type="submit" class="btn btn-pink text-white text-uppercase">submit</button>
                                            </form>
                                          </div> -->
                                        </div>
                                      </div>
                                    </div>
                                  </div>

                                  
                                </div>
                              </div>
                            </div>

                           <!--  <div class="text-center mb-6" v-if="isParentLoggedIn()">
                                <div class="mb-8">
                                  <router-link v-bind:to="'/bookings/new'">
                                    <button type="button" class="btn btn-pink btn-lg btn-block text-uppercase text-white w-100">{{ 'Book ' + nanny.first_name }}
                                    </button>
                                  </router-link>
                                </div>
                            </div> -->

                            <div class="text-center text-white mb-6" v-if="!isParentLoggedIn() && !isNannyLoggedIn()">
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
import Datepicker from 'vuejs-datepicker';
import flatPickr from 'vue-flatpickr-component';
import 'flatpickr/dist/flatpickr.css';


export default {
  components: {
    Datepicker,
    flatPickr
  },
  data:function() {
    return {
      nanny: {},
      parent: {},
      bookings: [],
      reviews: [],
      newBookingNannyId: "",
      newBookingParentId: "",
      newBookingHours: "",
      newBookingStartDate: "",
      newBookingStartTime: "",
      newBookingEndTime: "",
      newBookingNotes: "",
      errors: [],
      config:
      {
        enableTime: true,
        noCalendar: true,
        dateFormat: "H:i",
        time_24hr: false
      }
    };
  },
  created: function() {
    axios.get("/api/nannies/" + this.$route.params.id).then(response => {
      this.nanny = response.data;
      console.log(this.nanny);
    });
  },
  methods: {
    submit: function() {
      var params = {
        nanny_id: this.nanny.id,
        hours: this.newBookingHours,
        start_date: this.newBookingStartDate,
        start_time: this.newBookingStartTime,
        end_time: this.newBookingEndTime,
        notes: this.newBookingNotes
      };
      axios.post("/api/bookings", params).then(response => {
        $('#bookingModal').modal('hide');
        console.log(response.data);
        this.$router.push("/");
      }).catch(error => {
        this.errors = error.response.data.errors;
      });
    },
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
