import React, { useCallback, useEffect, useState } from "react";
import useSWR from "swr";

export default function Form() {
  const [text, setText] = useState("");
  const { data, mutate } = useSWR("foo", { fallbackData: [] });

  const handleChange = useCallback((e) => {
    setText(e.target.value);
  }, []);

  useEffect(() => {
    return () => {
      console.log(text);
      mutate([...data, text]);
    };
  }, []);

  return (
    <div className="w-2/3">
      <input
        type="text"
        value={text}
        onChange={handleChange}
        className="w-2/3 h-3/6 border-2"
      />
    </div>
  );
}
