import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './components/pages/Home';
import Gallery from './components/pages/Gallery';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Login from './components/pages/Login';
import GlobalData from './components/context/GlobalData';

const root = ReactDOM.createRoot(document.getElementById('root'));

const routes = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path='/' element={<Layout />}>
        <Route path='' element={<Home />} />
        <Route path='gallery' element={<Gallery />} />
        <Route path='about' element={<About />} />
        <Route path='contact' element={<Contact />} />
      </Route>
      <Route path='/login' element={<Login />} />
    </>
  )
);

root.render(
  <React.StrictMode>
    <GlobalData>
    <RouterProvider router={routes} />
    </GlobalData>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
