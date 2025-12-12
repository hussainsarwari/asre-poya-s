'use client';

import { useState } from "react";
import DashboardSidebar from "./components/DashboardSidebar.jsx";

export default function DashboardLayout({ children }) {
  const [isOpen, setIsOpen] = useState(true);

  const toggleOpen = () => setIsOpen(!isOpen);
  const openWidth = 16; // rem
  const closedWidth = 4.5; // rem

  return (
    <div className="flex">
      <DashboardSidebar isOpen={isOpen} toggleOpen={toggleOpen} />

      <main
        style={{
          marginLeft: `${isOpen ? openWidth : closedWidth}rem`,
          width: `calc(100% - ${isOpen ? openWidth : closedWidth}rem)`,
          minHeight: "100vh",
        }}
        className="p-5 bg-gray-50"
      >
        {children}
      </main>
    </div>
  );
}
