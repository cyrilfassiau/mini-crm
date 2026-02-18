import ClientsForm from "../clients/ClientsForm"
import clientsList from "../../data/clientsList"

export default function EditModal({ isEditModalOpen, setIsEditModalOpen, onSubmit }){

 
    return (

        
        <div onClick={() => isEditModalOpen && setIsEditModalOpen(false)} className="modal" style={isEditModalOpen ? {display:"block"} : {display: "none"}}>
            <div onClick={(e) => e.stopPropagation()} className="modalContent">
            <div className="modalTitle">
                <div className="modalTitleText"><h2>Edit client</h2></div>
                <button onClick={() => setIsEditModalOpen(false)}><span><i className="fa-solid fa-xmark"></i></span></button>
            </div>
          <ClientsForm  onSubmit={onSubmit} onCancel={() => setIsEditModalOpen(false)}/>
        </div>
        </div>
    )
}