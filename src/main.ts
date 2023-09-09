import { createApp } from 'vue'
import router from './router/index'

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
  faBars,
  faCalendar,
  faDownload,
  faUsers,
  faLocationDot,
  faUser,
  faCheck,
  faBackwardFast,
  faBackwardStep,
  faForwardStep,
  faForwardFast,
  faHeart
} from '@fortawesome/free-solid-svg-icons'
import {
  faBuilding
} from '@fortawesome/free-regular-svg-icons'
library.add(
  faCaretDown,
  faMagnifyingGlass,
  faBars,
  faCalendar,
  faDownload,
  faBuilding,
  faUsers,
  faLocationDot,
  faUser,
  faCheck,
  faBackwardFast,
  faBackwardStep,
  faForwardStep,
  faForwardFast,
  faHeart
)

createApp(App)
.use(router)
.component('font-awesome-icon', FontAwesomeIcon)
.mount('#app')
