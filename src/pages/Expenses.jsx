import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

function Expenses() {
  const [records, setRecords] = useState([]);
  const [showAddExpense, setShowAddExpense] = useState(false);

  const [expenseForm, setExpenseForm] = useState({
    description: "",
    category: "Animal Feeds",
    amount: "",
    date: "",
  });

  // Get today's date using local time
  const today = new Date();
  const todayString = [
    today.getFullYear(),
    String(today.getMonth() + 1).padStart(2, "0"),
    String(today.getDate()).padStart(2, "0"),
  ].join("-");

  const monthString = todayString.slice(0, 7);

  // Add expense
  const addExpense = (e) => {
    e.preventDefault();

    const newExpense = {
      id: Date.now(),
      ...expenseForm,
      amount: Number(expenseForm.amount),
    };

    setRecords((prev) => [...prev, newExpense]);

    setExpenseForm({
      description: "",
      category: "Animal Feeds",
      amount: "",
      date: "",
    });

    setShowAddExpense(false);
  };

  // Delete expense
  const deleteExpense = (id) => {
    setRecords((prev) => prev.filter((record) => record.id !== id));
  };

  // Calculate expenses
  const todayExpenses = records
    .filter((record) => record.date === todayString)
    .reduce((total, record) => total + record.amount, 0);

  const monthExpenses = records
    .filter((record) => record.date.startsWith(monthString))
    .reduce((total, record) => total + record.amount, 0);

  const totalExpenses = records.reduce(
    (total, record) => total + record.amount,
    0,
  );

  const formatCurrency = (amount) => `UGX ${amount.toLocaleString("en-UG")}`;

  return (
    <div className="container-fluid bg-light min-vh-100 p-3 p-md-4">
      {/* Header */}
      <div className="d-flex flex-wrap justify-content-between align-items-center mb-4">
        <div>
          <h4 className="fw-bold mb-1">Farm Expenses</h4>
          <p className="text-muted small mb-0">
            Monitor and manage all farm expenditure.
          </p>
        </div>

        <button
          className="btn btn-success mt-3 mt-md-0"
          onClick={() => setShowAddExpense(true)}
        >
          <i className="bi bi-plus-circle me-2"></i>
          Add Expense
        </button>
      </div>

      {/* Summary Cards */}
      <div className="row g-3 mb-4">
        <div className="col-12 col-md-4">
          <div className="card border-0 shadow-sm h-100">
            <div className="card-body">
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <p className="text-muted small mb-2">Today's Expenses</p>
                  <h4 className="fw-bold mb-0">
                    {formatCurrency(todayExpenses)}
                  </h4>
                </div>
                <div className="bg-warning-subtle text-warning rounded-3 p-3">
                  <i className="bi bi-calendar-day fs-4"></i>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-12 col-md-4">
          <div className="card border-0 shadow-sm h-100">
            <div className="card-body">
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <p className="text-muted small mb-2">This Month</p>
                  <h4 className="fw-bold mb-0">
                    {formatCurrency(monthExpenses)}
                  </h4>
                </div>
                <div className="bg-primary-subtle text-primary rounded-3 p-3">
                  <i className="bi bi-calendar-month fs-4"></i>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-12 col-md-4">
          <div className="card border-0 shadow-sm h-100">
            <div className="card-body">
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <p className="text-muted small mb-2">Total Expenses</p>
                  <h4 className="fw-bold mb-0">
                    {formatCurrency(totalExpenses)}
                  </h4>
                  <small className="text-muted">
                    {records.length} expense records
                  </small>
                </div>
                <div className="bg-danger-subtle text-danger rounded-3 p-3">
                  <i className="bi bi-wallet2 fs-4"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Expense Records */}
      <div className="card border-0 shadow-sm">
        <div className="card-body p-3 p-md-4">
          <div className="d-flex justify-content-between align-items-center mb-3">
            <div>
              <h6 className="fw-bold mb-1">Expense Records</h6>
              <small className="text-muted">
                A record of all farm expenditure.
              </small>
            </div>

            <span className="badge bg-success-subtle text-success">
              {records.length} Records
            </span>
          </div>

          <div className="table-responsive">
            <table className="table table-hover align-middle">
              <thead className="table-light">
                <tr>
                  <th>Date</th>
                  <th>Description</th>
                  <th>Category</th>
                  <th>Amount</th>
                  <th>Action</th>
                </tr>
              </thead>

              <tbody>
                {records.length > 0 ? (
                  records.map((record) => (
                    <tr key={record.id}>
                      <td>{record.date}</td>
                      <td className="fw-semibold">{record.description}</td>
                      <td>
                        <span className="badge bg-light text-dark border">
                          {record.category}
                        </span>
                      </td>
                      <td className="fw-semibold">
                        {formatCurrency(record.amount)}
                      </td>
                      <td>
                        <button
                          className="btn btn-sm btn-outline-danger"
                          onClick={() => deleteExpense(record.id)}
                          title="Delete expense"
                        >
                          <i className="bi bi-trash"></i>
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="5" className="text-center text-muted py-5">
                      <i className="bi bi-receipt fs-2 d-block mb-2"></i>
                      No expense records yet.
                      <div className="small mt-1">
                        Click Add Expense to record your first expense.
                      </div>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Add Expense Modal */}
      {showAddExpense && (
        <div
          className="position-fixed top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center p-3"
          style={{
            backgroundColor: "rgba(0,0,0,0.5)",
            zIndex: 1055,
          }}
        >
          <div
            className="card border-0 shadow-lg w-100"
            style={{ maxWidth: "500px" }}
          >
            <div className="card-header bg-white d-flex justify-content-between align-items-center p-3">
              <h6 className="fw-bold mb-0">Record Farm Expense</h6>

              <button
                className="btn-close"
                onClick={() => setShowAddExpense(false)}
              ></button>
            </div>

            <form onSubmit={addExpense}>
              <div className="card-body p-4">
                <div className="mb-3">
                  <label className="form-label small fw-semibold">
                    Expense Description
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="e.g. Purchased chicken feeds"
                    value={expenseForm.description}
                    onChange={(e) =>
                      setExpenseForm({
                        ...expenseForm,
                        description: e.target.value,
                      })
                    }
                    required
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label small fw-semibold">
                    Expense Category
                  </label>
                  <select
                    className="form-select"
                    value={expenseForm.category}
                    onChange={(e) =>
                      setExpenseForm({
                        ...expenseForm,
                        category: e.target.value,
                      })
                    }
                  >
                    <option>Animal Feeds</option>
                    <option>Veterinary Services</option>
                    <option>Seeds and Fertilizers</option>
                    <option>Labour</option>
                    <option>Transport</option>
                    <option>Equipment</option>
                    <option>Utilities</option>
                    <option>Other</option>
                  </select>
                </div>

                <div className="mb-3">
                  <label className="form-label small fw-semibold">
                    Amount (UGX)
                  </label>
                  <input
                    type="number"
                    min="1"
                    step="1"
                    className="form-control"
                    placeholder="Enter amount"
                    value={expenseForm.amount}
                    onChange={(e) =>
                      setExpenseForm({
                        ...expenseForm,
                        amount: e.target.value,
                      })
                    }
                    required
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label small fw-semibold">
                    Expense Date
                  </label>
                  <input
                    type="date"
                    className="form-control"
                    max={todayString}
                    value={expenseForm.date}
                    onChange={(e) =>
                      setExpenseForm({
                        ...expenseForm,
                        date: e.target.value,
                      })
                    }
                    required
                  />
                </div>
              </div>

              <div className="card-footer bg-white d-flex justify-content-end gap-2 p-3">
                <button
                  type="button"
                  className="btn btn-light"
                  onClick={() => setShowAddExpense(false)}
                >
                  Cancel
                </button>

                <button type="submit" className="btn btn-success">
                  <i className="bi bi-check-circle me-2"></i>
                  Save Expense
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default Expenses;
