import { ChevronRight } from "lucide-react";

const QuickCard = ({
    title,
    icon,
    iconClassName = "bg-[#D9EEF8] ",
    textColor = "text-white",
    selected = false,
    onClick,
    background = 'bg-[#FFFFF] shadow-[0px_10px_15px_-3px_rgba(0,93,83,0.2),0px_4px_6px_-4px_rgba(0,93,83,0.2)] border border-solid border-[rgba(189,201,197,0.1)]',
}) => {
    return (
        <button className={`w-full flex flex-row items-center justify-between p-4   ${background} rounded-[12px] `}>
            {/* Icon container and label */}
            <div className="flex flex-row items-center gap-4">
                <div
                    className={`
                    flex
                    h-10
                    w-10
                    shrink-0
                    items-center
                    justify-center
                    rounded-[8px]
                    ${iconClassName}
                `}
                >
                    <img
                        src={icon}
                        alt=""
                        className="h-5 w-5 object-contain"
                    />
                </div>
                <p className={`text-base font-semibold ${textColor}`}>{title}</p>

            </div>
             <ChevronRight size={25} className={`${textColor}`} />           
        </button>
    );
};

export default QuickCard;