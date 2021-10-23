import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import ListMaps from "./ListMaps";

import { getAllMemos, memoMaps, memosQuery } from "../firebase/firestore";
import { onSnapshot } from "firebase/firestore";

export default function Lists() {
  const [memos, setMemos] = useState([]);
  const router = useRouter();
  console.log(router.pathname);

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

  if (router.pathname === "/") {
    return (
      <div className="h-full w-[370px] border rounded-xl mx-auto sm:w-1/3 sm:mt-2.5">
        <h1 className="h-6 block  border-b text-center rounded-t-xl bg-gray-200">{`メモ一覧 ${memos?.length}件`}</h1>
        <ListMaps memos={memos} />
      </div>
    );
  }

  return (
    <div className="h-full w-[370px] border rounded-xl mx-auto hidden sm:block sm:w-1/3 sm:mt-2.5">
      <h1 className="h-6 block  border-b text-center rounded-t-xl bg-gray-200">{`メモ一覧 ${memos?.length}件`}</h1>
      <ListMaps memos={memos} />
    </div>
  );
}
