import React from 'react';
import { RiPhoneLine, RiUser2Line } from 'react-icons/ri';

const ContactSection: React.FC = () => {
  return (
    <div className="w-full px-[1rem+5vw]">
      <div className="w-full h-[10rem + 5vw] bg-primary rounded-t-md flex flex-col items-center text-center justify-center gap-[1rem]">
        <h2 className="text-[2rem] text-headerText bold">Contact me</h2>
        <p className="texttextLight-">Get in touch with me</p>
      </div>

      <div className="flex flex-wrap justify-between gap-[.8rem + 5vw]">
        {/* SOCIAL LINKS */}
        <div className="max-w-[15rem] w-full flex flex-col items-start gap-y-[1rem]">
          <div className="flex items-center align-center gap-x-[.5rem]">
            <RiPhoneLine size="20" color="#64CCC5" />
            <p className="text-textLight">+234 903 910 8667</p>
          </div>
          <div className="flex items-center align-center gap-x-[.5rem]">
            <RiPhoneLine size="20" color="#64CCC5" />
            <p className="text-textLight">michochoprogrammer@gmail.com</p>
          </div>
          <div className="flex items-center align-center gap-x-[.5rem]">
            <RiPhoneLine size="20" color="#64CCC5" />
            <p className="text-textLight">+234 903 910 8667</p>
          </div>
        </div>

        {/* CONTACT FORM */}
        <form action="#" className="w-full flex flex-col p-[1rem] gap-y-[1rem]">
          <div className="relative flex items-center justify-center">
            <RiUser2Line size="25" color="#060606" className="absolute left-[.5rem]" />
            <input type="text" name="name" placeholder="Full name" className="ch-input w-full" />
          </div>
        </form>
      </div>
    </div>
  )
}

export default ContactSection;