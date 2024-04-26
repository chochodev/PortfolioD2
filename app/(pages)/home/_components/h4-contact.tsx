import React from 'react';
import Link from 'next/link';
import { 
  RiAtLine, 
  RiMailLine, 
  RiPhoneLine, 
  RiTwitterLine, 
  RiUser6Line, 
  RiMailSendLine } from 'react-icons/ri';

interface SectionType {
  extra_styles: string
}



const ContactSection: React.FC<SectionType> = ({extra_styles}) => {
  const links = [
    {name: '+234-9039108667', icon: RiPhoneLine, text: 'Call me', link: 'https://wa.me/23439108667'},
    {name: 'chochodeveloper@gmail.com', icon: RiAtLine, text: 'Email me', link: '#'},
    {name: 'chochodev', icon: RiTwitterLine, text: 'Follow me on X', link: 'https://x.com/chochodev?s=09'}
  ]

  return (
    <section id="contact" className={`md:px-[5rem] px-[1rem+5vw] bg-white ${extra_styles}`}>
      <div className="w-full flex flex-col items-center text-center gap-[1rem] my-[3rem]">
        <h2 className="text-[1.875rem] text-teal-900 font-bold">CONTACT</h2>
        <p className="text-teal-400">Get in touch with me</p>
      </div>

      {/* SOCIAL LINKS */}
      <div className="w-full flex lg:flex-row flex-col flex-wrap items-center justify-center gap-[calc(1.25rem+2vw)] p-[1rem]">
        <div className="max-w-[20rem] w-full flex flex-col items-center gap-y-[0.5rem]">
          {links.map((link, index) => (
            <Link 
              key={index}
              href={link.link || '#'}
              target="_blank"
              className="h-max w-full flex flex-col items-center px-[0.5rem] gap-[1.25rem] md:gap-[0.5rem] py-[.875rem] "
            >
              <span className='flex justify-center items-center bg-teal-50 h-[4rem] lg:h-[3rem] w-[4rem] lg:w-[3rem] rounded-[8px] shadow-sm shadow-teal-400'>
                {React.createElement(link.icon, {className: 'text-[1.5rem] lg:text-[1.25rem] text-slate-500 '})}
              </span>
              <div className="flex flex-col items-center text-center gap-y-[1.25rem] md:gap-y-[0.5rem] ">              
                <p className="text-teal-900 text-[1.15rem] md:text-[0.875rem]">{link.text}</p>
                <p className="text-teal-900 text-[1.25rem] md:text-[1.07rem] font-bold">{link.name}</p>
              </div>
            </Link>
            ))}
        </div>

        {/* CONTACT FORM */}
        <form action="#" className="max-w-[30rem] w-full flex-1 flex flex-col gap-x-[.5rem] gap-y-[1rem]">
          {/* <h2 className="text-textDark text-[1.05rem] font-bold tracking-[.25rem]mb-[.5rem] border-b-[1px] border-slate-400">Message Me...</h2> */}
          <div className=" w-full md:w-[40vw] lg:w-[30vw] flex flex-col gap-[.5rem] ">
            <div className="relative w-full flex items-center">
              <RiUser6Line size="25" color="rgb(17,94,89)" className="absolute left-[.5rem]" />
              <input 
                type="text" 
                name="name" 
                placeholder="Full name" 
                className="ch-input h-[3rem] w-full pl-[2.25rem]" 
              />
            </div>
            <div className="relative w-full flex items-center">
              <RiAtLine size="25" color="rgb(17,94,89)" className="absolute left-[.5rem]" />
              <input 
                type="email" 
                name="email" 
                placeholder="Email Address" 
                className="ch-input h-[3rem] w-full pl-[2.25rem]" 
              />
            </div>
          {/* </div>
          <div className="flex-1 flex flex-col gap-y-[.5rem] items-end"> */}
            <div className="relative w-full">
              <RiMailLine size="25" color="rgb(17,94,89)" className="absolute top-[.25rem] left-[.5rem]" />
              <textarea 
                name="message" 
                placeholder="Message..." 
                className="ch-input h-[5.5rem] w-full pl-[2.25rem] placeholder:py-[.5rem]">
              </textarea>
            </div>
            <button 
              className="bg-teal-800 w-max h-max flex gap-x-1 items-center justify-center px-[1.25rem] py-[.75rem] text-white rounded-[8px] shadow-sm hover:shadow-teal-800/50 hover:shadow-md focus:outline-1 focus:outline-teal-800/50 transition-all duration-250 ease-in-out"
            >
              <RiMailSendLine size="25" color="white" />
              <p className="h-max text-white text-[1.25rem] tracking-[.15rem]">SUBMIT</p>  
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}

export default ContactSection;