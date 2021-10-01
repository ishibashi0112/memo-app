import React, { useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase";

const docRef = doc(db, "memos", "wbNFalylJgGO3LqFBo2G");
console.log(docRef);

export default function Lists() {
  const [memos] = useState([
    { id: 1, body: "aaaaaaaa" },
    { id: 2, body: "bbbbbbbb" },
    { id: 3, body: "cccccccc" },
  ]);

  return (
    <div className="w-1/3">
      <h1>メモ一覧</h1>
      <ul>
        {memos.map((memo) => {
          return (
            <li key={memo.id} className="w-full h-16">
              {memo.body}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
