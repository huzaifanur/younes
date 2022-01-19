import React from 'react'
import Navbar from '../components/Navbar'
import Welcome from '../components/Welcome'
import About from '../components/About'
import Contact from '../components/Contact'
const Main = () => {
    return (
        <div>
            <Navbar/>
            <Welcome/>
            <About/>
            <Contact />
        </div>
    )
}

export default Main
