import React from 'react'
import { Button } from './ui/button'
import Image from 'next/image'
import { getCategories } from '@/sanity/lib/querys'

import instagram from '../public/instagram.svg'
import twitter from '../public/twitter.svg'
import linkedin from '../public/linkedin.svg'
import github from '../public/github.svg'
import teste from '../public/teste.png'

import { Category } from '@/types/Category';


export default async function SideMenu() {
  const categories = await getCategories();

  return (
    <div>
      <div className='flex flex-col gap-2'>
        
          <Image src={teste} alt="profile" width={300} height={600} className='rounded-xl w-full'/>
          <Button size={"sm"} className="shadow-lg w-full">Clique e saiba mais</Button>
      </div>

    </div>
  
  )
}
