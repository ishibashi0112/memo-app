import React from "react";
import Link from "next/link";

import { auth } from "../firebase/firebase";
import { signOut } from "firebase/auth";
import { useRouter } from "next/router";

export default function Header() {
  const router = useRouter();
  const handleClick = async () => {
    try {
      const user1 = await auth.currentUser;
      console.log(user1);
      await signOut(auth);
      const user2 = await auth.currentUser;
      console.log(user2);
      router.replace("/auth/signIn");
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage);
    }
  };

  // const handleClickCheck = async () => {
  //   const user = await auth.currentUser.uid;
  //   console.log(user);
  // };

  return (
    <div>
      <header className="flex justify-between h-20 px-8 ">
        <Link href="/">
          <a className="block my-auto font-bold text-4xl ">MeMoApp</a>
        </Link>
        <div className="hidden  sm:flex  ">
          <Link href="/notes">
            <a className="block my-auto border font-bold px-6 py-2  rounded-xl mr-16   hover:text-blue-500 ">
              新規作成
            </a>
          </Link>
          <button
            className="block my-auto border font-bold px-6 py-2  rounded-xl mr-16   hover:text-blue-500 "
            type={"button"}
            onClick={handleClick}
          >
            ログアウト
          </button>
          {/* <button type={"button"} onClick={handleClickCheck}>
            チェック
          </button> */}
        </div>
      </header>
    </div>
  );
}
