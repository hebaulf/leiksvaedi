import * as prismic from '@prismicio/client'
import * as prismicH from "@prismicio/helpers"
import * as prismicNext from "@prismicio/next"
import sm from './sm.json'

/**
 * The project's Prismic endpoint and repository name.
 */
export const endpoint = sm.apiEndpoint
export const repositoryName = prismic.getRepositoryName(endpoint)

/**
 * The project's Prismic Link Resolver. This function determines the URL for a given Prismic document.
 *
 * @type {prismicH.LinkResolverFunction}
 */

export const linkResolver = (doc) => {
  if (doc.type === "slope") {
    return `/sledabrekkur/${doc.uid}`;
  }

  if (doc.type === "playground") {
    return `/leiksvaedi/${doc.uid}`;
  }

  if (doc.type === "page") {
    return `/${doc.uid}`;
  }

  if (doc.type === "homepage") {
    return `/`;
  }
}

// This factory function allows smooth preview setup
export const createClient = (config = {}) => {
  const client = prismic.createClient(endpoint)

  prismicNext.enableAutoPreviews({
    client,
    previewData: config.previewData,
    req: config.req,
  })

  return client;
}