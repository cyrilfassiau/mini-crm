import Sidebar from "./components/layout/Sidebar"
import Header from "./components/layout/Header"
import Page from "./components/layout/Page"
import ClientsPage from "./components/clients/ClientsPage"


import "./styles/globals.css"
import "./styles/layout.css"

function App() {
  return (
    <div className="app-layout">
      <Sidebar />
      <div className="main-content">
        
        <Page>
          <ClientsPage />
        </Page>
      </div>

      
      </div>
    
  )
}

export default App
