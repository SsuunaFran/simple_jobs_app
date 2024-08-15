import '@mdi/font/css/materialdesignicons.css'
import { aliases, mdi } from 'vuetify/lib/iconsets/mdi-svg.mjs'
import { mdiAccount } from '@mdi/js'

import 'vuetify/styles'

const vuetify = createVuetify({
  ssr: true,
  icons: {
    defaultSet: 'mdi',
    aliases: {
      ...aliases,
      account: mdiAccount,
    },
    sets: {
      mdi,
    },
  },
})
