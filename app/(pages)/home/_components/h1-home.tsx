'use client';

import Image from 'next/image';
import React from 'react';
import { RiAddCircleFill, RiHtml5Fill, RiJavascriptFill } from 'react-icons/ri';
import { SiCss3, SiTailwindcss, SiSass, SiChakraui, SiReact, SiNextdotjs, SiSvelte } from "react-icons/si";
import Buttons from '@/components/buttons';

interface SectionType {
  extra_styles: string
}

const HomeSection: React.FC<SectionType> = ({extra_styles}) => {
  return (
    // Add those subtle shapes and all to the background
    <section id="home" className={`flex justify-between items-start xl:flex-row flex-col gap-y-[1rem] h-max bg-white ${extra_styles}`}>
      
      {/* :::::::::::::::::::::::::::::::::::: TEXT CONTENT */}
      <div className="relative max-w-[35rem] lg:max-w-[40rem] xl:max-w-[45rem] h-max flex flex-col gap-y-[2rem] justify-center py-[8rem] lgx:py-[3rem] px-[calc(4vw+1rem)]">
        <h2 className="text-teal-900 text-[2.875rem] md:text-[3.5rem] text-bold lg:text-[4rem] font-bold">
          I Build, Develop & Design Web Apps.
        </h2>
        <div className="flex flex-col">
          <span className="text-[1.25rem] text-slate-500 font-[300]">Hi, I&apos;m</span>
          <p className="text-[1.875rem] text-slate-700 font-[600]">EMMANUEL MICHAEL.</p>
        </div>
        <div className="flex flex-col gap-y-2 text-slate-500 ">
            <p className="text-[1rem] font-thin">
              I excel in upgrading and optimizing websites, creating modern and user-friendly designs.
            </p>
            <p className="text-[1rem] font-thin">
              With expertise in frontend and backend development, I build scalable server systems and develop web applications from scratch. 
            </p>
            <p className="text-[1rem] font-thin">
              Let me bring your vision to life!!
            </p>
        </div>

        {/* :::::::::::::::::::::::::::::::::::: HIRE MR BUTTON */}
        <Buttons.RoundButton
          text='Hire me'
          icon={RiAddCircleFill}
        />

        {/* BACKGROUND ADDED ICONS */}
      </div>

      {/* ::::::::::::::::::::::::::::::::::::::: PROFILE IMAGE */}
      <div 
        className="relative bg-teal-800 z-1 h-[45rem] w-full xl:w-[40%] flex justify-center items-center border-l-[2px] border-primary"
      >
        <Image 
          src="/images/img01.jpeg" 
          alt="PROFILE IMAGE" 
          width={2500}
          height={4000}
          className="absolure top-[-100%] mdx:relative max-[720px]:mt-[-100%] xl:ml-[-100%] z-[10] max-w-[90%] w-[22rem] h-[22rem] lg:h-[22rem] min-w-[22rem] xl:h-[30rem] xl:w-[30rem] xl:min-w-[30rem] object-cover object-right outline outline-[3px] outline-primary outline-offset-[4px] rounded-[4rem] xl:rounded-[6rem] ease-250"
        />
        <div 
          className="xl:absolute top-0 right-[2rem] z-[6] flex flex-col h-full justify-center mdx:items-end gap-[2rem] pr-[2rem] "
        >
          <span className='text-teal-400 text-[1.5rem] xl:text-[2rem] font-[600] '>{'<ChochoDev/>'}</span>
          <div className='flex flex-col justify-between items-end'>
            {[
              {text: 'HTML5', icon:RiHtml5Fill},
              {text: 'CSS3', icon:SiCss3},
              {text: 'JavaScript', icon:RiJavascriptFill},
              {text: 'SASS', icon:SiSass},
              {text: 'ChakraUI', icon:SiChakraui},
              {text: 'TailwindCSS', icon:SiTailwindcss},
              {text: 'React JS', icon:SiReact},
              {text: 'Next JS', icon:SiNextdotjs},
              {text: 'SvelteKit', icon:SiSvelte}
            ].map(({icon, text}, index) => (
              <div key={index} className='group cursor-pointer flex gap-[0.5rem] items-center h-[2.875rem] transform translate-x-0 hover:translate-x-[1rem] ease-250 '>
                <p className='text-primary text-[0.875rem] xl:text-[1.15rem] group-hover:text-teal-300 ease-250 '>
                  {text}
                </p>
                {React.createElement(icon, {className: "text-[1.375rem] text-teal-400 "})}
              </div>
            ))}
          </div>
        </div>

        {/* :::::::::::::::::::::::::::::::::::::::: ICONS */}
        <div className="absolute bg-primary/20 z-5 top-[3rem] left-0 w-[4rem] h-[4rem] rounded-[50%]"></div>
        <div className="absolute bg-primary/20 z-5 bottom-[5rem] right-[3rem] w-[1.2rem] h-[3.2rem] transform rotate-[55deg]"></div>
        <div className="absolute bg-primary/20 z-5 top-[1rem] right-[1rem] w-[2rem] h-[2rem] rounded-[50%]"></div>
        <div className="absolute bg-primary/20 z-5 top-[1rem] left-[5rem] w-[4rem] h-[.15rem] transform rotate-[135deg]"></div>
        <div className="absolute z-5 bottom-[1rem] left-[1rem] w-0 h-0 border-r-[1rem] border-l-[1rem] border-x-transparent border-b-[2rem] border-b-primary/20 animate-spin "></div>
      </div>
    </section>
  )
}

export default HomeSection;