# Nuxt.js - GraphCMS - Sakura.css Blog Starter Template

A simple blog starter template using Nuxt.js, GraphCMS and Sakura.css.

## Highlights

- Blog skeleton made with [Nuxt.js](https://github.com/nuxt/nuxt.js) Vue Framework
- Uses [Sakura.css](https://github.com/oxalorg/sakura) alongside semantic HTML tags
- GraphCMS enabled
- Uses static target mode of Nuxt.js to provide great performance.

## Getting Started

To set up and run this starter template, simply run:

```sh
yarn && yarn dev
```

Make sure to set the `GRAPHCMS_ENDPOINT` env variable.

## Commands

```sh
# Run in dev mode
yarn dev

# Run in production mode
yarn generate && yarn start
```

## Tutorial

I have written an article on how to build from scratch and deploy this starter template, [check it out](https://jvanelian.dev/blog/blog-nuxt-sakura-graphcms-vercel).

## Contents
```
project root
│   nuxt.config.js // Nuxt.js configuration file
│
└───components
│   │   navbar.vue // Simple navbar component, included in the default.vue layout
│
└───layouts
│   │   default.vue // Default layout to be used in templates
│
└───pages
│   │   _slug.vue // Template to show one article, based on it's slug
│   │   index.vue // Used to show all articles
│
└───plugins
    │   graphcms.js // Contains basic configuration to use GraphQL requests
```