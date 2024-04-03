import React, { useState, useEffect } from 'react';
import Cart from './Cart';
import ProductList from './ProductList';

export const ShoppingCart=()=>{

    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetchProducts();
      }, []);

      const fetchProducts = async () => {
        try {
          const response = await fetch('https://65decd0dff5e305f32a07be9.mockapi.io/user1');
          if (!response.ok) {
            throw new Error('Failed to fetch products');
          }
          const data = await response.json();
          setProducts(data);
        } catch (error) {
          console.error('Error fetching products:', error.message);
        }
      };
    
      const addToCart = (product) => {
        setCart([...cart, product]);
      };
    
      const removeFromCart = (productId) => {
        const updatedCart = cart.filter(item => item.id !== productId);
        setCart(updatedCart);
      };
    


    return(
        <>
        <div className="container border">
      <h1 className='p-3 mb-2 bg-secondary text-white text-center border'>Shopping Cart</h1>
      <div className="row">
        <div className="col-md-8">
          <ProductList
            products={products}
            addToCart={addToCart}
            removeFromCart={removeFromCart}
          />
        </div>
        <div className="col-md-4">
          <Cart cart={cart} removeFromCart={removeFromCart} />
        </div>
      </div>
    </div>
        
        </>
    )
}