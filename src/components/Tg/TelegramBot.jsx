import React, { useState } from "react";
import icon from "./icon.png"; // Istalgan icon
import "./TelegramBot.css";

function TelegramBot() {
  const [text, setText] = useState("");

  const sendMessage = async () => {
    if (!text.trim()) return;

     const token = "7601912504:AAFEFjS8-VdN_1hwuKLduuNyHCh7vH23MSI";
      const chat_id = "8171553406";

    const url = `https://api.telegram.org/bot${token}/sendMessage`;

    await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ chat_id, text }),
    });

    setText("");
  };

  return (
    <div className="telegram-hero-btns">
      <div className="input-wrapper">        <input
          type="text"
          placeholder="Email address"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <button onClick={sendMessage}>Yuborish</button>
    </div>
  );
}

export default TelegramBot;
