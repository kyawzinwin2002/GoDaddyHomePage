import React from 'react'
import { HiStatusOnline } from "react-icons/hi";
import { IoLogoUsd } from "react-icons/io";




const Search = () => {
  return (
    <div className=" flex px-10 my-5 items-center justify-between">
      {/* {SEARCH BAR} */}
      <div className=" relative ">
        <input
          type="text"
          placeholder=" Type the domain you want"
          className="px-5 w-[800px] py-5 bg-gray-200"
        />
        <button className="absolute flex bg-[#00838c] text-white px-5  py-5 right-0 font-semibold top-0">
          Search Domain
        </button>
      </div>

      {/* {Pricing bar} */}

      <ul className="flex gap-3 items-center">
        <li className=" flex gap-2 items-center">
          <HiStatusOnline className="text-gray-600 font-semibold text-xl" />
          <span className='text-gray-600 font-light' >$0.99</span>
        </li>

        <li className=" flex gap-2 items-center">
          <IoLogoUsd className="text-gray-600 font-semibold text-xl" />
          <span className='text-gray-600 font-light' >$14.99</span>
        </li>

        <li className=" flex gap-2 items-center">
          <IoLogoUsd className="text-gray-600 font-semibold text-xl" />
          <span className='text-gray-600 font-light' >$999.99</span>
        </li>

        <li className=" flex gap-2 items-center">
          <IoLogoUsd className="text-gray-600 font-semibold text-xl" />
          <span className='text-gray-600 font-light' >$11.99</span>
        </li>
      </ul>
    </div>
  );
}

export default Search