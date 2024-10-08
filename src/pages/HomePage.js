// src/pages/HomePage.js
import React from 'react';
import ProductList from '../components/ProductList';
import SearchBar from '../components/SearchBar';
import Filter from '../components/Filter';

const HomePage = () => {
    const [searchQuery, setSearchQuery] = React.useState('');
    const [filter, setFilter] = React.useState('');

    return (
        <div>
            <h1>Product Listing</h1>
            <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
            <Filter filter={filter} setFilter={setFilter} />
            <ProductList searchQuery={searchQuery} filter={filter} />
        </div>
    );
};

export default HomePage;
