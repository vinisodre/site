import { RichTextComponents } from "@/components/RichTextComponents";
import { client } from "@/sanity/lib/client";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import React from "react";

async function getData(slug: string) {
  const query = `
  *[_type == "post" && slug.current == '${slug}']
  {
    _createdAt,
    title,
    "author": author._ref,
    "categories": categories[]->{title},
    "image": mainImage.asset->url,
    "slug": slug.current,
    content
  }[0]
  `;

  const data = await client.fetch(query);
  return data;
}

type Post = {
  _createdAt: string;
  title: string;
  author: string;
  categories: { title: string }[];
  image: string;
  slug: string;
  content: any;
};

export default async function Post({ params }: { params: { post: string } }) {
  const data: Post = await getData(params.post);

  return (
    <div>
      <h1>{data.title}</h1>
      <p>{data._createdAt}</p>
      {data.categories.map((category: { title: string }, index) => (
        <p key={index}>{category.title}</p>
      ))}
      <Image src={data.image} alt={data.title} width={500} height={500} />

      <PortableText value={data.content} components={RichTextComponents} />
    </div>
  );
}
