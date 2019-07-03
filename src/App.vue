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
      <nav class="navbar navbar-expand-md navbar-scrollUp navbar-sticky navbar-white">
        <div class="container">
          <a class="navbar-brand" href="index.html">
            <img class="d-inline-block" src="assets/img/logo-school.png" alt="Kidz School">
          </a>

          <!-- cart-dropdown -->
          <div class="dropdown cart-dropdown ml-auto mr-5 d-md-none">
            <div data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <a href="javascript:void(0)">
                <span class="rounded-sm bg-pink icon-small icon-badge d-none">
                  <i class="fa fa-close text-white" aria-hidden="true"></i>
                </span>
                <span class="rounded-sm bg-pink icon-small icon-badge ">
                  <i class="fa fa-shopping-basket text-white" aria-hidden="true"></i>
                  <span class="badge bg-warning">3</span>
                </span>
              </a>
            </div>
            <div class="dropdown-menu dropdown-menu-right">
              <ul class="bg-white list-unstyled">
                <li class="d-flex align-items-center">
                  <i class="fa fa-shopping-basket font-size-20 mr-3" aria-hidden="true"></i>
                  <h3 class="text-capitalize font-weight-bold mb-0">3 items in your cart</h3>
                </li>
                <hr>
                <li>
                  <a href="product-single.html">
                    <div class="media">
                      <div class="image">
                        <img class="bg-light rounded-sm px-5 py-3 mr-4" src="assets/img/products/product-sm.png" alt="cart-Image">
                      </div>
                      <div class="media-body">
                        <div class="d-flex justify-content-between">
                          <h4 class="text-dark">Barbie Racing Car</h4>
                          <span class="cancel">
                            <i class="fa fa-close text-muted" aria-hidden="true"></i>
                          </span>
                        </div>
                        <div class="price">
                          <span class="text-warning font-weight-medium">$50</span>
                        </div>
                        <span class="text-muted font-weight-medium text-muted">Qnt: 1</span>
                      </div>
                    </div>
                  </a>
                  <hr>
                </li>
                <li>
                  <a href="product-single.html">
                    <div class="media">
                      <div class="image">
                        <img class="bg-light rounded-sm px-5 py-3 mr-4" src="assets/img/products/product-sm.png" alt="cart-Image">
                      </div>
                      <div class="media-body">
                        <div class="d-flex justify-content-between">
                          <h4 class="text-dark">Barbie Racing Car</h4>
                          <span class="cancel">
                            <i class="fa fa-close text-muted" aria-hidden="true"></i>
                          </span>
                        </div>
                        <div class="price">
                          <span class="text-warning font-weight-medium">$50</span>
                        </div>
                        <span class="text-muted font-weight-medium">Qnt: 1</span>
                      </div>
                    </div>
                  </a>
                  <hr>
                </li>
                <li>
                  <a href="product-single.html">
                    <div class="media">
                      <div class="image">
                        <img class="bg-light rounded-sm px-5 py-3 mr-4t" src="assets/img/products/product-sm.png" alt="cart-Image">
                      </div>
                      <div class="media-body">
                        <div class="d-flex justify-content-between">
                          <h4 class="text-dark font-weight-bold">Barbie Racing Car</h4>
                          <span class="cancel">
                            <i class="fa fa-close text-muted" aria-hidden="true"></i>
                          </span>
                        </div>
                        <div class="price">
                          <span class="text-warning font-weight-medium">$50</span>
                        </div>
                        <span class="text-muted font-weight-medium">Qnt: 1</span>
                      </div>
                    </div>
                  </a>
                  <hr>
                </li>
                <li>
                  <div class="d-flex justify-content-between mb-3">
                    <h3 class="cart-total font-weight-bold">Subtotal</h3>
                    <h3 class="cart-price font-weight-bold">$150</h3>
                  </div>
                  <div class="cart-button d-flex justify-content-between">
                    <button type="button" class="btn btn-danger text-uppercase px-4 shadow-sm mr-3" onclick="location.href='product-checkout-step-1.html';">Checkout</button>
                    <button type="button" class="btn btn-danger text-uppercase px-4 shadow-sm" onclick="location.href='product-cart.html';">View
                      Cart</button>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <button class="navbar-toggler py-2" type="button" data-toggle="collapse" data-target="#navbarContent"
            aria-controls="navbarContent" aria-expanded="false" aria-label="Toggle navigation">
            <i class="fa fa-bars"></i>
          </button>

          <div class="collapse navbar-collapse" id="navbarContent">
            <ul class="navbar-nav ml-lg-auto">

              <li class="nav-item dropdown bg-warning">
                <router-link class="nav-link dropdown-toggle  active " href="javascript:void(0)"
                  data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" to="/">
                <!-- <a class="nav-link dropdown-toggle  active " href="javascript:void(0)"
                  data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> -->
                  <i class="fa fa-home nav-icon" aria-hidden="true"></i>
                  <span>Home</span>
                </router-link>
                <!-- </a>
 -->
              </li>

              <li class="nav-item dropdown bg-danger">
                <router-link class="nav-link dropdown-toggle " href="javascript:void(0)" role="button"
                  data-toggle="dropdown" to="/nannies/new"><!-- New Nanny -->
                <!-- <a class="nav-link dropdown-toggle " href="javascript:void(0)" role="button"
                  data-toggle="dropdown"> -->
                  <i class="fa fa-list-ul nav-icon" aria-hidden="true"></i>
                  <span>New Nanny</span>
                  </router-link>
                <!-- </a> -->
              </li>

              <li class="nav-item dropdown bg-success">
                <router-link class="nav-link dropdown-toggle " href="#" role="button"
                  data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" to="/parents/new">
                <!-- <a class="nav-link dropdown-toggle " href="#" role="button"
                  data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> -->
                  <i class="fa fa-file-text-o nav-icon" aria-hidden="true"></i>
                  <span>New Parent</span>
                </router-link>
                <!-- </a> -->
              </li>

              <li class="nav-item dropdown bg-info">
                <router-link class="nav-link dropdown-toggle " href="javascript:void(0)" id="stores"
                  role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" to="/bookings/new">
                <!-- <a > -->
                  <i class="fa fa-pencil-square-o nav-icon" aria-hidden="true"></i>
                  <span>New Booking</span>
                </router-link>
                <!-- </a> -->
                <ul class="dropdown-menu dropdown-menu-right" aria-labelledby="stores">
                  <li>
                    <a class="dropdown-item
                     ||
                     ||
                    

                    "
                      href="javascript:void(0)">Products<i class="fa fa-chevron-right" aria-hidden="true"></i></a>
                    <ul class="sub-menu">
                      <li><a class="" href="products.html">Products Fullwidth</a></li>
                      <li><a class="" href="product-left-sidebar.html">Products
                          Left Sidebar</a></li>
                      <li><a class="" href="product-right-sidebar.html">Products
                          Right Sidebar</a></li>
                    </ul>
                  </li>
                  <li>
                    <a class="dropdown-item " href="product-single.html">Single
                      Product</a>
                  </li>
                  <li>
                    <a class="dropdown-item " href="product-category.html">Product
                      Categories</a>
                  </li>
                  <li>
                    <a class="dropdown-item " href="product-cart.html">Cart</a>
                  </li>
                  <li>
                    <a class="dropdown-item
                       ||
                       ||
                      
                      "
                      href="javascript:void(0)">Checkout<i class="fa fa-chevron-right" aria-hidden="true"></i></a>
                    <ul class="sub-menu">
                      <li>
                        <a class="" href="product-checkout-step-1.html">Personal
                          Info</a>
                      </li>
                      <li>
                        <a class="" href="product-checkout-step-2.html">Payment
                          Info</a>
                      </li>
                      <li>
                        <a class="" href="product-checkout-step-3.html">Confirmation</a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>

              <li class="nav-item dropdown bg-purple">
                <router-link class="nav-link dropdown-toggle " href="javascript:void(0)" id="stores"
                  role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" to="/reviews/new">
                <!-- <a class="nav-link dropdown-toggle " href="javascript:void(0)" id="stores"
                  role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> -->
                  <i class="fa fa-calendar nav-icon" aria-hidden="true"></i>
                  <span>New Review</span>
                </router-link>
                <!-- </a> -->
                <ul class="dropdown-menu dropdown-menu-right" aria-labelledby="stores">
                  <li>
                    <a class="dropdown-item
                       ||
                       ||
                      
                    "
                      href="javascript:void(0)">Blog Grid<i class="fa fa-chevron-right" aria-hidden="true"></i></a>
                    <ul class="sub-menu">
                      <li><a class="" href="blog-grid.html">Blog Grid Fullwidth</a></li>
                      <li><a class="" href="blog-grid-left-sidebar.html">Blog
                          Grid Left Sidebar</a></li>
                      <li><a class="" href="blog-grid-right-sidebar.html">Blog
                          Grid Right Sidebar</a></li>
                    </ul>
                  </li>
                  <li>
                    <a class="dropdown-item
                       ||
                       ||
                      "
                      href="javascript:void(0)">Blog List<i class="fa fa-chevron-right" aria-hidden="true"></i></a>
                    <ul class="sub-menu">
                      <li><a class="" href="blog-list.html">Blog List Fullwidth</a></li>
                      <li><a class="" href="blog-list-left-sidebar.html">Blog
                          List Left Sidebar</a></li>
                      <li><a class="" href="blog-list-right-sidebar.html">Blog
                          List Right Sidebar</a></li>
                    </ul>
                  </li>
                  <li>
                    <a class="dropdown-item
                       ||
                       ||
                      
                    "
                      href="javascript:void(0)">Single Blog<i class="fa fa-chevron-right" aria-hidden="true"></i></a>
                    <ul class="sub-menu">
                      <li><a class="" href="blog-single.html">Blog Single
                          Fullwidth</a></li>
                      <li><a class="" href="blog-single-left-sidebar.html">Blog
                          Single Left Sidebar</a></li>
                      <li><a class="" href="blog-single-right-sidebar.html">Blog
                          Single Right Sidebar</a></li>
                    </ul>
                  </li>
                </ul>
              </li>

              <li class="nav-item dropdown bg-pink">
                <a class="nav-link dropdown-toggle " href="component-default.html">
                  <i class="fa fa-home nav-icon" aria-hidden="true"></i>
                  <span>components</span>
                </a>
              </li>
            </ul>
          </div>

        </div>
      </nav>
    </header>

    <div class="container">
      <router-view/>
    </div>

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
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}*/
</style>
