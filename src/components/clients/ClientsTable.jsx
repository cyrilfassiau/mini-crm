

export default function ClientsTable({clients, deleteClient}){

    

    const rows = clients.map((client) => (
                            <tr key={client.id}>
                            <td>{client.name}</td>
                            <td ><div className={`badge badge--${client.status}`}>{client.status}</div></td>
                            <td>{client.email}</td>
                            <td>{client.createdAt}</td>
                            <td>
                            <div>
                                <button type="button"><i className="fa-solid fa-pen-to-square"></i></button>
                                <button type="button" onClick={() => deleteClient(client.id)} ><i className="fa-solid fa-ellipsis"></i></button>
                            </div>
                            </td>
                            </tr>
    ));
 
    return (
        <div className="card card-no-padding">
            <div className="clientsTable">
                <table>
                    <thead>
                    <tr className="titles">
                        <th>Client Identity</th>
                        <th>Status</th>
                        <th>Contact</th>
                        <th>Connection Date</th>
                        <th>Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                     {rows}
                    </tbody>
                </table>
            </div>
            <div className="totalDisplay">
                <p>Displaying 1 to 4 of 1,248 clients</p>
                <div className="pageNumbers">
                    <button><i className="fa-solid fa-chevron-left"></i></button>
                     <button className="pageActuelle">1</button>
                      <button>2</button>
                       <button>3</button>
                        <button><i className="fa-solid fa-ellipsis"></i></button>
                         <button>312</button>
                          <button><i className="fa-solid fa-chevron-right"></i></button>
                </div>
            </div>
        </div>
    )
}