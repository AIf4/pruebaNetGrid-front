import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import ToastPlugin from 'vue-toast-notification';
import VueDatePicker from '@vuepic/vue-datepicker';
import('preline')


import App from './App.vue'
import router from './router'


import './assets/main.css'
import 'vue-toast-notification/dist/theme-default.css';

import '@vuepic/vue-datepicker/dist/main.css'

const app = createApp(App)
app.use(createPinia())
app.use(ToastPlugin)
app.use(router)


app.component('VueDatePicker', VueDatePicker);

app.mount('#app')

