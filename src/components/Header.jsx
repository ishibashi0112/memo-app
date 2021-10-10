import React from "react";
import Link from "next/link";

export default function Header() {
  return (
    <div>
      <header className="flex justify-between h-20 px-8 ">
        <Link href="/">
          <a className="block my-auto font-bold text-4xl ">MeMoApp</a>
        </Link>
        <div className="flex ">
          <Link href="/notes">
            <a className="block my-auto border font-bold px-6 py-2  rounded-xl mr-16   hover:text-blue-500 ">
              新規作成
            </a>
          </Link>
          <h2 className="block my-auto">user-icon</h2>
        </div>
      </header>
    </div>
  );
}
