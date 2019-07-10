<template>
  <div class="nannies-show">

  <!-- ====================================
  ——— JUMBOTRON
  ===================================== -->

    <section class="breadcrumb-bg" style="background-image: url(/assets/img/gallery/gallery-img1.jpg); ">
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
  ——— NANNIES SECTION
  ===================================== -->
  <section class="py-7 py-md-10">
    <div class="container">

      <div class="section-title justify-content-center mb-5 mb-md-8">
        <span class="shape shape-left bg-purple"></span>
        <h2 class="text-pink">{{ nanny.first_name + ' ' + nanny.last_name + ' Profile' }}</h2>
        <span class="shape shape-right bg-purple"></span>
      </div>

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

                <!-- <div class="text-center mb-6">
                  <a class="btn btn-pink text-white text-uppercase w-100" href="javascript:void(0)" data-toggle="modal" data-target="#modal-enrolAccount">Enroll now</a>
                </div> -->

              </div>
            


        <!-- <div class="col-sm-8 col-xs-12">
          <h2 class="text-danger font-weight-bold text-capitalize pl-0 mb-5">{{ nanny.first_name + ' ' + nanny.last_name}}</h2>

          <p class="text-muted mb-5">{{ nanny.bio }}</p>

          <div class="col-lg-12" v-if="isNannyLoggedIn()">
              <div class="mb-8">
                <router-link v-bind:to="'/nannies/' + nanny.id + '/edit'">
                  <button  type="button" class="btn btn-primary btn-lg btn-block">Edit Profile</button>
                </router-link>
              </div>
          </div>

          <div class="col-lg-12" v-else>
              <div class="mb-8">
                <router-link v-bind:to="'/bookings/new'">
                  <button type="button" class="btn btn-primary btn-lg btn-block">{{ 'Book ' + nanny.first_name }}
                  </button>
                </router-link>
              </div>
          </div>

          <div class="mb-7">
            <a class="icon-rounded-circle-small bg-warning mr-2" href="javascript:void(0)">
              <i class="fa fa-facebook text-white" aria-hidden="true"></i>
            </a>
            <a class="icon-rounded-circle-small bg-success mr-2" href="javascript:void(0)">
              <i class="fa fa-twitter text-white" aria-hidden="true"></i>
            </a>
            <a class="icon-rounded-circle-small bg-danger mr-2" href="javascript:void(0)">
              <i class="fa fa-google-plus text-white" aria-hidden="true"></i>
            </a>
            <a class="icon-rounded-circle-small bg-info mr-2" href="javascript:void(0)">
              <i class="fa fa-pinterest-p text-white" aria-hidden="true"></i>
            </a>
            <a class="icon-rounded-circle-small bg-purple" href="javascript:void(0)">
              <i class="fa fa-vimeo text-white" aria-hidden="true"></i>
            </a>
          </div>

          <h2 class="text-danger font-weight-medium mb-3 ">Nanny Information</h2>

          <div class="text-white rounded bg-warning text-uppercase font-weight-medium px-6 py-3 mb-3">Ages</div>

          <div class="text-muted text-capitalize font-weight-medium ml-4 mb-5 font-size-20">{{ nanny.ages }}</div>

          <div class="text-white rounded bg-success text-uppercase font-weight-medium px-6 py-3 mb-3">Specialization</div>

          <div class="text-muted text-capitalize font-weight-medium ml-4 mb-5 font-size-20">{{ nanny.specialization }}</div>

          <div class="text-white rounded bg-danger text-uppercase font-weight-medium px-6 py-3 mb-3">Phone</div>

          <div class="text-muted text-capitalize font-weight-medium ml-4 mb-5 font-size-20">{{ nanny.phone_number }}</div>

          <div class="text-white rounded bg-info text-uppercase font-weight-medium px-6 py-3 mb-3">Address</div>

          <div class="text-muted text-capitalize font-weight-medium ml-4 mb-5 font-size-20">{{ nanny.address }}</div>

          <div class="text-white rounded bg-purple text-uppercase font-weight-medium px-6 py-3 mb-3">Hourly Rate</div>

          <div class="text-muted text-capitalize font-weight-medium ml-4 mb-5 font-size-20">{{ nanny.rate + '$'}}</div>





          
          <button type="button" text-center class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
            LEAVE A REVIEW
          </button>
        </div> -->
      </div>
    </div>
  </section>

  




  <!-- Modal -->
  <!-- <div class="modal fade mb-8" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
    aria-hidden="true">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Modal title</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <p>Modal body text goes here.</p>
          <div class="bg-light shadow-sm rounded p-3">
            <h3 class="mb-4 text-danger font-weight-bold">Leave A Comment</h3>

            <form v-on:submit.prevent="submit()">
              <div class="row">
                <div class="col-12 col-md-4">
                  <div class="form-group form-group-icon">
                    <i class="fa fa-user"></i>
                    <input type="text" class="form-control border-warning" placeholder="Nanny First Name" required="">
                  </div>
                </div>

                <div class="col-12 col-md-4">
                  <div class="form-group form-group-icon">
                    <i class="fa fa-user"></i>
                    <input type="email" class="form-control border-success" placeholder="Nanny Last Name" required="">
                  </div>
                </div>

                <div class="col-12 col-md-4">
                  <div class="form-group form-group-icon">
                    <i class="fa fa-chrome"></i>
                    <input type="text" class="form-control border-purple" placeholder="Stars">
                  </div>
                </div>
              </div>

              <div class="row">
                <div class="col">
                  <div class="form-group form-group-icon">
                    <i class="fa fa-comments "></i>
                    <textarea class="form-control border-info" placeholder="Write message" rows="6"></textarea>
                  </div>
                </div>
              </div>

              <button class="btn btn-danger text-uppercase">submit</button>
            </form>
          </div>
          <p>Modal body text goes here.</p>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
          <button type="button" class="btn btn-primary">Save changes</button>
        </div>
      </div>
    </div>
  </div> -->









