
import { Link } from 'react-router-dom'
function Tickets() {
  return (
    <section className="py-5">
      <div className="container">
        <div className="text-center">
          <span className="section-label text-primary fw-semibold text-uppercase">
            TICKET MANAGEMENT
          </span>
          <h1 className="fw-bold mt-2">
            Manage Your Tickets
          </h1>
          <p className="text-secondary">
            Create, search, update and delete tickets
            using the React implementation.
          </p>
          <Link
            to="/react-version"
            className="btn btn-dark mt-3 px-4">
            Open Ticket Dashboard
            <i className="bi bi-arrow-right ms-2"></i>
          </Link>
        </div>
        {/* Features Section */}
        <div className="text-center mb-4 mt-4">
          <h2 className="fw-bold">Our Features</h2>
          <p className="text-secondary">
            Everything you need to manage IT support.
          </p>
        </div>
        <div className="row g-4">
            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm p-4">
                <i className="bi bi-ticket-perforated fs-1 mb-3"></i>
                <h5 className="fw-bold">Raise Tickets</h5>
                <p className="text-secondary mb-0">
                  Create tickets for your IT problems.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm p-4">
                <i className="bi bi-graph-up-arrow fs-1 mb-3"></i>
                <h5 className="fw-bold">Track Progress</h5>
                <p className="text-secondary mb-0">
                  Check the status of your support requests.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm p-4">
                <i className="bi bi-check-circle fs-1 mb-3"></i>
                <h5 className="fw-bold">Resolve Issues</h5>
                <p className="text-secondary mb-0">
                  Manage IT issues from start to finish.
                </p>
              </div>
            </div>
        </div>
      </div>
    </section>
  
  )
}

export default Tickets
