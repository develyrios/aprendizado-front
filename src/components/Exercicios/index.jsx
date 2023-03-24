import { useState } from "react"
import { Exercicio01 } from "./Exercicio01"
import { Exercicio02 } from "./Exercicio02"
import { Exercicio03 } from "./Exercicio03"
import { Exercicio04 } from "./Exercicio04"
import { Exercicio05 } from "./Exercicio05"
import { Exercicio06 } from "./Exercicio06"
import { Exercicio07 } from "./Exercicio07"
import { Exercicio08 } from "./Exercicio08"
import { Exercicio09 } from "./Exercicio09"
import { Exercicio10 } from "./Exercicio10"
import { Exercicio11 } from "./Exercicio11"
import { Exercicio12 } from "./Exercicio12"
import { Exercicio13 } from "./Exercicio13"
import { Exercicio14 } from "./Exercicio14"
import { Exercicio15 } from "./Exercicio15"
import { Exercicio16 } from "./Exercicio16"
import { Exercicio17 } from "./Exercicio17"
import { Modal } from "./Exercicio17/Modal"
import { Container } from "./style"

export const Exercicios = () => {
    const [mostrarModalExercicio17, setMostrarModalExercicio17] = useState(false)

    return(
        <Container>
            <Modal 
                mostrarModal={mostrarModalExercicio17}
                setMostrarModal={setMostrarModalExercicio17}
            />
            <Exercicio17 
                setMostrarModal={setMostrarModalExercicio17}
            />
            <Exercicio16 />
            <Exercicio15 />
            <Exercicio14 />
            <Exercicio13 />
            <Exercicio12 />
            <Exercicio11 />
            <Exercicio10 />
            <Exercicio09 />
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