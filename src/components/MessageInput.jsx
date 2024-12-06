import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function MessageInput({
  userInput = "", // Valeur par défaut pour éviter les erreurs
  setUserInput,
  onSendMessage,
  isLoading,
}) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        padding: "16px 0",
        borderTop: "1px solid #ddd",
      }}
    >
      <Input
        type="text"
        placeholder="Écrivez votre message..."
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter" && !isLoading) onSendMessage();
        }}
        style={{ flex: 1, marginRight: "8px" }}
        disabled={isLoading}
      />
      <Button
        onClick={onSendMessage}
        disabled={isLoading}
        style={{
          backgroundColor: "#6a0dad",
          color: "#fff",
          border: "none",
          padding: "10px 20px",
          borderRadius: "8px",
          cursor: "pointer",
          opacity: isLoading ? 0.7 : 1,
        }}
      >
        {isLoading ? "Envoi..." : "Envoyer"}
      </Button>
    </div>
  );
}
