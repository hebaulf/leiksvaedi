import supabaseClient from '../../utils/supabaseClient'
import PageIntro from '../../components/PageIntro'
import Card from '../../components/Card'

export async function getStaticProps() {
	const { data: playgrounds, error } = await supabaseClient
		.from('playgrounds')
		.select('*');

	if (error) {
		throw new Error(error);
	}
	
	return {
		props: {
			playgrounds,
		}
	}
}

const Leiksvaedi = ({ playgrounds }) => {
  return (
    <section className="mt-12 mx-auto px-4 max-w-screen-xl lg:px-8">
			{/* <pre>{JSON.stringify(playgrounds, null, 2)}</pre> */}
			<PageIntro 
				title="Leiksvæði" 
				text="Skoðaðu leiksvæði að þinni hentugsemi og leitaðu eftir tegund svæðis, tegund leiktækja eða öðru sem hentar."
			/>
			
			<div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
				{
					playgrounds.map((playground) => (
						<Card
							key={playground.id}
							cardlinkhref="/leiksvaedi/[id]"
							cardlinkas={`/leiksvaedi/${playground.id}`}
							imgsrc={playground.image.length === 0 ? 'https://www.pngkey.com/png/full/233-2332677_image-500580-placeholder-transparent.png' : playground.image}
							imgalt={playground.title}
							cardtitle={playground.title}
							cardcontent={playground.content}
							cardmaphref={`http://www.google.com/maps?q=${playground.longitude},${playground.latitude}`}
							cardmaptext="Kort"
						/>
					))
				}
			</div>
    </section>
  )
}

export default Leiksvaedi