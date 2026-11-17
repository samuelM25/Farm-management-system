import StatCard from "../components/StatCard.jsx";
import ActivityCard from "../components/ActivityCard.jsx";
import TaskCard from "../components/TaskCard.jsx";
import WeatherCard from "../components/WeatherCard.jsx";

import { Line, Doughnut } from "react-chartjs-2";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  ArcElement,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  ArcElement,
  Tooltip,
  Legend,
  Filler,
);

// Monthly production chart data (sample data)
const productionData = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
  datasets: [
    {
      label: "Production",
      data: [120, 180, 150, 230, 200, 300],
      borderColor: "#198754",
      backgroundColor: "rgba(25, 135, 84, 0.12)",
      fill: true,
      tension: 0.4,
      pointRadius: 4,
      pointBackgroundColor: "#198754",
    },
  ],
};

// Livestock distribution (sample data)
const livestockData = {
  labels: ["Cattle", "Goats", "Sheep", "Poultry"],
  datasets: [
    {
      data: [45, 30, 20, 150],
      backgroundColor: ["#198754", "#ffc107", "#0d6efd", "#20c997"],
      borderWidth: 0,
      hoverOffset: 6,
    },
  ],
};

const lineOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false,
    },
  },
  scales: {
    y: {
      beginAtZero: true,
      grid: {
        color: "#eeeeee",
      },
    },
    x: {
      grid: {
        display: false,
      },
    },
  },
};

const doughnutOptions = {
  responsive: true,
  maintainAspectRatio: false,
  cutout: "70%",
  plugins: {
    legend: {
      position: "bottom",
    },
  },
};

function Dashboard() {
  return (
    <div className="container-fluid bg-light min-vh-100 p-3 p-md-4">
      {/* Header */}
      <div className="d-flex flex-wrap justify-content-between align-items-center mb-4">
        <div>
          <h4 className="fw-bold mb-1">Farm Dashboard</h4>
          <p className="text-muted small mb-0">
            Monitor your farm performance and daily activities.
          </p>
        </div>

        <div className="mt-3 mt-md-0">
          <span className="badge bg-success-subtle text-success px-3 py-2">
            <i className="bi bi-circle-fill me-2 small"></i>
            Farm Overview
          </span>
        </div>
      </div>

      {/* Statistics Cards */}
      <div className="row g-3 mb-4">
        <div className="col-12 col-sm-6 col-xl">
          <div className="card border-0 shadow-sm h-100">
            <div className="card-body">
              <div className="d-flex justify-content-between">
                <div>
                  <p className="text-muted small mb-2">Livestock</p>
                  <h4 className="fw-bold mb-0">245</h4>
                  <small className="text-success">
                    <i className="bi bi-arrow-up me-1"></i>
                    Total animals
                  </small>
                </div>
                <div className="bg-success-subtle text-success rounded-3 p-3 align-self-start">
                  <i className="bi bi-house-heart-fill fs-4"></i>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-12 col-sm-6 col-xl">
          <div className="card border-0 shadow-sm h-100">
            <div className="card-body">
              <div className="d-flex justify-content-between">
                <div>
                  <p className="text-muted small mb-2">Crop Fields</p>
                  <h4 className="fw-bold mb-0">18</h4>
                  <small className="text-muted">Active fields</small>
                </div>
                <div className="bg-warning-subtle text-warning rounded-3 p-3 align-self-start">
                  <i className="bi bi-flower1 fs-4"></i>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-12 col-sm-6 col-xl">
          <div className="card border-0 shadow-sm h-100">
            <div className="card-body">
              <div className="d-flex justify-content-between">
                <div>
                  <p className="text-muted small mb-2">Revenue</p>
                  <h4 className="fw-bold mb-0">3.5M</h4>
                  <small className="text-muted">UGX this month</small>
                </div>
                <div className="bg-primary-subtle text-primary rounded-3 p-3 align-self-start">
                  <i className="bi bi-cash-stack fs-4"></i>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-12 col-sm-6 col-xl">
          <div className="card border-0 shadow-sm h-100">
            <div className="card-body">
              <div className="d-flex justify-content-between">
                <div>
                  <p className="text-muted small mb-2">Poultry</p>
                  <h4 className="fw-bold mb-0">4,000</h4>
                  <small className="text-muted">Total birds</small>
                </div>
                <div className="bg-info-subtle text-info rounded-3 p-3 align-self-start">
                  <i className="bi bi-egg-fill fs-4"></i>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-12 col-sm-6 col-xl">
          <div className="card border-0 shadow-sm h-100">
            <div className="card-body">
              <div className="d-flex justify-content-between">
                <div>
                  <p className="text-muted small mb-2">Pending Tasks</p>
                  <h4 className="fw-bold mb-0">6</h4>
                  <small className="text-danger">Needs attention</small>
                </div>
                <div className="bg-danger-subtle text-danger rounded-3 p-3 align-self-start">
                  <i className="bi bi-list-check fs-4"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Charts */}
      <div className="row g-3 mb-4">
        {/* Production Chart */}
        <div className="col-12 col-xl-8">
          <div className="card border-0 shadow-sm h-100">
            <div className="card-body p-3 p-md-4">
              <div className="d-flex justify-content-between align-items-center mb-4">
                <div>
                  <h6 className="fw-bold mb-1">Farm Production</h6>
                  <small className="text-muted">
                    Monthly production performance
                  </small>
                </div>

                <button className="btn btn-outline-success btn-sm">
                  <i className="bi bi-calendar3 me-2"></i>6 Months
                </button>
              </div>

              <div style={{ height: "300px" }}>
                <Line data={productionData} options={lineOptions} />
              </div>
            </div>
          </div>
        </div>

        {/* Livestock Chart */}
        <div className="col-12 col-xl-4">
          <div className="card border-0 shadow-sm h-100">
            <div className="card-body p-3 p-md-4">
              <h6 className="fw-bold mb-1">Livestock Distribution</h6>
              <small className="text-muted">Animals by category</small>

              <div className="mt-3" style={{ height: "260px" }}>
                <Doughnut data={livestockData} options={doughnutOptions} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Activities and Tasks */}
      <div className="row g-3 mb-4">
        <div className="col-12 col-xl-6">
          <ActivityCard />
        </div>

        <div className="col-12 col-xl-6">
          <TaskCard />
        </div>
      </div>

      {/* Weather */}
      <div className="row g-3">
        <div className="col-12">
          <WeatherCard />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
