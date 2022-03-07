import sanityClient from '@sanity/client'
import ImageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
    projectId: '6h48n3tm',
    dataset: 'production',
    apiVersion: '2022-02-01',
    useCdn: true,
    token: 'skgqk8xraywLL7UMTHum8WbC8kZo4FoQSkIhPnqrm7ql22LZ58MZlwhxxhxIMatrZJCILlL5TFrUJXc2wudQKlk6Or8NQ9sOpHp0GlTyYKCfLtnzp1m3o3dXMPONR2j4CCEc36BL3qpQbsrQ5pZamNtsOEne2imTLABnkhm635dKAtMYUYK7',
});

const builder = ImageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
