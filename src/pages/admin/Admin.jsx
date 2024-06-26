import React from "react";
import "./Admin.css";
import { Link, Outlet } from "react-router-dom";

const Admin = () => {
  return (
    <div className="admin">
      <div className="admin__sidebar">
        <ul>
          <li className="admin__item">
            <Link to="create">Create product</Link>
          </li>
          <li  className="admin__item">
            <Link to="manage">Manage product</Link>
          </li>
        </ul>
      </div>
      <div className="admin__content">
        <h2>Admin</h2>
        <br />
        <Outlet />
      </div>
    </div>
  );
};

export default Admin;
