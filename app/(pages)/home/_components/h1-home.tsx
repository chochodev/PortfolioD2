'use client';

import Image from 'next/image';
import React from 'react';
import { RiAddCircleFill, RiHtml5Fill, RiJavascriptFill } from 'react-icons/ri';
import { SiCss3, SiTailwindcss, SiSass, SiChakraui, SiReact, SiNextdotjs, SiSvelte } from "react-icons/si";

interface SectionType {
  extra_styles: string
}

const HomeSection: React.FC<SectionType> = ({extra_styles}) => {
  return (
    // Add those subtle shapes and all to the background
    <section id="home" className={`flex justify-between items-start mdx:flex-row flex-col gap-y-[1rem] h-max bg-white ${extra_styles}`}>
      
      {/* :::::::::::::::::::::::::::::::::::: TEXT CONTENT */}
      <div className="relative max-w-[35rem] md:max-w-[40rem] h-max flex flex-col gap-y-[2rem] justify-center py-[5rem] md:py-[3rem] px-[calc(4vw+1rem)]">
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
        <button
          className="bg-teal-800 w-max h-max flex gap-x-1 items-center justify-center px-[1.25rem] py-[.75rem] text-white rounded-[2rem] shadow-sm hover:shadow-teal-800/50 hover:shadow-md focus:outline-1 focus:outline-teal-800/50 transition-all duration-250 ease-in-out"
        >
          <RiAddCircleFill size="25" color="white" />
          <p className="h-max text-white text-[1.25rem] tracking-[.15rem]">Hire me</p>
        </button>

        {/* BACKGROUND ADDED ICONS */}

      </div>

      {/* ::::::::::::::::::::::::::::::::::::::: PROFILE IMAGE */}
      <div 
        className="relative bg-teal-800 z-1 h-[45rem] w-full mdx:w-[40%] flex lg:justify-end items-center py-[calc(3vw+3rem)] border-l-[2px] border-primary"
      >
        <Image 
          src="/images/img01.jpeg" 
          alt="PROFILE IMAGE" 
          width={2500}
          height={4000}
          className="absolute min-[680px]:mt-[10rem] top-[-25%] lg:left-[-30%] xl:left-[-40%] z-[60] max-w-[90%] w-[22rem] h-[18rem] lg:h-[22rem] min-w-[22rem] xl:h-[30rem] xl:w-[30rem] xl:min-w-[30rem] -[calc(15rem+5vw)] object-cover object-right outline outline-[3px] outline-primary outline-offset-[4px] rounded-[8rem] ease-250"
        />
        <div className="relative z-1 flex flex-col gap-[2rem] h-full px-[2rem] ">
          <span className='text-teal-400 text-[2rem] font-[600] '>{'<ChochoDev/>'}</span>
          <div className='flex flex-col gap-[2rem]'>
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
              <div key={index} className='group cursor-pointer flex gap-[0.5rem] items-center transform translate-x-0 hover:translate-x-[1rem] ease-250 '>
                {React.createElement(icon, {size: 22, color: "#64CCC5"})}
                <p className='text-primary text-[1.15rem] font-[600] group-hover:text-teal-300 ease-250 '>
                  {text}
                </p>
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