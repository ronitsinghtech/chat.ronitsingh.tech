import { useState } from "react";
import "./index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import Message from "./Message";
const submitelement = <FontAwesomeIcon icon={faPaperPlane} />;

function App() {
  interface ChatMessage {
    role: "user" | "assistant" | "system";
    content: string;
  }

  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage: ChatMessage = { role: "user", content: input };
    setMessages((prevMessages) => {
      const newMessages = [...prevMessages, userMessage];
      fetch("http://127.0.0.1:8080/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ messages: newMessages }),
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          return response.json();
        })
        .then((data) => {
          const aiMessage: ChatMessage = {
            role: "assistant",
            content: data.response,
          };
          setMessages((prev) => [...prev, aiMessage]);
        })
        .catch((error) => {
          console.error("Error fetching AI response: ", error);
          if (error instanceof Error) {
            console.error("Error details:", error.message, error.stack);
          }
          const errorMessage: ChatMessage = {
            role: "assistant",
            content: "Error: Could not get AI response",
          };
          setMessages((prev) => [...prev, errorMessage]);
        });

      return newMessages;
    });

    setInput("");
  };

  return (
    <section className="screen">
      <section className="largechatsection">
        <section className="chat">
          {messages.map((msg, index) => (
            <Message key={index} message={msg.content} isUser={msg.role} />
          ))}
        </section>
        <section className="inputbar">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              id="inputbar"
              name="inputbar"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Message here..."
            ></input>
            <button id="submit">{submitelement}</button>
          </form>
        </section>
      </section>
    </section>
  );
}

export default App;
