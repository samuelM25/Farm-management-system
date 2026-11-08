import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";
import Navbar from "./components/Navbar.jsx";
import Sidebar from "./components/Sidebar.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import Adddata from "./pages/Adddata.jsx";
import Expenses from "./pages/Expenses.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AddExpense } from "./components/AddExpense.jsx";
import PoultryManagement from "./pages/PoultryManagement.jsx";

function App() {
  return (
    <BrowserRouter>
      <div className="d-flex">
        <Sidebar />
        <div style={{ marginLeft: "260px" }} className="flex-grow-1">
          <Navbar />

          <main className="p-4">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/Adddata" element={<Adddata />} />
              <Route path="/expenses" element={<Expenses />} />
              <Route path="/add-expense" element={<AddExpense />} />
              <Route
                path="/PoultryManagement"
                element={<PoultryManagement />}
              />
            </Routes>
          </main>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
