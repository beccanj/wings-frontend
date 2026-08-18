import { CalendarDays, Download } from "lucide-react";
import Buttons from "./Buttons";
import pdf from "../../assets/buttons/pdf.svg";

const ReportPreviewHeader = ({
    reportName = "Placement Report",
    dateRange = "Last 30 Days",
    generatedDate = "4/1/2026",
}) => {
    return (
        <div className="border-b border-[#E9ECEB] pb-4 flex flex-col gap-4 sm:flex-row sm:justify-between">
            <div className="flex flex-row items-start gap-3.5">
                <div className="bg-primary h-8 w-1 rounded-[9999px]">
                </div>

                {/* Title */}
                <div className="flex flex-col items-start min-w-0">
                    <h2 className="text-base font-bold text-[#202629] font-manrope">
                        Report Preview
                    </h2>

                    <div className="flex flex-wrap items-center gap-2 text-[10px] text-[#657072]">
                        <span className="font-semibold text-primary">
                            {reportName}
                        </span>

                        <span className="text-[#BDC9C5]">•</span>

                        <span className="text-subBody">{dateRange}</span>

                        <span className="text-[#BDC9C5]">•</span>

                        <span className="flex items-center gap-1 text-subBody">
                            <CalendarDays size={11} />
                            Generated {generatedDate}
                        </span>
                    </div>
                </div>
            </div>

            {/* Actions */}
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-center gap-2">
                    <Buttons
                        text="CSV"
                        icon={<Download size={14} color="#191C1C" />}
                        iconPosition="left"
                        variant="borderless"
                        className="
                            rounded-[8px]
                            border
                            border-borderColor/30
                            bg-white
                            text-sm
                            font-semibold
                            text-bodyText
                        "
                    />

                    <Buttons
                        text="Export PDF"
                        icon={<img src={pdf} alt="" />}
                        iconPosition="left"
                        variant="borderless"
                        className="
                            rounded-[7px]
                            text-white
                            text-sm
                            font-semibold
                            bg-black/80
                            hover:bg-[#1F2223]
                        "
                    />
                </div>
            </div>
        </div>
    );
};

export default ReportPreviewHeader;