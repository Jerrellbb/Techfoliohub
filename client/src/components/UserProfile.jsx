import { getUserId } from '../../utils/helpers/common'
import { useLoaderData, useNavigate } from 'react-router-dom'

export default function UserProfile() {
  const profile = useLoaderData()
  const navigate = useNavigate()
  const { username, email, image, id, first_name, last_name, github, linkedin, bio, owned_projects } = profile

  return (

    <section className="user-profile">
      <div className="header">
        <img src={image} alt={username} className="image" />
        <h1>{username}</h1>
      </div>
      <div className="details">
        <p>
          <strong>Name:</strong> {first_name}, {last_name}
        </p>
        <p>
          <strong>Email:</strong> {email}
        </p>
        <p>
          <strong>Github:</strong> <a href={github}>{github}</a>
        </p>
        <p>
          <strong>LinkedIn:</strong> <a href={linkedin}>{linkedin}</a>
        </p>
        {bio && (
          <p>
            <strong>Bio:</strong> {bio}
          </p>
        )}
        {owned_projects.map((project) => {
          const { project_link, title, id } = project
          return <p key={id}><strong>Project Name:</strong> {title} <br /> <strong>Project Link:</strong> <a href={project_link}>View Full Project</a></p>
        })}

      </div>
      <div className="profile-btn">
        <button onClick={() => navigate('/projects/create/')}>Add Project</button>
        {getUserId() === id && (
          <button onClick={() => navigate(`/auth/profile/${id}/edit`)}>Edit Profile</button>
        )}
      </div>
    </section>
  )
}
