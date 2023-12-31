const localStorageKeyName = 'recordList';
const recordListModel = {
    data: [] as RecordItem[],
    clone(data: RecordItem[] | RecordItem) {
        return JSON.parse(JSON.stringify(data));
    },
    create(record: RecordItem) {
        const record2: RecordItem = recordListModel.clone(record);
        record2.createdAt = new Date().toISOString();
        this.data.push(record2);
        this.save()
    },
    fetch() {
        this.data = JSON.parse(window.localStorage.getItem(localStorageKeyName) || '[]') as RecordItem[];
        return this.data;
    },
    save() {
        window.localStorage.setItem(localStorageKeyName, JSON.stringify(this.data));
    }
};

export default recordListModel;
