<template>
  <div class="reviews-new">
    <h1>Create a Review</h1>

<form v-on:submit.prevent="submit()">
  <div class="form-row">
  <div class="form-group col-md-6">
    <label for="nanny_id">Nanny ID</label>
    <input type="number" class="form-control" id="nanny_id" v-model="newReviewNannyId">
  </div>
  <div class="form-group col-md-6">
    <label for="stars">Stars</label>
    <input type="number" class="form-control" id="stars" placeholder="5" v-model="newReviewStars">
  </div>
  </div>
  <div class="form-group">
    <label for="comment">Comment</label>
    <textarea class="form-control" id="comment" rows="3" v-model="newReviewComment"></textarea>
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
      newReviewNannyId: "",
      newReviewStars: "",
      newReviewComment: "",
      errors: []
    };
  },
  methods: {
    submit: function() {
      var params = {
        nanny_id: this.newReviewNannyId,
        stars: this.newReviewStars,
        comment: this.newReviewComment
      };
      axios.post("/api/reviews", params).then(response => {
        this.$router.push("/");
      }).catch(error => {
        this.errors = error.response.data.errors;
      });
    }
  }

};
  
</script>