import React from 'react';
import Image from 'next/image';

const AboutSection: React.FC = () => {
  return (
    <section className="w-full min-h-[100vh] h-max flex flex-col gap-y-[3rem]">
      <div className="w-full h-max flex justify-evenly items-center text-center flex-wrap gap-x-[.5rem] gap-y-[1.5rem] px-[1rem+5vw]">
        <Image 
          src="/images/profile02.jpg"
          width={1500}
          height={1500}
          alt="PROFILE IMAGE"
          style={{
            objectFit: "cover",
            borderRadius: "50%",
          }}
          className="w-[80%] max-w-[20rem] h-auto border-[.25rem] border-darkSurface/50 shadow-md shadow-darkSuface/50"
        />
        <div className="w-[40%] min-w-[35rem] h-[20rem] flex text-center justify-center flex-col p-[2vw+1rem] rounded-md border-2 border-primary">
          <p className="h-max text-[1.05rem] text-textDark spacing-x-[.15rem] leading-[2rem]">
            Hi there! I’m Emmanuel Michael, a versatile full-stack web developer with expertise in enhancing and optimizing websites, I specialize in creating modern, user-friendly, and responsive web designs. I possess strong skills in developing web applications from the ground up.
          </p>
        </div>
      </div>

      {/* AS A DEVELOPER */}
      <div className="w-full flex justify-evenly gap-x-[5vw]">
        <div className="bg-textDark min-w-[20rem] flex flex-col items-center text-center gap-y-[1rem] px-[2vw+1rem] rounded-lg">
          <h2 className="text-white text-[1.5rem] font-bold">As a Backend Developer</h2>
          <p className="max-w-[25rem] text-[#cccccc] spacing-x-[.25rem] leading-[1.5rem]">
            I am highly proficient in constructing scalable server systems to empower your websites. Whether it involves refactoring outdated backend code or starting from scratch, I am adept at ensuring robust functionality.
          </p>
        </div>
        <div className="bg-textDark min-w-[20rem] flex flex-col items-center text-center gap-y-[1rem] px-[2vw+1rem] rounded-lg">
          <h2 className="text-white text-[1.5rem] font-bold">As a Frontend Developer</h2>
          <p className="max-w-[25rem] text-[#cccccc] spacing-x-[.25rem] leading-[1.5rem]">
            I am highly skilled in building scalable client-side applications that enhance the functionality of your websites. Whether it&apos;s revamping outdated frontend code or starting from scratch, I ensure robust and seamless user experiences.
          </p>
        </div>
      </div>
    </section>
  )
}

export default AboutSection