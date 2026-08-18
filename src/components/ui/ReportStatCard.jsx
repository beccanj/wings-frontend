import ellipsey from '../../assets/Overlay.svg'

const ReportStatCard = ({
    label,
    value,
    description,
    badge,
    icon,
    iconClassName = "bg-[#BDEFE7] ",
    badgeClassName = "bg-[#E8F5F3] text-primary",
}) => {
    return (
        <div
            className="
                relative
                overflow-hidden
                rounded-[12px]
                border
                border-[#E9ECEB]
                bg-white
                p-5
            "
        >
            {/* Decorative circle */}
            <div className="
                    absolute
                    -right-3
                    -top-3 
                ">
                
                <img src={ellipsey} alt="" />
            </div>
            <div className="flex justify-between">


                {/* Icon */}
                <div className={`
                                        relative
                                        flex
                                        h-9
                                        w-9
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

                {/* Badge */}
                <span
                    className={`
                            min-w-[63px]
                            absolute
                            right-2
                            top-4
                            flex
                            items-center
                            justify-center
                            rounded-full
                            px-2
                            py-1
                            text-[8px]
                            font-bold
                            uppercase
                            tracking-[0.5px]
                            ${badgeClassName}
                        `}
                >
                    {badge}
                </span>
            </div>


            <p className="relative mt-5 text-xs text-subBody font-medium">
                {label}
            </p>

            <p className="relative mt-1 text-base font-extrabold text-bodyText font-manrope">
                {value}
            </p>

            <p className="relative mt-1 text-[10px] font-semibold text-[#059669]">
                {description}
            </p>
        </div>
    );
};

export default ReportStatCard;