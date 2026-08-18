const Card = ({
    title,
    description,
    icon,
    iconClassName = "bg-[#D9EEF8] ",
    selected = false,
    onClick,
}) => {
    return (
        <button
            type="button"
            onClick={onClick}
            className={`
                relative
                flex
                h-[200px]
                w-full
                md:max-w-[199px]
                flex-col
                items-start
                rounded-[10px]
                border
                bg-white
                p-5
                text-left
                transition-all
                duration-200
                ${
                    selected
                        ? "border-primary shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)]"
                        : "border-[#E7EAEA] hover:border-primary/40"
                }
            `}
        >
            {selected && (
                <span
                    className="
                        absolute
                        -top-[9px]
                        left-5
                        rounded-full
                        bg-primary
                        px-3
                        py-1
                        text-[9px]
                        font-bold
                        uppercase
                        tracking-[1px]
                        text-white
                    "
                >
                    Selected
                </span>
            )}

            <div
                className={`
                    flex
                    h-12
                    w-12
                    shrink-0
                    items-center
                    justify-center
                    rounded-md
                    ${iconClassName}
                `}
            >
                <img
                    src={icon}
                    alt=""
                    className="h-5 w-5 object-contain"
                />
            </div>

            <h3 className="mt-4 text-base font-semibold text-bodyText">
                {title}
            </h3>

            <p className="mt-1 text-sm leading-[19.5px] text-subBody">
                {description}
            </p>
        </button>
    );
};

export default Card;