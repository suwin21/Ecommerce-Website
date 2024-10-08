// src/styles/GlobalStyles.js
import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    body {
        margin: 0;
        padding: 0;
        font-family: 'Arial', sans-serif; /* Choose a clean, modern font */
        background-color: #f8f9fa; /* Light gray background */
        color: #212529; /* Dark gray text color */
    }

    h1, h2, h3, h4 {
        color: #007bff; /* Bright blue for headings */
    }

    a {
        color: #007bff; /* Bright blue for links */
        text-decoration: none; /* Remove underline */
    }

    a:hover {
        text-decoration: underline; /* Underline on hover */
    }

    button {
        background-color: #007bff; /* Bright blue for buttons */
        color: white; /* White text */
        border: none;
        border-radius: 5px;
        padding: 10px 20px;
        cursor: pointer;
        transition: background-color 0.3s;
    }

    button:hover {
        background-color: #0056b3; /* Darker blue on hover */
    }
`;

export default GlobalStyles;
