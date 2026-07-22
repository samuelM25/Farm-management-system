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
                    <a className="nav-link text-white active" href="">
                        Dashboard
                    </a>
                </li>

                <li className="nav-item mb-3">
                    <a className="nav-link text-white active" href="">
                        Livestock
                    </a>
                </li>

                <li className="nav-item mb-3">
                    <a className="nav-link text-white active" href="">
                        Crops
                    </a>
                </li>

                <li className="nav-item mb-3">
                    <a className="nav-link text-white active" href="">
                        Reports
                    </a>
                </li>

                <li className="nav-item mb-3">
                    <a className="nav-link text-white active" href="">
                        Settings
                    </a>
                </li>
            </ul>
        </div>

    );
}

export default Sidebar;