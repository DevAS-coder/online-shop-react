import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Layout from './components/other/Layout';
import Category from './components/Body/Category';
import App from './App';
import Productpage from './components/Body/Productpage';
import { Context } from './Context/Context';
import Cart from './components/Body/Cart';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout/>,
    children: [
      {index:true, element:<App/>},
      {path:'category/:category',element:<Category/>},
      {path:'product/:id',element:<Productpage/>},
      {path:'cart',element:<Cart/>}
    ]
  },
  
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Context>
      <RouterProvider router={router} />
    </Context>
  </React.StrictMode>
);