import React from "react";
import { client } from "@/sanity/lib/client";
import Image from "next/image";
import { Button } from "./ui/button";
import { PortableText } from "@portabletext/react";
import { RichTextComponents } from "./RichTextComponents";
import Link from "next/link";

import { Post } from "@/types/Post";

async function getData() {
  const query = `
    *[_type == "post"] | order(_createdAt desc)
    {
      _id,
      _createdAt,
      title,
      "image": mainImage.asset->url,
      "slug": slug.current,
      excerpt
    }
    `;

  const data = await client.fetch(query);

  return data;
}

export default async function BlogCard() {
  const data = await getData();
  console.log("o que vem da api 2", data);

  return (
    <div className="flex flex-col p-4 rounded-xl">
      {data.map((item: Post) => (
        <div className="flex flex-col align-start lg:flex-row my-8 lg:gap-4 " key={item._id}>
          <div className="flex-1 lg:w-1/2">
            <Link href={`/posts/${item.slug}`}>
              <Image
                src={item.image}
                alt={item.title}
                width={500}
                height={500}
                className="rounded-xl shadow-lg w-full"
              />
            </Link>
          </div>
          <div className="flex-1 lg:w-1/2 flex flex-col justify-between">
            <h1 className="text-xl font-bold my-2 lg:mt-0">{item.title}</h1>
            <PortableText
              value={item.excerpt}
              components={RichTextComponents}
            />
            <div>
              
                <Button size={"sm"} className=" text-xs mt-4">
                <Link href={`/posts/${item.slug}`}>Continue lendo...</Link>
                </Button>

            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

//TODO: corrigir a implementação do link no lugar de button
