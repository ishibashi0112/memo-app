import { useCallback, useEffect, useState } from "react";
import { useRouter } from "next/router";
import {
  deleteMemo,
  getMemo,
  newMemo,
  updateMemo,
} from "../firebase/firestore";
import toast from "react-hot-toast";

const PromiseToast = async (promise, success) => {
  const data = await toast.promise(promise, {
    loading: "Loading",
    success: success,
    error: "正常に終了しませんでした。",
  });
  return data;
};

export const useHandleMemo = () => {
  const [text, setText] = useState("");
  const [loadong, setloading] = useState(false);
  const router = useRouter();
  const memoId = router.query.id;

  const handleChange = useCallback((e) => {
    setText(e.target.value);
  }, []);

  const handleSubmit = useCallback(async () => {
    if (!text || !text.match(/\S/g)) {
      toast.error("未入力です", { duration: 700 });
      return;
    }
    setloading(true);
    const newMemoId = await PromiseToast(newMemo(text), "保存しました");
    router.push(`/list/${newMemoId}`);
    setloading(false);
  }, [text]);

  const handleClickUpdate = useCallback(async () => {
    if (!text || !text.match(/\S/g)) {
      await PromiseToast(deleteMemo(memoId), "削除しました");
      router.push("/");
      return;
    }
    await PromiseToast(updateMemo(text, memoId), "更新しました");
  }, [text]);

  const handleClickDelete = useCallback(async () => {
    setloading(true);
    await PromiseToast(deleteMemo(memoId), "削除しました");
    router.push("/");
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
