function Work(){
    return(
        <section className="container py-5">
          <div className="text-center mb-5">
            <h2 className="fw-bold">How It Works</h2>
            <p className="text-secondary">
              Manage IT support requests in three simple steps.
            </p>
          </div>
          <div className="row g-4">
            <div className="col-md-4">
              <div className="card border-0.5 shadow-sm  p-4">
                <i className="bi bi-ticket-perforated fs-1 mb-3"></i>
                <h5 className="fw-bold">01. Raise a Ticket</h5>
                <p className="text-secondary mb-0">
                  Enter employee details and describe the IT issue.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card border-0.5 shadow-sm h-100 p-4">
                <i className="bi bi-tools fs-1 mb-3"></i>
                <h5 className="fw-bold">02. Resolve the Issue</h5>
                <p className="text-secondary mb-0">
                  Track the request and update its status.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card border-0.5 shadow-sm h-100 p-4">
                <i className="bi bi-check-circle fs-1 mb-3"></i>
                <h5 className="fw-bold">03. Close the Ticket</h5>
                <p className="text-secondary mb-0">
                  Mark the ticket as resolved when the issue is fixed.
                </p>
              </div>
            </div>
          </div>
        </section>
    );}
export default Work;