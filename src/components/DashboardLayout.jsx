import { useState } from "react";
import Sidebar from "../components/layout/Sidebar";
import Header from "../components/layout/Header";

export default function DashboardLayout({ Sidebar, children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [search, setSearch] = useState("");
 
  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
      />
 
      {/* min-w-0 so this column can shrink properly next to the fixed-width sidebar
          instead of overflowing horizontally */}
      <div className="flex-1 flex flex-col min-w-0">
        <Header
          sidebarOpen={sidebarOpen}
          setSidebarOpen={setSidebarOpen}
          search={search}
          setSearch={setSearch}
        />
 
        <main className="flex-1 md:px-12 md:py-8 px-6 py-4 ">
          {children}
        </main>
      </div>
    </div>
  );
}