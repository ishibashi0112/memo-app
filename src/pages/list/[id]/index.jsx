import React from "react";
import Head from "next/head";
import Header from "../../../components/Header";
import Lists from "../../../components/Lists";
import Form from "../../../components/Form";

const list = () => {
  return (
    <div>
      <Head>
        <title>a</title>
      </Head>
      <div className="h-screen w-full flex flex-col">
        <Header />
        <div className="flex h-5/6">
          <Lists />
          <Form />
        </div>
      </div>
    </div>
  );
};

export default list;
