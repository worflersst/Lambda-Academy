import { createContext } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import Store from "./store/store.ts";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Sign_upForm from "./components/Sign_upForm/Sign_upForm.tsx";
import LoginForm from "./components/LoginForm/LoginForm.tsx";
import MeLol from "./components/MeLol/MeLol.tsx";

interface State {
  store: Store;
}
const store = new Store();
export const Context = createContext<State>({
  store,
});

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/sign_up",
        element: <Sign_upForm />,
      },
      {
        path: "/login",
        element: <LoginForm />,
      },
      {
        path: "/me",
        element: <MeLol />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <Context.Provider value={{ store }}>
    <RouterProvider router={router} />
  </Context.Provider>
);
