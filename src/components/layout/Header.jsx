import { Menu } from "lucide-react";
import SearchBar from "../ui/SearchBar";
import NotificationButton from "../ui/NotificationButton";
import MessageButton from "../ui/MessageButton";
import UserProfile from "../ui/UserProfile";

export default function Header({
    sidebarOpen,
    setSidebarOpen,
    search,
    setSearch,
}) {
    return (
        <header
            className="
                sticky
                top-0
                z-30
                bg-white
                border-b
                border-gray-200
            "
        >

            <div
                className="
                    flex
                    items-center
                    justify-between
                    gap-4
                    px-6
                    py-1.5
                    md:py-3
                    md:px-12
                "
            >

                {/* Left */}

                <div className="flex items-center gap-4 flex-1">

                    {/* Mobile Menu */}

                    <button
                        onClick={() =>
                            setSidebarOpen(true)
                        }
                        className="
                            lg:hidden
                            rounded-lg
                            p-2
                            hover:bg-gray-100
                        "
                    >
                        <Menu size={22} />
                    </button>

                    <SearchBar
                        value={search}
                        onChange={(e) =>
                            setSearch(e.target.value)
                        }
                    />

                </div>

                {/* Right */}

                <div
                    className="
                        flex
                        items-center
                        justify-end
                        
                        gap-1
                        md:gap-4
                    "
                >
                    <div className="flex items-center gap-1">
                        <NotificationButton
                            count={2}
                        />

                        <MessageButton />
                    </div>



                    <div
                        className="
                            hidden
                            sm:block
                            h-6
                            w-px
                            bg-[#e1e3e2]
                        "
                    />

                    <UserProfile
                        name="John Anderson"
                        role="Premium Employer"
                        image="/images/avatar.png"
                    />

                </div>

            </div>

        </header>
    );
}