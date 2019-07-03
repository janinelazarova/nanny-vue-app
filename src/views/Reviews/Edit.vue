<template>
  <div class="reviews-edit">
    <h1>Edit Review</h1>

  <form v-on:submit.prevent="submit()">
  <div class="form-row">
  <div class="form-group col-md-6">
    <label for="nanny_id">Nanny ID</label>
    <input type="number" class="form-control" id="nanny_id" v-model="review.nanny_id">
  </div>
  <div class="form-group col-md-6">
    <label for="stars">Stars</label>
    <input type="number" class="form-control" id="stars" v-model="review.stars">
  </div>
  </div>
  <div class="form-group">
    <label for="comment">Comment</label>
    <textarea class="form-control" id="comment" rows="3" v-model="review.comment"></textarea>
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
      review: {}
    };
  },
  created: function() {
    axios.get("/api/reviews/" + this.$route.params.id).then(response => {
      this.review = response.data;
      console.log(this.review);
    });
  },
  methods: {
    submit: function() {
      var params = {
        nanny_id: this.review.nanny_id,
        stars: this.review.stars,
        comment: this.review.comment
      };
      axios.patch("/api/reviews/" + this.review.id, params).then(response => {
        console.log("Success!", response.data);
        this.$router.push("/reviews/" + this.review.id);
      }).catch(error => {
        this.errors = error.response.data.errors;
      });
      
    }
  }


};


</script>