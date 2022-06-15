export default ({ app }) => {
  app.$cookies.set('announcement-closed', false, {
    path: '/',
    maxAge: 60 * 60 * 24 * 7,
  })
}
