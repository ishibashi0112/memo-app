import React, { useEffect, useState } from "react";
import Link from "next/link";

import { getAllMemos, memoMaps, memosQuery } from "../firebase/firestore";
import { onSnapshot } from "firebase/firestore";

export default function Lists() {
  const [memos, setMemos] = useState([]);

  const GetMemos = async () => {
    const memosArray = await getAllMemos();
    setMemos(memosArray);
  };

  const snapShot = async () => {
    try {
      const res = await memosQuery();
      onSnapshot(res, async (querySnapshot) => {
        const resArray = querySnapshot.docs;
        const AllMemos = await memoMaps(resArray);
        setMemos(AllMemos);
      });
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage);
    }
  };

  useEffect(() => {
    GetMemos();
    snapShot();
  }, []);

  return (
    <div className="h-full w-1/3 border rounded-xl m-2.5">
      <h1 className="h-6 block  border-b text-center rounded-t-xl bg-gray-200">{`メモ一覧 ${memos?.length}件`}</h1>
      <ul className=" h-[calc(100%-1.5rem)] overflow-scroll">
        {memos?.map((memo) => {
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
