import React from 'react'
import styles from '../styles//Navbar.css'
import cart from '../images/cart.jpg'
import logowood from '../images/logowood.jpeg'

export default function Navbar() {
  return (
    <nav>
      <ul className="list">
      <a href="/" className="logo-link" aria-label="Main" style={{marginRight:'720px', marginBottom:'10px'}}><img src={logowood} width={85} alt="" className="logo-image" /></a>     
          <a href='/Menu'><li  className="items">Menu </li></a>
          <a href='/Order'><li className="items">Order </li></a> 
          <a href='/SpecialRequests'><li className="items">Special Requests </li></a>
          <a href='/Cart'> <li className="items"><img src={cart} width={'25px'} />Cart</li></a>
        </ul>
    </nav>
  )
 
}