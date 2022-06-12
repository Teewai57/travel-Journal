import React from 'react'
import Navbar from './navbar.js'
import Cards from './card'
import data from './data'
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
          <section className='cards-list'>
            {cards}
          </section>
    </div>
  )
}