import React from 'react'
import Navbar from '../components/Navbar'
import Product from '../components/Product'
import data from '../components/data'
import Contact from '../components/Contact'

export default function Order(props) {

  return (
    <main className="block col-2">
      <h2>Products</h2>
      <Navbar/>
      <div className="row">
       
   </div>
      <div>
          <Contact/>
      </div>
    </main>
  );
}