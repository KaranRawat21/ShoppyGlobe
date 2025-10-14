import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Rating from "./Rating";
import { addToCart } from "../redux/slice/CartSlice";

export default function ProductDetails() {

  const { id } = useParams();
  const product = useSelector(state => state.allProducts?.products[parseInt(id) - 1]);
  const cartItems = useSelector(state => state.cartItems.cart);
  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    dispatch(addToCart({ id: product?.id, name: product?.title, thumbnail: product?.thumbnail, price: product?.price }))
  }

  //Checks if the product is already added to cart or not
  const alreadyInCard = cartItems?.find(item => item?.id === product?.id);

  console.log(alreadyInCard)


  return (
    <div className=" md:pt-4  mb-[80px] flex flex-col md:flex-row">

      {/* product image */}
      <div>
        <img src={product?.images[0]} />
      </div>


      {/* -------------PRODUCT DETAILS-------------- */}
      <div className=" p-4 flex flex-col md: justify-center gap-4 lg:gap-6 ">
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
        <div className=" lg:w-[80%] text-[#565656]">
          <p>{product?.description}</p>
        </div>

        {/* Additional details */}

        <div className="text-[13px] pb-6 border-b-1 border-[#c2c2c4]">
          <p className=" text-xl font-semibold text-[#464645] mb-3">Additional Details</p>
          <p><span className=" font-medium text-[15px]">Warranty:</span> {product?.warrantyInformation}</p>
          <p><span className=" font-medium text-[15px]">Shipping:</span> {product?.shippingInformation}</p>
        </div>

        {/* add to cart button */}
        {
          !alreadyInCard ?
            <div>
              <button
                onClick={() => handleAddToCart(product)}
                className=" w-full lg:w-[60%] bg-[#dc6a54] p-3 rounded-2xl text-white font-semibold cursor-pointer ">ADD TO CART</button>
            </div>
            : <div className="flex text-3xl">
              <button className="bg-black px-4 rounded-sm text-white cursor-pointer">-</button>
              <p className="px-6">{alreadyInCard.count}</p>
              <button className="bg-black px-4 rounded-sm text-white cursor-pointer">+</button>
            </div>
        }



      </div>


    </div>
  )
}
