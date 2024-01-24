import React from "react";
import { Button } from "./ui/button";
import { client } from "@/sanity/lib/client";
import Link from "next/link";
import { PortableText } from "@portabletext/react";
import Image from "next/image";

async function getData() {
  const query = `
  *[_type == "post" && featured == true] | order(_createdAt desc) {
    _id,
    _createdAt,
    title,
    "image": mainImage.asset->url,
    "slug": slug.current,
    excerpt,
    content
  }
  `;

  const data = await client.fetch(query);

  return data;
}

//TODO: Colocar exibição condicional - se não tiver featured em data, não exibir o componente
//TODO: RETIRAR VINICIUS
//TODO: vERIFICAR FORMATAÇÃO DO TEXTO DESTE COMPONENTE

export default async function Featured() {
  const data = await getData();
  console.log('Data:', data);
  return (
    <div>
      <h1 className="text-8xl">
        <b>Vinicius Sodré</b>
      </h1>
{data.map((data) => {
        console.log('data:', data);
        return (
          <div className="flex align-middle" key={data.slug}>
            <div>
              <Image src={data.image} alt={data.title} width={500} height={500} />
            </div>
            <div className="flex flex-col">
              <h2 className="text-4xl">{data.title}</h2>
              <PortableText value={data.excerpt} />
              <Button size={"sm"} className="w-fit">
                <Link href={`/${data.slug}`}>Saiba mais</Link>
              </Button>
            </div>
          </div>
);
      })}
    </div>
  );
}


