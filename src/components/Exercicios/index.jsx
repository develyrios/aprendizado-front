import { Exercicio01 } from "./exercicio01"
import { Exercicio02 } from "./exercicio02"
import { Exercicio03 } from "./exercicio03"
import { Exercicio04 } from "./exercicio04"
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