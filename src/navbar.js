import React from 'react'
import './navbar.css'
import logo from './earth.png'

export default function Navbar() {
    return(
        <div className='container-fluid p-3'>
            <div className='row justify-content-center '>
            <img src={logo} alt="earth"></img>
            <h6 className='mx-2'>My Travel Journal</h6>
            </div>
        </div>
    )
}