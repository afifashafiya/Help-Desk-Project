import { Link } from "react-router-dom";
import Work from "./Work";
import Cvr from "./Cvr";
import Devjourney from "./Devjourney";
function Hero(){
    return(
    <section className="container py-5">
      <div className="row align-items-center py-5">
        <div className="col-md-7">
          <p className="text-primary fw-semibold text-uppercase ">
            IT HELP DESK TICKET MANAGEMENT SYSTEM
          </p>
          <h1 className="display-4 fw-bold">
            Manage IT Support Tickets
            <br />
            <span className="text-secondary">Simply & Efficiently</span>
          </h1>
          <p className="lead text-secondary mt-4">
            A ticket management system built first with C and redesigned as a
            modern web application using React.
          </p>
          <div className="d-flex gap-3 mt-4">
            <Link
              to="/c-version"
              className="btn btn-dark text-uppercase px-4 py-2" >
              VIEW IN c
            </Link>
            <Link
              to="/react-version"
              className="btn btn-outline-dark px-4 py-2">
              VIEW IN REACT
            </Link>
          </div>
        </div>
        <div className="col-md-5 mt-5 mt-md-0">
          <div className="bg-dark text-white rounded-4 p-4 shadow">
            <div className="d-flex gap-2 mb-4">
              <span className="badge bg-danger">C</span>
              <span className="badge bg-primary">REACT</span>
            </div>
            <p className="text-white-50 mb-2">Project Flow</p>
            <h4 className="fw-bold">
              Console
              <i className="bi bi-arrow-right mx-2"></i>
              Web
            </h4>
            <hr />
            <p className="mb-0 text-white-50">
              Raise tickets, search issues, update status and manage IT support
              requests.
            </p>
          </div>
        </div>
        {/* How It Works Section */}
        <Work />
        {/* C vs React Section */}
        <Cvr />
        {/* logic to development */}
        <Devjourney />
      </div>
    </section>);}export default Hero;