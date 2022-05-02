import Head from 'next/head'
import algoliasearch from 'algoliasearch/lite'
import { createClient } from '../prismicio'
import { 
  InstantSearch, 
  SearchBox, 
  Hits, 
  ClearRefinements, 
  Panel, 
  RefinementList,
  connectStateResults,
  Stats,
} from 'react-instantsearch-dom'
import Hero from '../components/Hero'
import Card from '../components/Card'

const searchClient = algoliasearch(process.env.NEXT_PUBLIC_ALGOLIA_APP_ID, process.env.NEXT_PUBLIC_ALGOLIA_SEARCH_API);

const Home = ({ page }) => {
  const heroSlice = page.data.slices[0].primary;

  return (
    <>
      <Head>
        <title>Leiksvæði</title>
        <meta name="Leiksvæði í Reykjavík" content="Leit fyrir leiksvæði og sleðabrekkur í Reykjavík" />
      </Head>

      <Hero 
        heroTitle={heroSlice.HeroTitle[0].text}
        heroTitleColored={heroSlice.HeroTitleColor[0].text}
        heroDescription={heroSlice.HeroDesc[0].text}
        heroImageUrl={heroSlice.HeroImage.url}
        heroImageAlt={heroSlice.HeroImage.alt}
      />

      <div className="relative bg-white overflow-hidden">
        <div className="mt-8 mx-auto max-w-screen-xl pb-4 px-4 items-center md:px-8">
          <InstantSearch searchClient={searchClient} indexName="playgrounds">
            <SearchBox />
            <div className="content-wrapper">
              <Facets />
              <CustomResults />
            </div>
          </InstantSearch>
        </div>
      </div>
    </>
  )
}

const Hit = ({ hit }) => {
  return (
    <Card 
      cardlinkhref={`/leiksvaedi/${hit.uid}`}
      imgsrc={hit.image_url}
      imgalt={hit.image_alt}
      cardtitle={hit.title}
      cardcontent={hit.description}
      latitude={hit.latitude}
      longitude={hit.longitude}
      cardmaptext={`Sjá á Korti`}
    />
  )
};

const Facets = () => (
  <aside>
    <ClearRefinements
      translations={{
        reset: 'Hreinsa',
      }}
    />

    <Panel header="Flokkar">
      <RefinementList attribute="tags" operator="or" limit={10} />
    </Panel>

    <Panel header="Tegund">
      <RefinementList attribute="type" operator="or" limit={10} />
    </Panel>
  </aside>
);

const CustomResults = connectStateResults(({ searchState, searchResults }) => (
  <div className="results-wrapper">
    <div className="results-topbar">
      <Stats />
    </div>

    {searchResults && searchResults.nbHits ? (
      <Hits hitComponent={Hit} />
    ) : (
      <div className="no-results">
        Ekkert fannst með leitarskilyrðunum &quot;<span className="query">{searchState.query}</span>&quot;
      </div>
    )}
  </div>
));

export default Home;

export async function getStaticProps({ previewData }) {
  const client = createClient({ previewData })
  const page = await client.getByUID('homepage', 'homepage')

  return {
    props: { 
      page,
    },
  }
}