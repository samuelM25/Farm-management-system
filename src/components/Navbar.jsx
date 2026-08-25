function Navbar(){
    return(
    <nav className="navbar navbar-lg navbar-dark "
    style={{backgroundColor: "#1B5E20"}}>

        <div className="container-fluid">
            <a  className="navbar-brand fw-bold" href="">
                Farm App
            </a>

            <button className="navbar-toggle" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                <span className="navbar-toggler-icon"></span>
            </button>
             
             <div className="collapse navbar-collapse">
                <ul className="navbar-nav ms-auto">
                    <li className="nav-item">
                        <a className="nav-link active" href="">
                            DASHBOARD
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link active" href="">
                            Nottifications
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link active" href="">
                            Profile
                        </a>
                    </li>
                </ul>
             </div>
        </div>
    </nav>
    );
}

export default Navbar;