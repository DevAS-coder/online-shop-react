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
import Aboutus from './components/Body/Aboutus';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout/>,
    
    children: [
      {index:true, element:<App/>,loader: () => {document.title = 'Online Shop'}},
      {path:'category/:category',element:<Category/>,loader:({params}) => {const categoryName = params.category;document.title = `${categoryName} - Category`}},
      {path:'product/:id',element:<Productpage/>},
      {path:'cart',element:<Cart/>,loader: () => {document.title = 'Cart'}},
      {path:'about-us',element:<Aboutus/>,loader: () => {document.title = 'About Us'}}
    ]
  },
  
],
// {
//   basename: '/projects/online-shop-react',
// }
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Context>
      <RouterProvider router={router} />
    </Context>
  </React.StrictMode>
);