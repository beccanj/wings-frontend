import { useState } from "react";
import ConversationList from "../../../components/ui/ConversationList";
import DashboardLayout from "../../../components/DashboardLayout";
import AdminSidebar from "../../../features/auth/components/AdminSidebar";
import EmployerSidebar from "../../../features/employer/components/EmployerSidebar";

import PageHeader from "../../../components/layout/PageHeader";
import { useAuth } from '../../../features/auth/components/Authcontext'
import Buttons from "../../../components/ui/Buttons";
import { EllipsisVertical, User } from "lucide-react";
import MessageBubble from "../../../components/ui/MessageBubble";
import ChatInput from "../../../components/ui/ChatInput";

// mock conversations
const initialConversations = [
    {
        id: 1,
        name: "Jane Mwende",
        avatar: "https://i.pravatar.cc/150?img=1",
        lastMessage: "I have uploaded the latest report...",
        time: "2M AGO",
        online: true,
        unread: 0,
    },
    {
        id: 2,
        name: "Grace Akinyi",
        avatar: "https://i.pravatar.cc/150?img=2",
        lastMessage: "Looking forward to the interview...",
        time: "1H AGO",
        online: false,
        unread: 0,
    },
    {
        id: 3,
        name: "Mary Wanjiru",
        avatar: "https://i.pravatar.cc/150?img=3",
        lastMessage: "Thank you for the opportunity!",
        time: "YESTERDAY",
        online: true,
        unread: 2,
    },
    {
        id: 4,
        name: "Sarah Musyoka",
        avatar: "https://i.pravatar.cc/150?img=4",
        lastMessage: "The documents have been signed.",
        time: "YESTERDAY",
        online: false,
        unread: 0,
    },
];

// mock messages
const messages = [
    {
        id: 1,
        sender: "other",
        message:
            "Hello! I'm reaching out about the updated project requirements we discussed earlier today.",
        time: "10:42 AM",
        type: "text",
    },
    {
        id: 2,
        sender: "me",
        message:
            "Hi Jane! I've received the files. Could you please double check the signature on the third page of the contract?",
        time: "10:45 AM",
        type: "text",
    },
    {
        id: 3,
        sender: "other",
        message:
            "Ah, good catch. I'll upload the corrected document immediately.",
        time: "10:47 AM",
        type: "text",
    },

    {
        id: 4,
        sender: "other",
        type: "attachment",
        attachment: {
            name: "Contract_V2_signed.pdf",
            size: "1.2 MB",
            type: "pdf",
        },
        time: "10:99 AM"
    },

    {
        id: 5,
        sender: "other",
        type: "text",
        message: "I have uploaded the latest reports as well. Let me know if you need anything else!",
        time: "11:01 AM",

    },
];

export default function Messages() {

    const [selectedConversation, setSelectedConversation] = useState(
        initialConversations[0]
    );

    return (
        <DashboardLayout >
            <PageHeader
                title="Messages"
                subtitle="Communicate with workers and manage your conversations."
            />

            <div className="grid grid-cols-1 lg:grid-cols-12  h-[700px]">
                <div className="md:col-span-4">
                    <ConversationList
                        conversations={initialConversations}
                        selectedConversation={selectedConversation}
                        setSelectedConversation={setSelectedConversation}
                    />
                </div>

                <div className="hidden lg:flex lg:col-span-8 rounded-xl flex-col  bg-white mt-6">
                    {/* Chat header */}
                    <div className="border-b border-solid border-[rgba(197,197,211,0.1)] flex  justify-between w-full items-center px-8 py-4">
                        <div className="flex items-center gap-3">
                            <div className="relative">
                                <img
                                    src={selectedConversation.avatar}
                                    alt={selectedConversation.name}
                                    className="h-12 w-12 rounded-xl object-cover"
                                />

                                {selectedConversation.online && (
                                    <span
                                        className="
                    absolute
                    bottom-0
                    right-0
                    h-3
                    w-3
                    rounded-full
                    border-2
                    border-white
                    bg-green-500
                "
                                    />
                                )}
                            </div>

                            <div>
                                <h3 className="text-base font-semibold text-primary">
                                    {selectedConversation.name}
                                </h3>

                                <div className=" flex items-center gap-2">
                                    {selectedConversation.online && (
                                        <span className="h-2 w-2 rounded-full bg-green-500" />
                                    )}

                                    <p className="text-xs text-[#94A3B8] font-semibold">
                                        {selectedConversation.online ? "Active now" : "Offline"}
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-row items-center gap-4 ">
                            <Buttons
                                text="View Profile"
                                variant="outline2"
                                iconPosition="left"
                                icon=<User size={15} />
                                className="md:px-3 md:py-2 text-sm font-semibold rounded-[12px] border border-solid border-[rgba(197,197,211,0.2)] text-primary bg-white  "
                            />
                            <div>
                                <EllipsisVertical className="text-[#94A3B8]" />
                            </div>
                        </div>


                    </div>
                    {/* Message bubbles */}
                    <div className="flex-1 overflow-y-auto bg-white px-8 py-6 space-y-6 ">
                        {messages.map((message) => (
                            <MessageBubble
                                key={message.id}
                                {...message}
                            />
                        ))}
                    </div>
                    {/* chat input */}
                    <ChatInput />
                </div>
            </div>
        </DashboardLayout>
    );
}