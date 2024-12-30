import React, { useState } from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { Icon } from "@iconify/react";
import "./Layout.css";

export const Layout = ({ onLogout }) => {
  const [sideMenuActive, setSideMenuActive] = useState(true);
  const navigate = useNavigate();

  const handleToggle = () => {
    setSideMenuActive((current) => !current);
  };

  const logoutButton = () => {
    onLogout(); // Call the logout function passed from parent
    navigate("/"); // Redirect to login page
  };

  return (
    <div className="">
      <div className={sideMenuActive ? "sidebar" : "sidebar active"}>
        <div className="logo-details">
          <h3>Management</h3>
        </div>
        <ul className="nav-links left-sidebar ps-0 mt-4">
          <li>
            <NavLink to="patients">
              <i className="bx bx-grid-alt">
                <Icon icon="tdesign:user-filled" width="24" height="24" />
              </i>
              <span className="info">Patients</span>
            </NavLink>
          </li>
          <li className="mt-3">
            <NavLink to="appointments">
              <i className="bx bx-grid-alt">
                <Icon
                  icon="teenyicons:appointments-solid"
                  width="15"
                  height="15"
                />{" "}
              </i>
              <span className="info">Appointments</span>
            </NavLink>
          </li>
          <li className="mt-3">
            <NavLink to="communication">
              <i className="bx bx-grid-alt">
                <Icon icon="bxs:chat" />
              </i>
              <span className="info">Communication</span>
            </NavLink>
          </li>
          <li className="mt-3">
            <NavLink to="survey">
              <i className="bx bx-grid-alt">
                <Icon icon="solar:chart-bold" width="24" height="24" />
              </i>
              <span className="info">Survey</span>
            </NavLink>
          </li>
          <li className="mt-3">
            <NavLink to="payment">
              <i className="bx bx-grid-alt">
                <Icon icon="fluent:payment-24-filled" width="24" height="24" />
              </i>
              <span className="info">Payment</span>
            </NavLink>
          </li>
          <li className="mt-3">
            <NavLink to="manageuser">
              <i className="bx bx-grid-alt">
                <Icon
                  icon="material-symbols:manage-accounts"
                  width="24"
                  height="24"
                />
              </i>
              <span className="info">ManageUser</span>
            </NavLink>
          </li>
          <li className="mt-3">
            <a onClick={() => logoutButton()}>
              <i className="bx bx-grid-alt">
                <Icon icon="feather:log-out" />
              </i>
              <span className="info">Logout</span>
            </a>
          </li>
        </ul>
      </div>
      <section className="home-section">
        <nav>
          <div className="sidebar-button">
            <Icon icon="bx:menu" onClick={handleToggle}>
              <i className="bx bx-menu sidebarBtn"></i>
            </Icon>
          </div>
        </nav>
        <main className="main-content">
          <Outlet />
        </main>
      </section>
    </div>
  );
};
