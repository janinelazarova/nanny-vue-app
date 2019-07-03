<template>
  <div class="parents-edit">
    <h1>Edit parent info</h1>

  <form v-on:submit.prevent="submit()">
  <div class="form-row">
  <div class="form-group col-md-6">
    <label for="email">Email address</label>
    <input type="email" class="form-control" id="email" v-model="parent.email">
  </div>
  <div class="form-group col-md-6">
    <label for="password">Password</label>
    <input type="password" class="form-control" id="password" v-model="parent.password">
  </div>
  </div>
  <div class="form-row">
  <div class="form-group col-md-6">
    <label for="first_name">First Name</label>
    <input type="text" class="form-control" id="first_name" placeholder="" v-model="parent.first_name">
  </div>
  <div class="form-group col-md-6">
    <label for="last_name">Last Name</label>
    <input type="text" class="form-control" id="last_name" placeholder="" v-model="parent.last_name">
  </div>
  </div>
  <div class="form-group">
    <label for="phone_number">Phone Number</label>
    <input type="text" class="form-control" id="phone_number" v-model="parent.phone_number">
  </div>
  <div class="form-group">
    <label for="address">Address</label>
    <textarea class="form-control" id="address" rows="3" v-model="parent.address"></textarea>
  </div>
  
  <button type="submit" class="btn btn-success">Update</button>

</form>

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