import { useLoaderData} from "react-router-dom"

export default function AllProjects(){

  const projects = useLoaderData()
  
  // const {title, description} = projects
  return (
    <section className="homescreen">
    <h1>All Projects</h1>
    <ul>
      {projects.map(project => (
        <li key={project.id}>
          <h2>{project.title}</h2>
          <p>{project.description}</p>
          {/* Add more project details as needed */}
        </li>
      ))}
    </ul>
  </section>
  )
}