import React from "react";

export default function MessageList({ messages = [], isLoading }) {
  return (
    <div
      style={{
        flex: 1,
        overflowY: "auto",
        backgroundColor: "rgba(255, 255, 255, 0.5)",
        border: "1px solid #ddd",
        borderRadius: "15px",
        padding: "16px",
        display: "flex",
        flexDirection: "column",
        gap: "8px",
        backdropFilter: "blur(10px)",
        WebkitBackdropFilter: "blur(10px)",
      }}
    >
      {messages.map((msg, index) => (
        <div
          key={index}
          style={{
            display: "flex",
            justifyContent: msg.role === "user" ? "flex-end" : "flex-start",
            alignItems: "flex-start",
            gap: "10px",
            margin: "8px 0",
          }}
        >
          {msg.role === "bot" && (
            <img
              src="/avatar-bot.jpg"
              alt="Avatar Bot"
              style={{
                width: "40px",
                height: "40px",
                borderRadius: "50%",
                objectFit: "cover",
              }}
            />
          )}
          <div
            style={{
              padding: "10px 15px",
              backgroundColor: msg.role === "user" ? "#d1e7ff" : "#e0c8f4",
              borderRadius: "15px",
              maxWidth: "70%",
              wordWrap: "break-word",
              color: msg.role === "user" ? "#084298" : "#6a0dad",
            }}
          >
            {msg.content}
          </div>
        </div>
      ))}
      {isLoading && (
        <div
          style={{
            display: "flex",
            alignItems: "flex-start",
            gap: "10px",
            margin: "8px 0",
          }}
        >
          <img
            src="/avatar-bot.jpg"
            alt="Avatar Bot"
            style={{
              width: "40px",
              height: "40px",
              borderRadius: "50%",
              objectFit: "cover",
            }}
          />
          <div
            style={{
              padding: "10px 15px",
              backgroundColor: "#e0c8f4",
              borderRadius: "15px",
              maxWidth: "70%",
              wordWrap: "break-word",
              color: "#6a0dad",
            }}
          >
            ...
          </div>
        </div>
      )}
    </div>
  );
}
