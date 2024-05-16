import { createRouter, createWebHistory } from "vue-router";
import Homepage from "../views/Homepage.vue";
import About from "../views/About.vue";
import Services from "../views/Services.vue";
import ContactUs from "../views/ContactUs.vue";

const routes = [
  {
    path: "/",
    name: "Homepage",
    component: Homepage,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/services",
    name: "Services",
    component: Services,
  },
  {
    path: "/contact",
    name: "ContactUs",
    component: ContactUs,
  },
];

const router = createRouter({
  history: createWebHistory("/"),
  routes,
});

export default router;
