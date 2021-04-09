import { createApp } from 'vue'
import { configure } from 'vee-validate'

import App from '@/app/App.vue'
import router from '@/router'
import store from '@/store'
import '@/styles'

configure({
  validateOnBlur: true,
  validateOnChange: true,
  validateOnInput: false,
  validateOnModelUpdate: true
})

createApp(App).use(store).use(router).mount('#app')
