import{Link} from "react-router-dom";
function Abexplore() {
  return (
    <div className="bg-dark text-white rounded-4 p-4 p-md-5 mt-5 mb-5">
        <div className="row align-items-center g-4">
            <div className="col-lg-8">
                <span className="text-info text-primary fw-semibold small">
                        EXPLORE IT.DESK
                </span>
                <h2 className="fw-bold mt-2">
                        See the Project in Action
                </h2>
                <p className="text-white-50 mb-0">
                        Explore the C programming implementation or
                        experience the interactive React dashboard.
                 </p>
            </div>
            <div className="col-lg-4">
                <div className="d-flex flex-column gap-3">
                    <Link
                    to="/c-version"
                    className="btn btn-light px-4"
                    >
                    <i className="bi bi-terminal me-2"></i>
                    Explore C Version
                    </Link>
                    <Link
                    to="/react-version"
                    className="btn btn-outline-light px-4"
                    >
                    <i className="bi bi-window me-2"></i>
                    Open React Dashboard
                    </Link>
                </div>
            </div>
        </div>
    </div>
  )}
export default Abexplore
