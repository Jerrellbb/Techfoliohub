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
import Login from "./components/Login.jsx"
//loaders
import { getAllProjects, getSingleProject, getProfile } from "../utils/loaders.js"

//actions
import { loginUser } from "../utils/actions/auth.js"


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,


    children: [
      {
        path: "/home",
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
        loader: async ({ params }) => getSingleProject(params.id)
      },
      {
        path: "/auth/:id",
        element: <UserProfile/>,
        loader: async ({ params }) => getProfile(params.id)
      },
      {
        path:"/auth/login",
        element: <Login/>,
        action: async ({ request }) => loginUser(request)
      }
      
    ]
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(

  <RouterProvider router={router} />

)
