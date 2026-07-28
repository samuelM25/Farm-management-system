function Sidebar(){
    return(

        <div className="sidebar  bg-dark text-white vh-100 p-3"
         style={{backgroundColor: '#263238',
            width:'260px'
         }}>
            <h5 className="mb-4">
                Farm Menu
            </h5>

            <ul className="nav flex-column list-unstyled">
                <li className="nav-item mb-3">
                    <a className=" nav-link text-white active" href="">
                        <i className="bi bi-speedometer2 me-2"></i>
                        Dashboard
                    </a>
                </li>

                <li className="nav-item mb-3">
                    <a className="nav-link text-white active" href="">
                        <i className="bi bi-house-heart fill me-2"></i>
                        Livestock
                    </a>
                </li>

                <li className="nav-item mb-3">
                    <a className=" nav-link text-white active" href="">
                        <i className="bi bi-flower1 me-2"></i>
                        Crops
                    </a>
                </li>

                <li className="nav-item mb-3">
                    <a className="nav-link text-white active" href="">
                        <i className="bi bi-bar-chart me-2"></i>
                        Reports
                    </a>
                </li>

                <li className="nav-item mb-3">
                    <a className="nav-link text-white active" href="">
                        <i className="bi bi-gear me-2"></i>
                        Settings
                    </a>
                </li>
            </ul>
        </div>

    );
}

export default Sidebar;