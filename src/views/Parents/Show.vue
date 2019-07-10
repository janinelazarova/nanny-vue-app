<template>
  <div class="parents-show">

    <section class="py-7 py-md-10">
      <div class="container">
        <div class="section-title justify-content-center mb-5 mb-md-8">
          <span class="shape shape-left bg-purple"></span>
          <h2 class="text-pink">My Profile</h2>
          <span class="shape shape-right bg-purple"></span>
        </div>


          <div class="col-lg-12 col-md-12">
            <div class="pb-4 mb-2">
              <div class="section-title bg-purple rounded-top">
                <h3 class="text-capitalize text-white font-weight-bold py-2 pl-3 mb-0">Parent Info</h3>
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

            <div class="text-center mb-6">
              <a class="btn btn-pink text-white text-uppercase w-100" href="javascript:void(0)" data-toggle="modal" data-target="#modal-enrolAccount">Enroll now</a>
            </div>

          </div>
        </div>
      </section>



    <!-- ====================================
    ———Parent DETAILS
    =====================================
    <!-- <section class="py-7 py-md-10">
      <div class="container">
        <div class="section-title justify-content-center mb-5 mb-md-8">
          <span class="shape shape-left bg-info"></span>
          <h2 class="text-danger">My Profile</h2>
          <span class="shape shape-right bg-info"></span>
        </div>
        <div class="row">

          <div class="col-sm-12 col-xs-12">

            <h1 class="text-danger font-weight-bold text-capitalize pl-0 mb-5">Parent Profile</h1>

            

            <div class="text-white rounded bg-warning text-uppercase font-weight-medium px-6 py-3 mb-3">Name</div>

            <div class="text-muted text-capitalize font-weight-medium ml-4 mb-5 font-size-20">{{ parent.first_name + ' ' + parent.last_name}}</div>

            <div class="text-white rounded bg-warning text-uppercase font-weight-medium px-6 py-3 mb-3">Email</div>

            <div class="text-muted text-capitalize font-weight-medium ml-4 mb-5 font-size-20">{{ parent.email }}</div>

            <div class="text-white rounded bg-warning text-uppercase font-weight-medium px-6 py-3 mb-3">Address</div>

            <div class="text-muted text-capitalize font-weight-medium ml-4 mb-5 font-size-20">{{ parent.address }}</div>

            <div class="text-white rounded bg-warning text-uppercase font-weight-medium px-6 py-3 mb-3">Phone</div>

            <div class="text-muted text-capitalize font-weight-medium ml-4 mb-5 font-size-20">{{ parent.phone_number }}</div>

            <div class="col-lg-12" v-if="isParentLoggedIn()">
                <div class="mb-8">
                  <router-link v-bind:to="'/parents/' + parent.id + '/edit'">
                    <button  type="button" class="btn btn-primary btn-lg btn-block">Edit Profile</button>
                  </router-link>
                </div>
            </div>

            <!-- Button trigger modal -->
           <!--  <button type="button" text-center class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
              LEAVE A REVIEW
            </button>
          </div>
        </div>
      </div>
    </section> --> 









    <!-- <h1>{{ parent.first_name }}</h1>
    <p>First Name: {{ parent.first_name }}</p>
    <p>Last Name: {{ parent.last_name }}</p>
    <p>Phone Number: {{ parent.phone_number }}</p>
    <p>Address: {{ parent.address }}</p>

    <button>
      <router-link v-bind:to="'/parents/' + parent.id + '/edit'">Edit</router-link>
    </button> -->

    <!-- ====================================
    ——— PRICING TABLE 2
    ===================================== -->
    <section class="pb-10">
      <div class="container">
        <div class="section-title justify-content-center mb-5 mb-md-8">
          <span class="shape shape-left bg-purple"></span>
          <h2 class="text-pink">My Bookings</h2>
          <span class="shape shape-right bg-purple"></span>
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



   <!--   <div v-for="booking in parent.bookings">
      <h2>Booking ID: {{ booking.id }}</h2>
      <p>Booking Hours: {{ booking.hours }}</p>
      <p>Start Time: {{ booking.start_time }} </p>
      <p>Price: {{ booking.price + '$' }}</p>
      <router-link v-bind:to="'/nannies/' + booking.nanny.id">
        <p>Nanny: {{ booking.nanny.first_name + ' ' + booking.nanny.last_name }}</p>
      </router-link>

      <button>
        <router-link v-bind:to="'/bookings/' + booking.id + '/edit'">Edit</router-link>
      </button>
    </div> -->

    <!-- <h1>My Reviews</h1>

    <button>
        <router-link v-bind:to="'/reviews/new'">Add a Review</router-link>
    </button>

    <div v-for="review in parent.reviews">
      <h2>Parent ID: {{ review.parent.id }}</h2>
      <h2>Nanny ID: {{ review.nanny.id }} </h2>
      <p>Stars: {{ review.stars }}</p>
      <p>Review: {{ review.comment }}</p>

      <button>
        <router-link v-bind:to="'/reviews/' + review.id + '/edit'">Edit</router-link>
      </button>

    </div> -->

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
