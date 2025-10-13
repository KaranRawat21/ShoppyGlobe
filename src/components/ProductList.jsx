import { useSelector } from "react-redux";
import ProductItem from "./ProductItem";

export default function ProductList() {

  const products = useSelector(state => state.allProducts.products);

  const productLoading = useSelector(state => state.allProducts.loading);


  return (
    <div className=" pt-12 Sp-2 flex justify-center mb-[80px] ">
      <div className="grid gap-6 
                  grid-cols-2 
                  sm:grid-cols-3 
                  md:grid-cols-3 
                  lg:grid-cols-5 
                  xl:grid-cols-6">
        {
          products.map(product => (
            <ProductItem product={product} key={product.id} />
          ))
        }
      </div>
    </div>
  )
}
