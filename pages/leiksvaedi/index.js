import { createClient } from '../../prismicio'
import PageIntro from '../../components/PageIntro'
import Card from '../../components/Card'

export async function getStaticProps({ previewData }) {
	const client = createClient({ previewData })
	const prismicPlaygrounds = await client.getAllByType("playground");
  
	return {
	  props: { 
			prismicPlaygrounds,
		},
	}
}
 
const Leiksvaedi = ({ prismicPlaygrounds }) => {
	// console.log("playgrounds: ", prismicPlaygrounds)

  return (
    <section className="mt-12 mx-auto px-4 max-w-screen-xl lg:px-8">
			{/* <pre>{JSON.stringify(prismicPlaygrounds, null, 2)}</pre> */}
			<PageIntro 
				title="Leiksvæði" 
				text="Skoðaðu leiksvæði að þinni hentugsemi og leitaðu eftir tegund svæðis, tegund leiktækja eða öðru sem hentar."
			/>

			<div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
				{prismicPlaygrounds.map((playground) => (
					<Card
						key={playground.id}
						cardlinkhref="/leiksvaedi/[id]"
						cardlinkas={`/leiksvaedi/${playground.uid}`}
						imgsrc={playground.data.playgroundDefaultImage.url !== null ? playground.data.playgroundDefaultImage.url : 'https://www.pngkey.com/png/full/233-2332677_image-500580-placeholder-transparent.png'}
						imgalt={playground.data.playgroundDefaultImage.alt !== null ? playground.data.playgroundDefaultImage.alt : playground.data.playgroundTitle[0].text}
						cardtitle={playground.data.playgroundTitle[0].text}
						cardcontent={playground.data.playgroundDescription[0].text}
						cardmaphref={`http://www.google.com/maps?q=${playground.data.location}`}
						cardmaptext="Kort"
					/>
				))}
			</div>
    </section>
  )
}

export default Leiksvaedi