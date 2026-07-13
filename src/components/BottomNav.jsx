import { FaHome, FaHistory, FaBell, FaCog } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import "./BottomNav.css";


function BottomNav() {
  return (
    <nav className="bottom-nav">

      <NavLink
        to="/dashboard"
        className={({ isActive }) =>
          isActive ? "nav-item active" : "nav-item"
        }
      >
        <FaHome />
        <span>Accueil</span>
      </NavLink>

      <NavLink
        to="/history"
        className={({ isActive }) =>
          isActive ? "nav-item active" : "nav-item"
        }
      >
        <FaHistory />
        <span>Historique</span>
      </NavLink>

      <NavLink
        to="/alerts"
        className={({ isActive }) =>
          isActive ? "nav-item active" : "nav-item"
        }
      >
        <FaBell />
        <span>Alertes</span>
      </NavLink>

      <NavLink
        to="/settings"
        className={({ isActive }) =>
          isActive ? "nav-item active" : "nav-item"
        }
      >
        <FaCog />
        <span>Réglages</span>
      </NavLink>

    </nav>
  );
}

export default BottomNav;