# Algolia Site Search - React Instantsearch  

### [Live Site](https://leiksvaedi.vercel.app/)

The purpose of this project is for people (parents mostly) to be able to search and filter results for playgrounds, sled slopes or other open-area spaces based on criteria, with descriptions and other information, images and location.  

I decided to use Algolia as a search engine after talking with a programmer who has recently set it up on the [Listasafn Íslands website](https://www.listasafn.is/en/) and also a few years earlier on [Icelandair's website](https://www.icelandair.com/en-gb/). He sold me on the idea that it was pretty easy to set up and it is super fast. So I did a little research and came to the conclusion it was the best choice for a small project, like the one I had in mind.  

I used [React InstantSearch](https://www.algolia.com/doc/guides/building-search-ui/what-is-instantsearch/react/), a library for building super fast search-as-you-type search UI's with [Algolia](https://www.algolia.com/), which is a search API.  

&nbsp;

<img src="https://raw.githubusercontent.com/hebaulf/leiksvaedi/main/public/leiksvaedi.jpg" alt="Screenshots of the site seen on deskop and mobile browsers" />

&nbsp;

## Other Links
- [Figma](https://www.figma.com/file/jvZwfXC2k54UzPWEJGqLiK/Leiksv%C3%A6%C3%B0i?node-id=9%3A256)
- [Trello](https://trello.com/b/uqaRcjkj)
- [Research Plan](https://docs.google.com/document/d/1OkaT8R1GwkFL3oBCgeQO2-0nYSwmwdO1G1hUgrLWiAM/edit?usp=sharing)


## Tech Used
- [Next.js](https://nextjs.org/) as React framework. 
- Bootstrapped with [create-next-app](https://github.com/vercel/next.js/tree/canary/packages/create-next-app). 
- [Prismic](https://prismic.io/) as a CMS (and "database") 
- [Algolia](https://www.algolia.com/) for indexed search.
- [algoliasearch](https://www.npmjs.com/package/algoliasearch) and [react-instasearch](https://github.com/algolia/react-instantsearch) libraries to use with Algolia and connect with Prismic
- [Tailwind](https://tailwindcss.com/) for styling components
- Deployed using the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme)
