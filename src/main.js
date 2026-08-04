import { createApp } from "vue";
import App from "./App.vue";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import "@fortawesome/fontawesome-free/css/all.min.css";

import "aos/dist/aos.css";
import AOS from "aos";

import "./assets/css/style.css";
import "./assets/css/loader.css";
import "./assets/css/animation.css";
import "./assets/css/responsive.css";

const app = createApp(App);

app.mount("#app");

AOS.init({
  duration: 1000,
  once: true,
});