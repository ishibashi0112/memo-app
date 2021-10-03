import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";

export default function Lists() {
  const [memos, setMemos] = useState([]);

  const getAllMemos = async () => {
    const res = await getDocs(collection(db, "memos"));
    const resArray = res.docs;
    const Allmemos = resArray.map((doc) => ({
      id: doc.id,
      body: doc.data().body,
      datetime: doc.data().datetime,
    }));
    setMemos(Allmemos);
  };

  useEffect(() => {
    console.log("foo");
    getAllMemos();
  }, []);

  return (
    <div className="w-1/3">
      <h1>メモ一覧</h1>
      <ul>
        {memos.map((memo) => {
          return (
            <li key={memo.id} className="w-full h-16 mt-3">
              <h2>{memo.body}</h2>
              <h2>{memo.datetime.seconds}</h2>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
