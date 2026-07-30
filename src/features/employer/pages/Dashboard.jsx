import DashboardLayout from "../../../components/DashboardLayout";
import AdminSidebar from "../../../features/auth/components/AdminSidebar";
import EmployerSidebar from "../../../features/employer/components/EmployerSidebar";
import { useAuth } from '../../../features/auth/components/Authcontext'
import Buttons from "../../../components/ui/Buttons";
import { Calendar, Download } from "lucide-react";
import PageHeader from "../../../components/layout/PageHeader";

const Dashboard = () => {
 
  

  return (
    <DashboardLayout >

      <PageHeader
        title="Dashboard"
        subtitle="Welcome back. Here is the operational overview for today."
      >
        <Buttons
          text="Last 30 days"
          variant="outline2"
          iconPosition="left"
          icon={<Calendar size={18} />}
          className="md:px-4 md:py-3 text-sm font-medium rounded-[12px] bg-white border-borderColor"
        />
        <Buttons
          text="Export Report"
          variant="primary"
          iconPosition="left"
          icon={<Download size={18} />}
          className="md:px-4 md:py-3 text-sm font-medium rounded-[12px]"
        />

      </PageHeader>

     


    </DashboardLayout>
  );
};
export default Dashboard;