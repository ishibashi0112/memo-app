import React from "react";
import Link from "next/link";

export default function Header() {
  return (
    <div>
      <header className="flex justify-between">
        <Link href="/">
          <a className="font-bold text-4xl">MeMoApp</a>
        </Link>
        <Link href="/note">
          <a>新規作成</a>
        </Link>
        <h2>user-icon</h2>
      </header>
    </div>
  );
}