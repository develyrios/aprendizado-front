import styled from "styled-components";

export const ModalContainer = styled.div`
    width: 100%;
    height: 100%;

    backdrop-filter: blur(25px) saturate(180%);
    -webkit-backdrop-filter: blur(25px) saturate(180%);
    background-color: rgba(0, 0, 0, 0.45);
    border: 4px solid rgba(209, 213, 219, 0.3);

    display: flex;
    align-items: center;
    justify-content: center;

    position: fixed;
    top: 0;
    right: 0%;
    z-index: 999999;
`

export const ModalContent = styled.div`
    width: 300px;

    background-color: #fff;
    border-radius: 12px;
    padding: 16px;
    
    display: flex;
    align-items: center;
    flex-direction: column;
    row-gap: 16px;
`