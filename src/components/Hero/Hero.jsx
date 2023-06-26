import React from 'react'
import "./Hero.css"
import HeroLeft from './HeroLeft';
import HeroRight from './HeroRight';

const Hero = () => {
  return (
    <div className=" my-5 px-10 flex gap-3 h-[500px] w-screen ">
      {/* {HERO LEFT} */}
      <HeroLeft/>

      {/* {HERO RIGHT} */}
      <HeroRight/>
    </div>
  );
}

export default Hero