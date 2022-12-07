import React from "react";

const Header = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-dark">
        <div className="container-fluid">
          <a href="/" className="navbar-brand text-light">
            OLA
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navitem"
            aria-controls="navitem"
            aria-expanded="true"
            aria-label="Toggle"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
        </div>
        <div className="collapse navbar-collapse" id="navitem">
          <ul className="navbar-nav text-light">
            <li className="p-2">Home</li>
            <li className="nav-item text-nowrap p-2">Ola Ride</li>
            <li className="nav-item text-nowrap p-2">Ola Money</li>
            <li className="nav-item p-2">careers</li>
            <li className="nav-item p-2">About</li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Header;
