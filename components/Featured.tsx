import React from 'react'
import { Button } from './ui/button'

const Featured = () => {
  return (
    <div>
      <h1 className='text-8xl'>
        <b>Vinicius Sodré</b> 
      </h1>
      <div className='flex align-middle'>
        <div className='bg-red-500  '>
          <h2>imagem</h2>
        </div>
        <div className='flex flex-col'>
          <h2 className=' text-4xl'>Lorem ipsum dolor sit amet alim consectetur adipisicing elit.</h2>
          <p className='text-xl'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Cupiditate, quam nisi magni ea laborum inventore voluptatum
            laudantium repellat ducimus unde aspernatur fuga. Quo, accusantium
            quisquam! Harum unde sit culpa debitis.
          </p>
          <Button size={'sm'}
                  className=' w-fit'
                  >Saiba mais</Button>
        </div>
      </div>
    </div>
  )
}

export default Featured