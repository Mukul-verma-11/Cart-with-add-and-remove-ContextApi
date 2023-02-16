import React,{useContext} from 'react'
import {CartContext} from '../contexts/CartContext'
import Card from './Card';

const Cart = () => {

    const cartItems = useContext(CartContext)
    console.log(cartItems);
    

  return (
    <div>

          {cartItems.items.length == 0 && <h1>Cart is Empty !!</h1>}

          {cartItems.items.length !== 0 && cartItems.items.map(
              (item,i) => <Card key={i} index={i} name={item.name} price={item.price} CartButton={true} />
          )}
          
    </div>
  )
}

export default Cart