import {
  collection,
  getDocs,
  query,
  orderBy,
  where,
  onSnapshot,
} from "firebase/firestore";
import { db } from "../firebase/firebase";
import { auth } from "../firebase/firebase";

export const memosQuery = async () => {
  const userId = await auth.currentUser.uid;
  const memosRef = collection(db, "memos");
  const q = query(
    memosRef,
    where("uid", "==", userId),
    orderBy("datetime", "desc")
  );
  return q;
};

export const memoMaps = async (resArray) => {
  const memoArray = await resArray.map((doc) => ({
    id: doc.id,
    body: doc.data().body,
    datetime: doc.data().datetime,
  }));
  return memoArray;
};

export const getAllMemos = async () => {
  try {
    const res = await getDocs(await memosQuery());
    const resArray = res.docs;
    const AllMemos = memoMaps(resArray);
    return AllMemos;
  } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode, errorMessage);
  }
};
