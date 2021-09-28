import React from "react";
import "tailwindcss/tailwind.css";

function MyApp({ Component, pageProps }) {
  // const [memos,setMemos] = useState([]);
  // const [text, setText] = useState("");

  // const handleChange = (e) => {
  //   setText(e.target.value);
  // };

  return <Component {...pageProps} />;
}

export default MyApp;
