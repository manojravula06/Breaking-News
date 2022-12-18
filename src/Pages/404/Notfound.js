import React from "react";
import { useNavigate } from "react-router-dom";

function Notfound() {
 const navigate = useNavigate();

const goBack=()=>{
  navigate('/')
      }
  return (
    <div>
      <div className="d-flex justify-content-center m-5">
        <h1 className="display-1">404</h1>
      </div>
      <div>
      <p className="display-3 fw-bolder">Page not found</p>
        <button className="btn btn-danger"
        onClick={goBack}>Back</button>
      </div>
    </div>
  );
}

export default Notfound;
