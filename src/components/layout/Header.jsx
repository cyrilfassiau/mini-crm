import Modal from "../ui/Modal"


export default function Header({ onAddClientClick }) {

  
 
  return <header>
    <div className="pageName"><h2>Clients Dashboard</h2></div>
    <div className="headerRight">
      <button onClick={onAddClientClick}><i className="fa-solid fa-circle-plus"></i> Add New Client</button>
      <a><i className="fa-solid fa-user"></i> Cyril Fassiau</a>
      
    </div>
  </header>
}