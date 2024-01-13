import { useLoaderData} from "react-router-dom"

export default function UserProfile(){

  const profile = useLoaderData()
  
  const {username, email} = profile
  return (
    <section className="project">
    <h1>All Projects</h1>
    <p>{username} <br/> {email}</p>
    
  </section>
  )
}