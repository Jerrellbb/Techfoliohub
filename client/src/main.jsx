import { createBrowserRouter, RouterProvider, } from "react-router-dom"
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

//styles
import './index.css'

//page components
import Home from './components/Home.jsx'
import AllProjects from './components/AllProjects.jsx'
import { getAllProjects } from "./utils/loaders.js"



const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,


    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/projects",
        element: <AllProjects/>,
        loader: getAllProjects
      }
      
    ]
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(

  <RouterProvider router={router} />

)
