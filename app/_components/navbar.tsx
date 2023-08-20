'use client';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { Transition } from '@headlessui/react';
import { RiFacebookFill, RiWhatsappFill, RiLinkedinFill } from 'react-icons/ri';
import { SiCoderwall, SiPluscodes } from 'react-icons/si';


const Navbar: React.FC = () => {
  // Nav links Array
  const navLinks = [
    {
      name: 'HOME',
      url: '#home',
      current: false
    },
    {
      name: 'WORKS',
      url: '#works',
      current: false
    },
    {
      name: 'BLOG',
      url: '#about',
      current: false
    },
    {
      name: 'CONTACT',
      url: '#contact',
      current: false
    },
  ]

  const socialLinks = [
    {
      name: 'Facebook',
      icon: RiFacebookFill,
      url: 'https://web.facebook.com/profile.php?id=100082896713464',
    },
    {
      name: 'WhatsApp',
      icon: RiWhatsappFill,
      url: 'https://wa.me/23439108667',
    },
    {
      name: 'LinkdedIn',
      icon: RiLinkedinFill,
      url: 'https://www.linkedin.com/in/emmanuel-michael-728678217/',
    }
  ]

  // To hide and reveal navbar on scroll down
  const [scrollDown, setScrollDown] = useState(true);

  useEffect(() => {
    let initialPosition = window.scrollY;
    
    const handleScrollDown = () => {
      const currentPosition = window.scrollY;
      const scrollingDown = currentPosition > initialPosition;
      if (window.innerWidth > 680) {
        setScrollDown(!scrollingDown);
      } else {
        setScrollDown(false);
      }
      
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
  const [navPosition, setNavPosition] = useState(0);

  useEffect(() => {
    const handleNavPosition = () => {

    }
    const handleResize = () => {
      if (window.innerWidth < 680) {
        setScrollDown(false);
      } else {
        setBreakpoint(window.innerWidth < 680);
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Interface
  return (
    <header className="bg-surface/50 backdrop-blur-[10px] sticky z-20 top-0 left-0 w-full h-[6rem] flex justify-between align-center gap-x-[.5rem] px-[1rem] md:px-[3rem]">
      {/* NAV LOGO */}
      <div className="relative z-15 flex align-center text-left h-full gap-x-[.5rem]">
        <Image src='svgs/logo-dark.svg' alt='LOGO' width='45' height='45' />
        <h2
          className="w-min h-max my-auto text-[.875rem] text-textDark font-lato font-[500] tracking-[.2rem]"
        >
          EMMANUEL MICHAEL
        </h2>
      </div>

      {/* NAVBAR FOR LARGE SCREENS */}
      {!breakpoint && <Transition
        as="nav"
        className="w-max h-full md:flex hidden flex-col flex-wrap justify-center gap-y-3"
        // appear={true}
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
          {socialLinks.map(({name, icon, url}) => {
            return (
              <Link key={name} href={url} aria-label={`socials:${name} link icon`} className="group relative flex justify-center align-center text-center">
                {React.createElement(icon, {size: 18, color: "#94A3B8"})}
                <div className="hidden absolute h-3 w-3 bg-primary top-[calc(100%+.5rem)] rotate-45 group-hover:block z-10 transition-all duration-200 ease-in-out "></div>
                <span 
                  className="hidden absolute top-[calc(100%+.75rem)] text-[.6rem] text-white bg-[#64CCC5] px-3 py-1 rounded-md group-hover:block z-10 transition-all duration-200 ease-in-out "
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
        onClick={()=>{
          if (window.innerWidth > 680) {
            setScrollDown(true);
          }else {
            setOpenNav(true);
          }
        }}
        className="fixed top-[1.5rem] right-[1rem] md:right-[3rem] w-max flex flex-col flex-wrap justify-center gap-y-3 hover:bg-[#176B8710] rounded-md px-2 py-2"
        show={!scrollDown}
        enter="transform transition-all opacity ease-in-out delay-[200ms] duration-200"
        enterFrom="translate-x-3 opacity-0"
        enterTo="translate-x-0 opacity-1"
        leave="transform transition-all opacity ease-in-out delay-[50ms] duration-75"
        leaveFrom="translate-x-0 opacity-1"
        leaveTo="translate-x-3 opacity-0"
      >
        <SiCoderwall size="30" color="#176B87" className="hover:text-primary" />
      </Transition>


      {/* NAVBAR FOR SMALL SCREENS */}
      <Transition
        as="nav"
        show={openNav}
        className="fixed top-0 right-0 bg-[conic-gradient(at_bottom_left,_var(--tw-gradient-stops))] from-purple-600 via-pink-600 to-secondary w-[100%] h-[100vh] minH-max flex md:hidden flex-col gap-y-5 px-[calc(1rem+5vw)] pt-[2rem]"
        enter="width height transition-all opacity ease-in-out duration-400"
        enterFrom="w-0 h-0 opacity-0"
        enterTo="w-full height-full opacity-1"
        leave="width height transition-all opacity ease-in-out delay-[400ms] duration-400"
        leaveFrom="w-full height-full opacity-1"
        leaveTo="w-0 h-0 opacity-0"
      >
        <div className="w-full flex justify-between">
          {/* MENUBAR LOGO AND TITLE */}
          <Transition.Child 
            className="relative z-15 flex align-center text-left h-full gap-x-[.5rem]"
            enter="transform transition-all opacity ease-in-out delay-[200ms] duration-200"
            enterFrom="translate-y-2 opacity-0"
            enterTo="translate-y-0 opacity-1"
            leave="transform transition-all opacity ease-in-out delay-[300ms] duration-75"
            leaveFrom="translate-y-0 opacity-1"
            leaveTo="translate-y-2 opacity-0"
          >
            <Image src='svgs/logo-light.svg' alt='LOGO' width='45' height='45' />
            <h2
              className="w-min h-max my-auto text-[.875rem] text-surface font-lato font-[500] tracking-[.2rem]"
            >
              EMMANUEL MICHAEL
            </h2>
          </Transition.Child>

          {/* MENUBAR BUTTON */}
          <Transition.Child 
            as="button"
            onClick={()=>setOpenNav(false)}
            className="bg-slate-200 px-[.5rem] py-[.5rem] mr-[-1rem] w-max hover:bg-[#ffffff10] rounded-md"
            enter="transform transition-all opacity ease-in-out delay-[100ms] duration-200"
            enterFrom="rotate-0 translate-x-3 opacity-0"
            enterTo="rotate-45 translate-x-0 opacity-1"
            leave="transform transition-all opacity ease-in-out delay-[100ms] duration-200"
            leaveFrom="rotate-45 translate-x-0 opacity-1"
            leaveTo="rotate-0 translate-x-3 opacity-0"
          >
            <SiPluscodes size="30" color="#64CCC5" />
          </Transition.Child>
        </div>

        {/* NAVBAR LINKS */}
        <ul className="flex flex-col justify-right gap-y-2">
        {navLinks.map(({name, url}, index) => {
          const delayDuration = 50 + (index * 100);

          return (
            <Transition.Child 
              key={name} 
              as="li"
              className="w-full h-max"
              enter={`transform transition-all opacity ease-in-out delay-[${delayDuration}ms] duration-350`}
              enterFrom="translate-y-5 opacity-0"
              enterTo="translate-y-0 opacity-1"
              leave="transform transition-all opacity ease-in-out delay-[200ms] duration-150"
              leaveFrom="translate-y-0 opacity-1"
              leaveTo="translate-y-5 opacity-0"
            >
              <Link 
                href={url}
                onClick={()=>setOpenNav(!openNav)}
                className="relative w-full py-[.875rem] px-[calc(1rem+2vw)] flex justify-end text-center align-center text-[1rem] font-open font-[600] text-white rounded-md hover:bg-[#FFFFFF10] hover:pr-[calc(2rem+2vw)] hover:text-primary transition-all duration-200 ease-in-out "
              >
                {name}
              </Link>
            </Transition.Child>
          )
        })}
        </ul>

        {/* SOCIALS LINKS */}
        <Transition.Child 
          className="fixed left-0 bottom-[2rem] w-[100vw] flex justify-evenly"
          enter={`transform transition-all opacity ease-in-out delay-[250ms] duration-350`}
          enterFrom="translate-y-3 opacity-0"
          enterTo="translate-y-0 opacity-1"
          leave="transform transition-all opacity ease-in-out duration-150"
          leaveFrom="translate-y-0 opacity-1"
          leaveTo="translate-y-3 opacity-0"
        >
          {socialLinks.map(({name, icon, url}) => {
            return (
              <Link 
                key={name} 
                onClick={()=>setOpenNav(!openNav)}
                href={url}
                aria-label={`socials:${name} link icon`} 
                className="group relative flex justify-center align-center text-center"
              >
                {React.createElement(icon, {size: 25, color: '#94A3B8'})}
                <div className="hidden absolute h-3 w-3 bg-white bottom-[calc(100%+.5rem)] rotate-45 group-hover:block z-10 transition-all duration-200 ease-in-out "></div>
                <span 
                  className="hidden absolute bottom-[calc(100%+.75rem)] text-[.6rem] text-white bg-primary px-3 py-1 rounded-md group-hover:block z-10 transition-all duration-200 ease-in-out "
                >
                  {name}
                </span>
              </Link>
            )
          })}
        </Transition.Child>
      </Transition>
    </header>
  )
}

export default Navbar;