import { Outlet } from "react-router-dom";
import Test from "../Test";
import Header from "./Header";
import BottonRoutes from "./BottonRoutes";
import { useEffect } from "react";
import fetchProducts from "../helperFun/fetchProducts";
import { useDispatch } from "react-redux";
import { setError, setLoading, setProducts } from "../redux/slice/ProductsSlice";


export default function App() {

  const dispatch = useDispatch();


  // fetching data from the api
  useEffect(() => {
    const getAllProducts = async () => {
      const url = 'https://dummyjson.com/products';

      dispatch(setLoading())

      const { data, error } = await fetchProducts(url);

      if (error) {
        dispatch(setError(error));
        console.log(error)
      } else {
        dispatch(setProducts(data));
      }
    }

    getAllProducts();
  }, []);

  return (
    <div className="flex justify-center">
      <div className="w-full max-w-[1500px] flex flex-col items-center relative">
        <Header />
        <Outlet />
        <BottonRoutes />
      </div>
    </div>
  )
}
