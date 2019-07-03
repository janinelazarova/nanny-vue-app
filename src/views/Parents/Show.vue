<template>
  <div class="parents-show">
    <h1>{{ parent.first_name }}</h1>
    <p>First Name: {{ parent.first_name }}</p>
    <p>Last Name: {{ parent.last_name }}</p>
    <p>Phone Number: {{ parent.phone_number }}</p>
    <p>Address: {{ parent.address }}</p>

    <button>
      <router-link v-bind:to="'/parents/' + parent.id + '/edit'">Edit</router-link>
    </button>

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

    <h1>My Reviews</h1>

    <!-- <button>
        <router-link v-bind:to="'/reviews/new'">Add a Review</router-link>
    </button> -->

    <div v-for="review in parent.reviews">
      <h2>Parent ID: {{ review.parent.id }}</h2>
      <h2>Nanny ID: {{ review.nanny.id }} </h2>
      <p>Stars: {{ review.stars }}</p>
      <p>Review: {{ review.comment }}</p>

      <button>
        <router-link v-bind:to="'/reviews/' + review.id + '/edit'">Edit</router-link>
      </button>

    </div>

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
  }

};
</script>
