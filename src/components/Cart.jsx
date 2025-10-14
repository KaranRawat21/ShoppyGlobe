import { useSelector } from "react-redux"
import CartItem from "./CartItem";

export default function Cart() {

  const cartItems = useSelector(state => state.cartItems.cart);

  return (
    <>
      <h1 className=" text-4xl text-[#515050] py-5 font-bold">CART</h1>
      <div
        className=" p-4 w-full grid gap-4 grid-cols-1 md:grid-cols-2 mb-[80px]">
        {
          cartItems.map(product => (
            <CartItem key={product.id} product={product} />
          ))
        }
      </div>
    </>
  )
}
