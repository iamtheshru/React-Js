import React, { useEffect, useState } from "react";
import { io } from "socket.io-client";

const socket = io("http://localhost:5000");

const Chat = () => {
    const [message, setMessage] = useState("");
    const [chatList, setChatList] = useState([]);

    useEffect(() => {
        socket.on("receive_message", (data) => {
            setChatList((prev) => [...prev, data]);
        });

        return () => {
            socket.off("receive_message");
        };
    }, []);

    const sendMessage = () => {
        if (message.trim() !== "") {
            socket.emit("send_message", { message });
            setMessage("");
        }
    };

    return (
        <div>
            <h2>🔴 Live Chat</h2>
            <div style={{ height: "200px", overflowY: "scroll", border: "1px solid #ccc" }}>
                {chatList.map((msg, index) => (
                    <div key={index}>{msg.message}</div>
                ))}
            </div>
            <input
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type your message"
            />
            <button onClick={sendMessage}>Send</button>
        </div>
    );
};

export default Chat;
