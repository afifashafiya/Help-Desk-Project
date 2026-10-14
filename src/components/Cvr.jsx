import { Link } from "react-router-dom";
function Cvr(){
    return(
        <section className="bg-light py-5">
          <div className="container">
            <div className="text-center mb-5">
              <h2 className="fw-bold">One Project, Two Implementations</h2>
              <p className="text-secondary">
                Explore the original C program and its React web version.
              </p>
            </div>

            <div className="row g-4">
              <div className="col-md-6">
                <div className="card border-0 shadow-sm h-100 p-4">
                  <i className="bi bi-terminal fs-1 mb-3"></i>

                  <h4 className="fw-bold">C Version</h4>

                  <p className="text-secondary">
                    A console-based ticket management system built using C
                    programming concepts.
                  </p>

                  <ul>
                    <li>Structures and arrays</li>
                    <li>Functions and pointers</li>
                    <li>Create, search and delete tickets</li>
                  </ul>

                  <Link to="/c-version" className="btn btn-dark mt-auto">
                    Explore C Version
                  </Link>
                </div>
              </div>

              <div className="col-md-6">
                <div className="card border-0 shadow-sm h-100 p-4">
                  <i className="bi bi-window fs-1 mb-3"></i>

                  <h4 className="fw-bold">React Version</h4>

                  <p className="text-secondary">
                    An interactive web application built with React and
                    Bootstrap.
                  </p>

                  <ul>
                    <li>Reusable components</li>
                    <li>State and props</li>
                    <li>Interactive ticket dashboard</li>
                  </ul>

                  <Link
                    to="/react-version"
                    className="btn btn-outline-dark mt-auto"
                  >
                    Explore React Version
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
    );
}
export default Cvr;