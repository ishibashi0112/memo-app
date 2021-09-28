import React, { useState } from "react";

export default function Form() {
  const [text, setText] = useState("");

  const handleChange = (e) => {
    setText(e.target.value);
    console.log(text);
  };

  return (
    <div className="w-2/3">
      <input
        type="text"
        value={text}
        onChange={handleChange}
        className="w-2/3 h-3/6 border-2"
      />
    </div>
  );
}
