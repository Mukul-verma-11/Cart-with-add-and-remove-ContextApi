import React from 'react'
import Card from './Card'
import Cart from './Cart'
import './style.css'
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>

          <h2>Home</h2> <br />
          <Link to='cart' >Click here to go on Cart</Link>
        <Card name={'MacBook'} price={900} />
        <Card name={'AirPods'} price={142} />
          <Card name={'Mouse'} price={42} />
          
    </div>
  )
}

export default Home
