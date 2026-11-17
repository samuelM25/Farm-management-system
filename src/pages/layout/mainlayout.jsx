import { Outlet } from "react-router-dom";
import Sidebar from "../../components/Sidebar.jsx";

function Mainlayout() {
  return (
    <div className="app-layout">
      <Sidebar />

      <div className="main-content">
        <main className="p-4">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default Mainlayout;
