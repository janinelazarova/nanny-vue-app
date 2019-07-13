<template>
  <div class="parents-edit">
    <!-- ====================================
    ——— EDIT PARENT
    ===================================== -->
    <section class="py-7 py-md-10">
      <div class="container">


        <form v-on:submit.prevent="submit()">
        <div class="row">
          <div class="col-md-7 col-lg-12 order-1 order-md-0">
            
              <div class="card bg-transparent shadow-none">
                <div class="card-header card-header-lg bg-danger text-white p-6 rounded-top">
                  <h4 class="font-weight-bold mb-0">Edit Parent Info</h4>
                </div>

                <div class="card-body border border-top-0 rounded-bottom-sm p-7">
                  <div class="row">
                    <div class="form-group form-group-icon col-lg-6">
                      <label for="first_name">First Name</label>
                      <input type="text" class="form-control border-warning rounded-sm" id="first_name" placeholder="" v-model="parent.first_name">
                    </div>

                    <div class="form-group form-group-icon col-lg-6">
                      <label for="last_name">Last Name</label>
                      <input type="text" class="form-control border-success rounded-sm" id="last_name" placeholder="" v-model="parent.last_name">
                    </div>
                  </div>

                  <div class="row">
                    <div class="form-group form-group-icon col-lg-6">
                      <label for="email">Email</label>
                      <input type="email" class="form-control border-danger rounded-sm" id="email" placeholder="" v-model="parent.email">
                    </div>

                    <div class="form-group form-group-icon col-lg-6">
                      <label for="password">Password</label>
                      <input type="password" class="form-control border-info rounded-sm" id="password" placeholder="" v-model="parent.password">
                    </div>
                  </div>

                  <div class="row">
                    <div class="form-group form-group-icon col-lg-6">
                      <label for="phone_number">Phone Number</label>
                      <input type="text" class="form-control border-purple rounded-sm" id="phone_number" placeholder="" v-model="parent.phone_number">
                    </div>

                    <div class="form-group form-group-icon col-lg-6">
                      <label for="address">Address</label>
                      <input type="text" class="form-control border-pink rounded-sm" id="address" placeholder="" v-model="parent.address">
                    </div>
                  </div>

                </div>
              </div>

              <div class="mt-4">
                  <button type="submit" class="btn btn-danger text-white text-uppercase">update</button>
                  <router-link v-bind:to="'/parents/' + this.parent.id">
                    <button type="submit" class="btn btn-danger text-white text-uppercase">my profile</button>
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