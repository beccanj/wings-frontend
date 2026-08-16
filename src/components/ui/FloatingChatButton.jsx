import { MessageCircle } from "lucide-react";

const FloatingChatButton = ({ onClick }) => {
    return (
        <button
            type="button"
            onClick={onClick}
            aria-label="Open chat"
            className="
                fixed
                bottom-6
                right-6
                z-50
                flex
                h-14
                w-14
                items-center
                justify-center
                rounded-2xl
                bg-primary
                text-white
                shadow-lg
                transition
                hover:scale-105
                hover:shadow-xl
                md:bottom-8
                md:right-8
            "
        >
            <MessageCircle size={27} strokeWidth={1.7} />
        </button>
    );
};

export default FloatingChatButton;