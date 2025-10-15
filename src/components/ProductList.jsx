import { useSelector } from "react-redux";
import ProductItem from "./ProductItem";
import SearchBar from "./SearchBar";
import NotFound from "./NotFound";
import ErrorPage from "./ErrorPage";

export default function ProductList() {

  const products = useSelector(state => state.allProducts.products);

  const productLoading = useSelector(state => state.allProducts.loading);

  const searchTerm = useSelector(state => state.allProducts.searchTerm);

  const error = useSelector(state => state.allProducts.error);

  console.log(error);

  // ✅ Filter products by search
  const filteredProducts = products.filter(product =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );


  return (
    <div className="w-full pt-12 Sp-2 flex flex-col mb-[80px] items-center ">

      {
        !error ?
          <>
            <SearchBar />
            <div className="grid gap-6 
                  grid-cols-2 
                  sm:grid-cols-3 
                  md:grid-cols-3 
                  lg:grid-cols-5 
                  xl:grid-cols-6
                  ">
              {
                filteredProducts.length > 0 ? (
                  filteredProducts.map(product => (
                    <ProductItem product={product} key={product.id} />
                  ))
                ) : (
                  <div className="flex justify-center items-center w-full col-span-full">
                    {!error ? <p className="text-gray-500 text-lg font-medium">
                      No products found!
                    </p> : ""}
                  </div>
                )
              }

            </div>
          </> : <ErrorPage />
      }


    </div>
  )
}
