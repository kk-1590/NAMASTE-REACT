import React from 'react';
import { useSelector } from 'react-redux';
import FoodItem from './FoodItem';
import { clearCart } from '../utils/cartSlice';
import { useDispatch } from 'react-redux';

const Cart = () => {

    const cartItems = useSelector(store => store.cart.items);
    // console.log(cartItems);

    const dispatch = useDispatch();
    const handleClearCart = () => {
        dispatch(clearCart())
    }

    // const store = useSelector(store => store);

  return (
    <div>
        <h1 className='font-bold text-3xl m-5'>Cart Items - {cartItems.length}</h1>
        <button className='btn-green-100 p-2 m-5' onClick={() => handleClearCart()}>Clear Cart</button>
        {/* <h1 className='font-bold text-3xl'>Cart Items - {cartItems.length}</h1> */}
        {}
        {/* <FoodItem {...cartItems[0]}/> */}
        <div className='flex'>
        {cartItems.map(item => <FoodItem key={item.id} {...item}/>)}
        </div>
        {/* <FoodItem /> */}
        {/* <FoodItem /> */}
    </div>
  )
}

export default Cart