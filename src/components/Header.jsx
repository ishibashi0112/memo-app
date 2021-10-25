import React from "react";
import Link from "next/link";

import { auth } from "../firebase/firebase";
import { signOut } from "firebase/auth";
import { useRouter } from "next/router";

import { FaBars } from "react-icons/fa";
import { MenuList } from "../components/MenuList";

const Header = () => {
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

  return (
    <div>
      <header className="flex justify-between w-screen h-20 px-2 lg:px-8 ">
        <Link href="/">
          <a className="block my-auto font-bold text-[26px] sm:text-[4vw] lg:text-[41px] ">
            MeMoApp
          </a>
        </Link>
        <div className="block my-auto sm:hidden">
          <FaBars />
          <MenuList />
        </div>

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
        </div>
      </header>
    </div>
  );
};

export default Header;
