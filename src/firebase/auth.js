import { auth } from "../firebase/firebase";
import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

export const singUpAuth = async (email, password) => {
  try {
    const user = await createUserWithEmailAndPassword(auth, email, password);
    await sendEmailVerification(auth.currentUser, null);
    console.log(user);
  } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode, errorMessage);
  }
};

export const signInAuth = async (router, email, password) => {
  try {
    const user = await signInWithEmailAndPassword(auth, email, password);
    console.log(user);
    router.push("/");
  } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode, errorMessage);
  }
};

export const signOutAuth = async () => {
  try {
    await signOut(auth);
  } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode, errorMessage);
  }
};
