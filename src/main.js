import { createApp } from 'vue'
import Vuex from "vuex";
import App from './App.vue'
//import "./sass/App.scss";
import { store as storeApp } from "./store";

export const store = new Vuex.Store({
  modules: {
    store: storeApp
  },
});

const app = createApp(App)
app.use(store);
app.mount('#app');

const setVDimensions = function () {
  // First we get the viewport height and we multiple it by 1% to get a value for a vh unit
  let vh = window.innerHeight * 0.01;
  let vw = window.innerWidth * 0.01;
  // Then we set the value in the --vh custom property to the root of the document
  document.documentElement.style.setProperty("--vh", `${vh}px`);
  document.documentElement.style.setProperty("--vw", `${vw}px`);
};

const setViewportHeight = () => {
  setVDimensions();
  // We listen to the resize event
  window.addEventListener("resize", setVDimensions);
};

setViewportHeight();
