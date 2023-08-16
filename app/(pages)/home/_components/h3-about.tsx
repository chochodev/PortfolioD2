import React from 'react';
import Image from 'next/image';

interface SectionType {
  extra_styles: string
}

const AboutSection: React.FC<SectionType> = ({extra_styles}) => {
  return (
    <section className={`bg-darkSurface flex md:flex-row flex-col justify-evenly items-center flex-wrap gap-x-[.5rem] gap-y-[2.5rem] ${extra_styles}`}>
      <div className="w-[80%] md:w-[30%] h-max flex justify-center text-start flex-col gap-y-[.875rem] leading-[1.5rem]">
        <p className="w-full h-max text-[1.07rem] text-white spacing-x-[.05rem]">
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
        src="/images/profile02.jpg"
        width={1500}
        height={1500}
        alt="PROFILE IMAGE"
        className="w-[80%] max-w-[20rem] h-auto border-[.25rem] border-darkSurface/50 shadow-md shadow-darkSuface/50 object-cover rounded-[50%]"
      />
    </section>
  )
}

export default AboutSection