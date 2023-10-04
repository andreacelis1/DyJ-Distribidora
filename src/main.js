import { createApp } from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import router from './router'
import { createPinia } from 'pinia'

const pinia = createPinia()

loadFonts()

createApp(App)
.use(pinia)
  .use(vuetify)
  .use(router)
  .mount('#app')

