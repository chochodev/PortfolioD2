'use client';
import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import { RiFacebookFill, RiWhatsappFill, } from 'react-icons/ri';


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
    <header className="bg-surface flex justify-between align-center space-x-3 ">
      {/* NAV LOGO */}
      <div className="flex align-center">
        <Image src='svgs/mi-logo.svg' alt='LOGO' width='30' height='30' />
        <h2>
          Emmanuel Michael
        </h2>
      </div>

      {/* NAV LINKS */}
      <nav>
        <ul>
          <li>
            <a href='#'>Home</a>
          </li>
          <li>
            <a href='#'>Works</a>
          </li>
          <li>
            <a href='#'>About</a>
          </li>
        </ul>
        {/* SOCIALS */}
        <div>
          <a href='#'>
            <RiFacebookFill width='12' height='12' />
          </a>
          <a href='#'>
            <RiWhatsappFill width='12' height='12' />
          </a>
          <a href='#'>
            <RiFacebookFill width='12' height='12' />
          </a>
        </div>
      </nav>
    </header>
  )
}

export default Navbar;