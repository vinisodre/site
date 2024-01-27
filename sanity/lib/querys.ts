import { client } from "@/sanity/lib/client";


export async function getFeaturedPost() {
    const query = `
    *[_type == "post" && featured == true] {
      title,
      _createdAt,
      "image": mainImage.asset->url,
      "slug": slug.current,
      excerpt
    }
    `;
  
    const data = await client.fetch(query);
  
    return data;
  }


export async function getCategories() {
    const query = `
      *[_type == "category"]
      {
        _id,
        _createdAt,
        title,
        "slug": slug.current,
        "image": image.asset->url
      }
      `;
  
    const data = await client.fetch(query);
  
    return data;
  }


