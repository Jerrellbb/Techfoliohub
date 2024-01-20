import { createBrowserRouter, RouterProvider, } from "react-router-dom"
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

//styles
// import './index.css'
import './styles/main.scss'
//page components
import Home from './components/Home.jsx'
import AllProjects from './components/AllProjects.jsx'
import SingleProject from "./components/SingleProject.jsx"
import UserProfile from "./components/UserProfile.jsx"
import Login from "./components/Login.jsx"
import Register from "./components/Register.jsx"
import CreateProject from "./components/CreateProject.jsx"
import EditProject from "./components/EditProject.jsx"
import AllProfiles from "./components/AllProfiles.jsx"
import EditProfile from "./components/EditProfile.jsx"
//loaders
import { getAllProjects, getSingleProject, getProfile, getAllProfiles } from "../utils/loaders.js"

//actions
import { loginUser, registerUser } from "../utils/actions/auth.js"
import { addComment, deleteProject } from "../utils/actions/project.js"
import {editProfile} from "../utils/actions/profile.js"


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
        loader: async ({ params }) => getSingleProject(params.id),
        action: async ({ request }) => addComment(request)
      },
      {
        path: "/auth/profile/:id",
        element: <UserProfile/>,
        loader: async ({ params }) => getProfile(params.id)
      },
      {
        path:"/auth/login",
        element: <Login/>,
        action: async ({ request }) => loginUser(request)
      },
      {
        path:"/auth/register",
        element: <Register/>,
        action: async ({ request }) => registerUser(request)
      },
      {
      path:"/projects/create",
      element: <CreateProject/>,
      
      },
      {
        path: "/projects/:id/edit",
        element: <EditProject/>,
        action: async ({ request }) => deleteProject(request),
        loader: async ({ params }) => getSingleProject(params.id)
      },
      {
        path:"/developers",
        element: <AllProfiles/>,
        loader: async ({ params }) => getAllProfiles(params)
      },
      {
        path:"/auth/profile/:id/edit",
        element: <EditProfile/>,
        action: async ({ request }) => editProfile(request),
        loader: async ({ params }) => getProfile(params.id)
      }
      
    ]
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(

  <RouterProvider router={router} />

)
