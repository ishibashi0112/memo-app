import { useRouter } from "next/router";
import { useCallback, useEffect } from "react";

export const useTextAreaFocus = (textAreaRef) => {
  const router = useRouter();
  const focusTextArea = useCallback(() => {
    textAreaRef.current.focus();
  }, []);

  useEffect(() => {
    if (router.pathname === "/notes") {
      focusTextArea();
    }
  }, []);
};
