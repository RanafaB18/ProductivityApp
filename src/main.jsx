import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './index.css'
import App from './views/App'
import Login from './views/Login'
import Resetpassword from './views/Resetpassword'
import { SignUp } from './views/SignUp'


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />
  },
  {
    path: '/signUp',
    element: <SignUp/>
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/Reset-Password',
    element: <Resetpassword />
  },
  
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
