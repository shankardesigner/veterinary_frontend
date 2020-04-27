import React from "react";
import { NavLink } from "react-router-dom";

function Sidebar() {
  return (
    <>
      <nav className="sidebar sidebar-offcanvas" id="sidebar">
        <ul className="nav">
          <li className="nav-item nav-profile">
            <span className="nav-link">
              <div className="nav-profile-image">
                <img src="images/faces/face1.jpg" alt="profile" />
                <span className="login-status online"></span>
              </div>
              <div className="nav-profile-text d-flex flex-column">
                <span className="font-weight-bold mb-2">David Grey. H</span>
                <span className="text-secondary text-small">
                  Project Manager
                </span>
              </div>
              <i className="mdi mdi-bookmark-check text-success nav-profile-badge"></i>
            </span>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/">
              <span className="menu-title">Dashboard</span>
              <i className="mdi mdi-home menu-icon"></i>
            </NavLink>
            <NavLink className="nav-link" to="/add-customer">
              <span className="menu-title">Add Customer</span>
              <i className="mdi mdi-account menu-icon"></i>
            </NavLink>
            <NavLink className="nav-link" to="/all-customers">
              <span className="menu-title">All Customers</span>
              <i className="mdi mdi-account-multiple menu-icon"></i>
            </NavLink>
            <NavLink className="nav-link" to="/product">
              <span className="menu-title">Product</span>
              <i className="mdi mdi-basket menu-icon"></i>
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Sidebar;
