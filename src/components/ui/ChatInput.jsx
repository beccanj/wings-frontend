import { ImagePlus, Smile, SendHorizontal } from "lucide-react";
import attach from "../../assets/buttons/attach.svg"
import image from "../../assets/buttons/image.svg"
import smile from "../../assets/buttons/smile.svg"
const ChatInput = () => {
    return (
        <div className="border-t border-solid border-[rgba(197,197,211,0.1)] px-8 py-5">
            <div
                className="
                    flex
                    items-center
                    gap-3
                    rounded-[16px]
                    bg-[rgba(242,255,254,0.3)]

                    p-2
                "
            >
                {/* attach */}
                <button className="text-[#94A3B8] transition hover:text-primary">
                    <img src={attach} alt="attach file" />
                </button>

                {/* Upload image */}
                <button className="text-[#94A3B8] transition hover:text-primary">
                    <img src={image} alt="attach file" />
                </button>

                {/* Input */}
                <textarea
                    rows={1}
                    placeholder="Type your message..."
                    className="
        flex-1
        resize-none
        overflow-hidden
        bg-transparent
        text-sm
        text-bodyText
        placeholder:text-[#94A3B8]
        outline-none
    "
                />
                <div className="flex items-center gap-3">

                    <button className="text-[#94A3B8] transition hover:text-primary">
                        <img src={smile} alt="attach file" />
                    </button>

                    {/* Send */}
                    <button
                        className="
                        flex
                        h-10
                        w-10
                        items-center
                        justify-center
                        rounded-[8px]
                        bg-primary
                        text-white
                        transition
                        hover:opacity-90
                        shadow-[0px_10px_15px_-3px_rgba(0,35,111,0.2),0px_4px_6px_-4px_rgba(0,35,111,0.2)]

                    "
                    >
                        <SendHorizontal size={18} />
                    </button>
                </div>

            </div>
        </div>
    );
};

export default ChatInput;