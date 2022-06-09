<template>
  <div>
    <div class="uk-child-width-1-2" uk-grid>
      <div>
        <nuxt-link
          v-for="post in posts.data"
          :to="{ name: 'posts-slug', params: { slug: post.attributes.slug } }"
          :key="post.id"
        >
          <div class="uk-card uk-card-muted">
            <div v-if="post.cover" class="uk-card-media-top">
              <img :src="api_url + post.cover.url" alt="" height="100" />
            </div>
            <div class="uk-card-body">
              <p id="category" v-if="post.category" class="uk-text-uppercase">
                {{ post.post.name }}
              </p>
              <p id="title" class="uk-text-large">
                {{ post.attributes.title }}
              </p>
            </div>
          </div>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      api_url: process.env.strapiBaseUri,
    }
  },
  props: {
    posts: Array,
  },
}
</script>
