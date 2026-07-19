import DashboardLayout from "../../../components/DashboardLayout";
import AdminSidebar from "../../../features/auth/components/AdminSidebar";

const Dashboard = () => {
  return (
    <DashboardLayout Sidebar={AdminSidebar}>
      <h1 className="text-2xl font-bold text-gray-900">Welcome back</h1>
      <p className="text-gray-500 mt-1">Here's what's happening today.</p>
    </DashboardLayout>
  );
};

export default Dashboard;