import { createBrowserRouter, RouterProvider, } from "react-router-dom"
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

//styles
import './index.css'

//page components
import Home from './components/Home.jsx'
import AllProjects from './components/AllProjects.jsx'
import SingleProject from "./components/SingleProject.jsx"
import UserProfile from "./components/UserProfile.jsx"
//loaders
import { getAllProjects, getSingleProject, getProfile } from "./utils/loaders.js"


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
      },
      {
        path: "/projects/:id",
        element: <SingleProject/>,
        loader: ({ params }) => getSingleProject(params.id)
      },
      {
        path: "/auth/:id",
        element: <UserProfile/>,
        loader: ({ params }) => getProfile(params.id)
      }
      
    ]
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(

  <RouterProvider router={router} />

)
