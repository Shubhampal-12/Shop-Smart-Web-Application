import React, { useContext, useState } from "react";
import "../../src/index.css";
import { assets } from "../assets/assets";
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
  const { setShowSearch, getCartCount, token, navigate,setToken,setCartItems } = useContext(ShopContext);

   const logout = () => {
      navigate('/login')
      localStorage.removeItem('token')
      setToken('')
      setCartItems({})
    }

  return (
    <div className="flex items-center justify-between py-2 font-medium px-1 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
      <NavLink to="/">
        <img
          src={assets.logo}
          className="w-[120px] h-[100px] bg-white object-contain mx-auto"
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
          <UserRound onClick={() => token ? null : navigate('/login')} color="black" className=" cursor-pointer" />
          {/* <img onClick={() => token ? null : navigate('/login')} className="w-5 cursor-pointer" src={assets.profile_icon} alt="Profile" /> */}
          {token && <div className="hidden group-hover:block absolute right-0 pt-4 bg-white shadow-md rounded">
            <div className="flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded">
              <p className="cursor-pointer hover:text-black">My Profile</p>
              <p onClick={()=> navigate('/orders')} className="cursor-pointer hover:text-black">Orders</p>
              <p onClick={logout} className="cursor-pointer hover:text-black">Logout</p>
            </div>
          </div>}
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
