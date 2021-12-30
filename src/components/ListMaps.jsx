import React from "react";
import Link from "next/link";

const ListMaps = (props) => {
  return (
    <ul className=" h-[calc(100%-1.5rem)] overflow-scroll">
      {props.memos?.map((memo) => {
        return (
          <li key={memo.id} className="w-full  border-b truncate">
            <Link href={`/list/${memo.id}`}>
              <a>
                <div className="hover:text-blue-500 hover:bg-gray-100 active:opacity-70 transition">
                  <h2 className="text-lg ">{memo.body.trim()}</h2>
                  <h2 className="text-base text-gray-500">{memo.datetime}</h2>
                </div>
              </a>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default ListMaps;
