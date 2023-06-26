import React from 'react'
import { BsSearch, BsChevronDown, BsCart2 } from "react-icons/bs";

const RightNav = () => {
  return (
    <ul className=" flex items-center gap-3">
      <li className=" ">
        <div className="text-white cursor-pointer select-none bg-[#444444] px-3 hover:bg-[#5e5e5e] py-3 rounded-md">
          <BsSearch className=" text-2xl" />
        </div>
      </li>
      <li className=" flex items-center cursor-pointer select-none gap-2 hover:bg-[#5e5e5e] px-3 py-3 rounded-md">
        <span>+65 6349-4240</span>
        <BsChevronDown />
      </li>
      <li className="hover:bg-[#5e5e5e] px-3 py-3 rounded-md ">
        <button className="  ">Help</button>
      </li>
      <li className=" flex items-center cursor-pointer select-none gap-2 hover:bg-[#5e5e5e] px-3 py-3 rounded-md">
        <span>Sign In</span>
        <BsChevronDown />
      </li>
      <li className="cursor-pointer select-none gap-2 hover:bg-[#5e5e5e] px-3 py-3 rounded-md">
        <BsCart2/>
      </li>
    </ul>
  );
}

export default RightNav