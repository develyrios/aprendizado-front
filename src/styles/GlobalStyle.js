import { createGlobalStyle } from "styled-components";
import background from "../assets/pearl-sunset.svg";

export default createGlobalStyle`
    * {
    margin:0;
    padding: 0;
    outline:0;
    box-sizing: border-box;
    }

    html{
    width: 100%;
    height: 100%;
    }

    button {
    cursor: pointer;
    }

    body, input, button, textarea {
        font-family: 'Open Sans', sans-serif;
        color: #fff;
    }

    body {
        background-image: url(${background});
        background-repeat: no-repeat;
        background-size: cover;
        background-attachment: fixed;

        margin: 0 auto;
        min-height: 100vh;
        padding: 16px 0;
        width: fit-content;
    }

    #root {
        display: flex;
        flex-direction:column;
        row-gap: 16px;
        align-items: center;
    }

    .glassMorph {
        backdrop-filter: blur(16px) saturate(180%);
        -webkit-backdrop-filter: blur(16px) saturate(180%);
        background-color: rgba(255, 255, 255, 0.25);
        border-radius: 12px;
        border: 1px solid rgba(209, 213, 219, 0.3);
    }
`