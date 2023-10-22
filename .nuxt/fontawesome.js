import Vue from 'vue'
import { library, config } from '@fortawesome/fontawesome-svg-core'
import {
  FontAwesomeLayers,
  FontAwesomeLayersText,
  FontAwesomeIcon
} from '@fortawesome/vue-fontawesome'

import {
  faCalendarDays as freeFasFaCalendarDays,
  faUser as freeFasFaUser,
  faMapPin as freeFasFaMapPin,
  faEnvelope as freeFasFaEnvelope,
  faPhone as freeFasFaPhone,
  faBars as freeFasFaBars,
  faStar as freeFasFaStar,
  faComment as freeFasFaComment
} from '@fortawesome/free-solid-svg-icons'

import {
  faFacebookF as freeFabFaFacebookF,
  faTwitter as freeFabFaTwitter,
  faInstagram as freeFabFaInstagram,
  faLinkedin as freeFabFaLinkedin,
  faYoutube as freeFabFaYoutube,
  faWhatsapp as freeFabFaWhatsapp
} from '@fortawesome/free-brands-svg-icons'

library.add(
  freeFasFaCalendarDays,
  freeFasFaUser,
  freeFasFaMapPin,
  freeFasFaEnvelope,
  freeFasFaPhone,
  freeFasFaBars,
  freeFasFaStar,
  freeFasFaComment,
  freeFabFaFacebookF,
  freeFabFaTwitter,
  freeFabFaInstagram,
  freeFabFaLinkedin,
  freeFabFaYoutube,
  freeFabFaWhatsapp
)

config.autoAddCss = false

Vue.component('FontAwesomeIcon', FontAwesomeIcon)
Vue.component('FontAwesomeLayers', FontAwesomeLayers)
Vue.component('FontAwesomeLayersText', FontAwesomeLayersText)
