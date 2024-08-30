import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Main from './layouts/Main'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/home/home/Home';
import About from './pages/about/About';
import Services from './pages/services/Services';
import Contact from './pages/contact/Contact';
import DiseasePrediction from './pages/DiseasePrediction/DiseasePrediction';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      }, 
      {
        path: "/services",
        element: <Services></Services>
      },
      {
        path: "/about",
        element: <About></About>
      },
      {
        path: "/disease",
        element: <DiseasePrediction></DiseasePrediction>
      },
      {
        path: "/contacts",
        element: <Contact></Contact>

      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
