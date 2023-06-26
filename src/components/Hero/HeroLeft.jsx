import React from 'react'
import { BsArrowRight } from 'react-icons/bs';
import "./Hero.css";

const HeroLeft = () => {
  return (
    <div className=" heroLeft w-[73%] h-[100%] p-8 ">
      <div className=" flex  w-[350px] flex-col gap-5">
        <h1 className=" font-semibold">Websites + Marketing</h1>
        <h1 className="   text-5xl font-semibold">
          Easy to build, beautiful and designed for growth.
        </h1>
        <p>Built-in marketing tools make it easy to promote your new site.</p>
        <div className="">
          <button className=" heroBtn w-[200px] text-lg    py-3 rounded-md bg-black text-white flex gap-3 justify-center items-center">
            <span className="text-lg btnLetter flex items-center gap-2 justify-center">
              Start for Free
              <BsArrowRight className=" btnLogo  text-2xl p-0 m-0 hidden  opacity-0 " />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default HeroLeft