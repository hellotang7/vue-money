import Vue from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
import Nav_ from '@/components/Nav.vue';
import Layout_ from '@/components/Layout.vue';
import tagListModel from '@/models/tagListModel';
import recordListModel from '@/models/recordListModel';






Vue.config.productionTip = false;

Vue.component('Nav_', Nav_);
Vue.component('Layout_', Layout_);





new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');



if (document.documentElement.clientWidth > 500){
    window.alert('请使用手机打开本页面，以保证浏览效果')
    const img = document.createElement('img')
    img.src = '/srcimg.png'
    img.style.position = 'fixed'
    img.style.left = '50%'
    img.style.top = '50%'
    img.style.transform = 'translate(-50%,-50%)'
    img.style.boxShadow = '0 0 10px rgba(0,0,0,0.25)'
    document.body.appendChild(img)

    window.onclick = function(event) {
        if (event.target !== img) {
            img.style.display = "none";
        }
    }
}
