import AOS from 'aos'
import 'aos/dist/aos.css'

export default {
  mounted() {
    AOS.init({
      offset: 125,
      duration: 800,
      once: true
    })
  }
}