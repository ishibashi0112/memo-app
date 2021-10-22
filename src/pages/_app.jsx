import { useRouter } from "next/router";
import React, { useEffect } from "react";
import "tailwindcss/tailwind.css";
import { auth } from "../firebase/firebase";

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (!user) {
        router.replace("/auth/signIn");
      }
    });
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;
