<template>
  <div id="app">
    <!-- ====================================
    ——— HEADER
    ===================================== -->
    <header class="header" id="pageTop">
      <!-- Top Color Bar -->
      <div class="color-bars">
        <div class="container-fluid">
          <div class="row">
            <div class="col color-bar bg-warning d-none d-md-block"></div>
            <div class="col color-bar bg-success d-none d-md-block"></div>
            <div class="col color-bar bg-danger d-none d-md-block"></div>
            <div class="col color-bar bg-info d-none d-md-block"></div>
            <div class="col color-bar bg-purple d-none d-md-block"></div>
            <div class="col color-bar bg-pink d-none d-md-block"></div>
            <div class="col color-bar bg-warning"></div>
            <div class="col color-bar bg-success"></div>
            <div class="col color-bar bg-danger"></div>
            <div class="col color-bar bg-info"></div>
            <div class="col color-bar bg-purple"></div>
            <div class="col color-bar bg-pink"></div>
          </div>
        </div>
      </div>

      <!-- Navbar -->
      <nav class="navbar navbar-expand-lg navbar-scrollUp navbar-sticky navbar-white" id="nav">
        <div class="container">
          <a class="navbar-brand" href="index.html">
            <img class="d-inline-block" src="/assets/img/kiddo-app-new.png" alt="Kidz School">
          </a>

          <button class="navbar-toggler py-2" type="button" data-toggle="collapse" data-target="#navbarContent"
            aria-controls="navbarContent" aria-expanded="false" aria-label="Toggle navigation">
            <i class="fa fa-bars"></i>
          </button>

          <div class="collapse navbar-collapse" id="navbarContent">
            <ul class="navbar-nav ml-lg-auto">

              <li class="nav-item dropdown bg-pink" v-if="!isNannyLoggedIn() && !isParentLoggedIn()">
                <router-link class="nav-link" role="button" to="/nannies/new">
                  <i class="fa fa-list-ul nav-icon" aria-hidden="true"></i>
                  <span class="text-pink">Nanny Signup</span>
                  </router-link>
              </li>

              <li class="nav-item dropdown bg-pink" v-if="!isParentLoggedIn() && !isNannyLoggedIn()">
                <router-link class="nav-link" role="button" aria-haspopup="true" aria-expanded="false" to="/nannies/login">
                  <i class="fa fa-file-text-o nav-icon" aria-hidden="true"></i>
                  <span class="text-pink">Nanny Login</span>
                </router-link>
              </li>

              <li class="nav-item dropdown bg-info">
                <router-link class="nav-link" aria-haspopup="true" aria-expanded="false" to="/">
                  <i class="fa fa-home nav-icon" aria-hidden="true"></i>
                  <span class="text-info">Home</span>
                </router-link>
              </li>

              <li class="nav-item dropdown bg-purple" v-if="!isNannyLoggedIn() && isParentLoggedIn()">
                <router-link class="nav-link" role="button" v-bind:to="'/parents/' + getParentId()">
                  <i class="fa fa-list-ul nav-icon" aria-hidden="true"></i>
                  <span class="text-purple">My Profile</span>
                  </router-link>
              </li>

              <li class="nav-item dropdown bg-pink" v-if="!isParentLoggedIn() && isNannyLoggedIn()">
                <router-link class="nav-link" role="button" v-bind:to="'/nannies/' + getNannyId()">
                  <i class="fa fa-list-ul nav-icon" aria-hidden="true"></i>
                  <span class="text-pink">My Profile</span>
                  </router-link>
              </li>

              <li class="nav-item dropdown bg-purple" v-if="isParentLoggedIn()">
                <router-link class="nav-link" role="button" aria-haspopup="true" aria-expanded="false" to="/parents/logout">
                  <i class="fa fa-file-text-o nav-icon" aria-hidden="true"></i>
                  <span class="text-purple">Logout</span>
                </router-link>
              </li>

              <li class="nav-item dropdown bg-pink" v-if="isNannyLoggedIn()">
                <router-link class="nav-link" role="button"
                  data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" to="/nannies/logout">
                  <i class="fa fa-file-text-o nav-icon" aria-hidden="true"></i>
                  <span class="text-pink">Logout</span>
                </router-link>
              </li>

              <li class="nav-item dropdown bg-purple" v-if="!isParentLoggedIn() && !isNannyLoggedIn()">
                <router-link class="nav-link" role="button" aria-haspopup="true" aria-expanded="false" to="/parents/login">
                  <i class="fa fa-file-text-o nav-icon" aria-hidden="true"></i>
                  <span class="text-purple">Parent Login</span>
                </router-link>
              </li>

              <li class="nav-item dropdown bg-purple" v-if="!isParentLoggedIn() && !isNannyLoggedIn()">
                <router-link class="nav-link" id="stores"
                  role="button" aria-haspopup="true" aria-expanded="false" to="/parents/new">
                  <i class="fa fa-pencil-square-o nav-icon" aria-hidden="true"></i>
                  <span class="text-purple">Parent Signup</span>
                </router-link>
              </li>
   
            </ul>
          </div>

        </div>
      </nav>


    </header>
    <div class="color-bars">
      <div class="container-fluid">
        <div class="row">
          <div class="col color-bar bg-warning d-none d-md-block"></div>
          <div class="col color-bar bg-success d-none d-md-block"></div>
          <div class="col color-bar bg-danger d-none d-md-block"></div>
          <div class="col color-bar bg-info d-none d-md-block"></div>
          <div class="col color-bar bg-purple d-none d-md-block"></div>
          <div class="col color-bar bg-pink d-none d-md-block"></div>
          <div class="col color-bar bg-warning"></div>
          <div class="col color-bar bg-success"></div>
          <div class="col color-bar bg-danger"></div>
          <div class="col color-bar bg-info"></div>
          <div class="col color-bar bg-purple"></div>
          <div class="col color-bar bg-pink"></div>
        </div>
      </div>
    </div>

    
    <router-view/>
    

    <!-- ====================================
          ——— FOOTER
          ===================================== -->
    <footer class="footer-bg-img">
      <!-- Footer Color Bar -->
      <div class="color-bar">
        <div class="container-fluid">
          <div class="row">
            <div class="col color-bar bg-warning"></div>
            <div class="col color-bar bg-danger"></div>
            <div class="col color-bar bg-success"></div>
            <div class="col color-bar bg-info"></div>
            <div class="col color-bar bg-purple"></div>
            <div class="col color-bar bg-pink"></div>
            <div class="col color-bar bg-warning d-none d-md-block"></div>
            <div class="col color-bar bg-danger d-none d-md-block"></div>
            <div class="col color-bar bg-success d-none d-md-block"></div>
            <div class="col color-bar bg-info d-none d-md-block"></div>
            <div class="col color-bar bg-purple d-none d-md-block"></div>
            <div class="col color-bar bg-pink d-none d-md-block"></div>
          </div>
        </div>
      </div>

      <div class="pt-3 pb-1 bg-repeat" style="background-image: url(/assets/img/footer-bg-img-1.png);">
        <div class="container">
          <div class="row">
            <div class="col-sm-6 col-lg-3 col-xs-12">
              <a class="mb-6 d-block" href="index.html">
                <img class="img-fluid d-inline-block w-50" data-src="/assets/img/kido-app-new.png" src="/assets/img/kiddo-app-new.png">
              </a>
             <!--  <p class="mb-6">We were inspired to start Kiddo App out of a need and desire. As young, modern parents we wanted a better childcare option – one that was filled with unique experiences and inspiring role models for our kiddos. We also wanted something that felt good for us, as parents, to use.</p> -->
            </div>

          </div>
        </div>
      </div>

      <div class="color-bars">
        <div class="container-fluid">
          <div class="row">
            <div class="col color-bar bg-warning d-none d-md-block"></div>
            <div class="col color-bar bg-success d-none d-md-block"></div>
            <div class="col color-bar bg-danger d-none d-md-block"></div>
            <div class="col color-bar bg-info d-none d-md-block"></div>
            <div class="col color-bar bg-purple d-none d-md-block"></div>
            <div class="col color-bar bg-pink d-none d-md-block"></div>
            <div class="col color-bar bg-warning"></div>
            <div class="col color-bar bg-success"></div>
            <div class="col color-bar bg-danger"></div>
            <div class="col color-bar bg-info"></div>
            <div class="col color-bar bg-purple"></div>
            <div class="col color-bar bg-pink"></div>
          </div>
        </div>
      </div>

      <!-- Copy Right -->
      <div class="copyright">
        <div class="container">
          <div class="row py-4 align-items-center">
            <div class="col-sm-7 col-xs-12 order-1 order-md-0">
              <p class="copyright-text"> © 2019 Copyright Kiddo App <!-- <a href="http://www.iamabdus.com/" target="_blank">Abdus.</a> --></p>
            </div>

            <div class="col-sm-5 col-xs-12">
              <ul class="list-inline d-flex align-items-center justify-content-md-end justify-content-center mb-md-0">
                <li class="mr-3">
                  <a class="icon-rounded-circle-small bg-warning" href="javascript:void(0)">
                    <i class="fa fa-facebook text-white" aria-hidden="true"></i>
                  </a>
                </li>
                <li class="mr-3">
                  <a class="icon-rounded-circle-small bg-success" href="javascript:void(0)">
                    <i class="fa fa-twitter text-white" aria-hidden="true"></i>
                  </a>
                </li>
                <li class="mr-3">
                  <a class="icon-rounded-circle-small bg-danger" href="javascript:void(0)">
                    <i class="fa fa-google-plus text-white" aria-hidden="true"></i>
                  </a>
                </li>
                <li class="mr-3">
                  <a class="icon-rounded-circle-small bg-info" href="javascript:void(0)">
                    <i class="fa fa-pinterest-p text-white" aria-hidden="true"></i>
                  </a>
                </li>
                <li class="">
                  <a class="icon-rounded-circle-small bg-purple" href="javascript:void(0)">
                    <i class="fa fa-vimeo text-white" aria-hidden="true"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>


