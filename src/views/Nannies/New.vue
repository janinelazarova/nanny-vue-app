<template>
  <div class="nannies-new">
    <h1>Create a nanny account</h1>

<form v-on:submit.prevent="submit()">
  <div class="form-row">
  <div class="form-group col-md-6">
    <label for="email">Email address</label>
    <input type="email" class="form-control" id="email" placeholder="name@example.com" v-model="newNannyEmail">
  </div>
  <div class="form-group col-md-6">
    <label for="password">Password</label>
    <input type="password" class="form-control" id="password" placeholder="password" v-model="newNannyPassword">
  </div>
  </div>
  <div class="form-row">
  <div class="form-group col-md-6">
    <label for="first_name">First Name</label>
    <input type="text" class="form-control" id="first_name" placeholder="" v-model="newNannyFirstName">
  </div>
  <div class="form-group col-md-6">
    <label for="last_name">Last Name</label>
    <input type="text" class="form-control" id="last_name" placeholder="" v-model="newNannyLastName">
  </div>
  </div>
  <div class="form-group">
    <label for="phone_number">Phone Number</label>
    <input type="text" class="form-control" id="phone_number" v-model="newNannyPhoneNumber">
  </div>
  <div class="form-group">
    <label for="address">Address</label>
    <textarea class="form-control" id="address" rows="3" v-model="newNannyAddress"></textarea>
  </div>
  <div class="form-group col-md-6">
    <label for="ages">Ages</label>
    <select class="form-control" id="ages" v-model="newNannyAges">
      <option>0 to 1</option>
      <option>1 to 2</option>
      <option>2 to 4</option>
      <option>4 to 6</option>
    </select>
  </div>
  <div class="form-group col-md-6">
    <label for="specialization">Specialization</label>
    <input type="text" class="form-control" id="specialization" placeholder="" v-model="newNannySpecialization">
  </div>
  <div class="form-group">
    <label for="bio">Bio</label>
    <textarea class="form-control" id="bio" rows="3" v-model="newNannyBio"></textarea>
  </div>
  <div class="form-group">
    <label for="image_url">Image URL</label>
    <textarea class="form-control" id="image_url" rows="3" v-model="newNannyImageUrl"></textarea>
  </div>
  <div class="form-group">
    <label for="rate">Rate</label>
    <input type="text" class="form-control" id="rate" v-model="newNannyRate">
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