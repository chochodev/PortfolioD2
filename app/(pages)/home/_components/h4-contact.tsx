import React from 'react';
import { RiMailLine, RiPhoneLine, RiTwitterLine, RiUser2Line } from 'react-icons/ri';

interface SectionType {
  snap_position: string
}

const ContactSection: React.FC<SectionType> = ({snap_position}) => {
  return (
    <section className={`w-full min-h-[100vh] px-[1rem+5vw] snap-${snap_position}`}>
      <div className="w-full flex flex-col items-center text-center gap-[1rem]">
        <h2 className="text-[1.875rem] text-textDark font-bold">CONTACT</h2>
        <p className="text-textLight">Get in touch with me</p>
      </div>

      <div className="flex flex-wrap justify-between gap-[.8rem + 5vw]">
        {/* SOCIAL LINKS */}
        <div className="max-w-[15rem] w-full flex flex-col items-start gap-y-[1rem]">
          <div className="flex items-center align-center gap-x-[.5rem]">
            <RiPhoneLine size="20" color="#64CCC5" />
            <p className="text-textLight">+234 903 910 8667</p>
          </div>
          <div className="flex items-center align-center gap-x-[.5rem]">
            <RiMailLine size="20" color="#64CCC5" />
            <p className="text-textLight">michochoprogrammer@gmail.com</p>
          </div>
          <div className="flex items-center align-center gap-x-[.5rem]">
            <RiTwitterLine size="20" color="#64CCC5" />
            <p className="text-textLight">Mi_CHOCHO</p>
          </div>
        </div>

        {/* CONTACT FORM */}
        <form action="#" className="w-full flex flex-col p-[1rem] gap-y-[1rem]">
          <div className="relative flex items-center justify-center">
            <RiUser2Line size="25" color="#060606" className="absolute left-[.5rem]" />
            <input type="text" name="name" placeholder="Full name" className="ch-input w-full pl-[2rem]" />
          </div>
        </form>
      </div>
    </section>
  )
}

export default ContactSection;