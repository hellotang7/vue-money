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
        recordList: [] as RecordItem[],
        tagList: [] as Tag[]
    },
    mutations: {


        fetchRecord(state) {
            state.recordList = JSON.parse(window.localStorage.getItem('recordList') || '[]') as RecordItem[];

        },
        createRecord(state, record) {
            const record2: RecordItem = recordListModel.clone(record);
            record2.createdAt = new Date();
            state.recordList.push(record2);
            store.commit('saveRecord');
        },
        saveRecord(state) {
            window.localStorage.setItem('recordList', JSON.stringify(state.recordList));
        },



        fetchTag(state) {
           state.tagList = JSON.parse(window.localStorage.getItem('tagList') || '[]');
        },
        createTag(state, name: string) {
            const names = state.tagList.map(item => item.name);
            if (names.indexOf(name) >= 0) {
            }

            const id = createId().toString()
            state.tagList.push({id, name: name});
            store.commit('saveTag')
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
            return true;
        }

    },
});
export default store;
