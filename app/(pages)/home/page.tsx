import React from 'react';
import HomeSection from './_components/h1-home';
import ProjectSection from './_components/h2-projects';
import AboutSection from './_components/h3-about';
import ContactSection from './_components/h4-contact';

const HomePage: React.FC = () => {
  return (
    // Dark mode with bg-surface-gradient
    <main className="bg-surface w-full min-h-screen flex flex-col px-[calc(4vw+1rem)]">
      <HomeSection />
      <ProjectSection />
      <AboutSection />
      <ContactSection />
    </main>
  )
}

export default HomePage;