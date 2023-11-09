import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './index.css'
import App from './views/App'
import Login from './views/Login'
import { SignUp } from './views/SignUp'
import { DataContextProvider } from "./context/DataContext";
import Resetpassword from './views/ResetPassword'


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />
  },
  {
    path: '/signup',
    element: <SignUp/>
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/reset-password',
    element: <Resetpassword />
  },

])
ReactDOM.createRoot(document.getElementById("root")).render(
  <DataContextProvider>
    <RouterProvider router={router} />
  </DataContextProvider>
);
