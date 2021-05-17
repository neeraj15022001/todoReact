import React from "react";

function Card({description}) {
  return (
    <div className="card text-dark bg-light mb-3 w-100">
      <div className="card-body d-flex align-items-center justify-content-between">
        <p className="card-text">{description}</p>
        <button className="rounded-circle text-white btn btn-danger ms-4">
          <i className="bi bi-dash"></i>
        </button>
      </div>
    </div>
  );
}

export default Card;
