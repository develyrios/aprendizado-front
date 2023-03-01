import { Exercicio01 } from "./Exercicio01"
import { Exercicio02 } from "./Exercicio02"
import { Exercicio03 } from "./Exercicio03"
import { Exercicio04 } from "./Exercicio04"
import { Exercicio05 } from "./Exercicio05"
import { Exercicio06 } from "./Exercicio06"
import { Exercicio07 } from "./Exercicio07"
import { Exercicio08 } from "./Exercicio08"
import { Container } from "./style"

export const Exercicios = () => {
    return(
        <Container>
            <Exercicio08 />
            <Exercicio07 />
            <Exercicio06 />
            <Exercicio05 />
            <Exercicio04 numero={13}/>
            <Exercicio03 numero={6}/>
            <Exercicio02 />
            <Exercicio01 />
        </Container>
    )
}