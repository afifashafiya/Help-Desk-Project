function CRight({
  choice,
  tickets,
  form,
  setForm,
  search,
  setSearch,
  addTicket,
  updateStatus,
  deleteTicket,
  filteredTickets,
}) {
    return (
        <div className="col-lg-8">
            <div className="card   shadow-sm p-4">
              {choice === 1 ? (
                <>
                  <h4>Raise New Ticket</h4>
                  <p className="text-secondary">
                    Enter the details of your IT issue.
                  </p>
                </>
              ) : choice === 2 ? (
                <>
                  <h4>All Tickets</h4>
                  <p className="text-secondary">
                    View all your IT support tickets.
                  </p>
                </>
              ) : choice === 3 ? (
                <>
                  <h4>Search Ticket</h4>
                  <p className="text-secondary">
                    Search by employee name or issue title.
                  </p>
                </>
              ) : choice === 4 ? (
                <>
                  <h4>Update Ticket Status</h4>
                  <p className="text-secondary">
                    Change the status of an existing ticket.
                  </p>
                </>
              ) : (
                <>
                  <h4>Delete Ticket</h4>
                  <p className="text-secondary">
                    Remove a ticket from the system.
                  </p></>
              )}
              {choice === 3 && (
                <input
                  type="text"
                  className="form-control mb-3"
                  placeholder="Enter employee name or issue title"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}/>
              )}
              {choice === 1 && (
                <form onSubmit={addTicket}>
                  <div className="mb-3">
                    <label className="form-label">Employee Name</label>
                    <input
                      required
                      value={form.employee}
                      onChange={(e) =>
                        setForm({ ...form, employee: e.target.value })}
                      type="text"
                      className="form-control"
                      placeholder="Enter employee name"/>
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Issue Title</label>
                    <input
                      required
                      value={form.title}
                      onChange={(e) =>
                        setForm({ ...form, title: e.target.value })}
                      type="text"
                      className="form-control"
                      placeholder="Enter issue title"/>
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Category</label>
                    <select
                      className="form-select"
                      value={form.category}
                      onChange={(e) =>
                        setForm({ ...form, category: e.target.value })
                      }>
                      <option>Software</option>
                      <option>Hardware</option>
                      <option>Network</option>
                      <option>Account</option>
                    </select>
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Priority</label>
                    <select
                      className="form-select"
                      value={form.priority}
                      onChange={(e) =>
                        setForm({ ...form, priority: e.target.value })
                      }>
                    
                      <option>Low</option>
                      <option>Medium</option>
                      <option>High</option>
                    </select>
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Description</label>
                    <textarea
                      value={form.description}
                      onChange={(e) =>
                        setForm({ ...form, description: e.target.value })
                      }
                      className="form-control"
                      rows="4"
                      placeholder="Describe your issue"
                    ></textarea>
                  </div>
                  <button type="submit" className="btn btn-dark">
                    <i className="bi bi-plus-lg me-2"></i>
                    Create Ticket
                  </button>
                </form>
              )}
              {choice === 2 && (
                <div className="table-responsive mt-4">
                  <table className="table table-bordered table-hover">
                    <thead className="table-dark">
                      <tr>
                        <th>ID</th>
                        <th>Employee</th>
                        <th>Issue</th>
                        <th>Category</th>
                        <th>Priority</th>
                        <th>Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {tickets.length === 0 ? (
                        <tr>
                          <td colSpan="6" className="text-center">
                            No tickets available.
                          </td>
                        </tr>
                      ) : (
                        tickets.map((ticket) => (
                          <tr key={ticket.id}>
                            <td>{ticket.id}</td>
                            <td>{ticket.employee}</td>
                            <td>{ticket.title}</td>
                            <td>{ticket.category}</td>
                            <td>{ticket.priority}</td>
                            <td>{ticket.status}</td>
                          </tr>
                        ))
                      )}
                    </tbody>
                  </table>
                </div>
              )}
              {choice === 3 && (
                <div className="table-responsive mt-4">
                  <table className="table table-bordered table-hover">
                    <thead className="table-dark">
                      <tr>
                        <th>ID</th>
                        <th>Employee</th>
                        <th>Issue</th>
                        <th>Category</th>
                        <th>Priority</th>
                        <th>Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {filteredTickets.length === 0 ? (
                        <tr>
                          <td colSpan="6" className="text-center">
                            No matching tickets found.
                          </td>
                        </tr>
                      ) : (
                        filteredTickets.map((ticket) => (
                          <tr key={ticket.id}>
                            <td>{ticket.id}</td>
                            <td>{ticket.employee}</td>
                            <td>{ticket.title}</td>
                            <td>{ticket.category}</td>
                            <td>{ticket.priority}</td>
                            <td>{ticket.status}</td>
                          </tr>
                        ))
                      )}
                    </tbody>
                  </table>
                </div>
              )}
              {choice === 4 && (
                <div className="table-responsive mt-4">
                  <table className="table table-bordered table-hover">
                    <thead className="table-dark">
                      <tr>
                        <th>ID</th>
                        <th>Employee</th>
                        <th>Issue</th>
                        <th>Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {tickets.length === 0 ? (
                        <tr>
                          <td colSpan="4" className="text-center">
                            No tickets available.
                          </td>
                        </tr>
                      ) : (
                        tickets.map((ticket) => (
                          <tr key={ticket.id}>
                            <td>{ticket.id}</td>
                            <td>{ticket.employee}</td>
                            <td>{ticket.title}</td>
                            <td>
                              <select
                                className="form-select"
                                value={ticket.status}
                                onChange={(e) =>
                                  updateStatus(ticket.id, e.target.value)}>   
                                <option>Open</option>
                                <option>In Progress</option>
                                <option>Resolved</option>
                                <option>Closed</option>
                              </select>
                            </td>
                          </tr>
                        )))}
                    </tbody>
                  </table>
                </div> )}</div>    
            {choice === 5 && (
              <div className="table-responsive mt-4">
                <table className="table table-bordered table-hover">
                  <thead className="table-dark">
                    <tr>
                      <th>ID</th>
                      <th>Employee</th>
                      <th>Issue</th>
                      <th>Status</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {tickets.length === 0 ? (
                      <tr>
                        <td colSpan="5" className="text-center">
                          No tickets available.
                        </td>
                      </tr>
                    ) : (
                      tickets.map((ticket) => (
                        <tr key={ticket.id}>
                          <td>{ticket.id}</td>
                          <td>{ticket.employee}</td>
                          <td>{ticket.title}</td>
                          <td>{ticket.status}</td>
                          <td>
                            <button
                              type="button"
                              className="btn btn-danger btn-sm"
                              onClick={() => deleteTicket(ticket.id)}
                            >
                              Delete
                            </button>
                          </td>
                        </tr>
                      )))}
                  </tbody></table>
                </div>)}</div>)}export default CRight