import React from "react";
import { ProgressSpinner } from "primereact/progressspinner";

export default function Loader() {
  return (
    <div>
      <div className="grid mt-24 w-[1200px] ">
        <ProgressSpinner />
      </div>
    </div>
  );
}
