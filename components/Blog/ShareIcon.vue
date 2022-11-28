<template>
  <ShareNetwork
    :network="network"
    :url="url"
    :title="title"
    :description="description"
    class="inline-block"
  >
    <slot></slot>
  </ShareNetwork>
</template>

<script>
export default {
  props: {
    network: String,
    title: String,
    url: String,
    description: String,
  },
}
</script>
