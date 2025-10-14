import { useSelector } from "react-redux"
import CartItem from "./CartItem";

export default function Cart() {

  const cartItems = useSelector(state => state.cartItems.products);

  return (
    <div className=" p-4">
      {
        cartItems.map(product => (
          <CartItem product={product} />
        ))
      }
    </div>
  )
}
