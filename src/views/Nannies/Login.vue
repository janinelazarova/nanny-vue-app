<template>
  <div class="login">

    <!-- ====================================
    ——— SIGN-UP OR LOG-IN
    ===================================== -->
    <section class="py-8 py-md-10">
      <div class="container">

        <div class="row">

          <div class="col-sm-12 col-lg-12">
            <div class="mb-4 mb-sm-0">
              <div class="bg-warning rounded-top p-2">
                <h3 class="text-white font-weight-bold mb-0 ml-2">Nanny Login</h3>
              </div>
      
              <div class="border rounded-bottom-sm border-top-0">
                <div class="p-3">
                  <form v-on:submit.prevent="submit()">
                  <!-- <form action="#" method="POST" role="form"> -->
                    <ul>
                      <li class="text-danger" v-for="error in errors">{{ error }}</li>
                    </ul>
                    <div class="form-group form-group-icon">
                      <input type="email" class="form-control border" placeholder="Email" required="" v-model="email">
                    </div>

                    <div class="form-group form-group-icon">
                      <input type="password" class="form-control border" placeholder="Password" required="" v-model="password">
                    </div>

                    <div class="form-group">
                      <button type="submit" class="btn btn-danger text-uppercase w-100">Log In</button>
                    </div>

                    <div class="form-group text-center text-secondary mb-0">
                      <a class="text-danger" href="#">Forgot password?</a>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>






    <!-- <div class="container"> -->
      <!-- <form v-on:submit.prevent="submit()">
        <h1>Login Hello</h1>
        <ul>
          <li class="text-danger" v-for="error in errors">{{ error }}</li>
        </ul>
        <div class="form-group">
          <label>Email:</label>
          <input type="email" class="form-control" v-model="email">
        </div>
        <div class="form-group">
          <label>Password:</label>
          <input type="password" class="form-control" v-model="password">
        </div>
        <input type="submit" class="btn btn-primary" value="Submit">
      </form> -->
    <!-- </div> -->
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      email: "",
      password: "",
      errors: []
    };
  },
  methods: {
    submit: function() {
      var params = {
        email: this.email,
        password: this.password
      };
      axios
        .post("/api/nannies_sessions", params)
        .then(response => {
          axios.defaults.headers.common["Authorization"] =
            "Bearer " + response.data.jwt;
          localStorage.setItem("jwt", response.data.jwt);
          localStorage.setItem("is_nanny", true);
          this.$router.push("/");
        })
        .catch(error => {
          this.errors = ["Invalid email or password."];
          this.email = "";
          this.password = "";
        });
    }
  }
};
</script>