
import React from 'react'
import { client } from '@/sanity/lib/client'
import Image from 'next/image';
import { Button } from './ui/button';
import {PortableText} from '@portabletext/react';
import { RichTextComponents } from "./RichTextComponents";
import Link from 'next/link';

import { Post } from '@/types/Post';

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
    console.log("o que vem da api 2",data)

    return (
        <div className='flex flex-col bg-white text-black p-4 rounded-xl'>
            {data.map((item: Post) => (
                <div className='flex mb-2 gap-4' key={item._id}>
                    <div className='w-1/2'>
                    <Link href={`/posts/${item.slug}`}>
                        <Image src={item.image} alt={item.title} width={500} height={500} className='rounded-xl shadow-lg'/>
                    </Link>
                    </div>
                    <div className='w-1/2 flex flex-col justify-between'>
    
                            <h1 className='text-xl font-bold mt-2'>{item.title}</h1>
                            <PortableText
                                value={item.excerpt}
                                components={RichTextComponents}
                             />
                            <Button size={"sm"} className="w-fit mt-4 shadow-lg mb-2"><Link href={`/posts/${item.slug}`}>Ler mais</Link></Button>
                    </div>
                </div>
            ))}
        </div>
    )
}

//TODO: corrigir a implementação do link no lugar de button