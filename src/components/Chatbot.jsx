// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import React, { useState } from "react";
// import axios from "axios";

// export default function Chatbot() {
//   const [messages, setMessages] = useState([]);
//   const [userInput, setUserInput] = useState("");
//   const [isLoading, setIsLoading] = useState(false);

//   const sendMessage = async () => {
//     if (userInput.trim() === "") return;

//     const newMessage = { role: "user", content: userInput };
//     setMessages((prev) => [...prev, newMessage]); // Ajoute le message utilisateur
//     setUserInput("");
//     setIsLoading(true);

//     try {
//       const response = await axios.post("http://localhost:3000/api/chat", {
//         userInput,
//       });

//       const botMessage = { role: "bot", content: response.data.response };
//       setMessages((prev) => [...prev, botMessage]);
//     } catch (error) {
//       console.error("Erreur lors de la requête :", error);
//       setMessages((prev) => [
//         ...prev,
//         { role: "bot", content: "Désolé, une erreur s'est produite." },
//       ]);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <div
//       style={{
//         paddingLeft: "20%",
//         paddingRight: "20%",
//         paddingTop: "20px",
//         height: "100vh",
//         display: "flex",
//         flexDirection: "column",
//         backgroundImage: "url('/monkey.jpg')",
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//       }}
//     >
//       {/* Bannière */}
//       <div
//         style={{
//           display: "flex",
//           justifyContent: "center", // Centre le logo horizontalement
//           alignItems: "center", // Centre le logo verticalement
//           marginBottom: "20px",
//           padding: "10px",
//         }}
//       >
//         <img
//           src="/logo.png" // Lien vers le logo
//           alt="Logo"
//           style={{
//             height: "120px",
//             width: "auto",
//             objectFit: "contain",
//           }}
//         />
//       </div>

//       {/* Zone des messages */}
//       <div
//         style={{
//           flex: 1,
//           overflowY: "auto",
//           backgroundColor: "rgba(255, 255, 255, 0.5)",
//           border: "1px solid #ddd",
//           borderRadius: "15px",
//           padding: "16px",
//           display: "flex",
//           flexDirection: "column",
//           gap: "8px",
//           backdropFilter: "blur(10px)",
//           WebkitBackdropFilter: "blur(10px)",
//         }}
//       >
//         {messages.map((msg, index) => (
//           <div
//             key={index}
//             style={{
//               display: "flex",
//               justifyContent:
//                 msg.role === "user" ? "flex-end" : "flex-start", // Les messages utilisateur sont à droite
//               alignItems: "flex-start",
//               gap: "10px",
//               margin: "8px 0",
//             }}
//           >
//             {/* Avatar uniquement pour le bot */}
//             {msg.role === "bot" && (
//               <img
//                 src="/avatar-bot.jpg"
//                 alt="Avatar Bot"
//                 style={{
//                   width: "40px",
//                   height: "40px",
//                   borderRadius: "50%",
//                   objectFit: "cover",
//                 }}
//               />
//             )}
//             <div
//               style={{
//                 padding: "10px 15px",
//                 backgroundColor: msg.role === "user" ? "#d1e7ff" : "#e0c8f4",
//                 borderRadius: "15px",
//                 maxWidth: "70%",
//                 wordWrap: "break-word",
//                 color: msg.role === "user" ? "#084298" : "#6a0dad",
//               }}
//             >
//               {msg.content}
//             </div>
//           </div>
//         ))}
//         {isLoading && (
//           <div
//             style={{
//               display: "flex",
//               alignItems: "flex-start",
//               gap: "10px",
//               margin: "8px 0",
//             }}
//           >
//             <img
//               src="/avatar-bot.jpg"
//               alt="Avatar Bot"
//               style={{
//                 width: "40px",
//                 height: "40px",
//                 borderRadius: "50%",
//                 objectFit: "cover",
//               }}
//             />
//             <div
//               style={{
//                 padding: "10px 15px",
//                 backgroundColor: "#e0c8f4",
//                 borderRadius: "15px",
//                 maxWidth: "70%",
//                 wordWrap: "break-word",
//                 color: "#6a0dad",
//               }}
//             >
//               ...
//             </div>
//           </div>
//         )}
//       </div>

//       {/* Input et bouton */}
//       <div
//         style={{
//           display: "flex",
//           alignItems: "center",
//           padding: "16px 0",
//           borderTop: "1px solid #ddd",
//         }}
//       >
//         <Input
//           type="text"
//           placeholder="Écrivez votre message..."
//           value={userInput}
//           onChange={(e) => setUserInput(e.target.value)}
//           onKeyDown={(e) => {
//             if (e.key === "Enter" && !isLoading) sendMessage();
//           }}
//           style={{ flex: 1, marginRight: "8px" }}
//           disabled={isLoading}
//         />
//         <Button
//           onClick={sendMessage}
//           disabled={isLoading}
//           style={{
//             backgroundColor: "#6a0dad",
//             color: "#fff",
//             border: "none",
//             padding: "10px 20px",
//             borderRadius: "8px",
//             cursor: "pointer",
//             opacity: isLoading ? 0.7 : 1,
//           }}
//         >
//           {isLoading ? "Envoi..." : "Envoyer"}
//         </Button>
//       </div>
//     </div>
//   );
// }

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
      const response = await axios.post("http://localhost:3000/api/chat", {
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

