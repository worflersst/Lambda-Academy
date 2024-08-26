import { useEffect, useContext } from "react";

import { useNavigate } from "react-router-dom";
import { Context } from "../../main";

const MeLol = () => {
  const { store } = useContext(Context);
  const navigate = useNavigate();

  useEffect(() => {
    const verifyAuth = async () => {
      try {
        await store.checkAuth();
      } catch (error) {
        console.error("Authentication failed", error);
        navigate("/");
      }
    };

    verifyAuth();
  }, [store, navigate]);

  return <div>MeLol</div>;
};

export default MeLol;
