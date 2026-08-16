import { Search } from "lucide-react";
const SearchBar = ({
    value,
    onChange,
    placeholder = "Search...",
    variant = "default",
}) => {
    const variants = {
        default: {
            input: "bg-[#f2f4f3] focus:bg-white rounded-full py-2 pl-11 pr-4",
            icon: "text-gray-400  top-4.5",
            ring: "focus:ring-primary/20",
        },

        chat: {
            input: "bg-white focus:bg-white rounded-full py-2 pl-11 pr-4",
            icon: "text-[#94A3B8]  top-4.5",
            ring: "focus:ring-primary/20",
        },

        training: {
            input: "bg-white focus:bg-white rounded-[12px] py-3 pl-11 pr-4",
            icon: "text-[#94A3B8]  top-5.5",
            ring: "focus:ring-primary/20",
        },
    };

    const current = variants[variant];

    return (
        <div className="relative flex-1 ">
            <Search
                size={18}
                className={`
                    absolute
                    left-4
                   
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
        text-sm
        outline-none
        transition
        focus:ring-2
        ${current.input}
        ${current.ring}
    `}
            />
        </div>
    );
};

export default SearchBar;