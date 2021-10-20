import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import Lists from "../../../components/Lists";
import Form from "../../../components/Form";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../../firebase/firebase";

const list = () => {
  const [text, setText] = useState("");
  const [memo, setMemo] = useState("");
  const router = useRouter();
  const memoId = router.query.id;

  const getMemo = async () => {
    if (memoId) {
      const res = doc(db, "memos", memoId);
      const data = await getDoc(res);
      const memoData = data.data();
      setMemo(memoData);
      setText(memoData.body);
    }
  };

  useEffect(() => {
    getMemo();
  }, [memoId]);

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
        <Footer />
      </div>
    </div>
  );
};

export default list;
