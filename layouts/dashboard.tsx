import { 
    NLayout,
    NLayoutContent, 
    NLayoutHeader,
    NLayoutFooter,
    NLayoutSider, 
    NMenu,
    NSpace,
    NH1,
    NAvatar,
    NDropdown,
    NButton,
    NPageHeader,
    NStatistic,
    NGrid,
    NGi,
    NBreadcrumb,
    NBreadcrumbItem,
    NIcon,
} from 'naive-ui';

import {
    IosMore
} from '@vicons/ionicons4';

import SidebarMenuOptions from '~~/components/utilities/sidebar/SidebarMenuOptions';
import { PropType } from 'nuxt/dist/app/compat/capi';
import { MenuSetupProps } from 'naive-ui/es/menu/src/Menu';

export default defineNuxtComponent({
    setup: (props, ctx) => {
        const collapsed = ref(true);
        const onCollapse = () => {
            collapsed.value = true
        }
        const onExpand = () => {
            collapsed.value = false
        }

        const route             = useRoute()
        const routePathRef      = ref(route.fullPath);
        const breadCrumbItems   = ref(routePathRef.value.split("/").filter((el) => el !== ""));

        const renderBreadCrumb = () => {
            return breadCrumbItems.value.map((breadCrumbItem) => {
                return <NBreadcrumbItem>
                    {breadCrumbItem.charAt(0).toUpperCase() + breadCrumbItem.slice(1)}
                </NBreadcrumbItem>
            })
        }

        return { collapsed, onExpand, onCollapse, renderBreadCrumb }
    },
    render(){
        
        return(
                <NSpace vertical size={"large"}>
                    <NLayout class={['h-screen w-screen']}>
                        <NLayoutHeader bordered class={['absolute h-16 flex flex-row justify-between']}>
                            <NSpace class={['px-6 py-2']}>
                                <NH1>MatX</NH1>
                            </NSpace>
                            <NSpace class={['px-6 py-3']}>
                                <NDropdown trigger={"click"} placement={"bottom-end"} options={[
                                    {
                                        label: 'My Profile',
                                        key: 'My Profile'
                                    },
                                    {
                                        label: "My Preferences",
                                        key: "My Preferences"
                                    },
                                    {
                                        label: 'My Billings',
                                        key: 'My Billings'
                                    },
                                    {
                                        label: 'Log Out',
                                        key: 'Log Out'
                                    }
                                ]} onSelect={(key) => {console.log(key)}}>
                                    <NButton quaternary circle>
                                        <NAvatar round size={"medium"}/>
                                    </NButton>
                                </NDropdown>
                            </NSpace>
                        </NLayoutHeader>
                        <NLayout hasSider class={['absolute top-16 bottom-16 w-full']}>
                            <NLayoutSider 
                                bordered 
                                collapseMode={"width"}
                                collapsedWidth={64}
                                width={300}
                                collapsed={this.collapsed}
                                showTrigger
                                onCollapse={this.onCollapse}
                                onExpand={this.onExpand}
                                nativeScrollbar={false}
                                class={['max-h-screen']}>
                                    <NMenu collapsed={this.collapsed} collapsedWidth={64} collappsedIconnSize={22} options={SidebarMenuOptions} ref="menuRef"/> 
                            </NLayoutSider>
                            <NLayoutContent nativeScrollbar={false} class={['max-h-screen w-full bg-gray-100']}>
                                {/* Breadcrumb JSX element */}
                                <NBreadcrumb class={['font-bold p-6']}>
                                    { this.renderBreadCrumb() }
                                </NBreadcrumb>

                                {/* Page Header JSX Element */}
                                <NPageHeader v-slots={{
                                    title: () => {
                                        return(
                                            <a href="https://anyway.fm/" style="text-decoration: none; color: inherit">Annyway Fm</a>
                                        )
                                    },
                                    footer: () => 'As of April 3, 2021',
                                    extra: () => {
                                        return(
                                            <NSpace>
                                                <NButton onClick={() => console.log("button clicked")}>Refresh</NButton>
                                                <NDropdown placement={"bottom-start"} options={[
                                                    { label: 'More episodes',key: '1'}
                                                ]}>
                                                    <NButton bordered={false} class={['p-1 font-bold text-xl']}>
                                                        <NIcon size={40}>
                                                            <IosMore/>
                                                        </NIcon>
                                                    </NButton>
                                                </NDropdown>
                                            </NSpace>
                                        )
                                    }
                                }} subtitle={"A new subtitle for this"} class={['p-6']} onBack={() => {
                                    console.log({
                                        current: window.location
                                    })
                                }}>
                                    <NGrid xGap={10} cols={5}>
                                        <NGi class={['bg-white p-4']}>
                                            <NStatistic label={"Registered Employee Count"} value={24234123}/>
                                        </NGi>
                                        <NGi class={['bg-white p-4']}>
                                            <NStatistic label={"Registered Instantion"} value={125324536}/>
                                        </NGi>
                                        <NGi class={['bg-white p-4']}>
                                            <NStatistic label={"Registered Verifikator"} value={1321123}/>
                                        </NGi>
                                        <NGi class={['bg-white p-4']}>
                                            <NStatistic label={"Registered Arsiparis"} value={14122123}/>
                                        </NGi>
                                        <NGi class={['bg-white p-4']}>
                                            <NStatistic label={"Registered Account"} value={44124123}/>
                                        </NGi>
                                    </NGrid>                                    
                                </NPageHeader>
                                <NSpace class={['']}>
                                { 
                                    this.$slots.default()
                                }
                                </NSpace>
                            </NLayoutContent>
                        </NLayout>
                        <NLayoutFooter bordered class={['absolute w-full bottom-0 h-16 p-6']}>
                            Copyright @ 2022
                        </NLayoutFooter>
                    </NLayout>
                </NSpace>
        )
    }
})