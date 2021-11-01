import React from "react";
import ListMaps from "./ListMaps";
import { useMemoLists } from "../hooks/useMemoLists";

const Lists = () => {
  const { memos, router } = useMemoLists();

  if (router.pathname === "/") {
    return (
      <div className="h-full w-[370px] border rounded-xl mx-auto sm:w-1/3 sm:mt-2.5 sm:m-2">
        <div>
          <h1 className="h-6 block  border-b text-center rounded-t-xl bg-gray-200">{`メモ一覧 ${
            memos ? memos.length : 0
          }件`}</h1>
          <ListMaps memos={memos} />
        </div>
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
