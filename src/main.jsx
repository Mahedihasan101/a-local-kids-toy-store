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

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: true,
        loader: () => fetch('../public/Toydata.json'),
        Component: Home,
      },
      {
        path: '/all items',
        loader: () => fetch('../public/Toydata.json'),
        Component: Allitems
      },
      {
        path: "/educational",
        loader: () => fetch('../public/Toydata.json'),
        Component: Educational,
      },
      {
        path: "/babytoys",
        loader: () => fetch('../public/Toydata.json'),
        Component: Babytoys,
      },
      {
        path: "/playsets",
        loader: () => fetch('../public/Toydata.json'),
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
        loader: () => fetch('../public/Toydata.json'),

        element:<PrivateRoute>
          <ViewDetails></ViewDetails>
        </PrivateRoute>
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />,

    </AuthProvider>
  </StrictMode>,
)
