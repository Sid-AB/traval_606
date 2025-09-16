"use client";
import { useState, useRef, useEffect } from "react";
import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
  const phoneNumber = "212600000000"; // 👉 replace with your WhatsApp number
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]); // { text, sender: "user" | "bot" }
  const [open, setOpen] = useState(false);
  const popupRef = useRef(null);
  const chatEndRef = useRef(null);

  const handleSend = () => {
    if (!message.trim()) return;

    // Add user message
    const newMessage = { text: message, sender: "user" };
    setMessages((prev) => [...prev, newMessage]);

    // Open WhatsApp with last message
    const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappLink, "_blank");

    setMessage("");

    // Add auto-response after 1s
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { text: "Thanks for contacting us! We'll reply shortly.", sender: "bot" },
      ]);
    }, 1000);
  };

  // Auto-scroll to bottom when messages update
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Close when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        setOpen(false);
      }
    };
    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open]);

  return (
    <div className="fixed bottom-6 right-6 flex flex-col items-end space-y-2">
      {/* Popup Chat Box */}
      {open && (
        <div
          ref={popupRef}
          className="bg-white w-72 rounded-lg shadow-xl border border-gray-200 animate-slideUp flex flex-col overflow-hidden"
        >
          {/* Header */}
          <div className="bg-green-500 text-white px-4 py-2 text-sm font-medium">
            Chat with {phoneNumber}
          </div>

          {/* Messages Area */}
          <div className="flex-1 p-3 space-y-2 text-sm overflow-y-auto max-h-64 bg-gray-50">
          <div>
              <p className="font-semibold text-gray-800">WhatsApp Contact</p>
              <p className="text-sm text-gray-500">+{phoneNumber}</p>
        </div>
            {messages.length === 0 && (
              <p className="text-gray-400">write your message 👇</p>
            )}
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`px-3 py-2 rounded-lg max-w-[80%] shadow ${
                    msg.sender === "user"
                      ? "bg-green-100 text-gray-900"
                      : "bg-gray-200 text-gray-800"
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            <div ref={chatEndRef} />
          </div>

          {/* Input Area */}
          <div className="border-t border-gray-200 flex items-center p-2 bg-white">
            <input
              type="text"
              placeholder="Type a message..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="flex-1 px-3 py-2 rounded-full border border-gray-300 
                         text-sm focus:outline-none focus:ring-2 focus:ring-green-400"
            />
            <button
              onClick={handleSend}
              className="ml-2 bg-green-500 hover:bg-green-600 text-white p-2 
                         rounded-full shadow-md transition"
            >
              <FaWhatsapp className="text-lg" />
            </button>
          </div>
        </div>
      )}

      {/* Floating WhatsApp Button */}
      <div className="relative">
        <button
          onClick={() => setOpen(!open)}
          className="bg-green-500 text-white rounded-full p-4 shadow-lg 
                     transition transform hover:scale-110 hover:bg-green-600"
          style={{
            animation: "pulseGlow 2s infinite ease-in-out",
          }}
        >
          <FaWhatsapp className="text-3xl" />
        </button>
      </div>

      {/* Animations */}

    </div>
  );
}
