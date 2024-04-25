import React from 'react';
import { RiAddCircleFill } from 'react-icons/ri';

interface RoundButtonProps {
  type?: any;
  onClick?: any;
  text?: string;
  icon?: any;
  iconStyle?: any;
}

const RoundButton: React.FC<RoundButtonProps> = ({
  type='button',
  onClick=()=>{},
  text='Submit',
  icon=RiAddCircleFill,
  iconStyle="text-[1.5625rem] text-white"
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className="bg-teal-800 w-max h-max flex gap-x-1 items-center justify-center px-[1.25rem] py-[.75rem] text-white rounded-[2rem] shadow-sm hover:shadow-teal-800/50 hover:shadow-md focus:outline-1 focus:outline-teal-800/50 transition-all duration-250 ease-in-out"
    >
      {React.createElement(icon, {className: iconStyle})}
      {/* <RiAddCircleFill size="25" color="white" /> */}
      <p className="h-max text-white text-[1.25rem] tracking-[.15rem]">{text}</p>
    </button>
  )
}

export default RoundButton