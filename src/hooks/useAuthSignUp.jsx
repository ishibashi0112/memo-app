import { singUpAuth } from "../firebase/firebaseAuth";

export const useAuthSignUp = () => {
  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const email = data.get("email");
    const password = data.get("password");
    singUpAuth(email, password);
  };
  return { handleSubmit };
};
