// 'use client';

// import { useEffect, useState, useRef } from "react";
// import CustomButton from "../forms/CustomButton";
// import { ConversationType } from "@/app/inbox/page";
// import useWebSocket, {ReadyState} from "react-use-websocket";
// import { MessageType } from "@/app/inbox/[id]/page";
// import { UserType } from "@/app/inbox/page";

// interface ConversationDetailProps {
//     token: string;
//     userId: string;
//     conversation: ConversationType;
//     messages: MessageType[];
// }

// const ConversationDetail: React.FC<ConversationDetailProps> = ({
//     userId,
//     token,
//     messages,
//     conversation
// }) => {
//     const messagesDiv = useRef<HTMLDivElement>(null);
//     const [newMessage, setNewMessage] = useState('');
//     const myUser = conversation.users?.find((user) => user.id == userId)
//     const otherUser = conversation.users?.find((user) => user.id != userId)
//     const [realtimeMessages, setRealtimeMessages] = useState<MessageType[]>([]);

//     const { sendJsonMessage, lastJsonMessage, readyState } = useWebSocket(`${process.env.NEXT_PUBLIC_WS_HOST}/ws/${conversation.id}/?token=${token}`, {
//         share: false,
//         shouldReconnect: () => true,
//       },
//     )

//     useEffect(() => {
//         console.log("Connection state changed", readyState);
//     }, [readyState]);

//     useEffect(() => {
//         if (lastJsonMessage && typeof lastJsonMessage === 'object' && 'name' in lastJsonMessage && 'body' in lastJsonMessage) {
//             const message: MessageType = {
//                 id: '',
//                 name: lastJsonMessage.name as string,
//                 body: lastJsonMessage.body as string,
//                 sent_to: otherUser as UserType,
//                 created_by: myUser as UserType,
//                 conversationId: conversation.id
//             }

//             setRealtimeMessages((realtimeMessages) => [...realtimeMessages, message]);
//         }

//         scrollToBottom();
//     }, [lastJsonMessage]);

//     const sendMessage = async () => {
//         console.log('sendMessage'),

//         sendJsonMessage({
//             event: 'chat_message',
//             data: {
//                 body: newMessage,
//                 name: myUser?.name,
//                 sent_to_id: otherUser?.id,
//                 conversation_id: conversation.id
//             }
//         });

//         setNewMessage('');

//         setTimeout(() => {
//             scrollToBottom()
//         }, 50);
//     }

//     const scrollToBottom = () => {
//         if (messagesDiv.current) {
//             messagesDiv.current.scrollTop = messagesDiv.current.scrollHeight;
//         }
//     }

//     return (
//         <>
//             <div 
//                 ref={messagesDiv}
//                 className="max-h-[400px] overflow-auto flex flex-col space-y-4"
//             >
//                 {messages.map((message, index) => (
//                     <div
//                         key={index}
//                         className={`w-[80%]py-4 px-6 rounded-xl ${message.created_by.name == myUser?.name ? 'ml-[20%] bg-blue-200' : 'bg-gray-200'}`}
//                     >
//                         <p className="font-bold text-gray-500">{message.created_by.name}</p>
//                         <p>{message.body}</p>
//                     </div>
//                 ))}

//                 {realtimeMessages.map((message, index) => (
//                     <div
//                         key={index}
//                         className={`w-[80%]py-4 px-6 rounded-xl ${message.name == myUser?.name ? 'ml-[20%] bg-blue-200' : 'bg-gray-200'}`}
//                     >
//                         <p className="font-bold text-gray-500">{message.name}</p>
//                         <p>{message.body}</p>
//                     </div>
//                 ))}
//             </div>

//             <div className="mt-4 py-4 px-6 flex border border-gray-300 space-x-4 rounded-xl">
//                 <input
//                     type="text"
//                     placeholder="Type your message..."
//                     className="w-full p-2 bg-gray-200 rounded-xl"
//                     value={newMessage}
//                     onChange={(e) => setNewMessage(e.target.value)}
//                 />

//                 <CustomButton 
//                     label='Send'
//                     onClick={sendMessage}
//                     className="w-[100px]"
//                 />
//             </div>
//         </>
//     )
// }

