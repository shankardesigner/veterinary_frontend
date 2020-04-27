import React from "react";
import { Link } from 'react-router-dom'

function Topbar() {
  return (
    <>
      <nav className="navbar default-layout-navbar col-lg-12 col-12 p-0 fixed-top d-flex flex-row">
        <div className="text-center navbar-brand-wrapper d-flex align-items-center justify-content-center">
          <Link className="navbar-brand brand-logo" to="/">
            <img src="images/logo.svg" alt="logo" />
          </Link>
          <Link className="navbar-brand brand-logo-mini" to="/">
            <img src="images/logo-mini.svg" alt="logo-mini" />
          </Link>
        </div>
        <div className="navbar-menu-wrapper d-flex align-items-stretch">
          <ul className="navbar-nav navbar-nav-right">
            <li className="nav-item nav-profile dropdown">
              <Link
                className="nav-link dropdown-toggle"
                id="profileDropdown"
                to="#"
                data-toggle="dropdown"
                aria-expanded="false"
              >
                <div className="nav-profile-img">
                  <img src="images/faces/face1.jpg" alt="face " />
                  <span className="availability-status online"></span>
                </div>
                <div className="nav-profile-text">
                  <p className="mb-1 text-black">David Greymaax</p>
                </div>
              </Link>
              <div
                className="dropdown-menu navbar-dropdown"
                aria-labelledby="profileDropdown"
              >
                <Link className="dropdown-item" to="#">
                  <i className="mdi mdi-cached mr-2 text-success"></i>
                  Activity Log
                </Link>
                <div className="dropdown-divider"></div>
                <Link className="dropdown-item" to="#">
                  <i className="mdi mdi-logout mr-2 text-primary"></i>
                  Signout
                </Link>
              </div>
            </li>
            <li className="nav-item dropdown">
              <Link
                className="nav-link count-indicator dropdown-toggle"
                id="messageDropdown"
                to="#"
                data-toggle="dropdown"
                aria-expanded="false"
              >
                <i className="mdi mdi-email-outline"></i>
                <span className="count-symbol bg-warning"></span>
              </Link>
              <div
                className="dropdown-menu dropdown-menu-right navbar-dropdown preview-list"
                aria-labelledby="messageDropdown"
              >
                <h6 className="p-3 mb-0">Messages</h6>
                <div className="dropdown-divider"></div>
                <Link className="dropdown-item preview-item" to="/profile">
                  <div className="preview-thumbnail">
                    <img
                      src="images/faces/face4.jpg"
                      alt=""
                      className="profile-pic"
                    />
                  </div>
                  <div className="preview-item-content d-flex align-items-start flex-column justify-content-center">
                    <h6 className="preview-subject ellipsis mb-1 font-weight-normal">
                      Mark send you a message
                    </h6>
                    <p className="text-gray mb-0">1 Minutes ago</p>
                  </div>
                </Link>
                <div className="dropdown-divider"></div>
                <Link className="dropdown-item preview-item" to="/">
                  <div className="preview-thumbnail">
                    <img
                      src="images/faces/face2.jpg"
                      alt=""
                      className="profile-pic"
                    />
                  </div>
                  <div className="preview-item-content d-flex align-items-start flex-column justify-content-center">
                    <h6 className="preview-subject ellipsis mb-1 font-weight-normal">
                      Cregh send you a message
                    </h6>
                    <p className="text-gray mb-0">15 Minutes ago</p>
                  </div>
                </Link>
                <div className="dropdown-divider"></div>
                <Link className="dropdown-item preview-item" to="/">
                  <div className="preview-thumbnail">
                    <img
                      src="images/faces/face3.jpg"
                      alt=""
                      className="profile-pic"
                    />
                  </div>
                  <div className="preview-item-content d-flex align-items-start flex-column justify-content-center">
                    <h6 className="preview-subject ellipsis mb-1 font-weight-normal">
                      Profile picture updated
                    </h6>
                    <p className="text-gray mb-0">18 Minutes ago</p>
                  </div>
                </Link>
                <div className="dropdown-divider"></div>
                <h6 className="p-3 mb-0 text-center">4 new messages</h6>
              </div>
            </li>
            <li className="nav-item dropdown">
              <Link
                className="nav-link count-indicator dropdown-toggle"
                id="notificationDropdown"
                to="#"
                data-toggle="dropdown"
              >
                <i className="mdi mdi-bell-outline"></i>
                <span className="count-symbol bg-danger"></span>
              </Link>
              <div
                className="dropdown-menu dropdown-menu-right navbar-dropdown preview-list"
                aria-labelledby="notificationDropdown"
              >
                <h6 className="p-3 mb-0">Notifications</h6>
                <div className="dropdown-divider"></div>
                <Link className="dropdown-item preview-item" to="/">
                  <div className="preview-thumbnail">
                    <div className="preview-icon bg-success">
                      <i className="mdi mdi-calendar"></i>
                    </div>
                  </div>
                  <div className="preview-item-content d-flex align-items-start flex-column justify-content-center">
                    <h6 className="preview-subject font-weight-normal mb-1">
                      Event today
                    </h6>
                    <p className="text-gray ellipsis mb-0">
                      Just a reminder that you have an event today
                    </p>
                  </div>
                </Link>
                <div className="dropdown-divider"></div>
                <Link className="dropdown-item preview-item" to="/">
                  <div className="preview-thumbnail">
                    <div className="preview-icon bg-warning">
                      <i className="mdi mdi-settings"></i>
                    </div>
                  </div>
                  <div className="preview-item-content d-flex align-items-start flex-column justify-content-center">
                    <h6 className="preview-subject font-weight-normal mb-1">
                      Settings
                    </h6>
                    <p className="text-gray ellipsis mb-0">Update dashboard</p>
                  </div>
                </Link>
                <div className="dropdown-divider"></div>
                <Link className="dropdown-item preview-item" to="/">
                  <div className="preview-thumbnail">
                    <div className="preview-icon bg-info">
                      <i className="mdi mdi-link-variant"></i>
                    </div>
                  </div>
                  <div className="preview-item-content d-flex align-items-start flex-column justify-content-center">
                    <h6 className="preview-subject font-weight-normal mb-1">
                      Launch Admin
                    </h6>
                    <p className="text-gray ellipsis mb-0">New admin wow!</p>
                  </div>
                </Link>
                <div className="dropdown-divider"></div>
                <h6 className="p-3 mb-0 text-center">See all notifications</h6>
              </div>
            </li>
            <li className="nav-item nav-logout d-none d-lg-block">
              <Link className="nav-link" to="#">
                <i className="mdi mdi-power"></i>
              </Link>
            </li>
          </ul>
          <button
            className="navbar-toggler navbar-toggler-right d-lg-none align-self-center"
            type="button"
            data-toggle="offcanvas"
          >
            <span className="mdi mdi-menu"></span>
          </button>
        </div>
      </nav>
    </>
  );
}

export default Topbar;
