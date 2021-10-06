import React, { useCallback, useEffect, useState } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import Lists from "../../../components/Lists";
import { doc, getDoc, setDoc, Timestamp } from "firebase/firestore";
import { db } from "../../../firebase";

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
    }
  };

  const handleClickUpdate = async () => {
    const datetime = Timestamp.fromDate(new Date());
    const memoRef = doc(db, "memos", memoId);
    await setDoc(memoRef, {
      body: text,
      datetime,
    });
  };

  const handleChange = useCallback((e) => {
    setText(e.target.value);
  }, []);

  useEffect(() => {
    getMemo();
  }, [memoId]);

  return (
    <div>
      <Head>
        <title>a</title>
      </Head>
      <div className="min-h-screen w-full flex flex-col">
        <Header />

        <div className="flex flex-1 ">
          <Lists />
          <div className="w-2/3">
            <button
              className={
                "block border max-w-sm p-2 rounded-xl m-auto my-6 hover:text-blue-500 "
              }
              onClick={handleClickUpdate}
            >
              上書き
            </button>
            <textarea
              type="text"
              value={text}
              className="w-full h-4/5 border-2 rounded-xl"
              onChange={handleChange}
            />
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default list;
