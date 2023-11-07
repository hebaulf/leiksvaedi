require("dotenv").config();
const fetch = require('node-fetch');
const prismic = require('@prismicio/client');
const algolia = require('algoliasearch');

async function instantiateData() {
	// Get Prismic repository
	const client = prismic.createClient('leiksvaedi', { fetch });
	// Initiate Algolia client
	const algoliaClient = algolia(process.env.NEXT_PUBLIC_ALGOLIA_APP_ID, process.env.NEXT_ALGOLIA_ADMIN_API);

	// Get playgrounds from Prismic
	const getPlaygrounds = await client.getAllByType('playground');
	// Get slopes from Prismic
	const getSlopes = await client.getAllByType('slope');

	const getRecordsForPlaygrounds = ( playground ) => {
		const createRecord = {
			objectID: `${playground.id}`,
			uid: `${playground.uid}`,
			title: `${playground.data.playgroundTitle[0].text}`,
			description: `${playground.data.playgroundDescription[0].text}`,
			postal_code: `${playground.data.playgroundPostalcode}`,
			latitude: `${playground.data.playgroundLocation.latitude}`,
			longitude: `${playground.data.playgroundLocation.longitude}`,
			image_url: `${playground.data.playgroundDefaultImage.url}`,
			image_alt: `${playground.data.playgroundDefaultImage.alt}`,
			type: `${playground.data.playgroundType}`,
			tags: playground.tags
		}
		// console.log(createRecord);
		return createRecord;
	};

	const getRecordsForSlopes = ( slope ) => {
		const createRecord = {
			objectID: `${slope.id}`,
			uid: `${slope.uid}`,
			title: `${slope.data.slopeTitle[0].text}`,
			description: `${slope.data.slopeDescription[0].text}`,
			latitude: `${slope.data.slopeLocation.latitude}`,
			longitude: `${slope.data.slopeLocation.longitude}`,
			image_url: `${slope.data.slopeImage.url}`,
			image_alt: `${slope.data.slopeImage.alt}`,
			isSkilyft: `${slope.data.isSkilyft}`
		}
		// console.log(createRecord)
		return createRecord;
	};

	const playgroundRecords = [];
	for (const playground of getPlaygrounds) {
		playgroundRecords.push(getRecordsForPlaygrounds(playground));
	}

	const slopeRecords = [];
	for (const slope of getSlopes) {
		slopeRecords.push(getRecordsForSlopes(slope));
	}


	try {
		const playgroundsIndex = algoliaClient.initIndex('playgrounds');
		const slopesIndex = algoliaClient.initIndex('slopes');

		await playgroundsIndex.saveObjects(
			playgroundRecords
		);

		await slopesIndex.saveObjects(
			slopeRecords
		);

	} catch (e) {
		console.log(e);
	}
}

instantiateData();
