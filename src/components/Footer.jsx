import React from "react";
import { assets } from "../assets/frontend_assets/assets";

const Footer = () => {
  return (
    <div className="">
      <div className="flex-col flex sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-16 text-sm">
        <div className="">
          <img src={assets.logo} alt="" className="mb-5 w-32 " />
          <p className="w-full md:w-2/3 text-gray-600">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam,
            ut! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni
            perspiciatis ab ducimus sed at molestiae recusandae? Aliquam amet
            deserunt nam.
          </p>
        </div>
        <div className="">
          <p className="text-xl font-medium mb-5">COMPANY</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Policy</li>
          </ul>
        </div>
        <div className="">
          <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>+1-222-432-3456</li>
            <li>contact@123gmail.com</li>
            <li></li>
            <li></li>
          </ul>
        </div>
      </div>
      <div className="">
        <hr />
        <p className="py-5 text-sm text-center">Copyright 2024@ ShopSmart.com - All Right Reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
