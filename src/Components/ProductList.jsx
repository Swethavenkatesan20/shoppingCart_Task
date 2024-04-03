// ProductList.js

import React from 'react';

const ProductList = ({ products, addToCart }) => {
  return (
    <div className="product-list">
      <h2 className=' bg-secondary text-white text-center '>Products</h2>
      <div className="row">
        {products.map(product => (
          <div key={product.id} className="col-md-4 mb-4">
            <div className="card h-100">
              <img src={product.image} className="card-img-top" alt={product.name} />
              <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">{product.description}</p>
                <p className="card-text">Rate: {product.rate}</p>
                <button className="btn btn-success" onClick={() => addToCart(product)}>Add to Cart</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;
