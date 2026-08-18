import { useState } from "react";
import Sidebar from "../components/layout/Sidebar";
import Header from "../components/layout/Header";
import EmployerSidebar from "../features/employer/components/Employersidebar";
import AdminSidebar from "../features/auth/components/Adminsidebar";
import { useRole } from "../features/auth/components/Rolecontext";


export default function DashboardLayout({  children }) {
  const [search, setSearch] = useState("");
  const { role } = useRole();
  const [sidebarOpen, setSidebarOpen] = useState(false);
 
  const Sidebar = role === "employer" ? EmployerSidebar : AdminSidebar;
 
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
 
        <main className="flex-1 md:px-12 md:py-8 px-6 py-4 bg-[#F2FFFE]/30 ">
          {children}
        </main>
      </div>
    </div>
  );
}