'use client';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { Transition } from '@headlessui/react';
import { RiFacebookFill, RiWhatsappFill, RiLinkedinFill, RiCodeSSlashFill } from 'react-icons/ri';
import { IoCodeWorkingSharp } from 'react-icons/io5';


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
      icon: <RiFacebookFill />,
    },
    {
      name: 'WhatsApp',
      icon: <RiWhatsappFill />,
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
      setBreakpoint(window.innerWidth < 480);
    }
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    }
  }, [])

  // Interface
  return (
    <header className="bg-transparent fixed top-0 w-full h-[12rem] flex justify-between align-center gap-x-3 px-[5vw] sm:px-[calc(2rem+10vw)]">
      {/* NAV LOGO */}
      <div className="flex align-center text-left h-full gap-x-[.5rem]">
        <Image src='svgs/logo-dark.svg' alt='LOGO' width='40' height='40' />
        <Transition
          as="h2"
          className="w-min h-max my-auto text-[.875rem] text-headerText font-lato font-[500] tracking-[.2rem]"
          appear={true}
          show={true}
          enter="transform transition-all opacity ease-in-out delay-[50ms] duration-200"
          enterFrom="translate-y-2 opacity-0"
          enterTo="translate-y-0 opacity-1"
        >
          EMMANUEL MICHAEL
        </Transition>
      </div>

      <Transition
        as="nav"
        className="w-max h-full flex flex-col flex-wrap justify-center gap-y-3"
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
            <Link href={url} className="relative text-[.875rem] font-open font-[600] text-linkColor hover:text-primary transition-all duration-200 ease-in-out ">{name}</Link>
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
          <Link href="#" aria-label="socials:facebook link icon" className="group relative flex justify-center align-center text-center">
            <RiFacebookFill width="14" height="14" />
            <div className="hidden absolute h-3 w-3 bg-primary top-[calc(100%+.5rem)] rotate-45 group-hover:block z-10 transition-all duration-200 ease-in-out "></div>
            <span className="hidden absolute top-[calc(100%+.75rem)] text-[.6rem] text-white bg-primary px-3 py-1 rounded-md group-hover:block z-10 transition-all duration-200 ease-in-out ">Facebook</span>
          </Link>
          <Link href="#" aria-label="socials:whatsapp link icon" className="group relative flex justify-center align-center text-center">
            <RiWhatsappFill width="14" height="14" />
            <div className="hidden absolute h-3 w-3 bg-primary top-[calc(100%+.5rem)] rotate-45 group-hover:block z-10 transition-all duration-200 ease-in-out "></div>
            <span className="hidden absolute top-[calc(100%+.75rem)] text-[.6rem] text-white bg-primary px-3 py-1 rounded-md group-hover:block z-10 transition-all duration-200 ease-in-out ">WhatsApp</span>
          </Link>
          <Link href="#" aria-label="socials:linkedin link icon" className="group relative flex justify-center align-center text-center">
            <RiLinkedinFill width="14" height="14" />
            <div className="hidden absolute h-3 w-3 bg-primary top-[calc(100%+.5rem)] rotate-45 group-hover:block z-10 transition-all duration-200 ease-in-out "></div>
            <span className="hidden absolute top-[calc(100%+.75rem)] text-[.6rem] text-white bg-primary px-3 py-1 rounded-md group-hover:block z-10 transition-all duration-200 ease-in-out ">LinkedIn</span>
          </Link>
        </Transition.Child>
      </Transition>
      <Transition
        as="button"
        onClick={()=>setScrollDown(true)}
        className="fixed top-[5rem] right-[5vw] sm:right-[calc(2rem+10vw)] w-max flex flex-col flex-wrap justify-center gap-y-3"
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
        <RiCodeSSlashFill size="40" />
      </Transition>

      {/* NAV LINKS FOR SMALL SCREEN AND SCROLL DOWN */}
      <nav className="hidden w-max h-full flex flex-col flex-wrap justify-center gap-y-3">
        <button onClick={()=>setOpenNav(!openNav)}>
          {!openNav && <IoCodeWorkingSharp width="22" height="22" />}
          {openNav && <RiCodeSSlashFill width="22" height="22" />}
        </button>
        <ul className="flex justify-between gap-x-3">
          <li className="w-max">
            <Link href='#' className="relative text-[.875rem] font-open font-[600] text-linkColor hover:text-primary transition-all duration-200 ease-in-out ">HOME</Link>
          </li>
          <li className="w-max">
            <Link href='#' className="relative text-[.875rem] font-open font-[600] text-linkColor hover:text-primary transition-all duration-200 ease-in-out ">WORKS</Link>
          </li>
          <li className="w-max">
            <Link href='#' className="relative text-[.875rem] font-open font-[600] text-linkColor hover:text-primary transition-all duration-200 ease-in-out ">ABOUT</Link>
          </li>
        </ul>

        {/* SOCIALS */}
        <div className="w-full flex gap-x-3 justify-end">
          <Link href='#' aria-label="socials:facebook link icon" className="group relative flex justify-center align-center text-center">
            <RiFacebookFill width='14' height='14' />
            <div className="hidden absolute h-3 w-3 bg-primary top-[calc(100%+.5rem)] rotate-45 group-hover:block z-10 transition-all duration-200 ease-in-out "></div>
            <span className="hidden absolute top-[calc(100%+.75rem)] text-[.6rem] text-white bg-primary px-3 py-1 rounded-md group-hover:block z-10 transition-all duration-200 ease-in-out ">Facebook</span>
          </Link>
          <Link href='#' aria-label="socials:whatsapp link icon" className="group relative flex justify-center align-center text-center">
            <RiWhatsappFill width='14' height='14' />
            <div className="hidden absolute h-3 w-3 bg-primary top-[calc(100%+.5rem)] rotate-45 group-hover:block z-10 transition-all duration-200 ease-in-out "></div>
            <span className="hidden absolute top-[calc(100%+.75rem)] text-[.6rem] text-white bg-primary px-3 py-1 rounded-md group-hover:block z-10 transition-all duration-200 ease-in-out ">WhatsApp</span>
          </Link>
          <Link href='#' aria-label="socials:linkedin link icon" className="group relative flex justify-center align-center text-center">
            <RiLinkedinFill width='14' height='14' />
            <div className="hidden absolute h-3 w-3 bg-primary top-[calc(100%+.5rem)] rotate-45 group-hover:block z-10 transition-all duration-200 ease-in-out "></div>
            <span className="hidden absolute top-[calc(100%+.75rem)] text-[.6rem] text-white bg-primary px-3 py-1 rounded-md group-hover:block z-10 transition-all duration-200 ease-in-out ">LinkedIn</span>
          </Link>
        </div>
      </nav>
    </header>
  )
}

export default Navbar;