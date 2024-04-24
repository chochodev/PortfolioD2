import React from 'react';
import Link from 'next/link';
import { RiAtLine, RiMailLine, RiPhoneLine, RiTwitterLine, RiUser6Line } from 'react-icons/ri';

interface SectionType {
  extra_styles: string
}

const ContactSection: React.FC<SectionType> = ({extra_styles}) => {
  return (
    <section id="contact" className={`md:px-[5rem] px-[1rem+5vw] bg-white ${extra_styles}`}>
      <div className="w-full flex flex-col items-center text-center gap-[1rem] my-[3rem]">
        <h2 className="text-[1.875rem] text-textDark font-bold">CONTACT</h2>
        <p className="text-textLight">Get in touch with me</p>
      </div>

      <div className="w-full flex lg:flex-row flex-col flex-wrap justify-between gap-[calc(1.25rem+2vw)] p-[1rem]">
        {/* SOCIAL LINKS */}
        <div className="max-w-[20rem] w-full flex flex-col items-start gap-y-[.5rem]">
          <Link 
            href="#" 
            target="_blank"
            className="bg-slate-100 h-max w-full flex px-[.5rem] gap-x-[.5rem] py-[.875rem] hover:bg-slate-200 rounded-md hover:shadow-sm hover:shadow-slate-200 transition-all duration-200 ease-in-out"
          >
            <RiPhoneLine size="25" color="#0060a5" />
            <div className="flex flex-col gap-y-[.5rem] ">              
              <p className="text-textDark text-[.875rem] md:text-[1.07rem] font-bold">+234 903 910 8667</p>
              <p className="text-textDark text-[.875rem] md:text-[1.07rem]">Call me: 8am - 6pm</p>
            </div>
          </Link>
          <Link 
            href="#" 
            target="_blank"
            className="bg-slate-100 h-max w-full flex px-[.5rem] gap-x-[.5rem] py-[.875rem] hover:bg-slate-200 rounded-md hover:shadow-sm hover:shadow-slate-200 transition-all duration-200 ease-in-out"
          >
            <RiMailLine size="25" color="#0060a5" />
            <div className="flex flex-col gap-y-[.5rem] ">              
              <p className="text-textDark text-[.875rem] md:text-[1rem] font-bold">michochoprogrammer@gmail.com</p>
              <p className="text-textDark text-[1.07rem]">Send me a message anytime</p>
            </div>
          </Link>
          <Link 
            href="#" 
            target="_blank"
            className="bg-slate-100 h-max w-full flex px-[.5rem] gap-x-[.5rem] py-[.875rem] hover:bg-slate-200 rounded-md hover:shadow-sm hover:shadow-slate-200 transition-all duration-200 ease-in-out"
          >
            <RiTwitterLine size="25" color="#0060a5" />
            <div className="flex flex-col gap-y-[.5rem] ">              
              <p className="text-textDark text-[.875rem] md:text-[1.07rem] font-bold">Mi_CHOCHO</p>
              <p className="text-textDark text-[.875rem] md:text-[1.07rem]">Chat me up anytime</p>
            </div>
          </Link>
        </div>

        {/* CONTACT FORM */}
        <form action="#" className="w-full flex-1 flex flex-col md:flex-row gap-x-[.5rem] gap-y-[1rem]">
          {/* <h2 className="text-textDark text-[1.05rem] font-bold tracking-[.25rem]mb-[.5rem] border-b-[1px] border-slate-400">Message Me...</h2> */}
          <div className=" w-full md:w-[40vw] lg:w-[30vw] flex flex-col gap-[.5rem] ">
            <div className="relative w-full flex items-center">
              <RiUser6Line size="25" color="#7A7A7C" className="absolute left-[.5rem]" />
              <input type="text" name="name" placeholder="Full name" className="ch-input h-[2.5rem] w-full pl-[2.25rem]" />
            </div>
            <div className="relative w-full flex items-center">
              <RiAtLine size="25" color="#7A7A7C" className="absolute left-[.5rem]" />
              <input type="email" name="email" placeholder="Email Address" className="ch-input h-[2.5rem] w-full pl-[2.25rem]" />
            </div>
          </div>
          <div className="flex-1 flex flex-col gap-y-[.5rem] items-end">
            <div className="relative w-full">
              <RiMailLine size="25" color="#7A7A7C" className="absolute top-[.25rem] left-[.5rem]" />
              <textarea name="message" placeholder="Message..." className="ch-input h-[5.5rem] w-full pl-[2.25rem] placeholder:py-[.5rem]"></textarea>
            </div>
            <button 
              className="w-[8rem] py-[.875rem] bg-gradient-to-tr from-[#0060a5] to-darkSurface to-{20%} flex text-center justify-center text-white font-bold text-[.875rem] rounded-md"
            >
              SUBMIT
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}

export default ContactSection;