import React, { useEffect, useState } from "react";
import Link from "next/link";
import { collection, getDocs, query, orderBy, where } from "firebase/firestore";
import { db } from "../firebase/firebase";

import { auth } from "../firebase/firebase";

export default function Lists() {
  const [memos, setMemos] = useState([]);

  const getAllMemos = async () => {
    try {
      const userId = await auth.currentUser.uid;
      const memosRef = collection(db, "memos");
      const q = query(
        memosRef,
        where("uid", "==", userId),
        orderBy("datetime", "desc")
      );
      const res = await getDocs(q);
      const resArray = res.docs;
      const Allmemos = resArray.map((doc) => ({
        id: doc.id,
        body: doc.data().body,
        datetime: doc.data().datetime,
      }));
      setMemos(Allmemos);
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage);
    }
  };

  useEffect(() => {
    getAllMemos();
  }, []);

  return (
    <div className="h-1/2 w-1/3 border rounded-xl m-2.5">
      <h1 className="h-6 block border-b text-center rounded-t-xl bg-gray-200">{`メモ一覧 ${memos.length}件`}</h1>
      <ul className=" h-3/4 overflow-scroll">
        {memos.map((memo) => {
          return (
            <li key={memo.id} className="w-full mt-3g border-b truncate">
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
