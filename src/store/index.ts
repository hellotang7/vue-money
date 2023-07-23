import Vue from 'vue';
import Vuex from 'vuex';
import createId from '@/lib/createId';
import clone from '@/lib/clone';

Vue.use(Vuex);


const store = new Vuex.Store({
    state: {
        recordList: [],
        tagList: []
    } as RootState,
    mutations: {


        fetchRecord(state) {
            state.recordList = JSON.parse(window.localStorage.getItem('recordList') || '[]') as RecordItem[];

        },
        createRecord(state, record:RecordItem) {
            const record2 = clone(record);
            record2.createdAt = new Date().toISOString();
            state.recordList.push(record2);
            store.commit('saveRecord');
        },
        saveRecord(state) {
            window.localStorage.setItem('recordList', JSON.stringify(state.recordList));

        },


        fetchTag(state) {
            state.tagList = JSON.parse(window.localStorage.getItem('tagList') || '[]');
            if (!state.tagList || state.tagList.length === 0) {
                store.commit('createTag',{img: 'shopping', name: '购物'})
                store.commit('createTag',{img: 'eat', name: '餐饮'})
                store.commit('createTag',{img: 'home', name: '居住'})
                store.commit('createTag',{img: 'bus', name: '交通'})
                store.commit('createTag',{img: 'money', name: '通用'})

            }
        },
        createTag(state, payload: { img: string, name: string, }) {
            const {name, img} = payload;

            const names = state.tagList.map(item => item.name);
            const ID = createId().toString();

            if (names.indexOf(name) >= 0) {
                alert('标签名不可重复');
            } else {
                state.tagList.push({id: ID, name: name, img: img});
                store.commit('saveTag');

            }
        },
        saveTag(state) {
            window.localStorage.setItem('tagList', JSON.stringify(state.tagList));
        },
        removeTag(state, id: string) {
            let index = -1;
            for (let i = 0; i < state.tagList.length; i++) {
                if (state.tagList[i].id === id) {
                    index = i;
                    break;
                }
            }
            state.tagList.splice(index, 1);
            store.commit('saveTag');
        }

    },
});
export default store;
