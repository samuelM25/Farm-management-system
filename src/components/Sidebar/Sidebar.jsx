import {NavLink} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

function Sidebar(){
    return(

        <div className="sidebar  bg-dark text-white vh-100 p-3"
         style={{backgroundColor: '#263238',
            width:'260px',
            height: "100vh",
            position: "fixed",
            top: 0,
            left: 0

         }}>
            <h5 className="mb-4">
                Farm Menu
            </h5>

            <ul className="nav flex-column list-unstyled">

                <NavLink to="/dasdhboard" className={({isActive}) =>
                isActive 
                    ? "nav-link bg-success text-white rounded"
                    : "nav-link text-white"}>

                    <li className="nav-item mb-3">
                        <a className=" nav-link text-white active" href="">
                            <i className="bi bi-speedometer2 me-2"></i>
                            Dashboard
                        </a>
                    </li>
                </NavLink>

                 <NavLink to="/poultry managment" className={({isActive}) =>
                isActive 
                    ? "nav-link bg-success text-white rounded"
                    : "nav-link text-white"}>

                    <li className="nav-item mb-3">
                        <a className="nav-link text-white active" href="">
                            <i className="bi bi-egg-fill me-2"></i>
                            Poultry Management
                        </a>
                    </li>
                </NavLink>

                <NavLink to="/Expenses" className={({isActive}) =>
                isActive 
                    ? "nav-link bg-success text-white rounded"
                    : "nav-link text-white"}>

                    <li className="nav-item mb-3">
                        <a className="nav-link text-white active" href="">
                            <i className="bi bi-cash-stack me-2"></i>
                            Expenses
                        </a>
                    </li>
                </NavLink>


                 <NavLink to="/Add farm data" className={({isActive}) =>
                isActive 
                    ? "nav-link bg-success text-white rounded"
                    : "nav-link text-white"}>

                    <li className="nav-item mb-3">
                        <a className="nav-link text-white active" href="">
                            <i className="bi bi-clipboard-data me-2"></i>
                            Add Farm Data
                        </a>
                    </li>
                </NavLink>

                <NavLink to="/livestock" className={({isActive}) =>
                isActive 
                    ? "nav-link bg-success text-white rounded"
                    : "nav-link text-white"}>

                    <li className="nav-item mb-3">
                        <a className="nav-link text-white active" href="">
                            <i className="bi bi-house-heart-fill me-2"></i>
                            Livestock
                        </a>
                    </li>
                </NavLink>

                <NavLink to="/crops" className={({isActive}) =>
                isActive 
                    ? "nav-link bg-success text-white rounded"
                    : "nav-link text-white"}>

                    <li className="nav-item mb-3">
                        <a className=" nav-link text-white active" href="">
                            <i className="bi bi-flower1 me-2"></i>
                            Crops
                        </a>
                    </li>
                </NavLink>

                <NavLink to="reports" className={({isActive}) =>
                isActive 
                    ? "nav-link bg-success text-white rounded"
                    : "nav-link text-white"}>

                    <li className="nav-item mb-3">
                        <a className="nav-link text-white active" href="">
                            <i className="bi bi-bar-chart me-2"></i>
                            Reports
                        </a>
                    </li>
                </NavLink>

               <NavLink to="settings" className={({isActive}) =>
                isActive 
                    ? "nav-link bg-success text-white rounded"
                    : "nav-link text-white"}>

                <li className="nav-item mb-3">
                    <a className="nav-link text-white active" href="">
                        <i className="bi bi-gear me-2"></i>
                        Settings
                    </a>
                </li>
                </NavLink>
            </ul>
        </div>

    );
}

export default Sidebar;