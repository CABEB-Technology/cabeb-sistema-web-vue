import { createApp } from 'vue'
import App from '@/App.vue'
import router from '@/router/router'
import store from '@/store'

import PrimeVue from 'primevue/config'
import ToastService from 'primevue/toastservice'

const app = createApp(App)

app.use(store)
app.use(router)
app.use(PrimeVue)
app.use(ToastService)

// components prime


app.mount('#app')
