import { useState } from "react"

export default function ClientsForm({ onSubmit, onCancel }) {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [status, setStatus] = useState("active")

  function handleSubmit(e) {
    e.preventDefault()

    // validation minimale
    if (!name.trim()) return
    if (!email.trim() || !email.includes("@")) return

    onSubmit({ name, email, status })

    // reset (optionnel, mais agréable)
    setName("")
    setEmail("")
    setStatus("active")
  }

  return (
    <form className="modalForm" onSubmit={handleSubmit}>
      <div className="formInputRow">
        <label>Client Name</label>
        <div className="formInput">
          <span><i className="fa-solid fa-user"></i></span>
          <input
            name="name"
            type="text"
            placeholder="CyrilFassiau INC"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
      </div>

      <div className="formInputRow">
        <label>Email</label>
        <div className="formInput">
          <span><i className="fa-solid fa-envelope"></i></span>
          <input
            name="email"
            type="text"
            placeholder="cyril.fassiau@hotmail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
      </div>

      <div className="formInputRow">
        <label>Status</label>
        <div className="formInput">
          <span><i className="fa-solid fa-square-poll-vertical"></i></span>
          <select
            name="status"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            required
          >
            <option value="active">Active</option>
            <option value="prospect">Prospect</option>
            <option value="lost">Lost</option>
          </select>
        </div>
      </div>

      <div className="formBtns">
        <button type="button" className="whiteBtn" onClick={onCancel}>
          Cancel
        </button>

        <button type="submit" className="colorBtn">
          <span><i className="fa-solid fa-floppy-disk"></i></span> Save Client
        </button>
      </div>
    </form>
  )
}
