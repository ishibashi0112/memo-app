import React, { useEffect, useState } from "react";
import Link from "next/link";

import { getAllMemos, snapShot } from "../firebase/firestore";
import { async } from "@firebase/util";

export default function Lists() {
  const [memos, setMemos] = useState([]);

  const a = async () => {
    const b = await getAllMemos();
    setMemos(b);
  };

  // const b = async () => {
  //   snapShot();
  // };

  useEffect(() => {
    a();
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
