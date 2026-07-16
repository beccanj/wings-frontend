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
                    px-4
                    md:px-8
                    py-4
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
                        gap-2
                        md:gap-4
                    "
                >

                    <NotificationButton
                        count={2}
                    />

                    <MessageButton />

                    <div
                        className="
                            hidden
                            sm:block
                            h-6
                            w-px
                            bg-gray-300
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