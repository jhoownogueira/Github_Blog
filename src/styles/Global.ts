import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

* {
        padding: 0;
        margin: 0;
        list-style: none;
        text-decoration: none;
        box-sizing: border-box;
    }
    html {
        font-family: 'Roboto', sans-serif;
        @media (max-width: 1290px) {
            font-size: 93.75%; 
        }
        @media (max-width: 1000px) {
            font-size: 87.50%; 
        }
    }
    body {
        -webkit-font-smoothing: antialiased;
        background: ${(props) => props.theme["base-background"]};
    }
    body, input, textarea, button {
        font-family: 'Nunito', sans-serif;
        font-weight: 400;
        font-size: 1rem;
    }
    button, a {
        cursor: pointer;
    }
    img {
        display: block;
        max-width: 100%;
    }
    [disabled] {
        opacity: 0.6;
        cursor: not-allowed;
    }
    
    *::-webkit-scrollbar {
      width: 4px;
    }
    *::-webkit-scrollbar-track {
      background: white;
    }
    *::-webkit-scrollbar-thumb {
      background-color: ${(props) => props.theme.blue};
      border-radius: 20px;
    }

`;
