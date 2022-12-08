import React from "react";

const Header = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-dark">
        <div className="container-fluid">
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
            <li className="nav-item text-nowrap mx-1">Drive with ola</li>
            <li className="nav-item text-nowrap mx-1">Ola Money</li>
            <li className="nav-item text-nowrap mx-1">Ola Corporate</li>
            <li className="nav-item text-nowrap mx-1">Ola Foundation</li>
            <li className="nav-item text-nowrap mx-1">Share</li>
            <li className="nav-item text-nowrap mx-1">Offers</li>
            <li className="nav-item text-nowrap mx-1">Support</li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Header;
