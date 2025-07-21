import React from "react";
import "../../src/index.css";
import { assets } from "../assets/admin_assets/assets";
import { Search, ShoppingCart, UserRound } from "lucide-react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between py-5 font-medium">
      <img src={assets.logo} className="w-36" alt="" />

      <ul className="hidden sm:flex gap-5 text-sm text-gray-700">
        <li>
          <NavLink to="/" className=" flex flex-col gap-1 items-center">
            <p>HOME</p>
            <hr className="w-2/4  border-none h-[1.5px] bg-gray-700 hidden " />
          </NavLink>
        </li>
        
        <li>
          <NavLink
            to="/collection"
            className=" flex flex-col gap-1 items-center">
            <p>COLLECTION</p>
            <hr className="w-2/4  border-none h-[1.5px] bg-gray-700 hidden" />
          </NavLink>
        </li>

        <li>
          <NavLink to="/about" className=" flex flex-col gap-1 items-center">
            <p>ABOUT</p>
            <hr className="w-2/4  border-none h-[1.5px] bg-gray-700 hidden" />
          </NavLink>
        </li>

        <li>
          <NavLink to="contact" className=" flex flex-col gap-1 items-center">
            <p>CONT</p>ACT
            <hr className="w-2/4  border-none h-[1.5px] bg-gray-700 hidden" />
          </NavLink>
        </li>
      </ul>

      <div className=" flex gap-5">
        <Search color="black" />
        <UserRound color="black" />
        <ShoppingCart color="black" />
      </div>
    </div>
  );
};

export default Navbar;
