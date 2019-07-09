<template>
  <div class="logout">
  </div>
</template>

<script>
import axios from "axios";

export default {
  created: function() {
    delete axios.defaults.headers.common["Authorization"];
    localStorage.removeItem("jwt");
    localStorage.removeItem("nanny_id");
    localStorage.removeItem("nannyname");
    localStorage.removeItem("is_nanny");
    localStorage.removeItem("is_parent");
    this.$router.push("/");
  }
};
</script>