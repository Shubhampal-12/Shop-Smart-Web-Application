import React from "react";
import { assets } from "../assets/assets";
import "../../src/index.css";
import Heropage from "./Heropage";
import Tittle from "./Title";

const Hero = () => {
  return (
    <div className="my-10 px-4  sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
      <div className="text-center py-8 text-3xl">
        <Tittle text1={"LATEST"} text2={"OFFER"} />
        <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde,
          ratione. assumenda doloremque.
        </p>
      </div>
      <div className="flex flex-col sm:flex-row border border-gray-400 ">
        {/* Hero left side */}
        <div className="w-full  sm:w-1/2 flex items-center justify-center py-10 sm:py-0">
          <div className="text-[#414141]">
            <div className="flex items-center gap-2">
              <p className="w-8 md:w-11 h-[2px] bg-[#414141]"></p>
              <p className="font-medium text-sm md:text-base">
                {" "}
                OUR BESTSELLERS
              </p>
            </div>
            <h1 className="prata-regular text-3xl sm:py-3 lg:text-5xl leading-relaxed">
              Latest Arrivals
            </h1>
            <div className="flex items-center gap-2">
              <p className="font-semibold text-sm md:text-base">SHOP Now</p>
              <p className=" w-8 md:w-11 h-[1px] bg-[#414141]"></p>
            </div>
          </div>
        </div>
        {/* Hero right side */}
        <img className="w-full sm:w-1/2 " src={assets.hero_img} alt="" />
      </div>
    </div>
  );
};

export default Hero;
