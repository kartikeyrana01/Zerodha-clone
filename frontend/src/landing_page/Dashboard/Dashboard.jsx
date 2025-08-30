import React from "react";
import TopBar from "./TopBar";
import WatchList from "./WatchList";
import Holdings from "./Holdings";
import Summary from "./Summary";
import VerticalGraph from "./VerticalGraph";
import Orders from "./Orders";
import Positions from "./Positions";

const Dashboard = () => {
  return (
    <div className="container-fluid">
 

      <div className="row mt-3">
        {/* Left Watchlist */}
        <div className="col-md-3 border-end">
          <WatchList />
        </div>

        {/* Main Content */}
        <div className="col-md-9">
          {/* Balance Summary */}
          <Summary />

          {/* Holdings */}
          <div className="mt-4">
            <Holdings />
          </div>

          {/* Market Overview Graph */}
          <div className="mt-4">
            <VerticalGraph />
          </div>

          {/* Orders Section */}
          <div className="mt-4">
            <Orders />
          </div>

          {/* Positions Section */}
          <div className="mt-4">
            <Positions />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;


