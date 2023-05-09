import "./App.css";
import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Header from "./components/Header";
import Dashboard from "./Pages/Dashboard/Dashboard";

import Layout from "./components/Layout";
import Employees from "./Pages/Dashboard/Employees";
import Leave from "./Pages/Dashboard/Leave";

function App() {
  return (
    <div className="">
      <Header />
      <div className="flex">
        <div>
          <Layout />
        </div>
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/dashboard/employees" element={<Employees/>} />
            <Route path="/dashboard/leave" element={<Leave/>} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
