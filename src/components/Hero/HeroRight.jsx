import React from 'react'
import "./Hero.css";
import { BsArrowRight } from 'react-icons/bs';


const HeroRight = () => {
  return (
    <div className=" heroRight w-[27%] h-[100%] bg-[#111111]  text-white">
      <div className=" flex flex-col p-8 w-[300px]  gap-24">
        <div className=" flex flex-col gap-3">
          <h1>Domain Names</h1>
          <p className=" text-4xl font-bold">Grab a .com for ‪$0.19‬/1st yr.</p>
        </div>

        <div className=" flex flex-col gap-3 mt-auto">
          <button className=" heroBtn flex items-center  bg-white text-black px-8 py-4 rounded-md ">
            <span className=' btnLetter flex items-center gap-3'>
              Find Your Domain
              <BsArrowRight className=" btnLogo text-black text-2xl p-0 m-0 hidden  opacity-0 " />
            </span>
          </button>
          <p className=" mb-3 font-medium">Transfer Your Domain</p>
          <small>3-year purchase required</small>
        </div>
      </div>
    </div>
  );
}

export default HeroRight