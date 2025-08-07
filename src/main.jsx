import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root/Root';
import ErrorPage from './components/ErrorPage/ErrorPage';
import Home from './components/Home/Home';
import DashBoard from './components/DashBoard/DashBoard';
import Statistics from './components/Statistics/Statistics';
import GadgetDetail from './components/GadgetDetail/GadgetDetail';
  import { ToastContainer } from 'react-toastify';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>

      },
      {
        path: 'dashboard',
        element: <DashBoard></DashBoard>,
        loader:() => fetch('/products.json')
      },
      {
         path: 'gadget/:gadgetId',
        element: <GadgetDetail></GadgetDetail>,
        loader: () => fetch('/products.json')
      },
      {
        path: 'statistics',
        element: <Statistics></Statistics>
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <RouterProvider router={router} />
     <ToastContainer></ToastContainer>
  </StrictMode>,
)
