import React from 'react';
import HomeSection from './_components/h1-home';
import ProjectSection from './_components/h2-projects';
import AboutSection from './_components/h3-about';
import ContactSection from './_components/h4-contact';

const HomePage: React.FC = () => {
  return (
    // Dark mode with bg-surface-gradient
    <main className="bg-surface w-full h-screen flex flex-col overflow-y-scroll scroll-pt-[2rem] snap-y snap-mandatory">
      <HomeSection extra_styles="w-full min-h-screen h-max snap-start" />
      <ProjectSection extra_styles="w-full min-h-screen h-max snap-start sm:pt-[7rem] pt-[3rem] px-[calc(4vw+1rem)]" />
      <AboutSection extra_styles="w-full min-h-screen h-max snap-start sm:pt-[7rem] pt-[3rem] px-[calc(4vw+1rem)]" />
      <ContactSection extra_styles="w-full min-h-screen h-max snap-start sm:pt-[7rem] pt-[3rem] px-[calc(4vw+1rem)]" />
    </main>
  )
}

export default HomePage;