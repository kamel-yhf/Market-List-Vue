import Vue from "vue";
import VueRouter from "vue-router";
import Lists from "../components/ListComponent";
import Login from "../components/Login";
import NewList from "../components/CreateList";
import Products from "../components/ProductComponent";
import UpdateList from "../components/UpdateList";
import Register from "../components/Register";
import User from "../components/User";
import UpdatUser from "../components/UpdatUser";
import Market from "../components/Market";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: {
      name: "login",
    },
  },
  {
    path: "/market",
    name: "market",
    component: Market,
  },
  {
    path: "/lists",
    name: "Lists",
    component: Lists,
  },
  {
    path: "/login",
    name: "login",
    component: Login,
  },
  {
    path: "/new-list",
    name: "newList",
    component: NewList,
  },
  {
    path: "/product",
    name: "Product",
    component: Products,
  },
  {
    path: "/update-list/:id",
    name: "updateList",
    component: UpdateList,
  },
  {
    path: "/register",
    name: "register",
    component: Register,
  },
  {
    path: "/users",
    name: "user",
    component: User,
  },
  {
    path: "/user/:id",
    name: "updatUser",
    component: UpdatUser,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
