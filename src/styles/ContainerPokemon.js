import styled from "styled-components";

export const ContainerPokemon = styled.div`
    display: flex;
    align-items: center;
`

export const PokemonInfo = styled.div`
    display: flex;
    flex-direction: column;

    span:first-of-type {
        font-weight: 800;
    }

    span::first-letter {
        text-transform: uppercase;
    }
`