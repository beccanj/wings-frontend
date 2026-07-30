export default function ConversationItem({
    conversation,
    selected,
    onClick,
}) {
    return (
        <button
            onClick={onClick}
            className={`
                w-full
                flex
                items-start
                gap-3
                px-6
                py-4
                transition
                text-left
                border-l-4
                cursor-pointer
                

                ${
                    selected
                        ? "border-primary bg-white"
                        : "border-transparent hover:bg-primary/5 rounded-lg"
                }
            `}
        >
            <div className="relative">

                <img
                    src={conversation.avatar}
                    alt={conversation.name}
                    className="w-12 h-12 rounded-[12px] object-cover"
                />

                {conversation.online && (
                    <span
                        className="
                            absolute
                            bottom-0
                            right-0
                            w-3
                            h-3
                            rounded-full
                            bg-green-500
                            border-2
                            border-white
                        "
                    />
                )}

            </div>

            <div className="flex-1 min-w-0 ">

                <div className="flex justify-between items-center">

                    <h3 className="font-medium text-sm truncate">
                        {conversation.name}
                    </h3>

                    <span className="text-[10px]  font-semibold text-[#94A3B8]">
                        {conversation.time}
                    </span>

                </div>

                <div className="flex justify-between items-center ">

                    <p className={`text-sm 
                        ${selected ? "text-primary font-semibold truncate" : 
                                    "text-mutedText truncate"}
                        
                        `}
                        >
                        {conversation.lastMessage}
                    </p>

                    {conversation.unread > 0 && (
                        <span
                            className="
                                ml-2
                                h-5
                                w-5
                                rounded-full
                                bg-primary
                                text-white
                                text-[10px]
                                flex
                                items-center
                                justify-center
                            "
                        >
                            {conversation.unread}
                        </span>
                    )}

                </div>

            </div>

        </button>
    );
}