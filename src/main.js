import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource';
import axios from "axios";
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import router  from './router/index';
import VueQuillEditor from 'vue-quill-editor'
import 'quill/dist/quill.snow.css';

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(VueResource);
Vue.use(axios);
Vue.use(VueQuillEditor);

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})

