const GreenCard = ({
    title,
    description,
    children,
    onClick,
    badge = false,
    badgeText,
    image = false,
}) => {
    return (
        <div className="flex flex-row w-full items-center justify-between gap-4 rounded-[12px] bg-[linear-gradient(135deg,#005D53_0%,#13776B_100%)] p-6">
            <div className="flex-col flex items-start">
                {/* badge */}
            {badge && (<span className="bg-[#ffffff]/10  flex items-center py-1 px-2">
                <p className="uppercase font-semibold text-[10px] text-white tracking-[1px]">{badgeText}</p>
            </span>)}

            <p className="mt-4 text-xl font-semibold text-white">{title}</p>
            <p className="text-sm text-primaryLight/80 mb-6 mt-2">{description}</p>

             {children}
            </div>
            {image && (<img src={image} alt="image"/>)}
        </div>

       
    );
};

export default GreenCard;