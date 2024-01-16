import { useLoaderData, useNavigate} from "react-router-dom"

export default function UserProfile(){

  const profile = useLoaderData()
  const navigate = useNavigate()
  const {username, email, image} = profile
  return (
    <section className="project">
    <h1>{username}</h1>
    <div> <img src={image}/>
    <p>{username} <br/> {email}</p>
    </div>
   
    <button onClick={() =>navigate('/projects/create/')}>add project</button>
  </section>
  )
}