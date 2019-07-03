<template>
  <div class="parents-new">

    <!-- ====================================
  ——— BREADCRUMB
  ===================================== -->
  <section class="breadcrumb-bg" style="background-image: url(assets/img/background/page-title-bg-img.jpg); ">
    <div class="container">
      <div class="breadcrumb-holder">
        <div>
          <h1 class="breadcrumb-title">Sign Up Or Log In</h1>
          <ul class="breadcrumb breadcrumb-transparent">
            <li class="breadcrumb-item">
              <a class="text-white" href="index.html">Home</a>
            </li>
            <li class="breadcrumb-item text-white active" aria-current="page">
              Sign Up Or Log In
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
    
  

<!--   <!-- ====================================
——— SIGN-UP OR LOG-IN
===================================== -->
<!-- <form v-on:submit.prevent="submit()">
<section class="py-8 py-md-10">
  <div class="container">
    <div class="row">
      <div class="col-sm-6 offset-lg-2 col-lg-4">
        <div class="mb-4 mb-sm-0">
          <div class="bg-warning rounded-top p-2">
            <h3 class="text-white font-weight-bold mb-0 ml-2">Create A Parent Account</h3>
          </div>

          <div class="border rounded-bottom-sm border-top-0">
            <div class="p-3">
              <!-- <form action="#" method="POST" role="form"> -->
               <!--  <div class="form-group form-group-icon">
                  <input type="email" class="form-control border" placeholder="Email" required="" v-model="newParentEmail">
                </div>

                <div class="form-group form-group-icon">
                  <input type="password" class="form-control border" placeholder="Password" required="" v-model="newParentPassword">
                </div>

                <div class="form-group form-group-icon">
                  <input type="text" class="form-control border" placeholder="First Name" required="" v-model="newParentFirstName">
                </div>

                <div class="form-group form-group-icon">
                  <input type="text" class="form-control border" placeholder="Last Name" required="" v-model="newParentLastName">
                </div>

                <div class="form-group form-group-icon">
                  <input type="text" class="form-control border" placeholder="Phone" required="" v-model="newParentPhoneNumber">
                </div>

                <div class="form-group form-group-icon">
                  <textarea type="text" class="form-control border" rows="3" placeholder="Address" required="" v-model="newParentAddress"></textarea>
                </div>

                <div class="form-group">
                  <button type="submit" class="btn btn-danger text-uppercase w-100">Register</button>
                </div>

                <div class="form-group text-center text-secondary mb-0">
                  <p class="mb-0">Allready have an account? <a class="text-danger" href="#">Log in</a></p>
                </div>
              </form>
            </div>
          </div>
          </div>
        </div>
      </div> --> -->

    <!--   <div class="col-sm-6 col-lg-4">
        <div class="mb-4 mb-sm-0">
          <div class="bg-warning rounded-top p-2">
            <h3 class="text-white font-weight-bold mb-0 ml-2">Login</h3>
          </div>
  
          <div class="border rounded-bottom-sm border-top-0">
            <div class="p-3">
              <form action="#" method="POST" role="form">
                <div class="form-group form-group-icon">
                  <input type="text" class="form-control border" placeholder="User name" required="">
                </div>

                <div class="form-group form-group-icon">
                  <input type="password" class="form-control border" placeholder="Password" required="">
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
      </div> -->
  <!--   </div>
  </div>
</section> --> -->


<form v-on:submit.prevent="submit()">
  <div class="form-row">
  <div class="form-group col-md-6">
    <label for="email">Email address</label>
    <input type="email" class="form-control" id="email" placeholder="name@example.com" v-model="newParentEmail">
  </div>
  <div class="form-group col-md-6">
    <label for="password">Password</label>
    <input type="password" class="form-control" id="password" placeholder="password" v-model="newParentPassword">
  </div>
  </div>
  <div class="form-row">
  <div class="form-group col-md-6">
    <label for="first_name">First Name</label>
    <input type="text" class="form-control" id="first_name" placeholder="" v-model="newParentFirstName">
  </div>
  <div class="form-group col-md-6">
    <label for="last_name">Last Name</label>
    <input type="text" class="form-control" id="last_name" placeholder="" v-model="newParentLastName">
  </div>
  </div>
  <div class="form-group">
    <label for="phone_number">Phone Number</label>
    <input type="text" class="form-control" id="phone_number" v-model="newParentPhoneNumber">
  </div>
  <div class="form-group">
    <label for="address">Address</label>
    <textarea class="form-control" id="address" rows="3" v-model="newParentAddress"></textarea>
  </div>

  <button type="submit" class="btn btn-success">Create</button>
</form>




  </div>
</template>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      newParentEmail: "",
      newParentFirstName: "",
      newParentLastName: "",
      newParentPhoneNumber: "",
      newParentAddress: "",
      errors: []
    };
  },
  methods: {
    submit: function() {
      var params = {
        email: this.newParentEmail,
        password: this.newParentPassword,
        first_name: this.newParentFirstName,
        last_name: this.newParentLastName,
        phone_number: this.newParentPhoneNumber,
        address: this.newParentAddress
      };
      axios.post("/api/parents", params).then(response => {
        this.$router.push("/");
      }).catch(error => {
        this.errors = error.response.data.errors;
      });
    }
  }

};
  
</script>