import React from 'react';

const Footer = () => {
  return (
      <footer className="bg-teal-200 rounded-lg shadow m-4">
          <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
              <div className="sm:flex sm:items-center sm:justify-between">
                  <a href="/" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                      <img src="/assets/svgs/logo-light.svg" className="h-8" alt="MICHAEL" />
                      <span className="self-center text-2xl font-semibold whitespace-nowrap ">ChochoDev</span>
                  </a>
                  <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-teal-500 sm:mb-0">
                      <li>
                          <a href="https://github/chochodev" className="hover:underline me-4 md:me-6">GitHub</a>
                      </li>
                      <li>
                          <a href="https://x.com/chochodev?s=09" className="hover:underline me-4 md:me-6">Twitter X</a>
                      </li>
                      <li>
                          <a href="https://wa.me/23439108667" className="hover:underline me-4 md:me-6">WhatsApp</a>
                      </li>
                      <li>
                          <a href="https://www.linkedin.com/in/emmanuel-michael-728678217/" className="hover:underline">LinkedIn</a>
                      </li>
                  </ul>
              </div>
              <hr className="my-6 border-teal-200 sm:mx-auto lg:my-8" />
              <span className="block text-sm text-teal-500 sm:text-center dark:text-teal-400">© 2024 <a href="/" className="hover:underline">Emmanuel Michael</a>. All Rights Reserved.</span>
          </div>
      </footer>


  )
}

export default Footer;