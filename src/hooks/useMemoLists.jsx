import { useCallback, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { getAllMemos, memoMaps, memosQuery } from "../firebase/firestore";
import { onSnapshot } from "firebase/firestore";

export const useMemoLists = () => {
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

  return { memos, router };
};
