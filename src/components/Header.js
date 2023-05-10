import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Sidebar } from "primereact/sidebar";
import leave from "../Images/Leave.png";
import employees from "../Images/employees.png";
import dashboard from "../Images/dashboard.png";

export default function Header() {
  const [visible, setVisible] = useState(false);
  return (
    <div>
      <header aria-label="Site Header" class="shadow-sm">
        <div class="mx-auto max-w-screen-xl p-4">
          <div class="lg:hidden md:block">
            <p icon="pi pi-arrow-right" onClick={() => setVisible(true)}>
              <svg
                aria-hidden="true"
                class="h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewbox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4 6h16M4 12h16M4 18h16"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                />
              </svg>
            </p>
          </div>
          <div class="flex items-center justify-between gap-4 lg:gap-10 ">
            <nav
              aria-label="Site Nav"
              class="hidden gap-8 text-sm font-medium lg:flex"
            >
              <Link class="text-gray-500" to="/">
               Dashboard
              </Link>
            </nav>

            <div class="hidden flex-1 items-center justify-end gap-4 lg:flex">
              <a
                class="rounded-lg bg-gray-100 px-5 py-2 text-sm font-medium text-gray-500"
                href=""
              >
                Log in
              </a>

              <a
                class="rounded-lg bg-blue-600 px-5 py-2 text-sm font-medium text-white"
                href=""
              >
                Sign up
              </a>
            </div>
            <Sidebar visible={visible} onHide={() => setVisible(false)}>
              <div className=" p-2 h-[600px] ">
                <Link className="block font-bold mt-5 " to="/">
                  <p onClick={() => setVisible(false)}>
                    <img className="w-7  mr-2 inline" src={dashboard} alt="" />
                    <span>Dashboard</span>
                  </p>
                </Link>
                <Link
                  className="block font-bold  my-2"
                  to="/employees"
                >
                  <button onClick={() => setVisible(false)}>
                    <img className="w-7  inline mr-2" src={employees} alt="" />
                    <span>Employees</span>
                  </button>
                </Link>
                <Link className="block font-bold my-2" to="/leave">
                  <button onClick={() => setVisible(false)}>
                    <img className="w-7  inline mr-2" src={leave} alt="" />
                    <span>Leave</span>
                  </button>
                </Link>
              </div>
            </Sidebar>
          </div>
        </div>
      </header>
    </div>
  );
}
