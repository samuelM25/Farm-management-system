import { Link } from "react-router-dom";
import "bootstrap-icons/font/bootstrap-icons.css";


function Expenses(){

    return(

        <div className="container-fluid py-4">
            {/* Header */}
            <div className="d-flex justify-content-between align-items-center mb-4">
                <div>
                    <h2 className="fw-bold">
                        Expenses
                    </h2>
                    <p className="text-muted">
                        Track all farm expenses
                    </p>
                </div>

                <Link 
                to="/add-Expense"
                className="btn btn-success"
                >
                    <i className="bi bi-plus-circle me-2"></i>
                    Add Expense
                </Link>
            </div>



            {/* Summary Cards */}

            <div className="row g-4 mb-4">
                <div className="col-md-4">
                    <div className="card shadow-sm border-0 rounded-4">
                        <div className="card-body">
                            <h6 className="text-muted">
                                Today's Expenses
                            </h6>
                            <h3>
                                UGX 0
                            </h3>
                        </div>
                    </div>
                </div>



                <div className="col-md-4">
                    <div className="card shadow-sm border-0 rounded-4">
                        <div className="card-body">
                            <h6 className="text-muted">
                                This Month
                            </h6>
                            <h3>
                                UGX 0
                            </h3>
                        </div>
                    </div>
                </div>


                <div className="col-md-4">
                    <div className="card shadow-sm border-0 rounded-4">
                        <div className="card-body">
                            <h6 className="text-muted">
                                Total Records
                            </h6>
                            <h3>
                                0
                            </h3>
                        </div>
                    </div>
                </div>
            </div>




            {/* Expense Table */}

            <div className="card shadow-sm border-0 rounded-4">
                <div className="card-header bg-dark text-white">
                    <i className="bi bi-wallet2 me-2"></i>
                    Recent Expenses
                </div>

                <div className="card-body">
                    <table className="table table-hover">
                        <thead>
                            <tr>
                                <th>Date</th>
                                <th>Category</th>
                                <th>Item</th>
                                <th>Amount</th>
                                <th>Action</th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr>
                                <td>
                                    05/08/2026
                                </td>

                                <td>
                                    Feed
                                </td>

                                <td>
                                    Layer Mash
                                </td>

                                <td>
                                    UGX 350,000
                                </td>


                                <td>

                                    <button className="btn btn-sm btn-primary me-2">
                                        <i className="bi bi-pencil"></i>
                                    </button>


                                    <button className="btn btn-sm btn-danger">
                                        <i className="bi bi-trash"></i>
                                    </button>

                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>

    )

}


export default Expenses;