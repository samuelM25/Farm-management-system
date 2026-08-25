import { Link } from "react-router-dom"
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Summarycard from "../components/summaryCard";
import { useState } from "react";
import Producetable from "../components/producetable";
function PoultryManagement (){
   
    const[records,setRecords]=useState([]);
    const deleteRecord = (id) => {
    setRecords(
        records.filter((record) => record.id !== id)
    );
};
    return (
        
        <div className="container-fluid py-4">

            {/* Header */}
            <div className="d-flex justify-content-between align-items-center mb-4">
                <div>
                    <h2 className="fw-bold">
                        Egg Management
                    </h2>
                    <p className="text-muted">
                        Track all farm produce
                    </p>
                </div>

                <Link 
                to="/add-Produce"
                className="btn btn-success"
                >
                    <i className="bi bi-plus-circle me-2"></i>
                    Add egg produce
                </Link>
            </div>



            {/* Summary Cards */}

            <div className="row g-4 mb-4">
               <Summarycard
               title=" Todays produce"
               value={0}/>

               <Summarycard
               title=" This month produce"
               value={0}/>

               <Summarycard
               title="Total Records"
               value={records.length}/>

            </div>
            {/* Expense Table */}

            <Producetable
            records={records}
            onDelete={deleteRecord}/>
        </div>

    );
}
export default PoultryManagement;