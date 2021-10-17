import React, { useEffect, useState } from "react";
import Link from "next/link";

import { getAllMemos } from "../firebase/firestore";

export default function Lists() {
  const [memos, setMemos] = useState([]);

  useEffect(() => {
    console.log(getAllMemos());
    // setMemos(getAllMemos);

    // console.log(getAllMemos());
    // setMemos(getAllMemos());
    //   async () => {
    //     const memosRef = collection(db, "memos");
    //     const userId = await auth.currentUser.uid;
    //     const q = query(
    //       memosRef,
    //       where("uid", "==", userId),
    //       orderBy("datetime", "desc")
    //     );
    //     onSnapshot(q, (querySnapshot) => {
    //       const docs = querySnapshot.docs;
    //       const Allmemos = docs.map((doc) => ({
    //         id: doc.id,
    //         body: doc.data().body,
    //         datetime: doc.data().datetime,
    //       }));
    //       setMemos(Allmemos);
    //     });
    //   };
    // }
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
