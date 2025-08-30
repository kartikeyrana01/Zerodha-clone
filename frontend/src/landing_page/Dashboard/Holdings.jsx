import React from "react";

const Holdings = () => {
  return (
    <div className="card shadow-sm">
      <div className="card-body">
        <h6 className="card-title fw-bold">Holdings (58)</h6>
        <h4 className="text-success">₹1.76L <small className="text-muted">52.1%</small></h4>
        <div className="progress mt-3" style={{ height: "8px" }}>
          <div className="progress-bar bg-success" style={{ width: "60%" }}></div>
          <div className="progress-bar bg-danger" style={{ width: "40%" }}></div>
        </div>
        <div className="d-flex justify-content-between mt-2">
          <small>Current Value: ₹3.01L</small>
          <small>Investment: ₹1.25L</small>
        </div>
      </div>
    </div>
  );
};

export default Holdings;
