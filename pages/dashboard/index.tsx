import { DataTableColumns, DataTableRowKey, NDataTable, NLayout, NLayoutContent, NP, NSpace } from "naive-ui"
export type RowData = {
    key: number
    name: string
    age: string
    address: string,
    role: "role",
    permissions: string
}
export default defineNuxtComponent({
    name: 'dashboard-index',
    setup(){
        definePageMeta({
            layout: 'dashboard'
        })

        return {
        }
    }, 
    render(){
        return(
            <NSpace class={['p-6']}>
                <NLayout class={['w-full']}>

                </NLayout>
            </NSpace>
        )
    }
})