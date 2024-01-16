import {  useLoaderData, useNavigate} from "react-router-dom"

export default function SingleProject(){

  const project = useLoaderData()
  const navigate = useNavigate()
  const {title, description, id} = project
  console.log(id)
  return (
    <section className="project">
    <h1>All Projects</h1>

    <p>{title} <br/> {description}</p>
    <button type='button' className='btn btn-primary btn-sm'
            style={{ marginTop: '5px' }}
            onClick={() => navigate(`/projects/${id}/edit/`)}>
              Edit Project
              </button>
    
  </section>
  )
}