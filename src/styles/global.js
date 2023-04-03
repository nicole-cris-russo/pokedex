import { createGlobalStyle } from "styled-components";

/* 

<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet">
 
*/

export default createGlobalStyle`
    :root {
        --color-white: #FAFAFA;
        --color-red: #E83838;
        --color-gray: #D9D9D9;
        --color-black: #1E1E1E;
    }

    * {
        margin: 0;
        padding: 0;
        list-style-type: none;
        text-decoration: none;
        font-family: 'Nunito', sans-serif;
        box-sizing: border-box;
    }

    h1, h2, h3, h4, h5, h6, p, span, strong, a {
        font-size: 16px;
    }

    body, html {
        width: 100%;
        height: 100vh;
        background: #D9D6D6;
    }
    
    button {
    cursor: pointer;}
`;
