type RecordItem = {
    tags: string[]
    notes: string
    type: string
    amount: number
    createdAt?:any
}


type RootState = {
    recordList:RecordItem[],
    tagList:Tag[],
};

type Tag = {
    id: string
    name: string
    img:string
}
type TagListModel = {
    data: Tag[]
    fetch: () => Tag[]
    create: (name: string) => 'success' | 'duplicated'
    remove: (name: string) => boolean
    save: () => void
}
interface Window{
    tagList:Tag[]
    createTag:(name:string)=> void
    removeTag:(id:string)=>boolean

    recordList:RecordItem[]
createRecord:(record:RecordItem)=> void
}
