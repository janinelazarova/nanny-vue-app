<template>
  <div class="bookings-show">

    <!-- ====================================
    ——— Welcome SECTION
    ===================================== -->
    <section class=" py-md-3 bg-purple" style="background-image: url(/assets/img/avator-bg.png);">
        <div class="pt-5 pb-5 section-title justify-content-center mb-1 mb-md-3">
          <span class="shape shape-left bg-white"></span>
          <h2 class="text-white">Booking Details</h2>
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

    <!-- =========================================================
    ——— Show Booking and Leave a Review - If LoggedIn Parent
    ========================================================== --> 
    <section class="py-10">
      <div class="container">
        <div class="row">
          <div class="col-lg-9 col-sm-8 col-xs-12 order-sm-1">
            <div class="card shadow-none bg-transparent">
              <div class="position-relative">
                <img class="w-100 rounded-top" src="/assets/img/feature-course-single-title.jpg" alt="events-xl-img1.jpg">
              </div>

              <!-- Elements Modal -->
              <div class="py-5" id="modal">
               

                <div class="row">
                    <!-- Button trigger modal -->
                    <button v-if="isParentLoggedIn()" type="button" class="btn btn-pink text-white text-uppercase w-100" data-toggle="modal" data-target="#reviewModal">
                      leave a review
                    </button>

                    <!-- Modal -->
                    <div class="modal fade mb-8" id="reviewModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
                      aria-hidden="true">
                      <div class="modal-dialog" role="document">
                        <div class="modal-content">
                          <div class="modal-header">
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                              <span aria-hidden="true">&times;</span>
                            </button>
                          </div>
                          <div class="modal-body">
                            <!-- <p>Modal body text goes here.</p> -->
                            <div class="bg-light shadow-sm rounded p-3">
                              <h3 class="mb-4 text-pink text-uppercase font-weight-bold">Leave A Review</h3>

                              <form v-on:submit.prevent="submit()">
                                <div class="row">
                                  <div class="col-12 col-md-12">
                                    <div class="form-group form-group-icon">
                                      <i class="fa fa-chrome"></i>
                                      <input type="text" class="form-control border-purple" placeholder="Stars" v-model="newReviewStars">
                                    </div>
                                  </div>
                                </div>

                                <div class="row">
                                  <div class="col">
                                    <div class="form-group form-group-icon">
                                      <i class="fa fa-comments "></i>
                                      <textarea class="form-control border-info" placeholder="Comment" rows="6" v-model="newReviewComment"></textarea>
                                    </div>
                                  </div>
                                </div>

                                <button type="submit" class="btn btn-pink text-white text-uppercase">submit</button>
                              </form>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                </div>
              </div>
            </div>
          </div>



          <div class="col-lg-3 col-sm-4 col-xs-12">
            <div class="">
              <div class="section-title bg-purple rounded-top">
                <h3 class="text-capitalize text-white font-weight-bold rounded py-2 pl-3 mb-0">booking info</h3>
              </div>
              <div class="border border-top-0 px-4 py-5 rounded-bottom">
                <div class="media mb-3">
                  <div class="icon-rounded-circle-medium mr-3 bg-purple">
                    <i class="fa fa-calendar text-white" aria-hidden="true"></i>
                  </div>
                  <div class="media-body">
                    <h4 class="text-uppercase text-purple mt-0 font-weight-bold">date</h4>
                    <time class="text-muted font-weight-bold">{{ booking.start_date }}</time>
                  </div>
                </div>

                <div class="media mb-3">
                  <div class="icon-rounded-circle-medium mr-3 bg-purple">
                    <i class="fa fa-clock-o text-white" aria-hidden="true"></i>
                  </div>
                  <div class="media-body">
                    <h4 class="text-uppercase text-purple mt-0 font-weight-bold">time</h4>
                    <time class="text-muted font-weight-bold">{{ booking.start_time + '-' + booking.end_time }}</time>
                  </div>
                </div>

                <div class="media mb-3">
                  <div class="icon-rounded-circle-medium mr-3 bg-purple">
                    <i class="fa fa-shield text-white" aria-hidden="true"></i>
                  </div>
                  <div class="media-body">
                    <h4 class="text-uppercase text-purple mt-0 font-weight-bold">nanny name</h4>
                    <p class="text-muted font-weight-bold mb-0">{{ booking.nanny.first_name + ' ' + booking.nanny.last_name }}</p>
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

                <router-link v-bind:to="'/bookings/' + booking.id + '/edit'" class="btn btn-pink text-white text-uppercase w-100 pt-3 pb-3" href="javascript:void(0)" data-toggle="modal" data-target="#modal-enrolAccount">Edit Booking</router-link>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

  </div>
</template>

<script>
import axios from "axios";

export default {
  data:function() {
    return {
      booking: {},
      newReviewStars: "",
      newReviewComment: "",
      errors: []
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
        nanny_id: this.booking.nanny.id,
        parent_id: this.booking.parent.id,
        stars: this.newReviewStars,
        comment: this.newReviewComment
      };
      axios.post("/api/reviews", params).then(response => {
        $('#reviewModal').modal('hide');
        console.log(response.data);
        this.$router.push("/parents/" + this.booking.parent.id);
      }).catch(error => {
        this.errors = error.response.data.errors;
      });
    },
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
