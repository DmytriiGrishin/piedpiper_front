import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import '@mdi/font/css/materialdesignicons.css'

Vue.use(Vuetify)

const opts = {
    theme: {
        themes: {
            light: {
                primary: "#A39A9A",
                secondary: "#FFFFFF",
                accent: "#000000",
                error: "#ff4e4e",
                'primary--text': "#FFFFFF"
            },
        },
    },
}

export default new Vuetify(opts)
