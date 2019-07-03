<template>
  <div class="bookings-new">
    <h1>Create a new booking</h1>

<form v-on:submit.prevent="submit()">
  <div class="form-row">
  <div class="form-group col-md-6">
    <label for="nanny_id">Nanny ID</label>
    <input type="number" class="form-control" id="nanny_id" placeholder="1" v-model="newBookingNannyId">
  </div>
  <div class="form-group col-md-6">
    <label for="hours">Hours</label>
    <input type="number" class="form-control" id="hours" placeholder="4" v-model="newBookingHours">
  </div>
  </div>
  <div class="form-group">
    <label for="start_time">Start Time</label>
    <input type="datetime-local" class="form-control" id="start_time" placeholder="" v-model="newBookingStartTime">
  </div>

  <button type="submit" class="btn btn-success">Create</button>

</form>


  </div>
</template>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      newBookingNannyId: "",
      newBookingHours: "",
      newBookingStartTime: "",
      errors: []
    };
  },
  methods: {
    submit: function() {
      var params = {
        nanny_id: this.newBookingNannyId,
        hours: this.newBookingHours,
        start_time: this.newBookingStartTime
      };
      axios.post("/api/bookings", params).then(response => {
        this.$router.push("/");
      }).catch(error => {
        this.errors = error.response.data.errors;
      });
    }
  }

};
  
</script>