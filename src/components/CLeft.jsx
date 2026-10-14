function CLeft({choice, setChoice}) {
    return (
        <div className="col-lg-4  ">
            <div className="card bg-dark text-light p-3 mb-5">
              <h5>IT HELP DESK</h5>
              <hr />

              <p>1. Raise New Ticket</p>
              <p>2. View All Tickets</p>
              <p>3. Search Ticket</p>
              <p>4. Update Ticket Status</p>
              <p>5. Delete Ticket</p>

              <div className="mt-4">
                <p>Enter your choice:</p>

                <div className="d-flex gap-2 flex-wrap">
                  {[1, 2, 3, 4, 5].map((number) => (
                    <button
                      key={number}
                      type="button"
                      className="btn btn-outline-light btn-sm"
                      onClick={() => setChoice(number)}
                    >
                      {number}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* C Concepts Used */}
            <div className="card  shadow-sm ">
              <div className="card-body">
                <h6 className="fw-bold">C Concepts Used</h6>

                <div className="d-flex  gap-2 mt-3">
                  <span className="badge text-bg-light">Structures</span>

                  <span className="badge text-bg-light">Arrays</span>

                  <span className="badge text-bg-light">Functions</span>

                  <span className="badge text-bg-light">Pointers</span>

                  <span className="badge text-bg-light">Strings</span>
                </div>
              </div>
            </div>
          </div>
    );
}
export default CLeft