import { FC, useContext, useState } from "react";
import { Context } from "../../main";

const Sign_upForm: FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const { store } = useContext(Context);
  return (
    <div>
      <input
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        type="text"
        placeholder="email"
      />
      <input
        onChange={(e) => setPassword(e.target.value)}
        value={password}
        type="text"
        placeholder="password"
      />
      <button
        onClick={() => {
          store.sign_up(email, password);
        }}
      >
        Registr
      </button>
    </div>
  );
};

export default Sign_upForm;
