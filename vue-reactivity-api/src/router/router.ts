import { createRouter, createWebHashHistory } from "vue-router";
import LoginPage from "../pages/Login.vue";

const routes = [{ path: "/login", component: LoginPage }];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
