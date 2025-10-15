import { Link, useLocation } from "react-router-dom";
import products1 from "../assets/images/products.png";
import products2 from "../assets/images/products2.png";


export default function Home() {


  return (
    <div className="bg-[#eaeaea]  h-screen">

      <div>
        <img src={products1} className="md:hidden" />
      </div>

      <div className="bg-[#eaeaea] p-4 pt-10 pr-10 flex  flex-col gap-6 pb-[80px]">
        <h1 className=" text-[#020402] text-3xl font-semibold">Everything You Love in One Place</h1>

        <p className=" text-[#717272]">Step into the latest trends and let your style speak for you. Whether it’s casual days, party nights, or everyday glam — we’ve got everything to keep your wardrobe fresh and fabulous. Explore our exclusive range of clothes, shoes, accessories, and beauty must-haves made just for you.</p>

        <Link
          to="/products"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className=" w-fit p-2 px-6 bg-red-500 text-white font-semibold rounded-md ">BUY NOW</Link>
      </div>

    </div>
  )
}
