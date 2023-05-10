import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Sidebar } from "primereact/sidebar";
import MobileMenu from "./MobileMenu";

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
                href="/"
              >
                Log in
              </a>

              <a
                class="rounded-lg bg-blue-600 px-5 py-2 text-sm font-medium text-white"
                href="/"
              >
                Sign up
              </a>
            </div>
            <Sidebar visible={visible} onHide={() => setVisible(false)}>
             <MobileMenu/>
            </Sidebar>
          </div>
        </div>
      </header>
    </div>
  );
}
