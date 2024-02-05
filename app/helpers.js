import { useState } from "react";
const changeTypePassword = () => {
  const [typePassword, setTypePassword] = useState("password");
  if (string === "password") {
    setTypePassword("text");
  } else {
    setTypePassword("password");
  }
};
export { changeTypePassword };
