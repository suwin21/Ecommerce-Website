// src/components/Filter.js
import React from 'react';

const Filter = ({ filter, setFilter }) => {
    return (
        <select onChange={(e) => setFilter(e.target.value)} value={filter}>
            <option value="">All Categories</option>
            <option value="electronics">Electronics</option>
            <option value="jewelery">Jewelery</option>
            <option value="men's clothing">Men's Clothing</option>
            <option value="women's clothing">Women's Clothing</option>
        </select>
    );
};

export default Filter;
