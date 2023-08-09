'use client';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { Transition } from '@headlessui/react';
import { RiFacebookFill, RiWhatsappFill, RiGithubFill, RiLinkedinFill, RiCodeSSlashFill } from 'react-icons/ri';
import { CgMenuGridO, CgMenuGridR } from 'react-icons/cg';
import { SiCoderwall, SiPluscodes } from 'react-icons/si';


const Navbar: React.FC = () => {
  // Nav links Array
  const navLinks = [
    {
      name: 'HOME',
      url: '#',
      current: false
    },
    {
      name: 'WORKS',
      url: '#',
      current: false
    },
    {
      name: 'ABOUT',
      url: '#',
      current: false
    },
    {
      name: 'BLOG',
      url: '#',
      current: false
    }
  ]

  const socialLinks = [
    {
      name: 'Facebook',
      icon: RiFacebookFill,
    },
    {
      name: 'WhatsApp',
      icon: RiWhatsappFill,
    },
    {
      name: 'LinkdedIn',
      icon: RiLinkedinFill,
    }
  ]

  // To hide and reveal navbar on scroll down
  const [scrollDown, setScrollDown] = useState(true);

  useEffect(() => {
    let initialPosition = window.scrollY;
    
    const handleScrollDown = () => {
      const currentPosition = window.scrollY;
      const scrollingDown = currentPosition > initialPosition;
      setScrollDown(!scrollingDown);
      initialPosition = currentPosition;
    };

    window.addEventListener('scroll', handleScrollDown);
    return () => {
      window.removeEventListener('scroll', handleScrollDown);
    };
  },[]);

  // To hide and reveal navbar on menubar click
  const [openNav, setOpenNav] = useState(false);

  // To set the break points
  const [breakpoint, setBreakpoint] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setBreakpoint(window.innerWidth < 680);
    }
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    }
  }, [])

  // Interface
  return (
    <header className="bg-transparent fixed top-0 w-full h-[12rem] flex justify-between align-center gap-x-3 px-[5vw] md:px-[10vw]">
      {/* NAV LOGO */}
      <div className="flex align-center text-left h-full gap-x-[.5rem]">
        <Image src='svgs/logo-dark.svg' alt='LOGO' width='40' height='40' />
        <h2
          className="w-min h-max my-auto text-[.875rem] text-headerText font-lato font-[500] tracking-[.2rem]"
        >
          EMMANUEL MICHAEL
        </h2>
      </div>

      {/* NAVBAR FOR LARGE SCREENS */}
      {!breakpoint && <Transition
        as="nav"
        className="w-max h-full md:flex hidden flex-col flex-wrap justify-center gap-y-3"
        appear={true}
        show={scrollDown}
        enter="transform transition-all opacity ease-in-out delay-[50ms] duration-200"
        enterFrom="translate-x-3 opacity-0"
        enterTo="translate-x-0 opacity-1"
        leave="transform transition-all opacity ease-in-out duration-75"
        leaveFrom="translate-x-0 opacity-1"
        leaveTo="translate-x-3 opacity-0"
      >
        {/* NAV LINKS */}
        <ul  className="flex justify-between gap-x-4">
        {navLinks.map(({name, url, current}) => {
          return (
          <li key={name} className="w-max">
            <Link href={url} className="relative text-[.875rem] font-open font-[600] text-secondary hover:text-primary transition-all duration-200 ease-in-out ">{name}</Link>
          </li>
          )
        })}
        </ul>

        {/* SOCIALS */}
        <Transition.Child
          as="div"
          className="w-full flex gap-x-3 justify-end"
          enter="transform opacity delay-[200ms] duration-200"
          enterFrom="translate-x-2 opacity-0"
          enterTo="translate-x-0 opacity-1"
          leave="opacity duration-75"
          leaveFrom="opacity-1"
          leaveTo="opacity-0"
        >
          {socialLinks.map(({name, icon}) => {
            return (
              <Link key={name} href="#" aria-label={`socials:${name} link icon`} className="group relative flex justify-center align-center text-center">
                {React.createElement(icon, {size: 15})}
                <div className="hidden absolute h-3 w-3 bg-primary top-[calc(100%+.5rem)] rotate-45 group-hover:block z-10 transition-all duration-200 ease-in-out "></div>
                <span 
                  className="hidden absolute top-[calc(100%+.75rem)] text-[.6rem] text-white bg-primary px-3 py-1 rounded-md group-hover:block z-10 transition-all duration-200 ease-in-out "
                >
                  {name}
                </span>
            </Link>
            )
          })}
        </Transition.Child>
      </Transition>}

      {/* NAVBAR BUTTON */}
      <Transition
        as="button"
        onClick={()=>setScrollDown(true)}
        className="fixed top-[5rem] right-[5vw] md:right-[calc(10vw)] w-max flex flex-col flex-wrap justify-center gap-y-3"
        appear={true}
        show={!scrollDown}
        unmount={true}
        enter="transform transition-all opacity ease-in-out delay-[50ms] duration-200"
        enterFrom="translate-x-3 opacity-0"
        enterTo="translate-x-0 opacity-1"
        leave="transform transition-all opacity ease-in-out delay-[50ms] duration-75"
        leaveFrom="translate-x-0 opacity-1"
        leaveTo="translate-x-3 opacity-0"
      >
        <SiCoderwall size="30" color="#176B87" />
      </Transition>


      {/* NAVBAR FOR SMALL SCREENS */}
      {/* {breakpoint &&  */}
      <nav
        className="fixed top-0 right-0 bg-secondary w-[100%] h-[100vh] minH-max flex md:hidden flex-col gap-y-5 align-center text-right px-[calc(1rem+5vw)] pt-[2rem]"
      >
        {/* MENUBAR BUTTON */}
        <button 
          onClick={()=>setOpenNav(!openNav)}
          className="px-[.5rem] py-[.5rem] w-max hover:bg-[#ffffff10] rounded-md"
        >
          {/* {!openNav && <CgMenuGridO size="30" color="#64CCC5" />} */}
          <SiPluscodes size="30" color="#64CCC5" className="transform rotate-z-[90deg]" />
        </button>

        {/* NAVBAR LINKS */}
        <ul className="flex flex-col justify-right gap-y-2">
        {navLinks.map(({name, url}) => {
          return (
            <li key={name} className="w-full h-max">
              <Link 
                href={url}
                className="relative w-full py-[.875rem] px-[calc(1rem+2vw)] flex justify-end text-center align-center text-[1rem] font-open font-[600] text-white rounded-md hover:bg-[#FFFFFF10] hover:pr-[calc(2rem+2vw)] hover:text-primary transition-all duration-200 ease-in-out "
              >
                {name}
              </Link>
            </li>
          )
        })}
        </ul>

        {/* SOCIALS LINKS */}
        <div className="fixed bottom-[1rem] w-full flex justify-between px-[20vw]">
          {socialLinks.map(({name, icon}) => {
            return (
              <Link key={name} href='#' aria-label={`socials:${name} link icon`} className="group relative flex justify-center align-center text-center">
                {React.createElement(icon, {size: 25})}
                <div className="hidden absolute h-3 w-3 bg-primary top-[calc(100%+.5rem)] rotate-45 group-hover:block z-10 transition-all duration-200 ease-in-out "></div>
                <span 
                  className="hidden absolute top-[calc(100%+.75rem)] text-[.6rem] text-white bg-primary px-3 py-1 rounded-md group-hover:block z-10 transition-all duration-200 ease-in-out "
                >
                  {name}
                </span>
              </Link>
            )
          })}
        </div>
      </nav>
      {/* } */}
    </header>
  )
}

export default Navbar;