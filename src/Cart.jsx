// src/components/Cart.jsx
import React from 'react';
import { useAppContext } from './context/AppContext';

const Cart = () => {
  const { state, dispatch } = useAppContext();
  const { cart } = state;

  const removeFromCart = (id) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: { id } });
  };

  if (cart.length === 0) return <p>Your cart is empty</p>;

  return (
    <div>
      <h2>Shopping Cart</h2>
      <ul>
        {cart.map((item) => (
          <li key={item.id}>
            <h3>{item.name}</h3>
            <p>Price: ${item.price}</p>
            <img src={item.image} alt={item.name} width="100" />
            <button onClick={() => removeFromCart(item.id)}>Remove</button>
          </li>
        ))}
      </ul>
      <p>Total: ${cart.reduce((acc, item) => acc + item.price, 0)}</p>
    </div>
  );
};

export default Cart;
