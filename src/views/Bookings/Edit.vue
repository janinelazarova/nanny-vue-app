<template>
  <div class="bookings-edit">
    <h1>Edit Booking</h1>

  <form v-on:submit.prevent="submit()">
  <div class="form-row">
  <div class="form-group col-md-6">
    <label for="hours">Booking Hours</label>
    <input type="number" class="form-control" id="hours" v-model="booking.hours">
  </div>
  <div class="form-group col-md-6">
    <label for="start_time">Start Time</label>
    <input type="datetime-local" class="form-control" id="start_time" v-model="booking.start_time">
  </div>
  </div>
  
  <button type="submit" class="btn btn-success">Update</button>

</form>

<button v-on:click="destroyBooking()">Delete Booking</button>

  </div>
</template>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      errors: [],
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
    submit: function() {
      var params = {
        hours: this.booking.hours,
        start_time: this.booking.start_time
      };
      axios.patch("/api/bookings/" + this.booking.id, params).then(response => {
        console.log("Success!", response.data);
        this.$router.push("/bookings/" + this.booking.id);
      }).catch(error => {
        this.errors = error.response.data.errors;
      });
    },
    destroyBooking: function() {
      axios.delete("/api/bookings/" + this.booking.id).then(response => {
        console.log("Booking Deleted", response.data);
        this.$router.push("/");
      });
      // body...
    }
  }




};


</script>