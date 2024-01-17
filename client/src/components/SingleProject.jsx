import {  useLoaderData, useNavigate, useActionData} from "react-router-dom"
import { Form } from "react-router-dom"
import { getUserId } from "../../utils/helpers/common"
import { useState } from "react"


export default function SingleProject(){
  const res = useActionData()
  const project = useLoaderData()
  const navigate = useNavigate()
  const {title, description, id, comments} = project
  console.log(res)
  
  const [formData, setFormData] = useState({
    text: "",
    project: id
    
    
  })
  
  console.log(formData)
  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }


  return (
    <><section className="project">
    <h1>All Projects</h1>

    <p>{title} <br/> {description}</p>
    <p>comments:
              {comments.map(comment => (
                <li key={comment.id}>
                  <p>{comment.text}</p> 
                  </li>
              ))}</p>
    <button type='button' className='btn btn-primary btn-sm'
            style={{ marginTop: '5px' }}
            onClick={() => navigate(`/projects/${id}/edit/`)}>
              Edit Project
              </button>
              <Form method='POST'>
                <label hidden htmlFor="text">Comment</label>
                <textarea name="text" placeholder="Let them know what you think" onChange={handleChange} value={formData.text}></textarea>
            <button type='submit' className='btn btn-primary btn-sm' style={{ marginTop: '5px' }} onClick={() => navigate(`/auth/profile/${id}`)}  >Post comment</button>
            {res && <p className='danger'>{res.data.message}</p>}
          </Form>
              {/* <Form method='POST'>
            <button type='submit' className='btn btn-primary btn-sm' style={{ marginTop: '5px' }} onClick={() => navigate(`/auth/profile/${getUserId()}`)}>Delete Project</button>
          </Form> */}
  </section>
  
  </>
  )
}