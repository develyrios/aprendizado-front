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
        color: #2e2e52;
        font-family: 'Open Sans', sans-serif;
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
`