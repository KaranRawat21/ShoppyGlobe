import { Link, useLocation } from "react-router-dom";
import products1 from "../assets/images/products.png";
import products2 from "../assets/images/products2.png";


export default function Home() {


  return (
    <div className="bg-[#eaeaea] md:bg-white flex flex-col md:flex-row ">

      <div>
        <img src={products1} className="md:hidden" />
        <img src={products2} className=" hidden md:block min-w-[350px] lg:max-w-[600px]" />
      </div>

      <div className="bg-[#eaeaea] md:max-w-[800px] md:bg-white p-4 pt-10 pr-10 flex  flex-col gap-6 md:gap-8 pb-[80px] md:justify-center">
        <h1 className=" text-[#020402] text-3xl lg:text-4xl font-semibold lg:font-bold">Everything You Love in One Place</h1>

        <p className=" text-[#717272]">Step into the latest trends and let your style speak for you. Whether it’s casual days, party nights, or everyday glam — we’ve got everything to keep your wardrobe fresh and fabulous. Explore our exclusive range of clothes, shoes, accessories, and beauty must-haves made just for you.</p>

        <Link
          to="/products"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className=" w-fit p-2 px-6 bg-red-500 text-white font-semibold rounded-md ">BUY NOW</Link>
      </div>

    </div>
  )
}
