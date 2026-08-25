import { Link } from "react-router-dom";
import "bootstrap-icons/font/bootstrap-icons.css";
import Summarycard from "../components/summaryCard";
import Producetable from "../components/producetable";
import { useState } from "react";


function Expenses(){


    const[records,setRecords]=useState([]);
        const deleteRecord = (id) => {
        setRecords(
        records.filter((record) => record.id !== id)
    );
  };

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
                <Summarycard
                title="TodaysExpenses"
                value={0}/>

                <Summarycard
                title="This months Expenses"
                value={0}/>

                <Summarycard
                title="Total Expenses"
                value={records.length}/>
                
            </div>

            {/* Expense Table */}

            <Producetable
            records={records}
            onDelete={deleteRecord}/>
        </div>

    );

}


export default Expenses;