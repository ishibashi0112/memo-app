import { useRouter } from "next/router";
import React, { useEffect } from "react";
import "tailwindcss/tailwind.css";
import { auth } from "../firebase/firebase";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const user = auth.currentUser;

  useEffect(() => {
    return () => {
      console.log(user);
      if (!user) {
        router.replace("/auth/signIn");
      }
    };
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;