<!--     <h1>{{ nanny.first_name }}</h1>
    <img v-bind:src="nanny.image_url" alt="">

    <p>First Name: {{ nanny.first_name }}</p>
    <p>Last Name: {{ nanny.last_name }}</p>
    <p>Phone Number: {{ nanny.phone_number }}</p>
    <p>Address: {{ nanny.address }}</p>
    <p>Ages: {{ nanny.ages }}</p>
    <p>Specialization: {{ nanny.specialization }}</p>
    <p>Bio: {{ nanny.bio }}</p>
    <p>Rate: {{ nanny.rate }}</p>

    <button>
      <router-link v-bind:to="'/nannies/' + nanny.id + '/edit'">Edit</router-link>
    </button>

    <h1>{{ message }}</h1>

    <div v-for="booking in nanny.bookings">
      <h2>Booking ID: {{ booking.id }}</h2>
    <router-link v-bind:to="'/parents/' + booking.parent.id">
      <p>Parent Name: {{ booking.parent.first_name + ' ' + booking.parent.last_name }}</p>
    </router-link>
      <p>Booking Hours: {{ booking.hours }}</p>
      <p>Start Time: {{ booking.start_time }} </p>
      <p>Price: {{ booking.price + '$' }}</p>

      <button>
      <router-link v-bind:to="'/bookings/' + booking.id + '/edit'">Edit Booking</router-link>
    </button>
    </div> -->

    <div class="section-title justify-content-center mb-5 mb-md-8">
      <span class="shape shape-left bg-purple"></span>
      <h2 class="text-pink">{{ 'What parents had to say about ' + nanny.first_name }}</h2>
      <span class="shape shape-right bg-purple"></span>
    </div>

    <!-- ====================================
    ——— TESTIMONIAL
    ===================================== -->
    <section class="pt-10 my-md-5">
      <div class="container">
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
