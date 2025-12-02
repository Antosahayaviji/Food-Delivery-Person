import React, { useState, useRef, useEffect } from "react";
import {
  Home as HomeIcon,
  ClipboardList,
  Bell,
  User,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const SupportPage = () => {
  const [message, setMessage] = useState("");
  const [chatHistory, setChatHistory] = useState([
    { role: "assistant", content: "👋 Hi! I'm your support assistant. How can I help you today?" },
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const chatEndRef = useRef(null);
  const navigate = useNavigate();

  // Auto-scroll to latest message
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chatHistory, isTyping]);

  // AI reply simulation
  const generateOfflineAIResponse = (userMsg) => {
    const msg = userMsg.toLowerCase();

    if (msg.includes("hello") || msg.includes("hi")) {
      return "👋 Hello! How can I assist you today?";
    }
    if (msg.includes("delivery")) {
      return "📦 If you are facing delivery issues, try refreshing the order list. Still having trouble? I can help further!";
    }
    if (msg.includes("login")) {
      return "🔑 Please check your username or password. You may also try resetting your account.";
    }
    if (msg.includes("map")) {
      return "🗺️ The map may take a few seconds to load. Try reopening it.";
    }
    if (msg.includes("support")) {
      return "🛠️ Our support team is here 24/7. Tell me what issue you're facing!";
    }
    if (msg.includes("order")) {
      return "📋 Your order details are available in the Active Delivery section.";
    }
    if (msg.includes("app")) {
      return "📱 Try closing and reopening the app. It usually solves performance problems.";
    }
    if (msg.includes("update")) {
      return "🔄 No updates available currently. You will be notified when a new version is released.";
    }

    return "🤔 I understand. Can you explain a little more?";
  };

  const sendMessage = () => {
    if (!message.trim()) return;

    setChatHistory((prev) => [...prev, { role: "user", content: message }]);
    setMessage("");
    setIsTyping(true);

    setTimeout(() => {
      const reply = generateOfflineAIResponse(message);
      setChatHistory((prev) => [...prev, { role: "assistant", content: reply }]);
      setIsTyping(false);
    }, 800);
  };

  // Optional: Voice input
  const handleVoiceInput = () => {
    const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
    recognition.lang = "en-US";
    recognition.interimResults = false;

    recognition.onresult = (event) => {
      setMessage(event.results[0][0].transcript);
    };

    recognition.start();
  };

  return (
    <div className="flex h-screen bg-gray-50">

      {/* VERTICAL NAV*/}
      <div className="hidden lg:flex w-[260px] bg-gradient-to-b from-green-400 to-green-600 text-white flex-col items-center py-10 space-y-10">

        {/* Driver Header */}
        <div className="flex flex-col items-center">
          <div className="w-14 h-14 rounded-full bg-white bg-opacity-30 flex items-center justify-center text-white font-bold text-xl">
            JD
          </div>
          <p className="text-xl font-semibold mt-4">Good Morning!</p>
          <p className="text-2xl font-bold -mt-1">John Driver</p>
        </div>

        {/* Navigation Items */}
        <div className="flex flex-col items-center cursor-pointer" onClick={() => navigate("/")}>
          <HomeIcon size={32} />
          <span className="text-xl mt-2 font-semibold">Home</span>
        </div>

        <div className="flex flex-col items-center cursor-pointer" onClick={() => navigate("/orders")}>
          <ClipboardList size={32} />
          <span className="text-xl mt-2 font-semibold">Orders</span>
        </div>

        <div className="flex flex-col items-center cursor-pointer" onClick={() => navigate("/notifications")}>
          <Bell size={32} />
          <span className="text-xl mt-2 font-semibold">Notification</span>
        </div>

        <div className="flex flex-col items-center cursor-pointer" onClick={() => navigate("/profile")}>
          <User size={32} />
          <span className="text-xl mt-2 font-semibold">Profile</span>
        </div>
      </div>

      {/* TABLET NAVBAR*/}
      <div className="hidden md:flex lg:hidden w-full bg-gradient-to-r from-green-400 to-green-600 text-white items-center justify-around py-4 fixed top-0 z-50">
        <HomeIcon size={28} onClick={() => navigate("/")} className="cursor-pointer" />
        <ClipboardList size={28} onClick={() => navigate("/orders")} className="cursor-pointer" />
        <Bell size={28} onClick={() => navigate("/notifications")} className="cursor-pointer" />
        <User size={28} onClick={() => navigate("/profile")} className="cursor-pointer" />
      </div>

      {/*  MOBILE BOTTOM NAVIGATION  */}
      <div className="md:hidden lg:hidden fixed bottom-0 w-full bg-white shadow-lg flex justify-around py-3 z-50">
        <HomeIcon size={28} onClick={() => navigate("/")} className="text-green-600 cursor-pointer" />
        <ClipboardList size={28} onClick={() => navigate("/orders")} className="text-green-600 cursor-pointer" />
        <Bell size={28} onClick={() => navigate("/notifications")} className="text-green-600 cursor-pointer" />
        <User size={28} onClick={() => navigate("/profile")} className="text-green-600 cursor-pointer" />
      </div>

      {/*  MAIN CONTENT */}
      <div className="flex-1 overflow-y-auto p-5 pt-20 md:pt-24 lg:pt-5 pb-24 bg-gray-100">

        <h1 className="text-2xl font-bold mb-4">💬 Support Chat</h1>

        {/* Chat Area */}
        <div className="flex-1 overflow-y-auto mb-4 h-[65vh]">
          {chatHistory.map((msg, index) => (
            <div
              key={index}
              className={`my-2 p-3 rounded-xl max-w-[80%] break-words ${
                msg.role === "user" ? "bg-blue-200 ml-auto" : "bg-white mr-auto"
              }`}
            >
              {msg.content}
            </div>
          ))}

          {/* Typing Animation */}
          {isTyping && (
            <div className="my-2 p-3 rounded-xl max-w-[80%] bg-white mr-auto">
              🤖 Typing<span className="animate-pulse">...</span>
            </div>
          )}

          <div ref={chatEndRef} />
        </div>

        {/* Input Box */}
        <div className="flex items-center gap-2">
          <input
            type="text"
            className="flex-1 p-3 rounded-xl border border-gray-300"
            placeholder="Type a message..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && sendMessage()}
          />

          <button
            onClick={sendMessage}
            className="px-4 py-3 bg-blue-600 text-white rounded-xl"
          >
            Send
          </button>

          {(window.SpeechRecognition || window.webkitSpeechRecognition) && (
            <button
              onClick={handleVoiceInput}
              className="px-4 py-3 bg-green-500 text-white rounded-xl"
            >
              🎤
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default SupportPage;
