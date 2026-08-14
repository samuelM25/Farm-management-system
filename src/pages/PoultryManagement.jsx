import { Link } from "react-router-dom"
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/css/bootstrap.min.css";
function PoultryManagement (){
    return (
        <div className="container-fluid py-4">
            <div className="d-flex justify-content-between  align-items-center mb-4">
                <div className="">
                <h2 className="fw-bold">EGG MANAGMENT</h2>
                <p>track the eggs</p>
                </div>

                <Link  to="/poultry managment" className="btn btn-success">
                    <i className="bi bi-plus-circle me-2"></i>
                    ADD EGGS
                </Link>
            </div>

           <div className="mb-4 row g-4">
                <div className="col-md-4">
                    <div className="card shadow-sm border-0 rounded-4 ">
                        <div className="card body">
                            <h6 className="text-muted">
                                Todays Produce
                            </h6>
                            <h3>
                                UGX 0
                            </h3>
                        </div>
                    </div>
                </div>
          </div>

            <div className="mb-4 row g-4">
                <div className="col-md-4">
                    <div className="card shadow-sm border-0 rounded-4">
                        <div className="card body">
                            <h6 className="text-muted">
                                This month
                            </h6>
                            <h3>
                                0
                            </h3>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mb-4 row g-4">
                <div className="col-md-4">
                    <div className="card shadow-sm border-0 rounded-4">
                        <div className="card body">
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


           <div className="card shadow-sm border-0 rounded-4">
              <div className="bg-dark text-white card-header">
                  <i className="bi bi-wallet2 me-2"></i>
                Recent Produce
              </div>
              <div className="card-body">
                <table className="table table-hover">
                    <thead>
                      <tr>Date</tr>
                      <tr>Category</tr>
                      <tr>Amount</tr>
                      <tr>Item</tr>
                      <tr>Action</tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td>05/4/2026</td>
                            <td>20 trays</td>
                            <td>ugx 500,000</td>

                            <td>
                                <button className="btn btn-sm btn-success">
                                    <i className="bi bi-pencil"></i>
                                </button>

                                <button className="btn btn-sm btn-danger">
                                    <i className="bi bi-trash"> </i>
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
export default PoultryManagement;