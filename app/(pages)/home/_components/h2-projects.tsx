'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { RiGithubFill, RiArrowRightLine } from 'react-icons/ri';
import { RxDotsHorizontal } from 'react-icons/rx';
import Link from 'next/link';

const ProjectSection: React.FC = () => {
  const projects = [
    {
      name: 'AnimeMe',
      url: '#',
      image: 'project01.png',
      desc: 'This is a project for anime lovers. It is for reviewing, discussing and exploring animes.',
    },
    {
      name: 'AnimeMe',
      url: '#',
      image: 'project01.png',
      desc: 'This is a project for anime lovers. It is for reviewing, discussing and exploring animes.',
    },
    {
      name: 'AnimeMe',
      url: '#',
      image: 'project01.png',
      desc: 'This is a project for anime lovers. It is for reviewing, discussing and exploring animes.',
    },
  ]

  const [viewportWidth, setViewportWidth] = useState(0);
  const [viewportHeight, setViewportHeight] = useState(0);

  useEffect(() => {
    setViewportWidth(window.innerWidth);
    setViewportHeight(window.innerHeight);

    const handleViewport = () => {
      setViewportWidth(window.innerWidth);
      setViewportHeight(window.innerHeight);
    }

    handleViewport();

    window.addEventListener('resize', handleViewport);
    return () => {
      window.removeEventListener('resize', handleViewport);
    }
  }, []);

  return (
    <section className="flex flex-col gap-y-[2.5rem]">
      <h2 className="w-max mx-auto text-[2rem] text-headerText font-bold tracking-tight ">Past Projects</h2>
      <ul className="w-full min-h-[100vh] flex flex-wrap justify-evenly gap-[calc(3vw+.5rem)]">
          {/* PROJECTS */}
          {projects.map((project, index) => {
            return (
            <li key={index} className="group w-[80%] md:w-[calc(15rem+5vw)] h-[15rem] md:h-max rounded-t-md shadow-sm hover:shadow-md hover:shadow-secondary/20 transition-all duration-200 ease-in-out">
              <Link href={project.url} className="flex md:flex-col w-full h-full">
                <Image 
                  src={`/images/${project.image}`} 
                  alt="PROJECT IMAGE" 
                  width={700} 
                  height={700} 
                  style={{
                    objectFit: "cover",
                  }} 
                  className={`h-full md:h-[calc(5vw+10rem)] w-[12rem] md:w-full rounded-${viewportWidth < 680? 'l' : 't'}-md`} />
                <div 
                  className={`bg-white/90 flex flex-col gap-y-[.75rem] py-[1rem] px-[.75rem] rounded-${viewportWidth < 680? 'r' : 'b'}-md md:rounded-b-md shadow-sm shadow-surface/50 group-hover:bg-surface transition-all ease-in-out duration-200`}
                >
                  <h3 className="text-[1.6rem] md:text-[2rem] text-headerText tracking-[.2rem] font-bold">{project.name}</h3>
                  <p className="w-full text-headerTextLight text-sm">{project.desc}</p>
                  <div className="flex justify-between">
                    <RiGithubFill size="35" color="#001C30" />
                    <div className="flex h-max items-center justify-center">
                      <RxDotsHorizontal size="30" color="#001C30" />
                      <RiArrowRightLine size="30" color="#001C30" />
                    </div>
                  </div>
                </div>
              </Link>
            </li>
            );
          })}
      </ul>
    </section>
  )
}

export default ProjectSection;