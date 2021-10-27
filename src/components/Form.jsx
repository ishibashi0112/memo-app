import React, { useCallback, useEffect, useState } from "react";
import { useRouter } from "next/router";
import {
  deleteMemo,
  getMemo,
  newMemo,
  updateMemo,
} from "../firebase/firestore";
import { GrUpdate } from "react-icons/gr";
import { MdDelete } from "react-icons/md";
import { MdOutlineSaveAlt } from "react-icons/md";
import toast, { Toaster } from "react-hot-toast";

const Form = () => {
  const [text, setText] = useState("");
  const router = useRouter();
  const memoId = router.query.id;

  const handleChange = useCallback((e) => {
    setText(e.target.value);
  }, []);

  const handleSubmit = async () => {
    // const newMemoId = await newMemo(text);
    // router.replace(`/list/${newMemoId}`);
    toast("保存しました");
  };

  const handleClickUpdate = async () => {
    updateMemo(text, memoId);
  };

  const handleClickDelete = async () => {
    deleteMemo(memoId);
    router.replace("/");
  };

  const memoLoading = async () => {
    const memoData = await getMemo(memoId);
    setText(memoData?.body);
  };

  useEffect(() => {
    memoLoading();
  }, [memoId]);

  return (
    <div className="h-full w-[370px]  rounded-xl mx-auto sm:border sm:w-2/3 sm:m-2.5">
      {router.pathname === "/notes" ? (
        <div className="text-center">
          <button
            className={
              "border font-bold px-6 py-2 rounded-xl mx-8  my-6 hover:text-blue-500 "
            }
            onClick={handleSubmit}
          >
            <div className="flex">
              <h1 className="my-auto mr-1">
                <MdOutlineSaveAlt />
              </h1>
              <p>Save</p>
            </div>
          </button>
        </div>
      ) : (
        <div className="mx-auto flex">
          <button
            className={
              "border font-bold px-6 py-2 rounded-xl mx-8  my-6 hover:text-blue-500 "
            }
            onClick={handleClickUpdate}
          >
            <div className="flex">
              <h1 className="my-auto mr-1">
                <GrUpdate />
              </h1>
              <p>Update</p>
            </div>
          </button>
          <button
            className={
              "border font-bold px-6 py-2 rounded-xl mx-8 my-6 hover:text-blue-500 "
            }
            onClick={handleClickDelete}
          >
            <div className="flex">
              <h1 className="my-auto mr-1">
                <MdDelete />
              </h1>
              <p>Delete</p>
            </div>
          </button>
        </div>
      )}

      <textarea
        type="text"
        value={text}
        onChange={handleChange}
        className="block w-full h-4/5  border-2 rounded-xl mx-auto sm:w-3/4 sm:h-4/5"
      />
    </div>
  );
};

export default Form;
