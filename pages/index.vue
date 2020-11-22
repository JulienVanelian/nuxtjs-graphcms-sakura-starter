<template>
  <article>
    <NuxtLink
      v-for="post in posts"
      :to="{ name: 'slug', params: { slug: post.slug } }"
      :key="post.slug"
    >
      <h3 v-text="post.title"/>
    </NuxtLink>
  </article>
</template>

<script>
import { gql } from 'graphql-request'

export default {
  async asyncData({ $graphcms }) {
    return await $graphcms.request(
      gql`
        {
          posts {
            title
            slug
          }
        }
      `
    )
  },

  head() {
    return { title: 'Blog' }
  }
}
</script>
