import './product.css'
export default function Product({ product }) {
  console.log(product.image)
  return (
    <>
      <div className="card">
        <img src={product.image} alt="" style={{ width: '100%', height: '100% ' }} />
        <h2 className="order-product-name">{product.name}</h2>
        <p className="price"> {product.price}</p>
        <p>orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has</p>
        <p>
          <button>Add to Cart</button>
        </p>
      </div>
    </>
  )
}
