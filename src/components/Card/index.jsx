import { ContainerTitle } from "../../styles/Text";
import { Container } from "./style";

export const Card = (props) => {
    return(
        <Container className="glassMorph">
            <ContainerTitle>{props.title}</ContainerTitle>
            {props.children}
        </Container>
    )
}