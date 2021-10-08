import React, { useEffect, useState } from "react";
import Link from "next/link";
import { collection, getDocs, query, orderBy } from "firebase/firestore";
import { db } from "../firebase";

export default function Lists() {
  const [memos, setMemos] = useState([]);

  const getAllMemos = async () => {
    const q = query(collection(db, "memos"), orderBy("datetime", "desc"));
    const res = await getDocs(q);
    const resArray = res.docs;
    const Allmemos = resArray.map((doc) => ({
      id: doc.id,
      body: doc.data().body,
      datetime: doc.data().datetime,
    }));
    setMemos(Allmemos);
  };

  useEffect(() => {
    getAllMemos();
  }, []);

  return (
    <div className="w-1/3">
      <h1>メモ一覧</h1>
      <ul>
        {memos.map((memo) => {
          return (
            <li key={memo.id} className="w-full h-16 mt-3g truncate">
              <Link href={`/list/${memo.id}`}>
                <a className="hover:text-blue-500">
                  <h2>{memo.body}</h2>
                  <h2>{memo.datetime.seconds}</h2>
                </a>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
