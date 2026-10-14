import { Link, NavLink } from "react-router-dom";
function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-white border-bottom sticky-top">
      <div className="container py-2">
        {/* Logo */}
        <Link
          to="/"
          className="navbar-brand fw-bold d-flex align-items-center gap-2"
        >
          <i className="bi bi-headset fs-3"></i>
          <span>IT.DESK</span>
        </Link>

        {/* Navigation Links */}
        <div>
          <div className="d-flex flex-row gap-4">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "nav-link active-menu" : "nav-link secondary-menu"
              }
            >
              Home
            </NavLink>

            <NavLink
              to="/c-version"
              className={({ isActive }) =>
                isActive ? "nav-link active-menu" : "nav-link secondary-menu"
              }
            >
              C Version
            </NavLink>

            <NavLink
              to="/react-version"
              className={({ isActive }) =>
                isActive ? "nav-link active-menu" : "nav-link secondary-menu"
              }
            >
              React Version
            </NavLink>

            <NavLink
              to="/tickets"
              className={({ isActive }) =>
                isActive ? "nav-link active-menu" : "nav-link secondary-menu"
              }
            >
              Tickets
            </NavLink>

            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? "nav-link active-menu" : "nav-link secondary-menu"
              }
            >
              About
            </NavLink>

            

<a
  href="https://portfolio-by-as.vercel.app/"
  target="_blank"
  rel="noopener noreferrer"
  className="btn btn-dark btn-sm px-3"
>
  <i className="bi bi-person-workspace me-2"></i>
  visit Portfolio
  <i className="bi bi-arrow-up-right ms-2"></i>
</a>


          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
