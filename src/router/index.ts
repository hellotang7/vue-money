import Vue from 'vue';
import VueRouter, {RouteConfig} from 'vue-router';
import Hello from '../components/HelloWorld.vue';
import Money from '@/views/Money.vue';
import Labels from '@/views/Labels.vue';
import Statistics from '@/views/Statistics.vue';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [

    {
        path: '/',
        redirect:'/money'
    }, {
        path: '/money',
        component: Money
    }, {
        path: '/labels',
        component: Labels
    }, {
        path: '/statistics',
        component: Statistics
    }, {
        path: '/hello',
        component: Hello
    },

];

const router = new VueRouter({
    routes
});

export default router;
