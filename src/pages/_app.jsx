import React from "react";
import { Toaster } from "react-hot-toast";
import "tailwindcss/tailwind.css";
import { useAuthCurrentCheck } from "../hooks/useAuthCurrentCheck";

const MyApp = ({ Component, pageProps }) => {
  useAuthCurrentCheck();
  return (
    <div>
      <Toaster />
      <Component {...pageProps} />
    </div>
  );
};

export default MyApp;
