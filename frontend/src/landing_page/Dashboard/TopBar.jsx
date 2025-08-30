import React from "react";

const TopBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white border-bottom shadow-sm">
      <div className="container-fluid">
      <img src="https://kite.zerodha.com/static/images/kite-logo.svg" alt="kite" />
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item"><a className="nav-link active" href="#">Dashboard</a></li>
          <li className="nav-item"><a className="nav-link" href="#">Orders</a></li>
          <li className="nav-item"><a className="nav-link" href="#">Holdings</a></li>
          <li className="nav-item"><a className="nav-link" href="#">Positions</a></li>
          <li className="nav-item"><a className="nav-link" href="#">Funds</a></li>
          <li className="nav-item"><a className="nav-link" href="#">Apps</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default TopBar;


