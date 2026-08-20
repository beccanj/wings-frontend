import DashboardLayout from "../../../components/DashboardLayout";

import Buttons from "../../../components/ui/Buttons";
import { ArrowRight, Calendar, Download } from "lucide-react";
import PageHeader from "../../../components/layout/PageHeader";
import calendarIcon from '../../../assets/buttons/Calendar.svg'
import StatCard from "../../../components/ui/StatCard";
import activeJobs from '../../../assets/buttons/actJob.svg'
import totalApplicants from '../../../assets/buttons/applicants.svg'
import hires from '../../../assets/buttons/hires.svg'
import pendPay from '../../../assets/buttons/pendingpay.svg'
import JobCard from "../../../components/ui/JobCard";

const Dashboard = () => {
  //  mock data jobs
  const mockJobs = [
    {
      id: 1,
      title: "Child Care Assistant",
      location: "Nairobi",
      salaryRange: "KSh 30,000 - 40,000",
      tags: ["Full-Time", "Child Care"],
      postedDate: "2 days ago",
      applicantCount: 8,
      applicantAvatars: [
        "/avatars/avatar1.png",
        "/avatars/avatar2.png",
        "/avatars/avatar3.png",
        "/avatars/avatar4.png",
        "/avatars/avatar5.png",
      ],
    },
    {
      id: 2,
      title: "Software Developer",
      location: "Westlands",
      salaryRange: "KSh 80,000 - 120,000",
      tags: ["Full-Time", "Technology"],
      postedDate: "5 days ago",
      applicantCount: 15,
      applicantAvatars: [
        "/avatars/avatar6.png",
        "/avatars/avatar7.png",
        "/avatars/avatar8.png",
      ],
    },


  ]


  return (
    <DashboardLayout >

      <PageHeader
        title="Welcome back, John!"
        subtitle="Here's what's happening with your recruitment workspace today."
      >
        <Buttons
          text="Oct 24, 2023"
          variant="borderless"
          iconPosition="left"
          icon={<img src={calendarIcon} alt="Calendar" />}
          className="bg-primaryLight/30 text-sm text-primary font-semibold rounded-[9999px]"
        />


      </PageHeader>
      {/* Statistics for employee part enjoy! */}
      <div className="mt-10 grid grid-cols-2 gap-6 md:grid-cols-4 ">
        <StatCard
          title='3'
          description="Active Jobs"
          badge={true}
          badgeText="Live"
          icon={activeJobs}
          iconClassName="bg-primaryLight "
          badgeClassName="bg-primary/10 text-primary"
        />
        <StatCard
          title='26'
          description="Total Applicants"
          badge={true}
          badgeText="+12%"
          icon={totalApplicants}
          iconClassName="bg-[#CBE7F5] "
          badgeClassName="bg-[#48626E]/10 text-primary"
        />
        <StatCard
          title='2'
          description="Hires This Month"
          badge={false}
          icon={hires}
          iconClassName="bg-primaryLight "
          badgeClassName="bg-primary/10 text-primary"
        />
        <StatCard
          title='1'
          description="Pending Payments"
          badge={false}
          icon={pendPay}
          iconClassName="bg-[#FFDAD6] "
          badgeClassName="bg-primary/10 text-primary"
        />





      </div>

      {/* Entire  */}
      <div className="flex md:flex-row flex-col gap-10 items-start justify-between">
        {/* Job LS */}
        <div className="max-w-[605px] w-full">
          <div className="flex justify-between mt-10 mb-5">
            <p className="text-xl font-bold font-manrope">Recent Job Posts</p>
            <span className="text-primary flex items-center gap-1 font-semibold text-sm">View All<ArrowRight color="#005D53" size={16} /></span>
          </div>
          {/* jobs */}
          <div className="grid grid-cols-1 gap-5 ">
            {mockJobs.map((job) => (
              <JobCard
                key={job.id}
                {...job}
                maxAvatarsShown={3}
                onViewJob={() => console.log("View job", job.id)}
                onViewApplicants={() =>
                  console.log("View applicants", job.id)
                }
              />
            ))}
          </div>
        </div>

        {/* QuickActions RS */}
        <div className="max-w-[282px] w-full">
          <p className="mt-10 mb-5 text-xl font-bold font-manrope">Quick Actions</p>
        </div>


      </div>






    </DashboardLayout>
  );
};
export default Dashboard;