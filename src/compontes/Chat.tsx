import React, { useState } from "react";

type Sender = {
  name: string;
  messages: string[];
};

const Chat: React.FC = () => {
  const [sender, setSender] = useState<Sender>({
    name: "",
    messages: [],
  });
  const [message, setMessage] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (message.trim() === "") return;

    setSender((prevSender) => ({
      ...prevSender,
      messages: [...prevSender.messages, message],
    }));
    setMessage("");
  };

  const handleSenderChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSender({
      name: event.target.value,
      messages: [],
    });
  };

  return (
    <div>
      <h1>Chat App</h1>
      <form onSubmit={handleSubmit}>
        <select value={sender.name} onChange={handleSenderChange}>
          <option value="">Select sender</option>
          <option value="Alicia">Alicia</option>
          <option value="Bob">Bob</option>
          <option value="Charlie">Charlie</option>
        </select>
        <input
          type="text"
          value={message}
          onChange={handleChange}
          placeholder="Type your message"
        />
        <button type="submit">Send</button>
      </form>
      <div>
        {sender.messages.map((message, index) => (
          <p key={index}>
            {sender.name}: {message}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Chat;
