import React from 'react'

import { Navbar, About, Join, Contact } from './components'
// import {  } from './containers'
import './App.css'
import {Routes, Route} from 'react-router-dom'

const App = () => {
    return (
        <div className= 'bulldog_rocketry_website'>

            <div className= 'gradient__navbar'>
                <Navbar />
            </div>
            
            <Routes>

                <Route path='' element={
                    <About />
                } />

                <Route path='/home' element={
                    <About />
                } />
                

                <Route path='/join' element={<Join />} />


                <Route path='/contact' element={<Contact />} />


            </Routes>

            <div className='gradient__contact'>
                <Contact />
            </div>

        </div>
    )
}

export default App