import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

export default function ProductDetails() {

  const { id } = useParams();
  const product = useSelector(state => state.allProducts?.products[parseInt(id) - 1])
  console.log(product)

  return (
    <div>

    </div>
  )
}
