import React from 'react'
import Navbar from './navbar.js'
import Cards from './card'
import data from './data'
import Sort from './sort'
import './App.css'


export default function App() {
  const cards = data.map(item => {
    return (
        <Cards
            key={item.id}
            item={item}
        />
    )
})      
  return(
    <div>
          <Navbar />
          <Sort />
          <section className='cards-list container'>
            <div className='row justify-content-center mt-5'>
            {cards}
            </div>
          </section>
    </div>
  )
}