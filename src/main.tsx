import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"; 
import Home from './assets/Page/Home/Home.tsx';
import Payment from './assets/Page/Payment/Payment.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children:[
     {
       path:"/",
      element:<Home></Home>
      },
      {
        path:"payment",
        element:<Payment></Payment>
      }
    ]
  },
]);
createRoot(document.getElementById('root')!).render(
  <StrictMode>
     <RouterProvider router={router} />
  </StrictMode>,
)
