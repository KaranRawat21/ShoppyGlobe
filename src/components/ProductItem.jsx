import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom"
import { addToCart, decrement, increment } from "../redux/slice/CartSlice";
export default function ProductItem({ product }) {

  const cartItems = useSelector(state => state.cartItems.cart);

  const alreadyInCard = cartItems?.find(item => item?.id === product?.id);

  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    dispatch(addToCart({ id: product?.id, name: product?.title, thumbnail: product?.thumbnail, price: product?.price }))
  }

  const handleIncrement = (product) => {
    dispatch(increment({ id: product.id }))
  }

  const handleDecrement = (product) => {
    dispatch(decrement({ id: product.id }))
  }



  return (
    <div
      className=" w-[160px] md:w-[190px] md:min-h-[300px] bg-[#f8f8f9] p-4 rounded-2xl shadow-xl cursor-pointer flex flex-col gap-4 hover:scale-105 transition-transform duration-200">
      <Link to={`/products/${product.id}`}>
        <div className=" border-b border-[#94979a]">
          <div>

            <div className=" flex justify-center items-center min-h-[130px]  md:h-[160px] ">
              <img
                src={product?.thumbnail} />
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
      </Link>

      {/* add to cart button */}
      {
        !alreadyInCard ?
          <div>
            <button
              onClick={() => handleAddToCart(product)}
              className=" w-full bg-black p-1 rounded-xl text-white font-semibold cursor-pointer text-sm ">ADD TO CART</button>
          </div>
          : <div className="flex">
            <button
              onClick={() => handleDecrement(product)}
              className="bg-black px-4 rounded-sm text-white cursor-pointer">-</button>
            <p className="px-4 w-[100px] text-center">{alreadyInCard.count}</p>
            <button
              onClick={() => handleIncrement(product)}
              className="bg-black px-4 rounded-sm text-white cursor-pointer">+</button>
          </div>
      }
    </div>
  )
}
