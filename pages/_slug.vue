<template>
  <section v-if="post">
    <header>
      <h2 v-text="post.title"/>
    </header>
    <small>
      <span>Posted {{ formatDate(post.createdAt) }}</span> &mdash;
      <span>Updated {{ formatDate(post.updatedAt) }}</span>
    </small>
    <div v-html="post.content.html"/>
  </section>
</template>


<script>
import { gql } from 'graphql-request'

export default {
  async asyncData({ $graphcms, params }) {
    const { post } = await $graphcms.request(
      gql`
        query GetPost($slug: String) {
          post(where: { slug: $slug }) {
            title
            content {
              html
            }
            slug
            createdAt
            updatedAt
          }
        }
      `,
      { slug: params.slug }
    )

    return { post }
  },

  head() {
    return { title: this.post?.title }
  },

  methods: {
    formatDate(date) {
      const options = { year: "numeric", month: "short", day: "numeric" }

      return new Intl.DateTimeFormat('default', options).format(new Date(date))
    },
  }
}
</script>
