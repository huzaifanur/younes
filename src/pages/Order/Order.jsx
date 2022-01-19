
import { useState } from "react";
import {data} from "../../components/data";
import Navbar from "../../components/Navbar/Navbar";
import Product from "../../components/Product/Product";
import './order.css'


export default function Order() {
   const [products,setProducts] = useState(data.products)
  return (
    <main>
      <Navbar />
      
      <div className="order-container">
       {products.map((item)=>
        <Product product={item}/>
       
       )
        }
        <div>
        
        </div>
      </div>
      
    </main>
  );
}
