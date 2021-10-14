import React from "react";
import Link from "next/link";

import { auth } from "../firebase";
import { signOut } from "firebase/auth";

export default function Header() {
  const handleClick = async () => {
    try {
      const user1 = await auth.currentUser;
      console.log(user1);
      await signOut();
      const user2 = await auth.currentUser;
      console.log(user2);
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage);
    }
  };

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
          <button type={"button"} onClick={handleClick}>
            ログアウト
          </button>
        </div>
      </header>
    </div>
  );
}
