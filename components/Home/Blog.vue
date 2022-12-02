<template>
  <div class="container pb-20">
    <div class="flex justify-between items-center mb-6 md:mb-12">
      <h2
        class="max-w-[335px] md:max-w-none font-serif text-xxxl lg:text-xxxxl leading-none md:pr-8 lg:pr-0 lg:leading-[0.9]"
      >
        From the blog
      </h2>
      <div class="hidden md:block">
        <ButtonLink class="text-center" link="/blog">View all posts</ButtonLink>
      </div>
    </div>
    <BlogPosts :posts="posts" :preview="true" />

    <ButtonLink class="text-center md:hidden mt-12" link="/blog"
      >View all blog posts</ButtonLink
    >
  </div>
</template>

<script>
export default {
  props: {
    posts: {
      type: Array,
      default() {
        return []
      },
    },
  },
}
</script>
