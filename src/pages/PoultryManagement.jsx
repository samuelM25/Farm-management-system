import { Link } from "react-router-dom";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Summarycard from "../components/summaryCard";
import { useState } from "react";
import Producetable from "../components/producetable";
import AddExpense from "../components/AddExpense.jsx";
function PoultryManagement() {
  const [records, setRecords] = useState([]);
  const deleteRecord = (id) => {
    setRecords(records.filter((record) => record.id !== id));
  };
  const [showAddProduce, setShowAddProduce] = useState(false);
  return (
    <>
      <div className="container-fluid py-4">
        {/* Header */}
        <div className="d-flex justify-content-between align-items-center mb-4">
          <div>
            <h2 className="fw-bold">Egg Management</h2>
            <p className="text-muted">Track all farm produce</p>
          </div>
          <button
            className="btn btn-success"
            onClick={() => setShowAddProduce(true)}
          >
            <i className="bi bi-plus-circle me-2"></i>
            Add egg produce
          </button>
        </div>

        {/* Summary Cards */}

        <div className="row g-4 mb-4">
          <Summarycard title=" Todays produce" value={0} />

          <Summarycard title=" This month produce" value={0} />

          <Summarycard title="Total Records" value={records.length} />
        </div>
        {/* Expense Table */}

        <Producetable records={records} onDelete={deleteRecord} />
      </div>
      {showAddProduce && (
        <div
          className="position-fixed top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-start pt-4"
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.45)",
            backdropFilter: "blur(5px)",
            zIndex: 1055,
          }}
        >
          <AddExpense onClose={() => setShowAddProduce(false)} />
        </div>
      )}
    </>
  );
}
export default PoultryManagement;
