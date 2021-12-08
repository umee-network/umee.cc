# Umee Website 🐙

## Development

Built with [Nuxt.js](https://nuxtjs.org/), [Tailwind](https://tailwindcss.com/), [Node.js](https://nodejs.org/) and [Yarn](https://yarnpkg.com/).

```bash
# install dependencies
$ yarn install

# serve with hot reload at localhost
$ yarn dev
```

## How to edit content

### Home page
Home page content can be edited by making changes to the follwing file `~/content/pages/home.yml`

### Experience logos
The website automatically loads all images in the following folder `~/assets/images/experience-logos/`

* Images should be 420 x 170px in PNG format.
* Ordering can be changed by adjusting number prefix on each filename

### Backer logos
The website automatically loads all images in the following folder `~/assets/images/backer-logos/`

* Images should be 420 x 200px in PNG format.
* Ordering can be changed by adjusting number prefix on each filename

### FAQs
FAQ content is edited in the following markdown file `~/content/faq.md`. It uses `<summary>` and `<detail>` HTML elements to create collapsable question/answer blocks.

## Previewing changes

Any new changes should be made by checking out a new branch from main. Create a PR in Github from this new branch and it will automatically trigger a deployment preview site and URL within Netlify.
## Deploying

The site is automatically deployed to Netlify when any changes are merged into `main`.
