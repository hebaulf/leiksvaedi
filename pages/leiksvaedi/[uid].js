import Image from 'next/image';
import { createClient, linkResolver } from "../../prismicio";
import * as prismicH from "@prismicio/helpers";
import { PrismicRichText } from '@prismicio/react';

export default function PlaygroundPage({ playground }) {

	return (
		<section className="mt-8 mx-auto max-w-screen-xl pb-4 px-4 items-center lg:flex md:px-8">
			<div className="space-y-4 flex-1 sm:text-center lg:text-left">
				<h1 className="text-gray-800 font-bold text-4xl xl:text-5xl">
					<PrismicRichText field={playground.data.playgroundTitle} />
				</h1>
				<p className="text-gray-500 max-w-xl leading-relaxed sm:mx-auto lg:ml-0">
					<PrismicRichText field={playground.data.playgroundDescription} />
				</p>
			</div>
			<div className="flex-1 text-center mt-4 lg:mt-0 lg:ml-3">
				<Image 
					src={playground.data.playgroundDefaultImage.url || 'https://www.pngkey.com/png/full/233-2332677_image-500580-placeholder-transparent.png'} 
					layout="responsive" 
					height="600" 
					width="800" 
					priority 
					alt={playground.data.playgroundDefaultImage.alt || ""} 
					className="w-full mx-auto sm:w-10/12 lg:w-full" 
				/>
			</div>
		</section>
	)
}

export async function getStaticProps({ params, previewData }) {
	// console.log("params: ", params)
  const client = createClient({ previewData });
	
  const playground = await client.getByUID("playground", params.uid);

  return {
    props: {
      playground,
    },
  };
}

export async function getStaticPaths() {
  const client = createClient();
  const playgrounds = await client.getAllByType("playground");

	// console.log(playgrounds)

	return {
    paths: playgrounds.map((playground) => prismicH.asLink(playground, linkResolver)),
    fallback: false,
  };

}