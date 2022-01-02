import { onAuthStateChanged } from "@firebase/auth";
import {
  collection,
  getDocs,
  query,
  orderBy,
  where,
  addDoc,
  Timestamp,
  deleteDoc,
  doc,
  setDoc,
  getDoc,
} from "firebase/firestore";
import { db } from "./firebaseConfig";
import { auth, storage } from "./firebaseConfig";
import { useDateChange } from "../hooks/useDateChange";
import { ref, uploadBytes } from "firebase/storage";

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
    datetime: useDateChange(doc.data().datetime.toDate()),
  }));
  return memoArray;
};

export const getAllMemos = async () => {
  onAuthStateChanged(auth, async (user) => {
    if (user) {
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
    }
  });
};

export const newMemo = async (text, file) => {
  const datetime = Timestamp.fromDate(new Date());
  const memoData = await addDoc(collection(db, "memos"), {
    body: text,
    datetime,
    uid: auth.currentUser.uid,
  });
  const newMemoId = memoData.id;

  if (file) {
    const storageRef = ref(storage, newMemoId);
    uploadBytes(storageRef, file);
  }

  return newMemoId;
};

export const deleteMemo = async (memoId) => {
  await deleteDoc(doc(db, "memos", memoId));
};

export const updateMemo = async (text, memoId) => {
  console.log(text, memoId);
  const datetime = Timestamp.fromDate(new Date());
  const memoRef = doc(db, "memos", memoId);
  await setDoc(memoRef, {
    body: text,
    datetime,
    uid: auth.currentUser.uid,
  });
};

export const getMemo = async (memoId) => {
  if (memoId) {
    const res = doc(db, "memos", memoId);
    const data = await getDoc(res);
    const memoData = data.data();

    return memoData;
  }
};
