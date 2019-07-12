<template>
  <div class="bookings-show">
      <!-- ====================================
      ——— BREADCRUMB
      ===================================== -->
      <section class="breadcrumb-bg" style="background-image: url(/assets/img/background/page-title-bg-img.jpg); ">
        <div class="container">
          <div class="breadcrumb-holder">
            <div>
              <h1 class="breadcrumb-title">Events Left Sidebar</h1>
              <ul class="breadcrumb breadcrumb-transparent">
                <li class="breadcrumb-item">
                  <a class="text-white" href="index.html">Home</a>
                </li>
                <li class="breadcrumb-item text-white active" aria-current="page">
                  Events Left Sidebar
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

    <!-- ====================================
    ——— SINGLE-EVENT LEFT-SIDEBAR
    ===================================== --> 
    <section class="py-10">
      <div class="container">
        <div class="row">
          <div class="col-lg-9 col-sm-8 col-xs-12 order-sm-1">
            <div class="card shadow-none bg-transparent">
              <div class="position-relative">
                <img class="w-100 rounded-top" src="/assets/img/features/feature-course-single-title.jpg" alt="events-xl-img1.jpg">
              </div>

              <div class="card-body border-top-5 px-3 border-warning">
                <h3 class="text-warning font-weight-bold mb-4">Booking Notes</h3>
                <p class="text-muted mb-6">{{ booking.notes }}</p>
              </div>
            </div>
          </div>



          <div class="col-lg-3 col-sm-4 col-xs-12">
            <div class="">
              <div class="section-title bg-warning rounded-top">
                <h3 class="text-capitalize text-white font-weight-bold rounded py-2 pl-3 mb-0">booking info</h3>
              </div>
              <div class="border border-top-0 px-4 py-5 rounded-bottom">
                <div class="media mb-3">
                  <div class="icon-rounded-circle-medium mr-3 bg-success">
                    <i class="fa fa-calendar text-white" aria-hidden="true"></i>
                  </div>
                  <div class="media-body">
                    <h4 class="text-uppercase text-success mt-0 font-weight-bold">date</h4>
                    <time class="text-muted font-weight-bold">{{ booking.start_date }}</time>
                  </div>
                </div>

                <div class="media mb-3">
                  <div class="icon-rounded-circle-medium mr-3 bg-danger">
                    <i class="fa fa-clock-o text-white" aria-hidden="true"></i>
                  </div>
                  <div class="media-body">
                    <h4 class="text-uppercase text-danger mt-0 font-weight-bold">time</h4>
                    <time class="text-muted font-weight-bold">{{ booking.start_time + '-' + booking.end_time }}</time>
                  </div>
                </div>

                <div class="media mb-3">
                  <div class="icon-rounded-circle-medium mr-3 bg-purple">
                    <i class="fa fa-shield text-white" aria-hidden="true"></i>
                  </div>
                  <div class="media-body">
                    <h4 class="text-uppercase text-purple mt-0 font-weight-bold">parent name</h4>
                    <p class="text-muted font-weight-bold mb-0">{{ booking.parent.first_name + ' ' + booking.parent.last_name }}</p>
                  </div>
                </div>

                <div class="media mb-3">
                  <div class="icon-rounded-circle-medium mr-3 bg-purple">
                    <i class="fa fa-map-marker text-white" aria-hidden="true"></i>
                  </div>
                  <div class="media-body">
                    <h4 class="text-uppercase text-purple mt-0 font-weight-bold">parent address</h4>
                    <p class="text-muted font-weight-bold mb-0">{{ booking.parent.address }}</p>
                  </div>
                </div>

                <div class="media mb-4">
                  <div class="icon-rounded-circle-medium mr-3 bg-info">
                    <i class="fa fa-phone text-white" aria-hidden="true"></i>
                  </div>
                  <div class="media-body">
                    <h4 class="text-uppercase text-info mt-0 font-weight-bold">parent contact</h4>
                    <time class="text-muted font-weight-bold">{{ booking.parent.phone_number }}</time>
                  </div>
                </div>

                <router-link v-bind:to="'/bookings/' + booking.id + '/edit'" class="btn btn-primary text-white text-uppercase w-100" href="javascript:void(0)" data-toggle="modal" data-target="#modal-enrolAccount">Edit Booking</router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  

    



    <!-- <h1>{{ booking.first_name }}</h1> -->
    
   <!--  <h2>Booking ID: {{ booking.id }}</h2>
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
    </button>  -->
    

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
