<template>
  <div class="nannies-show">
    <!-- ====================================
    ——— Welcome SECTION
    ===================================== -->
    <section class=" py-md-3 bg-pink" style="background-image: url(/assets/img/avator-bg.png);">
        <div class="pt-5 pb-5 section-title justify-content-center mb-1 mb-md-3">
          <span class="shape shape-left bg-white"></span>
          <h2 class="text-white text-uppercase">{{ nanny.first_name + ' ' + nanny.last_name }}</h2>
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
    <!-- ====================================
    ——— Welcome SECTION END
    ===================================== -->

    
    <div class="container">
      <div class="col-lg-12 justify-content-center pt-7 pb-3 mb-8">
        <ul class="nav nav-pills justify-content-center" id="pills-tab" role="tablist" v-if="isNannyLoggedIn()">
          <li class="nav-item">
            <a class="nav-link active btn-pink" id="pills-home-tab" data-toggle="pill" href="#pills-personal-info" role="tab" aria-controls="pills-home"
              aria-selected="true">Personal Info</a>
          </li>
          <li class="nav-item">
            <a class="nav-link btn-pink" id="pills-profile-tab" data-toggle="pill" href="#pills-bookings" role="tab" aria-controls="pills-profile"
              aria-selected="false">Bookings</a>
          </li>
          <li class="nav-item">
            <a class="nav-link btn-pink" id="pills-contact-tab" data-toggle="pill" href="#pills-reviews" role="tab" aria-controls="pills-contact"
              aria-selected="false">Reviews</a>
          </li>
          <li class="nav-item">
            <router-link class="nav-link btn-pink" id="pills-contact-tab" data-toggle="pill" href="#pills-reviews" role="tab" aria-controls="pills-contact"
              aria-selected="false" v-bind:to="'/nannies/' + nanny.id + '/edit'">
              Edit Profile
            </router-link>
          </li>
        </ul>
        
        <!-- =========================================================
          ——— NANNIES SECTION - Logged/NonLogged Parent View
          ====================================================== -->
        <div class="section-title justify-content-center mb-4 mb-md-8 pt-1" v-if="!isNannyLoggedIn()">
          <span class="shape shape-left bg-purple"></span>
          <h2 class="text-pink">Personal Bio</h2>
          <span class="shape shape-right bg-purple"></span>
        </div>

        <div class="row" v-if="!isNannyLoggedIn()">
          <div class="col-sm-3 col-xs-12">
            <div class="image mb-5 mb-md-0">
              <img class="w-100 rounded" v-bind:src="nanny.image_url" alt="">
            </div> 

            <div class="text-center text-white mb-6 pt-3" v-if="!isParentLoggedIn() && !isNannyLoggedIn()">
                <div class="mb-8">
                  <router-link v-bind:to="'/parents/login'">
                    <button type="button" class="btn btn-pink btn-lg btn-block text-uppercase text-white w-100">{{ 'Login to Book ' + nanny.first_name }}
                    </button>
                  </router-link>
                </div>
            </div>

            <!-- =========== Book Nanny Button/Modal =========================================== -->
            <!-- Elements Modal -->
            <div class="py-5" id="modal">
             

              <div class="row">
                <div class="col-lg-12 col-sm-8 col-xs-12 order-sm-1">
                  <!-- Button trigger modal -->
                  <!-- <button type="button" class="btn btn-pink btn-lg btn-block text-uppercase text-white w-100">{{ 'Book ' + nanny.first_name }}
                  </button> -->
                  <button v-if="isParentLoggedIn()" type="button" class="btn btn-pink text-white text-uppercase w-100" data-toggle="modal" data-target="#bookingModal">
                    {{ 'Book ' + nanny.first_name }}
                  </button>

                  <!-- Modal -->
                  <div class="modal fade mb-8" id="bookingModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
                    aria-hidden="true">
                    <div class="modal-dialog modal-lg" role="document">
                      <div class="modal-content">
                        <div class="modal-header">
                          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                          </button>
                        </div>
                        <div class="modal-body">
                          <!-- <p>Modal body text goes here.</p> -->
                          <div class="bg-light shadow-sm rounded p-3">
                          <!-- <div class="col-md-12 col-lg-12 order-1 order-md-0"> -->
                            <form v-on:submit.prevent="submit()" class="" action="index.html" method="post">
                              <div class="card bg-transparent shadow-none">
                                <div class="card-header card-header-lg bg-purple text-white p-6 rounded-top">
                                  <h4 class="font-weight-bold mb-0">Create a Booking</h4>
                                </div>

                                <div class="card-body border border-top-0 rounded-bottom-sm p-7">

                                  <div class="row">                                        
                                    <div class="form-group form-group-icon mb-4 col-lg-6">
                                      <label for="start_date">Start Date</label>
                                      <datepicker v-model="newBookingStartDate" class="form-control border-purple rounded-md" id="start_date">
                                      </datepicker>
                                    </div>

                                    <div class="form-group form-group-icon mb-4 col-lg-6">
                                      <label for="hours">Hours</label>
                                      <input type="number" class="form-control border-purple rounded-sm" id="state" v-model="newBookingHours">
                                    </div>
                                  </div>
                                  
                                  <div class="row"> 
                                    <div class="form-group form-group-icon mb-4 col-lg-6">
                                      <label for="start_time">Start Time</label>
                                      <flat-pickr :config="config" v-model="newBookingStartTime" class="form-control border-purple rounded-sm" id="start_time">
                                      </flat-pickr>
                                    </div>

                                    <div class="form-group form-group-icon mb-4 col-lg-6">
                                      <label for="country">End Time</label>
                                      <flat-pickr :config="config" v-model="newBookingEndTime" class="form-control border-purple rounded-sm" id="end_time">
                                      </flat-pickr>
                                    </div>
                                  </div>  

                                  <div class="form-group mb-4">
                                    <label class="" for="text-aria">Notes</label>
                                    <textarea name="notes" class="form-control border-purple rounded-sm" rows="7" cols="95" id="notes" v-model="newBookingNotes"></textarea>
                                  </div>

                                  <div class="mt-4">
                                    <button type="submit" class="btn btn-pink text-white text-uppercase">create booking</button>
                                  </div>

                                </div>
                              </div>
                          
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  
                </div>
              </div>
            </div>
            <!-- =========== Book Nanny Button/Modal End ======================================== -->    
          </div>

          
                <!-- =========== Nanny Bio =========================================== -->
                <div class="col-lg-9 col-md-9">
                  <div class="pb-4 mb-2">
                    <div class="section-title bg-pink rounded-top">
                      <h3 class="text-capitalize text-white font-weight-bold py-2 pl-3 mb-0">{{ nanny.first_name + ' ' + nanny.last_name}}</h3>
                    </div>
                    <div class="border border-top-0 rounded-bottom">
                      <div class="media p-3 border-bottom">
                        <!-- <div class="icon-rounded-circle-medium mr-3 bg-success">
                          <i class="fa fa-calendar text-white" aria-hidden="true"></i>
                        </div> -->
                        <div class="media-body">
                          <h4 class="text-uppercase text-pink mt-0 font-weight-bold">bio</h4>
                          <time class="text-muted font-weight-bold">{{ nanny.bio }}</time>
                        </div>
                      </div>

                      <div class="media p-3 border-bottom">
                        <!-- <div class="icon-rounded-circle-medium mr-3 bg-danger">
                          <i class="fa fa-birthday-cake text-white" aria-hidden="true"></i>
                        </div> -->
                        <div class="media-body">
                          <h4 class="text-uppercase text-pink mt-0 font-weight-bold">
                            specialization
                          </h4>
                          <time class="text-muted text-uppercase font-weight-bold">{{ nanny.specialization }}</time>
                        </div>
                      </div>

                      <div class="media p-3 border-bottom">
                        <!-- <div class="icon-rounded-circle-medium mr-3 bg-info">
                          <i class="fa fa-anchor text-white" aria-hidden="true"></i>
                        </div> -->
                        <div class="media-body">
                          <h4 class="text-uppercase text-pink mt-0 font-weight-bold">
                            works with ages
                          </h4>
                          <time class="text-muted font-weight-bold">{{ nanny.ages }}</time>
                        </div>
                      </div>

                      <div class="media p-3 border-bottom">
                        <!-- <div class="icon-rounded-circle-medium mr-3 bg-purple">
                          <i class="fa fa-clock-o text-white" aria-hidden="true"></i>
                        </div> -->
                        <div class="media-body">
                          <h4 class="text-uppercase text-pink mt-0 font-weight-bold">
                            rate
                          </h4>
                          <time class="text-muted font-weight-bold">{{ nanny.rate + '$ / per hour'}}</time>
                        </div>
                      </div>

                    </div>
                  </div>

                  <div class="col-lg-12" v-if="isNannyLoggedIn()">
                      <div class="mb-8">
                        <router-link v-bind:to="'/nannies/' + nanny.id + '/edit'">
                          <button  type="button" class="btn btn-pink btn-lg btn-block text-white text-uppercase">Edit Profile</button>
                        </router-link>
                      </div>
                  </div>
              
                </div>
                <!-- =========== Nanny Bio End =========================================== -->
                
                <!-- =========== Nanny Reviews =========================================== -->
                <div class="container">
                  <div class="section-title justify-content-center mb-5 mb-md-8 pt-4 pb-7">
                    <span class="shape shape-left bg-purple"></span>
                    <h2 class="text-pink">{{ 'Reviews about ' + nanny.first_name }} </h2>
                    <span class="shape shape-right bg-purple"></span>
                  </div>
                  <div v-for="review in nanny.reviews">
                    <div class="row">
                      <div class="col-md-12 col-lg-12">
                        <div class="card bg-pink card-hover mb-9">
                          <div class="card-body text-center px-md-5 px-lg-6 my-2">
                            <div class="card-icon-border-large border-pink mtn-80">
                              <i class="fa fa-quote-left text-pink" aria-hidden="true"></i>
                            </div>
                            <blockquote class="blockquote blockquote-sm mt-2">
                              <p class="font-normal mb-5"> {{ review.comment }} </p>
                              <footer class="blockquote-footer text-uppercase text-white"> {{ review.parent.first_name + ' ' + review.parent.last_name }} </footer>
                            </blockquote>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- =========== Nanny Reviews End =========================================== -->

                <!-- ====================================
                ——— MAPBOX
                ===================================== -->

                <div id="map"></div>
              
        </div>




        <div class="tab-content" id="pills-tabContent" v-if="isNannyLoggedIn()">
          <div class="tab-pane fade show active" id="pills-personal-info" role="tabpanel" aria-labelledby="pills-home-tab">
          <!-- ====================================
            ——— NANNIES SECTION - Nanny LoggedIn
            ===================================== -->
            <section class="py-7 py-md-10">
              <div class="container">
                <div class="section-title justify-content-center mb-4 mb-md-8 pt-1">
                  <span class="shape shape-left bg-purple"></span>
                  <h2 class="text-pink">My Info</h2>
                  <span class="shape shape-right bg-purple"></span>
                </div>

                <div class="row">
                  <div class="col-sm-3 col-xs-12">
                    
                    <div class="image mb-5 mb-md-0">
                      <img class="w-100 rounded" v-bind:src="nanny.image_url" alt="">
                    </div>

                    <div class="text-center text-white mb-6 pt-4" v-if="isNannyLoggedIn()">
                        <div class="mb-8">
                          <router-link v-bind:to="'/nannies/' + nanny.id + '/edit'">
                            <button  type="button" class="btn btn-pink btn-lg btn-block text-white text-uppercase w-100">Edit Profile</button>
                          </router-link>
                        </div>
                    </div>

                  </div>

                  

                        <div class="col-lg-9 col-md-9">
                          <div class="pb-4 mb-2">
                            <div class="section-title bg-pink rounded-top">
                              <h3 class="text-capitalize text-white font-weight-bold py-2 pl-3 mb-0">{{ nanny.first_name + ' ' + nanny.last_name}}</h3>
                            </div>
                            <div class="border border-top-0 rounded-bottom">
                              <div class="media p-3 border-bottom">
                                <!-- <div class="icon-rounded-circle-medium mr-3 bg-success">
                                  <i class="fa fa-calendar text-white" aria-hidden="true"></i>
                                </div> -->
                                <div class="media-body">
                                  <h4 class="text-uppercase text-pink mt-0 font-weight-bold">bio</h4>
                                  <time class="text-muted font-weight-bold">{{ nanny.bio }}</time>
                                </div>
                              </div>

                              <div class="media p-3 border-bottom">
                                <!-- <div class="icon-rounded-circle-medium mr-3 bg-danger">
                                  <i class="fa fa-birthday-cake text-white" aria-hidden="true"></i>
                                </div> -->
                                <div class="media-body">
                                  <h4 class="text-uppercase text-pink mt-0 font-weight-bold">
                                    specialization
                                  </h4>
                                  <time class="text-muted text-uppercase font-weight-bold">{{ nanny.specialization }}</time>
                                </div>
                              </div>

                              <div class="media p-3 border-bottom">
                                <!-- <div class="icon-rounded-circle-medium mr-3 bg-info">
                                  <i class="fa fa-anchor text-white" aria-hidden="true"></i>
                                </div> -->
                                <div class="media-body">
                                  <h4 class="text-uppercase text-pink mt-0 font-weight-bold">
                                    works with ages
                                  </h4>
                                  <time class="text-muted font-weight-bold">{{ nanny.ages }}</time>
                                </div>
                              </div>

                              <div class="media p-3 border-bottom">
                                <!-- <div class="icon-rounded-circle-medium mr-3 bg-purple">
                                  <i class="fa fa-clock-o text-white" aria-hidden="true"></i>
                                </div> -->
                                <div class="media-body">
                                  <h4 class="text-uppercase text-pink mt-0 font-weight-bold">
                                    rate
                                  </h4>
                                  <time class="text-muted font-weight-bold">{{ nanny.rate + '$ / per hour'}}</time>
                                </div>
                              </div>

                            </div>
                          </div>

                         

                          <!-- Elements Modal -->
                          <div class="py-5" id="modal">
                           

                            <div class="row">
                              <div class="col-lg-9 col-sm-8 col-xs-12 order-sm-1">
                                <!-- Button trigger modal -->
                                <!-- <button type="button" class="btn btn-pink btn-lg btn-block text-uppercase text-white w-100">{{ 'Book ' + nanny.first_name }}
                                </button> -->
                                <button v-if="isParentLoggedIn()" type="button" class="btn btn-pink text-white text-uppercase w-100" data-toggle="modal" data-target="#bookingModal">
                                  {{ 'Book ' + nanny.first_name }}
                                </button>

                                <!-- Modal -->
                                <div class="modal fade mb-8" id="bookingModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
                                  aria-hidden="true">
                                  <div class="modal-dialog modal-lg" role="document">
                                    <div class="modal-content">
                                      <div class="modal-header">
                                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                          <span aria-hidden="true">&times;</span>
                                        </button>
                                      </div>
                                      <div class="modal-body">
                                        <!-- <p>Modal body text goes here.</p> -->
                                        <div class="bg-light shadow-sm rounded p-3">
                                        <!-- <div class="col-md-12 col-lg-12 order-1 order-md-0"> -->
                                          <form v-on:submit.prevent="submit()" class="" action="index.html" method="post">
                                            <div class="card bg-transparent shadow-none">
                                              <div class="card-header card-header-lg bg-purple text-white p-6 rounded-top">
                                                <h4 class="font-weight-bold mb-0">Create a Booking</h4>
                                              </div>

                                              <div class="card-body border border-top-0 rounded-bottom-sm p-7">

                                                <div class="row">                                        
                                                  <div class="form-group form-group-icon mb-4 col-lg-6">
                                                    <label for="start_date">Start Date</label>
                                                    <datepicker v-model="newBookingStartDate" class="form-control border-purple rounded-md" id="start_date">
                                                    </datepicker>
                                                  </div>

                                                  <div class="form-group form-group-icon mb-4 col-lg-6">
                                                    <label for="hours">Hours</label>
                                                    <input type="number" class="form-control border-purple rounded-sm" id="state" v-model="newBookingHours">
                                                  </div>
                                                </div>
                                                
                                                <div class="row"> 
                                                  <div class="form-group form-group-icon mb-4 col-lg-6">
                                                    <label for="start_time">Start Time</label>
                                                    <flat-pickr :config="config" v-model="newBookingStartTime" class="form-control border-purple rounded-sm" id="start_time">
                                                    </flat-pickr>
                                                  </div>

                                                  <div class="form-group form-group-icon mb-4 col-lg-6">
                                                    <label for="country">End Time</label>
                                                    <flat-pickr :config="config" v-model="newBookingEndTime" class="form-control border-purple rounded-sm" id="end_time">
                                                    </flat-pickr>
                                                  </div>
                                                </div>  

                                                <div class="form-group mb-4">
                                                  <label class="" for="text-aria">Notes</label>
                                                  <textarea name="notes" class="form-control border-purple rounded-sm" rows="7" cols="95" id="notes" v-model="newBookingNotes"></textarea>
                                                </div>

                                                <div class="mt-4">
                                                  <button type="submit" class="btn btn-pink text-white text-uppercase">create booking</button>
                                                </div>

                                              </div>
                                            </div>
                                        
                                          </form>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>

                                
                              </div>
                            </div>
                          </div>

                          <div class="text-center text-white mb-6" v-if="!isParentLoggedIn() && !isNannyLoggedIn()">
                              <div class="mb-8">
                                <router-link v-bind:to="'/parents/login'">
                                  <button type="button" class="btn btn-pink btn-lg btn-block text-uppercase text-white w-100">{{ 'Login to Book ' + nanny.first_name }}
                                  </button>
                                </router-link>
                              </div>
                          </div>

                        </div>

                        <!-- ====================================
                        ——— MAPBOX
                        ===================================== -->

                        <div id="map"></div>
                      
                </div>
              </div>
            </section>
          </div>



          <div class="tab-pane fade" id="pills-bookings" role="tabpanel" aria-labelledby="pills-profile-tab">
            <!-- ====================================
            ——— BOOKINGS
            ===================================== -->
            <div class="container">
              <div class="section-title justify-content-center mb-4 mb-md-8 pt-10">
                <span class="shape shape-left bg-purple"></span>
                <h2 class="text-pink">My Bookings</h2>
                <span class="shape shape-right bg-purple"></span>
              </div>


            <div class="row pt-1">

              <div class="col-sm-12 col-lg-6">
                <form class="shadow-sm rounded mb-8">
                  <div class="input-group input-group-lg">
                    <div class="input-group-prepend">
                      <span class="input-group-text bg-light border-0 px-4">
                        <i class="fa fa-search text-muted font-size-18" aria-hidden="true"></i>
                      </span>
                    </div>
                    <input type="text" class="form-control bg-light border-0 form-control-lg" aria-label="Amount (to the nearest dollar)"
                     placeholder="Search bookings by parent name..." v-model="nameFilter" list="specializations" required="">
                    <div class="input-group-append">
                      <button type="submit" class="btn shadow-none btn-lg btn-pink text-white">Search</button>
                    </div>
                  </div>
                </form>
              </div>

              <div class="col-sm-12 col-lg-6 form-group text-center sort-buttons">
                <button class="btn btn-pink btn-md text-white ml-1 mr-1" v-on:click="setSortAttribute('start_date')">Sort By Date</button>
                <button class="btn btn-pink btn-md text-white ml-1 mr-1" v-on:click="setSortAttribute('price')">Sort By Price</button>
                <button class="btn btn-pink btn-md text-white ml-1 mr-1" v-on:click="setSortAttribute('parent.first_name')">Sort By Parent Name</button>
              </div>
            
            </div>
          </div>

            <section class="pb-10">
              <div class="container">
                <div class="table-responsive table-class-schedule">
                  <table class="table table-bordered text-center mb-0">
                    <thead>
                      <tr>
                        <th class="bg-info text-white text-uppercase font-size-18" scope="col">Date
                        </th>
                        <th class="bg-purple text-white text-uppercase font-size-18" scope="col">time</th>
                        <th class="bg-pink text-white text-uppercase font-size-18" scope="col">price</th>
                        <th class="bg-info text-white text-uppercase font-size-18" scope="col">parent name</th>
                        <th class="bg-purple text-white text-uppercase font-size-18" scope="col">parent address</th>
                        <th class="bg-pink text-white text-uppercase font-size-18" scope="col">parent phone</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="booking in orderBy(filterBy(nanny.bookings, nameFilter), sortAttribute)">
                        <td class="align-middle text-muted">
                          <span class="text-info d-block font-weight-bold font-size-18 mb-2 ">{{ booking.start_date }}</span>
                        </td>
                        <td class="align-middle text-muted">
                          <span class="text-purple d-block font-weight-bold font-size-18 mb-2 ">{{ booking.start_time + ' - ' + booking.end_time }}</span>
                        </td>
                        <td class="align-middle text-muted">
                          <span class="text-pink d-block font-weight-bold font-size-18 mb-2">{{ booking.price + '$'}}</span>
                        </td>
                        <td class="align-middle text-muted">
                          <span class="text-info d-block font-weight-bold font-size-18 mb-2 ">{{ booking.parent.first_name + ' ' + booking.parent.last_name }}</span>
                        </td>
                        <td class="align-middle text-muted">
                          <span class="text-purple d-block font-weight-bold font-size-18 mb-2">{{ booking.parent.address }}</span>
                        </td>
                        <td class="align-middle text-muted">
                          <span class="text-pink d-block font-weight-bold font-size-18 mb-2">{{ booking.parent.phone_number }}</span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </section>
          </div>

          <div class="tab-pane fade" id="pills-reviews" role="tabpanel" aria-labelledby="pills-contact-tab">
            <!-- ====================================
            ——— REVIEWS
            ===================================== -->
            <section class="pb-10 pt-10">
              <div class="container">
                <div class="section-title justify-content-center mb-5 mb-md-8 pb-4">
                  <span class="shape shape-left bg-purple"></span>
                  <h2 class="text-pink">My Reviews</h2>
                  <span class="shape shape-right bg-purple"></span>
                </div>
                <div v-for="review in nanny.reviews">
                  <div class="row">
                    <div class="col-md-12 col-lg-12">
                      <div class="card bg-pink card-hover mb-9">
                        <div class="card-body text-center px-md-5 px-lg-6 my-2">
                          <div class="card-icon-border-large border-pink mtn-80">
                            <i class="fa fa-quote-left text-pink" aria-hidden="true"></i>
                          </div>
                          <blockquote class="blockquote blockquote-sm mt-2">
                            <p class="font-normal mb-5"> {{ review.comment }} </p>
                            <footer class="blockquote-footer text-uppercase text-white"> {{ review.parent.first_name + ' ' + review.parent.last_name }} </footer>
                          </blockquote>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>


    </div>

  </div>

