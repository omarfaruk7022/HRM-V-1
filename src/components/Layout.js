import React, { useState } from "react";
import SideMenu from "./SideMenu";
import SmallSidebar from "./SmallSidebar";

export default function Layout() {
  const [toggle, setToggle] = useState(false);
  return (
    <div>
     {toggle ? (
          <div >
            <SideMenu toggle={toggle} setToggle={setToggle} />
          </div>
        ) : (
          <div>
            <SmallSidebar toggle={toggle} setToggle={setToggle} />
          </div>
        )}
    </div>
  );
}
