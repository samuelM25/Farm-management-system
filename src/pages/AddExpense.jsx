import { Link } from "react-router-dom";

 export function AddExpense() {

    return (

        <div className="container-fluid py-4">

            {/* Header */}
            <div className="d-flex justify-content-between align-items-center mb-4">

                <div>
                    <h2 className="fw-bold">Add Expense</h2>
                    <p className="text-muted">
                        Record a new farm expense.
                    </p>
                </div>

                <Link
                    to="/expenses"
                    className="btn btn-outline-secondary"
                >
                    <i className="bi bi-arrow-left me-2"></i>
                    Back to Expenses
                </Link>

            </div>


            <div className="row justify-content-center">

                <div className="col-lg-8">

                    <div className="card shadow border-0 rounded-4">

                        <div className="card-header bg-success text-white p-3">

                            <h5 className="mb-0">
                                <i className="bi bi-wallet2 me-2"></i>
                                Expense Details
                            </h5>

                        </div>

                        <div className="card-body p-4">

                            <div className="row">

                                <div className="col-md-6 mb-3">
                                    <label className="form-label">Expense Category</label>
                                    <select className="form-select">
                                        <option>Feed</option>
                                        <option>Medication</option>
                                        <option>Transport</option>
                                        <option>Utilities</option>
                                        <option>Equipment</option>
                                        <option>Other</option>
                                    </select>
                                </div>

                                <div className="col-md-6 mb-3">
                                    <label className="form-label">Expense Date</label>
                                    <input
                                        type="date"
                                        className="form-control"
                                    />
                                </div>

                            </div>


                            <div className="mb-3">

                                <label className="form-label">
                                    Expense Item
                                </label>

                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="e.g. Layer Mash"
                                />

                            </div>


                            <div className="row">

                                <div className="col-md-6 mb-3">

                                    <label className="form-label">
                                        Amount (UGX)
                                    </label>

                                    <input
                                        type="number"
                                        className="form-control"
                                        placeholder="Enter amount"
                                    />

                                </div>

                                <div className="col-md-6 mb-3">

                                    <label className="form-label">
                                        Supplier
                                    </label>

                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Supplier name"
                                    />

                                </div>

                            </div>


                            <div className="mb-3">

                                <label className="form-label">
                                    Payment Method
                                </label>

                                <select className="form-select">
                                    <option>Cash</option>
                                    <option>Mobile Money</option>
                                    <option>Bank Transfer</option>
                                </select>

                            </div>


                            <div className="mb-3">

                                <label className="form-label">
                                    Description
                                </label>

                                <textarea
                                    className="form-control"
                                    rows="4"
                                    placeholder="Add any notes..."
                                ></textarea>

                            </div>


                            <div className="d-flex justify-content-end gap-2">

                                <Link
                                    to="/expenses"
                                    className="btn btn-outline-secondary"
                                >
                                    Cancel
                                </Link>

                                <button className="btn btn-success">

                                    <i className="bi bi-save me-2"></i>

                                    Save Expense

                                </button>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </div>

    );

}

export default AddExpense;