import React, { useCallback, useEffect, useState } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import Lists from "../../../components/Lists";
import { doc, getDoc, setDoc, Timestamp, deleteDoc } from "firebase/firestore";
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

  const handleClickDelete = async () => {
    await deleteDoc(doc(db, "memos", memoId));
    console.log("削除しました");
  };

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

        <div className="flex flex-1  ">
          <Lists />
          <div className="w-2/3 border rounded-xl m-2.5">
            <div className="text-center">
              <button
                className={
                  "border font-bold px-6 py-2 rounded-xl mx-8  my-6 hover:text-blue-500 "
                }
                onClick={handleClickUpdate}
              >
                更新
              </button>
              <button
                className={
                  "border font-bold px-6 py-2 rounded-xl mx-8 my-6 hover:text-blue-500 "
                }
                onClick={handleClickDelete}
              >
                削除
              </button>
            </div>

            <textarea
              type="text"
              value={text}
              className="block w-3/4 h-4/5 border-2 rounded-xl mx-auto "
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
