<template>
  <div class="reviews-new">
    <h1>Create a Review</h1>

        <div class="bg-light shadow-sm rounded p-3">
          <h3 class="mb-4 text-danger font-weight-bold">Leave A Comment</h3>

          <form v-on:submit.prevent="submit()">
            <div class="row">
              <div class="col-12 col-md-4">
                <div class="form-group form-group-icon">
                  <i class="fa fa-user"></i>
                  <input type="text" class="form-control border-warning" placeholder="Nanny First Name" required="">
                </div>
              </div>

              <div class="col-12 col-md-4">
                <div class="form-group form-group-icon">
                  <i class="fa fa-user"></i>
                  <input type="email" class="form-control border-success" placeholder="Nanny Last Name" required="">
                </div>
              </div>

              <div class="col-12 col-md-4">
                <div class="form-group form-group-icon">
                  <i class="fa fa-chrome"></i>
                  <input type="text" class="form-control border-purple" placeholder="Stars">
                </div>
              </div>
            </div>

            <div class="row">
              <div class="col">
                <div class="form-group form-group-icon">
                  <i class="fa fa-comments "></i>
                  <textarea class="form-control border-info" placeholder="Write message" rows="6"></textarea>
                </div>
              </div>
            </div>

            <button class="btn btn-danger text-uppercase">submit</button>
          </form>
        </div>

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