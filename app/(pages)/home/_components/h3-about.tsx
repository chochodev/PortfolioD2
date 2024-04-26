import React from 'react';
import Image from 'next/image';

interface SectionType {
  extra_styles: string
}

const AboutSection: React.FC<SectionType> = ({extra_styles}) => {
  return (
    <section id="about" className={`bg-teal-900 ${extra_styles}`}>
      <div className="w-full flex flex-col items-center text-center gap-[1rem] mx-auto mb-[3rem]">
        <h2 className="text-[1.875rem] text-white font-bold">ABOUT</h2>
        <p className="text-slate-200">A few words about me</p>
      </div>
      <div className="w-full flex mdx:flex-row flex-col justify-between flex-wrap gap-x-[.5rem] gap-y-[2.5rem]">
        <div className="w-full mdx:w-[40%] h-max flex justify-center text-start flex-col gap-y-[.875rem] leading-[1.5rem]">
          <p className="w-full h-max text-[1.25rem] text-white spacing-x-[.05rem]">
            Hi there! I’m Emmanuel Michael, a versatile full-stack web developer with expertise in enhancing and optimizing websites, I specialize in creating modern, user-friendly, and responsive web designs. I possess strong skills in developing web applications from the ground up.
          </p>
          <p className="w-full h-max text-[1.07rem] text-white spacing-x-[.05rem]">
            I am highly proficient in constructing scalable server systems to empower your websites. Whether it involves refactoring outdated backend code or starting from scratch, I am adept at ensuring robust functionality.
          </p>
          <p className="w-full h-max text-[1.07rem] text-white spacing-x-[.05rem]">
            I am highly skilled in building scalable client-side applications that enhance the functionality of your websites. Whether it&apos;s revamping outdated frontend code or starting from scratch, I ensure robust and seamless user experiences.
          </p>
          <p className="w-full h-max text-[1.07rem] text-white spacing-x-[.05rem]">
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
        <div>
          
        </div>
      </div>
    </section>
  )
}

export default AboutSection