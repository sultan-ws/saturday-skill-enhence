import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import About from './About';
import Gallery from './Gallery';
import Contact from './Contact';

const root = ReactDOM.createRoot(document.getElementById('root'));
const router = createBrowserRouter(
  [
    {
      path:"/",
      element:<App/>
    },
    {
      path:"/about",
      element:<About/>
    },
    {
      path:"/gallery",
      element:<Gallery/>
    },
    {
      path:"/contact",
      element:<Contact/>
    },
  ]
)
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();



