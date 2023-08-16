import Image from 'next/image';
import React from 'react';
import { RiAddCircleFill } from 'react-icons/ri';

interface SectionType {
  extra_styles: string
}

const HomeSection: React.FC<SectionType> = ({extra_styles}) => {
  return (
    // Add those subtle shapes and all to the background
    <section className={`flex justify-between items-center mi_md:flex-row flex-col git${extra_styles}`}>
      <div className="max-w-[40rem] flex flex-col gap-y-[1.5rem] p-[calc(4vw+1rem)] sm:pt-[7rem] pt-[3rem]">
        <h2 className="text-textDark text-[2.5rem] text-bold mi_md:text-[3.5rem] font-bold ">
          I Build, Develop &<br/>Design Web Apps.
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
      </div>
      <div className="relative z-1 min-h-[40rem] h-full mi_md:w-max w-full bg-darkSurface flex justify-center items-center align-center mi_md:justify-end mi_md:px-[calc(3vw+2rem)] mi_md:pt-[7rem] border-l-2 border-primary">
        <Image 
          src="/images/profile01.jpg" 
          alt="PROFILE IMAGE" 
          width={2500}
          height={3500}
          className="h-[28rem] w-[calc(15rem+5vw)] object-cover object-right outline outline-[2px] outline-primary outline-offset-[4px] rounded-[10rem]"
        />
        <div className="absolute z-5 top-[2vw] left-[2vw] bg-onSurface w-[2rem+1vw] h-[2rem+1vw] rounded-[50%]"></div>
      </div>
    </section>
  )
}

export default HomeSection;