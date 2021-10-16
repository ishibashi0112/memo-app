import React, { useEffect } from "react";
import "tailwindcss/tailwind.css";
import { auth } from "../firebase/firebase";

function MyApp({ Component, pageProps }) {
  const user = auth.currentUser;

  // useEffect(() => {
  //   console.log(user);
  //   if (!user) {
  //     router.replace("/auth/signIn");
  //   }
  // }, []);

  return <Component {...pageProps} />;
}

export default MyApp;
