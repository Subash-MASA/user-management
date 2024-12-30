import React, { useRef } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import "./Chart.css";

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const SimpleChart = () => {
  const chartRef = useRef(null);

  const data = {
    labels: [
      "Nov-2023",
      "Dec-2023",
      "Jan-2024",
      "Feb-2024",
      "Mar-2024",
      "Apr-2024",
      "May-2024",
      "Jun-2024",
      "Jul-2024",
      "Aug-2024",
      "Sep-2024",
      "Oct-2024",
      "Nov-2024",
    ],
    datasets: [
      {
        label: "Intake Viewed per Month",
        data: [
          1200, 1500, 1300, 1400, 1700, 1600, 1500, 1450, 1400, 1350, 1500,
          1550, 1600,
        ],
        backgroundColor: "rgba(54, 162, 235, 0.7)",
        borderColor: "rgba(54, 162, 235, 1)",
        borderWidth: 1,
      },
      {
        label: "Intake Submitted per Month",
        data: [
          1100, 1400, 1200, 1300, 1600, 1550, 1450, 1400, 1350, 1300, 1400,
          1500, 1550,
        ],
        backgroundColor: "rgba(255, 99, 132, 0.7)",
        borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
        labels: {
          font: {
            size: 14,
          },
          usePointStyle: true,
        },
      },
      title: {
        display: true,
        text: "Number of Intake Submission vs Views",
        font: {
          size: 20,
          weight: "bold",
        },
        padding: {
          top: 10,
          bottom: 10,
        },
      },
      subtitle: {
        display: true,
        text: "Total Intake Views - 18114 | Total Intake Submitted - 16886",
        font: {
          size: 16,
          style: "italic",
        },
        color: "#666",
      },
      tooltip: {
        callbacks: {
          label: function (context) {
            const value = context.raw;
            return `${context.dataset.label}: ${value}`;
          },
        },
      },
    },
    scales: {
      x: {
        ticks: {
          font: {
            size: 12,
          },
          maxRotation: 45,
          minRotation: 45,
        },
        grid: {
          display: false,
        },
      },
      y: {
        ticks: {
          font: {
            size: 12,
          },
          callback: function (value) {
            return value;
          },
        },
        grid: {
          color: "rgba(200, 200, 200, 0.3)",
        },
      },
    },
  };

  return (
    <div>
      <Bar ref={chartRef} data={data} options={options} />
      <div className="row chart-but">
        <div className="col-12 col-md-6 d-flex justify-content-between">
          <button className="btn btn-primary">Download PDF</button>
          <button className="btn btn-secondary">Change to Line Chart</button>
        </div>
      </div>
    </div>
  );
};

export default SimpleChart;
