'use client';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { RiFacebookFill, RiWhatsappFill, RiLinkedinFill, RiCodeFill, RiCodeSSlashFill } from 'react-icons/ri';
import { IoCodeWorkingSharp } from 'react-icons/io5';


const Navbar: React.FC = () => {
  // Nav links Array
  const navlinks = [
    {
      name: 'Home',
      url: '#',
      current: false
    },
    {
      name: 'Works',
      url: '#',
      current: false
    },
    {
      name: 'About',
      url: '#',
      current: false
    },
    {
      name: 'Contact',
      url: '#',
      current: false
    }
  ]

  // To hide and reveal navbar on scroll down
  const [scrollDown, setScrollDown] = useState(false);

  useEffect(() => {
    let initialPosition = window.scrollY + 5;
    
    const handleScrollDown = () => {
      const currentPosition = window.scrollY;
      const scrollingDown = currentPosition > initialPosition;
      setScrollDown(scrollingDown);
      initialPosition = currentPosition + 5;
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
      <div className="flex align-center text-left h-full gap-x-2">
        <Image src='svgs/mi-logo.svg' alt='LOGO' width='40' height='40' />
        <h2 className="w-min h-max my-auto text-headerText font-lato font-[600] tracking-[.25rem]">
          EMMANUEL MICHAEL
        </h2>
      </div>

      {/* NAV LINKS */}
      <nav className="hidden w-max h-full flex flex-col flex-wrap justify-center gap-y-3">
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

      {/* NAV LINKS FOR SMALL SCREEN AND SCROLL DOWN */}
      <nav className="w-max h-full flex flex-col flex-wrap justify-center gap-y-3">
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