'use client';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { RiFacebookFill, RiWhatsappFill, RiLinkedinFill } from 'react-icons/ri';


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
    <header className="bg-transparent fixed top-0 w-full h-[8rem] flex justify-between align-center gap-x-3 px-[5vw] sm:px-[calc(2rem+10vw)]">
      {/* NAV LOGO */}
      <div className="flex align-center text-left h-full gap-x-2">
        <Image src='svgs/mi-logo.svg' alt='LOGO' width='40' height='40' />
        <h2 className="w-min h-max my-auto text-headerTextLight font-lato font-[600] tracking-5">
          EMMANUEL MICHAEL
        </h2>
      </div>

      {/* NAV LINKS */}
      <nav className="w-max h-full flex flex-col flex-wrap justify-center gap-y-3">
        <ul className="flex justify-between gap-x-3">
          <li>
            <Link href='#' className="relative text-[.875rem] px-2 py-1 font-open font-[600] text-linkColor before:absolute before:bg-primary before:opacity-[.15] before:h-full hover:before:w-full transition-all duration-200 ease-in-out ">HOME</Link>
          </li>
          <li>
            <Link href='#' className="relative text-[.875rem] px-2 py-1 font-open font-[600] text-linkColor before:absolute before:bg-primary before:opacity-[.15] before:h-full hover:before:w-full transition-all duration-200 ease-in-out ">WORKS</Link>
          </li>
          <li>
            <Link href='#' className="relative text-[.875rem] px-2 py-1 font-open font-[600] text-linkColor before:absolute before:bg-primary before:opacity-[.15] before:h-full hover:before:w-full transition-all duration-200 ease-in-out ">ABOUT</Link>
          </li>
        </ul>
        {/* SOCIALS */}
        <div className="w-full flex gap-x-2 justify-end">
          <Link href='#' aria-label="socials:facebook link icon">
            <RiFacebookFill width='14' height='14' />
          </Link>
          <Link href='#' aria-label="socials:whatsapp link icon">
            <RiWhatsappFill width='14' height='14' />
          </Link>
          <Link href='#' aria-label="socials:facebook link icon">
            <RiLinkedinFill width='14' height='14' />
          </Link>
        </div>
      </nav>
    </header>
  )
}

export default Navbar;