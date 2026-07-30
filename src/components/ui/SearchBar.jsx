import { Search } from "lucide-react";
const SearchBar = ({
    value,
    onChange,
    placeholder = "Search...",
    variant = "default",
}) => {
    const variants = {
        default: {
            background: "bg-[#f2f4f3] focus:bg-white",
            icon: "text-gray-400",
            ring: "focus:ring-primary/20",
        },
        chat: {
            background: "bg-white focus:bg-white",
            icon: "text-[#94A3B8]",
            ring: "focus:ring-primary/20",
        },
    };

    const current = variants[variant];

    return (
        <div className="relative flex-1 max-w-2xl">
            <Search
                size={18}
                className={`
                    absolute
                    left-4
                    top-4.5
                    -translate-y-1/2
                    ${current.icon}
                `}
            />

            <input
                type="text"
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                className={`
                    w-full
                    rounded-full
                    py-2
                    pl-11
                    pr-4
                    text-sm
                    outline-none
                    transition
                    focus:ring-2
                    ${current.background}
                    ${current.ring}
                `}
            />
        </div>
    );
};

export default SearchBar;