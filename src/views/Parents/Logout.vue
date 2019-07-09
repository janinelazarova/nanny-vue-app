<template>
  <div class="parents-logout">
  </div>
</template>

<script>
import axios from "axios";

export default {
  created: function() {
    delete axios.defaults.headers.common["Authorization"];
    localStorage.removeItem("jwt");
    localStorage.removeItem("parent_id");
    localStorage.removeItem("parentname");
    localStorage.removeItem("is_nanny");
    localStorage.removeItem("is_parent");
    this.$router.push("/");
  }
};
</script>