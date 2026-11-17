import "./App.css";
import Dashboard from "./pages/Dashboard.jsx";
import Adddata from "./pages/Adddata.jsx";
import Expenses from "./pages/Expenses.jsx";
import Login from "./pages/Auth/login.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AddExpense } from "./components/AddExpense.jsx";
import PoultryManagement from "./pages/PoultryManagement.jsx";
import Mainlayout from "./pages/layout/mainlayout.jsx";
import Sales from "./pages/sales.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Login page - without sidebar and navbar */}
        <Route path="/login" element={<Login />} />

        {/* Application pages - with sidebar and navbar */}
        <Route element={<Mainlayout />}>
          <Route path="/sales" element={<Sales />} />
          <Route path="/" element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/Adddata" element={<Adddata />} />
          <Route path="/expenses" element={<Expenses />} />
          <Route path="/add-expense" element={<AddExpense />} />
          <Route path="/PoultryManagement" element={<PoultryManagement />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
