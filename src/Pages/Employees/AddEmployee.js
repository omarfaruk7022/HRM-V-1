import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Button } from "primereact/button";

export default function AddEmployee() {
  const [startDate, setStartDate] = useState(new Date());
  const [loading, setLoading] = useState(false);

  const load = () => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };
  const imgStorageKey = "7bd193c3ab5dcf0453572e262a763279";

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const phone = e.target.phone.value;
    const designation = e.target.designation.value;
    const salary = e.target.salary.value;
    const joiningDate = e.target.joiningDate.value;
    const department = e.target.department.value;
    const address = e.target.address.value;

    const image = e.target.photo.files[0];
    const formData = new FormData();
    console.log(formData);
    formData.append("image", image);
    const url = `https://api.imgbb.com/1/upload?key=${imgStorageKey}`;

    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.success) {
          const img = result.data.url;
          const employee = {
            name,
            email,
            phone,
            designation,
            salary,
            joiningDate,
            department,
            address,
            img,
          };
          if (
            name &&
            email &&
            phone &&
            designation &&
            salary &&
            joiningDate &&
            department &&
            address
          ) {
            fetch("http://localhost:5000/users", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(employee),
            })
              .then((res) => res.json())
              .then((data) => {
                if (data) {
                  toast.success("Employee Added Successfully");
                }
              });
          }
        }
      });
  };

  return (
    <div>
      <div className="w-[1300px] grid place-content-center">
        <section className="p-6 ">
          <form
            onSubmit={handleSubmit}
            novalidate=""
            action=""
            className="container flex flex-col mx-auto space-y-12 ng-untouched ng-pristine ng-valid"
          >
            <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm bg-gray-200">
              <div className="space-y-2 col-span-full lg:col-span-1">
                <p className="text-xl font-bold">Add Employee Information </p>
              </div>
              <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
                <div className="col-span-full sm:col-span-3">
                  <label for="name" className="text-sm">
                    Full name
                  </label>
                  <input
                    name="name"
                    id="name"
                    type="text"
                    placeholder="Full name"
                    className="w-full rounded-md p-2 focus:outline-none"
                  />
                </div>

                <div className="col-span-full sm:col-span-3">
                  <label for="email" className="text-sm">
                    Email
                  </label>
                  <input
                    name="email"
                    id="email"
                    type="email"
                    placeholder="Email"
                    className="w-full rounded-md p-2 focus:outline-none"
                  />
                </div>
                <div className="col-span-full sm:col-span-3">
                  <label for="phone" className="text-sm">
                    Phone
                  </label>
                  <input
                    name="phone"
                    id="phone"
                    type="text"
                    placeholder="Phone"
                    className="w-full rounded-md p-2 focus:outline-none"
                  />
                </div>

                <div className="col-span-full sm:col-span-3">
                  <label for="designation" className="text-sm">
                    Designation
                  </label>
                  <input
                    name
                    id="designation"
                    type="text"
                    placeholder="Designation"
                    className="w-full rounded-md p-2 focus:outline-none"
                  />
                </div>
                <div className="col-span-full sm:col-span-3">
                  <label for="salary" className="text-sm">
                    Salary
                  </label>
                  <input
                    name="salary"
                    id="salary"
                    type="text"
                    placeholder="Salary"
                    className="w-full rounded-md p-2 focus:outline-none"
                  />
                </div>

                <div className="col-span-full sm:col-span-3">
                  <label for="joiningDate" className="text-sm">
                    Joining Date
                  </label>
                  <DatePicker
                    name="joiningDate"
                    className="w-full rounded-md p-2 focus:outline-none"
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
                  />
                </div>
                <div className="col-span-full sm:col-span-3">
                  <label for="photo" className="text-sm">
                    Photo Upload
                  </label>
                  <input
                    name="photo"
                    id="photo"
                    type="file"
                    placeholder="Photo Upload"
                    className="w-full rounded-md p-2 focus:outline-none"
                  />
                </div>

                <div className="col-span-full sm:col-span-3">
                  <label for="department" className="text-sm">
                    Department
                  </label>
                  <input
                    name="department"
                    id="department"
                    type="text"
                    placeholder="Designation"
                    className="w-full rounded-md p-2 focus:outline-none"
                  />
                </div>
                
                <div className="col-span-full">
                  <label for="address" className="text-sm">
                    Address
                  </label>
                  <input
                    name="address"
                    id="address"
                    type="text"
                    placeholder=""
                    className="w-full rounded-md p-2 focus:outline-none"
                  />
                </div>
                <div>
                  <Button  icon="pi pi-check" loading={loading} onClick={load}>
                    <input
                      type="submit"
                      className=" cursor-pointer px-1"
                      value="Submit"
                    />
                  </Button>
                </div>
              </div>
            </fieldset>
          </form>
          <ToastContainer />
        </section>
      </div>
    </div>
  );
}
