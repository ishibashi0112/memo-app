import React, { useEffect, useState } from "react";
import useSWR from "swr";

export default function Lists() {
  const [memos] = useState([
    { id: 1, body: "aaaaaaaa" },
    { id: 2, body: "bbbbbbbb" },
    { id: 3, body: "cccccccc" },
  ]);

  const { data } = useSWR("foo", { fallbackData: "" });
  console.log(data);

  useEffect(() => {
    const array = [...data, data];
    console.log(array);
  }, []);

  return (
    <div className="w-1/3">
      <h1>メモ一覧</h1>
      <ul>
        {memos.map((memo) => {
          return (
            <li key={memo.id} className="w-full h-16">
              {memo.body}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
