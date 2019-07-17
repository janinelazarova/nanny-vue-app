<template>
  <div class="bookings-edit">

    <!-- ====================================
    ——— Welcome SECTION
    ===================================== -->
    <section class=" py-md-3 bg-purple" style="background-image: url(/assets/img/avator-bg.png);">
        <div class="pt-5 pb-5 section-title justify-content-center mb-1 mb-md-3">
          <span class="shape shape-left bg-white"></span>
          <h2 class="text-white">Edit Booking Details</h2>
          <span class="shape shape-right bg-white"></span>
        </div>
    </section>

    <div class="color-bars">
      <div class="container-fluid">
        <div class="row">
          <div class="col color-bar bg-warning d-none d-md-block"></div>
          <div class="col color-bar bg-success d-none d-md-block"></div>
          <div class="col color-bar bg-danger d-none d-md-block"></div>
          <div class="col color-bar bg-info d-none d-md-block"></div>
          <div class="col color-bar bg-purple d-none d-md-block"></div>
          <div class="col color-bar bg-pink d-none d-md-block"></div>
          <div class="col color-bar bg-warning"></div>
          <div class="col color-bar bg-success"></div>
          <div class="col color-bar bg-danger"></div>
          <div class="col color-bar bg-info"></div>
          <div class="col color-bar bg-purple"></div>
          <div class="col color-bar bg-pink"></div>
        </div>
      </div>
    </div>

    <section class="py-7 py-md-10">
      <div class="container">


        <form v-on:submit.prevent="submit()">
        <div class="row">
          <div class="col-md-7 col-lg-12 order-1 order-md-0">
            
              <div class="card bg-transparent shadow-none">
                <div class="card-header card-header-lg bg-purple text-white p-6 rounded-top">
                  <h4 class="font-weight-bold mb-0">Edit Booking</h4>
                </div>

                <div class="card-body border border-top-0 rounded-bottom-sm p-7">
                  <div class="row">
                    <div class="form-group form-group-icon col-lg-6">
                      <label for="start_time">Start Time</label>
                      <flat-pickr :config="config" type="time" class="form-control border-purple rounded-sm" id="start_time" placeholder="" v-model="booking.start_time"></flat-pickr>
                    </div>

                    <div class="form-group form-group-icon col-lg-6">
                      <label for="end_time">End Time</label>
                      <flat-pickr :config="config" type="time" class="form-control border-purple rounded-sm" id="end_time" placeholder="" v-model="booking.end_time"></flat-pickr>
                    </div>
                  </div>

                  <div class="row">
                    <div class="form-group form-group-icon col-lg-6">
                      <label for="hours">Duration</label>
                      <input type="number" class="form-control border-purple rounded-sm" id="hours" placeholder="" v-model="booking.hours">
                    </div>

                    <div class="form-group form-group-icon col-lg-6">
                      <label for="start_date">Booking Date</label>
                      <datepicker type="date" class="form-control border-purple rounded-sm" id="start_date" placeholder="" v-model="booking.start_date"></datepicker>
                    </div>
                  </div>

                  <div class="form-group mb-4">
                    <label class="" for="notes">Notes</label>
                    <textarea name="text" class="form-control border-purple rounded-sm" rows="7" cols="95" id="notes" placeholder="" v-model="booking.notes" ></textarea>
                  </div>

                  <div class="pull-left mt-4">
                      <button type="submit" class="btn btn-pink text-white text-uppercase mr-2">update</button>
                  </div>

                  <div class="pull-left mt-4">
                      <button v-on:click="destroyBooking()" class="btn btn-danger text-white text-uppercase">Delete</button>
                  </div>

                </div>
              </div>
            
          </div>
        </div>
        </form>

      </div>
    </section>
  
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
  data: function() {
    return {
      errors: [],
      booking: {},
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
    axios.get("/api/bookings/" + this.$route.params.id).then(response => {
      this.booking = response.data;
      console.log(this.booking);
    });
  },
  methods: {
    submit: function() {
      var params = {
        hours: this.booking.hours,
        start_date: this.booking.start_date,
        start_time: this.booking.start_time,
        end_time: this.booking.end_time,
        notes: this.booking.notes 
      };
      axios.patch("/api/bookings/" + this.booking.id, params).then(response => {
        console.log("Success!", response.data);
        this.$router.push("/bookings/" + this.booking.id);
      }).catch(error => {
        this.errors = error.response.data.errors;
      });
    },
    destroyBooking: function() {
      if(confirm("Do you really want to delete this booking on " + this.booking.start_date + "?. You will be charged 20% Processing Fee."))
      axios.delete("/api/bookings/" + this.booking.id).then(response => {
        console.log("Booking Deleted", response.data);
        this.$router.push("/");
      });
    }
  }




};


</script>