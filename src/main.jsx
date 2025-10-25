import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Root from './Pages/Root.jsx';
import Home from './Component/Home.jsx';
import Allitems from './Component/Allitems.jsx';
import Educational from './Component/Educational.jsx';
import Babytoys from './Component/Babytoys.jsx';
import Playsets from './Component/Playsets.jsx';
import Login from './Component/Login.jsx';
import Register from './Component/Register.jsx';
import AuthProvider from './Povider/AuthProvider.jsx';
import ViewDetails from './Component/ViewDetails.jsx';
import PrivateRoute from './Povider/PrivateRoute.jsx';
import Profile from './Component/Profile.jsx';
import ForgetPassword from './Component/ForgetPassword.jsx';
import Error from './Component/Error.jsx';
import ContactUs from './Component/ContactUs.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: true,
        loader: () => fetch('/Toydata.json'),
        Component: Home,
      },
      {
        path: '/all items',
        loader: () => fetch('/Toydata.json'),
        Component: Allitems
      },
      {
        path: "/educational",
        loader: () => fetch('/Toydata.json'),
        Component: Educational,
      },
      {
        path: "/babytoys",
        loader: () => fetch('/Toydata.json'),
        Component: Babytoys,
      },
      {
        path: "/playsets",
        loader: () => fetch('/Toydata.json'),
        Component: Playsets
      },
      {
        path: "/login",
        Component: Login
      },
      {
        path: "/register",
        Component: Register
      },
      {
        path: "/viewDetails/:id",
        loader: () => fetch('/Toydata.json'),

        element:<PrivateRoute>
          <ViewDetails></ViewDetails>
        </PrivateRoute>
      },
      {
        path:"/profile",
        Component:Profile
      },
       {
        Path:"/contact",
        element:<ContactUs></ContactUs>
      },
      {
        path:"/forgetPassword",
        Component:ForgetPassword
      },
     
     
    ]
  },
   {
        path:"*",
        element:<Error></Error>
      }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />,

    </AuthProvider>
  </StrictMode>,
)
