
import jane from "../../assets/screenshots/Jane Mwende.svg"
import AttachmentCard from "./AttachmentCard";
const MessageBubble = ({
    sender,
    message,
    time,
    avatar,
    name,
    online,
    attachment,
    type,
}) => {
    const isMe = sender === "me";

    return (
        <div
            className={`flex ${isMe ? "justify-end" : "justify-start"
                }`}
        >
            {/* Received Message */}
            {!isMe ? (
                <div className="flex flex-row justify-between gap-4 ">
                    <div className="flex items-end justify-start">
                        <img src={jane} alt="User pic" className="h-8 w-8 shrink-0  object-cover" />
                    </div>
                    <div className="flex flex-col items-center justify-start max-w-[92%]">
                        {type === "text" ? (
                            <div className="flex items-center bg-white shadow-[0px_2px_15px_-3px_rgba(0,0,0,0.07)] rounded-t-2xl rounded-r-2xl py-3 px-5  ">
                                <p className="font-medium text-bodyText text-sm leading-5">
                                    {message}
                                </p>
                            </div>
                        ) : (
                            <AttachmentCard
                                fileName={attachment.name}
                                fileSize={attachment.size}
                                fileType={attachment.type}
                            />
                        )}

                        <p className="mt-1 text-xs w-full font-semibold uppercase tracking-[1px] text-[#94A3B8]">
                            {time}
                        </p>
                    </div>


                </div>
            ) : (
                /* Sent Message */
                <div className="max-w-[92%]">
                    <div className="flex items-center bg-[linear-gradient(135deg,#005D53_0%,#1F8B80_100%)] rounded-t-2xl rounded-bl-2xl py-3 px-5 shadow-[0px_10px_15px_-3px_rgba(0,35,111,0.1),0px_4px_6px_-4px_rgba(0,35,111,0.1)]
">
                        <p className="font-medium text-white text-sm leading-5 w-full">{message}</p>
                    </div>

                    <p className="mt-1 text-xs w-full text-right  font-semibold tracking-[1px] uppercase text-[#94A3B8]">{time}</p>

                </div>
            )}
        </div>
    );
};

export default MessageBubble;