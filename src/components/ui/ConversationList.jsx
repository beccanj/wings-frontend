import { Search } from "lucide-react";
import ConversationItems from "./ConversationItem"
import ConversationItem from "./ConversationItem";
import SearchBar from "./SearchBar";
export default function ConversationList({
    conversations,
    selectedConversation,
    setSelectedConversation,
}) {
    return (
        <div
            className="
                
                rounded-xl
                md:py-8
                py-4 
                
                overflow-hidden
                
                flex
                flex-col
                
            "
        >
            {/* Search */}
            <div className="px-2">

                <SearchBar
                    variant="chat"
                    placeholder="Search message..."
                />
            </div>


            {/* Conversations */}

            <div className="flex-1 overflow-y-auto mt-3">

                {conversations.map((conversation) => (

                    <ConversationItem
                        key={conversation.id}
                        conversation={conversation}
                        selected={
                            selectedConversation.id === conversation.id
                        }
                        onClick={() =>
                            setSelectedConversation(conversation)
                        }
                    />

                ))}

            </div>

        </div>
    );
}