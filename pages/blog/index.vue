<template>
  <h1></h1>
</template>

<script>
export default {
  middleware({ store, redirect }) {
    return redirect('/blog/page/1')
  },
}
</script>
