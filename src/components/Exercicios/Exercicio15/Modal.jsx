import { useState } from "react"
import { Button } from "../../../styles/Button"
import { ModalContainer, ModalContent } from "../../../styles/ModalStyle"
import { ContainerTitle, Span } from "../../../styles/Text"

export const Modal = () => {

    const [mostrarModal, setMostrarModal] = useState(false)

    return(
        <>
            {
                mostrarModal === true ?
                    <ModalContainer>
                        <ModalContent>
                            <ContainerTitle>Esse é o modal</ContainerTitle>
                            <Span>Conteúdo do modal.</Span>
                            <Button onClick={() => setMostrarModal(false)}>Fechar modal</Button>
                        </ModalContent>
                    </ModalContainer>
                    :
                    <Button onClick={() => setMostrarModal(true)}>
                        Abrir modal
                    </Button>
            }
        </>
    )
}