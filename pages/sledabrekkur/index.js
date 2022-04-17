import Link from 'next/link'
import Image from 'next/image'
import supabaseClient from '../../utils/supabaseClient'
import PageIntro from '../../components/PageIntro'
import Card from '../../components/Card'

export async function getStaticProps() {
	const { data: slopes, error } = await supabaseClient
		.from('sledslopes')
		.select('*');

	if (error) {
		throw new Error(error);
	}
	
	return {
		props: {
			slopes,
		}
	}
}

const Sledabrekkur = ({ slopes }) => {
  return (
		<section className="mt-12 mx-auto px-4 max-w-screen-xl lg:px-8">
			{/* <pre>{JSON.stringify(slopes, null, 2)}</pre> */}
			<PageIntro 
				title="Sleðabrekkur og skíðalyftur á Höfuðborgarsvæðinu" 
				text="Skoðaðu lista af sleðabrekkum og veldu það sem þér þykir best!"
			/>

			<div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
				{
					slopes.map((slope) => (
						<Card
							key={slope.id}
							cardlinkhref="/leiksvaedi/[id]"
							cardlinkas={`/leiksvaedi/${slope.id}`}
							imgsrc={slope.image.length === 0 ? 'https://www.pngkey.com/png/full/233-2332677_image-500580-placeholder-transparent.png' : slope.image}
							imgalt={slope.title}
							cardtitle={slope.title}
							cardcontent={slope.content}
							cardmaphref={`http://www.google.com/maps?q=${slope.longitude},${slope.latitude}`}
							cardmaptext="Kort"
						/>
					))
				}
			</div>
    </section>
  )
}

export default Sledabrekkur