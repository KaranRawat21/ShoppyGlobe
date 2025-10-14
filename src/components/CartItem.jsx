
export default function CartItem({ product }) {
  return (
    <div className=" flex items-center  bg-[#f8f8f9] shadow-2xl rounded-xl">

      {/* product image */}
      <div>
        <img
          className="w-[120px]"
          src={product?.thumbnail} />
      </div>

      {/* product details */}
      <div className="w-[50%] flex flex-col items-start md:flex-row md:items-center md:justify-between i gap-2 text-sm p-2">
        <div>
          <p className=" font-bold">{product?.name}</p>
          <p className=" font-semibold">${product?.price}</p>
          {/* total price by count  */}
          <p className=" text-[12px]"><span>Total:</span> ${product.price * product.count}</p>
        </div>



        {/* count increment/decrement */}
        <div className="flex">
          <button className="bg-black px-2 rounded-sm text-white cursor-pointer">-</button>
          <p className="px-4">{product.count}</p>
          <button className="bg-black px-2 rounded-sm text-white cursor-pointer">+</button>
        </div>
      </div>
    </div>
  )
}
