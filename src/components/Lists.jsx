import React, { useCallback, useEffect, useState } from "react";
import { useRouter } from "next/router";
import ListMaps from "./ListMaps";

import { getAllMemos, memoMaps, memosQuery } from "../firebase/firestore";
import { onSnapshot } from "firebase/firestore";

const Lists = () => {
  const [memos, setMemos] = useState([]);
  const router = useRouter();

  const GetMemos = useCallback(async () => {
    const memosArray = await getAllMemos();
    setMemos(memosArray);
  }, []);

  const snapShot = useCallback(async () => {
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
  }, []);

  useEffect(() => {
    GetMemos();
    snapShot();
  }, []);

  if (router.pathname === "/") {
    return (
      <div className="h-full w-[370px] border rounded-xl mx-auto sm:w-1/3 sm:mt-2.5 sm:m-2">
        <h1 className="h-6 block  border-b text-center rounded-t-xl bg-gray-200">{`メモ一覧 ${memos?.length}件`}</h1>
        <ListMaps memos={memos} />
      </div>
    );
  }

  return (
    <div className="hidden h-full w-[370px] border rounded-xl mx-auto  sm:block sm:w-1/3 sm:mt-2.5 sm:m-2">
      <h1 className="h-6 block  border-b text-center rounded-t-xl bg-gray-200">{`メモ一覧 ${memos?.length}件`}</h1>
      <ListMaps memos={memos} />
    </div>
  );
};

export default Lists;
