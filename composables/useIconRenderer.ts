import { NIcon } from 'naive-ui'
import { Component } from 'nuxt/dist/app/compat/capi'
const useIconRenderer = (icon: Component) => {
    return () => h(NIcon, null, {
        default: () => h(icon)
    })
}

export default useIconRenderer