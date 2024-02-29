import { client } from "./client";
import imageUrlBuilder from '@sanity/image-url'
import type { Image } from 'sanity'

const builder = imageUrlBuilder(client)

function urlFor(source: Image) {
  return builder.image(source);
}

export default urlFor;