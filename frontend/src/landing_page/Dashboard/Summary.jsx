import React from "react";

const Summary = () => {
  return (
    <div className="card shadow-sm">
      <div className="card-body">
        <h5 className="card-title">Hi, User 👋</h5>
        <div className="row text-center mt-3">
          <div className="col-md-6 border-end">
            <h6 className="text-muted">Equity</h6>
            <h4 className="fw-bold">₹50,000</h4>
            <small className="text-muted">Margins used: 5k</small>
          </div>
          <div className="col-md-6">
            <h6 className="text-muted">Commodity</h6>
            <h4 className="fw-bold">₹28,000</h4>
            <small className="text-muted">Margins used: 2k</small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Summary;
