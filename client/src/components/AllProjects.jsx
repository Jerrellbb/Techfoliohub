import  { useState } from "react"
import { useLoaderData, Link } from "react-router-dom"

export default function AllProjects() {
  const allProjects = useLoaderData()
  const [search, setSearch] = useState('')

  
  const filteredProjects = allProjects.filter((project) => {
    const projectSkills = project.skills || [] 

    
    const skillsMatch = projectSkills.some(skill => skill.name.toLowerCase().includes(search.toLowerCase()))
    return skillsMatch
  })

  const handleSearchChange = (e) => {
    setSearch(e.target.value)
  }

  return (
    <div>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search by skills"
          value={search}
          onChange={handleSearchChange}
        />
        <h1 className="">All Projects</h1>
      </div>

      <div className="container-grid">
        <ul className="project-list">
          {filteredProjects.map((project) => {
            const {
              id,
              title,
              image,
              owner_username,
              owner_image,
            } = project

            return (
              <li key={id} className="project-col">
                <Link to={`/projects/${id}`} className="project-link">
                  <div className="project-card">
                    <img src={image} alt={title} className="project-image" />
                    <p className="project-title">{title}</p>
                    <div className="owner-info">
                      <img
                        src={owner_image}
                        alt={owner_username}
                        className="owner-image"
                      />
                      <p>{owner_username}</p>
                    </div>
                  </div>
                </Link>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}
