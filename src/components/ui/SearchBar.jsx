import { Search } from "lucide-react";

export default function SearchBar({
    value,
    onChange,
    placeholder = "Search applications or candidates...",
}) {
    return (
        <div className="relative flex-1 max-w-xl">

            <Search
                size={18}
                className="
                    absolute
                    left-4
                    top-1/2
                    -translate-y-1/2
                    text-gray-400
                "
            />

            <input
                type="text"
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                className="
                    w-full
                    rounded-full
                    bg-gray-100
                    py-3
                    pl-11
                    pr-4
                    text-sm
                    outline-none
                    transition
                    focus:ring-2
                    focus:ring-primary/20
                    focus:bg-white
                "
            />

        </div>
    );
}