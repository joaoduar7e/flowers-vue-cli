import Vue from 'vue';
import VueRouter from 'vue-router';
import List from '../components/List/List.vue';
import View from '../components/View/View.vue';
import PageNotFound from '../components/404/PageNotFound.vue';

Vue.use(VueRouter)

const routes = [
    //Caso seja vazio carregue o component List 
    { path: '/list', component: List, name: 'List'},
    //Caso passe o /view carregue o component view
    // passa o id como props
    { path: '/view/:id', component: View, name: 'View', props: true},
    { path: "/*", component: PageNotFound, name: '404' },
    { path: '/view/', component: PageNotFound, name: 'View'},
];

export default new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes
})