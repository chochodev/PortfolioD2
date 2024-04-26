import React from 'react';
import Image from 'next/image';

interface SectionType {
  extra_styles: string
}

const AboutSection: React.FC<SectionType> = ({extra_styles}) => {
  return (
    <section id="about" className={`relative bg-teal-900 ${extra_styles}`}>
      <div className="w-full flex flex-col items-center text-center gap-[1rem] mx-auto mb-[3rem]">
        <h2 className="text-[1.875rem] text-white font-bold">ABOUT</h2>
        <p className="text-slate-200">A few words about me</p>
      </div>
      <div className="w-full flex mdx:flex-row flex-col justify-between flex-wrap gap-x-[.5rem] gap-y-[2.5rem]">
        <div className="w-full mdx:w-[40%] h-max flex justify-center text-start flex-col gap-y-[1.5rem] leading-[1.5rem]">
          <p className="w-full h-max text-[1.05rem] md:text-[1.25rem] text-teal-100 leading-[1.5rem] spacing-x-[.05rem]">
            Hi there! I’m Emmanuel Michael, a versatile full-stack web developer with expertise in enhancing and optimizing websites, I specialize in creating modern, user-friendly, and responsive web designs. I possess strong skills in developing web applications from the ground up.
          </p>
          <p className="w-full h-max text-[1.05rem] md:text-[1.25rem] text-teal-100 leading-[1.5rem] spacing-x-[.05rem]">
            I am highly proficient in constructing scalable server systems to empower your websites. Whether it involves refactoring outdated backend code or starting from scratch, I am adept at ensuring robust functionality.
          </p>
          <p className="w-full h-max text-[1.05rem] md:text-[1.25rem] text-teal-100 leading-[1.5rem] spacing-x-[.05rem]">
            I am highly skilled in building scalable client-side applications that enhance the functionality of your websites. Whether it&apos;s revamping outdated frontend code or starting from scratch, I ensure robust and seamless user experiences.
          </p>
          <p className="w-full h-max text-[1.05rem] md:text-[1.25rem] text-teal-100 leading-[1.5rem] spacing-x-[.05rem]">
            Being well-versed in both frontend and backend development, I am equipped to provide valuable assistance for your existing or future web application projects. Count on me to be a valuable asset in bringing your vision to life.
          </p>
        </div>
        <Image 
          src="/images/img01.jpeg"
          width={1500}
          height={1500}
          alt="PROFILE IMAGE"
          className="w-full max-w-[25rem] mx-auto h-auto border-[.25rem] border-white/50 shadow-md shadow-white/5 object-cover rounded-[4rem]"
        />

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

export default AboutSection