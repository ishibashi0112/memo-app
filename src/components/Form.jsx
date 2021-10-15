import React, { useCallback, useState } from "react";
import { collection, addDoc, Timestamp } from "firebase/firestore";
import { db } from "../firebase/firebase";

export default function Form() {
  const [text, setText] = useState("");

  const handleChange = useCallback((e) => {
    setText(e.target.value);
  }, []);

  const handleSubmit = async () => {
    const datetime = Timestamp.fromDate(new Date());
    await addDoc(collection(db, "memos"), {
      body: text,
      datetime,
    });
  };

  return (
    <div className="w-2/3 border rounded-xl m-2.5">
      <button
        className={
          "block border font-bold px-6 py-2 rounded-xl m-auto my-6 hover:text-blue-500 "
        }
        onClick={handleSubmit}
      >
        保存
      </button>
      <textarea
        type="text"
        value={text}
        onChange={handleChange}
        className="block w-3/4 h-4/5 border-2 rounded-xl mx-auto"
      />
    </div>
  );
}
