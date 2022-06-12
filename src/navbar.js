import React from 'react'
import './navbar.css'
import logo from './earth.png'

export default function Navbar() {
    return(
        <div className='container-fluid'>
            <img src={logo}></img>
            <h6>My Travel Journal</h6>
        </div>
    )
}