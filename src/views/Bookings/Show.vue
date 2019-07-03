<template>
  <div class="bookings-show">
    <!-- <h1>{{ booking.first_name }}</h1> -->
    
    <h2>Booking ID: {{ booking.id }}</h2>
    <h2>Booking Hours: {{ booking.hours }}</h2>
    <h2>Start Time: {{ booking.start_time }}</h2>
    <h2>Price: {{ booking.price }}</h2>
    <img v-bind:src="booking.nanny.image_url" alt="">
    <p>First Name: {{ booking.nanny.first_name }}</p>
    <p>Last Name: {{ booking.nanny.last_name }}</p>
    <p>Phone Number: {{ booking.nanny.phone_number }}</p>
    <p>Address: {{ booking.nanny.address }}</p>
    <p>Ages: {{ booking.nanny.ages }}</p>
    <p>Specialization: {{ booking.nanny.specialization }}</p>
    <p>Bio: {{ booking.nanny.bio }}</p>
    <p>Rate: {{ booking.nanny.rate }}</p>

    <button>
      <router-link v-bind:to="'/bookings/' + booking.id + '/edit'">Edit</router-link>
    </button> 
    

  </div>
</template>

<script>
import axios from "axios";

export default {
  data:function() {
    return {
      booking: {}
    };
  },
  created: function() {
    axios.get("/api/bookings/" + this.$route.params.id).then(response => {
      this.booking = response.data;
      console.log(this.booking);
    });
  },
  methods: {
  }

};
</script>
