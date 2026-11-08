import { Link } from "react-router-dom";
import "bootstrap-icons/font/bootstrap-icons.css";
import Summarycard from "../components/summaryCard.jsx";
import Producetable from "../components/producetable.jsx";
import AddExpense from "../components/AddExpense.jsx";
import { useState } from "react";

function Expenses() {
  const [records, setRecords] = useState([]);
  const deleteRecord = (id) => {
    setRecords(records.filter((record) => record.id !== id));
  };
  const [ShowAddExpense, setShowAddExpense] = useState(false);

  return (
    <>
      <div className="container-fluid py-4">
        {/* Header */}
        <div className="d-flex justify-content-between align-items-center mb-4">
          <div>
            <h2 className="fw-bold">Expenses</h2>
            <p className="text-muted">Track all farm expenses</p>
          </div>

          <button
            className="btn btn-success"
            onClick={() => setShowAddExpense(true)}
          >
            <i className="bi bi-plus-circle me-2"></i>
            Add Expense
          </button>
        </div>

        {/* Summary Cards */}

        <div className="row g-4 mb-4">
          <Summarycard title="TodaysExpenses" value={0} />

          <Summarycard title="This months Expenses" value={0} />

          <Summarycard title="Total Expenses" value={records.length} />
        </div>

        {/* Expense Table */}

        <Producetable records={records} onDelete={deleteRecord} />
      </div>

      {ShowAddExpense && (
        <div
          className="position-fixed top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-start pt-4"
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.45)",
            backdropFilter: "blur(5px)",
            zIndex: 1055,
          }}
        >
          <AddExpense onClose={() => setShowAddExpense(false)} />
        </div>
      )}
    </>
  );
}

export default Expenses;
