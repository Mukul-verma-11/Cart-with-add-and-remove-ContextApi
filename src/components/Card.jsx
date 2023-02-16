import React,{useContext} from 'react'
import {CartContext} from '../contexts/CartContext'
import './style.css'

const Card = ({ name, price ,CartButton ,index}) => {
    
    const cartItems = useContext(CartContext)

    const handleRemove = index => {
        let arr = []

        console.log(index);

        arr = cartItems.items.filter((item,i) => i != index)


        cartItems.setItems(arr)
    }

  return (
    <div className='box' >


        <div className="card-box">
              <h2>{name}</h2>
              <small>Price : ${price}</small>

              {
               CartButton !== true &&   
                  <button onClick={() => cartItems.setItems([...cartItems.items,{name:name,price:price}])} >Add to Cart</button>
              }
              {
               CartButton === true &&   
                  <button onClick={() => handleRemove(index)}  >Remove from Cart</button>
              }
        </div>

          
    </div>
  )
}

export default Card