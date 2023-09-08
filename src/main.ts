import { createApp } from 'vue'

/**
 * Application components.
 */
import App from './App.vue'

/**
 * Main styles.
 */
import './styles/main.scss'
import 'tw-elements/dist/css/tw-elements.min.css'

/**
 * Fontawesome.
 */
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {
  faCaretDown,
  faMagnifyingGlass,
  faBars
} from '@fortawesome/free-solid-svg-icons'
library.add(
  faCaretDown,
  faMagnifyingGlass,
  faBars
)

createApp(App)
.component('font-awesome-icon', FontAwesomeIcon)
.mount('#app')
