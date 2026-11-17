import { NavLink } from "react-router-dom";
import "bootstrap-icons/font/bootstrap-icons.css";

function Sidebar() {
  const navClass = ({ isActive }) =>
    `nav-link d-flex align-items-center gap-2 px-3 py-2 rounded-2 mb-1 small ${
      isActive ? "bg-success text-white" : "text-white-50"
    }`;

  return (
    <aside
      className="bg-dark text-white vh-100 position-fixed top-0 start-0 d-flex flex-column p-4"
      style={{ width: "270px", zIndex: 1000 }}
    >
      {/* Brand */}
      <div className="d-flex align-items-center gap-2 mb-4">
        <i className="bi bi-flower1 text-success fs-4"></i>

        <div>
          <h6 className="fw-bold mb-0">LINAH FARMS</h6>
          <small className="text-white-50">Farm Management</small>
        </div>
      </div>

      <hr className="border-secondary mt-0 mb-3" />

      {/* Navigation */}
      <nav className="flex-grow-1">
        <small className="text-uppercase text-white-50 fw-semibold d-block mb-3 px-2">
          Main Menu
        </small>

        <NavLink to="/dashboard" className={navClass}>
          <i className="bi bi-grid-1x2-fill"></i>
          <span>Dashboard</span>
        </NavLink>

        <NavLink to="/PoultryManagement" className={navClass}>
          <i className="bi bi-egg-fill"></i>
          <span>Poultry Management</span>
        </NavLink>

        <NavLink to="/expenses" className={navClass}>
          <i className="bi bi-wallet2"></i>
          <span>Expenses</span>
        </NavLink>

        <NavLink to="/sales" className={navClass}>
          <i className="bi bi-cart-check"></i>
          <span>Sales</span>
        </NavLink>

        {/* <NavLink to="/livestock" className={navClass}>
          <i className="bi bi-house-heart-fill"></i>
          <span>Livestock</span>
        </NavLink>

        <NavLink to="/crops" className={navClass}>
          <i className="bi bi-flower1"></i>
          <span>Crop Management</span>
        </NavLink>

        <NavLink to="/Adddata" className={navClass}>
          <i className="bi bi-clipboard-data"></i>
          <span>Farm Records</span>
        </NavLink>

        <NavLink to="/reports" className={navClass}>
          <i className="bi bi-bar-chart-line"></i>
          <span>Reports</span>
        </NavLink>

        <NavLink to="/settings" className={navClass}>
          <i className="bi bi-gear"></i>
          <span>Settings</span>
        </NavLink> */}
      </nav>

      {/* Administrator */}
      <div className="border-top border-secondary pt-3 mt-2">
        <div className="d-flex align-items-center gap-2">
          <div className="bg-success rounded-circle p-2">
            <i className="bi bi-person-fill small"></i>
          </div>

          <div>
            <div className="fw-semibold small">Administrator</div>
            <small className="text-white-50">Farm Admin</small>
          </div>
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;
