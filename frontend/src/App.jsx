import { ChatFeed, Message } from "react-chat-ui";
import { useState } from "react";

export default function App() {
  const [messages, setMessages] = useState([
    new Message({ id: 1, message: "Hi, I’m your AI bot! 👋" }),
  ]);
  const [input, setInput] = useState("");

  const sendMessage = (text) => {
    if (!text.trim()) return;

    // Add user message
    setMessages((prev) => [...prev, new Message({ id: 0, message: text })]);

    // Call backend AI API
    fetch("http://localhost:5000/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: text }),
    })
      .then((res) => res.json())
      .then((data) => {
        // Add bot reply
        setMessages((prev) => [
          ...prev,
          new Message({ id: 1, message: data.reply }),
        ]);
      });

    setInput(""); // clear input
  };

  return (
    <div className="p-6 max-w-md mx-auto">
      {/* Chat UI */}
      <ChatFeed
        messages={messages}
        showSenderName
        bubblesCentered={false}
      />

      {/* Input field */}
      <div className="flex mt-4">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-1 border rounded-l px-3 py-2"
          placeholder="Type a message..."
        />
        <button
          onClick={() => sendMessage(input)}
          className="bg-blue-500 text-white px-4 py-2 rounded-r"
        >
          Send
        </button>
      </div>
    </div>
  );
}
