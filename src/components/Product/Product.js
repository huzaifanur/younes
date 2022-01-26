import './product.css'
export default function Product({ product }) {
  return (
    <>
      <div class="card">
        <img
          src="https://images.pexels.com/photos/209206/pexels-photo-209206.jpeg?cs=srgb&dl=pexels-pixabay-209206.jpg&fm=jpg"
          alt="Denim Jeans"
          style={{ width: '100%' }}
        />
        <h2 className="order-product-name">{product.name}</h2>
        <p class="price"> {product.price}</p>
        <p>orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has</p>
        <p>
          <button>Add to Cart</button>
        </p>
      </div>
    </>
  )
}
