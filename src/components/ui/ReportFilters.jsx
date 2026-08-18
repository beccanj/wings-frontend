import { CalendarDays, SlidersHorizontal } from "lucide-react";
import Buttons from "./Buttons";
import SelectField from "./SelectField";
import generate from '../../assets/buttons/recycle.svg'

const ReportFilters = ({
    reportType,
    dateRange,
    onReportTypeChange,
    onDateRangeChange,
    onGenerate,
}) => {
    return (
        <div
            className="
                w-full
                rounded-[10px]
                border
                border-[#E8EBEA]
                bg-white
                p-8
                shadow-[0px_1px_2px_rgba(0,0,0,0.03)]
                md:max-w-[298px]
                
            "
        >
            <div className="flex items-center gap-2">
                <SlidersHorizontal
                    size={17}
                    className="text-primary"
                />

                <h2 className="text-xl font-manrope font-bold text-primary">
                    Generate Report
                </h2>
            </div>

            <div className="mt-6">
                <SelectField
                    name="reportType"
                    label="Report Type"
                    value={reportType}
                    onChange={onReportTypeChange}
                    options={[
                        {
                            value: "Placement Report",
                            label: "Placement Report",
                        },
                        {
                            value: "User Growth Report",
                            label: "User Growth Report",
                        },
                        {
                            value: "Payment Report",
                            label: "Payment Report",
                        },
                        {
                            value: "Verification Report",
                            label: "Verification Report",
                        },
                        {
                            value: "Engagement Report",
                            label: "Engagement Report",
                        },
                    ]}
                />
            </div>

            <div className="relative mt-4">
                <SelectField
                    name="dateRange"
                    label="Date Range"
                    value={dateRange}
                    onChange={onDateRangeChange}
                    options={[
                        {
                            value: "Last 7 Days",
                            label: "Last 7 Days",
                        },
                        {
                            value: "Last 30 Days",
                            label: "Last 30 Days",
                        },
                        {
                            value: "Last 90 Days",
                            label: "Last 90 Days",
                        },
                        {
                            value: "This Year",
                            label: "This Year",
                        },
                    ]}
                />
            </div>

            <Buttons
                text="Generate Report"
                icon={<img src={generate} className="w-4 h-4" />}
                iconPosition="left"
                onClick={onGenerate}
                className="
                    h-[56px]
                    mt-5
                    w-full
                    rounded-[12px]
                    p-4
                    
                    font-medium
                    text-sm
                    shadow-[0_10px_15px_-3px_rgba(0,0,0,0.1),0_4px_6px_-4px_rgba(0,0,0,0.1)]
                    bg-[linear-gradient(135deg,#005D53_0%,#13776B_100%)]
                "
            />
        </div>
    );
};

export default ReportFilters;