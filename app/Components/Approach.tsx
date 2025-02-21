import React from 'react'
import { LampDemo } from './ui/Lamp'
import { LampDemo2 } from './ui/Lamp2'
import { LampDemo3 } from './ui/Lamp3'



const phases = [
  {title1: "Phase 1", heading1: "Planning and Strategy", description1: "We begin by understanding your goals, audience, and vision. Through careful planning and a clear strategy, we map out a tailored roadmap to ensure every design and feature aligns with your business objectives."},
  {title2: "Phase 2", heading2: "Development and Progress Update", description2:"I consistently refine the user interface, optimizing animations, and ensuring responsiveness across devices, delivering a seamless and engaging user experience while maintaining clean, scalable code. Progress is steady."},
  {title3: "Phase 3", heading3: "Development and Launch", description3: "Crafting clean, efficient, and scalable code with a focus on performance, usability, and seamless user experience. Deploying polished, high-performing products, ensuring smooth functionality, reliability, and a flawless user experience."}
]


const Approach = () => {
  return (
    <div>
      <div className=' py-20 mt-3 relative ' id=''>
      <h1 className='heading'>
      My{" "} <br />
      <span className='text-purple'> Approach </span>
    </h1>
    <div className="flex flex-col md:flex-row gap-4 mt-5">
  <LampDemo phases={phases} />
  <LampDemo2 phases={phases} />
</div>
<div className="w-full max-w-screen-lg mx-auto p-4 relative ">
 <LampDemo3 phases={phases} />
</div>
      </div>
    </div>
  )
}

export default Approach
