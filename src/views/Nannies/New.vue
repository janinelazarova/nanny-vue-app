<template>
  <div class="nannies-new">

    <!-- ====================================
    ——— SIGN-UP NANNY
    ===================================== -->
    <section class="py-8 py-md-10">
      <div class="container">
        <div class="row">
          <div class="col-sm-12 col-lg-12">
            <div class="mb-4 mb-sm-0">
              <div class="bg-purple rounded-top p-2">
                <h3 class="text-white text-uppercase font-weight-bold mb-0 ml-2">Create A Nanny Account</h3>
              </div>

              <div class="border rounded-bottom-sm border-top-0">
                <div class="p-3">
                  <form v-on:submit.prevent="submit()">
                    <div class="form-group form-group-icon">
                      <input type="email" class="form-control border" placeholder="Email" required="" v-model="newNannyEmail">
                    </div>

                    <div class="form-group form-group-icon">
                      <input type="password" class="form-control border" placeholder="Password" required="" v-model="newNannyPassword">
                    </div>

                    <div class="form-group form-group-icon">
                      <input type="text" class="form-control border" placeholder="First Name" required="" v-model="newNannyFirstName">
                    </div>

                    <div class="form-group form-group-icon">
                      <input type="text" class="form-control border" placeholder="Last Name" required="" v-model="newNannyLastName">
                    </div>

                    <div class="form-group form-group-icon">
                      <input type="text" class="form-control border" placeholder="Phone Number" required="" v-model="newNannyPhoneNumber">
                    </div>

                    <div class="form-group form-group-icon">
                      <input type="text" class="form-control border" placeholder="Address" required="" rows="3" v-model="newNannyAddress">
                    </div>

                    <div class="form-group form-group-icon">
                      <input type="text" class="form-control border" placeholder="Ages (Ex. '0 to 1'; '1 to 2'; '2 to 4', etc.)" required="" v-model="newNannyAges">
                    </div>

                    <div class="form-group form-group-icon">
                      <input type="text" class="form-control border" placeholder="Specialization" required="" v-model="newNannySpecialization">
                    </div>

                    <div class="form-group form-group-icon">
                      <input type="text" class="form-control border" placeholder="Bio" required="" v-model="newNannyBio">
                    </div>

                    <div class="form-group form-group-icon">
                      <input type="text" class="form-control border" placeholder="Image URL" required="" v-model="newNannyImageUrl">
                    </div>

                    <div class="form-group form-group-icon">
                      <input type="text" class="form-control border" placeholder="Rate" required="" v-model="newNannyRate">
                    </div>

                    <div class="form-group">
                      <button type="submit" class="btn btn-pink text-white text-uppercase w-100">Register</button>
                    </div>

                    <div class="form-group text-center text-secondary mb-0">
                      <p class="mb-0">Allready have an account? <a class="text-danger" href="/nannies/login">Log in</a></p>
                    </div>
                  </form>
                </div>
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
  data: function() {
    return {
      newNannyEmail: "",
      newNannyFirstName: "",
      newNannyLastName: "",
      newNannyPhoneNumber: "",
      newNannyAddress: "",
      newNannyAges: "",
      newNannySpecialization: "",
      newNannyBio: "",
      newNannyImageUrl: "",
      newNannyRate: "",
      errors: []
    };
  },
  methods: {
    submit: function() {
      var params = {
        email: this.newNannyEmail,
        password: this.newNannyPassword,
        first_name: this.newNannyFirstName,
        last_name: this.newNannyLastName,
        phone_number: this.newNannyPhoneNumber,
        address: this.newNannyAddress,
        ages: this.newNannyAges,
        specialization: this.newNannySpecialization,
        bio: this.newNannyBio,
        image_url: this.newNannyImageUrl,
        rate: this.newNannyRate
      };
      axios.post("/api/nannies", params).then(response => {
        this.$router.push("/");
      }).catch(error => {
        this.errors = error.response.data.errors;
      });
    }
  }

};
  
</script>