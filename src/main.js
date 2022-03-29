import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "../src/store/store.js";
import "./styles/style.scss";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import HistogramSlider from "vue3-histogram-slider";
import "vue3-histogram-slider/dist/histogram-slider.css";


const app = createApp(App);

app.config.productionTip = false;
app.component(HistogramSlider.name, HistogramSlider);



app.use(ElementPlus);
app.use(router);
app.use(store);
app.mount("#app");
