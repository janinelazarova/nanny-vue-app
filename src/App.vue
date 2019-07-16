<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> <br>
      <router-link to="/nannies/new">New Nanny</router-link> |
      <router-link to="/nannies/login">Nanny Login</router-link> |
      <router-link to="/nannies/logout">Nanny Logout</router-link> |<br>
      <router-link to="/parents/new">New Parent</router-link> |
      <router-link to="/parents/login">Parent Login</router-link> |
      <router-link to="/parents/logout">Parent Logout</router-link> | <br>
      <router-link to="/bookings/new">New Booking</router-link> |
      <router-link to="/bookings/index">Bookings Index</router-link> | <br>
      <router-link to="/reviews/new">New Review</router-link> | 
      <router-link to="/reviews/index">Reviews Index</router-link> |
    </div> -->
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

              <li class="nav-item dropdown bg-info" v-if="!isNannyLoggedIn() && !isParentLoggedIn()">
                <router-link class="nav-link" role="button" to="/nannies/new">
                  <i class="fa fa-list-ul nav-icon" aria-hidden="true"></i>
                  <span style="bg-purple">Nanny Signup</span>
                  </router-link>
              </li>

              <li class="nav-item dropdown bg-info" v-if="!isParentLoggedIn() && !isNannyLoggedIn()">
                <router-link class="nav-link" role="button" aria-haspopup="true" aria-expanded="false" to="/nannies/login">
                  <i class="fa fa-file-text-o nav-icon" aria-hidden="true"></i>
                  <span>Nanny Login</span>
                </router-link>
              </li>

              <li class="nav-item dropdown bg-pink">
                <router-link class="nav-link" aria-haspopup="true" aria-expanded="false" to="/">
                  <i class="fa fa-home nav-icon" aria-hidden="true"></i>
                  <span>Home</span>
                </router-link>
              </li>

              <li class="nav-item dropdown bg-purple" v-if="!isNannyLoggedIn() && isParentLoggedIn()">
                <router-link class="nav-link" role="button" v-bind:to="'/parents/' + getParentId()">
                  <i class="fa fa-list-ul nav-icon" aria-hidden="true"></i>
                  <span>My Profile</span>
                  </router-link>
              </li>

              <li class="nav-item dropdown bg-purple" v-if="!isParentLoggedIn() && isNannyLoggedIn()">
                <router-link class="nav-link" role="button" v-bind:to="'/nannies/' + getNannyId()">
                  <i class="fa fa-list-ul nav-icon" aria-hidden="true"></i>
                  <span>My Profile</span>
                  </router-link>
              </li>

              <li class="nav-item dropdown bg-purple" v-if="isParentLoggedIn()">
                <router-link class="nav-link" role="button" aria-haspopup="true" aria-expanded="false" to="/parents/logout">
                  <i class="fa fa-file-text-o nav-icon" aria-hidden="true"></i>
                  <span>Logout</span>
                </router-link>
              </li>

              <li class="nav-item dropdown bg-purple" v-if="isNannyLoggedIn()">
                <router-link class="nav-link" role="button"
                  data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" to="/nannies/logout">
                  <i class="fa fa-file-text-o nav-icon" aria-hidden="true"></i>
                  <span>Logout</span>
                </router-link>
              </li>

              <li class="nav-item dropdown bg-purple" v-if="!isParentLoggedIn() && !isNannyLoggedIn()">
                <router-link class="nav-link" role="button" aria-haspopup="true" aria-expanded="false" to="/parents/login">
                  <i class="fa fa-file-text-o nav-icon" aria-hidden="true"></i>
                  <span>Parent Login</span>
                </router-link>
              </li>

              <li class="nav-item dropdown bg-purple" v-if="!isParentLoggedIn() && !isNannyLoggedIn()">
                <router-link class="nav-link" id="stores"
                  role="button" aria-haspopup="true" aria-expanded="false" to="/parents/new">
                  <i class="fa fa-pencil-square-o nav-icon" aria-hidden="true"></i>
                  <span>Parent Signup</span>
                </router-link>
              </li>
