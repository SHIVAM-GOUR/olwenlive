import React from 'react'
import Distributors from './Distributors'
import Products from './Products'
import Slider from './Slider'

function Home() {
  return (
    <div>
        <Slider/>
        <Distributors/>
        <Products/>
    </div>
  )
}

export default Home