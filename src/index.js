import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Aboutus from './Aboutus';
import Menu from './Menu';
import Gallery from './Gallery';
import Feedback from './Feedback';
import Contact from './Contact';
import Booking from './Booking';
import Sign from './Sign';
import Tables from './Tables';
import Creditcard from './Creditcard';
import Randomcode from './Randomcode';
import Confirmation from './Confirmation';


import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "aboutus",
    element: <Aboutus />,
  },
  {
    path: "menu",
    element: <Menu />,
  },
  {
    path: "gallery",
    element: <Gallery />,
  },
  {
    path: "feedback",
    element: <Feedback />,
  },
  {
    path: "contact",
    element: <Contact />,
  },
  {
    path: "booking",
    element: <Booking />,
  },
  {
    path: "sign",
    element: <Sign />,
  },
  {
    path: "tables",
    element: <Tables />,
  },
  {
    path: "creditcard",
    element: <Creditcard />,
  },
  {
    path: "randomcode",
    element: <Randomcode />,
  },
  {
    path: "confirmation",
    element: <Confirmation />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
