import React from 'react'
import logo from '../images/logo.jpeg'

const Contact = () => {
    return (
        <div>
            <p className="contact" style={{fontSize: 'xx-large', textAlign: 'center', color: 'rgba(211, 11, 11, 0.623)', fontFamily: 'Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif'}}>Contact Us</p>
          <div className="contactus" style={{fontSize: 'large', fontFamily: '"Lucida Sans Unicode", Geneva, Verdana, sans-serif', marginLeft: '5%', marginRight: '5%', paddingBottom: '12%', backgroundColor: 'rgb(44, 42, 41)'}}>
            <div className="ttl" style={{float: 'left', paddingLeft: '2%'}}>
              <img src={logo} style={{paddingTop:'5%'}}/></div>
            <table style={{paddingTop: '2%', width: '60%'}}>
              <tbody><tr>
                  <td style={{paddingLeft: '5%', color:'rgba(211, 11, 11, 0.623)'}}>
                    Email Us
                  </td>
                  <td style={{paddingLeft: '5%', color:'rgba(211, 11, 11, 0.623)'}}>
                    Contact Us
                  </td>
                  <td style={{paddingLeft: '14%', color:'rgba(211, 11, 11, 0.623)'}}>
                    Visit Us
                  </td>
                </tr>
                <tr>
                  <td style={{paddingLeft: '5%'}}><a href="mailto:younesmodernbakery.com" style={{color:'white'}}>
                      <span className="mail">Send an E-mail</span></a></td>
                  <td style={{paddingLeft: '5%'}}><a style={{color:'white'}} id="Facebook" href="https://www.facebook.com/pages/category/Community/Younis-Modern-Bakery-213016272223230/">Facebook</a>
                    <a id="LandLine" href="tel:+96107532358" style={{color:'white'}}><br />+96107532358</a>
                    <a href="tel:+96103652812" style={{color:'white'}}><br />+96103652812</a></td>
                  <td style={{paddingLeft: '7%', color:'white'}}><a id="Go-To-YMB" href="https://www.google.com/maps/place/%D8%A3%D9%81%D8%B1%D8%A7%D9%86+%D9%8A%D9%88%D9%86%D8%B3+%D8%A7%D9%84%D8%AD%D8%AF%D9%8A%D8%AB%D8%A9+Youness+Modern+Bakery%E2%80%AD/@33.4285042,35.4585537,17z/data=!3m1!4b1!4m5!3m4!1s0x151eed6329cfa98f:0x3c9725a850070ac1!8m2!3d33.4284997!4d35.4607424" 
                  className="link" style={{color:'white'}}>Go To Maps</a>
                  </td>
                </tr>
              </tbody></table>
          </div>
        </div>
    )
}

export default Contact
