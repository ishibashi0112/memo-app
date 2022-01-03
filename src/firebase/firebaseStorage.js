import { storage } from "./firebaseConfig";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

export const fileUpload = async (file, memoId) => {
  const storageRef = ref(storage, memoId);
  const upFile = await uploadBytes(storageRef, file);
  return upFile;
};

export const getFileData = async (memoId) => {
  try {
    const storageRef = ref(storage, memoId);
    const file = await getDownloadURL(storageRef);
    console.log(file);
    return file;
  } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode, errorMessage);
  }
};
