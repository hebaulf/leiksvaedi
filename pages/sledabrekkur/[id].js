import Image from 'next/image';
import supabaseClient from '../../utils/supabaseClient'

export async function getServerSideProps({ params }) {  
	const { data: slope, error } = await supabaseClient
		.from('sledslopes')
		.select('*')
		.eq('id', params.id)
		.single();

	if (error) {
		console.log(error.message);
	}

	return {
			props: {
			slope,
		}
	}
}

export default function SlopePage({ slope }) {
	return (
		<section className="mt-24 mx-auto max-w-screen-xl pb-4 px-4 items-center lg:flex md:px-8">		
			<div className="space-y-4 flex-1 sm:text-center lg:text-left">
				<h1 className="text-gray-800 font-bold text-4xl xl:text-5xl">
					{slope.title}
				</h1>
				<p className="text-gray-500 max-w-xl leading-relaxed sm:mx-auto lg:ml-0">
					{slope.content}
				</p>
			</div>
			<div className="flex-1 text-center mt-4 lg:mt-0 lg:ml-3">
				<Image 
					src={slope.image.length === 0 ? 'https://www.pngkey.com/png/full/233-2332677_image-500580-placeholder-transparent.png' : slope.image} 
					layout="responsive" 
					height="600" 
					width="800" 
					loading="lazy" 
					alt={slope.title} 
					className="w-full mx-auto sm:w-10/12 lg:w-full" 
				/>
			</div>
		</section>
	)
}