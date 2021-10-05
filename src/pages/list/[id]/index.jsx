import React, { useEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import Lists from "../../../components/Lists";
import Form from "../../../components/Form";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../../firebase";

const list = () => {
  const router = useRouter();

  const getMemo = async () => {
    if (!router.query.id === undefined) {
      const res = doc(db, "memos", router.query.id);
      const data = await getDoc(res);
      const memo = data.data();
      console.log(3);
      return memo;
    }
    const memo = null;
    return memo;
  };

  useEffect(() => {
    getMemo();
  });

  return (
    <div>
      <Head>
        <title>a</title>
      </Head>
      <div className="min-h-screen w-full flex flex-col">
        <Header />

        <div className="flex flex-1 ">
          <Lists />
          <Form />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default list;
