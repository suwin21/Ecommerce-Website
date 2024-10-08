// src/components/ProductList.js
import React, { useEffect, useState } from 'react';
import ProductItem from './ProductItem';
import { ProductListContainer } from '../styles/ProductListStyles';

const ProductList = ({ searchQuery, filter }) => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProducts = async () => {
            const response = await fetch('https://fakestoreapi.com/products');
            const data = await response.json();
            setProducts(data);
            setLoading(false);
        };
        fetchProducts();
    }, []);

    const filteredProducts = products.filter(product =>
        (filter ? product.category === filter : true) &&
        (product.title.toLowerCase().includes(searchQuery.toLowerCase()))
    );

    if (loading) return <div>Loading...</div>;

    return (
        <ProductListContainer>
            {filteredProducts.map((product) => (
                <ProductItem key={product.id} product={product} />
            ))}
        </ProductListContainer>
    );
};

export default ProductList;
