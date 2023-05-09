import React from "react";
import { AiOutlineMenuFold } from "react-icons/ai";
import { Link } from "react-router-dom";
import leave from "../Images/Leave.png";
import employees from "../Images/employees.png";
import dashboard from "../Images/dashboard.png";

export default function SideMenu({ toggle, setToggle }) {
  return (
    <div className="bg-gray-200 p-2 h-[600px] hidden lg:block w-[220px]">
      <div className="flex justify-end">
        <AiOutlineMenuFold
          className="cursor-pointer text-2xl"
          onClick={() => setToggle(!toggle)}
        />
      </div>
      <Link className="block font-bold mt-5 " to="/dashboard">
        <img className="w-7  mr-2 inline" src={dashboard} alt="" />
        <span>Dashboard</span>
      </Link>
      <Link className="block font-bold  my-2" to="/dashboard/employees">
        <img className="w-7  inline mr-2" src={employees} alt="" />
        <span>Employees</span>
      </Link>
      <Link className="block font-bold my-2" to="/dashboard/leave">
        <img className="w-7  inline mr-2" src={leave} alt="" />
        <span>Leave</span>
      </Link>
    </div>
  );
}
