
export default function CartItem({ product }) {
  return (
    <div>

      {/* product image */}
      <div>
        <img src={product?.thumbnail} />
      </div>
    </div>
  )
}
