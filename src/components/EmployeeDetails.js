import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import blankUser from "../Images/blankUser.png";
import Loader from "./Loader";

export default function EmployeeDetails() {
  const { id } = useParams();
  console.log(id);
  const [data, setData] = useState();

  useEffect(() => {
    fetch(`http://localhost:5000/users/${id}`)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, [id]);

  if (data === undefined) {
    return <Loader />;
  }

  return (
    <div className="">
      <div className="w-[100%]">
        <div class="rounded-sm  bg-white ring   ring-indigo-50 p-12 ">
          <strong class="rounded  border border-indigo-500 bg-indigo-500 px-3 py-1.5 text-[10px] font-medium text-white">
            id #101
          </strong>
          <div class="flex items-center sm:gap-8">
            <div aria-hidden="true">
              {data?.img ? (
                <img
                  className="rounded-lg w-40"
                  src={data?.img}
                  alt="Profile"
                />
              ) : (
                <div className="flex-shrink-0">
                  <img
                    src={blankUser}
                    alt=""
                    className="w-32 h-32 dark:bg-gray-500 rounded-lg  dark:border-gray-700"
                  />
                </div>
              )}

              <p className="text-sm pt-2 text-purple-900 font-bold">
                {data?.designation}
              </p>
              <p className="text-[15px] font-bold">{data?.department}</p>
              <p className="text-[15px] t">{data?.email}</p>
            </div>

            <div>
              <h3 class="mt-4 text-lg font-medium sm:text-xl">
                <h2 className="">{data?.name}</h2>
              </h3>

              <div className="">
                <p>
                  <span className="text-green-500 font-bold text-sm">
                    Phone :
                  </span>
                  <span className="text-sm font-bold">{data?.phone}</span>
                </p>
                <p>
                  <span className="text-green-500 font-bold text-sm">
                    Address :
                  </span>
                  <span className="text-sm font-bold"> {data?.address}</span>
                </p>
                <p>
                  <span className="text-green-500 font-bold text-sm">
                    Salary :
                  </span>
                  <span className="text-sm font-bold"> {data?.salary} BDT</span>
                </p>
                <p>
                  <span className="text-green-500 font-bold text-sm">
                    Joining Date :
                  </span>{" "}
                  <span className="text-sm font-bold">
                    {data?.joiningDate}
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
