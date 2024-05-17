

import { createApp } from 'vue'
import App from './App.vue'
import { createStore } from 'vuex'
import { read, writeFileXLSX } from "xlsx";
import handleFileUpload from './components/HandleFileUpload.vue';

const store = createStore({
});




createApp(App).mount('#app')

