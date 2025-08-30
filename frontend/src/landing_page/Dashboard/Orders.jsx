import React from "react";

const Orders = () => {
  const orders = [
    { id: 1, stock: "INFY", qty: 10, status: "Completed" },
    { id: 2, stock: "SBIN", qty: 25, status: "Pending" },
  ];

  return (
    <div className="card shadow-sm">
      <div className="card-body">
        <h6 className="card-title fw-bold">Orders</h6>
        <table className="table table-hover">
          <thead>
            <tr>
              <th>Stock</th>
              <th>Qty</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((o) => (
              <tr key={o.id}>
                <td>{o.stock}</td>
                <td>{o.qty}</td>
                <td>
                  <span
                    className={
                      o.status === "Completed"
                        ? "badge bg-success"
                        : "badge bg-warning text-dark"
                    }
                  >
                    {o.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Orders;
