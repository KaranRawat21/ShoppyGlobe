import logo from "../assets/images/logo.png";
import { NavLink } from "react-router-dom";
import { GoHome } from "react-icons/go";
import { AiOutlineProduct } from "react-icons/ai";
import { CiShoppingCart } from "react-icons/ci";
import { CiViewTimeline } from "react-icons/ci";








export default function Header() {



  return (

    //navbar
    <nav className=" w-full flex justify-between items-center px-4  py-4 lg:py-2 shadow-xl ">

      {/* App-logo */}
      <img
        src={logo}
        className=" w-[100px] md:w-[150px]" />

      {/* Routes to switch pages */}
      <div className="flex gap-10">
        <NavLink to="/" className={({ isActive }) =>
          `hidden lg:flex justify-center items-center gap-1 hover:text-[#c436ff] ${isActive ? "text-[#c436ff]" : ""
          }`
        } >
          <GoHome className=" text-2xl" />
          HOME
        </NavLink>

        <NavLink to="/products" className={({ isActive }) =>
          `hidden lg:flex justify-center items-center gap-1 hover:text-[#c436ff] ${isActive ? "text-[#c436ff]" : ""
          }`
        } >
          <AiOutlineProduct className=" text-2xl" />
          PRODUCTS
        </NavLink>

        <NavLink to="/about" className={({ isActive }) =>
          `hidden lg:flex justify-center items-center gap-1 hover:text-[#c436ff] ${isActive ? "text-[#c436ff]" : ""
          }`
        }>
          <CiViewTimeline className=" text-3xl" />
          ABOUT
        </NavLink>

        <NavLink to="/cart" className={({ isActive }) =>
          `lg:flex justify-center items-center gap-1 hover:text-[#c436ff] ${isActive ? "text-[#c436ff]" : ""
          }`
        }>
          <CiShoppingCart className=" text-3xl" />
          <div className=" hidden lg:block">CART</div>
        </NavLink>

      </div>



    </nav>
  )
}
