import { createApp } from "vue";
import App from "./App.vue";
import store from "./store";
import './styles/reset.scss';
import './styles/rules.scss'
// import { createStore } from "vuex";
// import { read, writeFileXLSX } from "xlsx";
// import handleFileUpload from "./components/HandleFileUpload.vue";

// const store = createStore({});

createApp(App)
    .use(store)
    .mount("#app");
