<template>
  <div>
    <script type="application/ld+json">
      {
        "@context": "https://schema.org",
        "@type": "NewsArticle",
        "headline": "{{headline}}",
        "description": "{{description}}"
        "image": [
          "{{image}}",
        ],
        "datePublished": "{{datePublished}}",
        "dateModified": "{{datePublished}}",
        "author": [
          {
            "@type": "Person",
            "name": "{{authorName}}",
            "url": "{{authorUrl}}"
          },
        ]
      }
    </script>
  </div>
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
      type: Date,
    },
    datePublished: {
      type: Date,
    },
    authorName: {
      type: String,
    },
    authorUrl: {
      type: String,
    },
  },
}
</script>
