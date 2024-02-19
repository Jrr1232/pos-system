import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ReactDOM from 'react-dom/client'
import React from 'react'
import App from './App.jsx'
import './index.css'
import './App.css'; 
import Home from './pages/Home';
import Logout from './pages/Logout.jsx'
import Wigs from './pages/Wigs-Login.jsx'
import Hair from './pages/Hair-Login.jsx'
import Haircheckout from './pages/Hair-Checkout.jsx'
import WigCheckout from './pages/Wig-Checkout.jsx'


// Define the accessible routes, and which components respond to which URL
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
     {
      index:true,
      element:<Home/>

     },
    {
      path: '/wigs',
      element: <Wigs/>,
    },
    {
      path: '/hair',
      element: <Hair/>,
    },
    {
      path: '/services',
      element: <Haircheckout/>,
    },
    {
      path: '/services01',
      element: <WigCheckout/>,
    },
    {
      path: '/logout',
      element: <Logout/>,
    }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </React.StrictMode>
);