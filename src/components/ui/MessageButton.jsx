import { MessageSquare } from "lucide-react";

export default function MessageButton({
    onClick,
}) {
    return (
        <button
            onClick={onClick}
            className="
                rounded-full
                p-2
                transition
                hover:bg-gray-100
            "
        >
            <MessageSquare
                size={21}
                className="text-gray-600"
            />
        </button>
    );
}