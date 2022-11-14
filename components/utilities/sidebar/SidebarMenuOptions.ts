import { MenuOption } from "naive-ui";
import * as IonIcon4 from '@vicons/ionicons4';
import useIconRenderer from "~~/composables/useIconRenderer";
const role = "superadmin";
export type CustomSidebarMenuOptions = MenuOption & {
    requiredRole: "superadmin" | "admin" | "employyee" | "verivicator" | "accessor"
}

const SidebarMenuOptions: CustomSidebarMenuOptions[] = [
    {
        label: 'Home',
        key: 'Home',
        requiredRole: "superadmin",
        icon: useIconRenderer(IonIcon4.IosHome)
    },
    {
        label: "Resources Management",
        key: 'resources-management',
        requiredRole: "superadmin",
        icon: useIconRenderer(IonIcon4.IosApps),
        children: [
            { label: 'User', key: 'user', icon: useIconRenderer(IonIcon4.IosContacts)},
            { label: 'Profile', key: 'profile', icon: useIconRenderer(IonIcon4.IosContacts)},
        ]
    },
    {
        label: "Authorization",
        key: "authorization",
        requiredRole: "superadmin",
        children: [
            { label: "Roles", key: "roles",},
            { label: "Permission", key: "permissions",}
        ]
    },
    {
        label: "Master Data",
        key: "master-data",
        requiredRole: "superadmin",
        children: [
            {
                label: "Regional",
                key: "regional",
                children: [
                    { label: "Province", key: "province" },
                    { label: "City", key: "city" },
                    { label: "District", key: "district" },
                    { label: "Villlage", key: "village" },
                ]
            }
        ]
    }
];
SidebarMenuOptions.forEach((option: CustomSidebarMenuOptions) => {
    option.requiredRole === role ? option.show = true : option.show = false
})
export default SidebarMenuOptions;