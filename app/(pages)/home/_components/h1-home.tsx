import Image from 'next/image';
import React from 'react';
import { RiAddCircleFill, RiLineFill } from 'react-icons/ri';

interface SectionType {
  extra_styles: string
}

const HomeSection: React.FC<SectionType> = ({extra_styles}) => {
  return (
    // Add those subtle shapes and all to the background
    <section id="home" className={`flex justify-between items-start mi_md:flex-row flex-col gap-y-[1rem] ${extra_styles}`}>
      <div className="relative max-w-[40rem] h-full flex flex-col gap-y-[1.5rem] justify-center px-[calc(4vw+1rem)]">
        <h2 className="max-w-[30rem] text-textDark text-[2.5rem] md:text-[3rem] text-bold lg:text-[3.5rem] font-bold">
          I Build, Develop & Design Web Apps.
        </h2>
        <div className="flex flex-col">
          <span className="text-[.875rem] font-[300]">Hi, I&apos;m</span>
          <p className="text-[1rem] text-textDark font-[600]">EMMANUEL MICHAEL.</p>
        </div>
        <div className="flex flex-col gap-y-2">
            <p className="text-[.875rem]">
              I excel in upgrading and optimizing websites, creating modern and user-friendly designs.
            </p>
            <p className="text-[.875rem]">
              With expertise in frontend and backend development, I build scalable server systems and develop web applications from scratch. 
            </p>
            <p className="text-[.875rem]">
              Let me bring your vision to life!!
            </p>
        </div>
        <button
          className="bg-darkSurface w-max h-max flex gap-x-1 items-center justify-center px-[1rem] py-[.5rem] text-white rounded-[2rem] shadow-sm hover:shadow-darkSurface/50 hover:shadow-md focus:outline-1 focus:outline-darkSurface/50 transition-all duration-250 ease-in-out"
        >
          <RiAddCircleFill size="25" color="white" />
          <p className="h-max text-white text-[.875rem] tracking-[.15rem]">Hire me</p>
        </button>

        {/* BACKGROUND ADDED ICONS */}

      </div>
      <div 
        className="relative bg-darkSurface z-1 h-full mi_md:w-max w-full flex justify-center items-center py-[calc(3vw+3rem)] mi_md:px-[calc(3vw+2rem)] mi_id-lg:px-[calc(2vw+1.5rem)] border-l-2 border-primary"
      >
        <Image 
          src="/images/profile01.jpg" 
          alt="PROFILE IMAGE" 
          width={2500}
          height={3500}
          className="h-[28rem] w-[calc(15rem+5vw)] object-cover object-right outline outline-[2px] outline-primary outline-offset-[4px] rounded-[10rem]"
        />
        <div className="absolute bg-primary/20 z-10 top-[3rem] left-[0] w-[2rem] h-[2rem] rounded-[50%]"></div>
        <div className="absolute bg-primary/20 z-10 bottom-[5rem] right-[3rem] w-[1.2rem] h-[3.2rem] transform rotate-[55deg]"></div>
        <div className="absolute bg-primary/20 z-10 top-[1rem] right-[1rem] w-[2rem] h-[2rem] rounded-[50%]"></div>
        <div className="absolute bg-primary/20 z-10 top-[8rem] left-[5rem] w-[8rem] h-[.15rem] transform rotate-[135deg]"></div>
        <div className="absolute bg-primary/20 z-10 bottom-[1rem] left-[1rem] rounded-[50%]">
          <RiLineFill size="15" color="#64ccc5" />
        </div>
      </div>
    </section>
  )
}

export default HomeSection;