<!-- 
              <li class="nav-item dropdown bg-purple">
                <router-link class="nav-link dropdown-toggle " href="javascript:void(0)" id="stores"
                  role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" to="/reviews/new">
                  <i class="fa fa-calendar nav-icon" aria-hidden="true"></i>
                  <span>New Review</span>
                </router-link>
              </li> -->

              
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

      <div class="pt-3 pb-1 bg-repeat" style="background-image: url(/assets/img/background/footer-bg-img-1.png);">
        <div class="container">
          <div class="row">
            <div class="col-sm-6 col-lg-3 col-xs-12">
              <a class="mb-6 d-block" href="index.html">
                <img class="img-fluid d-inline-block w-50" data-src="/assets/img/kido-app-new.png" src="/assets/img/kiddo-app-new.png">
              </a>
             <!--  <p class="mb-6">We were inspired to start Kiddo App out of a need and desire. As young, modern parents we wanted a better childcare option – one that was filled with unique experiences and inspiring role models for our kiddos. We also wanted something that felt good for us, as parents, to use.</p> -->
            </div>

            <!-- <div class="col-sm-6 col-lg-3 col-xs-12">
              <h4 class="section-title-sm font-weight-bold text-white mb-6">Useful Links</h4>
              <ul class="list-unstyled">
                <li class="mb-4">
                  <a href="index.html">
                    <i class="fa fa-angle-double-right mr-2" aria-hidden="true"></i>Kidz School
                  </a>
                </li>
                <li class="mb-4">
                  <a href="about-us.html">
                    <i class="fa fa-angle-double-right mr-2" aria-hidden="true"></i>About Kidz School
                  </a>
                </li>
                <li class="mb-4">
                  <a href="index-v2.html">
                    <i class="fa fa-angle-double-right mr-2" aria-hidden="true"></i>Kidz Store
                  </a>
                </li>
                <li class="mb-4">
                  <a href="index-v3.html">
                    <i class="fa fa-angle-double-right mr-2" aria-hidden="true"></i>Kidz Daycare
                  </a>
                </li>
                <li class="mb-3">
                  <a href="photo-gallery.html">
                    <i class="fa fa-angle-double-right mr-2" aria-hidden="true"></i>
                    Photo Gallery
                  </a>
                </li>
              </ul>
            </div> -->

           <!--  <div class="col-sm-6 col-lg-3 col-xs-12">
              <h4 class="section-title-sm font-weight-bold text-white mb-6">Recent Post</h4>
              <ul class="list-unstyled list-item-border-bottom">
                <li class="mb-4 pb-4">
                  <div class="media">
                    <a class="mr-2" href="blog-single-left-sidebar.html">
                      <img class="rounded-lg w-100 border-warning border-2 d-block" data-src="assets/img/blog/blog-sm-img5.jpg"
                        src="assets/img/blog/blog-sm-img5.jpg" alt="blog-sm-img5.jpg">
                    </a>
                    <div class="media-body">
                      <h5 class="line-hight-16 mb-1">
                        <a class="font-base font-size-14" href="blog-single-left-sidebar.html">A Clean Website Gives More Experience To The
                          Visitors</a>
                      </h5>
                      <time class="text-white">July 7 - 2018</time>
                    </div>
                  </div>
                </li>

                <li class="mb-4 pb-4">
                  <div class="media">
                    <a class="mr-2" href="blog-single-left-sidebar.html">
                      <img class="rounded-lg w-100 border-success border-2 d-block" data-src="assets/img/blog/blog-sm-img-12.jpg"
                        src="assets/img/blog/blog-sm-img-12.jpg" alt="blog-sm-img-12.jpg">
                    </a>
                    <div class="media-body">
                      <h5 class="line-hight-16 mb-1">
                        <a class="font-base font-size-14" href="blog-single-left-sidebar.html">Duis aute irure dolor in reprehenderit
                          in voluptate.</a>
                      </h5>
                      <time class="text-white">Jun 7 - 2018</time>
                    </div>
                  </div>
                </li>

                <li class="mb-4 pb-4">
                  <div class="media">
                    <a class="mr-2" href="blog-single-left-sidebar.html">
                      <img class="rounded-lg w-100 border-info border-2 d-block" data-src="assets/img/blog/blog-sm-img7.jpg"
                        src="assets/img/blog/blog-sm-img7.jpg" alt="blog-sm-img7.jpg">
                    </a>
                    <div class="media-body">
                      <h5 class="line-hight-16 mb-1">
                        <a class="font-base font-size-14" href="blog-single-left-sidebar.html">Duis aute irure dolor in reprehenderit
                          in voluptate.</a>
                      </h5>
                      <time class="text-white">Jun 7 - 2018</time>
                    </div>
                  </div>
                </li>
              </ul>
            </div>

            <div class="col-sm-6 col-lg-3 col-xs-12">
              <h4 class="section-title-sm font-weight-bold text-white mb-6">Mailing List</h4>
              <p class="mb-4">Sign up for our mailing list to get latest updates and offers.</p>
              <form class="mb-4" action="">
                <div class="input-group shadow-light rounded-sm input-addon">
                  <input type="text" class="form-control py-4" placeholder="Email address" aria-describedby="basic-addon21">
                  <div class="input-group-append ">
                    <div class="input-group-text bg-danger">
                      <i class="fa fa-check text-white" aria-hidden="true"></i></div>
                  </div>
                </div>
              </form>
            </div> -->
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
    }
    // isLoggedIn: function() {
    //   if (localStorage.getItem("jwt")) {
    //     return true;
    //   }
    //   return false;
    // },
  }
};
</script>