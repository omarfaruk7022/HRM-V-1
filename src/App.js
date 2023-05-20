import "./App.css";
import React from "react";
import { Route, Routes } from "react-router-dom";

import Header from "./components/Header";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Layout from "./components/Layout";
import Employees from "./Pages/Employees/Employees";
import Leave from "./Pages/Dashboard/Leave";
import EmployeeDetails from "./components/EmployeeDetails";
import NotFound from "./components/NotFound";
import Footer from "./components/Footer";
import AddEmployee from "./Pages/Employees/AddEmployee";
import img from "../src/Images/hero-pattern-opacity.png";

function App() {
  return (
    <div>
      {/* <div
        className="absolute " >
        <img src={img} alt="img" />
      </div> */}
      <div className="bg-[#111121] ">
        <Header />
        <div className="flex ">
          <div>
            <Layout />
          </div>
          <div>
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/employees" element={<Employees />} />
              <Route path="/addEmployee" element={<AddEmployee />} />
              <Route path="/leave" element={<Leave />} />
              <Route path="*" element={<NotFound />} />
              <Route
                path="/employees/employeeDetails/:id"
                element={<EmployeeDetails />}
              />
            </Routes>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