// export default ConversationDetail;

// "use client"
// import { useEffect, useState, useRef } from "react";
// import CustomButton from "../forms/CustomButton";
// import { ConversationType } from "@/app/inbox/page";
// import useWebSocket, { ReadyState } from "react-use-websocket";
// import { MessageType } from "@/app/inbox/[id]/page";
// import { UserType } from "@/app/inbox/page";

// export interface WebSocketMessage {
//     id?: string;  // Optional because it might not be included
//     name: string;
//     body: string;
// }

// interface ConversationDetailProps {
//     token: string;
//     userId: string;
//     conversation: ConversationType;
//     messages: MessageType[];
// }

// const ConversationDetail: React.FC<ConversationDetailProps> = ({
//     userId,
//     token,
//     messages,
//     conversation
// }) => {
//     const messagesDiv = useRef<HTMLDivElement>(null);
//     const [newMessage, setNewMessage] = useState('');
//     const myUser = conversation.users?.find((user) => user.id === userId);
//     const otherUser = conversation.users?.find((user) => user.id !== userId);
//     const [realtimeMessages, setRealtimeMessages] = useState<MessageType[]>(messages);

//     const { sendJsonMessage, lastJsonMessage, readyState } = useWebSocket(
//         `${process.env.NEXT_PUBLIC_WS_HOST}/ws/${conversation.id}/?token=${token}`,
//         {
//             share: false,
//             shouldReconnect: () => true,
//         }
//     );

//     useEffect(() => {
//         console.log("Connection state changed", readyState);
//     }, [readyState]);

//     useEffect(() => {
//         if (lastJsonMessage && typeof lastJsonMessage === 'object' && 'name' in lastJsonMessage && 'body' in lastJsonMessage) {
//             const message: MessageType = {
//                 id: lastJsonMessage.id || '',  // Use an ID if available
//                 name: lastJsonMessage.name as string,
//                 body: lastJsonMessage.body as string,
//                 sent_to: otherUser as UserType,
//                 created_by: myUser as UserType,
//                 conversationId: conversation.id
//             };

//             setRealtimeMessages((prevMessages) => [...prevMessages, message]);
//         }

//         scrollToBottom();
//     }, [lastJsonMessage]);

//     const sendMessage = async () => {
//         console.log('sendMessage');

//         const message: MessageType = {
//             id: Date.now().toString(),  // Temporary ID for the UI
//             name: myUser?.name || '',
//             body: newMessage,
//             sent_to: otherUser as UserType,
//             created_by: myUser as UserType,
//             conversationId: conversation.id
//         };

//         sendJsonMessage({
//             event: 'chat_message',
//             data: {
//                 body: newMessage,
//                 name: myUser?.name,
//                 sent_to_id: otherUser?.id,
//                 conversation_id: conversation.id
//             }
//         });

//         // Add the message to the local state for immediate feedback
//         setRealtimeMessages((prevMessages) => [...prevMessages, message]);

//         setNewMessage('');
//         setTimeout(() => {
//             scrollToBottom();
//         }, 50);
//     };

//     const scrollToBottom = () => {
//         if (messagesDiv.current) {
//             messagesDiv.current.scrollTop = messagesDiv.current.scrollHeight;
//         }
//     };

//     return (
//         <>
//             <div
//                 ref={messagesDiv}
//                 className="max-h-[400px] overflow-auto flex flex-col space-y-4"
//             >
//                 {realtimeMessages.map((message, index) => (
//                     <div
//                         key={index}
//                         className={`w-[80%] py-4 px-6 rounded-xl ${message.created_by.name === myUser?.name ? 'ml-[20%] bg-blue-200' : 'bg-gray-200'}`}
//                     >
//                         <p className="font-bold text-gray-500">{message.created_by.name}</p>
//                         <p>{message.body}</p>
//                     </div>
//                 ))}
//             </div>

