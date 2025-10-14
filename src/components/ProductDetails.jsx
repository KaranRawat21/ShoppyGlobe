import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import Rating from "./Rating";

export default function ProductDetails() {

  const { id } = useParams();
  const product = useSelector(state => state.allProducts?.products[parseInt(id) - 1])
  console.log(product)

  return (
    <div className="  mb-[80px] flex flex-col md:flex-row">

      {/* product image */}
      <div>
        <img src={product?.images[0]} />
      </div>


      {/* -------------PRODUCT DETAILS-------------- */}
      <div className=" p-4 flex flex-col gap-4 ">
        {/* product title */}
        <h1 className=" text-2xl font-bold">{product?.title}</h1>


        {/* price and discount Percentage */}
        <div className="flex gap-4 items-center font-semibold text-[#151414]" >
          <p className="text-xl">${product?.price}</p>
          <p className=" text-white bg-red-500 px-1 rounded-sm">{parseInt(product?.discountPercentage)}% OFF</p>
        </div>

        {/* ratings */}
        <div className=" text-sm text-[#a1a2a3]">
          <Rating rating={product?.rating} />
          <p>{`(${product?.reviews.length} reviews)`}</p>
        </div>

        {/* product description */}
        <div className=" text-[#565656]">
          <p>{product?.description}</p>
        </div>

        {/* Additional details */}

        <div className="text-[13px] pb-6 border-b-1 border-[#c2c2c4]">
          <p className=" text-xl font-semibold text-[#464645] mb-3">Additional Details</p>
          <p><span className=" font-medium text-[15px]">Warranty:</span> {product?.warrantyInformation}</p>
          <p><span className=" font-medium text-[15px]">Shipping:</span> {product?.shippingInformation}</p>
        </div>

        {/* add to cart button */}
        <div>
          <button className=" w-full bg-[#dc6a54] p-3 rounded-2xl text-white font-semibold cursor-pointer ">ADD TO CART</button>
        </div>


      </div>


    </div>
  )
}
