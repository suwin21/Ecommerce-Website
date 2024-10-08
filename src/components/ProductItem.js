// src/components/ProductItem.js
import React from 'react';

const ProductItem = ({ product }) => {
    return (
        <div className="product-item">
            <img
                src={product.image}
                alt={product.title}
                loading="lazy" // Lazy loading
                style={{ width: '100%', height: 'auto' }} // Responsive
            />
            <h3>{product.title}</h3>
            <p>{product.price}</p>
        </div>
    );
};

export default ProductItem;
