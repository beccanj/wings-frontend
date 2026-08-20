const StatCard = ({
    title,
    description,
    icon,
    badge = false,
    badgeText,
    iconClassName = "bg-[#D9EEF8] ",
    badgeClassName = "bg-[#E8F5F3] text-primary",
    onClick,
}) => {
    return (
        <button
            type="button"
            onClick={onClick}
            className={`
               shadow-[0px_1px_2px_rgba(0,0,0,0.05)]
                flex
                w-full
                flex-col
                items-start
                rounded-[12px]
                h-[178.5px]
                max-w-[214px]
                bg-white
                p-6
                text-left
                transition-all
                duration-200
                relative
                overflow-hidden
               
            `}
        >
            <div className="flex justify-between  ">
                {/* Icon */}
                <div
                    className={`
                    flex
                    h-12
                    w-12
                    shrink-0
                    items-center
                    justify-center
                    rounded-[12px]
                    ${iconClassName}
                `}
                >
                    <img
                        src={icon}
                        alt=""
                        className="h-6 w-6 object-contain"
                    />
                </div>
                {/* badge */}
                {badge && (
                    <span className={`min-w-[40px] h-[24px] absolute top-6 right-6 rounded-[4px] 
                    flex items-center justify-center text-[12px]  font-semibold  ${badgeClassName}`}>
                        {badgeText}</span>
                )}
            </div>


            <h3 className="mt-4 text-2xl font-extrabold text-bodyText font-nunito">
                {title}
            </h3>

            <p className="mt-1 text-sm leading-[19.5px] text-subBody font-medium">
                {description}
            </p>
        </button>
    );
};

export default StatCard;