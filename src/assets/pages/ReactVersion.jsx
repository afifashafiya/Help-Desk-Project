import { useState } from "react";
import { useNavigate } from "react-router-dom";
function ReactVersion({ tickets, setTickets }) {
  const [search, setSearch] = useState("");
  const filteredTickets = tickets.filter((ticket) =>
    `${ticket.employee} ${ticket.title} ${ticket.category} ${ticket.status}`
      .toLowerCase()
      .includes(search.toLowerCase()),
  );
  const navigate = useNavigate();
  return (
    <div className="container py-5">
      <div className="d-flex justify-content-between align-items-center mb-4 flex-wrap gap-3">
        <div>
          <p className="text-primary fw-semibold mb-1">REACT VERSION</p>
          <h1 className="fw-bold mb-2">Ticket Dashboard</h1>
          <p className="text-secondary mb-0">
            Manage IT support tickets using React.
          </p>
        </div>
        <button
          className="btn btn-dark px-4"
          onClick={() => navigate("/c-version")}>
          Create Ticket
        </button>
      </div>
      <div className="container py-5">
        <div className="row mb-4">
          {/* Statistics Cards */}
          <div className="row ">
            {/* Total Tickets */}
            <div className="col-md-3 col-6 ">
              <div className="card border-0 shadow-sm p-3">
                <p className="text-secondary mb-1">Total Tickets</p>

                <h3 className="fw-bold mb-0">{tickets.length}</h3>
              </div>
            </div>
            {/* Open Tickets */}
            <div className="col-md-3 col-6 ">
              <div className="card border-0 shadow-sm p-3">
                <p className="text-secondary mb-1">Open</p>

                <h3 className="fw-bold mb-0">
                  {tickets.filter((ticket) => ticket.status === "Open").length}
                </h3>
              </div>
            </div>
            {/* In Progress Tickets */}
            <div className="col-md-3 col-6 ">
              <div className="card border-0 shadow-sm p-3">
                <p className="text-secondary mb-1">In Progress</p>

                <h3 className="fw-bold mb-0">
                  {
                    tickets.filter((ticket) => ticket.status === "In Progress")
                      .length
                  }
                </h3>
              </div>
            </div>
            {/* Resolved Tickets */}
            <div className="col-md-3 col-6 ">
              <div className="card border-0 shadow-sm p-3">
                <p className="text-secondary mb-1">Resolved</p>

                <h3 className="fw-bold mb-0">
                  {
                    tickets.filter((ticket) => ticket.status === "Resolved")
                      .length
                  }
                </h3>
              </div>
            </div>
          </div>
        </div>
        {/* Search Tickets */}
        <div className="card border-0 shadow-sm p-3 mb-4">
          <input
            type="text"
            className="form-control"
            placeholder="Search by employee, title, category or status..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        {/* Ticket List */}
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h4 className="fw-bold mb-0">All Tickets</h4>
          <span className="text-secondary">
            {filteredTickets.length} tickets found
          </span>
        </div>
        <div className="row">
          {filteredTickets.map((ticket) => (
            <div className="col-md-6 mb-3" key={ticket.id}>
              <div className="card border-0 shadow-sm p-3 h-100">
                <div className="d-flex justify-content-between align-items-start gap-2">
                  <div>
                    <h5 className="fw-bold mb-1">{ticket.title}</h5>
                    <p className="text-secondary mb-2">Ticket #{ticket.id}</p>
                  </div>
                  <span className="badge text-bg-primary">{ticket.status}</span>
                </div>
                <p className="mb-1">
                  <strong>Employee:</strong> {ticket.employee}
                </p>
                <p className="mb-1">
                  <strong>Category:</strong> {ticket.category}
                </p>
                <p className="mb-1">
                  <strong>Priority:</strong> {ticket.priority}
                </p>
                <p className="text-secondary mb-0">{ticket.description}</p>
              </div>
            </div>
          ))}
          {filteredTickets.length === 0 && (
            <div className="col-12">
              <div className="alert alert-light border">No tickets found.</div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ReactVersion;
