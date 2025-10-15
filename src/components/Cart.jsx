import { useSelector } from "react-redux"
import CartItem from "./CartItem";
import { Link } from "react-router-dom";
import { useEffect } from "react";

export default function Cart() {

  const cartItems = useSelector(state => state.cartItems.cart);

  //Save cart items in localStorage
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);


  return (
    <>
      <h1 className=" text-3xl text-[#515050] py-5 font-bold">CART</h1>

      {
        cartItems.length > 0 ?
          <div
            className=" p-4 w-full grid gap-4 grid-cols-1 md:grid-cols-2 mb-[80px]">
            {
              cartItems.map(product => (
                <CartItem key={product.id} product={product} />
              ))
            }
          </div> :
          <div className="p-10">
            <p>Cart is Empty!</p>
          </div>
      }

      {cartItems.length > 0 && <Link
        to="/checkout/details"
        className=" bg-[#dc6a54] px-10 py-3 font-bold text-white rounded-md cursor-pointer mb-[80px] ">Checkout</Link>}


    </>
  )
}
