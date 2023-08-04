'use client';
import React, { useState, useEffect } from 'react';


const Navbar: React.FC = () => {
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
  })
  return (
    <header className="bg-surface">
      <h1 className="text-headerText">Navbar</h1>
      <a href="" className="link text-linkColor">Link</a>
      <a href="" className="link text-linkColor">Link</a>
      <a href="" className="link text-linkColor">Link</a>
      <a href="" className="link text-linkColor">Link</a>
      <div className="h-8 w-8 bg-primary"></div>
      <div className="h-8 w-8 bg-secondary"></div>
    </header>
  )
}

export default Navbar;