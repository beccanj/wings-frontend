import { MapPin, ArrowRight, ArrowRightCircle } from "lucide-react";
import Buttons from "./Buttons";
import avatars from "../../assets/avatars.png"

const JobCard = ({
    title,
    location,
    salaryRange,
    tags = ["Full-Time", "Child Care"],
    postedDate,
    applicantCount,
    applicantAvatars = [],
    maxAvatarsShown = 3,
    onViewJob,
    onViewApplicants,
}) => {

    const visibleAvatars = applicantAvatars.slice(0, maxAvatarsShown);

    const extraCount = Math.max(
        applicantCount - maxAvatarsShown,
        0
    );

    return (
        <div className="flex flex-col items-start p-6 rounded-[12px] shadow-sm border-[#BDC9C5]/10 bg-white ">

            {/* Job details UP */}
            <div className="flex flex-col sm:flex-row items-start justify-between w-full pb-4 border-b border-[#F2F4F3] gap-4">

                {/* LS */}
                <div className="flex flex-col items-start">

                    <p className="font-medium text-base text-bodyText">
                        {title}
                    </p>

                    {/* location n salary */}
                    <div className="mt-2 flex items-center gap-4 text-[#5C5C5C] text-[12px]">
                        <span className="flex items-center gap-1.5">
                            <MapPin
                                className="w-4 h-4 text-[#5c5c5c]"
                                strokeWidth={2}
                            />
                            {location}
                        </span>

                        <span>{salaryRange}</span>
                    </div>

                    {/* tags */}
                    <div className="mt-4 flex flex-wrap gap-2">
                        {tags.map((tag) => (
                            <span
                                key={tag}
                                className="px-4 py-1.5 rounded-full text-sm font-medium text-teal-800 bg-teal-50"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>

                </div>

                {/* RS */}
                <div className="flex flex-col justify-end shrink-0">
                    <p className="font-semibold text-xs text-subBody ">
                        {postedDate}
                    </p>

                    <p
                        onClick={onViewApplicants}
                        className="mt-1 font-medium text-sm text-primary cursor-pointer"
                    >
                        {applicantCount} Applicants
                    </p>
                </div>

            </div>

            {/* Buttons and avatars */}
            <div className="flex  justify-between w-full pt-4 flex-col sm:flex-row  gap-4">

                {/* avatar applicAants */}
                
                <div className="flex items-center shrink-0">
                    <img
                        src={avatars}
                        alt=""
                        className="max-w-full h-auto"
                    />
                </div>
                {/* buttons */}
                <div className="flex flex-wrap gap-3  sm:w-auto">

                    <Buttons
                        text="View Job"
                        variant="outline3"

                        onClick={onViewJob}
                        className="  bg-white  text-xs font-medium px-4 "
                    />

                    <Buttons
                        text="View Applicants"
                        variant="primary2"
                        icon={
                            <ArrowRight />
                        }
                        iconPosition="right"
                        className="  text-xs  shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)] px-4 "

                        onClick={onViewApplicants}
                    />

                </div>

            </div>

        </div>
    );
};

export default JobCard;