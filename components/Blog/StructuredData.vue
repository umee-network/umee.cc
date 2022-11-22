<template>
  <div></div>
</template>
<script>
export default {
  props: {
    headline: {
      type: String,
      default: '',
    },
    description: {
      type: String,
    },
    image: {
      type: String,
      default: '',
    },
    datePublished: {
      type: String,
    },
    datePublished: {
      type: String,
    },
    authorName: {
      type: String,
    },
    authorUrl: {
      type: String,
    },
  },
  jsonld() {
    return {
      '@context': 'https://schema.org',
      '@type': 'NewsArticle',
      headline: this.headline,
      description: this.description,
      image: [this.image],
      datePublished: this.datePublished,
      dateModified: this.datePublished,
      author: [
        {
          '@type': 'Person',
          name: this.authorName,
          url: this.authorUrl,
        },
      ],
    }
  },
}
</script>
