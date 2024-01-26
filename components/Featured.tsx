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
    excerpt
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
  console.log('Data novo ====>:', data);
  return (
    <div>
      <h1 className="text-8xl mt-8 mb-4 font-bold">
        Vinicius Sodré
      </h1>
{data.map((data) => {
        return (
          <div className="flex align-middle bg-white text-black p-4 rounded-xl" key={data._id}>
            <div className="flex w-1/2">
              <Image src={data.image} alt={data.title} width={1000} height={1000} className="rounded-xl shadow-lg" />
            </div>
            <div className="flex flex-col justify-between w-1/2 px-4">
              <h2 className="text-4xl font-bold ">{data.title}</h2>
              <PortableText value={data.excerpt} />
              <Button size={"sm"} className="w-fit mt-4 shadow-lg">
                <Link href={`/${data.slug}`}>Saiba mais</Link>
              </Button>
            </div>
          </div>
);
      })}
    </div>
  );
}


