import React from 'react'
import styles from '../styles/Welcome.css';


const Welcome = () => {
    return (
        <div style={{marginLeft:'3%', marginRight:'3%'}}>
              <title>Younes Modern Bakery - Home</title>
              
          <div className="header">
            <div className="welbox">
              <span style={{fontFamily: '"Montserrat"', backgroundColor: 'rgba(0, 0, 0, 0.493)'}}> <h1>Welcome To Younes Modern Bakery</h1></span>
              <h6><br /><i>where all your baked goods dreams come true</i></h6>
            </div>
            <div className="shoppingbtn">
              <a href="/Order"><button id="startshopping">START SHOPPING </button></a>
            </div>
          </div> 
          </div>
    )
}

export default Welcome
