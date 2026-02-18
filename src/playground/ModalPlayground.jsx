import { useState } from "react"
import Modal from "../components/ui/Modal"

export default function ModalPlayground(){

    const [isModalOpen, setIsModalOpen] = useState(false)

    function toggleModal(){
        setIsModalOpen(true)
        console.log("modal opened")
    }

    return (
        <div className="modalBtn">
            <button onClick={toggleModal}>MONTRE LA MODAL</button>
        <Modal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
        </div>
    )
}