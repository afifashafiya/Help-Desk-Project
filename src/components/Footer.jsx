import { Link } from "react-router-dom";
function Footer() {
  return (
    <footer class="bg-dark text-white mt-5">
      <div class="container py-5">
        <div class="d-flex justify-content-between gap-4">
          <div class="flex-column" style={{ maxWidth: "450px" }}>
            <h4 class="fw-bold">
              <i class="bi bi-headset me-2"></i>IT.DESK
            </h4>
            <p class="text-white-50 mt-3">
              A Ticket Management System built first with C and redesigned for
              the modern web using React.
            </p>
          </div>
          <div class="d-flex gap-5">
            <div class="">
              <h6>PROJECT</h6>
              <div className="d-flex flex-column gap-2">
                <Link
                  to="/c-version"
                  className="text-white-50 text-decoration-none"
                >
                  C Version
                </Link>
                <Link
                  to="/react-version"
                  className="text-white-50 text-decoration-none"
                >
                  React Version
                </Link>
                <Link
                  to="/ticket-management"
                  className="text-white-50 text-decoration-none"
                >
                  Ticket Management
                </Link>
              </div>
            </div>
            <div class="">
              <h6>FEATURES</h6>
              <p class="text-white-50 mb-2">Raise Ticket</p>
              <p class="text-white-50 mb-2">Search Ticket</p>
              <p class="text-white-50 mb-2">Update Status</p>
            </div>
          </div>
        </div>
        <div className="border-top border-secondary my-4"></div>
        <p class="text-center text-white-50 mb-0">
          © 2026 IT.DESK All Rights Reserved — A project Built and developed by Afifa Shafiya...
        </p>
      </div>
    </footer>
  );
}

export default Footer;
