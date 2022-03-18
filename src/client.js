import sanityClient from '@sanity/client'
import ImageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
    projectId: '6h48n3tm',
    dataset: 'production',
    apiVersion: '2022-02-01',
    useCdn: true,
    token: process.env.SANITY_TOKEN,
});

const builder = ImageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
