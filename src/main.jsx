import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './index.css'
import App from './views/App'
import Login from './views/Login'
import { SignUp } from './views/SignUp'
import { DataContextProvider } from "./context/DataContext";
import Resetpassword from './views/ResetPassword'
import Report from './views/Report'


const router = createBrowserRouter([
  {
    path: '/',
    element: <SignUp />
  },
  {
    path: '/today',
    element: <DataContextProvider><App /></DataContextProvider>,
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/reset-password',
    element: <Resetpassword />
  },
  {
    path: '/performance',
    element: <Report />
  }

])
ReactDOM.createRoot(document.getElementById("root")).render(
    <RouterProvider router={router} />
);
