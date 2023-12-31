import Vue from 'vue';
import VueRouter, {RouteConfig} from 'vue-router';
import Hello from '../components/HelloWorld.vue';
import Money from '@/views/Money.vue';
import Labels from '@/views/Labels.vue';
import Statistics from '@/views/Statistics.vue';
import Detail from '@/views/Detail.vue';
import NotFound from '@/views/NotFound.vue';
import LabelsCreate from '@/views/LabelsCreate.vue';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
    {
        path: '/',
        redirect:'/money'
    }, {
        path: '/detail',
        component: Detail
    }, {
        path: '/money',
        component: Money
    }, {
        path: '/labels',
        component: Labels
    },{
        path: '/labels/add',
        component: LabelsCreate
    }, {
        path: '/statistics',
        component: Statistics
    }, {
        path: '/hello',
        component: Hello
    },{
        // 会匹配所有路径
        path: '*',
        component:NotFound
    }

];

const router = new VueRouter({
    routes
});

export default router;
