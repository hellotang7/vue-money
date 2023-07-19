import Vue from 'vue';
import Vuex from 'vuex';
import createId from '@/lib/createId';

Vue.use(Vuex);



const recordListModel = {
    data: [] as RecordItem[],
    clone(data: RecordItem[] | RecordItem) {
        return JSON.parse(JSON.stringify(data));
    },
};

const store = new Vuex.Store({
    state: {
        recordList: [],
        tagList: []
    } as RootState,
    mutations: {


        fetchRecord(state) {
            state.recordList = JSON.parse(window.localStorage.getItem('recordList') || '[]') as RecordItem[];

        },
        createRecord(state, record) {
            const record2: RecordItem = recordListModel.clone(record);
            record2.createdAt = new Date().toISOString();
            state.recordList.push(record2);
            store.commit('saveRecord');
        },
        saveRecord(state) {
            window.localStorage.setItem('recordList', JSON.stringify(state.recordList));
        },



        fetchTag(state) {
           state.tagList = JSON.parse(window.localStorage.getItem('tagList') || '[]');
        },
        createTag(state, payload:{img:string,name: string,}) {
            const {name,img} = payload

            const names = state.tagList.map(item => item.name);
            const ID = createId().toString()

            if (names.indexOf(name) >= 0) {
                alert('标签名不可重复')
            }else {
                state.tagList.push({id:ID, name: name,img:img});
                store.commit('saveTag')
            }
        },
        saveTag(state) {
            window.localStorage.setItem('tagList', JSON.stringify(state.tagList));
        },
        removeTag(state,id: string) {
            let index = -1;
            for (let i = 0; i < state.tagList.length; i++) {
                if (state.tagList[i].id === id) {
                    index = i;
                    break;
                }
            }
            state.tagList.splice(index, 1);
            store.commit('saveTag')
        }

    },
});
export default store;
