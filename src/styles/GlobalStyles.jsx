// Libraries & Packages
import { createGlobalStyle } from "styled-components"

// Styles & Styled Components

export const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        font-size: 62.5%;
    }

    html, 
    body {
        width: 100%;
        height: 100%;
    }

    body {
        line-height: 1.5;
        font-size: 1.6rem;
        overflow-x: hidden;
    }

    h1, 
    h2,
    h3,
    h4, 
    h5, 
    h6,
    button {
        color: hsl(0, 0%, 25%);
        font-family: "Fira Sans", sans-serif;   
    }

    body,
    p,
    span,
    input,
    li,
    a,
    select,
    option {
        color: hsl(0, 0%, 40%);
        font-family: "Open Sans", sans-serif;
    }
`
