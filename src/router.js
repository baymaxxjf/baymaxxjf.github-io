import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/search",
      name: "search",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/SearchClassify.vue")
    },
    {
      path: "/comicInfo",
      name: "comicInfo",
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/ComicInfoContent.vue")
    },
    {
      path: "/Rank",
      name: "Rank",
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/Rank.vue")
    },
    {
      path: "/Renew",
      name: "Renew",
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/Renew.vue")
    },
    {
      path: "/more/:title",
      name: "more",
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/MorePage.vue")
    }
  ]
});
