import { NSpace } from "naive-ui"

export default defineNuxtComponent({
    setup(){
        definePageMeta({
            layout: 'dashboard'
        })
    },
    render() {
        return(
            <NSpace class={['p-6']}>
                From /dashboard/superadmin/resources
            </NSpace>
        )
    }
})