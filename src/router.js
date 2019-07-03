import Vue from 'vue';
import Router from 'vue-router';
import NanniesIndex from './views/Nannies/Index.vue';
import NanniesNew from './views/Nannies/New.vue';
import NanniesShow from './views/Nannies/Show.vue';
import NanniesEdit from './views/Nannies/Edit.vue';
// import Signup from './views/Nannies/Signup.vue';
import NanniesLogin from './views/Nannies/Login.vue';
import Logout from './views/Nannies/Logout.vue';

import ParentsLogin from './views/Parents/Login.vue';
import ParentsNew from './views/Parents/New.vue';
import ParentsEdit from './views/Parents/Edit.vue';
import ParentsShow from './views/Parents/Show.vue';
import ParentsLogout from './views/Parents/Logout.vue';

import BookingsIndex from './views/Bookings/Index.vue';
import BookingsShow from './views/Bookings/Show.vue';
import BookingsNew from './views/Bookings/New.vue';
import BookingsEdit from './views/Bookings/Edit.vue';

import ReviewsIndex from './views/Reviews/Index.vue';
import ReviewsNew from './views/Reviews/New.vue';
import ReviewsShow from './views/Reviews/Show.vue';
import ReviewsEdit from './views/Reviews/Edit.vue';


Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'nannies-index',
      component: NanniesIndex
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/nannies/login',
      name: 'login',
      component: NanniesLogin
    },
    {
      path: '/nannies/logout',
      name: 'logout',
      component: Logout
    },
    {
      path: '/nannies/new',
      name: 'nannies-new',
      component: NanniesNew
    },
    {
      path: '/nannies/:id',
      name: 'nannies-show',
      component: NanniesShow
    },
    {
      path: '/nannies/:id/edit',
      name: 'nannies-edit',
      component: NanniesEdit
    },
    // {
    //   path: '/signup',
    //   name: 'signup',
    //   component: Signup
    // },
    {
      path: '/parents/login',
      name: 'login',
      component: ParentsLogin
    },
    {
      path: '/parents/logout',
      name: 'parents-logout',
      component: ParentsLogout
    },
    {
      path: '/parents/new',
      name: 'parents-new',
      component: ParentsNew
    },
    {
      path: '/parents/:id/edit',
      name: 'parents-edit',
      component: ParentsEdit
    },
    {
      path: '/parents/:id',
      name: 'parents-show',
      component: ParentsShow
    },
    {
      path: '/bookings/new',
      name: 'bookings-new',
      component: BookingsNew
    },
    {
      path: '/bookings/:id/edit',
      name: 'bookings-edit',
      component: BookingsEdit
    },
    {
      path: '/bookings/index',
      name: 'bookings-index',
      component: BookingsIndex
    },
    {
      path: '/bookings/:id',
      name: 'bookings-show',
      component: BookingsShow
    },
    {
      path: '/reviews/index',
      name: 'reviews-index',
      component: ReviewsIndex
    },
    {
      path: '/reviews/new',
      name: 'reviews-new',
      component: ReviewsNew
    },
    {
      path: '/reviews/:id',
      name: 'reviews-show',
      component: ReviewsShow
    },
    {
      path: '/reviews/:id/edit',
      name: 'reviews-edit',
      component: ReviewsEdit
    }

  ]
});
