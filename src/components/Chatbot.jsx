import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React, { useState } from "react";
import axios from "axios";
import Header from "./Header";
import MessageList from "./MessageList";
import MessageInput from "./MessageInput";
import Footer from "./Footer"; // Import du Footer


export default function Chatbot() {
  const [messages, setMessages] = useState([]);
  const [userInput, setUserInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const sendMessage = async () => {
    if (userInput.trim() === "") return;

    const newMessage = { role: "user", content: userInput };
    setMessages((prev) => [...prev, newMessage]);
    setUserInput("");
    setIsLoading(true);

    try {
      const response = await axios.post("https://backend-chat-production-c957.up.railway.app/api/chat", {
        userInput,
      });

      const botMessage = { role: "bot", content: response.data.response };
      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      console.error("Erreur lors de la requête :", error);
      setMessages((prev) => [
        ...prev,
        { role: "bot", content: "Désolé, une erreur s'est produite." },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div
      style={{
        paddingLeft: "20%",
        paddingRight: "20%",
        paddingTop: "20px",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        backgroundImage: "url('/monkey.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Header />
      <MessageList messages={messages} isLoading={isLoading} />
      <MessageInput
        userInput={userInput}
        setUserInput={setUserInput}
        onSendMessage={sendMessage}
        isLoading={isLoading}
      />
      <Footer />
    </div>
  );
}

