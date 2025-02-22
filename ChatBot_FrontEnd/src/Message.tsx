import React from "react";
import ReactMarkdown from "react-markdown";

interface MessageProps {
  message: string;
  isUser: "user" | "assistant" | "system";
}

const Message: React.FC<MessageProps> = ({ message, isUser }) => {
  const messageClass = isUser === "user" ? "user-message" : "system-message";
  return (
    <section className={messageClass}>
      {isUser === "user" ? message : <ReactMarkdown>{message}</ReactMarkdown>}
    </section>
  );
};

export default Message;
