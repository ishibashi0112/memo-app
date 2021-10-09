import React from "react";
import Link from "next/link";

export default function Header() {
  return (
    <div>
      <header className="flex justify-between h-20 px-8 ">
        <Link href="/">
          <a className="inline-block font-bold text-4xl ">MeMoApp</a>
        </Link>
        <div className="flex ">
          <Link href="/notes">
            <a className="block border max-w-sm p-2 rounded-xl m-auto my-6 hover:text-blue-500 ">
              新規作成
            </a>
          </Link>
          <h2>user-icon</h2>
        </div>
      </header>
    </div>
  );
}
