import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import { getFeaturedPost } from "@/sanity/lib/querys";
import { RichTextComponents } from "./RichTextComponents";

//TODO: Colocar exibição condicional - se não tiver featured em data, não exibir o componente

export default async function Featured() {
  const data: [] = await getFeaturedPost();
  return (
    <div>
      {data.map((item: any) => {
        return (
          <div
            className="flex flex-col p-4 rounded-xl lg:flex lg:flex-row lg:align-middle gap-4"
            key={item._id}
          >
            <div className="flex lg:w-1/2">
              <Image
                src={item.image}
                alt={item.title}
                width={1000}
                height={1000}
                className="rounded-xl shadow-lg"
              />
            </div>
            <div className="flex flex-col justify-between w-full lg:w-1/2 ">
              <h2 className="my-4 text-xl lg:text-4xl font-bold ">{item.title}</h2>
              <PortableText 
                value={item.excerpt}
                components={RichTextComponents}
                />
              <Button size={"sm"} className="w-fit mt-4 shadow-lg">
                <Link href={`/posts/${item.slug}`}>Saiba mais</Link>
              </Button>
            </div>
          </div>
        );
      })}
    </div>
  );
}
