import { ChevronDown } from "lucide-react";

export default function UserProfile({
    name,
    role,
    image,
}) {
    return (
        <button
            className="
                flex
                items-center
                gap-3
                rounded-lg
                px-2
                py-1
                transition
                hover:bg-gray-100
            "
        >

            <div className="hidden md:block text-right">

                <h3 className="text-sm font-semibold text-gray-800">
                    {name}
                </h3>

                <p className="text-[11px] uppercase tracking-wider text-gray-500">
                    {role}
                </p>

            </div>

            <img
                src={image}
                alt={name}
                className="
                    h-11
                    w-11
                    rounded-full
                    border-2
                    border-primary
                    object-cover
                "
            />

            <ChevronDown
                size={16}
                className="hidden md:block text-gray-400"
            />

        </button>
    );
}