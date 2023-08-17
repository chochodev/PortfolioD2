import React from 'react';
import Link from 'next/link';
import { RiAtLine, RiMailLine, RiPhoneLine, RiTwitterLine, RiUser6Line } from 'react-icons/ri';

interface SectionType {
  extra_styles: string
}

const ContactSection: React.FC<SectionType> = ({extra_styles}) => {
  return (
    <section className={`px-[1rem+5vw] ${extra_styles}`}>
      <div className="w-full flex flex-col items-center text-center gap-[1rem]">
        <h2 className="text-[1.875rem] text-textDark font-bold">CONTACT</h2>
        <p className="text-textLight">Get in touch with me</p>
      </div>

      <div className="w-full flex lg:flex-row flex-col flex-wrap justify-between gap-[.8rem + 5vw]">
        {/* SOCIAL LINKS */}
        <div className="max-w-[20rem] w-full flex flex-col items-start gap-y-[.25rem]">
          <Link href="#" className="h-[2.5rem] w-full flex items-center align-center px-[.5rem] gap-x-[.5rem] hover:bg-primary/40 rounded-md hover:shadow-sm hover:shadow-slate-200">
            <RiPhoneLine size="20" color="#0060a5" />
            <p className="text-textLight text-[.875rem]">+234 903 910 8667</p>
          </Link>
          <Link href="#" className="h-[2.5rem] w-full flex items-center align-center px-[.5rem] gap-x-[.5rem] hover:bg-primary/40 rounded-md hover:shadow-sm hover:shadow-slate-200">
            <RiMailLine size="20" color="#0060a5" />
            <p className="text-textLight text-[.875rem]">michochoprogrammer@gmail.com</p>
          </Link>
          <Link href="#" className="h-[2.5rem] w-full flex items-center align-center px-[.5rem] gap-x-[.5rem] hover:bg-primary/40 rounded-md hover:shadow-sm hover:shadow-slate-200">
            <RiTwitterLine size="20" color="#0060a5" />
            <p className="text-textLight text-[.875rem]">Mi_CHOCHO</p>
          </Link>
        </div>

        {/* CONTACT FORM */}
        <form action="#" className="w-full flex-1 flex flex-col md:flex-row p-[1rem] gap-x-[.5rem] gap-y-[1rem]">
          <div className="flex flex-col gap-[.5rem]  ">
            <div className="relative flex items-center justify-center">
              <RiUser6Line size="25" color="#7A7A7C" className="absolute left-[.5rem]" />
              <input type="text" name="name" placeholder="Full name" className="ch-input h-[2.5rem] w-full pl-[2.25rem]" />
            </div>
            <div className="relative flex items-center justify-center">
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