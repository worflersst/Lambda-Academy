import { useEffect } from "react";
import "./App.css";
import { useNavigate, Outlet } from "react-router-dom";
import { Link } from "react-router-dom";

function App() {
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("access_token")) {
      navigate("/me");
    } else {
      navigate("/sign_up");
    }
  }, [navigate]);

  return (
    <div>
      <Link to={"/sign_up"}>sign_up </Link>
      <br />
      <Link to={"/login"}>login </Link>
      <br />
      <Link to={"/me"}>me </Link>
      <Outlet />
    </div>
  );
}

export default App;


// okGolastWork@gmail.com
// imBetter