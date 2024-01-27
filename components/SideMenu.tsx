import React from 'react'
import { Button } from './ui/button'
import Image from 'next/image'
import { getCategories } from '@/sanity/lib/querys'

import instagram from '../public/instagram.svg'
import twitter from '../public/twitter.svg'
import linkedin from '../public/linkedin.svg'
import github from '../public/github.svg'
import teste from '../public/teste.png'

export default async function SideMenu() {
  const categories = await getCategories();

  return (
    <>
    <div className='bg-white text-black p-4 mb-4 rounded-xl rounded'>
      <h3 className='text-xl font-bold mb-8'>Contato</h3>
      <div className='flex flex-wrap gap-2'>
      <Image src={instagram} alt="profile" width={50} height={50} className=''/>
      <Image src={twitter} alt="profile" width={50} height={50} className=''/>
      <Image src={linkedin} alt="profile" width={50} height={50} className=''/>
      <Image src={github} alt="profile" width={50} height={50} className=''/>
      </div>

    </div>

    <div className='bg-white text-black p-4 mb-4 rounded-xl rounded'>
      <h3 className='text-xl font-bold mb-8'>Alguns destaques</h3>
      <div className='flex flex-wrap gap-2'>

        {categories.map((item) => (
          <Button key={item._id} size={"sm"} className="shadow-lg">{item.title}</Button>
        ))}
      </div>

    </div>

    <div className='bg-white text-black p-4 rounded-xl rounded'>
      <div className='flex flex-wrap gap-2'>
        
          <Image src={teste} alt="profile" width={300} height={600} className='rounded-xl shadow-lg'/>
          <Button size={"sm"} className="w-full shadow-lg">Clique e saiba mais</Button>
      </div>

    </div>
    </>
  )
}
