# Umee Website 🐙

[![Netlify Status](https://api.netlify.com/api/v1/badges/423df50c-2801-4926-83b7-8415e4d450cf/deploy-status)](https://app.netlify.com/sites/vibrant-bassi-5dde1e/deploys)

## Development

Built with [Nuxt.js](https://nuxtjs.org/), [Tailwind](https://tailwindcss.com/), [Node.js](https://nodejs.org/) and [Yarn](https://yarnpkg.com/). Deployed on [Netlify](https://netlify.com).

```bash
# install dependencies
$ yarn install

# serve with hot reload at localhost
$ yarn dev
```

---

## How to create pages using markdown

Create a new markdown file in `~/content/pages`. The filename you choose will become the URL. For example:

`~/content/pages/umeeverse.md => https://umee.cc/umeeverse`

Before getting started, you should checkout a new branch and create a pull request. This will allow you to use Netlify's Deploy Preview feature to preview and test the page. When the page is ready, you can close the PR, merging the changes to the main branch effectively setting the page live.

The header of the document contains **frontmatter** content. This is used to specify a title, date and a header image for the page:

```bash
---
title: Lorem ipsum dolor sit amet: consectetur adipiscing
date: 2022-01-21
header_image: images/header-image.jpg
---
```

The rest of the file should contain the body of your page and be written with [Markdown syntax](https://www.markdownguide.org/basic-syntax/).

### Images

Images and other media (e.g. PDFs) should be placed in the `~/static/images` folder. Images can then be placed in a page as follows:

```bash
![image alt text](/images/inline-image.jpg)
```

### Buttons

Two button components have been made available within markdown pages. There is a simple button and one with a gradient background. They can be placed in a page as follows:

```bash
<ButtonLink href="https://www.google.com">Take me somewhere new</ButtonLink>

<ButtonGradient href="https://www.google.com/">I am a button</ButtonGradient>
```

### Navigation links

A sidebar is automatically generated from any heading 2 and heading 3 tags used in the page. This allows a user to quickly jump to a section.

---

## Editing content on other pages

### Home page

Home page content can be edited by making changes to the follwing file `~/content/pages/home.yml`

### Experience logos

The website automatically loads all images in the following folder `~/assets/images/experience-logos/`

- Images should be 420 x 170px in PNG format.
- Ordering can be changed by adjusting number prefix on each filename

### Backer logos

The website automatically loads all images in the following folder `~/assets/images/backer-logos/`

- Images should be 420 x 200px in PNG format.
- Ordering can be changed by adjusting number prefix on each filename

### FAQs

FAQ content is edited in the following markdown file `~/content/faq.md`. It uses `<summary>` and `<detail>` HTML elements to create collapsable question/answer blocks.

---

## Announcements

The website features an announcement pop-up panel useful for alerting visitors to events or other important information.

Content for the panel is specified in [`~/content/pages/home.yml`](https://github.com/umee-network/umee.cc/blob/main/content/pages/home.yml) using the following fields:

```
announcement_title: Umeemania now live!
announcement_text: Our incentivized Testnet is now available
announcement_link_text: Find out more
announcement_link: /umeemania
```

If the fields are empty then the banner does not display. If a user closes the banner, their preference is stored in a cookie that expires in 7 days.

---

## Previewing changes

Any new changes should be made by checking out a new branch from main. Create a PR in Github from this new branch and it will automatically trigger a deployment preview site and URL within Netlify.

---

## Deploying

The site is automatically deployed to Netlify when any changes are merged into `main`.
