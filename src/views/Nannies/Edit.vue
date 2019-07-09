<template>
  <div class="nannies-edit">
    <h1>Edit Nanny Info</h1>

    <ul>
      <li v-for="error in errors">{{ error }}</li>
    </ul>

    <!-- ====================================
    ——— CHECK-OUT SECTION
    ===================================== -->
    <section class="py-7 py-md-10">
      <div class="container">


        <form v-on:submit.prevent="submit()">
        <div class="row">
          <div class="col-md-7 col-lg-12 order-1 order-md-0">
            
              <div class="card bg-transparent shadow-none">
                <div class="card-header card-header-lg bg-danger text-white p-6 rounded-top">
                  <h4 class="font-weight-bold mb-0">Edit Nanny Info</h4>
                </div>

                <div class="card-body border border-top-0 rounded-bottom-sm p-7">
                  <div class="row">
                    <div class="form-group form-group-icon col-lg-6">
                      <label for="first_name">First Name</label>
                      <input type="text" class="form-control border-warning rounded-sm" id="first_name" placeholder="" v-model="nanny.first_name">
                    </div>

                    <div class="form-group form-group-icon col-lg-6">
                      <label for="last_name">Last Name</label>
                      <input type="text" class="form-control border-success rounded-sm" id="last_name" placeholder="" v-model="nanny.last_name">
                    </div>
                  </div>

                  <div class="row">
                    <div class="form-group form-group-icon col-lg-6">
                      <label for="email">Email</label>
                      <input type="email" class="form-control border-danger rounded-sm" id="email" placeholder="" v-model="nanny.email">
                    </div>

                    <div class="form-group form-group-icon col-lg-6">
                      <label for="password">Password</label>
                      <input type="password" class="form-control border-info rounded-sm" id="password" placeholder="" v-model="nanny.password">
                    </div>
                  </div>

                  <div class="row">
                    <div class="form-group form-group-icon col-lg-6">
                      <label for="phone_number">Phone Number</label>
                      <input type="text" class="form-control border-purple rounded-sm" id="phone_number" placeholder="" v-model="nanny.phone_number">
                    </div>

                    <div class="form-group form-group-icon col-lg-6">
                      <label for="address">Address</label>
                      <input type="text" class="form-control border-pink rounded-sm" id="address" placeholder="" v-model="nanny.address">
                    </div>
                  </div>

                  <div class="row">
                    <div class="form-group form-group-icon col-lg-6">
                      <label for="ages">Ages</label>
                      <input type="text" class="form-control border-warning rounded-sm" id="ages" placeholder="" v-model="nanny.ages">
                    </div>

                    <div class="form-group form-group-icon col-lg-6">
                      <label for="specialization">Specialization</label>
                      <input type="text" class="form-control border-success rounded-sm" id="specialization" placeholder="" v-model="nanny.specialization">
                    </div>
                  </div>

                  <div class="row">
                    <div class="form-group form-group-icon col-lg-6">
                      <label for="image_url">Image URL</label>
                      <input type="text" class="form-control border-warning rounded-sm" id="image_url" placeholder="" v-model="nanny.image_url">
                    </div>

                    <div class="form-group form-group-icon col-lg-6">
                      <label for="rate">Rate</label>
                      <input type="number" class="form-control border-success rounded-sm" id="rate" placeholder="" v-model="nanny.rate">
                    </div>
                  </div>

                  <div class="form-group mb-4">
                    <label class="" for="bio">Bio</label>
                    <textarea name="text" class="form-control border-purple rounded-sm" rows="7" cols="95" id="bio" placeholder="" v-model="nanny.bio" ></textarea>
                  </div>

                </div>
              </div>

              <div class="pull-left mt-4">
                  <button type="submit" class="btn btn-danger text-white text-uppercase">update</button>
              </div>
            
          </div>
        </div>
        </form>

      </div>
    </section>

    <!-- <form v-on:submit.prevent="submit()">
  <div class="form-row">
  <div class="form-group col-md-6">
    <label for="email">Email address</label>
    <input type="email" class="form-control" id="email" v-model="nanny.email">
  </div>
  <div class="form-group col-md-6">
    <label for="password">Password</label>
    <input type="password" class="form-control" id="password" v-model="nanny.password">
  </div>
  </div>
  <div class="form-row">
  <div class="form-group col-md-6">
    <label for="first_name">First Name</label>
    <input type="text" class="form-control" id="first_name" placeholder="" v-model="nanny.first_name">
  </div>
  <div class="form-group col-md-6">
    <label for="last_name">Last Name</label>
    <input type="text" class="form-control" id="last_name" placeholder="" v-model="nanny.last_name">
  </div>
  </div>
  <div class="form-group">
    <label for="phone_number">Phone Number</label>
    <input type="text" class="form-control" id="phone_number" v-model="nanny.phone_number">
  </div>
  <div class="form-group">
    <label for="address">Address</label>
    <textarea class="form-control" id="address" rows="3" v-model="nanny.address"></textarea>
  </div>
  <div class="form-group col-md-6">
    <label for="ages">Ages</label>
    <select class="form-control" id="ages" v-model="nanny.ages">
      <option>0 to 1</option>
      <option>1 to 2</option>
      <option>2 to 4</option>
      <option>4 to 6</option>
    </select>
  </div>
  <div class="form-group col-md-6">
    <label for="specialization">Specialization</label>
    <input type="text" class="form-control" id="specialization" placeholder="" v-model="nanny.specialization">
  </div>
  <div class="form-group">
    <label for="bio">Bio</label>
    <textarea class="form-control" id="bio" rows="3" v-model="nanny.bio"></textarea>
  </div>
  <div class="form-group">
    <label for="image_url">Image URL</label>
    <textarea class="form-control" id="image_url" rows="3" v-model="nanny.image_url"></textarea>
  </div>
  <div class="form-group">
    <label for="rate">Rate</label>
    <input type="text" class="form-control" id="rate" v-model="nanny.rate">
  </div>
  <button type="submit" class="btn btn-success">Update</button>

</form> -->

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