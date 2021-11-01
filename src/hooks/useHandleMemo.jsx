import { useCallback, useEffect, useState } from "react";
import { useRouter } from "next/router";
import {
  deleteMemo,
  getMemo,
  newMemo,
  updateMemo,
} from "../firebase/firestore";
import toast from "react-hot-toast";

export const useHandleMemo = () => {
  const [text, setText] = useState("");
  const [loadong, setloading] = useState(false);
  const router = useRouter();
  const memoId = router.query.id;

  const handleChange = useCallback((e) => {
    setText(e.target.value);
  }, []);

  // const handleSubmit = useCallback(async () => {
  //   setloading(true);
  //   const newMemoId = await newMemo(text);
  //   router.push(`/list/${newMemoId}`);
  //   toast.success("保存しました");
  //   setloading(false);
  // }, [text]);

  const handleSubmit = useCallback(async () => {
    setloading(true);
    await toast.promise(newMemo(text), {
      loading: "Loading",
      success: "Got the data",
      error: "Error when fetching",
    });

    router.push(`/`);
    // toast.success("保存しました");
    setloading(false);
  }, [text]);

  const handleClickUpdate = useCallback(async () => {
    updateMemo(text, memoId);
    toast.success("更新しました");
  }, [text]);

  const handleClickDelete = useCallback(async () => {
    setloading(true);
    deleteMemo(memoId);
    router.push("/");
    toast.success("削除しました");
    setloading(false);
  }, [memoId]);

  const memoLoading = async () => {
    const memoData = await getMemo(memoId);
    setText(memoData?.body);
  };

  useEffect(() => {
    memoLoading();
  }, [memoId]);

  return {
    text,
    router,
    loadong,
    handleChange,
    handleSubmit,
    handleClickUpdate,
    handleClickDelete,
  };
};
