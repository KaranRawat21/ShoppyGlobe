import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { resetCart } from "../redux/slice/CartSlice";
import { Link } from "react-router-dom";

export default function Checkout() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cartItems.cart);
  const [orderConfirmedPopUp, setOrderConfirmedPopUp] = useState(false);

  // calculate the total price
  const total = cartItems.reduce((acc, curr) => acc + curr.count * curr.price, 0);

  // confirm order handler
  const handleConfirmOrder = () => {
    setOrderConfirmedPopUp(true);
  };



  return (
    <div className="relative w-[99vw] mb-[80px]">
      <div className="pt-6 p-4 w-full flex flex-col items-center gap-4">
        <h1 className="text-2xl font-semibold">ORDER SUMMARY</h1>

        <div className="flex justify-between font-semibold text-sm w-[350px]">
          <p className="text-center w-1/3">Product</p>
          <p className="text-center w-1/3">Quantity</p>
          <p className="text-center w-1/3">Price</p>
        </div>

        {cartItems.map((item) => (
          <div
            key={item.id}
            className="flex justify-between items-center text-gray-600 text-sm bg-[#ededed] p-2 rounded-md w-[350px]"
          >
            <p className="text-center w-1/3">{item.name}</p>
            <p className="text-center w-1/3">{item.count}</p>
            <p className="text-center w-1/3">${parseInt(item.count * item.price)}</p>
          </div>
        ))}

        <div className="w-[350px] border-t mt-4 p-4 flex flex-col gap-6">
          <div className="flex justify-between">
            <p className="text-xl font-semibold text-red-500">Total:</p>
            <p className="font-semibold">${parseInt(total)}</p>
          </div>

          <div className="flex justify-center">
            <button
              onClick={handleConfirmOrder}
              className="w-full rounded-xl text-white font-semibold bg-[#dc6a54] p-2 cursor-pointer hover:bg-[#c85d48] transition"
            >
              Confirm Order
            </button>
          </div>
        </div>
      </div>

      {/* Order Confirmed PopUp */}
      {orderConfirmedPopUp && (
        <div className="absolute inset-0 bg-white bg-opacity-70 flex items-center justify-center">
          <div className="bg-white p-6 rounded-2xl shadow-xl text-center w-[300px]">
            <h2 className="text-xl font-semibold text-green-600">Order Confirmed!</h2>
            <p className="text-gray-600 my-4 ">Thank you for your purchase.</p>
            <Link
              to="/"
              onClick={() => dispatch(resetCart())}
              className="mt-4 px-4 py-2 bg-[#dc6a54] text-white rounded-lg hover:bg-[#c85d48]"
            >
              Close
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
