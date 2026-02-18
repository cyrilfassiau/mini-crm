import { useState } from "react"

export default function ClientsSearch({ sortOption, setSortOption, statusFilter, setStatusFilter, searchTerm, onSearchTermChange }) {
   

  return (
    <div className="card">
      <div className="searchBarRow">
        <div className="inputRow">
          <span>
            <i className="fa-solid fa-magnifying-glass"></i>
          </span>

          <input
            type="text"
            placeholder="Search clients"
            value={searchTerm}
            onChange={(e) => onSearchTermChange(e.target.value)}
          />
        </div>

        <div className="sortingRow">
          <span>Sort by</span>
          <select onChange={(e) => setSortOption(e.target.value)}>
            <option value="recent">Recently seeded</option>
            <option value="name_az">Name (A - Z)</option>
            <option value="status">Status</option>
          </select>
        </div>
      </div>

      <div className="filtersRow">
        <button type="button"  className={statusFilter === "all" ? "btnActive" : ""} onClick={() => setStatusFilter("all")}>All Clients</button>
        <button type="button"  className={statusFilter === "active" ? "btnActive" : ""} onClick={() => setStatusFilter("active")}>Active</button>
        <button type="button"  className={statusFilter === "prospect" ? "btnActive" : ""} onClick={() => setStatusFilter("prospect")}>Prospect</button>
        <button type="button" className={statusFilter === "lost" ? "btnActive" : ""} onClick={() => setStatusFilter("lost")}>Lost</button>
        <button type="button" className="detailedFilters">
          <span>
            <i className="fa-solid fa-filter"></i>
          </span>
          {" "}Detailed Filters
        </button>
      </div>
    </div>

    
  )
}
