import Vue from "vue";
import VueRouter from "vue-router";
import store from "./store/auth"; // Importa el store de Vuex

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("./components/Home_Com.vue"),
  },
  {
    path: "/login",
    name: "login",
    component: () => import("./components/Login_vuex.vue"),
  },
];

const router = new VueRouter({
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.name !== "login" && !store.getters.isLoggedIn) {
    // Si el usuario no ha iniciado sesión y no está en la página de inicio de sesión, redirige a la página de inicio de sesión
    next({ name: "login" });
  } else {
    // Si el usuario ha iniciado sesión o está en la página de inicio de sesión, permite la transición de ruta
    next();
  }
});

export default router;
