import React, { useCallback, useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase";

export default function Form() {
  const [text, setText] = useState("");

  const handleChange = useCallback((e) => {
    setText(e.target.value);
  }, []);

  const handleSubmit = useCallback(() => {
    async () => {
      const docRef = await addDoc(collection(db, "memos"), {
        body: "rrrrrr",
      });
      console.log(docRef);
    };
  }, [text]);

  return (
    <div className="w-2/3">
      <button
        className={
          "block border max-w-sm p-2 rounded-xl m-auto my-6 hover:text-blue-500 "
        }
        onClick={handleSubmit}
      >
        保存
      </button>
      <textarea
        type="text"
        value={text}
        onChange={handleChange}
        className="w-full h-4/5 border-2 rounded-xl"
      />
    </div>
  );
}
