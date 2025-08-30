import React from "react";

const WatchList = () => {
  const stocks = [
    { name: "INFY", change: "+1.29%", price: "1161.55" },
    { name: "SBIN", change: "+0.50%", price: "249.20" },
    { name: "RELIANCE", change: "-0.57%", price: "890.40" },
  ];

  return (
    <div>
      <input
        type="text"
        placeholder="Search stocks..."
        className="form-control mb-3"
      />
      <ul className="list-group">
        {stocks.map((s, i) => (
          <li
            key={i}
            className="list-group-item d-flex justify-content-between align-items-center"
          >
            <span className="fw-bold">{s.name}</span>
            <span
              className={
                s.change.startsWith("+") ? "text-success" : "text-danger"
              }
            >
              {s.change} | {s.price}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WatchList;
