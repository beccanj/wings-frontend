import Sidebar from "../../../components/layout/Sidebar";


import {
  LayoutDashboard,
  Briefcase,
  Users,
  UserSearch,
  Mail,
  GraduationCap,
  Scale,
  ShieldCheck,
  CircleHelp,
} from "lucide-react";

const EmployerSidebar = ({ sidebarOpen, setSidebarOpen }) => {
  return (
    <Sidebar
      sidebarOpen={sidebarOpen}
      setSidebarOpen={setSidebarOpen}
      logoTitle="WINGS Portal"
      logoSubtitle="Employer Dashboard"
      sections={[
        {
          items: [
            { icon: LayoutDashboard, label: "Dashboard", path: "/dash" },
            { icon: Briefcase, label: "My Jobs", path: "/my-jobs" },
            { icon: Users, label: "Applicants", path: "/applicants" },
            { icon: UserSearch, label: "Search Workers", path: "/search-workers" },
            { icon: Mail, label: "Messages", path: "/messages" },
          ],
        },
        {
          label: "RESOURCES",
          items: [
            { icon: GraduationCap, label: "Training Resources", path: "/training" },
            { icon: Scale, label: "Rights & Duties", path: "/rights-duties" },
            { icon: ShieldCheck, label: "GBV Support", path: "/gbv-support" },
          ],
        },
      ]}
      footer={{
        icon: CircleHelp,
        label: "Help & Support",
        path: "/help",
        version: "v1.0.4 - WINGS Platform",
      }}
    />
  );
};

export default EmployerSidebar;