import { createApp } from 'vue'
import Vuex from "vuex";
import App from './App.vue'
import "./sass/App.scss";
import { store as storeApp } from "./store";

export const store = new Vuex.Store({
  modules: {
    store: storeApp
  },
});

const app = createApp(App)
app.use(store);
app.mount('#app');