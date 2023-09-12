// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import {
  VDataTable,
  VDataTableServer,
  VDataTableVirtual,
} from "vuetify/labs/VDataTable";

// Vuetify
import { createVuetify } from 'vuetify'

export default createVuetify({
  components: {
    VDataTable,
    VDataTableServer,
    VDataTableVirtual,
  },
  theme: {
    themes: {
      light: {
        dark: false,
        colors: {
          primary: '#EC407A', // #E53935
          secondary:'#BBDEFB', // #FFCDD2
          tercero: '#FCE4EC'
        }
      }
    }
  }
})
