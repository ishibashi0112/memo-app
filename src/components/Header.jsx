import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import MenuLists from "../components/MenuLists";
import { signOutAuth } from "../firebase/auth";

const Header = () => {
  const router = useRouter();
  const handleClick = async () => {
    signOutAuth(router);
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
          <MenuLists />
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
