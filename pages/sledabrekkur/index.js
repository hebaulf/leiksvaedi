import { createClient } from '../../prismicio'
import PageIntro from '../../components/PageIntro'
import Card from '../../components/Card'

export async function getStaticProps({ previewData }) {
	const client = createClient({ previewData })
	const prismicSlopes = await client.getAllByType("slope");

	return {
		props: {
			prismicSlopes,
		}
	}
}

const Sledabrekkur = ({ prismicSlopes }) => {
	// console.log("slopes: ", prismicSlopes)

	return (
		<section className="mt-12 mx-auto px-4 max-w-screen-xl lg:px-8">
			{/* <pre>{JSON.stringify(prismicSlopes, null, 2)}</pre> */}
			<PageIntro 
				title="Sleðabrekkur" 
				text="Skoðaðu lista af sleðabrekkum á höfuðborgarsvæðinu. Finndu brekku við hæfi!"
			/>

			<div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
				{prismicSlopes.map((slope) => (
					<Card
						key={slope.id}
						cardlinkhref="/sledabrekkur/[id]"
						cardlinkas={`/sledabrekkur/${slope.uid}`}
						imgsrc={slope.data.slopeImage.url || 'https://www.pngkey.com/png/full/233-2332677_image-500580-placeholder-transparent.png'}
						imgalt={slope.data.slopeImage.alt || ""}
						cardtitle={slope.data.slopeTitle[0].text}
						cardcontent={slope.data.slopeDescription[0].text}
						cardmaphref={`http://www.google.com/maps?q=${slope.data.slopeLocation}`}
						cardmaptext="Kort"
					/>
				))}
			</div>
    </section>
  )
}

export default Sledabrekkur