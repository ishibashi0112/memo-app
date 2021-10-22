import React from "react";
import Head from "next/head";
import Header from "../components/Header";
import Lists from "../components/Lists";

export default function Index() {
  return (
    <div>
      <Head>
        <title>memo-app</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="h-screen w-full flex flex-col">
        <Header />
        <div className="flex h-5/6">
          <Lists />
          <div className="hidden  h-full w-2/3 border rounded-xl m-2.5 sm:block ">
            <h1 className=" ">メモを選択してください</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
