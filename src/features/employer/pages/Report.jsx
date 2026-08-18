import { useState } from "react";
import {
    Activity,
    BadgeCheck,
    BriefcaseBusiness,
    ChartNoAxesCombined,
    ClipboardCheck,
    CreditCard,
    MessageSquare,
    Users,
} from "lucide-react";

import DashboardLayout from "../../../components/DashboardLayout";
import PageHeader from "../../../components/layout/PageHeader";
import ReportFilters from "../../../components/ui/ReportFilters";
import ReportPreviewHeader from "../../../components/ui/ReportPreviewHeader";
import ReportStatCard from "../../../components/ui/ReportStatCard";
import Card from "../../../components/ui/Card";
import userGrowth from '../../../assets/buttons/user.svg'
import placement from '../../../assets/buttons/place.svg'
import payment from '../../../assets/buttons/payment.svg'
import verify from '../../../assets/buttons/verify.svg'
import engagement from '../../../assets/buttons/engage.svg'
import totals from '../../../assets/buttons/totals.svg'
import growth from '../../../assets/buttons/growth-rate.svg'
import activeItems from '../../../assets/buttons/active-items.svg'

const reportTypes = [
    {
        id: "growth",
        title: "User Growth",
        description: "Detailed analysis of signup trends and retention.",
        icon: userGrowth,
        iconClassName: "bg-[#D7EDF8] text-[#537282]",
    },
    {
        id: "placement",
        title: "Placement",
        description: "Tracking job fills, hiring speed, and success rates.",
        icon: placement,
        iconClassName: "bg-primary text-white",
    },
    {
        id: "payment",
        title: "Payment",
        description: "Revenue flows, transaction histories, and commissions.",
        icon: payment,
        iconClassName: "bg-[#F9D8CC] text-[#8A4B39]",
    },
    {
        id: "verification",
        title: "Verification",
        description: "Compliance metrics and user vetting status reports.",
        icon: verify,
        iconClassName: "bg-[#E0E5E4] text-[#596466]",
    },
    {
        id: "engagement",
        title: "Engagement",
        description: "Community interaction logs and active session data.",
        icon: engagement,
        iconClassName: "bg-[#A8EFE5] text-[#16756C]",
    },
];

const Reports = () => {

    const [selectedReport, setSelectedReport] =
        useState("placement");

    const [reportType, setReportType] =
        useState("Placement Report");

    const [dateRange, setDateRange] =
        useState("Last 30 Days");

    const handleReportSelect = (id) => {
        setSelectedReport(id);

        const report = reportTypes.find(
            (item) => item.id === id
        );

        if (report) {
            setReportType(`${report.title} Report`);
        }
    };

    return (
        <DashboardLayout >
            <div className="w-full">

                {/* Breadcrumb */}
                <div className="mb-2 flex items-center gap-2 text-[10px] text-[#657072]">
                    <span>Console</span>
                    <span>›</span>
                    <span className="font-bold text-primary">
                        Reports & Analytics
                    </span>
                </div>

                {/* Page heading */}
                <PageHeader
                title="Reports & Analytics"
                subtitle="Extract deep insights from platform performance and activity."
                />

                {/* Report selection area */}
                <div
                    className="
                        mt-7
                        flex md:flex-row flex-col justify-between gap-4 
                    "
                >
                    {/* Filters */}
                    <ReportFilters
                        reportType={reportType}
                        dateRange={dateRange}
                        onReportTypeChange={setReportType}
                        onDateRangeChange={setDateRange}
                        onGenerate={() => {}}
                    />

                    {/* Report types */}
                    <div>
                        <p className="mb-3 text-[10px] font-bold uppercase tracking-[1px] text-[#4E585A]">
                            Reports
                        </p>

                        <div className="grid grid-cols-2 gap-4  xl:grid-cols-3">
                            {reportTypes.map((report) => (
                                <Card
                                    key={report.id}
                                    {...report}
                                    selected={
                                        selectedReport === report.id
                                    }
                                    onClick={() =>
                                        handleReportSelect(report.id)
                                    }
                                />
                            ))}
                        </div>
                    </div>
                </div>

                {/* Preview */}
                <section className="mt-8">
                    <ReportPreviewHeader
                        reportName={reportType}
                        dateRange={dateRange}
                        generatedDate="4/1/2026"
                    />

                    {/* Statistics */}
                    <div className="mt-5 grid grid-cols-2 gap-4 md:grid-cols-3">
                        <ReportStatCard
                            label="Total Records"
                            value="1,247"
                            description="↑ 8.4% from previous month"
                            badge="Volume"
                            icon={totals}
                            iconClassName="bg-[#A8EFE5] text-primary"
                        />

                        <ReportStatCard
                            label="Growth Rate"
                            value="+12%"
                            description="⌁ Consistently above baseline"
                            badge="Velocity"
                            icon={growth}
                            iconClassName="bg-[#D7EDF8] text-[#537282]"
                        />

                        <ReportStatCard
                            label="Active Items"
                            value="89"
                            description="◉ Fully verified and deployed"
                            badge="Status"
                            icon={activeItems}
                            iconClassName="bg-[#F9D8CC] text-[#8A4B39]"
                            badgeClassName="bg-[#F6EFEC] text-[#8A5A4B]"
                        />
                    </div>
                </section>
            </div>
        </DashboardLayout>
    );
};

export default Reports;