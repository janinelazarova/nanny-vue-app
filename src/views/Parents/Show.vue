<template>
  <div class="parents-show">

    <!-- ====================================
    ———Parent DETAILS
    ===================================== -->
    <section class="py-7 py-md-10">
      <div class="container">
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
            <button type="button" text-center class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
              LEAVE A REVIEW
            </button>
          </div>
        </div>
      </div>
    </section>









    <!-- <h1>{{ parent.first_name }}</h1>
    <p>First Name: {{ parent.first_name }}</p>
    <p>Last Name: {{ parent.last_name }}</p>
    <p>Phone Number: {{ parent.phone_number }}</p>
    <p>Address: {{ parent.address }}</p>

    <button>
      <router-link v-bind:to="'/parents/' + parent.id + '/edit'">Edit</router-link>
    </button> -->

     <div v-for="booking in parent.bookings">
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
    </div>

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
