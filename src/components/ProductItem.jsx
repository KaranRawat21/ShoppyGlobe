import { HashLoader } from "react-spinners"

export default function ProductItem({ product, loading }) {


  return (
    <div
      key={product?.id}
      className=" w-[160px] md:w-[190px] md:min-h-[300px] bg-[#f8f8f9] p-4 rounded-2xl shadow-xl cursor-pointer">

      <div className=" border-b border-[#94979a]">
        <div>

          <div className=" flex justify-center items-center min-h-[130px]  md:h-[160px] ">
            {
              loading ? <HashLoader /> : <img
                src={product?.thumbnail}
                className="" />
            }
          </div>

        </div>
        <div className=" flex flex-col gap-2 pb-3">
          <h1 className=" font-bold text-[12px] md:text-[14px] leading-[20px] truncate  ">{product?.title}</h1>
          <p className=" text-[10px] font-semibold">Category:
            <span className=" bg-amber-300 p-1 ml-1 rounded-md">{product?.category}</span></p>
        </div>
      </div>

      <div className=" pt-2 flex flex-col md:flex-row md:items-end md:justify-between gap-2 md:gap-0">
        <div className=" flex md:flex-col gap-2">
          <p className=" font-bold text-[12px] md:text-[16px]">$ {product?.price}</p>
          <p className=" w-fit px-2 flex items-center rounded-sm bg-red-500 text-white font-semibold text-[10px] md:text-[12px]">{parseInt(product?.discountPercentage)}% OFF</p>
        </div>

        <p className=" text-[11px] font-medium">In Stock: {product?.stock}</p>
      </div>
    </div>
  )
}
