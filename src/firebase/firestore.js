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
  console.log("foo");
  try {
    const userId = await auth.currentUser.uid;
    console.log(userId);
    const memosRef = collection(db, "memos");
    const q = query(
      memosRef,
      where("uid", "==", userId),
      orderBy("datetime", "desc")
    );
    const res = await getDocs(q);
    const resArray = res.docs;
    console.log(resArray);
    const Allmemos = resArray.map((doc) => ({
      id: doc.id,
      body: doc.data().body,
      datetime: doc.data().datetime,
    }));
    console.log(Allmemos);

    return Allmemos;
  } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode, errorMessage);
  }
};
