<template>
  <div class="nannies-edit">
    <!-- ====================================
    ——— Welcome SECTION
    ===================================== -->
    <section class=" py-md-3 bg-pink" style="background-image: url(/assets/img/avator-bg.png);">
        <div class="pt-5 pb-5 section-title justify-content-center mb-1 mb-md-3">
          <span class="shape shape-left bg-white"></span>
          <h2 class="text-white">Edit Profile</h2>
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
    
    <ul>
      <li v-for="error in errors">{{ error }}</li>
    </ul>

    <!-- ====================================
    ——— EDIT NANNY
    ===================================== -->
    <section class="py-7 py-md-10">
      <div class="container">

      <form v-on:submit.prevent="submit()">
        <div class="row">
          <div class="col-md-7 col-lg-12 order-1 order-md-0">
            
              <div class="card bg-transparent shadow-none">
                <div class="card-header card-header-lg bg-pink text-white p-6 rounded-top">
                  <h4 class="font-weight-bold mb-0">Edit Nanny Info</h4>
                </div>

                <div class="card-body border border-top-0 rounded-bottom-sm p-7">
                  <div class="row">
                    <div class="form-group form-group-icon col-lg-6">
                      <label for="first_name">First Name</label>
                      <input type="text" class="form-control border-pink rounded-sm" id="first_name" placeholder="" v-model="nanny.first_name">
                    </div>

                    <div class="form-group form-group-icon col-lg-6">
                      <label for="last_name">Last Name</label>
                      <input type="text" class="form-control border-pink rounded-sm" id="last_name" placeholder="" v-model="nanny.last_name">
                    </div>
                  </div>

                  <div class="row">
                    <div class="form-group form-group-icon col-lg-6">
                      <label for="email">Email</label>
                      <input type="email" class="form-control border-pink rounded-sm" id="email" placeholder="" v-model="nanny.email">
                    </div>

                    <div class="form-group form-group-icon col-lg-6">
                      <label for="password">Password</label>
                      <input type="password" class="form-control border-pink rounded-sm" id="password" placeholder="" v-model="nanny.password">
                    </div>
                  </div>

                  <div class="row">
                    <div class="form-group form-group-icon col-lg-6">
                      <label for="phone_number">Phone Number</label>
                      <input type="text" class="form-control border-pink rounded-sm" id="phone_number" placeholder="" v-model="nanny.phone_number">
                    </div>

                    <div class="form-group form-group-icon col-lg-6">
                      <label for="address">Address</label>
                      <input type="text" class="form-control border-pink rounded-sm" id="address" placeholder="" v-model="nanny.address">
                    </div>
                  </div>

                  <div class="row">
                    <div class="form-group form-group-icon col-lg-6">
                      <label for="ages">Ages</label>
                      <input type="text" class="form-control border-pink rounded-sm" id="ages" placeholder="" v-model="nanny.ages">
                    </div>

                    <div class="form-group form-group-icon col-lg-6">
                      <label for="specialization">Specialization</label>
                      <input type="text" class="form-control border-pink rounded-sm" id="specialization" placeholder="" v-model="nanny.specialization">
                    </div>
                  </div>

                  <div class="row">
                    <div class="form-group form-group-icon col-lg-6">
                      <label for="image_url">Image URL</label>
                      <input type="text" class="form-control border-pink rounded-sm" id="image_url" placeholder="" v-model="nanny.image_url">
                    </div>

                    <div class="form-group form-group-icon col-lg-6">
                      <label for="rate">Rate</label>
                      <input type="number" class="form-control border-pink rounded-sm" id="rate" placeholder="" v-model="nanny.rate">
                    </div>
                  </div>

                  <div class="form-group mb-4">
                    <label class="" for="bio">Bio</label>
                    <textarea name="text" class="form-control border-pink rounded-sm" rows="7" cols="95" id="bio" placeholder="" v-model="nanny.bio" ></textarea>
                  </div>

                </div>
              </div>

              <div class="pull-left mt-4">
                  <button type="submit" class="btn btn-pink text-white text-uppercase ml-1 mr-1">update</button>
                  <router-link v-bind:to="'/nannies/' + this.nanny.id">
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
      nanny: {}
    };
  },
  created: function() {
    axios.get("/api/nannies/" + this.$route.params.id).then(response => {
      this.nanny = response.data;
      console.log(this.nanny);
    });
  },
  methods: {
    submit: function() {
      var params = {
        email: this.nanny.email,
        password: this.nanny.password,
        first_name: this.nanny.first_name,
        last_name: this.nanny.last_name,
        phone_number: this.nanny.phone_number,
        address: this.nanny.address,
        ages: this.nanny.ages,
        specialization: this.nanny.specialization,
        bio: this.nanny.bio,
        image_url: this.nanny.image_url,
        rate: this.nanny.rate
      };
      axios.patch("/api/nannies/" + this.nanny.id, params).then(response => {
        console.log("Success!", response.data);
        this.$router.push("/nannies/" + this.nanny.id);
      }).catch(error => {
        this.errors = error.response.data.errors;
      });
      
    }
  }




};




</script>