import React from "react";

interface MessageProps {
  message: String;
  isUser: String;
}

const Message: React.FC<MessageProps> = ({ message, isUser }) => {
  const messageClass = isUser === "user" ? "user-message" : "system-message";
  return <section className={messageClass}>{message}</section>;
};

export default Message;
