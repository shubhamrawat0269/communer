import { auth } from "../firebase/firebase";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";

export const doCreateUserWithGmailAndPassword = async (email, password) => {
  return createUserWithEmailAndPassword(auth, email, passowrd);
};

export const doSignInWithEmailAndPassword = (email, password) => {
  return signInWithEmailAndPassword(auth, email, password);
};

export const doSignInWithGoogle = async () => {
  const provider = new GoogleAuthProvider();
  const result = await signInWithPopup(auth, provider);

  return result;
};

export const doSignOut = () => auth.signOut();
