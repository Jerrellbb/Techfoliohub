import { useLoaderData, Link } from "react-router-dom"



export default function AllProjects() {

  const projects = useLoaderData()

  console.log(projects)
  return (
    <div className="container-grid">
      <ul className="project-list">
        {projects.map((project) => {
          const {
            id,
            comments,
            skills,
            title,
            description,
            start_date,
            end_date,
            image,
            project_link,
            owner_username,
            owner_image,
          } = project

          return (

            <li key={id} className="project-col">
              <Link to={`/projects/${id}`}>
                <img src={image} alt={title} style={{ width: "100%" }} className="project-image" />
                <p className="project-title">{title}</p>
                <div className="owner-info" style={{ maxWidth: "250px" }}>
                  <img src={owner_image} alt={owner_username} style={{ width: "50px", maxHeight: "27px", borderRadius: "50%", }} />
                  <p>{owner_username}</p>
                </div>
              </Link>
            </li>
          )
        })}
      </ul>
    </div>
    )
}


























{/* <section className="project">
<h1>All Projects</h1>
<ul>
  {projects.map(project => (
    <li key={project.id}>
      <h2>{project.title}</h2>
      <img src={project.image} style={{width:"250px"}}/>
      <p>{project.description}</p>
      <p>Skills:
          {project.skills.map(skill => (
            <span key={skill.id}>{skill.name} </span>
          ))}
        </p>
    </li>
  ))}
</ul>
</section> */}