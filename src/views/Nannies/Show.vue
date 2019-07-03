<template>
  <div class="nannies-show">
    <h1>{{ nanny.first_name }}</h1>
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
    </div>

    <h1>Reviews</h1>

    <div v-for="review in nanny.reviews">
      <h2>Parent ID: {{ review.parent.id }}</h2>
      <h2>Nanny ID: {{ review.nanny.id }} </h2>
      <p>Stars: {{ review.stars }}</p>
      <p>Review: {{ review.comment }}</p>
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

};
</script>