</template>

<style scoped>
#map { 
  height: 500px;
  top:0; 
  bottom:0; 
  width:100%; 
}
.marker {
  background-image: url('http://www.myiconfinder.com/uploads/iconsets/256-256-73af4456d48391a40f64a3da3ec7ab6f.png');
  background-size: cover;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  cursor: pointer;
}
</style>


<script>
import axios from "axios";
import Datepicker from 'vuejs-datepicker';
import flatPickr from 'vue-flatpickr-component';
import 'flatpickr/dist/flatpickr.css';
import Vue2Filters from 'vue2-filters';


export default {
  mixins: [Vue2Filters.mixin],
  components: {
    Datepicker,
    flatPickr
  },
  data:function() {
    return {
      nanny: {},
      parent: {},
      bookings: [],
      reviews: [],
      newBookingNannyId: "",
      newBookingParentId: "",
      newBookingHours: "",
      newBookingStartDate: "",
      newBookingStartTime: "",
      newBookingEndTime: "",
      newBookingNotes: "",
      sortAttribute: "",
      nameFilter: "",
      errors: [],
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
    axios.get("/api/nannies/" + this.$route.params.id).then(response => {
      this.nanny = response.data;
      console.log(this.nanny);

      mapboxgl.accessToken = 'pk.eyJ1IjoiamFuaW5pdG8iLCJhIjoiY2p4YW1idm1uMTg4cTN4bG1zMjN0ZXVlNyJ9.biAgrKD6Jj3e2_FFDyj2kA';
      var map = new mapboxgl.Map({
        container: 'map', // container id
        style: 'mapbox://styles/janinito/cjy5lf26i0t461cs00lq19pbk', // stylesheet location
        center: [this.nanny.longitude, this.nanny.latitude], // starting position [lng, lat]
        zoom: 13 // starting zoom
      });
      // create the popup
      var popup = new mapboxgl.Popup({ offset: 25 })
        .setHTML(
          "<h4>"+this.nanny.address+"</h4>"
        )
        //.setText(this.nanny.address + "Phone: " + this.nanny.phone_number);
      //create the marker
      var marker = new mapboxgl.Marker({
        // draggable: true
      })
        .setLngLat([this.nanny.longitude, this.nanny.latitude])
        .setPopup(popup) // sets a popup on this marker
        .addTo(map);  
    });
    

  },
  methods: {
    submit: function() {
      var params = {
        nanny_id: this.nanny.id,
        hours: this.newBookingHours,
        start_date: this.newBookingStartDate,
        start_time: this.newBookingStartTime,
        end_time: this.newBookingEndTime,
        notes: this.newBookingNotes
      };
      axios.post("/api/bookings", params).then(response => {
        $('#bookingModal').modal('hide');
        console.log(response.data);
        // this.$router.push("/");
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
    },
    setSortAttribute: function(attribute) {
      this.sortAttribute = attribute;
    }
    
  }

};
</script>