//             <div className="mt-4 py-4 px-6 flex border border-gray-300 space-x-4 rounded-xl">
//                 <input
//                     type="text"
//                     placeholder="Type your message..."
//                     className="w-full p-2 bg-gray-200 rounded-xl"
//                     value={newMessage}
//                     onChange={(e) => setNewMessage(e.target.value)}
//                 />
//                 <CustomButton
//                     label='Send'
//                     onClick={sendMessage}
//                     className="w-[100px]"
//                 />
//             </div>
//         </>
//     );
// };

// export default ConversationDetail;

"use client"
import { useEffect, useState, useRef } from "react";
import CustomButton from "../forms/CustomButton";
import useWebSocket from "react-use-websocket";
import { MessageType } from "@/app/inbox/[id]/page";
import { UserType } from "@/app/inbox/page";

export interface WebSocketMessage {
    id?: string;  // Optional because it might not be included
    name: string;
    body: string;
}

interface ConversationDetailProps {
    token: string;
    userId: string;
    conversation: {
        id: string;
        users: UserType[];
    };
    messages: MessageType[];
}

const ConversationDetail: React.FC<ConversationDetailProps> = ({
    userId,
    token,
    messages,
    conversation
}) => {
    const messagesDiv = useRef<HTMLDivElement>(null);
    const [newMessage, setNewMessage] = useState('');
    const [realtimeMessages, setRealtimeMessages] = useState<MessageType[]>(messages);
    const myUser = conversation.users.find((user) => user.id === userId);
    const otherUser = conversation.users.find((user) => user.id !== userId);

    const { sendJsonMessage, lastJsonMessage, readyState } = useWebSocket(
        `${process.env.NEXT_PUBLIC_WS_HOST}/ws/${conversation.id}/?token=${token}`,
        {
            share: false,
            shouldReconnect: () => true,
        }
    );

    useEffect(() => {
        if (lastJsonMessage && typeof lastJsonMessage === 'object' && 'name' in lastJsonMessage && 'body' in lastJsonMessage) {
            const message: MessageType = {
                id: lastJsonMessage.id || '',  // Use an ID if available
                name: lastJsonMessage.name as string,
                body: lastJsonMessage.body as string,
                sent_to: otherUser as UserType,
                created_by: myUser as UserType,
                conversationId: conversation.id
            };

            setRealtimeMessages((prevMessages) => [...prevMessages, message]);
        }

        scrollToBottom();
    }, [lastJsonMessage]);

    const sendMessage = async () => {
        const message: MessageType = {
            id: Date.now().toString(),  // Temporary ID for the UI
            name: myUser?.name || '',
            body: newMessage,
            sent_to: otherUser as UserType,
            created_by: myUser as UserType,
            conversationId: conversation.id
        };

        sendJsonMessage({
            event: 'chat_message',
            data: {
                body: newMessage,
                name: myUser?.name,
                sent_to_id: otherUser?.id,
                conversation_id: conversation.id
            }
        });

        // Add the message to the local state for immediate feedback
        setRealtimeMessages((prevMessages) => [...prevMessages, message]);

        setNewMessage('');
        scrollToBottom();
    };

    const scrollToBottom = () => {
        if (messagesDiv.current) {
            messagesDiv.current.scrollTop = messagesDiv.current.scrollHeight;
        }
    };

    return (
        <>
            <div
                ref={messagesDiv}
                className="max-h-[400px] overflow-auto flex flex-col space-y-4"
            >
                {realtimeMessages.map((message, index) => (
                    <div
                        key={index}
                        className={`w-[80%] py-4 px-6 rounded-xl ${message.created_by.name === myUser?.name ? 'ml-[20%] bg-blue-200' : 'bg-gray-200'}`}
                    >
                        <p className="font-bold text-gray-500">{message.created_by.name}</p>
                        <p>{message.body}</p>
                    </div>
                ))}
            </div>

            <div className="mt-4 py-4 px-6 flex border border-gray-300 space-x-4 rounded-xl">
                <input
                    type="text"
                    placeholder="Type your message..."
                    className="w-full p-2 bg-gray-200 rounded-xl"
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                />
                <CustomButton
                    label='Send'
                    onClick={sendMessage}
                    className="w-[100px]"
                />
            </div>
        </>
    );
};

export default ConversationDetail;

