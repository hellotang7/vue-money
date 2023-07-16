type RecordItem = {
    tags: string[]
    notes: string
    type: string
    amount: number
    createdAt?:Date
}


type Tag = {
    id: string
    name: string
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
}
