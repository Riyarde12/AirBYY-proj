import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "../src/store/store.js";
import "./styles/style.scss";

const app = createApp(App);

import HistogramSlider from "vue-histogram-slider";
import "vue-histogram-slider/dist/histogram-slider.css";

app.component(HistogramSlider.name, HistogramSlider);

app.config.productionTip = false;

// app = ({
//   render: h => h(App)
// }).mount("#app");

app.use(router);
app.use(store);
app.mount("#app");
