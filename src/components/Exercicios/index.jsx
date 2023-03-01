import { Exercicio01 } from "./Exercicio01"
import { Exercicio02 } from "./Exercicio02"
import { Exercicio03 } from "./Exercicio03"
import { Exercicio04 } from "./Exercicio04"
import { Container } from "./style"

export const Exercicios = () => {
    return(
        <Container>
            <Exercicio04 numero={13}/>
            <Exercicio03 numero={6}/>
            <Exercicio02 />
            <Exercicio01 />
        </Container>
    )
}