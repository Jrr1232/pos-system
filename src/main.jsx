import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ReactDOM from 'react-dom/client'
import React from 'react'
import App from './App.jsx'
import './index.css'
import './App.css'; 
import Home from './pages/Home';
import Hairservices from './pages/Hair-services.jsx';
import Wigs from './pages/Wigs-Login.jsx'
import Hair from './pages/Hair-Login.jsx'




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
      path: '/Wigs',
      element: <Wigs/>,
    },
    {
      path: '/Hair',
      element: <Hair/>,
    },
    {
      path: '/Services',
      element: <Hairservices/>,
    },
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