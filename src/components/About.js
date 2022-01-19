import React from 'react'
import Y1 from '../images/Y1.jpeg'
import video from '../images/younesvideo.mp4'
const About = () => {
    return (
        <div className="aboutus" style={{marginBottom: '10%', marginTop:'5%'}}>
             <h1 style={{fontFamily: '"Times New Roman", Times, serif'}}>About Us</h1>
          <h4 style={{backgroundColor: 'rgb(112, 112, 112)', color: 'white', paddingTop: '0.5%', paddingBottom: '0.5%', fontFamily: 'Caa, Cochin, Georgia, Times, "Times New Roman", serif', fontSize: 'large'}}>A little history about Younes Modern Bakery</h4>
      
            <span style={{fontFamily: 'Georgia, "Times New Roman", Times, serif'}}>
              <div className="abouttxt">
                <span style={{float: 'right'}}><img src={Y1} className="paragraph-light" width={550}/></span>
                <p style={{fontSize: 'large', paddingLeft: '3%', width: '50%', paddingTop:'3%', paddingBottom: '3%', backgroundColor: 'rgba(211, 11, 11, 0.623)'}}> Younes Modern Bakery was small family business, father and son, founded by Ismail Ibrahim Younes, <br />in the late 1800's . The business was then handed over to his son, Ali Ismail Younes. Asaad Ali Younes is now the owner of the bakery after he inherited it from his father. <br />The current building was recently renovated in 2008.
                  <br />The bakery is one of the main distributors for most convenience stores in South Lebanon.
                  <br />Producing over 400 kg of baked goods every hour thanks to advanced technology and heavy machinery, they offer 24 hour services that slip up into 4 8-hour shifts a day, and provide baked good of all kids. From breads, to pastries, to Arab and non Arab sweets, cakes, and snacks.
                  <br />All their recipes were created by home cooks and house wives, and shared from generation to generation
                  <br />Y.M.B. abides by several policies to ensure that there is enough produce available at all times for anyone and everyone on a daily basis.
                </p>
              </div> 
              <video src={video} controls="true" style={{paddingTop:'50px', marginLeft:'250px'}}></video>
            </span></div>
    )
}

export default About
