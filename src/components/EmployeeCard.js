import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Loader from "./Loader";
import img from "../Images/hero-pattern-opacity.png";

export default function EmployeeCard() {
  const [users, setUsers] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:5000/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  });

  if (users.length === 0) {
    return <Loader />;
  }
  return (
    <div>
      <div className="absolute">
        <img src={img} alt="img" />
      </div>
      <div className="flex flex-wrap gap-10 justify-center items-center mt-10">
        {users.map((user) => (
          <div className="w-72 p-10 h-[400px]  rounded-md shadow-lg bg-[#111121] ">
            <img
              src={user.img}
              alt=""
              className="m-auto rounded-lg w-48 h-52  "
            />
            <div className="mt-6 mb-2">
              <span className="block text-xl text-center font-medium tracking-widest uppercase dark:text-violet-400">
                {user?.name}
              </span>
              <h2 className="text-xs font-semibold text-center tracking-wide">
                {user?.email}
              </h2>
              <h2 className="text-xs font-semibold text-center tracking-wide">
                {user?.designation}
              </h2>
              <button
                onClick={() => navigate(`employeeDetails/${user._id}`)}
                className="btn btn-outline text-xs text-green-400 p-1 rounded-lg mt-2 m-auto block underline"
              >
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
