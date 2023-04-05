import styled from "styled-components";

export const Button = styled.button`
    border: 0;
    border-radius: 8px;
    padding: 4px 8px;
    transition: 250ms;

    :hover {
        transform: scale(1.1);
    }
    
    :active {
        transform: scale(0.75);
    }
`