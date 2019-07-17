<template>
  <div class="parents-edit">
    <!-- ====================================
    ——— Welcome SECTION
    ===================================== -->
    <section class=" py-md-3 bg-purple" style="background-image: url(/assets/img/background/avator-bg.png);">
        <div class="pt-5 pb-5 section-title justify-content-center mb-1 mb-md-3">
          <span class="shape shape-left bg-white"></span>
          <h2 class="text-white">{{ 'Edit Profile' }}</h2>
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
    ——— EDIT PARENT
    ===================================== -->
    <section class="py-7 py-md-10">
      <div class="container">


        <form v-on:submit.prevent="submit()">
        <div class="row">
          <div class="col-md-7 col-lg-12 order-1 order-md-0">
            
              <div class="card bg-transparent shadow-none">
                <div class="card-header card-header-lg bg-purple text-white p-6 rounded-top">
                  <h4 class="font-weight-bold mb-0">Edit Parent Info</h4>
                </div>

                <div class="card-body border border-top-0 rounded-bottom-sm p-7">
                  <div class="row">
                    <div class="form-group form-group-icon col-lg-6">
                      <label for="first_name">First Name</label>
                      <input type="text" class="form-control border-purple rounded-sm" id="first_name" placeholder="" v-model="parent.first_name">
                    </div>

                    <div class="form-group form-group-icon col-lg-6">
                      <label for="last_name">Last Name</label>
                      <input type="text" class="form-control border-purple rounded-sm" id="last_name" placeholder="" v-model="parent.last_name">
                    </div>
                  </div>

                  <div class="row">
                    <div class="form-group form-group-icon col-lg-6">
                      <label for="email">Email</label>
                      <input type="email" class="form-control border-purple rounded-sm" id="email" placeholder="" v-model="parent.email">
                    </div>

                    <div class="form-group form-group-icon col-lg-6">
                      <label for="password">Password</label>
                      <input type="password" class="form-control border-purple rounded-sm" id="password" placeholder="" v-model="parent.password">
                    </div>
                  </div>

                  <div class="row">
                    <div class="form-group form-group-icon col-lg-6">
                      <label for="phone_number">Phone Number</label>
                      <input type="text" class="form-control border-purple rounded-sm" id="phone_number" placeholder="" v-model="parent.phone_number">
                    </div>

                    <div class="form-group form-group-icon col-lg-6">
                      <label for="address">Address</label>
                      <input type="text" class="form-control border-purple rounded-sm" id="address" placeholder="" v-model="parent.address">
                    </div>
                  </div>

                </div>
              </div>

              <div class="mt-4">
                  <button type="submit" class="btn btn-pink text-white text-uppercase ml-1 mr-1">update</button>
                  <router-link v-bind:to="'/parents/' + this.parent.id">
                    <button type="submit" class="btn btn-pink text-white text-uppercase ml-1 mr-1">my profile</button>
                  </router-link>
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

export default {
  data: function() {
    return {
      errors: [],
      parent: {}
    };
  },
  created: function() {
    axios.get("/api/parents/" + this.$route.params.id).then(response => {
      this.parent = response.data;
      console.log(this.parent);
    });
  },
  methods: {
    submit: function() {
      var params = {
        email: this.parent.email,
        password: this.parent.password,
        first_name: this.parent.first_name,
        last_name: this.parent.last_name,
        phone_number: this.parent.phone_number,
        address: this.parent.address
      };
      axios.patch("/api/parents/" + this.parent.id, params).then(response => {
        console.log("Success!", response.data);
        this.$router.push("/parents/" + this.parent.id);
      }).catch(error => {
        this.errors = error.response.data.errors;
      });
      
    }
  }




};


</script>