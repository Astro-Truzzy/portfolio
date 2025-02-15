import React from 'react'
import {projects} from '@/data'
import { PinContainer } from './3d-pin';


const Recentprojects = () => {
  return (
    <div className="py-20">
      <h1 className="text-center">
        A small selection of {' '}
        <span className='text-purple'>recent projects</span>
      </h1>
      <div className='flex flex-wrap items-center justify-center p-4 gap-16 mt-10'>
{projects.map(({id, title, description, img, iconLists, link
      }) => (
<div key={id} className='lg:min-h-[32.5rem] h-[25rem] flex items-center
justify-center'>
   <PinContainer 
   title={title}
   href={link}>
  <div className=' relative flex items-center justify-center
  sm:w-96 w-[80vw] overflow-hidden h-[20vh] lg:h-[30vh] mb-10'>
    <div className=' relative w-full h-full overflow-hidden lg:rounded-3xl bg-[#13162d]'>
      <img src="/bg.png" alt="bg-img" />
    </div>
    <img 
    src={img} 
    alt={title} 
    className='z-10 absolute bottom-0'
    />
  </div>
  <h1 className='font-bold lg:text-2xl md:text-xl text-base line-clamp-1'>
    {title}
  </h1>

  <p className='lg:font-normal font-light text-sm line-clamp-2'>
  </p>
   </PinContainer>
      </div>
))}
      </div>
    </div>
  )
}

export default Recentprojects;
