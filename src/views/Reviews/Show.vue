<template>
  <div class="reviews-show">
    <h1>{{ review.id }}</h1>
    <p>Nanny ID: {{ review.nanny_id }}</p>
    <p>Stars: {{ review.stars }}</p>
    <p>Comment: {{ review.comment }}</p>

    <button>
      <router-link v-bind:to="'/reviews/' + review.id + '/edit'">Edit</router-link>
    </button>

  </div>
</template>

<script>
import axios from "axios";

export default {
  data:function() {
    return {
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
  }

};
</script>
