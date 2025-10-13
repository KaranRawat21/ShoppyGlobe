import { NavLink } from "react-router-dom";
import { GoHome } from "react-icons/go";
import { AiOutlineProduct } from "react-icons/ai";
import { IoPersonOutline } from "react-icons/io5";
import { CiViewTimeline } from "react-icons/ci";

export default function BottonRoutes() {
  return (
    <div className=" lg:hidden fixed w-full flex p-4 bg-white justify-around bottom-0 shadow-[0_-4px_6px_rgba(0,0,0,0.1)] text-xl">
      <NavLink to="/"
        className={({ isActive }) =>
          `p-1 rounded-full transition-all duration-200 ${isActive ? "text-[#c436ff]" : "text-gray-600"
          } hover:text-[#c436ff]`
        }>
        <GoHome /></NavLink>

      <NavLink to="/products"
        className={({ isActive }) =>
          `p-1 rounded-full transition-all duration-200 ${isActive ? "text-[#c436ff]" : "text-gray-600"
          } hover:text-[#c436ff]`
        }>
        <AiOutlineProduct /></NavLink>

      <NavLink to="/about"
        className={({ isActive }) =>
          `p-1 rounded-full transition-all duration-200 ${isActive ? "text-[#c436ff]" : "text-gray-600"
          } hover:text-[#c436ff]`
        }>
        <CiViewTimeline /></NavLink>

      <NavLink to="/profile" className={({ isActive }) =>
        `p-1 rounded-full transition-all duration-200 ${isActive ? "text-[#c436ff]" : "text-gray-600"
        } hover:text-[#c436ff]`
      }>
        <IoPersonOutline /></NavLink>
    </div>
  )
}
