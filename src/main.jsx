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

const router = createBrowserRouter([
  {
    path: "/",
   Component:Root,
   children:[
    {
      index:true,
      loader:()=>fetch('../public/Toydata.json'),
      Component:Home,
    },
    {
      path:'/all items',
      loader:()=>fetch('../public/Toydata.json'),
      Component:Allitems
    },
    {
      path:"/educational",
      Component:Educational,
    }
   ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <RouterProvider router={router} />,
  </StrictMode>,
)
