import { useLoaderData} from "react-router-dom"

export default function AllProjects(){

  const projects = useLoaderData()
  
  
  return (
    <section className="project">
    <h1>All Projects</h1>
    <ul>
      {projects.map(project => (
        <li key={project.id}>
          <h2>{project.title}</h2>
          <p>{project.description}</p>
          <p>Skills:
              {project.skills.map(skill => (
                <span key={skill.id}>{skill.name} </span>
              ))}
            </p>
        </li>
      ))}
    </ul>
  </section>
  )
}