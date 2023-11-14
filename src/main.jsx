import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./views/App";
import Login from "./views/Login";
import { SignUp } from "./views/SignUp";
import { DataContextProvider } from "./context/DataContext";
import Resetpassword from "./views/ResetPassword";
import Report from "./views/Report";
import NotFound from "./views/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <SignUp />,
    errorElement: <NotFound />,
  },
  {
    path: "/today",
    element: (
      <DataContextProvider>
        <App />
      </DataContextProvider>
    ),
    errorElement: <NotFound />,
  },
  {
    path: "/login",
    element: <Login />,
    errorElement: <NotFound />,
  },
  {
    path: "/reset-password",
    element: <Resetpassword />,
    errorElement: <NotFound />,
  },
  {
    path: "/performance",
    element: <Report />,
    errorElement: <NotFound />,
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
