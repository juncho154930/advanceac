import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  routes: [
    {
      name: "Home",
      path: "/",
      component: () => import("@/views/Home")
    },
    {
    	name: "AccountRegister",
    	path: "/register",
    	component: () => import("@/views/Register")
    }
  ],
  mode:'history',
});