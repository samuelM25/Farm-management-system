import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

function Sales() {
  const [sales, setSales] = useState([]);
  const [showSaleForm, setShowSaleForm] = useState(false);

  const [saleForm, setSaleForm] = useState({
    customer: "",
    product: "",
    category: "Eggs",
    quantity: "",
    unitPrice: "",
    date: "",
  });

  // Local date
  const now = new Date();
  const today = [
    now.getFullYear(),
    String(now.getMonth() + 1).padStart(2, "0"),
    String(now.getDate()).padStart(2, "0"),
  ].join("-");

  const currentMonth = today.slice(0, 7);

  // Format currency
  const formatCurrency = (amount) => `UGX ${amount.toLocaleString("en-UG")}`;

  // Calculate total for one sale
  const calculateSaleTotal = (sale) => sale.quantity * sale.unitPrice;

  // Add sale
  const addSale = (e) => {
    e.preventDefault();

    const newSale = {
      id: Date.now(),
      ...saleForm,
      quantity: Number(saleForm.quantity),
      unitPrice: Number(saleForm.unitPrice),
    };

    setSales((prev) => [...prev, newSale]);

    setSaleForm({
      customer: "",
      product: "",
      category: "Eggs",
      quantity: "",
      unitPrice: "",
      date: "",
    });

    setShowSaleForm(false);
  };

  // Delete sale
  const deleteSale = (id) => {
    setSales((prev) => prev.filter((sale) => sale.id !== id));
  };

  // Summary calculations
  const totalRevenue = sales.reduce(
    (total, sale) => total + calculateSaleTotal(sale),
    0,
  );

  const todayRevenue = sales
    .filter((sale) => sale.date === today)
    .reduce((total, sale) => total + calculateSaleTotal(sale), 0);

  const monthRevenue = sales
    .filter((sale) => sale.date.startsWith(currentMonth))
    .reduce((total, sale) => total + calculateSaleTotal(sale), 0);

  const totalItemsSold = sales.reduce(
    (total, sale) => total + sale.quantity,
    0,
  );

  return (
    <div className="container-fluid bg-light min-vh-100 p-3 p-md-4">
      {/* Header */}
      <div className="d-flex flex-wrap justify-content-between align-items-center mb-4">
        <div>
          <h4 className="fw-bold mb-1">Farm Sales</h4>
          <p className="text-muted small mb-0">
            Record sales and monitor farm revenue.
          </p>
        </div>

        <button
          className="btn btn-success mt-3 mt-md-0"
          onClick={() => setShowSaleForm(true)}
        >
          <i className="bi bi-plus-circle me-2"></i>
          Record Sale
        </button>
      </div>

      {/* Summary Cards */}
      <div className="row g-3 mb-4">
        <div className="col-12 col-sm-6 col-xl-3">
          <div className="card border-0 shadow-sm h-100">
            <div className="card-body">
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <p className="text-muted small mb-2">Today's Revenue</p>
                  <h5 className="fw-bold mb-0">
                    {formatCurrency(todayRevenue)}
                  </h5>
                </div>
                <div className="bg-success-subtle text-success rounded-3 p-3">
                  <i className="bi bi-cash-stack fs-4"></i>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-12 col-sm-6 col-xl-3">
          <div className="card border-0 shadow-sm h-100">
            <div className="card-body">
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <p className="text-muted small mb-2">This Month</p>
                  <h5 className="fw-bold mb-0">
                    {formatCurrency(monthRevenue)}
                  </h5>
                </div>
                <div className="bg-primary-subtle text-primary rounded-3 p-3">
                  <i className="bi bi-calendar-month fs-4"></i>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-12 col-sm-6 col-xl-3">
          <div className="card border-0 shadow-sm h-100">
            <div className="card-body">
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <p className="text-muted small mb-2">Total Revenue</p>
                  <h5 className="fw-bold mb-0">
                    {formatCurrency(totalRevenue)}
                  </h5>
                </div>
                <div className="bg-warning-subtle text-warning rounded-3 p-3">
                  <i className="bi bi-graph-up-arrow fs-4"></i>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-12 col-sm-6 col-xl-3">
          <div className="card border-0 shadow-sm h-100">
            <div className="card-body">
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <p className="text-muted small mb-2">Items Sold</p>
                  <h5 className="fw-bold mb-0">
                    {totalItemsSold.toLocaleString()}
                  </h5>
                  <small className="text-muted">Total quantity</small>
                </div>
                <div className="bg-info-subtle text-info rounded-3 p-3">
                  <i className="bi bi-basket-fill fs-4"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sales Table */}
      <div className="card border-0 shadow-sm">
        <div className="card-body p-3 p-md-4">
          <div className="d-flex justify-content-between align-items-center mb-3">
            <div>
              <h6 className="fw-bold mb-1">Sales Records</h6>
              <small className="text-muted">
                View and manage all farm sales.
              </small>
            </div>

            <span className="badge bg-success-subtle text-success">
              {sales.length} Records
            </span>
          </div>

          <div className="table-responsive">
            <table className="table table-hover align-middle">
              <thead className="table-light">
                <tr>
                  <th>Date</th>
                  <th>Customer</th>
                  <th>Product</th>
                  <th>Category</th>
                  <th>Quantity</th>
                  <th>Unit Price</th>
                  <th>Total</th>
                  <th>Action</th>
                </tr>
              </thead>

              <tbody>
                {sales.length > 0 ? (
                  sales.map((sale) => (
                    <tr key={sale.id}>
                      <td>{sale.date}</td>
                      <td className="fw-semibold">{sale.customer}</td>
                      <td>{sale.product}</td>
                      <td>
                        <span className="badge bg-light text-dark border">
                          {sale.category}
                        </span>
                      </td>
                      <td>{sale.quantity.toLocaleString()}</td>
                      <td>{formatCurrency(sale.unitPrice)}</td>
                      <td className="fw-semibold text-success">
                        {formatCurrency(calculateSaleTotal(sale))}
                      </td>
                      <td>
                        <button
                          className="btn btn-sm btn-outline-danger"
                          onClick={() => deleteSale(sale.id)}
                          title="Delete sale"
                        >
                          <i className="bi bi-trash"></i>
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="8" className="text-center text-muted py-5">
                      <i className="bi bi-receipt fs-2 d-block mb-2"></i>
                      No sales recorded yet.
                      <div className="small mt-1">
                        Click Record Sale to add your first sale.
                      </div>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Add Sale Modal */}
      {showSaleForm && (
        <div
          className="position-fixed top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center p-3"
          style={{
            backgroundColor: "rgba(0,0,0,0.5)",
            zIndex: 1055,
          }}
        >
          <div
            className="card border-0 shadow-lg w-100"
            style={{ maxWidth: "550px" }}
          >
            <div className="card-header bg-white d-flex justify-content-between align-items-center p-3">
              <h6 className="fw-bold mb-0">Record Farm Sale</h6>
              <button
                className="btn-close"
                onClick={() => setShowSaleForm(false)}
              ></button>
            </div>

            <form onSubmit={addSale}>
              <div className="card-body p-4">
                <div className="mb-3">
                  <label className="form-label small fw-semibold">
                    Customer Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter customer name"
                    value={saleForm.customer}
                    onChange={(e) =>
                      setSaleForm({
                        ...saleForm,
                        customer: e.target.value,
                      })
                    }
                    required
                  />
                </div>

                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label className="form-label small fw-semibold">
                      Product
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="e.g. Tray of eggs"
                      value={saleForm.product}
                      onChange={(e) =>
                        setSaleForm({
                          ...saleForm,
                          product: e.target.value,
                        })
                      }
                      required
                    />
                  </div>

                  <div className="col-md-6 mb-3">
                    <label className="form-label small fw-semibold">
                      Category
                    </label>
                    <select
                      className="form-select"
                      value={saleForm.category}
                      onChange={(e) =>
                        setSaleForm({
                          ...saleForm,
                          category: e.target.value,
                        })
                      }
                    >
                      <option>Eggs</option>
                      <option>Poultry</option>
                      <option>Livestock</option>
                      <option>Crops</option>
                      <option>Other Produce</option>
                    </select>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label className="form-label small fw-semibold">
                      Quantity
                    </label>
                    <input
                      type="number"
                      min="1"
                      step="any"
                      className="form-control"
                      placeholder="Enter quantity"
                      value={saleForm.quantity}
                      onChange={(e) =>
                        setSaleForm({
                          ...saleForm,
                          quantity: e.target.value,
                        })
                      }
                      required
                    />
                  </div>

                  <div className="col-md-6 mb-3">
                    <label className="form-label small fw-semibold">
                      Unit Price (UGX)
                    </label>
                    <input
                      type="number"
                      min="1"
                      step="any"
                      className="form-control"
                      placeholder="Enter unit price"
                      value={saleForm.unitPrice}
                      onChange={(e) =>
                        setSaleForm({
                          ...saleForm,
                          unitPrice: e.target.value,
                        })
                      }
                      required
                    />
                  </div>
                </div>

                <div className="mb-3">
                  <label className="form-label small fw-semibold">
                    Sale Date
                  </label>
                  <input
                    type="date"
                    className="form-control"
                    max={today}
                    value={saleForm.date}
                    onChange={(e) =>
                      setSaleForm({
                        ...saleForm,
                        date: e.target.value,
                      })
                    }
                    required
                  />
                </div>

                {saleForm.quantity && saleForm.unitPrice && (
                  <div className="bg-success-subtle rounded-3 p-3">
                    <small className="text-success fw-semibold">
                      Sale Total
                    </small>
                    <h5 className="fw-bold text-success mb-0">
                      {formatCurrency(
                        Number(saleForm.quantity) * Number(saleForm.unitPrice),
                      )}
                    </h5>
                  </div>
                )}
              </div>

              <div className="card-footer bg-white d-flex justify-content-end gap-2 p-3">
                <button
                  type="button"
                  className="btn btn-light"
                  onClick={() => setShowSaleForm(false)}
                >
                  Cancel
                </button>

                <button type="submit" className="btn btn-success">
                  <i className="bi bi-check-circle me-2"></i>
                  Save Sale
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default Sales;
