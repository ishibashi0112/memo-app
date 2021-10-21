import React, { useCallback, useEffect, useState } from "react";
import { useRouter } from "next/router";
import {
  deleteMemo,
  getMemo,
  newMemo,
  updateMemo,
} from "../firebase/firestore";

const Form = () => {
  const [text, setText] = useState("");
  const router = useRouter();
  const memoId = router.query.id;

  const handleChange = useCallback((e) => {
    setText(e.target.value);
  }, []);

  const handleSubmit = async () => {
    newMemo(text);
  };

  const handleClickUpdate = async () => {
    updateMemo(text, memoId);
  };

  const handleClickDelete = async () => {
    deleteMemo(memoId);
  };

  const memoLoading = async () => {
    const memoData = await getMemo(memoId);
    setText(memoData?.body);
  };

  useEffect(() => {
    memoLoading();
  }, [memoId]);

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
