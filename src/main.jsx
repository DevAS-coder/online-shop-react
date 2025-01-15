import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Layout from './components/other/Layout';
import Category from './components/Body/Category';
import App from './App';
import Productpage from './components/Body/Productpage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout/>,
    children: [
      {index:true, element:<App/>},
      {path:'category/:category',element:<Category/>},
      {path:'product/:id',element:<Productpage/>}
    ]
  },
  
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);