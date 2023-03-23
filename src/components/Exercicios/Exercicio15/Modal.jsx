import { useState } from "react"
import { Button } from "../../../styles/Button"
import { Span } from "../../../styles/Text"
import { Card } from "../../Card"

export const Modal = () => {

    const [mostrarModal, setMostrarModal] = useState(false)

    return(
        <>
            {
                mostrarModal === true ?
                    <Card title="Esse é o modal">
                        <Span>Conteudo do modal</Span>
                        <Button onClick={() => setMostrarModal(false)}>
                            Fechar Modal
                        </Button>
                    </Card>
                    :
                    <Button onClick={() => setMostrarModal(true)}>
                        Abrir modal
                    </Button>
            }
        </>
    )
}