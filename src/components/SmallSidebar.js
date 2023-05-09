import React from "react";
import { AiOutlineMenuUnfold } from "react-icons/ai";
import { Link } from "react-router-dom";
import leave from "../Images/Leave.png";
import employees from "../Images/employees.png";
import dashboard from "../Images/dashboard.png";

export default function SmallSidebar({ toggle, setToggle }) {
  return (
    <div className="bg-gray-200 p-2 h-[600px] hidden lg:block">
      <div className="flex justify-end">
        <AiOutlineMenuUnfold
          className="cursor-pointer text-2xl"
          onClick={() => setToggle(!toggle)}
        />
      </div>

      <Link className="block font-bold" to="/dashboard">
        <img className="w-7 mt-5" src={dashboard} alt="" />
      </Link>
      <Link className="block font-bold" to="/dashboard/employees">
        <img className="w-7 my-2" src={employees} alt="" />
      </Link>
      <Link className="block font-bold" to="/dashboard/leave">
        <img className="w-7 my-2" src={leave} alt="" />
      </Link>
    </div>
  );
}
