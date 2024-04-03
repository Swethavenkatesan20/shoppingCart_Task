// Cart.js

import React from 'react';

const Cart = ({ cart, removeFromCart }) => {
  // Calculate total rate
  const totalRate = cart.reduce((total, product) => total + parseFloat(product.rate), 0).toFixed(2);

  return (
    <>
      <h2 className='bg-secondary text-white text-center border'>Cart</h2>
      <ul className="list-group">
        {cart.map(product => (
          <li key={product.id} className="list-group-item">
            <span>{product.name} - Rate: {product.rate}</span>
            <button className="btn btn-warning" onClick={() => removeFromCart(product.id)}>Remove from Cart</button>
          </li>
        ))}
      </ul>
      <p>Total Rate: {totalRate}</p>
    </>
  );
}

export default Cart;
