import Head from 'next/head'
import algoliasearch from 'algoliasearch/lite'
import { createClient } from '../../prismicio'
import { 
  InstantSearch, 
  SearchBox, 
  Hits, 
  // ClearRefinements, 
  // Panel, 
  // RefinementList,
  connectStateResults,
  Stats,
} from 'react-instantsearch-dom'
import PageIntro from '../../components/PageIntro'
import Card from '../../components/Card'

const searchClient = algoliasearch(process.env.NEXT_PUBLIC_ALGOLIA_APP_ID, process.env.NEXT_PUBLIC_ALGOLIA_SEARCH_API);

const Sledabrekkur = () => {
	return (
		<>
			<Head>
        <title>Leiksvæði</title>
        <meta name="Leiksvæði í Reykjavík" content="Listi og leit fyrir leiksvæði í Reykjavík" />
      </Head>

			<div className="mt-12 mx-auto px-4 max-w-screen-xl lg:px-8">
				<PageIntro 
					title="Sleðabrekkur" 
					text="Skoðaðu lista af sleðabrekkum á höfuðborgarsvæðinu. Finndu brekku við hæfi!"
				/>

				<div className="relative bg-white overflow-hidden">
					<div className="mt-8 mx-auto max-w-screen-xl pb-4 px-4 items-center md:px-8">
						<InstantSearch searchClient={searchClient} indexName="slopes">
							<SearchBox />
							<div className="content-wrapper">
								<CustomResults />
							</div>
						</InstantSearch>
					</div>
				</div>
			</div>
		</>
	)
}

const Hit = ({ hit }) => {
  return (
    <Card 
      cardlinkhref={`/sledabrekkur/${hit.uid}`}
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

export default Sledabrekkur

export async function getStaticProps({ previewData }) {
	const client = createClient({ previewData })
	const prismicSlopes = await client.getAllByType("slope");

	return {
		props: {
			prismicSlopes,
		}
	}
}
