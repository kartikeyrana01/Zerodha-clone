import React from "react";

const Positions = () => {
  const positions = [
    { name: "INFY (CNC)", value: 1200, pnl: "+2.5%" },
    { name: "RELIANCE (NRML)", value: 980, pnl: "-1.2%" },
  ];

  return (
    <div className="card shadow-sm">
      <div className="card-body">
        <h6 className="card-title fw-bold">Positions</h6>
        <ul className="list-group list-group-flush">
          {positions.map((p, i) => (
            <li
              key={i}
              className="list-group-item d-flex justify-content-between align-items-center"
            >
              <span>{p.name}</span>
              <span className={p.pnl.startsWith("+") ? "text-success" : "text-danger"}>
                {p.value} ({p.pnl})
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Positions;
