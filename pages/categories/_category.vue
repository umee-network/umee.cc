<template>
  <h1></h1>
</template>

<script>
export default {
  middleware({ store, redirect, params }) {
    return redirect(`/categories/${params.category}/page/1`)
  },
}
</script>
