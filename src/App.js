import React, { Component } from 'react'
import Navbar from './navbar.js'
import Cards from './card'
import data from './data'
import Sort from './sort'
import './App.css'



 class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       users : data,
       cardData : []
    }
  
  }
   componentDidMount(){ 
    this.setState({ 
      cardData : data
    })
   }

  handleUsers = (event) => { 
    console.log(event.target.value)
   let cardDatas;
   if(event.target.value === 'all'){ 
    cardDatas = this.state.users
   }else{ 
    cardDatas = this.state.users.filter((user) => user.gender === event.target.value)
   }
   this.setState({
    cardData : cardDatas
   },
   () => console.log(this.state.cardData))
  }
  
  render() {
    const cards = this.state.cardData.map(item => {
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
            <Sort handler = { this.handleUsers}/>
            <section className='cards-list container'>
              <div className='row justify-content-center mt-5'>
              {cards}
              </div>
            </section>
      </div>
    )
  }
}

export default App


