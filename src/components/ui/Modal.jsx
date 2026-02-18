import ClientsForm from "../clients/ClientsForm"

export default function Modal({ isModalOpen, setIsModalOpen, onSubmit }){

    
    return (

        
        <div onClick={() => isModalOpen && setIsModalOpen(false)} className="modal" style={isModalOpen ? {display:"block"} : {display: "none"}}>
            <div onClick={(e) => e.stopPropagation()} className="modalContent">
            <div className="modalTitle">
                <div className="modalTitleText"><h2>Add a New Client</h2></div>
                <button onClick={() => setIsModalOpen(false)}><span><i className="fa-solid fa-xmark"></i></span></button>
            </div>
          <ClientsForm  onSubmit={onSubmit} onCancel={() => setIsModalOpen(false)}/>
        </div>
        </div>
    )
}