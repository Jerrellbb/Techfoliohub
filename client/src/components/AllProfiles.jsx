import { useLoaderData} from "react-router-dom"

export default function AllProfiles(){
  const users = useLoaderData()
  console.log(users)
 
  return (
    <section className="user">
    <h1>All users</h1>
    <ul>
      {users.map((user) => (
        <li key={user.id}>
          <image src={user.image}/>
          <h2>{user.username}</h2>
          <p>{user.first_name}</p>
          <p>{user.last_name}</p>
          <p>{user.linkedin}</p>
          <p>{user.github}</p>
          <p>{user.bio}</p>
          
        </li>
      ))}
    </ul>
  </section>
  )
}
