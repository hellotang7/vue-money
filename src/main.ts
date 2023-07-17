import Vue from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
import Nav from '@/components/Nav.vue';
import Layout from '@/components/Layout.vue';
import tagListModel from '@/models/tagListModel';
import recordListModel from '@/models/recordListModel';


Vue.config.productionTip = false;

Vue.component('Nav', Nav);
Vue.component('Layout', Layout);

//record store
window.recordList = recordListModel.fetch()
window.createRecord = (record:RecordItem)=>{recordListModel.create(record)}

//tag store
window.tagList = tagListModel.fetch();
window.createTag = (name:string) => {
const msg = tagListModel.create(name)
   if (msg === 'duplicated') {
        alert('标签名重复了');
    }else if (msg === 'success'){
        alert('创建成功')
        router.back()
    }
};
window.removeTag=(id:string)=>{
    return tagListModel.remove(id)

}





new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');
