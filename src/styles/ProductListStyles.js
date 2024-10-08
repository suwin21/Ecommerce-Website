// src/styles/ProductListStyles.js
import styled from 'styled-components';

export const ProductListContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    padding: 20px;
    justify-content: center; /* Center the products */
`;

export const ProductItemContainer = styled.div`
    border: 1px solid #ddd;
    border-radius: 8px;
    overflow: hidden;
    width: 200px; /* Fixed width */
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    transition: transform 0.2s;

    &:hover {
        transform: scale(1.05); /* Scale on hover */
        box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2); /* Stronger shadow on hover */
    }

    img {
        width: 100%;
        height: 150px; /* Fixed height for images */
        object-fit: cover; /* Ensure the images fit nicely */
    }

    h3 {
        font-size: 1.2em;
        margin: 0.5em;
        color: #007bff; /* Bright blue for product title */
    }

    p {
        margin: 0.5em;
        color: #6c757d; /* Gray for price */
    }
`;
