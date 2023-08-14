import Image from 'next/image';
import React from 'react';
import { RiAddCircleFill } from 'react-icons/ri';

interface SectionType {
  snap_position: string
}

const HomeSection: React.FC<SectionType> = ({snap_position}) => {
  return (
    <section className="flex min-h-[100vh] snap-${snap_position}">
        <div className="max-w-[35rem] flex flex-col gap-y-[1.5rem] ">
          <h2 className="text-textDark text-[2.75rem] text-bold md:text-[3.5rem] font-bold ">I Build, Develop &<br/>Design Web Apps.</h2>
          <div className="flex flex-col">
            <span className="text-[.875rem] font-[400]">Hi, I&apos;m</span>
            <p className="text-[1rem] font-[600]">EMMANUEL MICHAEL.</p>
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
            className="bg-onSurface w-max h-max flex gap-x-1 items-center justify-center px-[1rem] py-[.5rem] text-white rounded-md shadow-sm hover:shadow-onSurface hover:shadow-lg focus:outline-1 focus:outline-onSurface/50 transition-all duration-250 ease-in-out"
          >
            <RiAddCircleFill size="25" color="white" />
            <p className="h-max text-white text-[.875rem] tracking-[.25rem]">Hire me</p>
          </button>
        </div>
        <div className="w-[45vw]">
            showcase skills
        </div>
    </section>
  )
}

export default HomeSection;