import { createGlobalStyle } from 'styled-components';

export const Global = createGlobalStyle`
      *, *::after, *::before {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }
    html {
        font-size: 62.5%;
        font-family: 'Nunito Sans', sans-serif;
        scroll-behavior: smooth;
    }
    body {
        transition: all 0.25s linear;
        text-rendering: optimizeLegibility;
        color: ${({ theme }) => theme.font};
        background-color: ${({ theme }) => theme.primary};
    }
    body::-webkit-scrollbar {
        width: 7px;
    }
    body::-webkit-scrollbar-track {
        -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
        border-radius: 5px;
    }
    body::-webkit-scrollbar-thumb {
        background-color: #334557;
    }
    a {
        text-decoration: none;
    }
    figure {
        margin: 0;
        padding:0;
    }
    h1 {

    }
    h2 {

    }
    h3 {
        font-size: 2rem;
    }
`;
