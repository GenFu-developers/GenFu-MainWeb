import {
    createClient,
    createCurrentUserHook
} from 'next-sanity'
import imageUrlBuilder from '@sanity/image-url'

export const config = {
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    useCdn: process.env.NEXT_PUBLIC_SANITY_DATASET === 'production',
    apiVersion: '2021-08-31'
}

export const sanityClient = createClient(config)


const builder = imageUrlBuilder(config);

export const urlFor = (source) => builder.image(source);

export const useCurrentUser = createCurrentUserHook(config);