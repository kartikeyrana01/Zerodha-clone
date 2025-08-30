import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

// Register all required components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const VerticalGraph = () => {
  const data = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri"],
    datasets: [
      {
        label: "Market Overview",
        data: [120, 190, 170, 220, 150],
        fill: false,
        borderColor: "blue",
        tension: 0.3,
      },
    ],
  };

  return (
    <div className="card shadow-sm">
      <div className="card-body">
        <h6 className="card-title fw-bold">Market Overview</h6>
        <Line data={data} />
      </div>
    </div>
  );
};

export default VerticalGraph;

