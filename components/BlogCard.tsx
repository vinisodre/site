
import React from 'react'
import { client } from '@/sanity/lib/client'
import Image from 'next/image';
import { Button } from './ui/button';
import {PortableText} from '@portabletext/react';

async function getData() {
    const query = `
    *[_type == "post"] | order(_createdAt desc)
    {
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
  

  export default async function BlogCard() {
    const data = await getData();

    console.log('Data:', data); // Add console.log statement for data

    return (
        <div className='flex flex-col bg-pink-400'>
            {data.map((item) => (
                console.log('Item:', item), // Add console.log statement for item
                <div className='flex bg-green-800 gap-8' key={item.currentSlug}>
                    <div className='w-1/2'>
                        <Image src={item.image} alt={item.title} width={500} height={500} />
                    </div>
                    <div className='w-1/2'>
                        <div className='flex-col'>
                            <h1>{item.title}</h1>
                            <PortableText value={item.excerpt} />
                            <Button>Ler mais</Button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}
