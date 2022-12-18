import React from "react";
import { useNavigate } from "react-router-dom";
const Header = () => {
  const navigate=useNavigate()
  const gotonews=(e)=>{
    e.preventDefault()
    navigate('/international')
  }
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
            <li className="nav-item text-nowrap mx-1"onClick={gotonews}>Tesla News</li>
            <li className="nav-item text-nowrap mx-1">International News</li>
            <li className="nav-item text-nowrap mx-1">International News</li>
            <li className="nav-item text-nowrap mx-1">International News</li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Header;
