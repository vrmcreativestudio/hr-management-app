import { createApp } from 'vue'

import './styles/main.scss'

import App from './App.vue'

/**
 * Fontawesome.
 */
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faCaretDown } from '@fortawesome/free-solid-svg-icons'
library.add(faCaretDown)

createApp(App)
.component('font-awesome-icon', FontAwesomeIcon)
.mount('#app')
