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
    router.replace("/");
  } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode, errorMessage);
  }
};

export const signOutAuth = async (router) => {
  try {
    const user1 = await auth.currentUser;
    console.log(user1);
    await signOut(auth);
    const user2 = await auth.currentUser;
    console.log(user2);
    router.replace("/auth/signIn");
  } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode, errorMessage);
  }
};
