
import { useLoaderData } from "react-router-dom"


export default function AllProfiles() {
  const users = useLoaderData()

  return (
    <section className="user-grid">
      <h1>All users</h1>
      <ul className="grid-container">
        {users.map((user) => (
          <li key={user.id} className="grid-item">
            <img src={user.image} alt={user.username} />
            <div className="user-info">
              <h2>{user.username}</h2>
              <p>{user.first_name} {user.last_name}</p>
              <p>{user.bio}</p>
            </div>
            <div className="social-links">
              <a href={user.linkedin} target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
              <a href={user.github} target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
            </div>
          </li>
        ))}
      </ul>
    </section>
  )

        }
















// import { useLoaderData } from "react-router-dom"

// export default function AllProfiles(){
//   const users = useLoaderData()
//   console.log(users)
//   return (
//     <section className="user">
//     <h1>All users</h1>
//     <ul>
//       {users.map((user) => (
//         <li key={user.id}>
//           <img src={user.image}/>
//           <h2>{user.username}</h2>
//           <p>{user.first_name}</p>
//           <p>{user.last_name}</p>
          
//          <p>{user.linkedin}</p>   {/*href  */}
//           <p>{user.github}</p> {/*href */}
//           <p>{user.bio}</p>
          
//         </li>
//       ))}
//     </ul>
//   </section>
//   )
// }