<!-- Footer -->



  </div>
</template>

<style>
/*#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}*/
/*#nav a {
  font-weight: bold;
  color: #2c3e50;
}*/
/*#nav a.router-link-exact-active span{
  color: #a597e7;
}*/
</style>

<script>
import axios from "axios";


export default {
  data: function() {
    return {
      parent: {},
      nanny: {}
      // parentname: localStorage.getItem("parentname"),
      // nannyname: localStorage.getItem("nannyname"),
      // parent_id: localStorage.getItem("parent_id"),
      // nanny_id: localStorage.getItem("nanny_id")
    };
  },
  created: function() {
    axios.get("/api/parents/" + localStorage.getItem('parent_id')).then(response => {
      this.parent = response.data;
      console.log(this.parent);
    });
    axios.get("/api/nannies/" + localStorage.getItem('nanny_id')).then(response => {
      this.nanny = response.data;
      console.log(this.nanny);
    });
  },
  methods: {
    isNannyLoggedIn: function() {
      if (localStorage.getItem("is_nanny")) {
        return true;
      }
      return false;
    },
    isParentLoggedIn: function() {
      if (localStorage.getItem("is_parent")) {
        return true;
      }
      return false;
    },
    getParentId: function() {
      return localStorage.getItem("parent_id");
    },
    getNannyId: function() {
      return localStorage.getItem("nanny_id");
    },
    isLoggedIn: function() {
      if (localStorage.getItem("jwt")) {
        return true;
      }
      return false;
    }
  }
};
</script>