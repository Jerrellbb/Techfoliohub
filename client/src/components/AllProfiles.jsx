
import { useLoaderData, Link } from "react-router-dom"


export default function AllProfiles() {
  const users = useLoaderData()

  return (
    <section className="user-grid">
      <h1>All Developers</h1>
      <ul className="grid-container">
        {users.map((user) => (
          <li key={user.id} className="grid-item">
            <Link to={`/auth/profile/${user.id}/`}>
            <img src={user.image} alt={user.username} />
            <div className="user-info">
              <h2>{user.username}</h2>
              <p>{user.first_name} {user.last_name}</p>
              
            </div>
          
            </Link>
          </li>
        ))}
      </ul>
    </section>
  )

        }

