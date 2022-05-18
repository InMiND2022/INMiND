import { createApp } from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import VueGtag from "vue-gtag";

import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.js"

loadFonts()

createApp(App)
  .use(vuetify)
  .use(VueGtag, {
    config: {id: "G-KBV0EK6JWK"}
  })
  .mount('#app')
