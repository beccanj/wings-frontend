import { Bell } from "lucide-react";

export default function NotificationButton({
    count = 0,
    onClick,
}) {
    return (
        <button
            onClick={onClick}
            className="
                relative
                rounded-full
                p-2
                transition
                hover:bg-gray-100
            "
        >
            <Bell
                size={21}
                className="text-gray-600"
            />

            {count > 0 && (
                <span
                    className="
                        absolute
                        top-1.5
                        right-1.5
                        h-2.5
                        w-2.5
                        rounded-full
                        bg-red-500
                    "
                />
            )}

        </button>
    );
}