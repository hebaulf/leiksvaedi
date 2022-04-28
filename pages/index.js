import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import { createClient } from '../prismicio'
import algoliasearch from 'algoliasearch/lite';
import { InstantSearch, SearchBox, Hits } from 'react-instantsearch-dom';

const searchClient = algoliasearch('E1MY7EOBEV', '20f2191b27f404467780b59feb4224a9');

export async function getStaticProps({ previewData }) {
  const client = createClient({ previewData })
  const page = await client.getByUID('homepage', 'homepage')

  return {
    props: { 
      page,
    }, // Will be passed to the page component as props
  }
}

const Home = ({ page }) => {
  const heroSlice = page.data.slices[0].primary;
  const heroTitle = heroSlice.HeroTitle[0].text;
  const heroTitleColored = heroSlice.HeroTitleColor[0].text;
  const heroDescription = heroSlice.HeroDesc[0].text;
  const heroImageUrl = heroSlice.HeroImage.url;
  const heroImageAlt = heroSlice.HeroImage.alt;

  console.log('page: ', page.data.slices[0])
  return (
    <>
      <Head>
        <title>Leiksvæði</title>
        <meta name="Leiksvæði í Reykjavík" content="Leit fyrir leiksvæði og sleðabrekkur í Reykjavík" />
      </Head>

      <div className="relative items-center pt-5 px-4 mx-auto max-w-screen-xl sm:px-8 sm:flex sm:space-x-6">
        <div className="max-w-7xl mx-auto">
          <InstantSearch searchClient={searchClient} indexName="test">
            <SearchBox />
            <Hits />
          </InstantSearch>
        </div>
      </div>

      <div className="relative bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
            <svg
              className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2"
              fill="currentColor"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <polygon points="50,0 100,0 50,100 0,100" />
            </svg>

            <div className="pt-10 mx-auto max-w-7xl px-4 sm:pt-12 sm:px-6 md:pt-16 lg:px-8 xl:pt-28">
              <div className="sm:text-center lg:text-left">
                <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                  <span className="block xl:block">{heroTitle}</span>
                  <span className="block text-indigo-600 xl:vlock">{heroTitleColored}</span>
                </h1>
                <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0" >
                  {heroDescription}
                </p>
                <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                {/* { slice?.items?.map((item, i) =>
                  <PrismicLink  field={item.HeroBtn}>My Link</PrismicLink>
                )} */}
                  <div className="rounded-md shadow">
                    <Link href="/leiksvaedi">
                      <a className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10">
                        Leiksvæði
                      </a>
                    </Link>
                  </div>
                  <div className="mt-3 sm:mt-0 sm:ml-3">
                    <Link href="/sledabrekkur">
                      <a className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10">
                        Sleðabrekkur
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <Image
            className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
            height="600"
            width="1024"
            src={heroImageUrl}
            alt={heroImageAlt !== null ? heroImageAlt : heroTitle}
          />
        </div>
      </div>
    </>
  )
}

export default Home;