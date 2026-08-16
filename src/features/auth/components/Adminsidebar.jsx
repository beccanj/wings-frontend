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
            { icon: Users, label: "User Management", path: "/user" },
            { icon: BadgeCheck, label: "Verification Queue", path: "/verify" },
            { icon: Building2, label: "Corporate Profiles", path: "/corp" },
            { icon: BriefcaseBusiness, label: "Job Listings", path: "/list" },
            { icon: MessageSquare, label: "Community Management", path: "/comm" },
            { icon: FileText, label: "Content Management", path: "/conte" },
            { icon: BarChart3, label: "Reports & Analytics", path: "/analyti" },
            { icon: ClipboardList, label: "Audit Logs", path: "/audit" },
            { icon: Flag, label: "Reported Content", path: "/reported" },
            { icon: CircleHelp, label: "Support", path: "/support" },
            { icon: LogOut, label: "Logout", path: "/logout" },
          ],
        },
      ]}
    />
  );
};

export default AdminSidebar;