import React from 'react';
import HomeSection from './_components/h1-home';
import WorkSection from './_components/h2-works';
import AboutSection from './_components/h3-about';
import ContactSection from './_components/h4-contact';

const HomePage: React.FC = () => {
  return (
    // Dark mode with bg-surface-gradient
    <>
      <HomeSection extra_styles="w-full h-max snap-start scroll-snap-align-start" />
      <WorkSection extra_styles="w-full min-h-screen h-max bg-white snap-start scroll-snap-align-start sm:pt-[7rem] pt-[3rem] pb-[3rem] px-[calc(4vw+1rem)]" />
      <AboutSection extra_styles="w-full min-h-screen h-max snap-start scroll-snap-align-start sm:pt-[7rem] pt-[3rem] pb-[3rem] px-[calc(4vw+1rem)]" />
      <ContactSection extra_styles="w-full min-h-screen h-max snap-start scroll-snap-align-start sm:pt-[7rem] pt-[3rem] pb-[3rem] px-[calc(4vw+1rem)]" />
    </>
  );
}

export default HomePage;