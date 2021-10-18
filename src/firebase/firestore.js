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

export const getAllMemos = async () => {
  try {
    const userId = await auth.currentUser.uid;
    const memosRef = collection(db, "memos");
    const q = query(
      memosRef,
      where("uid", "==", userId),
      orderBy("datetime", "desc")
    );
    const res = await getDocs(q);
    const resArray = res.docs;
    const AllMemos = resArray.map((doc) => ({
      id: doc.id,
      body: doc.data().body,
      datetime: doc.data().datetime,
    }));
    return AllMemos;
  } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode, errorMessage);
  }
};

export const snapShot = async () => {
  try {
    const memosRef = collection(db, "memos");
    const userId = await auth.currentUser.uid;
    const q = query(
      memosRef,
      where("uid", "==", userId),
      orderBy("datetime", "desc")
    );
    onSnapshot(q, (querySnapshot) => {
      const docs = querySnapshot.docs;
      const AllMemos = docs.map((doc) => ({
        id: doc.id,
        body: doc.data().body,
        datetime: doc.data().datetime,
      }));
      return AllMemos;
    });
  } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode, errorMessage);
  }
};
