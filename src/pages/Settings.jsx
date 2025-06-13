import React from 'react'
import SideNav from "../components/SideNav";

function Settings() {
  const [activeTitle, setActiveTitle] = React.useState("Settings");
  // Ensure the parent div uses flex to place SideNav and body side by side
  return (
    <div className="flex">
      <SideNav setActiveTitle={setActiveTitle} />
      <div className="ml-5 p-6">
        <h1 className="text-2xl font-bold mb-4">{activeTitle}</h1>
      </div>
    </div>
  );
}

export default Settings
