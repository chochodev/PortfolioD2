import React from 'react';
import Image from 'next/image';

interface SectionType {
  extra_styles: string
}

const AboutSection: React.FC<SectionType> = ({extra_styles}) => {
  return (
    <section className={`flex flex-col gap-y-[2.5rem] ${extra_styles}`}>
      <div className="w-full h-max flex flex-row-reverse justify-evenly items-center text-center flex-wrap gap-x-[.5rem] gap-y-[2.5rem]">
        <Image 
          src="/images/profile02.jpg"
          width={1500}
          height={1500}
          alt="PROFILE IMAGE"
          className="w-[80%] max-w-[20rem] h-auto border-[.25rem] border-darkSurface/50 shadow-md shadow-darkSuface/50 object-cover rounded-[50%]"
        />
        <div className="w-[80%] md:w-[50%] h-max flex justify-center text-start flex-col gap-y-[.5rem] rounded-md border-2 border-primary leading-[1.5rem]">
          <p className="w-full h-max text-textLight spacing-x-[.15rem]">
            Hi there! I’m Emmanuel Michael, a versatile full-stack web developer with expertise in enhancing and optimizing websites, I specialize in creating modern, user-friendly, and responsive web designs. I possess strong skills in developing web applications from the ground up.
          </p>
          <p className="w-full h-max text-textLight spacing-x-[.15rem]">
            I am highly proficient in constructing scalable server systems to empower your websites. Whether it involves refactoring outdated backend code or starting from scratch, I am adept at ensuring robust functionality.
          </p>
          <p className="w-full h-max text-textLight spacing-x-[.15rem]">
            I am highly skilled in building scalable client-side applications that enhance the functionality of your websites. Whether it&apos;s revamping outdated frontend code or starting from scratch, I ensure robust and seamless user experiences.
          </p>
          <p className="w-full h-max text-textLight spacing-x-[.15rem]">
            Being well-versed in both frontend and backend development, I am equipped to provide valuable assistance for your existing or future web application projects. Count on me to be a valuable asset in bringing your vision to life.
          </p>
        </div>
      </div>

      <div className="w-[80%] md:max-w-[55rem] max-h-[20rem] flex text-center justify-center flex-col p-[2vw+1rem] mx-auto rounded-md border-2 border-primary">
      </div>
    </section>
  )
}

export default AboutSection