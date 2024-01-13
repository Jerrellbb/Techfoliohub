import { useLoaderData} from "react-router-dom"

export default function SingleProject(){

  const project = useLoaderData()
  
  const {title, description} = project
  return (
    <section className="project">
    <h1>All Projects</h1>
    <p>{title} <br/> {description}</p>
    
  </section>
  )
}