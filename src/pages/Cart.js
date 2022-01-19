import React from 'react'
import Navbar from '../components/Navbar'
import CartCounter from '../components/CartCounter'

const Cart = () => {
    return (
        <div>
            <Navbar/>
        <div style={{marginTop:'80px', marginLeft:'600px'}}>
           <h2 style={{marginLeft:'50px'}}>Cart Items</h2>
        </div>
        <div className="cartbox">
            
        </div>
        </div>
    )
}

export default Cart
