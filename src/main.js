import { createApp } from "vue";
import "./style.css";
import "../src/assets/css/index.css";
import App from "./App.vue";
import Overview from "../src/pages/Overview.vue";
import Dashboard from "../src/pages/Dashboard.vue";
import { createRouter, createWebHistory } from "vue-router";

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", redirect: "/dashboard" },
    { path: "/dashboard", component: Dashboard },
    { path: "/overview", component: Overview },
  ],
});

const app = createApp(App);
app.use(router);
app.mount("#app");
