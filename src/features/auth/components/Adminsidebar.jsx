import Sidebar from "../../../components/layout/Sidebar";

import {
  LayoutDashboard,
  Users,
  BadgeCheck,
  Building2,
  BriefcaseBusiness,
  MessageSquare,
  FileText,
  BarChart3,
  ClipboardList,
  Flag,
  CircleHelp,
  LogOut,
} from "lucide-react";

const AdminSidebar = ({ sidebarOpen, setSidebarOpen }) => {
  return (
    <Sidebar
      sidebarOpen={sidebarOpen}
      setSidebarOpen={setSidebarOpen}
      logoTitle="Wings Admin"
      logoSubtitle="MANAGEMENT CONSOLE"
      sections={[
        {
          items: [
            { icon: LayoutDashboard, label: "Dashboard", path: "/dash" },
            { icon: Users, label: "User Management", path: "/" },
            { icon: BadgeCheck, label: "Verification Queue", path: "/" },
            { icon: Building2, label: "Corporate Profiles", path: "/" },
            { icon: BriefcaseBusiness, label: "Job Listings", path: "/" },
            { icon: MessageSquare, label: "Community Management", path: "/" },
            { icon: FileText, label: "Content Management", path: "/" },
            { icon: BarChart3, label: "Reports & Analytics", path: "/" },
            { icon: ClipboardList, label: "Audit Logs", path: "/" },
            { icon: Flag, label: "Reported Content", path: "/" },
            { icon: CircleHelp, label: "Support", path: "/" },
            { icon: LogOut, label: "Logout", path: "/" },
          ],
        },
      ]}
    />
  );
};

export default AdminSidebar;