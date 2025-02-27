"use client"
import { useEffect, useState } from 'react';
import { Button } from './ui/MovingBorders';
import { workExperience } from '@/data';
import Image from "next/image"

const Experience = () => {
  const [durations, setDurations] = useState<number[]>([]);

  useEffect(() => {
    // Generate random durations on the client side
    setDurations(workExperience.map(() => Math.floor(Math.random() * 10000) + 1000));
  }, []);

  <time dateTime="2025-02-19" suppressHydrationWarning />

  return (
    <div className="py-20" id="testimonials">
      <h1 className="heading">
        My <span className="text-purple">Work Experience</span>
      </h1>

      <div className="w-full mt-12 grid lg:grid-cols-4 grid-cols-1 gap-10">
        {workExperience.map((card, index) => (
          <Button
            key={card.id}
            duration={durations[index] || 1000} // Fallback to 1000 if durations not yet set
            borderRadius="1.75rem"
            className="flex-1 text-white border-neutral-200 dark:border-slate-800"
          >
            <div className="flex lg:flex-row flex-col lg:items-center p-3 py-6 md:p-5 lg:p-10 gap-2">
              <img
              src={card.thumbnail}
              alt={card.thumbnail}
              className="lg:w-32 md:w-20 w-16"
              />
              
              <div className="lg:ms-5">
                <h1 className="text-start text-xl md:text-2xl font-bold">
                  {card.title}
                </h1>
                <p className="text-start text-white-100 mt-3 font-semibold">
                  {card.desc}
                </p>
              </div>
            </div>
          </Button>
        ))}
      </div>
    </div>
  );
};

export default Experience;