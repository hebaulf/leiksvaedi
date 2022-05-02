import Image from 'next/image';
import { createClient, linkResolver } from "../../prismicio";
import * as prismicH from "@prismicio/helpers";
import { PrismicRichText } from '@prismicio/react';

export default function SlopePage({ slope }) {
	return (
		<section className="mt-24 mx-auto max-w-screen-xl pb-4 px-4 items-center lg:flex md:px-8">		
			<div className="space-y-4 flex-1 sm:text-center lg:text-left">
				<h1 className="text-gray-800 font-bold text-4xl xl:text-5xl">
					<PrismicRichText field={slope.data.slopeTitle} />
				</h1>
				<p className="text-gray-500 max-w-xl leading-relaxed sm:mx-auto lg:ml-0">
					<PrismicRichText field={slope.data.slopeDescription} />
				</p>
			</div>
			<div className="flex-1 text-center mt-4 lg:mt-0 lg:ml-3">
				<Image 
					src={slope.data.slopeImage.url || 'https://www.pngkey.com/png/full/233-2332677_image-500580-placeholder-transparent.png'} 
					layout="responsive" 
					height="600" 
					width="800" 
					loading="lazy" 
					alt={slope.data.slopeImage.alt || ""} 
					className="w-full mx-auto sm:w-10/12 lg:w-full" 
				/>
			</div>
		</section>
	)
}


export async function getStaticProps({ params, previewData }) {
	// console.log("params: ", params)
  const client = createClient({ previewData });
  const slope = await client.getByUID("slope", params.uid);

  return {
    props: {
      slope,
    },
  };
}

export async function getStaticPaths() {
  const client = createClient();
  const slopes = await client.getAllByType("slope");

	// console.log(slopes)

	return {
    paths: slopes.map((slope) => prismicH.asLink(slope, linkResolver)),
    fallback: false,
  };
}