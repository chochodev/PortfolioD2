'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { RiGithubFill, RiArrowRightLine } from 'react-icons/ri';
import { RxDotsHorizontal } from 'react-icons/rx';
import Link from 'next/link';

interface SectionType {
  extra_styles: string;
}

const WorkSection: React.FC<SectionType> = ({extra_styles}) => {
  const projects = [
    {
      name: 'ErenFresh',
      url: 'https://erenfresh-deploy-002.onrender.com/',
      image: 'eren-fresh.png',
      desc: 'This is a grocery e-commerce app project of a local stall with all the basic fuctionalities.',
    },
    {
      name: 'AnimeMe',
      url: 'https://github.com/chochoprogrammer/AnimeMe',
      image: 'project01.png',
      desc: 'This is a project for anime lovers. It is for reviewing, discussing and exploring animes.',
    },
    {
      name: 'MallGo',
      url: 'https://github.com/chochoprogrammer/Ecommerce-01-Frontend',
      image: 'mallgo.png',
      desc: 'An E-commerce website with common and special function that make this unique user friendly.',
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
    <section id="works" className={`flex flex-col gap-y-[2.5rem] ${extra_styles}`}>
      <div className="flex flex-col gap-y-[1rem]">
        <h2 className="w-max mx-auto text-[1.875rem] text-textDark font-bold tracking-tight ">WORKS</h2>
        <p className="w-max mx-auto text-textLight ">Some of my past works</p>
      </div>
      <ul className="w-full min-h-[80vh] flex flex-wrap justify-evenly gap-y-[6rem] gap-x-[calc(3vw+.5rem)] py-[4rem] ">
        {/* PROJECTS */}
        {projects.map((project, index) => {
          return (
          <li 
            key={index} 
            className="group w-full md:w-[calc(15rem+5vw)] h-[30rem] bg-none rounded-t-[16px] shadow-[0_0_25px_4px_rgba(0,0,0,0.25)] hover:shadow-[0_0_5px_5px_rgba(0,0,0,0.25)]  hover:translate-y-[-.5rem] transition-translate duration-500 ease-in-out"
          >
            <Link href={project.url} target="_blank" className="w-full h-full flex flex-col rounded-[16px] overflow-hidden ">
              <Image 
                src={`/images/${project.image}`} 
                alt="PROJECT IMAGE" 
                width={700} 
                height={700}
                className={`w-full h-[calc(60%)] object-cover`} 
              />
              <div 
                className={`bg-white flex-1 flex flex-col gap-y-[1.5rem] py-[1.5rem] px-[.75rem] rounded-b-[16px] overflow-hidden shadow-sm shadow-surface/50 ease-250`}
              >
                <h3 className="text-[2rem] text-teal-900 font-bold">
                  {project.name}
                </h3>
                <p className="w-full text-slate-400 text-sm line-clamp-2">
                  {project.desc}
                </p>
                <div className="h-max rounded-b-[16px] flex justify-between items-end">
                  <RiGithubFill className='text-[2.1875rem] text-teal-900' />
                  <div className="flex h-max items-center justify-center">
                    <RxDotsHorizontal className='text-[1.875rem] text-teal-900' />
                    <RiArrowRightLine className='text-[1.875rem] text-teal-900' />
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

export default WorkSection;