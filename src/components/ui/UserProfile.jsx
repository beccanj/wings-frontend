import { ChevronDown } from "lucide-react";
import becca from '../../assets/beccaprofile.png'


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

                <h3 className="text-sm font-semibold text-bodyText">
                    {name}
                </h3>

                <p className="text-[10px] font-semibold uppercase tracking-[1px] text-[#3e4946]">
                    {role}
                </p>

            </div>

            <img
                src={becca}
                alt={name}
                className="
                    h-11
                    w-11
                    rounded-full
                    border-2
                    border-primaryLight
                    object-cover
                "
            />

            {/* <ChevronDown
                size={16}
                className="hidden md:block text-gray-400"
            /> */}

        </button>
    );
}