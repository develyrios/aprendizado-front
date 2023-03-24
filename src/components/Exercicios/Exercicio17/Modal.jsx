import { useEffect, useRef } from "react"
import { Button } from "../../../styles/Button"
import { ContainerTitle, Span } from "../../../styles/Text"
import { ModalContainer, ModalContent } from "../../../styles/ModalStyle";

export const Modal = ({ mostrarModal, setMostrarModal }) => {
    const modalRef = useRef(null);

    useEffect(() => {
        const observarCliqueForaDoModal = (event) => {
        if(modalRef 
            && modalRef.current
            && !modalRef.current.contains(event.target)) {
            setMostrarModal(false);
        }
      }

      document.addEventListener('mousedown', observarCliqueForaDoModal)
    
      return () => {
        document.removeEventListener('mousedown', observarCliqueForaDoModal)
      }
    }, [mostrarModal])
    

    return(
        <>
            {
                mostrarModal === true ?
                <ModalContainer>
                    <ModalContent ref={modalRef}>
                        <ContainerTitle>Esse é o modal</ContainerTitle>
                        <Span>Você pode clicar fora dele  ou no botão abaixo para fechá-lo.</Span>
                        <Button onClick={() => setMostrarModal(false)}>Fechar modal</Button>
                    </ModalContent>
                </ModalContainer>
                : <></>
            }
        </>
    )
}