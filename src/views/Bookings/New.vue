<template>
  <div class="bookings-new">
    <h1>Create a new booking</h1>

    <!-- ====================================
    ——— CHECK-OUT SECTION
    ===================================== -->
    <section class="py-7 py-md-10">
      <div class="container">

        <div class="row">
          <div class="col-md-7 col-lg-8 order-1 order-md-0">
            <form v-on:submit.prevent="submit()" class="" action="index.html" method="post">
              <div class="card bg-transparent shadow-none">
                <div class="card-header card-header-lg bg-danger text-white p-6 rounded-top">
                  <h4 class="font-weight-bold mb-0">Create a Booking</h4>
                </div>

                <div class="card-body border border-top-0 rounded-bottom-sm p-7">
                  
                  <div class="row">
                    <div class="form-group form-group-icon col-lg-6">
                      <label for="start_date">Start Date</label>
                      <datepicker v-model="newBookingStartDate" class="form-control border-warning rounded-sm" id="start_date">
                      </datepicker>
                    </div>

                    <div class="form-group form-group-icon col-lg-6">
                      <label for="hours">Hours</label>
                      <input type="number" class="form-control border-warning rounded-sm" id="state" v-model="newBookingHours">
                    </div>
                  </div>

                  <div class="row">
                    <div class="form-group form-group-icon col-lg-6">
                      <label for="start_time">Start Time</label>
                      <flat-pickr class="form-control border-warning rounded-sm" v-model="newBookingStartTime" id="start_time" format="HH:mm:ss">
                      </flat-pickr>
                    </div>

                    <div class="form-group form-group-icon col-lg-6">
                      <label for="country">End Time</label>
                      <flat-pickr type="time" class="form-control border-success rounded-sm" id="end_time"></flat-pickr>
                    </div>
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

          <!-- <div class="col-md-5 col-lg-4">
            <div class="card">
              <div class="card-header card-header-lg bg-danger text-white p-6 rounded-top">
                <h4 class="font-weight-medium font-size-24 mb-0">Morning Session</h4>
              </div>

              <img src="assets/img/pricing-table/pricing-table-img1.jpg" alt="Card image cap">
            
              <div class="card-body pt-7">
                <ul class="list-unstyled list-item-lg mb-0">
                  <li class="d-flex align-items-center">
                    <i class="fa fa-birthday-cake mr-2 text-danger" aria-hidden="true"></i>
                    2 Meals/Day
                  </li>
                  <li class="d-flex align-items-center">
                    <i class="fa fa-medkit mr-2 text-danger" aria-hidden="true"></i>
                    Medical Assistance
                  </li>
                  <li class="d-flex align-items-center">
                    <i class="fa fa-paint-brush mr-2 text-danger" aria-hidden="true"></i>
                    Drowing &amp; Dancing
                  </li>
                  <li class="d-flex align-items-center">
                    <i class="fa fa-taxi mr-2 text-danger" aria-hidden="true"></i>
                    Free Transport
                  </li>
                </ul>
            
                <div class="border-top-0 pt-2">
                  <ul class="list-unstyled mb-1">
                    <li class="d-flex justify-content-between align-items-center p-0 border-0">
                      <a href="pricing-table.html" class="btn btn-white text-uppercase btn-hover-danger">
                        Change Plan
                      </a>
                      <div class="text-danger pricing-price">
                        <span class="">$69</span>
                        <small class="d-block">Per Month</small>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div> -->
        </div>
      </div>
    </section>

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
    <label for="start_date">Start Date</label>
    <datepicker v-model="newBookingStartDate" class="form-control" id="start_date">
    </datepicker> 
    <!-- <input type="datetime-local" class="form-control" id="start_time" placeholder="" v-model="newBookingStartTime"> -->
  </div>

  <div class="form-group">
    <label for="start_time">Start Time</label>
    <h1>{{ newBookingStartTime }}</h1>
    <flat-pickr :config="config" v-model="newBookingStartTime" id="start_time">
    </flat-pickr>
  </div>

  <!-- <div class="form-group">
    <label for="end_time">End Time</label>
    <vue-timepicker id="end_time" format="HH:mm:ss" class="form-control" v-model="newBookingEndTime">
    </vue-timepicker>
  </div> -->

  <div class="form-group">
    <label for="notes">Notes</label>
    <input type="text" class="form-control" id="notes" placeholder="N/A" v-model="newBookingNotes">
  </div>

  <button type="submit" class="btn btn-success">Create</button>

</form>


  </div>
</template>

<script>
import axios from "axios";
import Datepicker from 'vuejs-datepicker';
// import VueTimepicker from 'vue2-timepicker';
import flatPickr from 'vue-flatpickr-component';
import 'flatpickr/dist/flatpickr.css';



export default {
  components: {
    Datepicker,
    // VueTimepicker,
    flatPickr
  },
  data: function() {
    return {
      newBookingNannyId: "",
      newBookingHours: "",
      newBookingStartDate: "",
      newBookingStartTime: 
      {
       HH: "00",
       mm: "00",
       ss: "00"
      },
      newBookingEndTime:
      {
       HH: "00",
       mm: "00",
       ss: "00"
      },
      newBookingNotes: "",
      errors: [],
      config:
      {
        enableTime: true,
        noCalendar: true,
        dateFormat: "H:i",
        defaultDate: "13:45"
      }
    };
  },
  methods: {
    submit: function() {
      var params = {
        nanny_id: this.newBookingNannyId,
        hours: this.newBookingHours,
        start_date: this.newBookingStartDate,
        start_time: this.newBookingStartTime.HH + ":" +  this.newBookingStartTime.mm + ":" +  this.newBookingStartTime.ss,
        end_time: this.newBookingEndTime.HH + ":" +  this.newBookingEndTime.mm + ":" +  this.newBookingEndTime.ss,
        notes: this.newBookingNotes
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