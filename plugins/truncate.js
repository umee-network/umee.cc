import Vue from 'vue'

/** Vue Filters Start */
Vue.filter('truncate', function (str, max = 10) {
  const array = str.trim().split(' ')
  const ellipsis = array.length > max ? '...' : ''
  return array.slice(0, max).join(' ') + ellipsis
})
/** Vue Filters End */
