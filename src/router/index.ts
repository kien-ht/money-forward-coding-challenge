import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import UserSearchPage from "@/views/pages/UserSearchPage.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    redirect: "/users",
  },
  {
    path: "/users",
    name: "UserSearchPage",
    component: UserSearchPage,
  },
  {
    path: "/users/:id",
    name: "UserAccountListPage",
    component: () =>
      import(
        /* webpackChunkName: "about" */ "@/views/pages/UserAccountListPage.vue"
      ),
  },
  {
    path: "*",
    name: "404Page",
    component: () =>
      import(/* webpackChunkName: "about" */ "@/views/pages/404Page.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
