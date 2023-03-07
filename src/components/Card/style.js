import styled from "styled-components";

export const Container = styled.div`
    min-width: 300px;
    padding: 16px;

    backdrop-filter: blur(4px) saturate(180%);
    -webkit-backdrop-filter: blur(4px) sturate(180%);
    background-color: rgba(255, 255, 255, 0.25);
    border-radius: 12px;
    border: 1px solid rgba(209, 213, 219, 0.3);

    display: flex;
    align-items: center;
    flex: 1;
    flex-direction: column;
    row-gap: 16px;
`