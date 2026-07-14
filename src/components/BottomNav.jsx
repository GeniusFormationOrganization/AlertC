import {
  FaHome,
  FaHistory,
  FaBell,
  FaCog,
  FaBolt,
} from "react-icons/fa";

import { NavLink } from "react-router-dom";

import "./BottomNav.css";

function BottomNav() {
  return (
    <nav className="bottom-nav">

      <div className="logo-area">

        <FaBolt className="logo-icon" />

        <h2>AlertC</h2>

      </div>

      <div className="nav-links">

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

      </div>

    </nav>
  );
}

export default BottomNav;