import { useEffect, useState } from "react"
import clientsList from "../../data/clientsList"
import ClientsSearch from "./ClientsSearch"
import ClientsTable from "./ClientsTable"
import { loadClients, saveClients } from "../../utils/storage"
import Header from "../layout/Header"
import Modal from "../ui/Modal"

export default function ClientsPage() {

    const [statusFilter, setStatusFilter] = useState('all')
    

    const [clients, setClients] = useState(() => {
  const storedClients = loadClients()
  return storedClients ?? clientsList
})

useEffect(() => {
  saveClients(clients)
}, [clients])

   const [isModalOpen, setIsModalOpen] = useState(false)

   function handleCreateClient(formData) {
  const newClient = {
    id: crypto.randomUUID(),
    name: formData.name.trim(),
    email: formData.email.trim(),
    status: formData.status,
    createdAt: new Date().toISOString().slice(0, 10), // "YYYY-MM-DD"
  }

  setClients((prev) => [newClient, ...prev])
  setIsModalOpen(false)
}

function handleDeleteClient(clientId) {
  setClients((prev) => prev.filter((client) => client.id !== clientId))
}


    const [searchTerm, setSearchTerm] = useState("")

    const [sortOption, setSortOption] = useState('recent')

    const filteredClients = clients.filter((client) => {

        const status = statusFilter
        const term = searchTerm.trim().toLowerCase()
        let matchesStatus = ""
        let matchesSearch = ""

        if (statusFilter === "all") {
            matchesStatus = true
        }
        else if (client.status === status) {
            matchesStatus = true
        } 
        else {
            matchesStatus = false
        }

        if (searchTerm === "") {
            matchesSearch = true
        }
        else if (client.name.toLowerCase().includes(term)) {
            matchesSearch = true
        } 
        else {
            matchesSearch = false
        }
        
          return (
                matchesSearch && matchesStatus
            )
       
    }
    
    )

    

    let sorted = ""

    if (sortOption === 'recent') {
        sorted = [...filteredClients].sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));
    }
    else if (sortOption === 'name_az') {
        sorted = [...filteredClients].sort((a, b) => a.name.localeCompare(b.name));
    }
    else {
       sorted = [...filteredClients].sort((a, b) => a.status.localeCompare(b.status))
    }



    return (
        <>
        <Header onAddClientClick={() => setIsModalOpen(true)} />
        <ClientsSearch sortOption={sortOption} setSortOption={setSortOption} statusFilter={statusFilter} setStatusFilter={setStatusFilter} searchTerm={searchTerm} onSearchTermChange={setSearchTerm} />
        <ClientsTable clients={sorted} deleteClient={handleDeleteClient} />
         <Modal
      isModalOpen={isModalOpen}
      setIsModalOpen={setIsModalOpen}
      onSubmit={handleCreateClient}
    />
        </>
    )
}