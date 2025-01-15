import Vue from "vue";
import VueRouter from "vue-router";
import Exercise1View from "../views/Exercise1View.vue";
import Exercise2View from "../views/Exercise2View.vue";
import Exercise3View from "../views/Exercise3View.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "exercise-1",
    component: Exercise1View,
  },
  {
    path: "/exercise-2",
    name: "exercise-2",
    component: Exercise2View,
  },
  {
    path: "/exercise-3",
    name: "exercise-3",
    component: Exercise3View,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
