import { createApp } from "vue";
import App from "./App.vue";
import router from "./routes/index.js";

import "./style.css";
// Bootstrap
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";

createApp(App).use(router);
createApp(App).mount("#app");
