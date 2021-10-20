import React, { useCallback, useState } from "react";
import { useRouter } from "next/router";
import {
  collection,
  addDoc,
  Timestamp,
  doc,
  getDoc,
  setDoc,
  deleteDoc,
} from "firebase/firestore";
import { db } from "../firebase/firebase";
import { auth } from "../firebase/firebase";

const Form = () => {
  const [text, setText] = useState("");
  const router = useRouter();

  const handleChange = useCallback((e) => {
    setText(e.target.value);
  }, []);

  const handleSubmit = async () => {
    const datetime = Timestamp.fromDate(new Date());
    await addDoc(collection(db, "memos"), {
      body: text,
      datetime,
      uid: auth.currentUser.uid,
    });
  };

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

  const handleClickDelete = async () => {
    await deleteDoc(doc(db, "memos", memoId));
    console.log("削除しました");
  };

  return (
    <div className="h-full w-2/3 border rounded-xl m-2.5">
      {router.pathname === "/notes" ? (
        <div className="text-center">
          <button
            className={
              "border font-bold px-6 py-2 rounded-xl mx-8  my-6 hover:text-blue-500 "
            }
            onClick={handleSubmit}
          >
            保存
          </button>
        </div>
      ) : (
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
      )}

      <textarea
        type="text"
        value={text}
        onChange={handleChange}
        className="block w-3/4 h-4/5 border-2 rounded-xl mx-auto"
      />
    </div>
  );
};

export default Form;
