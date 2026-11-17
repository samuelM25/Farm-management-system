import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

function PoultryManagement() {
  const [batches, setBatches] = useState([]);
  const [produceRecords, setProduceRecords] = useState([]);

  const [showBatchForm, setShowBatchForm] = useState(false);
  const [showProduceForm, setShowProduceForm] = useState(false);

  const [batchForm, setBatchForm] = useState({
    name: "",
    birdType: "Layers",
    quantity: "",
    dateReceived: "",
  });

  const [produceForm, setProduceForm] = useState({
    batchId: "",
    date: "",
    quantity: "",
  });

  // Add a new batch of birds
  const addBatch = (e) => {
    e.preventDefault();

    const newBatch = {
      id: Date.now(),
      ...batchForm,
      quantity: Number(batchForm.quantity),
    };

    setBatches((prev) => [...prev, newBatch]);

    setBatchForm({
      name: "",
      birdType: "Layers",
      quantity: "",
      dateReceived: "",
    });

    setShowBatchForm(false);
  };

  // Record egg production
  const addProduce = (e) => {
    e.preventDefault();

    const selectedBatch = batches.find(
      (batch) => batch.id === Number(produceForm.batchId),
    );

    const newRecord = {
      id: Date.now(),
      batchName: selectedBatch.name,
      ...produceForm,
      quantity: Number(produceForm.quantity),
    };

    setProduceRecords((prev) => [...prev, newRecord]);

    setProduceForm({
      batchId: "",
      date: "",
      quantity: "",
    });

    setShowProduceForm(false);
  };

  // Delete a batch
  const deleteBatch = (id) => {
    setBatches((prev) => prev.filter((batch) => batch.id !== id));
  };

  // Delete a production record
  const deleteProduce = (id) => {
    setProduceRecords((prev) => prev.filter((record) => record.id !== id));
  };

  // Calculate summaries
  const totalBirds = batches.reduce(
    (total, batch) => total + batch.quantity,
    0,
  );

  const totalEggs = produceRecords.reduce(
    (total, record) => total + record.quantity,
    0,
  );

  const today = new Date().toISOString().split("T")[0];

  const todaysProduce = produceRecords
    .filter((record) => record.date === today)
    .reduce((total, record) => total + record.quantity, 0);

  const thisMonthProduce = produceRecords
    .filter((record) => record.date.startsWith(today.slice(0, 7)))
    .reduce((total, record) => total + record.quantity, 0);

  return (
    <div className="container-fluid bg-light min-vh-100 p-3 p-md-4">
      {/* Page Header */}
      <div className="d-flex flex-wrap justify-content-between align-items-center mb-4">
        <div>
          <h4 className="fw-bold mb-1">Poultry Management</h4>
          <p className="text-muted small mb-0">
            Manage bird batches and monitor poultry production.
          </p>
        </div>

        <div className="d-flex gap-2 mt-3 mt-md-0">
          <button
            className="btn btn-outline-success"
            onClick={() => setShowBatchForm(true)}
          >
            <i className="bi bi-plus-circle me-2"></i>
            Add Bird Batch
          </button>

          <button
            className="btn btn-success"
            onClick={() => setShowProduceForm(true)}
            disabled={batches.length === 0}
          >
            <i className="bi bi-plus-circle me-2"></i>
            Record Produce
          </button>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="row g-3 mb-4">
        <div className="col-12 col-sm-6 col-xl-3">
          <div className="card border-0 shadow-sm h-100">
            <div className="card-body">
              <div className="d-flex justify-content-between">
                <div>
                  <p className="text-muted small mb-2">Total Birds</p>
                  <h4 className="fw-bold mb-0">
                    {totalBirds.toLocaleString()}
                  </h4>
                </div>
                <div className="bg-success-subtle text-success rounded-3 p-3">
                  <i className="bi bi-egg-fill fs-4"></i>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-12 col-sm-6 col-xl-3">
          <div className="card border-0 shadow-sm h-100">
            <div className="card-body">
              <div className="d-flex justify-content-between">
                <div>
                  <p className="text-muted small mb-2">Total Batches</p>
                  <h4 className="fw-bold mb-0">{batches.length}</h4>
                </div>
                <div className="bg-primary-subtle text-primary rounded-3 p-3">
                  <i className="bi bi-collection-fill fs-4"></i>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-12 col-sm-6 col-xl-3">
          <div className="card border-0 shadow-sm h-100">
            <div className="card-body">
              <div className="d-flex justify-content-between">
                <div>
                  <p className="text-muted small mb-2">Today's Eggs</p>
                  <h4 className="fw-bold mb-0">
                    {todaysProduce.toLocaleString()}
                  </h4>
                </div>
                <div className="bg-warning-subtle text-warning rounded-3 p-3">
                  <i className="bi bi-basket-fill fs-4"></i>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-12 col-sm-6 col-xl-3">
          <div className="card border-0 shadow-sm h-100">
            <div className="card-body">
              <div className="d-flex justify-content-between">
                <div>
                  <p className="text-muted small mb-2">This Month's Eggs</p>
                  <h4 className="fw-bold mb-0">
                    {thisMonthProduce.toLocaleString()}
                  </h4>
                </div>
                <div className="bg-info-subtle text-info rounded-3 p-3">
                  <i className="bi bi-bar-chart-fill fs-4"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bird Batches */}
      <div className="card border-0 shadow-sm mb-4">
        <div className="card-body p-3 p-md-4">
          <div className="d-flex justify-content-between align-items-center mb-3">
            <div>
              <h6 className="fw-bold mb-1">Bird Batches</h6>
              <small className="text-muted">
                Record and manage birds brought to the farm.
              </small>
            </div>
            <span className="badge bg-success-subtle text-success">
              {batches.length} Batches
            </span>
          </div>

          <div className="table-responsive">
            <table className="table table-hover align-middle">
              <thead className="table-light">
                <tr>
                  <th>Batch Name</th>
                  <th>Bird Type</th>
                  <th>Number of Birds</th>
                  <th>Date Received</th>
                  <th>Action</th>
                </tr>
              </thead>

              <tbody>
                {batches.length > 0 ? (
                  batches.map((batch) => (
                    <tr key={batch.id}>
                      <td className="fw-semibold">{batch.name}</td>
                      <td>{batch.birdType}</td>
                      <td>{batch.quantity.toLocaleString()}</td>
                      <td>{batch.dateReceived}</td>
                      <td>
                        <button
                          className="btn btn-sm btn-outline-danger"
                          onClick={() => deleteBatch(batch.id)}
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
                      No bird batches recorded yet.
                      <div className="small mt-1">
                        Click Add Batch to record your first batch.
                      </div>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Egg Production Records */}
      <div className="card border-0 shadow-sm">
        <div className="card-body p-3 p-md-4">
          <div className="d-flex justify-content-between align-items-center mb-3">
            <div>
              <h6 className="fw-bold mb-1">Egg Production Records</h6>
              <small className="text-muted">
                Track eggs collected from each bird batch.
              </small>
            </div>
            <span className="badge bg-warning-subtle text-warning">
              {totalEggs.toLocaleString()} Eggs
            </span>
          </div>

          <div className="table-responsive">
            <table className="table table-hover align-middle">
              <thead className="table-light">
                <tr>
                  <th>Date</th>
                  <th>Batch</th>
                  <th>Egg Quantity</th>
                  <th>Action</th>
                </tr>
              </thead>

              <tbody>
                {produceRecords.length > 0 ? (
                  produceRecords.map((record) => (
                    <tr key={record.id}>
                      <td>{record.date}</td>
                      <td className="fw-semibold">{record.batchName}</td>
                      <td>{record.quantity.toLocaleString()}</td>
                      <td>
                        <button
                          className="btn btn-sm btn-outline-danger"
                          onClick={() => deleteProduce(record.id)}
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
                      No Egg records recorded yet
                      <div className="small mt-1">
                        Click Add Egg Record to record your first egg
                        production.
                      </div>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Add Bird Batch Modal */}
      {showBatchForm && (
        <div
          className="position-fixed top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center p-3"
          style={{ backgroundColor: "rgba(0,0,0,0.5)", zIndex: 1055 }}
        >
          <div
            className="card border-0 shadow-lg w-100"
            style={{ maxWidth: "500px" }}
          >
            <div className="card-header bg-white d-flex justify-content-between align-items-center p-3">
              <h6 className="fw-bold mb-0">Register New Bird Batch</h6>
              <button
                className="btn-close"
                onClick={() => setShowBatchForm(false)}
              ></button>
            </div>

            <form onSubmit={addBatch}>
              <div className="card-body p-4">
                <div className="mb-3">
                  <label className="form-label small fw-semibold">
                    Batch Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="e.g. Layers November 2026"
                    value={batchForm.name}
                    onChange={(e) =>
                      setBatchForm({ ...batchForm, name: e.target.value })
                    }
                    required
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label small fw-semibold">
                    Type of Birds
                  </label>
                  <select
                    className="form-select"
                    value={batchForm.birdType}
                    onChange={(e) =>
                      setBatchForm({ ...batchForm, birdType: e.target.value })
                    }
                  >
                    <option>Layers</option>
                    <option>Broilers</option>
                    <option>Local Birds</option>
                    <option>Other</option>
                  </select>
                </div>

                <div className="mb-3">
                  <label className="form-label small fw-semibold">
                    Number of Birds
                  </label>
                  <input
                    type="number"
                    min="1"
                    className="form-control"
                    placeholder="Enter number of birds"
                    value={batchForm.quantity}
                    onChange={(e) =>
                      setBatchForm({ ...batchForm, quantity: e.target.value })
                    }
                    required
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label small fw-semibold">
                    Date Received
                  </label>
                  <input
                    type="date"
                    className="form-control"
                    value={batchForm.dateReceived}
                    onChange={(e) =>
                      setBatchForm({
                        ...batchForm,
                        dateReceived: e.target.value,
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
                  onClick={() => setShowBatchForm(false)}
                >
                  Cancel
                </button>
                <button type="submit" className="btn btn-success">
                  Save Batch
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Record Egg Produce Modal */}
      {showProduceForm && (
        <div
          className="position-fixed top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center p-3"
          style={{ backgroundColor: "rgba(0,0,0,0.5)", zIndex: 1055 }}
        >
          <div
            className="card border-0 shadow-lg w-100"
            style={{ maxWidth: "500px" }}
          >
            <div className="card-header bg-white d-flex justify-content-between align-items-center p-3">
              <h6 className="fw-bold mb-0">Record Egg Production</h6>
              <button
                className="btn-close"
                onClick={() => setShowProduceForm(false)}
              ></button>
            </div>

            <form onSubmit={addProduce}>
              <div className="card-body p-4">
                <div className="mb-3">
                  <label className="form-label small fw-semibold">
                    Select Bird Batch
                  </label>
                  <select
                    className="form-select"
                    value={produceForm.batchId}
                    onChange={(e) =>
                      setProduceForm({
                        ...produceForm,
                        batchId: e.target.value,
                      })
                    }
                    required
                  >
                    <option value="">Choose a batch</option>
                    {batches.map((batch) => (
                      <option key={batch.id} value={batch.id}>
                        {batch.name}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="mb-3">
                  <label className="form-label small fw-semibold">
                    Collection Date
                  </label>
                  <input
                    type="date"
                    className="form-control"
                    value={produceForm.date}
                    onChange={(e) =>
                      setProduceForm({ ...produceForm, date: e.target.value })
                    }
                    required
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label small fw-semibold">
                    Number of Eggs Collected
                  </label>
                  <input
                    type="number"
                    min="1"
                    className="form-control"
                    placeholder="Enter egg quantity"
                    value={produceForm.quantity}
                    onChange={(e) =>
                      setProduceForm({
                        ...produceForm,
                        quantity: e.target.value,
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
                  onClick={() => setShowProduceForm(false)}
                >
                  Cancel
                </button>
                <button type="submit" className="btn btn-success">
                  Save Production
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default PoultryManagement;
