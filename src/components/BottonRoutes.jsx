import { NavLink } from "react-router-dom";
import { GoHome } from "react-icons/go";
import { AiOutlineProduct } from "react-icons/ai";
import { IoPersonOutline } from "react-icons/io5";
import { CiViewTimeline } from "react-icons/ci";

export default function BottonRoutes() {
  return (
    <div className=" lg:hidden fixed w-full flex p-4 justify-around bottom-0 shadow-[0_-4px_6px_rgba(0,0,0,0.1)] text-xl">
      <NavLink to="/"><GoHome /></NavLink>
      <NavLink to="/products"><AiOutlineProduct /></NavLink>
      <NavLink to="/about"><CiViewTimeline /></NavLink>
      <NavLink to="/profile"><IoPersonOutline /></NavLink>
    </div>
  )
}
