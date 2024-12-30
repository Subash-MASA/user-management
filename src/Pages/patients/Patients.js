import React from "react";
import { Icon } from "@iconify/react";
import SimpleChart from "../chart/Chart";
import "./Patients.css";

export const Patients = () => {
  return (
    <div className="row">
      <div className="col-6">
        <div className="chart">
          <SimpleChart />
        </div>
      </div>
      <div className="col-6">
        <div className="chart">
          <SimpleChart />
        </div>
      </div>
      <div className="col-6 mt-5">
        <div className="chart">
          <SimpleChart />
        </div>
      </div>
      <div className="chart-button">
        <button>
          <span className="me-2">
            <Icon icon="feather:download" />
          </span>
          Download all
        </button>
      </div>
    </div>
  );
};
