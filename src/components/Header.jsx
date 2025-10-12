import logo from "../assets/images/logo.png";
import { NavLink } from "react-router-dom";
import { GoHome } from "react-icons/go";
import { AiOutlineProduct } from "react-icons/ai";
import { CiShoppingCart } from "react-icons/ci";
import { IoPersonOutline } from "react-icons/io5";
import { CiViewTimeline } from "react-icons/ci";







export default function Header() {
  return (

    //navbar
    <nav className=" w-full flex justify-between items-center px-4  py-4 shadow-xl ">

      {/* App-logo */}
      <img
        src={logo}
        className=" w-[100px] md:w-[150px]" />

      {/* Routes to switch pages */}
      <div className="flex gap-10">
        <NavLink to="/" className="hidden lg:flex justify-center items-center gap-1 " >
          <GoHome className=" text-2xl" />
          HOME
        </NavLink>

        <NavLink to="/products" className="hidden lg:flex justify-center items-center gap-1" >
          <AiOutlineProduct className=" text-2xl" />
          PRODUCTS
        </NavLink>

        <NavLink to="/about" className="hidden lg:flex justify-center items-center gap-1">
          <CiViewTimeline className=" text-3xl" />
          ABOUT
        </NavLink>

        <NavLink to="/cart" className="flex justify-center items-center gap-1">
          <CiShoppingCart className=" text-3xl" />
          <div className=" hidden lg:block">CART</div>
        </NavLink>

        <NavLink to="profile" className="hidden lg:flex justify-center items-center gap-1 text-white bg-[#1c1b1b] p-3 rounded-md">
          <IoPersonOutline className=" text-2xl" />
          PROFILE
        </NavLink>


      </div>



    </nav>
  )
}
