import React, { useContext, useState } from "react";
import "../../src/index.css";
import { assets } from "../assets/admin_assets/assets";
import {
  AlignCenter,
  ChevronLeft,
  Search,
  ShoppingCart,
  UserRound,
} from "lucide-react";
import { NavLink } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const { setShowSearch, getCartCount } = useContext(ShopContext);

  return (
    <div className="flex items-center justify-between py-2 font-medium px-1 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
      <NavLink to="/">
        <img
          src={assets.logo}
          className="w-[120px] h-[100px] object-contain mx-auto"
          alt=""
        />
      </NavLink>

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
            className=" flex flex-col gap-1 items-center"
          >
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
            <p>CONTACT</p>
            <hr className="w-2/4  border-none h-[1.5px] bg-gray-700 hidden" />
          </NavLink>
        </li>
      </ul>

      <div className=" flex gap-5">
        <Search
          onClick={() => setShowSearch(true)}
          color="black"
          className="cursor-pointer"
        />
        <div className="group relative">
          <Link to="/login">
            <UserRound color="black" className=" cursor-pointer" />
          </Link>
          <div className="group-hover:block hidden absolute dropdown-menu right-0 pt-4">
            <div className="flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 rounded text-gray-500">
              <p className="cursor-pointer hover:text-black">My Profile</p>
              <p className="cursor-pointer hover:text-black">Order</p>
              <p className="cursor-pointer hover:text-black">LogOut</p>
            </div>
          </div>
        </div>

        <NavLink to="/cart" className="relative">
          <ShoppingCart color="black" />
          <p className="absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]">
            {getCartCount()}
          </p>
        </NavLink>
        <AlignCenter
          onClick={() => setVisible(true)}
          color="black"
          className="cursor-pointer w-5 sm:hidden   "
        />
      </div>

      {/* Sidebar menu for smal screens */}
      <div
        className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${
          visible ? "w-full" : "w-0"
        }`}
      >
        <div className="flex flex-col text-gray-600">
          <div
            onClick={() => setVisible(false)}
            className="flex items-center gap-1  p-5 cursor-pointer"
          >
            <ChevronLeft color="black" className="items-center" />
            <p>Back</p>
          </div>
          <NavLink
            onClick={() => setVisible(false)}
            className="py-2 pl-6 border"
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            onClick={() => setVisible(false)}
            className="py-2 pl-6 border"
            to="/collection"
          >
            COLLECTION
          </NavLink>
          <NavLink
            onClick={() => setVisible(false)}
            className="py-2 pl-6 border"
            to="/about"
          >
            ABOUT
          </NavLink>
          <NavLink
            onClick={() => setVisible(false)}
            className="py-2 pl-6 border"
            to="/contact"
          >
            CONTACT
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
